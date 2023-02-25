import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useNotifications } from 'reapop';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';

// Imports
import { Button } from '../Button';
import { TextInput } from '../Form';
import { ConnectButton } from '../Metamask/ConnectButton';
import Alert from '../Alert';

// Hooks
import { useUser, useAllWallets } from '../../hooks/data';
import useMarketplace from '../../hooks/useMarketplace';
import { useAuthenticate, useCreateUser, useAddWallet } from '../../hooks/mutations';

// Actions
import { closeSigninMenu } from '../../store/signinMenu/actions';

// Assets
import Back from '../../assets/images/icons/Back.png';
import IconChecked from '../../assets/images/icons/icon-checked.svg';

// Redux
import { forgotPassword } from '../../store/password/actions';
import { FORGOT_USER_SUCCESS, FORGOT_USER_FAILURE } from '../../store/password/constants';

// Styled
import {
  RootWrapper,
  LoginFormWrapper,
  TitleWrapper,
  Title,
  CloseIcon,
  SignUpWrapper,
  IndicatorContainer,
  Indicator,
  SubTitle,
  Description,
  DescriptionTwo,
  ConnectWrapper,
  ButtonContainer,
  Wrapper,
  ForgotWrapper,
  AlertWrapper,
} from './styled';

const validationSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
});
const initialValues = {
  email: '',
  password: '',
};
const validationSchemaSignup = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required()
    .label('Repeat Password'),
});
const initialValuesSignup = {
  email: '',
  password: '',
  repeatPassword: '',
};
const validationSchemaForgot = yup.object().shape({
  email: yup.string().email().required(),
});
const initialValuesForgot = {
  email: '',
};

