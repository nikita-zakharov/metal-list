import $ from "jquery";
import "./style.css";

const form = document.getElementById("form") as HTMLFormElement;

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
      $("#submitSuccessMessage").fadeIn().delay(5000).fadeOut();
    },
    error: function () {
      $("#submitErrorMessage").fadeIn().delay(5000).fadeOut();
    },
  });
}

form.addEventListener("submit", submitForm);

document.addEventListener("DOMContentLoaded", () => {
  const currentYear = new Date().getFullYear();

  $("#year").text(currentYear);
});
