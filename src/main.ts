import "./scripts/request-form";
import "./scripts/link-scroll";
import { appendGoogleMap } from "./scripts/google-map";

import "./style.css";

const cookieModal = document.querySelector('#cookieModal')
const closeCookieButton = document.querySelector('#closeCookieButton')
const applyCookieButton = document.querySelector('#applyCookieButton')

const setReadCookie = () => {
  localStorage.setItem('cookie-applied', 'true')
}

const checkReadCookie = () => {
  return Boolean(localStorage.getItem('cookie-applied'))
}

const showCookiePolicyToast = () => {
  if (checkReadCookie()) return
  cookieModal?.classList.remove('hidden')
}

applyCookieButton?.addEventListener('click', () => {
  cookieModal?.classList.add('hidden')
  setReadCookie()
})


closeCookieButton?.addEventListener('click', () => {
  cookieModal?.classList.add('hidden')
  setReadCookie()
})

function setCurrentYear() {
  const currentYear = new Date().getFullYear();
  const el = document.getElementById("year") as HTMLSpanElement;

  el.textContent = currentYear.toString();
}

document.addEventListener("DOMContentLoaded", () => {
  showCookiePolicyToast()
  setCurrentYear();
  appendGoogleMap();
});
