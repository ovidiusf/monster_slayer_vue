new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        isGameRunning: false
    },
    methods: {
        startGame: function () {
            this.isGameRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        attack: function () {
            this.playerAttacks(3, 10);

            if (this.checkWin()) {
                return;
            }
            this.monsterAttacks();
        },
        specialAttack: function () {
            this.playerAttacks(10, 20);

            if (this.checkWin()) {
                return;
            }
            this.monsterAttacks();
        },
        heal: function () {
            if(this.playerHealth + 10 <= 100){
                this.playerHealth += 10;
            }
            this.monsterAttacks();
        },
        giveUp: function () {
            this.isGameRunning = false; 
        },
        calculateDamage: function (min, max) {
            // damage is the maximum between the minimum damage and
            // the calculated random damage (up until the max dmg)
            return damage = Math.max(min, Math.floor(Math.random() * max) + 1);
        },
        checkWin: function () {
            if (this.monsterHealth <= 0) {
                this.monsterHealth = 0;
                if (confirm('You won! New Game?')) {
                    this.startGame();
                } else {
                    this.isGameRunning = false;
                }
                return true;
            } else if (this.playerHealth <= 0) {
                this.playerHealth = 0;
                if (confirm('You lost! New Game?')) {
                    this.startGame();
                } else {
                    this.isGameRunning = false;
                }
                return true;
            }
            return false;
        },
        monsterAttacks: function () {
            this.playerHealth -= this.calculateDamage(5, 12);
            this.checkWin();
        },
        playerAttacks: function (min, max) {
            this.monsterHealth -= this.calculateDamage(min, max);
        }
    }
});