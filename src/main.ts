import "./scripts/request-form";
import "./scripts/link-scroll";
import { appendGoogleMap } from "./scripts/google-map";

import "./style.css";

function setCurrentYear() {
  const currentYear = new Date().getFullYear();
  const el = document.getElementById("year") as HTMLSpanElement;

  el.textContent = currentYear.toString();
}

document.addEventListener("DOMContentLoaded", () => {
  setCurrentYear();
  appendGoogleMap();
});
