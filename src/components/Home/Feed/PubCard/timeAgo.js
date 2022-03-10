const timeAgo = (date) => {
  const dateObj = new Date(date);
  const timeAgo = new Date().getTime() - dateObj.getTime();
  const seconds = Math.floor(timeAgo / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);
  if (seconds < 60) {
    return `hace ${seconds} segundos`;
  } else if (minutes < 60) {
    return `hace ${minutes} minutos`;
  } else if (hours < 24) {
    return `hace ${hours} horas`;
  } else if (days < 30) {
    return `hace ${days} dias`;
  } else if (months < 12) {
    return `hace ${months} meses`;
  } else {
    return `hace ${years} años`;
  }
};

export default timeAgo;
