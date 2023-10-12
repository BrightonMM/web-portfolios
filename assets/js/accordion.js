const readmoreBtn = document.getElementById("read-more");

function changeText(event) {
    const btn = event.target; // the read more btn
    btn.classList.toggle("clicked");
    const classes = [...btn.classList];

    if(classes.includes("clicked")) {
        btn.textContent = "Read less"
    } else {
        btn.textContent = "Read more"
    }
}
readmoreBtn.addEventListener("click", changeText)