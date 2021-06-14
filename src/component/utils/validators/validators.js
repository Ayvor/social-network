export const required = (values) => {
  if (values) return undefined;
  return 'Field is required';
};

// export const maxLength30 = (values) => {
//   if (values.length > 30) return 'Max length is 30 symbols';
//   return undefined;
// };

export const maxLengthCreator = (maxLength) => (values) => {
  if (values.length > maxLength) return `Max length is ${maxLength} symbols`;
  return undefined;
};
