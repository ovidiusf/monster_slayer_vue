new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        isGameRunning: false,
        turns: []
    },
    methods: {
        startGame: function () {
            this.isGameRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];
        },
        attack: function () {
            let damage = this.calculateDamage(3, 10);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits Monster for ' + damage
            });
            if (this.checkWin()) {
                return;
            }
            this.monsterAttacks();
        },
        specialAttack: function () {
            let damage = this.calculateDamage(10, 20);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits Monster with SPECIAL ATTACK for ' + damage
            });

            if (this.checkWin()) {
                return;
            }
            this.monsterAttacks();
        },
        heal: function () {
            if(this.playerHealth + 10 <= 100){
                this.playerHealth += 10;
            }
            this.turns.unshift({
                isPlayer: true,
                text: 'Player heals for ' + 10
            });

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
            let damage = this.calculateDamage(5, 12);
            this.playerHealth -= damage;
            this.checkWin();
            this.turns.unshift({
                isPlayer: false,
                text: 'Monster hits Player for ' + damage
            });
        }
    }
});