window.onload = (function() {

    var player = ""; // save the choice of player
    var ai = "";
    var gameEnd = false;
    var result= ""; // gives back the result
    var aiFirst = false;

    //store info of input
    var memBoard = {
          0 : "",
          1 : "",
          2 : "",
          3 : "",
          4 : "",
          5 : "",
          6 : "",
          7 : "",
          8 : ""
    }
//
    //eventListener for each field
    document.getElementById("0").addEventListener("click",function() {document.getElementById("0").innerHTML = player; memBoard[this.id] = "human"; win();moveAI();});
    document.getElementById("1").addEventListener("click",function() {document.getElementById("1").innerHTML = player; memBoard[this.id] = "human"; win();moveAI();});
    document.getElementById("2").addEventListener("click",function() {document.getElementById("2").innerHTML = player; memBoard[this.id] = "human"; win();moveAI();});
    document.getElementById("3").addEventListener("click",function() {document.getElementById("3").innerHTML = player; memBoard[this.id] = "human"; win();moveAI();});
    document.getElementById("4").addEventListener("click",function() {document.getElementById("4").innerHTML = player; memBoard[this.id] = "human"; win();moveAI();});
    document.getElementById("5").addEventListener("click",function() {document.getElementById("5").innerHTML = player; memBoard[this.id] = "human"; win();moveAI();});
    document.getElementById("6").addEventListener("click",function() {document.getElementById("6").innerHTML = player; memBoard[this.id] = "human"; win();moveAI();});
    document.getElementById("7").addEventListener("click",function() {document.getElementById("7").innerHTML = player; memBoard[this.id] = "human"; win();moveAI();});
    document.getElementById("8").addEventListener("click",function() {document.getElementById("8").innerHTML = player; memBoard[this.id] = "human"; win();moveAI();});


    //eventListener for clicking x and o
    document.getElementById("x").addEventListener("click",showGame);
    document.getElementById("O").addEventListener("click",showGame);

    //show the game
    function showGame () {
      memBoard = {
            0 : "",
            1 : "",
            2 : "",
            3 : "",
            4 : "",
            5 : "",
            6 : "",
            7 : "",
            8 : ""
      }
          console.log(memBoard);
          player = this.id;
          document.getElementById("choice").className = "hidden";
          document.getElementById("game").className = "container vertical-center";
          if(player == "O") {
            aiFirst=true;
            ai ="x";
            moveAI();

          }
          else {
            ai = "O";
          }

    }

    //eventListener for newGame
    document.getElementById("new-game").addEventListener("click",choiceXO);

    //game will start
    function choiceXO () {
      document.getElementById("game").className = "hidden";
      document.getElementById("choice").className = "text-center";
      document.getElementById("final-screen").className = "hidden";
      document.getElementById("0").innerHTML = "";
      document.getElementById("1").innerHTML = "";
      document.getElementById("2").innerHTML = "";
      document.getElementById("3").innerHTML = "";
      document.getElementById("4").innerHTML = "";
      document.getElementById("5").innerHTML = "";
      document.getElementById("6").innerHTML = "";
      document.getElementById("7").innerHTML = "";
      document.getElementById("8").innerHTML = "";
    }

      //function to display end of Game
        function end () {
            if(gameEnd === true) {
              document.getElementById("final-screen").className = "text-center";
              document.getElementById("winner").innerHTML = winner;
              gameEnd = false;
              aiFirst= false;
              player = "";
              ai = "";
              winner = "";

            }
          }

    // the move of the AI
    function moveAI () {
      console.log("moveAI");

    if(aiFirst === true) {
          document.getElementById("6").innerHTML= ai;
          memBoard[6] = "ai";
          aiFirst = false;
          }
  // first check for ai win
    else if(memBoard[0] === "" && ((memBoard[1] === "ai" && memBoard[2] === "ai") || (memBoard[3] === "ai" && memBoard[6] === "ai") || (memBoard[4] === "ai" && memBoard[8] === "ai"))) {
            document.getElementById("0").innerHTML= ai;
            memBoard[0] = "ai";
    }
    else if(memBoard[1] === "" && ((memBoard[0] === "ai" && memBoard[2] === "ai") || (memBoard[4] === "ai" && memBoard[7] === "ai")))  {
            document.getElementById("1").innerHTML= ai;
            memBoard[1] = "ai";
    }
    else if(memBoard[2] === "" && ((memBoard[0] === "ai" && memBoard[1] === "ai") || (memBoard[6] === "ai" && memBoard[4] === "ai") || (memBoard[5] === "ai" && memBoard[8] === "ai"))) {
            document.getElementById("2").innerHTML= ai;
            memBoard[2] = "ai";
    }
    else if(memBoard[3] === "" && ((memBoard[0] === "ai" && memBoard[6] === "ai") || (memBoard[4] === "ai" && memBoard[5] === "ai"))) {
            document.getElementById("3").innerHTML= ai;
            memBoard[3] = "ai";
    }
    else if(memBoard[4] === "" && ((memBoard[0] === "ai" && memBoard[8] === "ai") || (memBoard[2] === "ai" && memBoard[6] === "ai") || (memBoard[1] === "ai" && memBoard[7] === "ai"))) {
            document.getElementById("4").innerHTML= ai;
            memBoard[4] = "ai";
    }
    else if(memBoard[5] === "" && ((memBoard[2] === "ai" && memBoard[8] === "ai") || (memBoard[3] === "ai" && memBoard[4] === "ai"))){
            document.getElementById("5").innerHTML= ai;
            memBoard[5] = "ai";
    }
    else if(memBoard[6] === "" && ((memBoard[0] === "ai" && memBoard[3] === "ai") || (memBoard[2] === "ai" && memBoard[4] === "ai") || (memBoard[7] === "ai" && memBoard[8] === "ai"))) {
            document.getElementById("6").innerHTML= ai;
            memBoard[6] = "ai";
    }
    else if(memBoard[7] === "" && ((memBoard[6] === "ai" && memBoard[8] === "ai") || (memBoard[4] === "ai" && memBoard[1] === "ai")))  {
            document.getElementById("7").innerHTML= ai;
            memBoard[7] = "ai";
    }
    else if(memBoard[8] === "" && ((memBoard[6] === "ai" && memBoard[7] === "ai") || (memBoard[2] === "ai" && memBoard[5] === "ai") || (memBoard[4] === "ai" && memBoard[0] === "ai"))) {
            document.getElementById("8").innerHTML= ai;
            memBoard[8] = "ai";
    }
  // check for blocking player
  else if(memBoard[0] === "" && ((memBoard[1] === "human" && memBoard[2] === "human") || (memBoard[3] === "human" && memBoard[6] === "human") || (memBoard[4] === "human" && memBoard[8] === "human"))) {
          document.getElementById("0").innerHTML= ai;
          memBoard[0] = "ai";
  }
  else if(memBoard[1] === "" && ((memBoard[0] === "human" && memBoard[2] === "human") || (memBoard[4] === "human" && memBoard[7] === "human")))  {
          document.getElementById("1").innerHTML= ai;
          memBoard[1] = "ai";
  }
  else if(memBoard[2] === "" && ((memBoard[0] === "human" && memBoard[1] === "human") || (memBoard[6] === "human" && memBoard[4] === "human") || (memBoard[5] === "human" && memBoard[8] === "human"))) {
          document.getElementById("2").innerHTML= ai;
          memBoard[2] = "ai";
  }
  else if(memBoard[3] === "" && ((memBoard[0] === "human" && memBoard[6] === "human") || (memBoard[4] === "human" && memBoard[5] === "human"))) {
          document.getElementById("3").innerHTML= ai;
          memBoard[3] = "ai";
  }
  else if(memBoard[4] === "" && ((memBoard[0] === "human" && memBoard[8] === "human") || (memBoard[2] === "human" && memBoard[6] === "human") || (memBoard[1] === "human" && memBoard[7] === "human"))) {
          document.getElementById("4").innerHTML= ai;
          memBoard[4] = "ai";
  }
  else if(memBoard[5] === "" && ((memBoard[2] === "human" && memBoard[8] === "human") || (memBoard[3] === "human" && memBoard[4] === "human"))){
          document.getElementById("5").innerHTML= ai;
          memBoard[5] = "ai";
  }
  else if(memBoard[6] === "" && ((memBoard[0] === "human" && memBoard[3] === "human") || (memBoard[2] === "human" && memBoard[4] === "human") || (memBoard[7] === "human" && memBoard[8] === "human"))) {
          document.getElementById("6").innerHTML= ai;
          memBoard[6] = "ai";
  }
  else if(memBoard[7] === "" && ((memBoard[6] === "human" && memBoard[8] === "human") || (memBoard[4] === "human" && memBoard[1] === "human")))  {
          document.getElementById("7").innerHTML= ai;
          memBoard[7] = "ai";
  }
  else if(memBoard[8] === "" && ((memBoard[6] === "human" && memBoard[7] === "human") || (memBoard[2] === "human" && memBoard[5] === "human") || (memBoard[4] === "human" && memBoard[0] === "human"))) {
          document.getElementById("8").innerHTML= ai;
          memBoard[8] = "ai";
  }

  //block if opposite corner
  else if(memBoard[1] === "" && (memBoard[0] === "human" && memBoard[8] === "human")) {
          document.getElementById("1").innerHTML= ai;
          memBoard[1] = "ai";
  }
  else if(memBoard[7] === "" && (memBoard[2] === "human" && memBoard[6] === "human")) {
          document.getElementById("7").innerHTML= ai;
          memBoard[7] = "ai";
  }
  //center free
  else if(memBoard[4] === "") {
          document.getElementById("4").innerHTML= ai;
          memBoard[4] = "ai";
  }
  //play opposite corner
  else if(memBoard[0] === "" && (memBoard[6] === "human" || memBoard[2] === "human")) {
          document.getElementById("0").innerHTML= ai;
          memBoard[0] = "ai";
  }
  else if(memBoard[2] === "" && (memBoard[0] === "human" || memBoard[8] === "human")) {
          document.getElementById("2").innerHTML= ai;
          memBoard[2] = "ai";
  }
  else if(memBoard[6] === "" && (memBoard[0] === "human" || memBoard[8] === "human")) {
          document.getElementById("6").innerHTML= ai;
          memBoard[6] = "ai";
  }
  else if(memBoard[8] === "" && (memBoard[6] === "human" || memBoard[2] === "human")) {
          document.getElementById("8").innerHTML= ai;
          memBoard[8] = "ai";
  }

  //corner free
  else if(memBoard[0] === "") {
          document.getElementById("0").innerHTML= ai;
          memBoard[0] = "ai";
  }
  else if(memBoard[2] === "") {
          document.getElementById("2").innerHTML= ai;
          memBoard[2] = "ai";
  }
  else if(memBoard[6] === "") {
          document.getElementById("6").innerHTML= ai;
          memBoard[6] = "ai";
  }
  else if(memBoard[8] === "") {
          document.getElementById("8").innerHTML= ai;
          memBoard[8] = "ai";
  }
  //empty side
  else if(memBoard[1] === "") {
          document.getElementById("1").innerHTML= ai;
          memBoard[1] = "ai";
  }
  else if(memBoard[3] === "") {
          document.getElementById("3").innerHTML= ai;
          memBoard[3] = "ai";
  }
  else if(memBoard[5] === "") {
          document.getElementById("5").innerHTML= ai;
          memBoard[5] = "ai";
  }
  else if(memBoard[7] === "") {
          document.getElementById("7").innerHTML= ai;
          memBoard[7] = "ai";
  }

  console.log(memBoard);
  win();
  }

    //check for win
    function win () {

      //human
    if(memBoard[0]== "human"&&memBoard[1] == "human" && memBoard[2]== "human") {
      gameEnd = true;
      winner = "You won!";
    }
    else if(memBoard[3]== "human"&&memBoard[4] == "human" && memBoard[5]== "human") {
      winner = "You won!";
      gameEnd = true;
    }
    else if(memBoard[6]== "human"&&memBoard[7] == "human" && memBoard[8]== "human") {
      winner = "You won!";
      gameEnd = true;
    }
    else if(memBoard[0]== "human"&&memBoard[3] == "human" && memBoard[6]== "human") {
      winner = "You won!";
      gameEnd = true;
    }
    else if(memBoard[1]== "human"&&memBoard[4] == "human" && memBoard[7]== "human") {
      winner = "You won!";
      gameEnd = true;
    }
    else if(memBoard[2]== "human"&&memBoard[5] == "human" && memBoard[8]== "human") {
      winner = "You won!";
      gameEnd = true;
    }
    else if(memBoard[0]== "human"&&memBoard[4] == "human" && memBoard[8]== "human") {
      winner = "You won!";
      gameEnd = true;
    }
    else if(memBoard[2]== "human"&&memBoard[4] == "human" && memBoard[6]== "human") {
      winner = "You won!";
      gameEnd = true;
    }
    //AI
    if(memBoard[0]== "ai"&&memBoard[1] == "ai" && memBoard[2]== "ai") {
      gameEnd = true;
      winner = "Computer won!";
    }
    else if(memBoard[3]== "ai"&&memBoard[4] == "ai" && memBoard[5]== "ai") {
      winner = "Computer won!";
      gameEnd = true;
    }
    else if(memBoard[6]== "ai"&&memBoard[7] == "ai" && memBoard[8]== "ai") {
      winner = "Computer won!";
      gameEnd = true;
    }
    else if(memBoard[0]== "ai"&&memBoard[3] == "ai" && memBoard[6]== "ai") {
      winner = "Computer won!";
      gameEnd = true;
    }
    else if(memBoard[1]== "ai"&&memBoard[4] == "ai" && memBoard[7]== "ai") {
      winner = "Computer won!";
      gameEnd = true;
    }
    else if(memBoard[2]== "ai"&&memBoard[5] == "ai" && memBoard[8]== "ai") {
      winner = "Computer won!";
      gameEnd = true;
    }
    else if(memBoard[0]== "ai"&&memBoard[4] == "ai" && memBoard[8]== "ai") {
      winner = "Computer won!";
      gameEnd = true;
    }
    else if(memBoard[2]== "ai"&&memBoard[4] == "ai" && memBoard[6]== "ai") {
      winner = "Computer won!";
      gameEnd = true;
    }
    //Draw
    else {
      //count how many fields are taken
      var count = 0;
      for(i=0; i<= 8; i++) {
            if(memBoard[i] !== ""){
              count+=1;

            }
          }
      if(count === 9) {
        winner = "It's a draw!";
        gameEnd = true;
      }
        console.log("count : " + count);
    }
    end();
  }
});
