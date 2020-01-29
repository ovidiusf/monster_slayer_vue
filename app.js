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
            let max = 10;
            let min = 3;
            // damage is the maximum between the minimum damage and
            // the calculated random damage (up until the max dmg)
            let damage = Math.max(min, Math.floor(Math.random() * max) + 1);
            this.monsterHealth -=damage;

            if(this.monsterHealth <=0){
                alert('You won!');
                this.isGameRunning = false;
                this.monsterHealth = 0;
                return;
            }

            max = 12;
            min = 5;
            damage = Math.max(min, Math.floor(Math.random() * max) + 1);
            this.playerHealth -= damage;

            if(this.playerHealth <=0){
                alert('You lost!');
                this.isGameRunning = false;
                this.playerHealth = 0;
                return;
            }
        },
        specialAttack: function () {

        },
        heal: function () {

        },
        giveUp: function () {

        }
    }
});