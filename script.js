
console.log("JavaScript Connected!");


const form = document.querySelector("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const mobileInput = document.getElementById("mobile");
const messageInput = document.getElementById("msg");

const toggleThemeBtn = document.createElement("button");
toggleThemeBtn.textContent = "🌙 Dark Mode";
toggleThemeBtn.classList.add("theme-toggle");


const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});


if (!document.querySelector(".theme-toggle")) {
  document.querySelector(".site-header .container")
    .appendChild(toggleThemeBtn);
}


function showError(input, message) {
  let error = input.nextElementSibling;

  if (!error || !error.classList.contains("error-text")) {
    error = document.createElement("small");
    error.className = "error-text";
    input.after(error);
  }

  error.textContent = message;
}

function clearError(input) {
  const error = input.nextElementSibling;
  if (error && error.classList.contains("error-text")) {
    error.textContent = "";
  }
}

function isValidEmail(email) {
  return /^[^ ]+@[^ ]+\.[a-z]{2,}$/i.test(email);
}

function isValidMobile(number) {
  return /^[6-9][0-9]{9}$/.test(number);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let valid = true;

  if (nameInput.value.trim().length < 2) {
    showError(nameInput, "Name must be at least 2 characters");
    valid = false;
  } 

  else {
    clearError(nameInput);
  }

  if (!isValidEmail(emailInput.value)) {
    showError(emailInput, "Enter a valid email");
    valid = false;
  } 

  else {
    clearError(emailInput);
  }

  if (!isValidMobile(mobileInput.value.trim())) {
    showError(mobileInput, "Enter a valid 10-digit mobile number");
    valid = false;
    }

  else {
  clearError(mobileInput);
  }


  if (messageInput.value.trim().length < 10) {
    showError(messageInput, "Message must be at least 10 characters");
    valid = false;
  } 

  else {
    clearError(messageInput);
  }

  if (valid) {
    alert("✅ Message sent successfully!");
    form.reset();
  }
});


[nameInput, emailInput,mobileInput, messageInput].forEach((input) => {
  input.addEventListener("input", () => clearError(input));
});

toggleThemeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");

  const isLight = document.body.classList.contains("light");
  localStorage.setItem("theme", isLight ? "light" : "dark");

  toggleThemeBtn.textContent = isLight
    ? "🌞 Light Mode"
    : "🌙 Dark Mode";
});


const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
  document.body.classList.add("light");
  toggleThemeBtn.textContent = "🌞 Light Mode";
}


document.querySelectorAll("#skills li").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "scale(1.08)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
  });
});


document.querySelector("footer p").textContent =
  `© ${new Date().getFullYear()} Pranav . All rights reserved.`;
