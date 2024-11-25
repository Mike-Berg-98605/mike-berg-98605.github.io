var XFirst = true;
var OFirst = false;
var XWins = 0;
var OWins = 0;
var won = false;
var winBoxElement;
var turnBoxBlinker;
var winnerBoxBlinker;
var currentPlayer;
const XX = "X";
const OO = "O";

if(XFirst == true) {
    currentPlayer = XX;
    function place(box) {
        if (box.innerText != "" || won) return;
        box.innerText = currentPlayer;
        checkGameBoard();
        currentPlayer == XX ? currentPlayer = OO : currentPlayer = XX;
    }
}
if(OFirst == true) {
    currentPlayer = OO;
    function place(box) {
        if (box.innerText != "" || won) return;
        box.innerText = currentPlayer;
        checkGameBoard();
        currentPlayer == OO ? currentPlayer = XX : currentPlayer = OO;
    }
}
function checkWinner(first, second, third) {
    if(first != "" && first == second && first == third) {
        won = true;
        var blink_speed = 1000; // every 1000 == 1 second, adjust to suit
           
        winnerBoxBlinker = setInterval(function () {
            winBoxElement = document.getElementById('ascii-winner-box');
            winBoxElement.style.visibility = (winBoxElement.style.visibility == 'hidden' ? '' : 'hidden');
        }, blink_speed);
          
        turnBoxBlinker = setInterval(function () {
            turnBoxElement = document.getElementById('ascii-turn-box');
            turnBoxElement.style.visibility = (turnBoxElement.style.visibility == 'hidden' ? '' : 'hidden');
        }, blink_speed);
            
        if(currentPlayer == XX) {
            XWins++;
	        document.getElementById("ascii-turn-box").innerText = "********X Wins!!*******";
	        document.getElementById("ascii-winner-box").innerText = "********X Wins!!*******";
	        document.getElementById("ascii-snail-wins").innerText = "X Wins: " + XWins;
        }
        if(currentPlayer == OO) {
	        OWins++;
	        document.getElementById("ascii-turn-box").innerText = "********O Wins!!*******";
	        document.getElementById("ascii-winner-box").innerText = "********O Wins!!*******";
	        document.getElementById("ascii-turtle-wins").innerText = "O Wins: " + OWins;
        }
    }
}
function resetBoard() {
    for(var i = 0; i <= 2; i++) {
        for(var j = 0; j <= 2; j++) {
            document.getElementById(i + "_" + j).innerText = "";
        }
    }
    clearInterval(winnerBoxBlinker);
    clearInterval(turnBoxBlinker);
    won = false;
    if(XFirst == true) {
        OFirst = true;
        XFirst = false;
        document.getElementById("ascii-turn-box").style.visibility = "visible";
        document.getElementById("ascii-winner-box").style.visibility = "visible";
        document.getElementById("ascii-turn-box").innerText = "Up First: O";
        document.getElementById("ascii-winner-box").innerText = "Glory to The Victor!!";
        currentPlayer = OO;
    } else {
        XFirst = true;
        document.getElementById("ascii-turn-box").style.visibility = "visible";
        document.getElementById("ascii-winner-box").style.visibility = "visible";
        document.getElementById("ascii-turn-box").innerText = "Up First: X";
        document.getElementById("ascii-winner-box").innerText = "Glory to The Victor!!";
        currentPlayer = XX;
    }
}
function resetScores() {
    XWins = 0;
    OWins = 0;
    document.getElementById("ascii-turtle-wins").innerText = "O Wins: " + OWins;
    document.getElementById("ascii-snail-wins").innerText = "X Wins: " + XWins;
    clearInterval(winnerBoxBlinker);
    clearInterval(turnBoxBlinker);
}
function checkGameBoard() {    
    for(var i = 0; i <= 2; i++) {
    	checkWinner(document.getElementById("0_" + i).innerText,
            document.getElementById("1_" + i).innerText,
            document.getElementById("2_" + i).innerText,);//horizontal
    }
    for(var i = 0; i <= 2; i++) {
	checkWinner(document.getElementById(i + "_0").innerText,
            document.getElementById(i + "_1").innerText,
            document.getElementById(i + "_2").innerText);//vertical
    }
    checkWinner(document.getElementById("0_0").innerText,
        document.getElementById("1_1").innerText,
        document.getElementById("2_2").innerText);//diagonal right
    checkWinner(document.getElementById("2_0").innerText,
        document.getElementById("1_1").innerText,
        document.getElementById("0_2").innerText);//diagonal left
}