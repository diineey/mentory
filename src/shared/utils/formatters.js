export default function formatPhoneNumber(phoneNumber) {
  const withoutPrefix = phoneNumber.slice(3);

  return `+998${withoutPrefix.slice(0, 2)} ${withoutPrefix.slice(2, 5)}-${withoutPrefix.slice(5, 7)}-${withoutPrefix.slice(7)}`;
}

export function formatAmount(amount) {
  return new Intl.NumberFormat('ru-RU').format(amount);
}

export function formatYearsAndMonths(dateString) {
  // if (!dateString || typeof dateString !== 'string' || !dateString.includes('-')) return
  //
  // const [years, months] = dateString.split('-').map(Number);

  // if (isNaN(years) || isNaN(months)) {
  //   return "";
  // }

  if (isNaN(dateString)) return '';

  const year = Number(dateString);

  let yearWord;
  if (year === 1) {
    yearWord = 'год';
  } else if (year >= 2 && year <= 4) {
    yearWord = 'года';
  } else {
    yearWord = 'лет';
  }

  return `${year} ${yearWord} опыта`;
}
