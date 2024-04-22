// Qui puoi aggiungere le funzionalità interattive per i pulsanti.
// Ad esempio, potresti voler mostrare un messaggio quando un pulsante viene cliccato.
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', () => {
        alert(`Hai cliccato su: ${button.textContent}`);
    });
});
