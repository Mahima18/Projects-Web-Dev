$(document).ready(function() {
    var move = 1;
    var turn = true;
    $("#dashboard tr td").click(function(){
        if($(this).text()=="" && turn){
            if(move%2 == 1){ $(this).append("X"); }
            else {$(this).append("O");}
            move++;

            if(ForWinner() != -1 && ForWinner() != ""){
                if(ForWinner() == "X"){ alert("Player 1 wins!");}
                else { alert("Player 2 wins!"); }           
            turn = false;
            }

        }
    });

    function ForWinner(){
        var f1 = $("#dashboard  tr:nth-child(1) td:nth-child(1)").text();
        var f2 = $("#dashboard  tr:nth-child(1) td:nth-child(2)").text();
        var f3 = $("#dashboard  tr:nth-child(1) td:nth-child(3)").text();
        var f4 = $("#dashboard  tr:nth-child(2) td:nth-child(1)").text();
        var f5 = $("#dashboard  tr:nth-child(2) td:nth-child(2)").text();
        var f6 = $("#dashboard  tr:nth-child(2) td:nth-child(3)").text();
        var f7 = $("#dashboard  tr:nth-child(3) td:nth-child(1)").text();
        var f8 = $("#dashboard  tr:nth-child(3) td:nth-child(2)").text();
        var f9 = $("#dashboard  tr:nth-child(3) td:nth-child(3)").text();

        if(f1 == f2 && f2 == f3) return f3;
        else if(f4 == f5 && f5 == f6) return f6;
        else if(f7 == f8 && f8 == f9) return f9;
        else if(f1 == f4 && f4 == f7) return f7;
        else if(f2 == f5 && f5 == f8) return f8;
        else if(f3 == f6 && f6 == f9) return f9;
        else if(f1 == f5 && f5 == f9) return f9;
        else if(f3 == f5 && f5 == f7) return f7;
        else return -1;
    }
});

