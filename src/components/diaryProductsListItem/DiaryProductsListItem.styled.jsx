import styled from 'styled-components';

export const Li = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme: { fonts } }) => fonts.verdana};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  vertical-align: center;

  color: #212121;

  p {
    display: inline-block;
    border-bottom: 2px solid ${prop => prop.theme.colors.borderColor};
    padding: 8px 0px 8px 0px;
    overflow: hidden;
  }

  .widthTitle {
    margin-right: 8px;
    width: 130px;
  }
  .widthGramGram {
    margin-right: 8px;
  }
  .widthGramKcal {
    margin-right: 17px;
  }
  button {
    background: inherit;
    border: none;
    cursor: pointer;
    line-height: 0;
    &:hover {
      transform: scale(1.2);
    }
  }
`;
