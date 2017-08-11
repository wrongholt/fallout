 /*
 falloutGame
 Prompt for Character name
 Prompt for Strong or Dex hero
 Display Name with type of Hero
 Prompt for first action
 IF Statement
 Display first action
 Repeat
 End
 */

 //declare a variables
 var answers = [],
     characterName,
     cont = 1,
     typeHero,
     dex = 2,
     strong = 2,
     lvl = 0,
     hitPoints = 10,
     bat = 0,
     gun = 0,
     loop = false,
     audio = new Audio('media/maintheme.mp3'),
     wait = document.createElement("IMG");
 //make any inputs or variables that have numbers attached to Numbers  
 dex = Number(dex);
 strong = Number(strong);
 hitPoints = Number(hitPoints);
 lvl = Number(lvl);

setup();
 
 //page scroll so you don't have to do it yourself when the page goes down.  
 function pageScroll() {
     window.scrollBy(0, 1);
     scrolldelay = setTimeout(pageScroll, 10);
     audio.play();
 }
function setup(){
            $("#strong").click(function () {
                 typeHero = "strong";
                setupTwo();
             });
             $("#dex").click(function () {
                 typeHero = "dex";
                 setupTwo();
             });
             $("#smart").click(function () {
                 typeHero = "smart";
                 setupTwo();
             });
             $("#charisma").click(function () {
                 typeHero = "charisma";
                 setupTwo();
             });

}

 //insert stand by picture
 $(".falling").append("Throughout this adventure please just hit \"Click\" to continue.  Thank you and have fun.");
 wait.setAttribute("src", 'images/pleasestandby.jpg');
 wait.setAttribute("width", "300");
 wait.setAttribute("width", "230");
 wait.setAttribute("alt", "Please Stand By");
 document.body.appendChild(wait);

