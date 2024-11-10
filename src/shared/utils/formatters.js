export default function formatPhoneNumber(phoneNumber) {
  const withoutPrefix = phoneNumber.slice(3);

  return `+998${withoutPrefix.slice(0, 2)} ${withoutPrefix.slice(2, 5)}-${withoutPrefix.slice(5, 7)}-${withoutPrefix.slice(7)}`;
}

export function formatAmount(amount) {
  return new Intl.NumberFormat('ru-RU').format(amount);
}

export function formatYearsAndMonths(dateString) {
  if (!dateString || typeof dateString !== 'string' || !dateString.includes('-')) {
    return "Нет данных об опыте";
  }

  const [years, months] = dateString.split('-').map(Number);

  if (isNaN(years) || isNaN(months)) {
    return "Нет данных об опыте";
  }

  let yearWord;
  if (years === 1) {
    yearWord = "год";
  } else if (years >= 2 && years <= 4) {
    yearWord = "года";
  } else {
    yearWord = "лет";
  }

  let monthWord;
  if (months === 1) {
    monthWord = "месяц";
  } else if (months >= 2 && months <= 4) {
    monthWord = "месяца";
  } else {
    monthWord = "месяцев";
  }

  return `${years} ${yearWord} ${months} ${monthWord} опыта`;
}
