var IsPlaying = false;

var board = ['','','',
             '','','',
             '','',''];

var turn = true; //true = user turn --> O // false = bot turn --> X

function startGame() {
    //click button to start game
    IsPlaying = true;
    btn.disabled = "disabled";
    document.getElementById('btn').innerText='ตาของคุณ..';
    board = ['','','',
             '','','',
             '','',''];
    document.getElementById('btn0').innerText='';
    document.getElementById('btn1').innerText='';
    document.getElementById('btn2').innerText='';
    document.getElementById('btn3').innerText='';
    document.getElementById('btn4').innerText='';
    document.getElementById('btn5').innerText='';
    document.getElementById('btn6').innerText='';
    document.getElementById('btn7').innerText='';
    document.getElementById('btn8').innerText='';
    document.getElementById('btn0').removeAttribute('disabled');
    document.getElementById('btn1').removeAttribute('disabled');
    document.getElementById('btn2').removeAttribute('disabled');
    document.getElementById('btn3').removeAttribute('disabled');
    document.getElementById('btn4').removeAttribute('disabled');
    document.getElementById('btn5').removeAttribute('disabled');
    document.getElementById('btn6').removeAttribute('disabled');
    document.getElementById('btn7').removeAttribute('disabled');
    document.getElementById('btn8').removeAttribute('disabled');
    turn = true;
}

function choice(space) {

    if(!IsPlaying) {
        return;
    }

    if(turn) {
        //user turn 
        space.innerText = 'O';
        //set value board array
        board[space.value]='O';
        //disabled button
        space.disabled = "disabled"; 
        //chang turn
        turn = false;
    } else {  
        //Bot turn 
        space.innerText = 'X';
        //set value board array
        board[space.value]='X';
        //disabled button
        space.disabled = "disabled"; 
        //chang turn
        turn = true;
    }

    if(!turn) { //check turn Bot 
        thingToWin();  //for bot click
    }
    checkWin();
}

function checkWin(){
    var userWin='';
    //pattern X X X
    if(board[0] == board[1] && board[1] == board[2] &&  board[0]!='' &&  board[1]!='' &&  board[2]!='') 
        userWin = board[0];
    if(board[3] == board[4] && board[4] == board[5] &&  board[3]!='' &&  board[4]!='' &&  board[5]!='') 
        userWin = board[3];
    if(board[6] == board[7] && board[7] == board[8] &&  board[6]!='' &&  board[7]!='' &&  board[8]!='') 
        userWin = board[6];
    //pattern X
    //        X
    //        X
    if(board[0] == board[3] && board[3] == board[6] &&  board[0]!='' &&  board[3]!='' &&  board[6]!='') 
        userWin = board[0];
    if(board[1] == board[4] && board[4] == board[7] &&  board[1]!='' &&  board[4]!='' &&  board[7]!='')
        userWin = board[1]; 
    if(board[2] == board[5] && board[5] == board[8] &&  board[2]!='' &&  board[5]!='' &&  board[8]!='')
        userWin = board[2]; 
    //pattern X    
    //          X
    //            X
    if(board[0] == board[4] && board[4] == board[8] &&  board[0]!='' &&  board[4]!='' &&  board[8]!='')
        userWin = board[0]; 
    //pattern     X
    //          X
    //        X
    else if(board[4] == board[6] && board[6] == board[2] &&  board[4]!='' &&  board[6]!='' &&  board[2]!='')
        userWin = board[4]; 


    if(userWin=='O') {
        alert('ชนะเเล้วต้นกกขอบคุณนะ เย่ๆ');
        IsPlaying = false;
        btn.removeAttribute('disabled');
        document.getElementById('btn').innerText='เล่นใหม่';
    }
    else if(userWin=='X') {
        alert('กากขนาดนี้กลับไปฝึกเล่นมาก่อนนะ');
        IsPlaying = false;
        btn.removeAttribute('disabled');
        document.getElementById('btn').innerText='เล่นใหม่';
    }

    if (board[0]!='' && board[1]!='' && board[2]!='' && board[3]!='' &&
        board[4]!='' && board[5]!='' && board[6]!='' && board[7]!='' &&
        board[8]!='' && board[9]!='') {
            alert('ยังไม่ชนะนะ แบร่');
            IsPlaying = false;
            btn.removeAttribute('disabled');
            document.getElementById('btn').innerText='เล่นใหม่';
    } 

}

