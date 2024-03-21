export const useSignUpValidations = (setErrorMessage, formState) => {
  setErrorMessage("");
  const {
    UserName = "",
    Email = "",
    Password = "",
    ConfirmPassword = "",
  } = formState;
  const email = Email.toLowerCase();
  if (
    UserName.trim() === "" ||
    email.trim() === "" ||
    Password.trim() === "" ||
    ConfirmPassword.trim() === ""
  ) {
    setErrorMessage("Todos los campos son obligatorios.");
    return;
  }
  if (/\d/.test(UserName) || UserName.length < 2 || UserName.length > 24) {
    setErrorMessage("Usuario invalido.");
    return;
  }
  if (!validateEmail(email) || email.length > 35) {
    setErrorMessage("E-mail no valido.");
    return;
  }
  if (
    Password.length <= 5 ||
    Password.length > 20 ||
    ConfirmPassword.length <= 5 ||
    ConfirmPassword.length > 20 ||
    Password !== ConfirmPassword
  ) {
    setErrorMessage("Contraseña invalida o las contraseñas no coinciden.");
    return;
  }
  setErrorMessage("Registro completo.");
  return;
};

const validateEmail = (email) => {
  const regEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const validateEmail = regEx.test(email);
  return validateEmail;
};
