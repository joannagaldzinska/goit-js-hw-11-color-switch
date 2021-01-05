const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

  const refs = {
    body: document.querySelector('body'),
    startBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector('[data-action="stop"]'),
  };

  function randomIntegerFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function setBgColor() {
    refs.body.style.backgroundColor =
      colors[randomIntegerFromInterval(0, colors.length)];
  }

  const switcher = {
    intervalId: null,
    isActive: false,

  start() {
    if (this.isActive) {
        return;
      }
  
      this.intervalId = setInterval(setBgColor, 1000);
      this.isActive = true;
  },

  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;

  }

}



refs.startBtn.addEventListener('click', switcher.start.bind(switcher));
refs.stopBtn.addEventListener('click', switcher.stop.bind(switcher));
