'use strict';

'use strict';

//user name and password
const userNameInput = document.querySelector('.user-name');
const userPasswordInput = document.querySelector('.password');
const btnSubMit = document.querySelector('.btn-submit');
const wrongData = document.querySelector('.wrong-data');
//btn drobdown
const dropDownBtn = document.querySelector('.btn-dropdown');
const dropDownContent = document.querySelector('.dropdown-content');

dropDownBtn.addEventListener('click', function () {
  dropDownContent.classList.remove('hidden');
});

// div
const inputContent = document.querySelector('.show-project');

//
const dropdown = document.querySelector('.dropdown');
// main user name and pass
const mainUserName = 'm';
const mainPassword = '1';

btnSubMit.addEventListener('click', function () {
  if (
    userNameInput.value === mainUserName &&
    userPasswordInput.value == mainPassword
  ) {
    dropdown.classList.remove('hidden');
    inputContent.classList.add('hidden');
  } else {
    wrongData.classList.remove('hidden');
    userNameInput.value = '';
    userPasswordInput.value = '';
  }
});

const btnSwissFlight = document.querySelector('.btn-1');
const btnAmircaFlight = document.querySelector('.btn-2');
const btnDenmarkFlight = document.querySelector('.btn-3');

const info = document.querySelector('.information');

const swissFlight = {
  name: 'swiss flight',
  price: '5000$',
  seat: ['1H 11', 'LW 15', 'WS 22'],
  flightCompanyData() {
    return `you choose company ${this.name}  ticket price ${this.price} free seats ${this.seat}
    `;
  },
};

const amircaFlight = {
  name: 'Amirca flight',
  price: '10000$',
  seat: ['LW 15', 'WS 22'],
};

const denmarkFlight = {
  name: 'Denmark flight',
  price: '5000$',
  seat: ['Md 50', 'fH 11', 'LW 15', 'WS 22'],
};
const passObjName = function (domEle) {
  return (domEle.textContent = this.name);
};
const invokeFnIntObj = passObjName;

const getCompanyFlightDta = swissFlight.flightCompanyData;

invokeFnIntObj.call(swissFlight, btnSwissFlight);
invokeFnIntObj.call(amircaFlight, btnAmircaFlight);
invokeFnIntObj.call(denmarkFlight, btnDenmarkFlight);
const btnsFlightCompanyes = [btnSwissFlight, btnAmircaFlight, btnDenmarkFlight];
for (let btnCompany of btnsFlightCompanyes) {
  btnCompany.addEventListener('click', function () {
    info.classList.remove('hidden');
    if (btnCompany.textContent === 'swiss flight') {
      info.textContent = getCompanyFlightDta.call(swissFlight);
    } else if (btnCompany.textContent === 'Amirca flight') {
      info.textContent = getCompanyFlightDta.call(amircaFlight);
    } else if (btnCompany.textContent === 'Denmark flight') {
      info.textContent = getCompanyFlightDta.call(denmarkFlight);
    }
  });
}
