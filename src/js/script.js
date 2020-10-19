import refs from './refs';
import timer from './timer';

refs.searchForm.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  timer.query = form.elements.query.value;
  // console.dir('value:', form.elements.query.value);

  form.reset();
  timer.start();
});

refs.clearForm.addEventListener('click', timer.stop.bind(timer));
