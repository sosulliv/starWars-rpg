$(document).ready(function(){


  $( "#play_again" ).on( "click", function() {
                       window.location.reload(false);    
                      

                       
                       });

//Array of Playable Characters
let characters = {
    'skywalker': {
        health: 120,
        attack: 8,
        counterAttack: 15
    }, 
    'vader': {
        health: 105,
        attack: 20,
        counterAttack: 5
    }, 
    'fett': {
        health: 150,
        attack: 8,
        counterAttack: 10
    }, 
    'kenobi': {
        health: 180,
        attack: 7,
        counterAttack: 20
    }
    };
    

   
$( "#fett_health" ).html(characters.fett.health);
$( "#vader_health" ).html(characters.vader.health);
$( "#skywalker_health" ).html(characters.skywalker.health);
$( "#kenobi_health" ).html(characters.kenobi.health);






var character;
var defender;
var combatants = [];
var killCount = 0;
var counter = 0;
var health_char=0;
var health_def=0;

var attack_char=0;
var attack_orig_char=0;
var attack_def=0;



//Set Combatants
$( ".character" ).on( "click", function() {
                     counter= counter +1;
                     console.log(counter);
                          
                     if ($(".character").parents("#character_target").length !== 1 &&  counter===1)  {
                                  
                                   Character = $(this).attr('id');
                                   console.log(Character);
                         			$('#'+ Character).appendTo("#character_target");
                         			 x=$(".character").parents("#character_target").length == 1; 
                     	           console.log(x);
  						 			$( "#instruction" ).html("Choose Your Opponent.....");

  						 			health_char=characters[Character].health;
  						 			attack_char=characters[Character].attack;
  						 			attack_orig_char=characters[Character].attack;

  						 			console.log(health_char);
                          
                      }

                      if ($(".character").parents("#character_target").length === 1 && $(".character").parents("#opp_target").length !== 1 && counter===2 )  {

                                    Defender = $(this).attr('id');
                                    console.log(Defender);
                                	$('#'+ Defender).appendTo("#opp_target");
                                	$( "#instruction" ).html("Click the Attack Button.....");
                                	health_def=characters[Defender].health;
                                	attack_def=characters[Defender].counterAttack;
  						 			console.log(health_def);
                                 
                                 
                      }
                        });



$( "#attack" ).on( "click", function() {
   
     health_def = health_def-attack_char;
     console.log(health_def);
     $( "#" + Defender + "_health" ).html(health_def);

     
     attack_char = attack_char+attack_orig_char;



     console.log("im here"+ attack_char+ " " + attack_orig_char);


      console.log("attack");

       health_char=health_char-attack_def;
      $( "#" + Character + "_health" ).html(health_char);


      if (health_char <= 0) {

      		$( "#instruction" ).html("You Lose! Please press play again");

      }

      if (health_def <= 0) {

      		$( "#instruction" ).html("Vanquished! Choose a new Enemy");

      		//Vanquished 3
			
    	    //var $img = $("#" + Defender).clone();
    		//$("#opp_target").append($img);
             $("#" + Defender).appendTo("#vanquished_character" +  killCount);
             health_def=0;
             $( "#" + Defender + "_health" ).html(health_def);
             Defender="";
             //counter=1;
             killCount= killCount+1; 
             console.log(killCount);
             if (killCount>0)  {

             	 counter=1;
             }         
   			 console.log("hello" + "#" + Defender);
	      }

  });
/*

	  
//Player
$("#vader_image").on("click",function(){
    //var $img = $("#vader_image").clone();

    $("#vader_image").appendTo("#character_target");
   // $("#character_target").append($img);
   $( "#instruction" ).html("Choose Your Opponent.....");
    console.log("hello");
    console.log(characters.vader.health);
});


//Opponent
$("#fett_image").on("click",function(){
    //var $img = $("#fett_image").clone();
    //$("#opp_target").append($img);
   $("#fett_image").appendTo("#opp_target");
   $( "#instruction" ).html("Click the Attack Button.....");
   console.log("hello2");
});


$("#skywalker_image").on("click",function(){
    //var $img = $("#fett_image").clone();
    //$("#opp_target").append($img);
    $("#skywalker_image").appendTo("#vanquished_character1");
    console.log("hello");
});


$("#kenobi_image").on("click",function(){
    //var $img = $("#fett_image").clone();
    //$("#opp_target").append($img);
    $("#kenobi_image").appendTo("#vanquished_character2");
    console.log("hello");
});

//Vanquished 3
//$("#fett_image").on("click",function(){
    //var $img = $("#fett_image").clone();
    //$("#opp_target").append($img);
  //  $("#fett_image").appendTo("#vanquished_character3");
   // console.log("hello");
//});

*/




});