function setupTwo(){
    characterName = prompt("What is your hero named?");
    if(characterName == null){
        prompt("Please enter a hero name.");
    }else{
        start();
    } 
}
function start(){
 $(document).click(function () {

     //start switch for the adventure       
     switch (cont) {
         case 1:
              $(".falling").append("<h2>Chapter 1</h2><h3>" + characterName + ", " + typeHero + " Hero, Level " + (lvl + 1) + "</h3><br><img class ='char' src ='images/" + typeHero +".jpg'>" );
             break;
         case 2:
             $(".falling").append("<p>You awake from a long slumber! You hear a woman screaming at you. \"" + characterName + "! What are you doing we need you now mole rats are attacking everyone in the kitchen!\" </p>\n");
             $(".falling").append("<p>You sit up quickly and look around and you see a bat or a crudely made .38 cal revolver.</p>");
             $(".falling").append("<p><img id = 'bat' src =\"images/bat.jpg\" height = '200' width = '300'>\n<img id = 'gun' src = \"images/rustyrevolver.jpg\" height = '200' width = '200'><br>Please select an item by clicking on it.</p>");
             $("#gun").click(function () {
                 answers[0] = "gun";
             });
             $("#bat").click(function () {
                 answers[0] = "bat";
             });
             break;
         case 3:
             //create while loop making sure answers equal bat or gun               
             if (answers[0] == 'bat' && typeHero == 'strong') {
                 bat = (3 + strong);
                 $(".falling").append("<p>You are grabbed as soon as you take hold of the bat and you head towards the kitchen!</p>");
             }
             if (answers[0] == 'bat' && typeHero == 'dex') {
                 bat = (1 + dex);
                 $(".falling").append("<p>You are grabbed as soon as you take hold of the bat and you head towards the kitchen!</p>");
             }
             if (answers[0] == 'gun' && typeHero == 'dex') {
                 gun = (4 + dex)
                 $(".falling").append("<p>As you grab the gun you glance in the cylinder and notice only one bullet...You are ripped out of the bedroom by one crazy woman! You head towards the kitchen. Good Luck</p>");
             }
             if (answers[0] == 'gun' && typeHero == 'strong') {
                 gun = (1 + strong)
                 $(".falling").append("<p>As you grab the gun you glance in the cylinder and notice only one bullet...You are ripped out of the bedroom by one crazy woman! You head towards the kitchen. Good Luck</p>");
             }if(answers[0] == 'gun' && typeHero == 'smart'){
                 $(".falling").append("<p>As you grab the gun you remember you keep ammo in your night stand, you grab it quickly(smart thinking!)...You get ripped out of the bedroom by one crazy woman! You head towards the kitchen.</p>");
             }if (answers[0] == 'bat' || answers[0] == 'gun' && typeHero == 'charisma') {
                 $(".falling").append("<p>As you grab the weapon...You get ripped out of the bedroom by one crazy woman! You head towards the kitchen.</p>");
             }
             
             break;
         case 4:
             $(".falling").append("<p>As you bend the corner of into the kitchen, someone comes running out flailing their arms like they were on fire and almost runs you over! \"Watch it " + characterName + " can't you see I am running here!\" You peer into the kitchen and see two mole rats...</p>");
             break;
         case 5:
             //create while loop making sure answers equal kill or run      
             while (answers[1] !== "kill" && answers[1] !== "run") {
                 answers[1] = prompt("Do you run or try to kill them?");
             }
             if (answers[1] == 'run') {
                 $(".falling").append("<p>You run and scream like a little girl but you don't get far and run into a wall!  You are knocked out instantly and your body is now feeding grounds for the mole rats! You're Dead!</p><h2>Game Over!!!</h2><h2>Hit Points:" + (hitPoints - 10) + "</h2><h2><a href =\"index.html\">Restart</a></h2>");
                 hitPoints = (hitPoints - 10);
             }
             if (answers[1] == 'kill' && answers[0] == 'bat' && typeHero == 'strong') {
                 $(".falling").append("<p>You take your " + answers[0] + " slamming it into the mole rat and doing " + bat + " points of damage and killing it instantly but there is one left.  Since you are a \"" + typeHero + "\" character, you have the grit to finish off the second with another massive blow!</p>");
             }
             if (answers[1] == 'kill' && answers[0] == 'bat' && typeHero == 'dex') {
                 $(".falling").append("<p>You suck you hit it but only doing " + bat + " damage and the other mole rat starts gnawing on your leg killing you slowly! You're Dead!</p><h2>Game Over!!!</h2><h2>Hit Points:" + (hitPoints - 10) + "</h2><h2><a href =\"index.html\">Restart</a></h2>");
                 hitPoints = (hitPoints - 10);
             }
             if (answers[1] == 'kill' && answers[0] == 'gun' && typeHero == 'dex') {
                 $(".falling").append("<p>You take your " + answers[0] + " aiming it at the mole rat and shot your only bullet doing " + gun + " points of damage to it and since you are \"" + typeHero + "\" character, it goes through one; killing it and kills the one behind it!  Wicked Shot!</p>");
             }
             if (answers[1] == 'kill' && answers[0] == 'gun' && typeHero == 'strong') {
                 $(".falling").append("<p>You suck you grazed it with a bullet and only doing " + gun + " damage and the other mole rat starts gnawing on your leg killing you slowly! You're Dead!</p><h2>Game Over!!!</h2><h2>Hit Points:" + (hitPoints - 10) + "</h2><h2><a href =\"index.html\">Restart</a></h2>");
                 hitPoints = (hitPoints - 10);
             }
             if (answers[1] == 'kill' && answers[0] == 'gun' && typeHero == 'smart') {
                 $(".falling").append("<p>You take your " + answers[0] + " and load it up with ammo.  You shoot at the first one, doing" + gun + " points of damage to it and since you are \"" + typeHero + "\" character, you use your V.A.T.S. to do critical hits on the other two mole rats!</p>");
             }
             if (answers[1] == 'kill' && answers[0] == 'bat' && typeHero == 'smart') {
                 $(".falling").append("<p>What were you thinking your not a melee man! You swing at the first mole rat missed it, smaked the wall which sends the bat back at you knocking you to the ground. The mole rats start  gnawing on your legs killing you slowly! You're Dead!</p><h2>Game Over!!!</h2><h2>Hit Points:" + (hitPoints - 10) + "</h2><h2><a href =\"index.html\">Restart</a></h2>");
                 hitPoints = (hitPoints - 10);
             }
             break;
         case 6:
             //create while loop making sure answers equal search or continue or hitPoints < 0
             while (answers[2] !== "search" && answers[2] !== "continue" && hitPoints !== 0) {
                 answers[2] = prompt('Do you want to "search" the kitchen and mole rats or "continue" on?  Please pick search or continue.');
             }
             if (answers[2] == 'search' && typeHero == 'dex') {
                 $(".falling").append("<p>You look in one of the mole rats since it has a gaping hole in it and you find .38 rounds.  How did those get in there oh well this will be fun!  You load six rounds in the chambers.</p><p>You hear the door buzzer that’s not good! You run to the elevator *elevator music* *ding*. You run to the entrance.</p>");
             }
             if (answers[2] == 'search' && typeHero == 'strong') {
                 $(".falling").append("<p>You search the cupboards nails and hammer. Woohoo what can I do with these I wonder? </p><p>You hear the door buzzer that’s not good! You run to the elevator *elevator music* *ding*. You run to the entrance.</p>");
             }
             if (answers[2] == 'continue') {
                 $(".falling").append("<p>You hear something you go around the corner.</p><p>You hear the door buzzer that’s not good! You run to the elevator *elevator music* *ding*. You run to the entrance.</p>");
             }
             break;
         case 7:
             if (answers[2] == 'search' && typeHero == 'dex') {
                 $(".falling").append("<p>You are smart and you take a position behind some boxes you see others that follow your lead.</p><p>As you wait you see sparks fly from the vault door, they are cutting through!  The door falls to the ground with a great bang and fills the room with smoke. You hear multiple screams like a crazed battle cry and the room gets filled with raiders. Many of them fall by your precise aim and bullets flying. They exchange a few blows to you and your friends and as the last raider falls by your bullet to the head, you did it you made it through alive. </p> <h2>End of Chapter 1!</h2><h2>Hit Points:" + (hitPoints - 5) + "</h2>");
             }
             if (answers[2] == 'search' && typeHero == 'strong') {
                 bat = (bat + 2)
                 $(".falling").append("<p>As you wait you take the nails and hammer that you found and hammer them into the bat.<br><img src ='images/batnails.jpg' height ='200' width='300'></p><p>As you wait you see sparks fly from the vault door, they are cutting through!  The door falls to the ground with a great bang and fills the room with smoke. You hear multiple screams like a crazed battle cry and the room gets filled with raiders. Many of them fall by your precision strikes and your massive blows. They exchange a few blows to you and your friends and as the last raider falls by your bullet to the head, you did it you made it through alive. </p> <h2>End of Chapter 1!</h2><h2>Hit Points:" + (hitPoints - 4) + "</h2>");
             }
             if (answers[2] == 'continue' && typeHero == 'dex') {
                 $(".falling").append("<p>You start to panic, since you have nothing to defend yourself with.  So, you run to the bathroom and cower next to the half working toilet.  You hear gun fire and a lot of screams, after it all dies down you get enough courage to get up and leave as soon as you leave the bathroom.  Your head gets cleaved off and you are dead! </p><h2>Game Over!!!</h2><h2>Hit Points:" + (hitPoints - 10) + "</h2><h2><a href =\"index.html\">Restart</a></h2>");
             }
             if (answers[2] == 'continue' && typeHero == 'strong') {
                 $(".falling").append("<p>You prep yourself and get ready to fight whatever comes through that door.</p><p>As you wait you see sparks fly from the vault door, they are cutting through!  The door falls to the ground with a great bang and fills the room with smoke. You hear multiple screams like a crazed battle cry and the room gets filled with raiders. Many of them fall but they exchange a few blows to you and your friends and as the last raider falls by your last blow to the head, you did it you made it through alive...barely. </p> <h2>End of Chapter 1!</h2><h2>Hit Points:" + (hitPoints - 8) + "</h2>");
             }


     }
     
cont++;
    })
    
}
 pageScroll();
 //document.getElementById(".falling").innerHTML = output;//
