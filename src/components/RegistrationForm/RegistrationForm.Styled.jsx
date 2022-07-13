import styled from 'styled-components';

export const Section = styled.section`
  width: 280px;
  margin: 0 auto;
  padding: 40px 0px;

  font-family: ${prop => prop.theme.fonts.$verdana};
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.21;
  letter-spacing: 0.04em;

  @media screen and (min-width: 768px) {
    margin: 0;
    padding: 160px 0px;
    width: 400px;
  }

  .form-title {
    text-transform: uppercase;
    text-align: center;
    color: ${prop => prop.theme.colors.$orange};

    margin-bottom: 60px;

    @media screen and (min-width: 768px) {
      text-align: start;

      font-family: ${prop => prop.theme.fonts.$gothamPro};
      line-height: 0.92;
    }
  }

  .form {
    width: 100%;
  }

  .form-input {
    width: 100%;
    height: 36px;
    padding-bottom: 20px;
    padding-left: 0px;

    border: none;
    border-bottom: 1px solid #e0e0e0;
    outline: none;
    background: transparent;

    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 1.21;
    letter-spacing: 0.04em;
    color: ${prop => prop.theme.colors.$grey};

    &:not(:first-child) {
      margin-top: 40px;
    }

    &:focus {
      border-color: ${prop => prop.theme.colors.$orange};
      color: ${prop => prop.theme.colors.$orange};
    }

    &::placeholder {
      color: ${prop => prop.theme.colors.$grey};
    }

    @media screen and (min-width: 768px) {
      width: 240px;
    }
  }

  .form-input-error {
    width: 280px;
    word-break: break-all;
    color: red;
    font-size: 12px;

    @media screen and (min-width: 768px) {
      width: 240px;
    }
  }

  .buttons {
    margin-top: 60px;
    width: 100%;
    height: 108px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media screen and (min-width: 768px) {
      height: 44px;
      flex-direction: row;
    }

    .login-button {
      width: 182px;
      height: 44px;
      display: flex;
      justify-content: center;
      align-items: center;

      background: ${prop => prop.theme.colors.$orange};
      box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
      border: 2px solid ${prop => prop.theme.colors.$orange};
      border-radius: 30px;

      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 17px;
      letter-spacing: 0.04em;

      color: ${prop => prop.theme.colors.$white};
      cursor: pointer;

      &:hover {
        background: ${prop => prop.theme.colors.$white};
        color: ${prop => prop.theme.colors.$orange};
      }
    }

    .register-button {
      width: 182px;
      height: 44px;
      display: flex;
      justify-content: center;
      align-items: center;

      background: transparent;
      box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
      border: 2px solid ${prop => prop.theme.colors.$orange};
      border-radius: 30px;

      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 17px;
      letter-spacing: 0.04em;

      color: ${prop => prop.theme.colors.$orange};
      cursor: pointer;

      &:hover {
        background: ${prop => prop.theme.colors.$orange};
        color: ${prop => prop.theme.colors.$white};
      }
    }
  }
`;
