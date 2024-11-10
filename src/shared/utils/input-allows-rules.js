export const allowOnlyNumbers = (event) => {
  const value = event.target.value;
  event.target.value = value.replace(/[^0-9]/g, '');
};

export const allowOnlyLetters = (event) => {
  const value = event.target.value;
  event.target.value = value.replace(/[^a-zA-Zа-яА-ЯёЁ]/g, '');
};

export const allowOnlyLettersAndSpaces = (event) => {
  const value = event.target.value;
  event.target.value = value.replace(/[^a-zA-Z\s]/g, ''); // Оставляем только буквы и пробелы
};