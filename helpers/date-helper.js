export function formatDate(date) {
  const dateFromDay = date.getDate();
  const dateFromMonth = date.getMonth() + 1;
  return `${dateFromDay.toString().padStart(2, "0")}/${dateFromMonth.toString().padStart(2, "0")}/${date.getFullYear()}`;
}
