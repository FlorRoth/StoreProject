export const useLoginValidations = (setErrorMessage, formState) => {
  const { Email = "", Password = "" } = formState;
  const email = Email.toLowerCase();
  setErrorMessage("");
  if (email.trim() === "" || Password.trim() === "") {
    setErrorMessage("Todos los campos son obligatorios.");
    return;
  }
  if (!validateEmail(email) || email.length > 35) {
    setErrorMessage("E-mail o contraseña no valido.");
    return;
  }
  if (Password.length > 20 || Password.length <= 5) {
    setErrorMessage("E-mail o contraseña no valido.");
    return;
  }
  return;
};

const validateEmail = (Email) => {
  const regEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const validateEmail = regEx.test(Email);
  return validateEmail;
};