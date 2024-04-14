export const useLoginValidations = (setErrorMessage, formState, postLogin) => {
  const { UserName = "", Password = "" } = formState;
  setErrorMessage("");
  if (UserName.trim() === "" || Password.trim() === "") {
    setErrorMessage("All the fields are required.");
    return;
  }
  if (UserName.length < 2 || UserName.length > 24) {
    setErrorMessage("Invalid username or password.");
    return;
  }
  if (Password.length > 24 || Password.length <= 5) {
    setErrorMessage("Invalid username or password.");
    return;
  }
  postLogin();
  return;
};
