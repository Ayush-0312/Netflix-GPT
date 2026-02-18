export const checkValidData = (email, password, name) => {
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  const isName = /([a-zA-Z0-9_\s]+)/.test(name);

  if (!isEmailValid) return "Email ID is not valid";
  if (!isPasswordValid)
    return "Your password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.";

  if (!isName) return "Enter valid Name";
  return null;
};
