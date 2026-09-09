export const contactData = {
  phone: '+8801701140907',
  email: 'prosanto0das23@gmail.com',
  whatsappNumber: '8801701140907',
};

export const gmailComposeUrl = (subject = '', body = '') => {
  const params = new URLSearchParams({
    view: 'cm',
    fs: '1',
    to: contactData.email,
    ...(subject ? { su: subject } : {}),
    ...(body ? { body } : {}),
  });

  return `https://mail.google.com/mail/?${params.toString()}`;
};