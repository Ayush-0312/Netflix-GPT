export const checkValidData = (email, password) => {
  const isEmailValid = /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isEmailValid) return "Email ID is not valid";
  if (!isPasswordValid)
    return "Your password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.";

  return null;
};
