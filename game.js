window.onload = pageLoad;

function pageLoad(){
    var startBtn = document.getElementById("start");
    startBtn.onclick = startGame;
}

function startGame(){
    alert("Ready");
    addBox();
    timeStart();
}

function timeStart(){
    var TIMER_TICK = 1000;
    var timer = null;
    var min = 0.3;
    var second = min*60; 
    var x = document.getElementById('clock');

    //setting timer using setInterval function
    timer = setInterval(timeCount, TIMER_TICK);
    
    function timeCount(){
        var allbox = document.querySelectorAll("#layer div");
        second--;
        x.innerHTML = second;

        if(allbox.length === 0 && second > 0){
            alert("You Win!");
            clearInterval(timer);
            clearScreen();
        }
        if(second <= 0){
            if(allbox.length > 0){
                alert("Game Over");
            }else{
                alert("You Win!");
            }
            clearInterval(timer);
            clearScreen();
        }
    }
}

function addBox(){
    // สร้างกล่องตาม input ที่เราใส่ 
    var numbox = document.getElementById("numbox").value;
    var gameLayer = document.getElementById("layer");
    var colorDrop = document.getElementById("color").value;

    for (var i =0; i<numbox;i++){
        var tempbox = document.createElement("div");
        tempbox.className = "square " + colorDrop;
        tempbox.id = "box"+i;
        tempbox.style.left = Math.random() * (500 - 25) + "px";
        tempbox.style.top = Math.random() * (500 - 25) + "px";
        //add element to HTML node
        gameLayer.appendChild(tempbox);
        bindBox(tempbox);
    }
}

function bindBox(box){
    //เมื่อกดแล้ว กล่องจะหายไป
    box.onclick = function(){
        box.parentNode.removeChild(box);
    }
}

function clearScreen(){
    // ทำการลบ node ของกล่องทั้งหมด ออกจาก หน้าจอ
    var allbox = document.querySelectorAll("#layer div");

    //delete all div
    for (var i=0;i<allbox.length;i++){
        allbox[i].parentNode.removeChild(allbox[i]);
    }
}





