
const valueEl = document.querySelector("#value");
const counterValue = {
    value: 0,
    decrement(value) {
      this.value -= 1;
    },
    increment(value) {
      this.value += 1;
    },
  };
  const decBtn = document.querySelector('[data-action="decrement"]');
  decBtn.addEventListener("click",  () => {
    counterValue.decrement();
    valueEl.textContent = counterValue.value;
    });
  const incBtn = document.querySelector('[data-action="increment"]');
  incBtn.addEventListener("click", () => {
    counterValue.increment();
    valueEl.textContent = counterValue.value;
    });
    