import flatpickr from 'flatpickr';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'flatpickr/dist/flatpickr.min.css';
import 'notiflix/dist/notiflix-3.2.2.min';

const refs = {
  input: document.querySelector('input#datetime-picker'),
  startBtn: document.querySelector('button[data-start]'),
  daysLabel: document.querySelector('span[data-days]'),
  hoursLabel: document.querySelector('span[data-hours]'),
  minutesLabel: document.querySelector('span[data-minutes]'),
  secondsLabel: document.querySelector('span[data-seconds]'),
}

refs.startBtn.disabled = true;

// КАЛЕНДАРЬ
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if(selectedDates[0] < Date.now()) {
      // window.alert("Please choose a date in the future");
      Notify.failure('Please choose a date in the future');
      return;
    }
    // console.log(selectedDates[0]);
    refs.startBtn.disabled = false;
  },
};

  const calendar = refs.input.flatpickr(options);
  // console.dir(calendar);
  // console.log(calendar.latestSelectedDateObj.getTime());

  // ТАЙМЕР
  const timer = {
    intervalId: null,

    start() {
        const endTime = calendar.latestSelectedDateObj.getTime();
        refs.startBtn.disabled = true;

        this.intervalId = setInterval(() => {
            const startTime = Date.now();
            const deltaTime = endTime - startTime;
            const { days, hours, minutes, seconds } = convertMs(deltaTime);
            // console.log(`${days}:${hours}:${minutes}:${seconds}`);
            const time = convertMs(deltaTime);

            updateClockFace(time);
        }, 1000);
    },
}; 

refs.startBtn.addEventListener('click', () => {
  timer.start();
});


function updateClockFace({ days, hours, minutes, seconds }) {
  refs.daysLabel.textContent = `${days}`;
  refs.hoursLabel.textContent = `${hours}`;
  refs.minutesLabel.textContent = `${minutes}`;
  refs.secondsLabel.textContent = `${seconds}`;
}

function pad(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
            // Number of milliseconds per unit of time
            const second = 1000;
            const minute = second * 60;
            const hour = minute * 60;
            const day = hour * 24;
          
            // Remaining days
            const days = pad(Math.floor(ms / day));
            // Remaining hours
            const hours = pad(Math.floor((ms % day) / hour));
            // Remaining minutes
            const minutes = pad(Math.floor(((ms % day) % hour) / minute));
            // Remaining seconds
            const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));
          
            return { days, hours, minutes, seconds };
          }
