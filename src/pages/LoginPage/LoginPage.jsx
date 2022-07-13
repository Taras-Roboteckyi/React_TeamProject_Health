import { LoginForm } from "../../components/LoginForm/LoginForm";
import { ImageStyled } from "../LoginPage/LoginPage.styled";
import { Container } from "../../components/container";

export const LoginPage = () => {
  const onLoginFormSubmit = data => {
    console.log(data);
  };


  return (
    <main>
      <ImageStyled />
      <Container>
        <LoginForm onLoginFormSubmit={onLoginFormSubmit} />
      </Container>  
    </main>
  );
};
