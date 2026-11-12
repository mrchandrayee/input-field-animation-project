const form = document.getElementById("nameForm");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const result = document.getElementById("formResult");

function updatePreview() {
  const first = firstName.value.trim();
  const last = lastName.value.trim();
  result.textContent = [first, last].filter(Boolean).join(" ") || "Enter your name above";
}

firstName.addEventListener("input", updatePreview);
lastName.addEventListener("input", updatePreview);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!firstName.value.trim() || !lastName.value.trim()) {
    result.textContent = "Please enter both your first and last name.";
    (!firstName.value.trim() ? firstName : lastName).focus();
    return;
  }
  result.textContent = `Preview: ${firstName.value.trim()} ${lastName.value.trim()}`;
});

updatePreview();
