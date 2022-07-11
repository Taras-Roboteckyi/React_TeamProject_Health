import { RegistrationForm } from '../../components/RegistrationForm/RegistrationForm';

export const RegistrationPage = () => {
  const onFormSubmit = data => {
    console.log(data);
  };

  return (
    <main>
      <div>RegistrationPage</div>
      <RegistrationForm onFormSubmit={onFormSubmit} />
    </main>
  );
};
