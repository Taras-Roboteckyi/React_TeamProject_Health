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
import UserMenu from '../userMenu/UserMenu';

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
      <UserMenu />

      <Section>
        <Wrapper>
          <SummaryContainer>
            <SummaryText>Summary for {'06 / 12 / 2002'}</SummaryText>
            {true ? (
              <ListStyle>
                <ListItemStyle>
                  Left
                  <TextStyle>{1404 + ' kcal'}</TextStyle>
                </ListItemStyle>

                <ListItemStyle>
                  Consumed
                  <TextStyle>{1004 + ' kcal'}</TextStyle>
                </ListItemStyle>

                <ListItemStyle>
                  Daily rate
                  <TextStyle>{3000 + ' kcal'}</TextStyle>
                </ListItemStyle>

                <ListItemStyle>
                  n% of normal
                  <TextStyle>{4 + ' kcal'}</TextStyle>
                </ListItemStyle>
              </ListStyle>
            ) : (
              <ListStyle>
                <ListItemStyle>
                  Left
                  <TextStyle>0 ккал</TextStyle>
                </ListItemStyle>
                <ListItemStyle>
                  Consumed
                  <TextStyle>0 ккал</TextStyle>
                </ListItemStyle>
                <ListItemStyle>
                  Daily rate
                  <TextStyle>0 ккал</TextStyle>
                </ListItemStyle>
                <ListItemStyle>
                  n% of normal
                  <TextStyle>0 ккал</TextStyle>
                </ListItemStyle>
              </ListStyle>
            )}
          </SummaryContainer>
          <FoodContainer>
            <SummaryText>Food not recommended</SummaryText>

            {true ? (
              ['milk', 'cofee', 'tea', 'musroms', 'bread', 'button']?.map(
                (product, index) => (
                  <ProductStyle key={index}>{product + ', '}</ProductStyle>
                ),
              )
            ) : (
              <p>Your diet will be displayed here</p>
            )}

            {/* <BgImageStyled /> */}
          </FoodContainer>
        </Wrapper>
      </Section>
    </>
  );
};

export default SideBar;
