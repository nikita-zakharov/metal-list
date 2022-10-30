import "./request-form";
import "./link-scroll";

import "./style.css";

function setCurrentYear() {
  const currentYear = new Date().getFullYear();
  const el = document.getElementById("year") as HTMLSpanElement;

  el.textContent = currentYear.toString();
}

document.addEventListener("DOMContentLoaded", () => {
  setCurrentYear();
});
