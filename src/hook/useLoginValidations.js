export const useLoginValidations = (setErrorMessage, formState, postLogin) => {
  const { UserName = "", Password = "" } = formState;
  setErrorMessage("");
  if (UserName.trim() === "" || Password.trim() === "") {
    setErrorMessage("Todos los campos son obligatorios.");
    return;
  }
  if (UserName.length < 2 || UserName.length > 24) {
    setErrorMessage("Usuario o contraseña no valido.");
    return;
  }
  if (Password.length > 20 || Password.length <= 5) {
    setErrorMessage("Usuario o contraseña no valido.");
    return;
  }
  postLogin();
  return;
};
