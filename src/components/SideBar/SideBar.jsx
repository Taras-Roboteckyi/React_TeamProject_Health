import { useSelector /* , useDispatch  */ } from 'react-redux';
/* import { useEffect } from 'react'; */

/* 
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

 */
import ReactTypingEffect from 'react-typing-effect';

import { authSelectors } from '../../redux/authorization';

import arrayRandom from '../../utility/arrayRandom';

import {
  Section,
  SummaryText,
  ListStyle,
  ListItemStyle,
  TextStyle,
  SummaryContainer,
  ProductStyle,
  FoodContainer,
  Wrapper,
} from './SideBar.styled';

const SideBar = () => {
  const array = [
    'молоко',
    'кава',
    'чай',
    'гречка',
    'хліб',
    'масло',
    'крупа',
    'ячмінь',
  ];
  const userData = useSelector(authSelectors.getUserDataCalories);
  const isCalories = userData === '0';
  const random = arrayRandom(array);
  /* console.log('result:', random); */
  /* const arraySlice = random.slice(0, 7); //////Обрізає масив до 7 значень
  console.log(arraySlice); */
  const arrayString = [random.join(', ')];
  /*  console.log(arrayString); */

  return (
    <>
      <Section>
        <Wrapper>
          <SummaryContainer>
            <SummaryText>Відомості за {'06 / 12 / 2002'}</SummaryText>
            {!isCalories ? (
              <ListStyle>
                <ListItemStyle>
                  Залишилось
                  <TextStyle>{1404 + ' ккал'}</TextStyle>
                </ListItemStyle>

                <ListItemStyle>
                  Спожито
                  <TextStyle>{1004 + ' ккал'}</TextStyle>
                </ListItemStyle>

                <ListItemStyle>
                  Добова норма
                  <TextStyle>{3000 + ' ккал'}</TextStyle>
                </ListItemStyle>

                <ListItemStyle>
                  Відсоток від норми
                  <TextStyle>{4 + ' %'}</TextStyle>
                </ListItemStyle>
              </ListStyle>
            ) : (
              <ListStyle>
                <ListItemStyle>
                  Залишилось
                  <TextStyle>0 ккал</TextStyle>
                </ListItemStyle>
                <ListItemStyle>
                  Спожито
                  <TextStyle>0 ккал</TextStyle>
                </ListItemStyle>
                <ListItemStyle>
                  Добова норма
                  <TextStyle>0 ккал</TextStyle>
                </ListItemStyle>
                <ListItemStyle>
                  Відсоток від норми
                  <TextStyle>0 %</TextStyle>
                </ListItemStyle>
              </ListStyle>
            )}
          </SummaryContainer>
          <FoodContainer>
            <SummaryText>Не рекомендовані продукти для вас</SummaryText>

            {!isCalories ? (
              <ProductStyle>
                <ReactTypingEffect
                  typingDelay={1000}
                  speed={100}
                  eraseSpeed={20}
                  text={arrayString}
                />
              </ProductStyle>
            ) : (
              <TextStyle>
                Тут відображатимуться продукти які не рекомендовані для вас
              </TextStyle>
            )}

            {/* <BgImageStyled /> */}
          </FoodContainer>
        </Wrapper>
      </Section>
    </>
  );
};

export default SideBar;
