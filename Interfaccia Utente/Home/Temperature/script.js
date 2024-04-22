// Funzione per aggiornare i dati sulla pagina
function updateData(temperature, humidity) {
    document.getElementById('temperature').innerText = temperature;
    document.getElementById('humidity').innerText = humidity;
}

// Funzione per ricevere i dati dal Raspberry Pi
function receiveData() {
    // In questo esempio, supponiamo che tu stia utilizzando un'API REST per ricevere i dati dal Raspberry Pi
    // Puoi sostituire questo URL con l'indirizzo effettivo del tuo server Raspberry Pi che fornisce i dati
    const url = 'http://raspberry_pi_ip_address:port/data'; // Sostituisci con l'indirizzo IP e la porta del tuo Raspberry Pi

    fetch(url)
    .then(response => response.json())
    .then(data => {
        updateData(data.temperature, data.humidity);
    })
    .catch(error => {
        console.error('Errore durante il recupero dei dati:', error);
    });
}

// Aggiorna i dati ogni tot millisecondi (es. ogni 5 secondi)
setInterval(receiveData, 1000*60*5); // Aggiorna ogni 5 secondi (5000 millisecondi)

// Avvia il recupero dei dati all'avvio della pagina
receiveData();
