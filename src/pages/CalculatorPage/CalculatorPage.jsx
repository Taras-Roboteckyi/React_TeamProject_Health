import { DailyCaloriesForm } from "../../components/DailyCaloriesForm/DailyCaloriesForm";
import SideBar from '../../components/SideBar/SideBar';
import {StyledWrapper} from './CalculatorPage.styled'

export const CalculatorPage = () => {
  return (
    <> 
   <StyledWrapper>
      <DailyCaloriesForm />
      
      </StyledWrapper>
        <SideBar />

      </>
  );
};