class SlotMachine {
  coins = 0;
  wheel_1 = 0;
  wheel_2 = 0;
  wheel_3 = 0;

  spinWheels() {
    this.wheel_1 = Math.round(Math.random());
    this.wheel_2 = Math.round(Math.random());
    this.wheel_3 = Math.round(Math.random());
  }

  checkResult(coins) {
    const resultWheel_1 = Boolean(this.wheel_1);
    const resultWheel_2 = Boolean(this.wheel_2);
    const resultWheel_3 = Boolean(this.wheel_3);

    if (resultWheel_1 && resultWheel_2 && resultWheel_3) {
      this.coins = 0;
      this.wheel_1 = 0;
      this.wheel_2 = 0;
      this.wheel_3 = 0;

      return `Congratulations!!!. You won ${coins} coins!!`;
    } else {
      return "Good luck next time!!";
    }
  }

  play() {
    this.coins += 1;
    this.spinWheels();
    console.log(this.checkResult(this.coins));
  }
}

const slot1 = new SlotMachine();
slot1.play();
slot1.play();
slot1.play();
slot1.play();
slot1.play();
slot1.play();
slot1.play();
slot1.play();
slot1.play();
slot1.play();
slot1.play();
slot1.play();
