import SideBar from '../../components/SideBar/SideBar';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import { GoCalendar } from 'react-icons/go';

export const DiaryPage = () => {
  return (
    <main>
      <Datetime
        dateFormat="DD.MM.YYYY"
        timeFormat={false}
        initialValue={new Date()}
        onChange={data => {
          console.log(data._d);
        }}
      />
      <GoCalendar size={50} fill={'red'} />
      <div>DiaryPage</div>
      <SideBar />
    </main>
  );
};
