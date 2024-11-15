import moment from 'moment';

export const unmaskPhoneNumber = (value) => {
  return value.replace(/\D/g, '');
};

export const unmaskDate = (value) => {
  return moment(value, 'DD.MM.YYYY').format('DD-MM-YYYY');
};
