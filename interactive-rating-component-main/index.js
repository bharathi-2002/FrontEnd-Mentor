const container = document.querySelector(".container");
const thankyouContainer = document.querySelector(".thank-you")

const submitBtn = document.getElementById("submit");
const rateAgain = document.getElementById("rate-again");

const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".btn");

submitBtn.addEventListener("click", () => {
    thankyouContainer.classList.remove("hide");
    container.style.display = "none";
})
rateAgain.addEventListener("click", () => {
    thankyouContainer.classList.add("hide");
    container.style.display = "block";
})

rates.forEach((rate) => {
    rate.addEventListener("click", ()=> {
        rating.innerHTML = rate.innerHTML;
    })
})