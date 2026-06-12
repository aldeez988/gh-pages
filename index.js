
document.getElementById("percent--form").addEventListener("submit", event => {
    event.preventDefault();
    console.log("Hello, World!");
    const amount = document.getElementById("amount").value;
    const percent = document.getElementById("percent").value;
    const result = document.getElementById("result");
    result.value = calculateResults(amount, percent);
});