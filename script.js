// script.js

// Function to perform a search
function performSearch() {
    const query = document.getElementById('searchInput').value;
    if (query) alert(`Você pesquisou por: ${query}`);
    else alert("Por favor, insira um termo de pesquisa.");
}

// Function to handle newsletter submission
function submitNewsletter() {
    const email = document.getElementById('newsletterEmail').value;
    if (validateEmail(email)) {
        alert(`Obrigado por se inscrever, ${email}!`);
    } else {
        alert("Por favor, insira um email válido.");
    }
}

// Basic email validation function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
