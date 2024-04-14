export const useSignUpValidations = (
  setErrorMessage,
  formState,
  postSignUp
) => {
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
    setErrorMessage("All the fields are required.");
    return;
  }
  if (UserName.length < 2 || UserName.length > 24) {
    setErrorMessage("Invalid username.");
    return;
  }
  if (!validateEmail(email) || email.length > 35) {
    setErrorMessage("Invalid e-mail address");
    return;
  }
  if (
    Password.length <= 5 ||
    Password.length > 20 ||
    ConfirmPassword.length <= 5 ||
    ConfirmPassword.length > 20 ||
    Password !== ConfirmPassword
  ) {
    setErrorMessage("Invalid password or passwords do not match.");
    return;
  }
  postSignUp();
  return;
};

const validateEmail = (email) => {
  const regEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const validateEmail = regEx.test(email);
  return validateEmail;
};
