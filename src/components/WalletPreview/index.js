import React from 'react';
import PropTypes from 'prop-types';
import { CloudDownload } from '@emotion-icons/ionicons-outline';

// Components
import { Loader } from '../Loader';
import { AspectRatioImage } from '../AspectRatioImage';
import { AspectRatioBox } from '../AspectRatioBox';
import { Button } from '../Button';

// Hooks
import { useWalletPreview } from '../../hooks/data';

// Styled
import { Header, Description, FlexContainer, ItemWrapper, PreviewWrapper, DownloadButton, Wrapper } from './styled';

export const WalletPreview = ({ address }) => {
  const walletPreview = useWalletPreview(address);

  return (
    <>
      <Header>
        <Description>Wallet address: {`${address.slice(0, 5)}......${address.slice(-4)}`}</Description>
        <Button>Remove</Button>
      </Header>
      {walletPreview.isLoading && <Loader />}
      {!walletPreview.isLoading && (
        <>
          {/* No Tokens */}
          {walletPreview.data?.compatible.length === 0 && walletPreview.data?.incompatible.length === 0 && (
            <>
              <h3>No Tokens</h3>
              <p>There are no compatible tokens in your connected wallet.</p>
            </>
          )}
          {/* Compatible List */}
          {walletPreview.data?.compatible.length > 0 && (
            <Wrapper>
              <h3>Compatible With envision</h3>
              <p>These tokens will appear in your account after linking your wallet.</p>
              <FlexContainer flexWrap="wrap">
                {walletPreview.data?.compatible.map((token) => (
                  <ItemWrapper>
                    <PreviewWrapper>
                      <AspectRatioBox aspectRatio={1}>
                        <video
                          src={token.assetUrl}
                          width="100%"
                          onClick={(e) => (e.target.paused ? e.target.play() : e.target.pause())}
                        />
                      </AspectRatioBox>
                    </PreviewWrapper>
                    <span>{token.name}</span>
                  </ItemWrapper>
                ))}
              </FlexContainer>
            </Wrapper>
          )}
          {/* Incompatible List */}
          {walletPreview.data?.incompatible.length > 0 && (
            <>
              <h3>Compatibility Coming Soon</h3>
              <p>
                Support for these tokens is coming soon. They will automatically appear in your account as they are
                supported.
              </p>
              <FlexContainer flexWrap="wrap">
                {walletPreview.data?.incompatible.map((token) => (
                  <ItemWrapper>
                    <PreviewWrapper>
                      <AspectRatioImage aspectRatio={1} imageUrl={token.assetPreviewUrl} type="contain" />
                    </PreviewWrapper>
                    <div>{token.name}</div>
                    <DownloadButton href={token.assetUrl} target="_blank">
                      <CloudDownload size={25} />
                    </DownloadButton>
                  </ItemWrapper>
                ))}
              </FlexContainer>
            </>
          )}
        </>
      )}
    </>
  );
};

WalletPreview.propTypes = {
  address: PropTypes.string,
};

WalletPreview.defaultProps = {
  address: null,
};
