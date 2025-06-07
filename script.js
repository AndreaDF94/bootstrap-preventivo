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