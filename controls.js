$(document).ready(function(){

var playerX = "X";
var playerO = "O";

var currentPlayer = "X";



$("td").click(function(){
	if(currentPlayer == playerX){
		$(this).text(playerX);
		currentPlayer = playerO;
	}
	else{
		$(this).text(playerO);
		currentPlayer = playerX;
	}

	alert(currentPlayer + "\'s turn");
});





});
