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
            this.monsterHealth -= this.calculateDamage(3, 10);

            if(this.checkWin()) {
                return;
            }
            this.playerHealth -= this.calculateDamage(5, 12);
            
            this.checkWin();
        },
        specialAttack: function () {

        },
        heal: function () {

        },
        giveUp: function () {

        },
        calculateDamage: function (min, max) {
            // damage is the maximum between the minimum damage and
            // the calculated random damage (up until the max dmg)
            return damage = Math.max(min, Math.floor(Math.random() * max) + 1);
        },
        checkWin: function() {
            if (this.monsterHealth <= 0) {
                this.monsterHealth = 0;
                if(confirm('You won! New Game?')) {
                    this.startGame();
                }else {
                    this.isGameRunning = false;
                }
                return true;
            }else if(this.playerHealth <=0){
                this.playerHealth = 0;
                if(confirm('You lost! New Game?')) {
                    this.startGame();
                }else {
                    this.isGameRunning = false;
                }
                return true;
            }
            return false;
        }
    }
});