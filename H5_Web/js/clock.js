window.onload = function () {
    
    drawClock();
    setInterval("drawClock()", 1000);

    loadImg();

    repeatImg();
}

function drawClock() {
    var clock = document.getElementById("clock");
    var ctx = clock.getContext('2d');

    //清除画布
    ctx.clearRect(350, 250, 700, 600);
    var now = new Date();
    var secd = now.getSeconds();
    var min = now.getMinutes();
    var hour = now.getHours(); 

    //小时必须获取浮点类型（小时+分数转化的小时）
    //时间格式19:23:30
    //将24小时进制装换为12小时进制
    hour = hour + (min / 60);
    hour = hour > 12 ? hour - 12 : hour;
   
    //绘制外表盘，白色描边 
    ctx.save();
    ctx.beginPath();
    ctx.arc(350, 250, 105, 0, Math.PI * 2, false); 
    ctx.strokeStyle = "#fff";
    ctx.stroke(); 
    ctx.closePath();
    ctx.restore();    

    //绘制内表盘，黑色填充，白色描边
    ctx.beginPath();
    ctx.arc(350, 250, 100, 0, Math.PI * 2, false);
    ctx.strokeStyle = "#fff";
    ctx.stroke();
    ctx.fillStyle = "#000";
    ctx.fill(); 
    ctx.closePath();
    ctx.restore();

    //绘制中心圆点
    ctx.save();
    ctx.beginPath()
    ctx.arc(350, 250, 5, 0, Math.PI * 2, false);
    ctx.fillStyle = "#fff";
    ctx.fill();
    ctx.closePath(); 
    ctx.restore();

    //绘制钟表数字
    ctx.save();
    //drawClockNum(ctx);
    ctx.restore();

    //绘制钟表时刻点
    ctx.save();
    drawClockDot(ctx);
    ctx.restore(); 

    //绘制钟表分刻点
    ctx.save();
    drawClockSplit(ctx);
    ctx.restore();
     
    //绘制时针
    ctx.save();
    ctx.translate(350, 250);//将指针转移至圆心位置
    ctx.rotate((hour * 30 * Math.PI / 180) + Math.PI);
    drawHourHand(ctx);
    ctx.restore();

    //绘制分针
    ctx.save();
    ctx.translate(350, 250);//将指针转移至圆心位置
    ctx.rotate((min * 6 * Math.PI / 180) + Math.PI);
    drawMinuteHand(ctx);
    ctx.restore();

    //绘制秒针
    ctx.save();
    ctx.translate(350, 250);//将指针转移至圆心位置
    ctx.rotate((secd * 6 * Math.PI / 180)+ Math.PI);
    drawSecondHand(ctx);
    ctx.restore();
}

//绘制时针
function drawHourHand(ctx) {
    ctx.beginPath();
    ctx.moveTo(0, 0);//将起点放置圆心位置
    ctx.quadraticCurveTo(-10, 15, 10, 40);
    //ctx.lineTo(350, 210); 
    ctx.closePath();
    ctx.fillStyle = '#fff';
    ctx.fill();
}

//绘制分针
function drawMinuteHand(ctx) {
    ctx.beginPath();
    ctx.moveTo(0, 0);//将起点放置圆心位置
    ctx.quadraticCurveTo(20, 10, 20, 60);
    ctx.closePath();
    ctx.fillStyle = '#fff';
    ctx.fill();
}

//绘制秒针  
function drawSecondHand(ctx) {
    ctx.beginPath();
    ctx.moveTo(0, 0);//将起点放置圆心位置
    ctx.quadraticCurveTo(10, 5, 0, 80);
    ctx.closePath();
    ctx.fillStyle = '#c6ff9a';
    ctx.fill();
}

