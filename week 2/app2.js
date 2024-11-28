// Verwerk het inlogformulier
const form = document.getElementById("loginForm");
const errorMessage = document.getElementById("error-message");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // Voorkom standaard formulierverzending

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Eenvoudige controle van gebruikersnaam en wachtwoord (voorbeeld)
    if (username === "admin" && password === "admin123")
        (username === "Elwin0510" && password === "aK62pF9N")
    (username === "Onno77" && password === "Welcome123") {
        // Als de inloggegevens correct zijn, doorverwijzen naar een andere website
        window.location.href= "website1.html"; // Vervang met jouw gewenste URL
    } else {
        // Als de inloggegevens onjuist zijn, toon de foutmelding
        errorMessage.style.display = "block"; // Toon foutmelding
    }
});