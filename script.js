const btnLogin = document.querySelector('#btnEntrar');
const input = document.querySelector('.email');
const input2 = document.querySelector('.password');
const agreementInput = document.querySelector('#agreement');
const btnEnviar = document.querySelector('#submit-btn');
const textArea = document.getElementById('textarea');
const form = document.querySelector('#evaluation-form');
const userName = document.querySelector('.user-name');
const userLastname = document.querySelector('.last-name');
const userEmail = document.querySelector('.user-email');
const userHouse = document.querySelector('.user-house');
const radioFamily = document.getElementsByClassName('family');
const userFamily = document.querySelector('.user-family');
const userLikes = document.querySelector('.user-like');
const userAvali = document.querySelector('.user-avali');
const userObs = document.querySelector('.user-obs');
const infoStudent = document.querySelector('.tablee');
const btnBack = document.getElementById('btn-goback');
const forcedReload = true;

function validateLogin(event) {
  event.preventDefault();
  const email = input.value;
  const senha = input2.value;
  if (email === 'tryber@teste.com' && senha === '123456') window.alert('Olá, Tryber!');
  else window.alert('Email ou senha inválidos.');
}
let maxCarac = 500;

function verifyCharac() {
  maxCarac = 500 - textArea.value.length;
  document.querySelector('#counter').innerText = maxCarac;
}

textArea.addEventListener('input', verifyCharac);

btnLogin.addEventListener('click', validateLogin);

agreementInput.addEventListener('change', (event) => {
  if (event.target.checked) {
    btnEnviar.disabled = false;
  } else {
    btnEnviar.disabled = true;
  }
});

function getUserName() {
  const inputName = document.querySelector('#input-name').value;
  if (getUserName === '') {
    userName.innerText = 'Anonimo';
  } else {
    userName.innerText = inputName;
  }
}

function getData() {
  const userLast = document.querySelector('#input-lastname').value;
  userLastname.innerText = userLast;
  const getEmail = document.querySelector('#input-email').value;
  userEmail.innerText = getEmail;
  const getHouse = document.querySelector('#house').value;
  userHouse.innerText = getHouse;
}

function getFamily() {
  for (let i = 0; i < radioFamily.length; i += 1) {
    if (radioFamily[i].checked) {
      userFamily.innerText = radioFamily[i].value;
      return;
    }
  }
}

function getLike() {
  const userChoice = document.getElementsByClassName('subject');
  const emptyArray = [];
  for (let i = 0; i < userChoice.length; i += 1) {
    if (userChoice[i].checked) {
      emptyArray.push(` ${userChoice[i].value}`);
    }
  }
  userLikes.innerText = emptyArray;
}

function getAva() {
  const userRadioAva = document.getElementsByClassName('rate');
  for (let i = 0; i < userRadioAva.length; i += 1) {
    if (userRadioAva[i].checked) {
      userAvali.innerText = userRadioAva[i].value;
      return;
    }
  }
}

function getObs() {
  const userTextObs = document.querySelector('#textarea').value;
  userObs.innerText = userTextObs;
}

function formData() {
  getData();
  getUserName();
  getFamily();
  getLike();
  getAva();
  getObs();
}

function loadItens(event) {
  event.preventDefault();
  infoStudent.style.display = 'flex';
  form.style.display = 'none';
  formData();
}

form.addEventListener('submit', loadItens);

function goBack() {
  form.style.display = 'flex';
  infoStudent.style.display = 'none';
  window.location.reload(forcedReload);
}

btnBack.addEventListener('click', goBack);
