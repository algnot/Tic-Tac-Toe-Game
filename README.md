# Tic-Tac-Toe Game with javascript
You can download game files in the file folder game_tic_tac_toe.
The code will start at the index.html file and go to the start.html file.
The above file is only an example.

# The coder in index.html
index.html is the default file, which will allow users to enter a name to start the game.
```html
<html lang="en">  
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <title>tic_tac_toe BOT</title>
    <link rel="stylesheet" href="assets/css/game.css">
</head>
<body>
    <div class="box-game">
        <center> <h3> story <br> tic_tac_toe BOT </h3> </center>
        <div class="story">
            <center>  ต้นกกไม่มีเพื่อนเล่น X O เป็นเพื่อนต้นกก ต้นกกเลยเขียนบอทขึ้นมา
                      ให้เล่นเป็นเพื่อน แต่บอทของต้นกกเก่งเกินไป ต้นกกเอาชนะไม่ไหว
                      เพื่อนๆช่วยต้นกกเอาชนะบอทสุดโหดนี้หน่อยต้นกกไม่ไหวเเล้ว ;-;
            </center>
            <form action="start.php" method="GET"> 
                <center>
                    <div class="omrs-input-group">
                        <label class="omrs-input-underlined">
                        <input name="name" required>
                        <span class="omrs-input-label"> ใส่ชื่อของคุง ;-; </span>
                        </label>
                    </div>
                    <input type="submit" value="ไปกันต่อ">
                </center>           
            </form>
        </div>      
    </div>
    <ol id="scoreboard">
        <li>ความฉลาด(บอท)<br><span>สตีฟ จอบ</span></li>
        <li>Name bot<br><span>หมีโง่บอท</span></li>
        <li>Developer<br><span>Tongog</span></li>
    </ol>
    <script type="text/javascript">
         document.addEventListener('touchmove', function(event) {
            event = event.originalEvent || event;
            if(event.scale > 1) {
              event.preventDefault();
            }
          }, false);
    </script>
</body>
</html>
```

# The coder in start.html
The start.html file will be the structure for the game's appearance when the user has finished filling in the name.
```html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <title>tic_tac_toe BOT</title>
    <link rel="stylesheet" href="assets/css/game.css">
</head>
<body>
    <ol id="scoreboard">
        <li>Developer<br> <span>Tongog</span></li>
        <li><button onclick="startGame();" id="btn">เริ่มเกม</button></li>
        <li>Name bot<br> <span>หมีโง่บอท</span></li>
    </ol>
    <div id="scene">
        <img src="img/board.png" id="board" style="width:400px;" alt="board">
        <button onclick="choice(this)" class="btn1" value="0" id="btn0" style="top:0px; left:0px;"></button>
        <button onclick="choice(this)" class="btn1" value="1" id="btn1" style="top:0px; left:133.33px;"></button>
        <button onclick="choice(this)" class="btn1" value="2" id="btn2" style="top:0px; left:266.66px;"></button>
        <button onclick="choice(this)" class="btn1" value="3" id="btn3" style="top:133.33px; left:0px;"></button>
        <button onclick="choice(this)" class="btn1" value="4" id="btn4" style="top:133.33px; left:133.33px;"></button>
        <button onclick="choice(this)" class="btn1" value="5" id="btn5" style="top:133.33px; left:266.66px;"></button>
        <button onclick="choice(this)" class="btn1" value="6" id="btn6" style="top:266.66px; left:0px;"></button>
        <button onclick="choice(this)" class="btn1" value="7" id="btn7" style="top:266.66px; left:133.33px;"></button>
        <button onclick="choice(this)" class="btn1" value="8" id="btn8" style="top:266.66px; left:266.66px;"></button>
    </div>   
    <center> <p style="width: 400px; margin: 0 auto;">สาร์นจากต้นกก : สู้ๆนะ  <span> <?php echo $_GET['name']; ?> </span> 
                <br>
            </p>       
    </center>
    <script type="text/javascript" src="assets/js/gameController.js"></script>
    <script type="text/javascript">
         document.addEventListener('touchmove', function(event) {
            event = event.originalEvent || event;
            if(event.scale > 1) {
              event.preventDefault();
            }
          }, false);
    </script>
</body>
</html>
```

