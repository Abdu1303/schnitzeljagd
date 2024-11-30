// Liste der gültigen Codes und deren Punkte
const validCodes = {
"m jyoieygvpb": 10,
    "m jyoieygvpb": 20,
    "Code3": 15,
    "SecretCode": 50
};

// Variable, um die Gesamtpunkte zu speichern
let totalPoints = 0;

// Funktion zur Überprüfung des Codes
function checkCode() {
    const input = document.getElementById("codeInput").value.trim(); // Eingabe des Benutzers
    const result = document.getElementById("result"); // Ergebnisbereich

    if (validCodes[input]) {
        // Gültiger Code gefunden
        totalPoints += validCodes[input]; // Punkte zur Gesamtsumme hinzufügen
        result.textContent = `Richtig! Du erhältst ${validCodes[input]} Punkte. 
                              Insgesamt hast du jetzt ${totalPoints} Punkte.`;
        result.style.color = "green"; // Ergebnis grün färben
    } else {
        // Ungültiger Code
        result.textContent = "Ungültiger Code. Bitte versuche es erneut.";
        result.style.color = "red"; // Ergebnis rot färben
    }

    // Eingabefeld leeren
    document.getElementById("codeInput").value = "";
}

