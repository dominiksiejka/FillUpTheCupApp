class FillTheCup {
  constructor(waterRemainingContainer, waterFilledContainer) {
    this.waterFilledContainer = waterFilledContainer;
    this.waterRemainingContainer = waterRemainingContainer;
    this.currentFilled = 0;
    this.fullCapacity = 2000;
    this.singleCupCapacity = 250;
    this.handleinitFilling();
  }
  handleinitFilling = () => {
    this.waterFilledContainer.style.height = `${this.currentFilled}%`;
  };
  handleFillTheCup = (index) => {
    this.currentFilled = 0;
    this.currentFilled = (index + 1) * this.singleCupCapacity;
  };
  handleEmptySpaceRemaining = () => {
    this.waterRemainingContainer.innerHTML = `<p>${
      (this.fullCapacity - this.currentFilled) / 1000
    }L</p><p>Remained</p>`;
  };
  handleMarkCups = (cups, index) => {
    cups.forEach((cup) => cup.classList.remove("active"));
    for (let i = 0; i <= index; i++) {
      cups[i].classList.add("active");
    }
  };
  handleUpdateTheContainer = () => {
    const calculations = (this.currentFilled / this.fullCapacity) * 100;
    this.waterFilledContainer.style.height = `${calculations}%`;
    if (this.currentFilled >= 1750) {
      this.waterRemainingContainer.textContent = "";
    } else {
      this.handleEmptySpaceRemaining();
    }

    this.waterFilledContainer.firstElementChild.textContent = `${calculations}%`;
  };
}

const waterRemainingContainer = document.querySelector(".water-remaining");
const waterFilledContainer = document.querySelector(".water-filled");
const singleCups = [...document.querySelectorAll(".single-cup")];

const cups = new FillTheCup(waterRemainingContainer, waterFilledContainer);

singleCups.forEach((cup, index) => {
  cup.addEventListener("click", (event) => {
    cups.handleFillTheCup(index);
    cups.handleUpdateTheContainer();
    cups.handleMarkCups(singleCups, index);
  });
});

function fixedHeight() {
  document.documentElement.style.setProperty(
    "--fixedHeight",
    `${window.innerHeight}px`
  );
}
fixedHeight();
