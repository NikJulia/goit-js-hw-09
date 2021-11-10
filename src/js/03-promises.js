import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  form: document.querySelector('.form'),
  createPromisesBtn: document.querySelector('button[type="submit"]'),
}

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit (event) {
  event.preventDefault();

  const {
    elements: { delay, step, amount }
  } = event.currentTarget;

  const firstDelay = Number(delay.value);
  const delayStep = Number(step.value);
  const promisesAmount = Number(amount.value);
  let currentDelay = firstDelay;

  for (let i = 0; i < promisesAmount; i += 1) {
    createPromise(i, currentDelay).then(({ position, delay }) => {
      setTimeout(() => {Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);}, delay)}).catch(({ position, delay }) => {
      setTimeout(() => {Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    }, delay)});
    currentDelay += delayStep;
  }
};

function createPromise (position, delay) {
  return new Promise ((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if(shouldResolve) {
        resolve({ position, delay });
      }

      reject({ position, delay });
    }, delay);
  });
};
