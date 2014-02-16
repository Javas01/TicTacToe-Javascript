$(document).ready(function(){

var playerX = "X";
var playerO = "O";
var currentPlayer = "X";

var winOption1 = new Array("#a1", "#a2", "#a3");
var winOption2 = new Array("#b1", "#b2", "#b3");
var winOption3 = new Array("#c1", "#c2", "#c3");
var winOption4 = new Array("#a1", "#b1", "#c1");
var winOption5 = new Array("#a2", "#b2", "#c2");
var winOption6 = new Array("#a3", "#b3", "#c3");
var winOption7 = new Array("#a1", "#b2", "#c3");
var winOption8 = new Array("#a3", "#b2", "#c1");
var bigWinOptions = new Array(winOption1, winOption2, winOption3, winOption4, winOption5, winOption6, winOption7, winOption8);

var isGameOver = function(){
	
	for(var start = 0; start < bigWinOptions.length; start++){
		var winOption = bigWinOptions[start];
		if(($(winOption[0]).text() != "") && ($(winOption[0]).text() == $(winOption[1]).text()) && ($(winOption[1]).text() == $(winOption[2]).text())){
			return true;
		}	
	} 

	return false;

}

$("td").click(function(){
	if(currentPlayer == playerX){
		$(this).text(playerX);
		
		if(isGameOver()){
			alert("Game Over! Player " + currentPlayer + " won!!");	
		}
		else{
			currentPlayer = playerO;			
			//alert(currentPlayer + "\'s turn");
		}
		
	}
	else{
		$(this).text(playerO);

		if(isGameOver()){
			alert("Game Over! Player " + currentPlayer + " won!!");	
		}
		else{
			currentPlayer = playerX;
			//alert(currentPlayer + "\'s turn");
		}
	}


});

});
