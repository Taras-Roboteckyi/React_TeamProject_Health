/* import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react'; */

/* import {
  ItemsSelectors,
  fetchContacts,
  deleteContacts,
} from '../../redux/items';
import ContactListItem from '../ContactListItem/ContactListItem';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ListStyle } from './ContactList.styled'; */

import {
  /* BgImageStyled, */
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
  return (
    <>
      <Section>
        <Wrapper>
          <SummaryContainer>
            <SummaryText>Відомості за {'06 / 12 / 2002'}</SummaryText>
            {true ? (
              <ListStyle>
                <ListItemStyle>
                  Залишилось
                  <TextStyle>{1404 + ' kcal'}</TextStyle>
                </ListItemStyle>

                <ListItemStyle>
                  Спожито
                  <TextStyle>{1004 + ' kcal'}</TextStyle>
                </ListItemStyle>

                <ListItemStyle>
                  Добова норма
                  <TextStyle>{3000 + ' kcal'}</TextStyle>
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

            {true ? (
              ['молоко', 'кава', 'чай', 'гречка', 'хліб', 'масло']?.map(
                (product, index) => (
                  <ProductStyle key={index}>{product + ', '}</ProductStyle>
                ),
              )
            ) : (
              <TextStyle>Your diet will be displayed here</TextStyle>
            )}

            {/* <BgImageStyled /> */}
          </FoodContainer>
        </Wrapper>
      </Section>
    </>
  );
};

export default SideBar;
