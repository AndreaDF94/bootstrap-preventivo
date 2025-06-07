// Otteniamo riferimenti agli elementi del DOM
const form = document.getElementById("quote-form");
const select = document.getElementById("job-type");
const promoInput = document.getElementById("promo");
const prezzoFinale = document.getElementById("prezzo");
// Oggetto con opzioni di lavoro e relativi prezzi orari
const lavori = {
  backend: { nome: "Backend Development", prezzo: 20.5 },
  frontend: { nome: "Frontend Development", prezzo: 15.3 },
  analysis: { nome: "Project Analysis", prezzo: 33.6 },
};
// Codici promozionali validi
const codiciValidi = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];

// Generiamo dinamicamente le opzioni per il select
for (let key in lavori) {
  const option = document.createElement("option");
  option.value = key;
  option.textContent = lavori[key].nome;
  select.appendChild(option);
}
// Calcolo del preventivo al submit del form
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Previene il comportamento predefinito (refresh pagina)

  const tipo = select.value;
  const codice = promoInput.value.trim().toUpperCase();

  if (!tipo) {
    prezzoFinale.textContent = "Seleziona un tipo di lavoro.";
    return;
  }