const pesquisa = document.getElementById("pesquisa");

pesquisa.addEventListener("keyup", () => {
    let filtro = pesquisa.value.toLowerCase();
    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        let texto = card.innerText.toLowerCase();
        card.style.display = texto.includes(filtro) ? "block" : "none";
    });
});
