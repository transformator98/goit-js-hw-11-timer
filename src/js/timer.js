import updateClockFace from './update-clock-face';

export default {
  searchQuery: '',
  intervalId: null,
  isActive: false,

  start() {
    if (this.isActive) {
      return;
    }

    this.isActive = true;

    const targetDate = new Date(`${this.searchQuery}`);

    this.intervalId = setInterval(() => {
      const currentDate = Date.now();
      const delta = targetDate.getTime() - currentDate;

      updateClockFace(delta);
    }, 1000);
  },

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
    this.isActive = false;
    updateClockFace(0);
  },

  get query() {
    return this.searchQuery;
  },
  set query(value) {
    this.searchQuery = value;
  },
};