# The coder in javascript file
In the JavaScript file, there are functions that start the game and how to think of the bot.
```javascript
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
```
# The coder in css file
Both the index and start files are decorated with the same css file.
```css
@import url('https://fonts.googleapis.com/css2?family=Athiti:wght@500&display=swap');
html,body {
    font-family: 'Athiti', sans-serif;
    text-transform: uppercase;
}
#scene {
    width: 400px;
    height: 400px;
    background: #eaeaea;
    overflow: hidden;
    margin: 16px auto;
    position: relative;
    box-shadow: 2px 2px 4px rgba(0,0,0,.1), -2px 2px 4px rgba(0,0,0,.1);
}
.box-game{
    width: 400px;
    margin: 20px auto 10px auto;
    padding: 0;
    background: #eaeaea;
    align-items: center;
    box-shadow: 2px 2px 4px rgba(0,0,0,.1), -2px 2px 4px rgba(0,0,0,.1);
}
.story {
    font-size: 16px;
    padding: 20px;
}
#board{
    position: absolute;
    display: block;
    width: 400px;
    bottom: 0; 
}
.btn1{
    position: absolute;
    display: block;
    margin-top: -10px;
    width: 133.33px;
    height: 133.33px;
    background: none;
    border: none;
    box-shadow: none;
    font-size: 100px;
}
#scoreboard{
    width: 400px;
    margin: 4px auto;
    padding: 0;
    background: #eaeaea;
    align-items: center;
    box-shadow: 2px 2px 4px rgba(0,0,0,.1), -2px 2px 4px rgba(0,0,0,.1);
}
#scoreboard:after {
    clear: both;
    display: block;
    content: "";
}
#scoreboard li {
    list-style: none;
    box-sizing: border-box;
    width: 33%;
    padding: 4px;
    text-align: center;
    float: left;
}
span {
    font-weight: bold;
    color: #55f;
}
p {
    margin: 4px auto;
    padding: 20px 0;
    background: #eaeaea;
    align-items: center;
    box-shadow: 2px 2px 4px rgba(0,0,0,.1), -2px 2px 4px rgba(0,0,0,.1);  
}
button {
    font-family: 'Athiti', sans-serif;
    font-size: 16px;
    height: 40px;
    margin-top: 5.5px;
    border: none;
    box-shadow: 2px 2px 4px rgba(0,0,0,.1), -2px 2px 4px rgba(0,0,0,.1);  
}
form {
    margin-top: 40px;
}
* {
	font-family: 'Athiti', sans-serif;
}
input[type=submit] {
    width: 80%;
    font-size: 15px;
    background-color: #55f;
    color: white;
    padding: 7px 10px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
.link {
    width: 80%;
    font-size: 15px;
    background-color: #55f;
    color: white;
    padding: 7px 10px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;  
}
:root {
	--omrs-color-ink-lowest-contrast: rgba(47, 60, 85, 0.18);
	--omrs-color-ink-low-contrast: rgba(60, 60, 67, 0.3);
	--omrs-color-ink-medium-contrast: rgba(19, 19, 21, 0.6);
	--omrs-color-interaction: #1e4bd1;
	--omrs-color-interaction-minus-two: rgba(73, 133, 224, 0.12);
	--omrs-color-danger: #b50706;
	--omrs-color-ink-high-contrast: #121212;
}
/** END: Non Openmrs CSS **/
div.omrs-input-group {
  margin-bottom: 1.5rem;
  position: relative;
  width: 20.4375rem;
}
/* Input*/
.omrs-input-underlined > input,
.omrs-input-filled > input {
    border: none;
    box-shadow: none;
	border-bottom: 0.125rem solid var(--omrs-color-ink-medium-contrast);
	width: 100%;
    height: 2rem;
	font-size: 1.0625rem;
	padding-left: 0.875rem;
	line-height: 147.6%;
	padding-top: 0.825rem;
    padding-bottom: 0.5rem;
    background-color: rgba(0,0,0,0);
}
.omrs-input-underlined > input:focus,
.omrs-input-filled > input:focus {
	outline: none;
}
.omrs-input-underlined > .omrs-input-label,
.omrs-input-filled > .omrs-input-label {
	position: absolute;
	top: 5px;
	left: 0.5rem;
	line-height: 140%;
	color: var(--omrs-color-ink-medium-contrast);
	transition: top .2s;
}
.omrs-input-underlined > input:hover,
.omrs-input-filled > input:hover {
	background: var(--omrs-color-interaction-minus-two);
	border-color: var(--omrs-color-ink-high-contrast);
}
.omrs-input-underlined > input:focus + .omrs-input-label,
.omrs-input-underlined > input:valid + .omrs-input-label,
.omrs-input-filled > input:focus + .omrs-input-label,
.omrs-input-filled > input:valid + .omrs-input-label {
    top: -25px;
    left: 2px;
	font-size: 0.9375rem;
	margin-bottom: 40px;
}
.omrs-input-underlined:not(.omrs-input-danger) > input:focus + .omrs-input-label,
.omrs-input-filled:not(.omrs-input-danger) > input:focus + .omrs-input-label {
	color: var(--omrs-color-interaction);
}
.container {
    display: grid;
    grid-template-columns: 1fr 1fr;
}
.topic_container{
    font-weight: bold;
    font-size: 16px;
    text-align: center;
}
.info_container1 {
    text-align: left;
    margin: 10px 0px 10px 30px;
    border-bottom: 1px solid rgba(0,0,0,0.2);
}
.info_container2 {
    text-align: right;
    margin: 10px 30px 10px 0px;
    border-bottom: 1px solid rgba(0,0,0,0.2);
}
```
