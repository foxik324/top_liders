// Небольшая интерактивность страницы

document.querySelectorAll(".donator").forEach(card => {

    card.addEventListener("click", () => {

        card.style.transform = "scale(0.98)";

        setTimeout(() => {
            card.style.transform = "";
        }, 120);

    });

});