import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import { GoCalendar } from 'react-icons/go';
import { useState } from 'react';
import { format } from 'date-fns';
import { CalendarStyles } from './DiaryPage.styled';

export const DiaryPage = () => {
  const [date, setDate] = useState(new Date());
  const dateReformat = format(date, 'dd/MM/yyyy');
  console.log(dateReformat);

  const isCurrentDay =
    format(date, 'dd/MM/yyyy') === format(new Date(), 'dd/MM/yyyy');

  console.log(isCurrentDay);
  return (
    <main>
      <CalendarStyles>
        <Datetime
          dateFormat="DD.MM.YYYY"
          timeFormat={false}
          initialValue={new Date()}
          inputProps={{
            className: 'calendar',
            placeholder: format(new Date(), 'dd.MM.yyyy'),
          }}
          onChange={data => {
            data._d && setDate(data._d);
          }}
          closeOnSelect
        />
        <GoCalendar size={20} fill={'#9B9FAA'} className="calendar_icon" />
      </CalendarStyles>

      <div>DiaryPage</div>
    </main>
  );
};
