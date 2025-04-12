const step1 = document.querySelector("#step-1");
const step2 = document.querySelector("#step-2");
const step3 = document.querySelector("#step-3");
const successMsg = document.querySelector(".success");
const next1 = document.querySelector("#next-1");
const next2 = document.querySelector("#next-2");
const back1 = document.querySelector("#back-1");
const back2 = document.querySelector("#back-2");
const submitBtn = document.querySelector("#submit-btn");
const form = document.querySelector("#multi-step-form");

next1.addEventListener("click", () => {
  const name = document.querySelector("#name-text");
  const email = document.querySelector("#email-text");
  const error = document.querySelector("#step1-error");

  error.textContent = "";
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name.value.trim() || !emailPattern.test(email.value)) {
    error.textContent = "Please enter a valid name and email.";
    name.classList.add("error");
    email.classList.add("error");
    return;
  } else {
    name.classList.remove("error");
    email.classList.remove("error");
  }

  step1.style.display = "none";
  step2.style.display = "block";
});

next2.addEventListener("click", () => {
  const portfolioUrl = document.querySelector("#portfolio-url-input");
  const gitHubUrl = document.querySelector("#github-url-input");
  const error = document.querySelector("#step2-error");

  error.textContent = "";

  if (
    !portfolioUrl.value.startsWith("http") ||
    !gitHubUrl.value.startsWith("http")
  ) {
    error.textContent = "Please enter valid URLs starting with http or https.";
    portfolioUrl.classList.add("error");
    gitHubUrl.classList.add("error");
    return;
  } else {
    portfolioUrl.classList.remove("error");
    gitHubUrl.classList.remove("error");
  }

  step2.style.display = "none";
  step3.style.display = "block";
});

back1.addEventListener("click", () => {
  step2.style.display = "none";
  step1.style.display = "block";
});

back2.addEventListener("click", () => {
  step3.style.display = "none";
  step2.style.display = "block";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const password = document.querySelector("#password-input");
  const confirm = document.querySelector("#confirm-password-input");
  const error = document.querySelector("#step3-error");

  error.textContent = "";

  const isStrong =
    password.value.length >= 8 &&
    /[0-9]/.test(password.value) &&
    /[a-zA-Z]/.test(password.value);

  if (!isStrong) {
    error.textContent =
      "Password must be at least 8 characters and include a number and a letter.";
    password.classList.add("error");
    return;
  } else {
    password.classList.remove("error");
  }

  if (password.value !== confirm.value) {
    error.textContent = "Passwords do not match.";
    password.classList.add("error");
    confirm.classList.add("error");
    return;
  } else {
    password.classList.remove("error");
    confirm.classList.remove("error");
  }

  form.reset();
  step3.style.display = "none";
  step1.style.display = "block";
  successMsg.textContent = "Application submitted successfully!";
  setTimeout(() => {
    successMsg.textContent = "";
  }, 4000);
});
