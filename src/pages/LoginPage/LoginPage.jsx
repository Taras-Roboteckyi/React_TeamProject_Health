import { LoginForm } from "../../components/LoginForm/LoginForm";
import { ImageStyled } from "../LoginPage/LoginPage.styled";
import { Container } from "../../components/container";

export const LoginPage = () => {
  return (
    <main>
      <ImageStyled />
      <Container>
        <h2>SING IN</h2>
        <LoginForm />
      </Container>  
    </main>
  );
};
