import refs from './refs';
import timer from './timer';

refs.searchForm.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  timer.query = form.elements.query.value;
  console.log('timer.query', timer.query);
  form.reset();
  timer.start();
});

refs.clearForm.addEventListener('click', timer.stop.bind(timer));
