import moment from 'moment';

export const required = {
  validator: (value) => !!value,
  message: 'Поле не может быть пустым',
};

export const requiredCheckbox = {
  validator: (value) => Array.isArray(value) && value.length > 0,
  message: 'Выберите хотя бы один вариант',
};

export const validDate = {
  validator: (value) => {
    if (!value) return true;
    return moment(value, 'DD.MM.YYYY', true).isValid();
  },
  message: 'Дата должна быть в формате ДД.ММ.ГГГГ и валидной',
};

export const phoneLength = {
  validator: (value) => value.length === 12,
  message: 'Неверный формат номера телефона',
};
