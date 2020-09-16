// recebendo a data atual
let currentDate = new Date();

// array do dia atual
let currentDay = [
  'DOMINGO',
  'SEGUNDA',
  'TERÇA',
  'QUARTA',
  'QUINTA',
  'SEXTA',
  'SABADO'
];

// referenciando o elemento 
let week = document.querySelector('.day-week');

// mostrando o dia atual na tela
week.innerHTML = currentDay[currentDate.getDay()];

// função load do calendário
function loadCalendar() {

  // total de dias do mes anterior
  currentDate.setDate(1);
  // recebendo os dias do mes anterior
  let lastDay = currentDate.getDay();

  // referenciando o elemento 
  let month = document.querySelector('#month');
  let dayMonth = document.querySelectorAll('.days')[0];
  let today = document.querySelector('.number-day');
  let year = document.querySelector('#year');
  let nameWeek = document.querySelectorAll('.week')[0];

  // recebendo os dias do mes
  let monthDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

  // recebendo os dis do mês anterior
  let beforeDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();

  // numero do dia atual
  let todayNumber = new Date();

  // array de meses
  let yearMonths = [
    'JANEIRO',
    'FEVEREIRO',
    'MARÇO',
    'ABRIL',
    'MAIO',
    'JUNHO',
    'JULHO',
    'AGOSTO',
    'SETEMBRO',
    'OUTUBRO',
    'NOVEMBRO',
    'DEZEMBRO'
  ];

  // array da semana
  let weekend = [
    'Dom',
    'Seg',
    'Ter',
    'Qua',
    'Qui',
    'Sex',
    'Sab'
  ];

  // mostrando o mês atual na tela
  month.innerHTML = yearMonths[currentDate.getMonth()];
  // mostrando o ano atual na tela
  year.innerHTML = currentDate.getFullYear();

  // semana
  let dayWeekend = '';

  // percorrendo a semana
  for (let k = 0; k < weekend.length; k++) {
    if (k === 0) {
      dayWeekend = dayWeekend + '<div class="sunday">' + weekend[k] + '</div>';
    } else {
      dayWeekend = dayWeekend + '<div>' + weekend[k] + '</div>';
    }
  }

  // inserindo a semana 
  nameWeek.innerHTML = dayWeekend;

  // dias do mes
  let days = '';

  // dias do mes anterior
  for (let j = lastDay; j > 0; j--) {
    days = days + '<div class="before-date">' + (beforeDate - j + 1) + '</div>';
  }

  //  dias do mes
  for (let i = 1; i <= monthDate; i++) {
    if (i === todayNumber.getDate() && currentDate.getMonth() === todayNumber.getMonth()) {
      days = days + '<div class="today">' + i + '</div>';
      
      // inserindo o numero do dia atual
      today.innerHTML = todayNumber.getDate();

    } else {
      days = days + '<div>' + i + '</div>';
    }
  }

  // inserindo os dias do mes
  dayMonth.innerHTML = days;

}

// load na função 
window.addEventListener('load', loadCalendar());

// referenciando o elemento
let before = document.querySelector('.before');
let after = document.querySelector('.after');

// após clicar na seta para a esquerda ele retorna para o mês anterior
before.addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  loadCalendar();
});

// após clicar na seta direita ele vai prossegue para o próximo mês
after.addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  loadCalendar();
});