export const SigninMenu = () => {
  const dispatch = useDispatch();
  const authenticate = useAuthenticate();
  const createUser = useCreateUser();
  const { status, account, web3 } = useMarketplace();
  const history = useHistory();
  const { notify } = useNotifications();
  const user = useUser();
  const wallets = useAllWallets();
  const addWalletMutation = useAddWallet();
  const signinMenu = useSelector((state) => state.signinMenu);
  const [loading, setLoading] = useState(false);
  const [savingWallet, setSavingWallet] = useState(false);
  const [page, setPage] = useState('login');
  const [stepTwo, setStepTwo] = useState(false);
  const [isEmailSending, setEmailSending] = useState(false);

  const handleClose = () => {
    dispatch(closeSigninMenu());
  };

  const handleLoginSubmit = useCallback(async (values) => {
    setLoading(true);
    const result = await authenticate.mutateAsync({ values, setLoading, history });
    if (result.accessToken) {
      dispatch(closeSigninMenu());
    }
  });

  const handleSignupSubmit = useCallback(async (values) => {
    setLoading(true);
    await createUser.mutateAsync({ values, setLoading, history });
    await authenticate.mutate({ values, setLoading });
    setStepTwo(true);
  });

  const handleForgotSubmit = useCallback(async (values) => {
    setLoading(true);
    const forgotResult = await dispatch(forgotPassword(values));

    if (forgotResult.type === FORGOT_USER_SUCCESS) {
      setEmailSending(true);
      setLoading(false);
    }

    if (forgotResult.type === FORGOT_USER_FAILURE) {
      notify({
        status: 'error',
        title: 'Uh oh!',
        message: 'Failed to request password reset.',
      });
      setLoading(false);
    }
  });

  const handleSignup = () => {
    setPage('signup');
  };
  const handleSignin = () => {
    setPage('login');
  };

  const handleVerifyWallet = async () => {
    setSavingWallet(true);
    const signedMessage = await web3.eth.personal.sign('I am verifying my wallet with envision.', account);
    await addWalletMutation.mutateAsync({ params: { signedMessage, walletAddress: account } });
    setSavingWallet(false);
  };

  const isWalletLinked = (walletAddress) => {
    if (wallets.data?.length > 0) {
      const matchingWallet = wallets.data.find(
        (wallet) => wallet.walletAddress.toLowerCase() === walletAddress.toLowerCase()
      );
      if (matchingWallet) return true;
    }

    return false;
  };

  const handleSkip = () => {
    setStepTwo('finish');
  };

  const handleNFT = () => {
    history.push('/nft/import');
    handleClose();
  };

  const handleExit = () => {
    history.push('/marketplace');
    handleClose();
  };

  const getLinkStep = () => {
    if (!user.isFetched) return 'LOGGED_OUT';
    if (status !== 'connected') return 'NOT_CONNECTED';
    if (!wallets.isFetched || wallets.data?.length === 0) return 'NOT_VERIFIED';
    if (!isWalletLinked(account)) return 'INVALID_WALLET';
    return 'READY';
  };

  const linkStep = getLinkStep();

  return (
    <Wrapper touched={signinMenu.touched} open={signinMenu.menuOpen}>
      <RootWrapper touched={signinMenu.touched} open={signinMenu.menuOpen}>
        {page === 'signup' && (
          <>
            <TitleWrapper>
              <Title>Sign up</Title>
              <CloseIcon src={Back} onClick={handleClose} />
            </TitleWrapper>
            <LoginFormWrapper>
              <IndicatorContainer>
                <Indicator className="left" index />
                <Indicator index={stepTwo} />
              </IndicatorContainer>
              {!stepTwo && (
                <>
                  <Formik
                    initialValues={initialValuesSignup}
                    validationSchema={validationSchemaSignup}
                    onSubmit={handleSignupSubmit}
                  >
                    <Form style={{ maxWidth: 480, textAlign: 'start' }}>
                      <Field
                        name="email"
                        type="email"
                        label="Email"
                        placeholder="you@email.com"
                        component={TextInput}
                      />
                      <Field name="password" type="password" label="Password" component={TextInput} />
                      <Field name="repeatPassword" type="password" label="Repeat Password" component={TextInput} />
                      <Button type="submit" color={loading ? '' : 'red'} disabled={loading}>
                        {loading ? 'Loading....' : 'Create Account'}
                      </Button>
                    </Form>
                  </Formik>
                  <SignUpWrapper>
                    <div>
                      Already have an account?{' '}
                      <button type="button" className="bold" onClick={handleSignin}>
                        Log in here
                      </button>
                    </div>
                  </SignUpWrapper>
                </>
              )}
              {(stepTwo || stepTwo === 'finish') && (
                <>
                  <ConnectWrapper>
                    {(linkStep === 'NOT_CONNECTED' || linkStep === 'LOGGED_OUT') && stepTwo !== 'finish' && (
                      <>
                        <SubTitle>Connect Metamask</SubTitle>
                        <Description>
                          Link your Metamask wallet to your envision account to purchase limited edition NFT artworks
                          and also view NFTs purchased from other platforms. No transaction will take place without your
                          express permission.
                        </Description>
                        <ButtonContainer>
                          <Button type="button" className="skip" onClick={handleSkip}>
                            Skip
                          </Button>
                          <ConnectButton />
                        </ButtonContainer>
                      </>
                    )}
                    {linkStep === 'NOT_VERIFIED' && stepTwo !== 'finish' && (
                      <>
                        <SubTitle>Please sign the message in the MetaMask extension to continue</SubTitle>
                        <Description>
                          envision uses this signature to verify that you’re the owner of this Ethereum address.
                        </Description>
                        <ButtonContainer>
                          <Button type="button" className="skip" onClick={handleSkip}>
                            Skip
                          </Button>
                          <Button onClick={handleVerifyWallet} disabled={savingWallet} pending={savingWallet} primary>
                            Verify Your Wallet
                          </Button>
                        </ButtonContainer>
                      </>
                    )}
                    {linkStep === 'INVALID_WALLET' && stepTwo !== 'finish' && (
                      <>
                        <SubTitle>Verification failed!</SubTitle>
                        <Description>
                          Please connect with the wallet that you previously verified with envision.
                        </Description>
                        <ButtonContainer>
                          <Button type="button" className="skip" onClick={handleSkip}>
                            Skip
                          </Button>
                          <Button onClick={handleVerifyWallet} disabled={savingWallet} pending={savingWallet} primary>
                            Verify Your Wallet
                          </Button>
                        </ButtonContainer>
                      </>
                    )}
                    {linkStep === 'READY' && stepTwo !== 'finish' && (
                      <>
                        <SubTitle>Wallet connected</SubTitle>
                        <Description>
                          Your wallet has been successfully connected with envision. View ‘Your NFTs’ collection and
                          start showcasing your collected artworks.
                        </Description>
                        <Button type="button" color="red" onClick={handleExit}>
                          Start collecting
                        </Button>
                        <ButtonContainer>
                          <Button type="button" className="skip" onClick={handleClose}>
                            Close
                          </Button>
                          <Button onClick={handleNFT} disabled={savingWallet} pending={savingWallet} primary>
                            View your NFTs
                          </Button>
                        </ButtonContainer>
                      </>
                    )}
                    {stepTwo === 'finish' && (
                      <>
                        <SubTitle>Account created successfully</SubTitle>
                        <Description>
                          Welcome to envision. Start collecting limited edition NFTs or subscribe to access curated
                          collections to exhibit on a Digital Canvas or any smart TV
                        </Description>
                        <Button type="button" color="red" onClick={handleExit}>
                          Start collecting
                        </Button>
                      </>
                    )}
                  </ConnectWrapper>
                </>
              )}
            </LoginFormWrapper>
          </>
        )}
        {page === 'login' && (
          <>
            <TitleWrapper>
              <Title>Log In</Title>
              <CloseIcon src={Back} onClick={handleClose} />
            </TitleWrapper>
            <LoginFormWrapper>
              <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleLoginSubmit}>
                <Form style={{ maxWidth: 480, textAlign: 'start' }}>
                  <Field name="email" type="email" label="Email" placeholder="you@email.com" component={TextInput} />
                  <Field name="password" type="password" label="Password" component={TextInput} />
                  <ForgotWrapper>
                    <button type="button" onClick={() => setPage('forgot')}>
                      Forgot password?
                    </button>
                  </ForgotWrapper>
                  <Button type="submit" color={loading ? '' : 'red'} disabled={loading}>
                    {loading ? 'Loading....' : 'Sign In'}
                  </Button>
                </Form>
              </Formik>
              <SignUpWrapper>
                <div>
                  Dont have an account?{' '}
                  <button type="button" className="bold" onClick={handleSignup}>
                    Sign up here
                  </button>
                </div>
              </SignUpWrapper>
            </LoginFormWrapper>
          </>
        )}
        {page === 'forgot' && (
          <>
            <TitleWrapper>
              <Title>Forgot password?</Title>
              <CloseIcon src={Back} onClick={handleClose} />
            </TitleWrapper>
            <LoginFormWrapper>
              <DescriptionTwo>
                Don’t worry happens to the best of us. Just enter your email below and we’ll send you instructions to
                reset your password
              </DescriptionTwo>
              <Formik
                initialValues={initialValuesForgot}
                validationSchema={validationSchemaForgot}
                onSubmit={handleForgotSubmit}
              >
                <Form style={{ maxWidth: 480, textAlign: 'start' }}>
                  <Field name="email" type="email" label="Email" placeholder="you@email.com" component={TextInput} />
                  <ButtonContainer>
                    <Button type="button" className="skip" onClick={() => setPage('login')}>
                      Back
                    </Button>
                    <Button type="submit" color={loading ? '' : 'red'} disabled={isEmailSending}>
                      {loading ? 'Loading....' : 'Send Reset Instructions'}
                    </Button>
                  </ButtonContainer>
                  {isEmailSending && (
                    <AlertWrapper>
                      <Alert
                        width="100%"
                        bgColor="#009D3F"
                        borderColor="#009D3F"
                        textColor="#ffffff"
                        icon={IconChecked}
                        text="Email with instructions has been sent"
                      />
                    </AlertWrapper>
                  )}
                </Form>
              </Formik>
            </LoginFormWrapper>
          </>
        )}
      </RootWrapper>
    </Wrapper>
  );
};
