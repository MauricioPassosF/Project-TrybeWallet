// Peguei do seguinte site a validacao por email: https://www.devmedia.com.br/validando-e-mail-em-inputs-html-com-javascript/26427
export const emailValidation = (email) => {
  const minUser = 3;
  const minus1 = -1;
  const user = email.substring(0, email.indexOf('@'));
  const dom = email.substring(email.indexOf('@') + 1, email.length);
  return ((user.length >= 1)
  && (dom.length >= minUser)
  && (user.search('@') === minus1)
  && (dom.search('@') === minus1)
  && (user.search(' ') === minus1)
  && (dom.search(' ') === minus1)
  && (dom.search('.') !== minus1)
  && (dom.indexOf('.') >= 1)
  && (dom.lastIndexOf('.') < dom.length - 1));
};

export const passwordValidation = (password) => {
  const minLengthPassword = 5;
  return password.length > minLengthPassword;
};
