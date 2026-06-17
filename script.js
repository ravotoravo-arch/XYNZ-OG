document.addEventListener("DOMContentLoaded", () => {
    
    const downloadBtn = document.getElementById("downloadBtn");
    const registerBtn = document.getElementById("registerBtn");

    downloadBtn.addEventListener("click", () => {
        alert("Der Download ist derzeit nicht verfügbar, da der XYNZ OG Server offline ist.");
        
        // TODO: Wenn Server online, hier Download-URL einbinden:
        // window.location.href = "https://api.xynz-og.com/download/launcher.exe";
    });

    registerBtn.addEventListener("click", () => {
        alert("Die Registrierung ist geschlossen, da der XYNZ OG Server offline ist.");
        
        // TODO: Wenn Server online, hier Registrierungs-Schnittstelle oder Web-URL einbinden:
        // window.location.href = "https://xynz-og.com/register";
    });
});

// TODO: API-Schnittstelle für Live-Status (hier später fetch() zu deinem Backend einrichten)
// function checkServerStatus() {
//     fetch('https://api.xynz-og.com/status')
//         .then(response => response.json())
//         .then(data => { /* Status dynamisch updaten */ });
// }