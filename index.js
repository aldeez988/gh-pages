
document.getElementById("percent--form").addEventListener("submit", event => {
    event.preventDefault();
    console.log("Hello, World!");
    const amount = document.getElementById("amount").value;
    const percent = document.getElementById("percent").value;
    console.log(amount, percent);
});