//绘制表盘刻点
function drawClockDot(ctx) {
    
    for (var i = 0; i < 12; i++) {
        ctx.save(); 
        //先设置0,0点
        ctx.translate(350, 250);//设置时针刻点的大圆心
        //再设置旋转角度
        ctx.rotate(((i * 30) * Math.PI / 180) + Math.PI);//角度*Math.PI/180=弧度
        //console.log("当前角度：" + (i * 30) * Math.PI / 180);
        ctx.beginPath(); 
        ctx.arc(0, 100, 3, 0, Math.PI * 2, false);//绘制刻点
        ctx.fillStyle = "#c6ff9a";
        ctx.fill();
        ctx.closePath();
        
        ctx.beginPath();
        var numList = [ "Ⅻ","Ⅰ", "Ⅱ", "Ⅲ", "Ⅳ", "Ⅴ", "Ⅵ", "Ⅶ", "Ⅷ", "Ⅸ", "Ⅹ", "Ⅺ"];
        for (var j = 0; j < numList.length; j++) {
            if (i == j) { 
                ctx.font = "14px 微软雅黑";
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.fillStyle = '#fff';
                ctx.fillText(numList[i],0,90);
            }
        }        
        ctx.closePath(); 
        ctx.restore();
    }
}

//绘制钟表数字
function drawClockNum(ctx) {
    ctx.font = "14px 微软雅黑";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = '#fff';
    ctx.fillText("Ⅻ", 350, 165);
    ctx.fillText("Ⅰ", 395, 180);//相差：x=>45,y=>15
    ctx.fillText("Ⅱ", 425, 210);//差：x=>25,y=>30
    ctx.fillText("Ⅲ", 435, 255);//差：x=>15,y=>45
    ctx.fillText("Ⅳ", 425, 295);//差：x=>10,y=>40
    ctx.fillText("Ⅴ", 395, 320);//差：x=>30,y=>35
    ctx.fillText("Ⅵ", 350, 335);//差：x=>45,y=>15，与12点相对，相同X坐标
    ctx.fillText("Ⅶ", 305, 320);//差：x=>45,y=>15
    ctx.fillText("Ⅷ", 275, 295);//差：x=>30,y=>35
    ctx.fillText("Ⅸ", 265, 255);//差：x=>15,y=>40，与3点相对，相同Y坐标
    ctx.fillText("Ⅹ", 275, 210);//差：x=>15,y=>40
    ctx.fillText("Ⅺ", 305, 180);//差：x=>30,y=>25  

}

//绘制钟表分割刻度
function drawClockSplit(ctx) {
     
    //分刻度
    for (var i = 0; i < 60; i++) {
        ctx.save();
        //设置时针的粗细
        ctx.lineWidth = 3;
        //设置时针的颜色
        ctx.strokeStyle = "#fff";
        //先设置0,0点
        ctx.translate(350, 250);
        //再设置旋转角度
        ctx.rotate((i * 6) * Math.PI / 180);//角度*Math.PI/180=弧度
        ctx.beginPath();
        ctx.moveTo(0, 95);//设置画刻度的起点
        ctx.lineTo(0, 100);//设置画刻度的终点，两点连接，形成圆 
        ctx.closePath();
        ctx.stroke();
        ctx.restore();
    }
}

//绘制截取部分图像到canvas上
function loadImg() {
    var clock = document.getElementById("clock");
    var ctx = clock.getContext('2d');

    var img = document.getElementById("scream");
    ctx.drawImage(img,20,20,100,200,10,400,100,100);
}

function repeatImg() {
    var img = new Image(); //创建Image对象，获取图片
    img.src = "../../img/toTop.gif";
    var line=new Image();
    line.src="../../img/soil2.png";
    var clock = document.getElementById("clock");
    var ctx = clock.getContext('2d');
    var pattern = ctx.createPattern(img, "repeat");//创建模式对象，设置属性值
    var pattern2 = ctx.createPattern(line, "repeat");
    ctx.fillStyle = pattern;
    ctx.fillRect(10,5, 400, 130);//绘制矩形框，用img填充矩形框
    ctx.lineWidth = 3;
    ctx.strokeStyle = pattern2;
    ctx.strokeRect(10,5,400,130);//设置描边线条大小，将图片作为背景线条，对矩形框进行描边
}