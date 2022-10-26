import $ from "jquery";
import "./style.css";

const form = document.getElementById("form-message") as HTMLFormElement;

function submitForm(e: SubmitEvent) {
  e.preventDefault();
  const isValid = form.checkValidity();
  form.reportValidity();
  if (!isValid) return;

  $.ajax({
    type: "POST",
    url: "send.php",
    data: $(form).serialize(),
    success: function () {
      $("#contactSuccess").fadeIn().delay(5000).fadeOut();
    },
    error: function () {
      $("#contactError").fadeIn().delay(5000).fadeOut();
    },
  });
}
form.onsubmit = submitForm;