function thingToWin(){
    //Set btn4 is IMPORTANT for win
    var count;
    count=0;  //for Bot will click only one time
    if(board[4]==''&& count==0) {botClick('btn4'); count++;}
    else {
        //if will WIN Bot will do it
        //pattern X X -
        if(board[0]=='X' && board[1]=='X' && count==0 && board[2]=='') { botClick('btn2'); count++;} 
        if(board[3]=='X' && board[4]=='X' && count==0 && board[5]=='') { botClick('btn5'); count++;} 
        if(board[6]=='X' && board[7]=='X' && count==0 && board[8]=='') { botClick('btn8'); count++;}
        //pattern X - X
        if(board[0]=='X' && board[2]=='X' && count==0 && board[1]=='') { botClick('btn1'); count++;}
        if(board[3]=='X' && board[5]=='X' && count==0 && board[4]=='') { botClick('btn4'); count++;}
        if(board[6]=='X' && board[8]=='X' && count==0 && board[7]=='') { botClick('btn7'); count++;}
        //pattern - X X
        if(board[1]=='X' && board[2]=='X' && count==0 && board[0]=='') { botClick('btn0'); count++;}
        if(board[4]=='X' && board[5]=='X' && count==0 && board[3]=='') { botClick('btn3'); count++;}
        if(board[7]=='X' && board[8]=='X' && count==0 && board[6]=='') { botClick('btn6'); count++;}
        //pattern X
        //        X
        //        -
        if(board[0]=='X' && board[3]=='X' && count==0 && board[6]=='') { botClick('btn6'); count++;}
        if(board[1]=='X' && board[4]=='X' && count==0 && board[7]=='') { botClick('btn7'); count++;}
        if(board[2]=='X' && board[5]=='X' && count==0 && board[8]=='') { botClick('btn8'); count++;}
        //pattern X
        //        -
        //        X
        if(board[0]=='X' && board[6]=='X' && count==0 && board[3]=='') { botClick('btn3'); count++;}
        if(board[1]=='X' && board[7]=='X' && count==0 && board[4]=='') { botClick('btn4'); count++;}
        if(board[2]=='X' && board[8]=='X' && count==0 && board[5]=='') { botClick('btn5'); count++;}
        //pattern -
        //        X
        //        X
        if(board[3]=='X' && board[6]=='X' && count==0 && board[0]=='') { botClick('btn0'); count++;}
        if(board[4]=='X' && board[7]=='X' && count==0 && board[1]=='') { botClick('btn1'); count++;}
        if(board[5]=='X' && board[8]=='X' && count==0 && board[2]=='') { botClick('btn2'); count++;}
        //pattern     -
        //          X
        //        X
        if(board[4]=='X' && board[6]=='X' && count==0 && board[2]=='') { botClick('btn2'); count++;}
        //pattern     X
        //          -
        //        X
        if(board[2]=='X' && board[6]=='X' && count==0 && board[4]=='') { botClick('btn4'); count++;}
        //pattern     X
        //          X
        //        -
        if(board[2]=='X' && board[4]=='X' && count==0 && board[6]=='') { botClick('btn6'); count++;}
        //pattern X    
        //          X
        //            -
        if(board[0]=='X' && board[4]=='X' && count==0 && board[8]=='') { botClick('btn8'); count++;}
        //pattern X    
        //          -
        //            X
        if(board[0]=='X' && board[8]=='X' && count==0 && board[4]=='') { botClick('btn4'); count++;}
        //pattern -    
        //          X
        //            X
        if(board[4]=='X' && board[8]=='X' && count==0 && board[0]=='') { botClick('btn0'); count++;}

        //if will LOST Bot will protect it
        //pattern O O -
        if(board[0]=='O' && board[1]=='O' && count==0 && board[2]=='') { botClick('btn2'); count++;} 
        if(board[3]=='O' && board[4]=='O' && count==0 && board[5]=='') { botClick('btn5'); count++;} 
        if(board[6]=='O' && board[7]=='O' && count==0 && board[8]=='') { botClick('btn8'); count++;}
        //pattern O - O
        if(board[0]=='O' && board[2]=='O' && count==0 && board[1]=='') { botClick('btn1'); count++;}
        if(board[3]=='O' && board[5]=='O' && count==0 && board[4]=='') { botClick('btn4'); count++;}
        if(board[6]=='O' && board[8]=='O' && count==0 && board[7]=='') { botClick('btn7'); count++;}
        //pattern - O O
        if(board[1]=='O' && board[2]=='O' && count==0 && board[0]=='') { botClick('btn0'); count++;}
        if(board[4]=='O' && board[5]=='O' && count==0 && board[3]=='') { botClick('btn3'); count++;}
        if(board[7]=='O' && board[8]=='O' && count==0 && board[6]=='') { botClick('btn6'); count++;}
        //pattern O
        //        O
        //        -
        if(board[0]=='O' && board[3]=='O' && count==0 && board[6]=='') { botClick('btn6'); count++;}
        if(board[1]=='O' && board[4]=='O' && count==0 && board[7]=='') { botClick('btn7'); count++;}
        if(board[2]=='O' && board[5]=='O' && count==0 && board[8]=='') { botClick('btn8'); count++;}
        //pattern O
        //        -
        //        O
        if(board[0]=='O' && board[6]=='O' && count==0 && board[3]=='') { botClick('btn3'); count++;}
        if(board[1]=='O' && board[7]=='O' && count==0 && board[4]=='') { botClick('btn4'); count++;}
        if(board[2]=='O' && board[8]=='O' && count==0 && board[5]=='') { botClick('btn5'); count++;}
        //pattern -
        //        O
        //        O
        if(board[3]=='O' && board[6]=='O' && count==0 && board[0]=='') { botClick('btn0'); count++;}
        if(board[4]=='O' && board[7]=='O' && count==0 && board[1]=='') { botClick('btn1'); count++;}
        if(board[5]=='O' && board[8]=='O' && count==0 && board[2]=='') { botClick('btn2'); count++;}
        //pattern     -
        //          O
        //        O
        if(board[4]=='O' && board[6]=='O' && count==0 && board[2]=='') { botClick('btn2'); count++;}
        //pattern     O
        //          -
        //        O
        if(board[2]=='O' && board[6]=='O' && count==0 && board[4]=='') { botClick('btn4'); count++;}
        //pattern     O
        //          O
        //        -
        if(board[2]=='O' && board[4]=='O' && count==0 && board[6]=='') { botClick('btn6'); count++;}
        //pattern O    
        //          O
        //            -
        if(board[0]=='O' && board[4]=='O' && count==0 && board[8]=='') { botClick('btn8'); count++;}
        //pattern O    
        //          -
        //            O
        if(board[0]=='O' && board[8]=='O' && count==0 && board[4]=='') { botClick('btn4'); count++;}
        //pattern -    
        //          O
        //            O
        if(board[4]=='O' && board[8]=='O' && count==0 && board[0]=='') { botClick('btn0'); count++;}
        // X   X
        //
        // X   X   ---> is important
        if(board[0]==''&& count==0) {botClick('btn0'); count++;}
        if(board[2]==''&& count==0) {botClick('btn2'); count++;}
        if(board[6]==''&& count==0) {botClick('btn6'); count++;}
        if(board[8]==''&& count==0) {botClick('btn8'); count++;}
        //   X  
        // X   x
        //   X 
        if(board[1]==''&& count==0) {botClick('btn1'); count++;}
        if(board[3]==''&& count==0) {botClick('btn3'); count++;}
        if(board[5]==''&& count==0) {botClick('btn5'); count++;}
        if(board[7]==''&& count==0) {botClick('btn7'); count++;}
        count=0; //for Bot will click only one time
    }
}

function botClick(btnBot){
    document.getElementById(btnBot).click();
}

