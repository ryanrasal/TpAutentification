const inputForm = document.getElementsByClassName("inputForm");
const buttonSubmit = document.getElementById("buttonSubmit");

buttonSubmit.addEventListener("click", (e) => {
    let error;
  for (let i = 0; i < inputForm.length; i++) {
    if (!inputForm[i].value) {
      error = "Veuillez renseigner tous les champs";
    }
    if (error) {
      e.preventDefault();
      document.getElementById("erreur").innerHTML = error;
      return false;
    } else {
      e.preventDefault();
      alert("coucou");
    }
  }
});
