import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const btnStart = document.querySelector('[data-start]');
let intervalId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (new Date() > selectedDates[0]) {
      btnStart.disabled = true;
      return Notify.failure('Please choose a date in the future');
    }
    btnStart.disabled = false;
  },
};

const fp = flatpickr('#datetime-picker', options);

btnStart.addEventListener('click', onBtnStartClick);

function onBtnStartClick() {
    intervalId = setInterval(() => {
      btnStart.disabled = true;
      const diff = fp.selectedDates[0] - Date.now();
      console.log(diff);
  
      if (diff <= 0) {
        clearInterval(intervalId);
        btnStart.disabled = false;
        document.querySelector('.timer').style.color = "red";
        return;
      }

      const { days, hours, minutes, seconds } = convertMs(diff);

        document.querySelector('[data-days]').textContent = addLeadingZero(days);
        document.querySelector('[data-hours]').textContent = addLeadingZero(hours);
        document.querySelector('[data-minutes]').textContent = addLeadingZero(minutes);
        document.querySelector('[data-seconds]').textContent = addLeadingZero(seconds);
    }, 1000);
  }

  function convertMs(diff) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(diff / day);
    // Remaining hours
    const hours = Math.floor((diff % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((diff % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((diff % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
    
  function addLeadingZero(value) {
    return String(value).padStart(2, 0);
  }