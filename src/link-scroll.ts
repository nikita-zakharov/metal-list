const scrollAttributeName = "data-scroll-link";

const scrollButtons = document.querySelectorAll("[data-scroll-link]");

scrollButtons.forEach((button) => {
  button.addEventListener("click", (e) => handleScrollButtonClick(e));
});

function handleScrollButtonClick(e: Event) {
  const buttonEl = e.currentTarget as HTMLButtonElement;
  const targetId = buttonEl.getAttribute(scrollAttributeName);
  if (!targetId) return;

  const targetEl = document.getElementById(targetId) as HTMLDivElement;
  targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
}

export {};
