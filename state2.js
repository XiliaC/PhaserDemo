demo.state2 = function(){};
demo.state2.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#336699';
        console.log('state2');
        addChangeStateEventListeners();
    },
    update: function(){}
};