var Credits = {
	preload: function(){
        game.load.audio('credits', 'assets/sounds/credits.mp3');
	},

	create: function(){ 
		
		endtheme = game.add.audio('credits', 1, true);
		endtheme.play();
		game.stage.backgroundColor = '#000000';
		game.scale.setGameSize(window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio);
		end1 = game.add.bitmapText(250, 800, 'spacefont', 'Thank you for playing...', 40);
		
		game.time.events.add(50000, menu);
},
	update: function(){

		end1.position.y = end1.position.y-2;
		
	}
}
