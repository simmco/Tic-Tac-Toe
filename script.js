window.onload = (function() {

    var player = "";

    var memBoard = {
          0 : "",
          1 : "",
          2 : "",
          3 : "",
          4 : "",
          5 : "",
          6 : "",
          7 : "",
          8 : "",
    }





    //eventListener for each field
    document.getElementById("0").addEventListener("click",function() {document.getElementById("0").innerHTML = player; memBoard[this.id] = "human"; win();});
    document.getElementById("1").addEventListener("click",function() {document.getElementById("1").innerHTML = player; memBoard[this.id] = "human"; win();});
    document.getElementById("2").addEventListener("click",function() {document.getElementById("2").innerHTML = player; memBoard[this.id] = "human"; win();});
    document.getElementById("3").addEventListener("click",function() {document.getElementById("3").innerHTML = player; memBoard[this.id] = "human"; win();});
    document.getElementById("4").addEventListener("click",function() {document.getElementById("4").innerHTML = player; memBoard[this.id] = "human"; win();});
    document.getElementById("5").addEventListener("click",function() {document.getElementById("5").innerHTML = player; memBoard[this.id] = "human"; win();});
    document.getElementById("6").addEventListener("click",function() {document.getElementById("6").innerHTML = player; memBoard[this.id] = "human"; win();});
    document.getElementById("7").addEventListener("click",function() {document.getElementById("7").innerHTML = player; memBoard[this.id] = "human"; win();});
    document.getElementById("8").addEventListener("click",function() {document.getElementById("8").innerHTML = player; memBoard[this.id] = "human"; win();});


    var arrayWin = [[0,1,2],[3,4,5],
                    [6,7,8],[0,3,6],
                    [1,4,7],[2,5,8],
                    [0,4,8],[2,4,6]];
    //check for win
    function win () {
      console.log(memBoard);
      //human
    if(memBoard[0]== "human"&&memBoard[1] == "human" && memBoard[2]== "human") {
      alert("human wins!")
    }
    else if(memBoard[3]== "human"&&memBoard[4] == "human" && memBoard[5]== "human") {
      alert("human wins!")
    }
    else if(memBoard[6]== "human"&&memBoard[7] == "human" && memBoard[8]== "human") {
      alert("human wins!")
    }
    else if(memBoard[0]== "human"&&memBoard[3] == "human" && memBoard[6]== "human") {
      alert("human wins!")
    }
    else if(memBoard[1]== "human"&&memBoard[4] == "human" && memBoard[7]== "human") {
      alert("human wins!")
    }
    else if(memBoard[2]== "human"&&memBoard[5] == "human" && memBoard[8]== "human") {
      alert("human wins!")
    }
    else if(memBoard[0]== "human"&&memBoard[4] == "human" && memBoard[8]== "human") {
      alert("human wins!")
    }
    else if(memBoard[2]== "human"&&memBoard[4] == "human" && memBoard[6]== "human") {
      alert("human wins!")
    }
  }

    //eventListener for clicking x and o
    document.getElementById("x").addEventListener("click",showGame);
    document.getElementById("O").addEventListener("click",showGame);

    //pop of the choice and show the game
    function showGame () {
          player = this.id;
          document.getElementById("choice").className = "hidden";
          document.getElementById("game").className = "container vertical-center";
    }




});
