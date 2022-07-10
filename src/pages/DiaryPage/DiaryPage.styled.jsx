import styled from 'styled-components';

export const CalendarStyles = styled.label`
  .calendar {
    font-family: ${({ theme: { fonts } }) => fonts.verdana};
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    border: none;
    width: 150px;
    text-align: center;
  }
`;
