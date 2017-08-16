demo.state4 = function(){};
demo.state4.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#aa0099';
        console.log('state4');
        addChangeStateEventListeners();
    },
    update: function(){}
};