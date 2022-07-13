import styled from 'styled-components';

export const DailyButton = styled.button`
  background: #fc842d;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  border-radius: 30px;
  border: 1px solid ${prop => prop.theme.colors.$orange};
  padding: 13px 25px;

  font-family: ${prop => prop.theme.fonts.$verdana};
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.21;
  color: ${prop => prop.theme.colors.$white};

  cursor: pointer;

  &:hover {
    background: ${prop => prop.theme.colors.$white};
    color: ${prop => prop.theme.colors.$orange};
  }
`;
