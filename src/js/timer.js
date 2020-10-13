

const refs = {
  days: document.querySelector('[data-value="days"]'),
  hours: document.querySelector('[data-value="hours"]'),
  mins: document.querySelector('[data-value="mins"]'),
  secs: document.querySelector('[data-value="secs"]'),
  searchForm: document.querySelector('.js-search-form'),
  
};


refs.searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const inducateValue = form.elements.query.value;

const timer = {
    intervalId:null,
     isActive: false,
    
    start() {
    
      if (this.isActive) {
        return;
      };

    this.isActive = true;
    const targetDate = new Date(`${inducateValue}`);

    this.intervalId=setInterval(() => {
      const currentDate = Date.now();

      const delta = targetDate.getTime() - currentDate;

      updateClockFace(delta);
    }, 1000);
      
     },
     
  }
timer.start();
});

// const timer = {
//   start() {
//     const targetDate = new Date('Jan 20, 2021');

//     setInterval(() => {
//       const currentDate = Date.now();

//       const delta = targetDate.getTime() - currentDate;

//       updateClockFace(delta);
//     }, 1000);
//   },
// };

// timer.start();

/*
 *
 * Для подсчета значений используй следующие готовые формулы,
 * где time - разница между targetDate и текущей датой.
 */

function updateClockFace(time) {
  const days = Math.floor(time / (1000 * 60 * 60 * 24));

  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  );

  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));

  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  refs.days.textContent = `${days}`;
  refs.hours.textContent = `${hours}`;
  refs.mins.textContent = `${mins}`;
  refs.secs.textContent = `${secs}`;
}
function pad(value) {
  return String(value).padStart(2, '0');
}