import styled from '@emotion/styled';

export const RootWrapper = styled.div`
  height: 100vh;
  @media (max-width: 699px) {
    width: auto;
    height: auto;
  }
`;

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #222222;
  left: 0;
  z-index: 10;
  padding: 60px;
  @media (min-width: 700px) {
    flex-basis: 50%;
  }
  @media (max-width: 699px) {
    margin-top: 60px;
    padding: 24px;
  }
`;

export const Flex = styled.div`
  display: flex;
  @media (max-width: 699px) {
    flex-direction: column;
  }
  height: 100%;
`;

export const Box = styled.div`
  align-self: flex-start;
  margin: 24px 24px 24px 0;
`;
export const FormWrapper = styled.div`
  max-width: 480px;
`;

export const Title = styled.div`
  font-weight: bold;
  font-size: 20px;
  text-align: left;
  margin-bottom: 24px;
`;

export const Description = styled.div`
  font-size: 16px;
  line-height: 24px;
`;

export const Form = styled.form`
  margin-top: 48px;
`;

export const LabelWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const Label = styled.label`
  font-weight: 600;
  font-size: 12px;
  text-align: left;
  text-transform: uppercase;
`;

export const InputWrapper = styled.div`
  width: 100%;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  margin-top: 24px;
`;

export const BackIconWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const BackIcon = styled.img`
  width: 11px;
  height: 21px;
  margin-right: 24px;
`;

// export const Logo = styled.img`
//   display: block;
//   width: 75%;
//   margin: 0 auto 2em auto;
// `;

// export const Heading = styled.h1`
//   margin-bottom: 1.5em;
//   font-weight: 300;
// `;

// export const Message = styled.h3`
//   margin-bottom: 1.5em;
//   font-weight: 300;
// `;

// export const InputWrapper = styled.div`
//   padding-bottom: 2.5em;
//   margin: 0 auto;
// `;

// export const ButtonWrapper = styled.div`
//   margin: 0 auto;
// `;
