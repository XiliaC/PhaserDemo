var game = new Phaser.Game(600, 400, Phaser.AUTO);
game.state.add('state', demo.state1);
game.state.start('state1')