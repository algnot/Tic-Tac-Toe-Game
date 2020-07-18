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
                <button class="link" onclick="location.href='/index.php'"> กลับเว็บไซต์ tongog.com </button>
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