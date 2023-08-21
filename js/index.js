document.querySelector("#buttonText").addEventListener("click", () => {
    const valor = document.querySelector("#inputText").value;
    localStorage.setItem("pepe", valor);
})