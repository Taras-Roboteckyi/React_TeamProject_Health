import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import { GoCalendar } from 'react-icons/go';

import SideBar from '../../components/SideBar/SideBar';
import { Wrapper } from './DiaryPage.styled';

export const DiaryPage = () => {
  return (
    <main>
      <Wrapper>
        <Datetime
          dateFormat="DD.MM.YYYY"
          timeFormat={false}
          initialValue={new Date()}
          onChange={data => {
            console.log(data._d);
          }}
        />
        <GoCalendar size={50} fill={'red'} />

        <SideBar />
      </Wrapper>
    </main>
  );
};
