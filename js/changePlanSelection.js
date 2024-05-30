// changePlanSelection.js
const planBasico = document.getElementById('planBasico');
const planIntermedio = document.getElementById('planIntermedio');
const planPremium = document.getElementById('planPremium');

function removeSelection() {
  planBasico.classList.remove('seleccion');
  planIntermedio.classList.remove('seleccion');
  planPremium.classList.remove('seleccion');
}

function changePlanSelection(plan) {
  removeSelection();
  plan.classList.add('seleccion');
}

planBasico.addEventListener('mouseover', () => changePlanSelection(planBasico));
planIntermedio.addEventListener('mouseover', () => changePlanSelection(planIntermedio));
planPremium.addEventListener('mouseover', () => changePlanSelection(planPremium));

// Add click event listeners to redirect to 'iniciosesion.html'
planBasico.addEventListener('click', () => window.location.href = './iniciosesion.html');
planIntermedio.addEventListener('click', () => window.location.href = './iniciosesion.html');
planPremium.addEventListener('click', () => window.location.href = './iniciosesion.html');