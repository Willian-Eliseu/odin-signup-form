const password = document.querySelector("#password");
const passwordConfirm = document.querySelector("#passwordConfirm");
const formulary = document.querySelector("#form-subscribe");

passwordConfirm.addEventListener("keyup", () => {
  if (password.value === passwordConfirm.value) {
    passwordConfirm.classList.remove("password-check");
    passwordConfirm.classList.add("password");
  } else {
    passwordConfirm.classList.remove("password");
    passwordConfirm.classList.add("password-check");
  }
});

formulary.addEventListener("submit", (e) => {
    e.preventDefault();
  
    if (password.value !== passwordConfirm.value) {
        alert('Passwords must be the same');
    }

    alert('Formulary submited successfully');
    formulary.reset();

});