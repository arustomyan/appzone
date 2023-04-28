export function newDate() {
  let dateNow = new Date().getFullYear();
  let dateText = document.querySelector(".date-now");

  dateText.innerHTML = dateNow;
}
