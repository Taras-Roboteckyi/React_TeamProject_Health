import { useSelector /* , useDispatch  */ } from 'react-redux';
/* import { useEffect } from 'react'; */

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

const SideBar = ({ date, consumed = 0 }) => {
  const calories = useSelector(authSelectors.getUserDataCalories);
  const dataBedProducts = useSelector(authSelectors.getNotAllowedProducts);
  /* console.log(dataBedProducts); */

  let arrayString = [];
  const left = calories - consumed;
  const procent = (consumed * 100) / calories;

  if (dataBedProducts.length > 0) {
    ///////Витягує з масива властивість title//////////////////////
    const array = dataBedProducts.map(({ title }) => title.ua);

    ///////Функція перебирання рандомних значень масива//////
    const random = arrayRandom(array);
    /* console.log(random); */

    arrayString = [random.join(', ')];
  }
  /* console.log(arrayString); */
  const isCalories = calories === '0';

  return (
    <>
      <Section>
        <Wrapper>
          <SummaryContainer>
            <SummaryText>Відомості за {date}</SummaryText>
            {!isCalories ? (
              <ListStyle>
                <ListItemStyle>
                  Залишилось
                  <TextStyle>{calories > consumed ? left : 0} ккал</TextStyle>
                </ListItemStyle>

                <ListItemStyle>
                  Спожито
                  <TextStyle>{consumed} ккал</TextStyle>
                </ListItemStyle>

                <ListItemStyle>
                  Добова норма
                  <TextStyle>{calories + ' ккал'}</TextStyle>
                </ListItemStyle>

                <ListItemStyle>
                  Відсоток від норми
                  <TextStyle>
                    {calories > consumed ? Math.round(procent) : 100} %
                  </TextStyle>
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
                  <TextStyle>{consumed} ккал</TextStyle>
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
