import { LoginForm } from "../../components/LoginForm/LoginForm";
import { ImageStyled, H2 } from "../LoginPage/LoginPage.styled";
import { Container } from "../../components/container";

export const LoginPage = () => {
  return (
    <main>
      <ImageStyled />
      <Container>
        <H2>SING IN</H2>
        <LoginForm />
      </Container>  
    </main>
  );
};
