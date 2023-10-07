function getCurrentDateTime() {
  const now = new Date();

  const day = String(now.getDate()).padStart(2, "0"); // День
  const month = String(now.getMonth() + 1).padStart(2, "0"); // Месяц (нумерация начинается с 0)
  const year = now.getFullYear(); // Год
  const hours = String(now.getHours()).padStart(2, "0"); // Часы
  const minutes = String(now.getMinutes()).padStart(2, "0"); // Минуты

  return `${day}.${month}.${year} ${hours}:${minutes}`;
}

export default getCurrentDateTime;
