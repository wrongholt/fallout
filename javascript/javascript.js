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
    typeHero,
    dex = 2,
    strong = 2,
    lvl = 0,
    cont = 1, 
    hitPoints = 10,
    pipe=0,
    gun = 0,
    loop = false,
    wait = document.createElement("IMG");
  //make any inputs or variables that have numbers attached to Numbers  
  dex = Number(dex);
  strong = Number(strong);
  hitPoints=Number(hitPoints);
  lvl = Number(lvl);
    

//insert stand by picture
$(".falling").append("Throughout this adventure please just hit \"Enter or Return\" to continue.  Thank you and have fun.");
wait.setAttribute("src", 'images/pleasestandby.jpg');
        wait.setAttribute("width", "300");
        wait.setAttribute("width", "230");
        wait.setAttribute("alt", "Please Stand By");
        document.body.appendChild(wait);
//start function for keydown that equals "enter" the code is 13  
  $(document).on("keydown", function (event) {
    if (event.which == 13) {
//start switch for the adventure       
       switch (cont) {
      case 1:
        alert("Spelling needs to be perfect for the game to work correctly and up to its potential.  Please write words exactly as they are being asked.  Thank you and have fun playing!!")
        characterName = prompt("What is your hero named?");
        while(typeHero !== "dex" && typeHero !== "strong"){ 
          typeHero = prompt ("Are you a strong or dex Hero?"); 
        }
          break;
      case 2:
        $(".falling").append("<h2>Chapter 1</h2><h3>" + characterName + ", " + typeHero + " Hero, Level " + (lvl + 1) + "</h3>");
        $(".falling").append("<p>You awake from a long slumber! \"" + characterName + "! What are you doing we need you now mole rats are attacking everyone in the kitchen!\" </p>\n");
        $(".falling").append("<p>You look around and you see a pipe or a crudely made .38 cal revolver.</p>");    
          break;   
      case 3: 
//create while loop making sure answers equal pipe or gun       
       while(answers[0] !== "pipe" && answers[0] !== "gun"){
        answers[0] = prompt("Do you pick the pipe or gun?");}
//all if statements create a path for user        
        if(answers[0]=='pipe' && typeHero=='strong'){
          pipe = (3 + strong);
          $(".falling").append("<p>You are grabbed as soon as you take hold of the pipe and you head towards the kitchen!</p>");
        }
        if(answers[0]=='pipe' && typeHero=='dex'){
          pipe = (1 + dex);
          $(".falling").append("<p>You are grabbed as soon as you take hold of the pipe and you head towards the kitchen!</p>");
        }  
        if(answers[0]=='gun' && typeHero=='dex'){
          gun = (4 + dex)
          $(".falling").append("<p>As you grab the gun you glance in the cylinder and notice only one bullet...You are ripped out of the bedroom by one crazy woman! You head towards the kitchen. Good Luck</p>");
        }
        if(answers[0]=='gun' && typeHero=='strong'){
          gun = (1 + strong)
          $(".falling").append("<p>As you grab the gun you glance in the cylinder and notice only one bullet...You are ripped out of the bedroom by one crazy woman! You head towards the kitchen. Good Luck</p>");
        }
          break;
      case 4:
        $(".falling").append("<p>As you bend the corner of into the kitchen, someone comes running out flailing their arms like they were on fire and almost runs you over! \"Watch it " + characterName + " can't you see I am running here!\" You peer into the kitchen and see two mole rats...</p>");
          break;
      case 5:
//create while loop making sure answers equal kill or run      
        while(answers[1] !== "kill" && answers[1] !== "run"){
        answers[1] = prompt("Do you run or try to kill them?");}  
        if(answers[1]=='run'){
          $(".falling").append("<p>You run and scream like a little girl but you don't get far and run into a wall!  You are knocked out instantly and your body is now feeding grounds for the mole rats! You're Dead!</p><h2>Game Over!!!</h2><h2>Hit Points:" + (hitPoints-10) + "</h2><h2><a href =\"index.html\">Restart</a></h2>");
        hitPoints = (hitPoints-10);
        }
        if(answers[1]=='kill' && answers[0]=='pipe' && typeHero=='strong'){
          $(".falling").append("<p>You take your " + answers[0] + " slamming it into the mole rat and doing " + pipe + " points of damage and killing it instantly but there is one left.  Since you are a \"" + typeHero + "\" character, you have the grit to finish off the second with another massive blow!</p>");
        }
        if(answers[1]=='kill' && answers[0]=='pipe' && typeHero=='dex'){
           $(".falling").append("<p>You suck you hit it but only doing " + pipe + " damage and the other mole rat starts gnawing on your leg killing you slowly! You're Dead!</p><h2>Game Over!!!</h2><h2>Hit Points:" + (hitPoints-10) + "</h2><h2><a href =\"index.html\">Restart</a></h2>");
        hitPoints = (hitPoints-10);
        }
        if(answers[1]=='kill' && answers[0]=='gun' && typeHero=='dex'){
          $(".falling").append("<p>You take your " + answers[0] + " aiming it at the mole rat and shot your only bullet doing " + gun + " points of damage to it and since you are \"" + typeHero + "\" character, it goes through one; killing it and kills the one behind it!  Wicked Shot!</p>");
        }
        if(answers[1]=='kill' && answers[0]=='gun' && typeHero=='strong'){
           $(".falling").append("<p>You suck you grazed it with a bullet and only doing " + gun + " damage and the other mole rat starts gnawing on your leg killing you slowly! You're Dead!</p><h2>Game Over!!!</h2><h2>Hit Points:" + (hitPoints-10) + "</h2><h2><a href =\"index.html\">Restart</a></h2>");
        hitPoints = (hitPoints-10);
        }
          break;
      case 6:
//create while loop making sure answers equal search or continue or hitPoints < 0
        while(answers[2] !== "search" && answers[2] !== "continue" && hitPoints !== 0){
        answers[2] = prompt('Do you want to "search" the kitchen and mole rats or "continue" on?  Please pick search or continue.');  
        }
        if(answers[2]=='search' && typeHero=='dex'){
          $(".falling").append("<p>You look in one of the mole rats since it has a gaping hole in it and you find .38 rounds.  How did those get in there oh well this will be fun!  You load six rounds in the chambers.</p><p>You hear the door buzzer that’s not good! You run to the elevator *elevator music* *ding*. You run to the entrance.</p>");
        }
        if(answers[2]=='search' && typeHero=='strong'){  
          $(".falling").append("<p>You search the cupboards and find duct tape and nails. Woohoo what can I do with these I wonder? </p><p>You hear the door buzzer that’s not good! You run to the elevator *elevator music* *ding*. You run to the entrance.</p>");
        }
        if(answers[2]=='continue'){
          $(".falling").append("<p>You hear something you go around the corner.</p><p>You hear the door buzzer that’s not good! You run to the elevator *elevator music* *ding*. You run to the entrance.</p>");
        }
          break;     
      case 7:
        if(answers[2]=='search' && typeHero=='dex'){
          $(".falling").append("<p>You are smart and you take a position behind some boxes you see others that follow your lead.</p><p>As you wait you see sparks fly from the vault door, they are cutting through!  The door falls to the ground with a great bang and fills the room with smoke. You hear multiple screams like a crazed battle cry and the room gets filled with raiders. Many of them fall by your precise aim and bullets flying. They exchange a few blows to you and your friends and as the last raider falls by your bullet to the head, you did it you made it through alive. </p> <h2>End of Chapter 1!</h2><h2>Hit Points:" + (hitPoints-5) + "</h2>");
        }
        if(answers[2]=='search' && typeHero=='strong'){
          pipe=(pipe +2)
          $(".falling").append("<p>As you wait you take the nails and duct tape you found and affix them to the pipe.</p><p>As you wait you see sparks fly from the vault door, they are cutting through!  The door falls to the ground with a great bang and fills the room with smoke. You hear multiple screams like a crazed battle cry and the room gets filled with raiders. Many of them fall by your precision strikes and your massive blows. They exchange a few blows to you and your friends and as the last raider falls by your bullet to the head, you did it you made it through alive. </p> <h2>End of Chapter 1!</h2><h2>Hit Points:" + (hitPoints-4) + "</h2>");
        }
        if(answers[2]=='continue' && typeHero=='dex'){
          $(".falling").append("<p>You start to panic, since you have nothing to defend yourself with.  So, you run to the bathroom and cower next to the half working toilet.  You hear gun fire and a lot of screams, after it all dies down you get enough courage to get up and leave as soon as you leave the bathroom.  Your head gets cleaved off and you are dead! </p><h2>Game Over!!!</h2><h2>Hit Points:" + (hitPoints-10) + "</h2><h2><a href =\"index.html\">Restart</a></h2>");
        }
        if(answers[2]=='continue' && typeHero=='strong'){
          $(".falling").append("<p>You prep yourself and get ready to fight whatever comes through that door.</p><p>As you wait you see sparks fly from the vault door, they are cutting through!  The door falls to the ground with a great bang and fills the room with smoke. You hear multiple screams like a crazed battle cry and the room gets filled with raiders. Many of them fall but they exchange a few blows to you and your friends and as the last raider falls by your last blow to the head, you did it you made it through alive...barely. </p> <h2>End of Chapter 1!</h2><h2>Hit Points:" + (hitPoints-8) + "</h2>");
        }
  
     
  }
  cont++;
  }
  })
     //document.getElementById(".falling").innerHTML = output;//



