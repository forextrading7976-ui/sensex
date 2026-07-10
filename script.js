/ Active Members Counter Animation
let count = 0;
const target = 12510;

const counter = document.querySelector(".members h2");

function updateCounter() {
    if (count < target) {
        count += Math.ceil((target - count) / 30);
        counter.innerHTML = count.toLocaleString() + "+";
        requestAnimationFrame(updateCounter);
    } else {
        counter.innerHTML = "12,510+";
    }
}

updateCounter();

// Button Animation
const btn = document.querySelector("button");

btn.addEventListener("mouseenter", () => {
    btn.style.boxShadow = "0 0 40px #00bfff";
});

btn.addEventListener("mouseleave", () => {
    btn.style.boxShadow = "0 0 25px rgba(0,150,255,.7)";
});
