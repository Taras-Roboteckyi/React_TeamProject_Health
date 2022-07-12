import { RegistrationForm } from '../../components/RegistrationForm/RegistrationForm';
import { ImageStyled } from '../LoginPage/LoginPage.styled';
import { Container } from '../../components/container';

export const RegistrationPage = () => {
  const onFormSubmit = data => {
    console.log(data);
  };

  return (
    <main>
      <ImageStyled />
      <Container>
        <RegistrationForm onFormSubmit={onFormSubmit} />
      </Container>
    </main>
  );
};
