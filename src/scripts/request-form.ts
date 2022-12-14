const errorMessageClasses = ["bg-red-400"];
const successMessageClasses = ["bg-green-400"];
const errorMessageText = "Ошибка при отправке сообщения.";
const successMessageText = "Сообщение отправлено.";

const messageDelay = 5000;

const submitResultMessageEl = document.getElementById(
  "submitResultMessage"
) as HTMLDivElement;

function showError() {
  submitResultMessageEl.classList.add(...errorMessageClasses);
  submitResultMessageEl.classList.remove("hidden");
  submitResultMessageEl.textContent = errorMessageText;
  setTimeout(() => {
    submitResultMessageEl.classList.add("hidden");
  }, messageDelay);
}

function showSuccess() {
  submitResultMessageEl.classList.add(...successMessageClasses);
  submitResultMessageEl.classList.remove("hidden");
  submitResultMessageEl.textContent = successMessageText;
  setTimeout(() => submitResultMessageEl.classList.add("hidden"), messageDelay);
}

function submitForm(e: SubmitEvent) {
  e.preventDefault();

  const isValid = form.reportValidity();

  if (!isValid) return;

  const formData = new FormData(form);

  let xhr = new XMLHttpRequest();

  xhr.open("POST", "send.php");
  xhr.send(formData);

  xhr.onload = () => showSuccess();
  xhr.onerror = () => showError();
}

const form = document.getElementById("form") as HTMLFormElement;

form.addEventListener("submit", submitForm);

export {};
