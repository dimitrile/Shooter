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
		end2 = game.add.bitmapText(250, 1000, 'spacefont', 'CREDITS', 30);
		end3 = game.add.bitmapText(250, 1200, 'spacefont', 'Live long and prosper', 25);
		end4 = game.add.bitmapText(250, 1400, 'spacefont', 'may the force be with us', 25);
		end5 = game.add.bitmapText(250, 1600, 'spacefont', 'Paladins and pikemans', 25);
		end6 = game.add.bitmapText(250, 1800, 'spacefont' , 'Help me, Obi-Wan Kenobi. You’re my only hope.', 25);
		end7 = game.add.bitmapText(250, 2000, 'spacefont', 'I find your lack of faith disturbing.', 25);
		end8 = game.add.bitmapText(250, 2200,'spacefont', 'wololo', 25);
		end9 = game.add.bitmapText(250, 2400,'spacefont', 'oh heil... king of the looser',25);
		end10 = game.add.bitmapText(250, 2600,'spacefont', 'Logic is the beginning of wisdom, not the end.', 25);
		end11 = game.add.bitmapText(250, 2800,'spacefont', 'Monk I need a monk', 25);
		end12 = game.add.bitmapText(250, 3000,'spacefont', 'An old classic...', 25);
		end13 = game.add.bitmapText(250, 3200,'spacefont', 'Nothing surprises me; I’m a scientist.', 25);
		end14 = game.add.bitmapText(250, 3400,'spacefont', 'You’re meddling with powers you can’t possibly comprehend.', 25);
		end15 = game.add.bitmapText(250, 3600,'spacefont', 'That belongs in a museum!” “…So do you.', 25);
		f1 = game.add.bitmapText(250, 3800 , 'spacefont' , 'You’re gonna get killed chasing after your damn ‘fortune and glory' , 25);	
		f2 = game.add.bitmapText(250, 4000 , 'spacefont', 'Meteor power... Comets rule the universe', 25);
		
		game.time.events.add(50000, menu);
},
	update: function(){

		end1.position.y = end1.position.y-2;
		end2.position.y = end2.position.y-2;
		end3.position.y = end3.position.y-2;
		end4.position.y = end4.position.y-2;
		end5.position.y = end5.position.y-2;
		end6.position.y = end6.position.y-2;
		end7.position.y = end7.position.y-2;
		end8.position.y = end8.position.y-2;
		end9.position.y = end9.position.y-2;
		end10.position.y = end10.position.y-2;
		end11.position.y = end11.position.y-2;
		end12.position.y = end12.position.y-2;
		end13.position.y = end13.position.y-2;
		end14.position.y = end14.position.y-2;
		end15.position.y = end15.position.y-2;
		f1.position.y = f1.position.y-2;
		f2.position.y = f2.position.y-2;
	}
}
