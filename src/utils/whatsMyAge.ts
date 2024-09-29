export const whatsMyAge = (birthdate: Date) => {
  const diff = Date.now() - birthdate.getTime();
  const age = new Date(diff);

  return Math.abs(age.getUTCFullYear() - 1970);
};
