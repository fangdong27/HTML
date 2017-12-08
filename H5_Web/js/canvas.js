
window.onload = function () {
    drawMainCherry();
    drawMainSnoopy();
    drawMainClip();
    drawMainMarquee();
    init();
}

function drawMainCherry() {
    var cherryCanvas = document.getElementById("cherry");
    var ctx = cherryCanvas.getContext("2d");

    //绘制格子背景
    ctx.save();
    drawTable(ctx);
    ctx.restore();

    //绘制白色背景框
    ctx.save();
    //ctx.rotate(30 * Math.PI / 180);
    drawWhiteFrame(ctx);
    ctx.restore();

    //绘制白色框中的图片
    ctx.save();
    drawBgCard(ctx);
    ctx.restore();

    //绘制人物头像
    ctx.save();
    personLogo(ctx);
    ctx.restore();

    //绘制人物介绍信息
    ctx.save();
    introInfo(ctx);
    ctx.restore();

    //绘制盾牌
    //ctx.save();
    //drawArc(ctx, 280, 170, 12, 0, 2 * Math.PI, true, "#dd5870");
    //drawArc(ctx, 280, 170, 10, 0, Math.PI * 2, false, "#e0dedf");
    //drawArc(ctx, 280, 170, 8, 0, Math.PI * 2, false, "#dd5870");
    //drawArc(ctx, 280, 170, 6, 0, Math.PI * 2, false, "#2773d3");
    //drawStart(ctx, 280, 170, 5, 1.5, "#dedce1", "#dedce1");
    //ctx.restore();

    //绘制樱桃顶部的小把
    ctx.save();
    ctx.translate(200, 155);
    ctx.scale(1, 0.5);
    // ctx.rotate(-(25 * Math.PI / 180));
    drawTop(ctx);
    ctx.restore();

    //绘制樱桃上的枝干
    ctx.save();
    ctx.translate(195, 157);
    ctx.rotate(30 * Math.PI / 180);
    drawBranch(ctx);
    ctx.restore();

    //绘制樱桃
    ctx.save();
    ctx.translate(187, 180);
    ctx.rotate((5 * Math.PI / 180));
    drawCherry(ctx);
    ctx.restore();

    //绘制樱桃上的枝干
    ctx.save();
    ctx.translate(250, 198);
    ctx.rotate(-(180 * Math.PI / 180));
    drawBranch(ctx);
    ctx.restore();

    //绘制樱桃
    ctx.save();
    ctx.translate(200, 192);
    ctx.rotate(-(25 * Math.PI / 180));
    drawCherry(ctx);
    ctx.restore();

}

//樱桃
function drawCherry(context) {
    //渐变圆形的位置(渐变开始圆1的x坐标，圆1的y坐标，圆1的半径，外层圆的x，y，半径)
    var sunGradient = context.createRadialGradient(24, 18, 1, 20, 20, 8);//同心圆的圆心坐标相同
    // sunGradient.addColorStop(0, 'rgba(251,243,243,0.1)');//添加渐变圆的颜色,addColorStop(0.0-1.0,color):渐变开始与结束之间的位置
    sunGradient.addColorStop(0.2, 'rgba(251, 55, 55, 0.69)');
    sunGradient.addColorStop(0.4, 'rgba(255, 0, 0, 1)');

    //开始画圆
    context.beginPath();
    context.arc(20, 20, 10, 0, Math.PI * 2, true);
    context.fillStyle = sunGradient;
    context.fill();
    context.closePath();

    //绘制椭圆渐变
    context.save();
    EvenCompEllipse(context, 23, 18, 4, 2);
    context.restore();
}

//绘制椭圆
function EvenCompEllipse(context, x, y, a, b) {
    //context.save();
    //选择a、b中的较大者作为arc方法的半径参数
    var r = (a > b) ? a : b;
    var ratioX = a / r; //横轴缩放比率
    var ratioY = b / r; //纵轴缩放比率
    context.scale(ratioX, ratioY); //进行缩放（均匀压缩）
    context.beginPath();
    //从椭圆的左端点开始逆时针绘制
    context.moveTo((x + a) / ratioX, y / ratioY);
    context.arc(x / ratioX, y / ratioY, r, 0, 2 * Math.PI);

    context.fillStyle = 'rgba(251,243,243,0.5)';
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = 'rgba(251,243,243,0.5)';

    context.stroke();
    context.restore();
    context.closePath();

};

//绘制枝干
function drawBranch(context) {
    //var lbranch = context.createLinearGradient(30, 30, 65, 65);
    //lbranch.addColorStop(0, "rgb(88,134,59)");
    //lbranch.addColorStop(0.3, "rgba(21,113,15,0.45)");
    //lbranch.addColorStop(0.6, "rgb(88,134,59)");

    //context.fillStyle = lbranch;
    //context.fillRect(30, 30, 4, 40);
    context.beginPath();
    context.moveTo(30, 30);
    //quadraticCurveTo(二次贝塞尔曲线控制点x坐标，二次贝塞尔曲线控制点y坐标，结束点的x坐标，结束点的y坐标)
    //2x正值越大越靠右，2y负值越小越靠上
    context.quadraticCurveTo(20, 20, 25, -3);
    // context.quadraticCurveTo(30, 30, 60, 0);

    context.lineWidth = 4;
    context.strokeStyle = 'rgba(88, 134, 59, 0.8)';
    context.stroke();
    context.restore();
    context.closePath();
}

//绘制樱桃枝干上面的小把
function drawTop(context) {
    var topDot = context.createRadialGradient(20, 20, 2, 20, 20, 5);
    topDot.addColorStop(0, "#7d594c");
    topDot.addColorStop(0.4, "rgba(49,152,31,0.8)");
    topDot.addColorStop(0.7, "rgba(88, 134, 59, 1)");
    //开始画圆
    context.beginPath();
    context.arc(20, 20, 5, 0, Math.PI * 2, true);

    context.fillStyle = topDot;
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = 'rgba(88, 134, 59, 0.8)';
    context.stroke();
    context.restore();
    context.closePath();

}

//绘制格子背景
function drawTable(context) {
    var cherryCanvas = document.getElementById("cherry");

    //描绘边框
    var grid_cols = 15;
    var grid_rows = 10;
    var cell_h = cherryCanvas.height / grid_rows;
    var cell_w = cherryCanvas.width / grid_cols;

    context.lineWidth = 1;
    context.strokeStyle = 'rgba(154,197,106,0.58)';
    //结束边框描绘
    context.beginPath();

    //画横线
    for (var row = 0; row <= grid_rows; row++) {
        var tbbg = context.createLinearGradient(0, 0, 0, 450);
        var y = row * cell_h;
        context.moveTo(0, y);
        context.lineTo(cherryCanvas.width, y);
        //循环绘制单元格的背景色
        for(var col = 0; col <= grid_cols; col++) {
            var x = col * cell_w;
            if (row % 2 == 0 && col % 2 == 0) {
                tbbg.addColorStop(0, '#c7e6a5');//#c7e6a5
                tbbg.addColorStop(1, '#c7e6a5');
                context.fillStyle = tbbg;
                context.fillRect(x, y, cell_w, cell_h);

            } else {
                tbbg.addColorStop(0, 'rgba(223,241,202,0.15)');//169,218,115
                tbbg.addColorStop(1, 'rgba(223,241,202,0.15)');

                context.fillStyle = tbbg;
                context.fillRect(x, y, cell_w, cell_h);
            }
        }
    }
    context.save();
    context.restore();
    //准备画竖线
    for (var col = 0; col <= grid_cols; col++) {
        var tbbg = context.createLinearGradient(0, 0, 0, 450);
        var x = col * cell_w;
        context.moveTo(x, 0);
        context.lineTo(x, cherryCanvas.height);

        //循环绘制单元格的背景色
        for (var row = 0; row <= grid_rows; row++) {
            var y = row * cell_h;
            if (col % 2 == 0 && row % 2 == 0) {

                tbbg.addColorStop(0, '#9ac56a');//#9ac56a  rgba(178,218,134,1)
                tbbg.addColorStop(1, '#9ac56a');//
                context.fillStyle = tbbg;
                context.fillRect(x, y, cell_w, cell_h);
            } else {
                tbbg.addColorStop(0, 'rgba(223,241,202,0.15)');
                tbbg.addColorStop(1, 'rgba(223,241,202,0.15)');
                context.fillStyle = tbbg;
                context.fillRect(x, y, cell_w, cell_h);

            }
        }
    }
    context.stroke();
    context.closePath();
}

//绘制白色背景框
function drawWhiteFrame(context) {
    context.save();
    //添加begin和close，避免影响后面的图的颜色设置
    context.beginPath();
    //阴影效果。可添加到文字和图片上
    context.shadowColor = 'rgba(0,0,0,0.2)';
    context.shadowOffsetX = 5;
    context.shadowOffsetY = -3;
    //高斯模糊，值越大边缘越模糊
    context.shadowBlur = 2;

    context.fillStyle = "rgba(255,255,255,0.7)";
    context.fillRect(130, 100, 170, 100);
    context.stroke();
    context.restore();
    context.closePath();

    //绘制吊牌的吊环
    var rang = context.createRadialGradient(140, 150, 4, 160, 150, 6);
    rang.addColorStop(0, 'rgba(255,255,255,0)');
    rang.addColorStop(0.5, 'rgba(255,255,255,0)');
    context.beginPath();
    context.arc(140, 150, 8, 0, Math.PI * 2, true);
    context.fillStyle = rang;
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = 'rgba(165,162,162,0.7)';
    context.stroke();
    context.closePath();
}

//绘制背景框中的图片
function drawBgCard(context) {
    // context.save();
    //整体背景
    var bgCard = context.createLinearGradient(130, 110, 210, 170);
    bgCard.addColorStop(0, 'rgba(115,156,249,1)');
    bgCard.addColorStop(0.2, 'rgba(81,132,245,0.6)');
    bgCard.addColorStop(0.5, 'rgba(156,184,249,0.8)');
    bgCard.addColorStop(1, 'rgba(236,240,249,1)');

    context.beginPath();
    context.fillStyle = bgCard;
    context.fillRect(150, 110, 140, 80);
    context.closePath();
    context.restore();

    context.save();
    context.beginPath();
    //阴影
    context.shadowColor = 'rgba(0,0,0,0.2)';
    context.shadowOffsetX = 5;
    context.shadowOffsetY = -3;
    //高斯模糊，值越大边缘越模糊
    context.shadowBlur = 2;
    context.font = '14px 华文行楷';
    context.fillStyle = '#000';
    //context.textAlign = 'center';//context.textAlign = 'center' 水平对齐 context.textBaseline='middle' 设置文字垂直对齐
    //context.fillText(要显示的文本内容，x坐标，y坐标，最大宽度);
    context.fillText('国防科学技术大学', 175, 130, 150);
    context.closePath();
    context.restore();

    context.save();
    //绘制圆环
    var logo = context.createRadialGradient(165, 125, 7, 165, 125, 8);
    logo.addColorStop(0, 'rgba(255,255,255,0)');
    logo.addColorStop(0.5, 'yellow');
    context.beginPath();
    context.arc(165, 125, 10, 0, Math.PI * 2, true);
    context.fillStyle = logo;
    context.fill();
    context.closePath();
    context.restore();

    drawStart(context, 165, 125, 5, 2, '#F5270B', "#F6F152");

    //设置整体线条
    context.save();
    //context.beginPath();
    ////图片线条
    //context.moveTo(160, 190);
    //quadraticCurveTo(二次贝塞尔曲线控制点x坐标，二次贝塞尔曲线控制点y坐标，结束点的x坐标，结束点的y坐标)
    //2x正值越大越靠右，2y负值越小越靠上
    //context.quadraticCurveTo(200, 100, 235, 150);
    //context.quadraticCurveTo(235, 130, 280, 160);
    //context.quadraticCurveTo(280, 180, 250, 190);
    //context.lineWidth = 1;
    //context.strokeStyle = 'rgba(88, 134, 59, 0.8)';
    //context.stroke();
    //context.closePath();
    context.restore();

    //context.save();
    //var bgCard = context.createRadialGradient(175, 170,2, 175, 170,13);
    //bgCard.addColorStop(0, 'rgba(115,156,249,1)');
    //bgCard.addColorStop(0.2, 'rgba(81,132,245,0.7)');
    //bgCard.addColorStop(0.5, 'rgba(156,184,249,1)');
    //bgCard.addColorStop(1, 'rgba(236,240,249,1)');

    //context.beginPath();
    //context.fillStyle = bgCard;
    //context.fillRect(160, 160, 30, 20);
    //context.closePath();
    //context.restore();

}

//绘制圆
function drawArc(ctx, x, y, r, startAngle, endAngle, flag, fillColor) {
    ctx.beginPath();
    ctx.arc(x, y, r, startAngle, endAngle, flag);
    ctx.fillStyle = fillColor;
    ctx.fill();
    ctx.closePath();
}

//绘制五角星
function drawStart(context, x, y, r, r2, fillColor, strokeColor) {
    //绘制五星红旗
    context.save();
    context.beginPath();
    //设置是个顶点的坐标，根据顶点制定路径
    //获取每个角的x坐标，Math.cos((18 + i * 72) / 180 * Math.PI) * r(半径) + a(圆心x坐标),获取y坐标，-Math.sin((18 + i * 72) / 180 * Math.PI) * r(半径) + b(圆心y坐标)
    for (var i = 0; i < 5; i++) {
        context.lineTo(Math.cos((18 + i * 72) / 180 * Math.PI) * r + x,
                        -Math.sin((18 + i * 72) / 180 * Math.PI) * r + y);//r半径越大各个角越小，半径拉伸，决定角的尖锐与否，成海星了。。
        context.lineTo(Math.cos((54 + i * 72) / 180 * Math.PI) * r2 + x,
                        -Math.sin((54 + i * 72) / 180 * Math.PI) * r2 + y);//r2决定内容空白的多少
    }
    //设置边框样式以及填充颜色
    context.lineWidth = "1";
    context.fillStyle = fillColor;
    context.strokeStyle = strokeColor;
    context.fill();
    context.stroke();
    context.closePath();
    context.restore();
}

//绘制头像
function personLogo(context) {
    context.beginPath();
    //var personBg = context.createLinearGradient(170,160,210,220);
    //personBg.addColorStop(0,'rgba(255,255,255,1)');
    //personBg.addColorStop(1, 'rgba(255,255,255,1)');
    context.rect(160, 140, 30, 45);
    context.fillStyle = 'rgba(255,255,255,0.8)';
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = '#b7b5b5';
    context.stroke();
    context.restore();
    context.closePath();
    //绘制人物形象
    context.beginPath();
    //脑袋
    context.arc(175, 153, 10, 0, 2 * Math.PI, true);

    //眼睛（左）
    context.moveTo(169, 153);//二次贝塞尔曲线的起点
    //quadraticCurveTo(二次贝塞尔曲线控制点x坐标，二次贝塞尔曲线控制点y坐标，结束点的x坐标，结束点的y坐标)2x正值越大越靠右，2y负值越小越靠上
    context.quadraticCurveTo(171, 145, 173, 153);

    //眼睛（右）
    context.moveTo(177, 152);
    context.quadraticCurveTo(179, 145, 181, 153);

    //鼻子
    context.moveTo(175, 151);
    context.quadraticCurveTo(174, 157, 173, 155);
    //context.moveTo(177, 155);
    //context.quadraticCurveTo(179, 157, 181, 155);

    //嘴巴
    context.moveTo(173, 158);
    context.quadraticCurveTo(175, 162, 177, 158);

    //脖子
    context.moveTo(172, 163);
    context.lineTo(172, 170);
    context.stroke();

    context.moveTo(172, 168);
    context.quadraticCurveTo(162, 170, 161, 175);

    context.moveTo(178, 163);
    context.lineTo(178, 170);
    context.stroke();

    context.moveTo(178, 168);
    context.quadraticCurveTo(185, 170, 188, 175);

    context.lineWidth = 1;
    context.strokeStyle = '#000';
    context.stroke();

    context.closePath();
}

//绘制人物介绍信息
function introInfo(context) {
    context.beginPath();
    context.shadowColor = 'rgba(0,0,0,0.2)';
    context.shadowOffsetX = 2;
    context.shadowOffsetY = -3;
    //高斯模糊，值越大边缘越模糊
    context.shadowBlur = 2;
    context.font = '12px 华文行楷';
    context.fillStyle = '#000';
    //context.textAlign = 'center';//context.textAlign = 'center' 水平对齐 context.textBaseline='middle' 设置文字垂直对齐
    //context.fillText(要显示的文本内容，x坐标，y坐标，最大宽度);
    context.fillText('姓名', 195, 152, 50);
    context.fillText('周加', 220, 152, 50);
    context.fillText('单位', 195, 167, 50);
    context.fillText('软件研究所', 220, 167, 150);
    context.fillText('证件号', 195, 182, 50);
    context.font = '12px 微软雅黑';
    context.fillText('XXZX2016R025', 230, 182, 50);

    drawDashed(context, 220, 152, 285, 152, 10);
    drawDashed(context, 220, 167, 285, 167, 10);
    drawDashed(context, 230, 182, 285, 182, 10);

    context.closePath();
}

//绘制虚线
function drawDashed(context, x1, y1, x2, y2, num) {
    //context.moveTo(255, 152);
    context.beginPath();
    for (var i = 0; i < 10; i++) {
        context[i % 2 == 0 ? 'moveTo' : 'lineTo'](x1 + (x2 - x1) / num * i, y1 + (y2 - y1) / num * i);
    }
    context.lineWidth = 1;
    context.strokeStyle = '#111';
    context.stroke();
    context.closePath();
}

//绘制史努比主程序
function drawMainSnoopy() {
    var snoopyCanvas = document.getElementById("Snoopy");
    var ctx = snoopyCanvas.getContext("2d");

    ctx.save();
    drawBgColor(ctx);
    ctx.restore();

    ctx.save();
    drawSnoopy(ctx);
    ctx.restore();
}

//绘制史努比背景桌面图
function drawBgColor(context) {
    context.beginPath();
    var bgColor = context.createRadialGradient(450, 250, 10, 450, 250, 500);//context.createLinearGradient(350,250,700,500)
    bgColor.addColorStop(0, '#f8f8f8');//两种渐变色容易融合
    //bgColor.addColorStop(0.3, '#f6f6f6');
    //bgColor.addColorStop(0.6, '#a09f9f');
    bgColor.addColorStop(1, '#1f4351');//#868585

    context.beginPath();
    context.rect(0, 0, 900, 500);
    context.fillStyle = bgColor;
    context.fill();
    context.closePath();
}

function drawSnoopy(context) {

    context.beginPath();
    //利用二次贝塞尔曲线绘制史努比身体曲线
    //上半部(头部)
    context.moveTo(200, 225);
    context.quadraticCurveTo(200, 180, 290, 170);
    context.quadraticCurveTo(355, 110, 400, 170);
    context.quadraticCurveTo(425, 200, 425, 210);
    //身体
    context.quadraticCurveTo(460, 260, 530, 200);
    context.quadraticCurveTo(600, 130, 645, 220);
    context.quadraticCurveTo(650, 240, 645, 240);
    //context.moveTo(655, 220);
    //爪子
    context.quadraticCurveTo(651, 180, 674, 220);
    context.quadraticCurveTo(677, 230, 677, 235);
    context.quadraticCurveTo(678, 239, 680, 230);
    context.quadraticCurveTo(681, 220, 674, 220);

    context.moveTo(680, 245);
    context.quadraticCurveTo(687, 233, 697, 235);

    context.moveTo(683, 255);
    context.quadraticCurveTo(710, 252, 700, 248);

    context.moveTo(690, 230);
    context.quadraticCurveTo(705, 252, 697, 268);
    context.quadraticCurveTo(670, 280, 640, 258);

    context.moveTo(640, 258);
    context.quadraticCurveTo(600, 290, 550, 265);
    //腿
    context.moveTo(560, 210);
    context.quadraticCurveTo(540, 240, 557, 263);
    //context.quadraticCurveTo();
    //下半部
    context.moveTo(200, 235);
    context.quadraticCurveTo(210, 280, 430, 255);
    context.quadraticCurveTo(480, 265, 515, 275);
    //手臂 
    context.moveTo(450, 239);
    context.quadraticCurveTo(470, 242, 514, 242);
    context.moveTo(515, 268);
    context.quadraticCurveTo(530, 270, 545, 262);
    context.quadraticCurveTo(557, 257, 549, 230);
    context.quadraticCurveTo(530, 210, 512, 240); 
    //context.quadraticCurveTo(525, 210, 515, 240);
    //context.arcTo(550,230,570,260,10);
    
    context.moveTo(520, 230);
    context.lineTo(525, 245);
    context.moveTo(535, 220);
    context.lineTo(533, 240);
    context.moveTo(550, 227);
    context.lineTo(540, 242);

    context.lineWidth = 3;
    context.strokeStyle = '#000000';
    context.stroke();
    context.closePath();
    context.restore();

    //眼睛
    context.save();
    context.translate(0, 110);
    context.scale(1, 0.4);
    context.beginPath();
    context.moveTo(300, 190);
    //context.lineTo(305, 170);
    context.quadraticCurveTo(305, 170, 313, 190);
    context.moveTo(313, 190);
    context.quadraticCurveTo(325, 250, 300, 190);
    context.fillStyle = '#000';
    context.fill();
    context.closePath();
    context.restore();

    //嘴巴
    context.save();
    context.beginPath();
    //context.translate(-2,45);
    //context.scale(1, 0.8);
    //context.arc(200, 238, 12, 0, 2 * Math.PI, true);
    context.moveTo(180, 245);
    //context.lineTo(180,240);
    context.quadraticCurveTo(195, 240, 200, 230);
    context.moveTo(180, 245);
    context.quadraticCurveTo(190, 270, 210, 245);
    context.quadraticCurveTo(210, 245, 200, 230);
    context.fillStyle = '#000';
    context.fill();
    context.closePath();
    context.restore();

    //耳朵
    context.save();
    context.beginPath();
    context.moveTo(380, 190);
    context.quadraticCurveTo(340, 210, 380, 260);
    context.moveTo(410, 190);
    context.quadraticCurveTo(450, 210, 425, 258);
    context.quadraticCurveTo(400, 265, 380, 260);
    //context.quadraticCurveTo(340, 210, 370, 190);

    context.fillStyle = '#000';
    context.fill();
    context.closePath();

    context.beginPath();
    context.moveTo(380, 260);
    context.quadraticCurveTo(360, 210, 410, 191);

    context.fillStyle = '#000';
    context.fill();
    context.closePath();
    context.restore(); 
}

//绘制剪切图像
function drawMainClip() {
    var c = document.getElementById("myCanvas2");
    var ctx2 = c.getContext("2d");

    // Clip a rectangular area
    ctx2.rect(50, 20, 200, 120);//从画布上绘制区域，该区域为clip()裁剪的区域
    ctx2.stroke();
    ctx2.save();  //调用save()方法，保存当前画布的操作
    ctx2.clip();  //将其进行裁剪
    // Draw red rectangle after clip()  在裁剪的区域进行其他操作
    ctx2.fillStyle = "green";
    ctx2.fillRect(0, 0, 150, 100);  //在裁剪区域绘制矩形图片并填充颜色
    ctx2.restore();  //调用restore()方法，重置回裁剪前的画布布局

    ctx2.beginPath(); //调用beginPath()方法，开始在画布上绘制图形，包括被裁剪的区域。调用该方法可以防止绘制其他图片受影响

    ctx2.rect(0, 0, 20, 50);
    ctx2.fillStyle = "pink";
    ctx2.fill();

    ctx2.arc(80, 50, 10, 0, Math.PI * 2, true);
    ctx2.fillStyle = 'red';
    ctx2.fill();

    ctx2.closePath();
}

//绘制跑马灯矩形
function drawMainMarquee() {

    var img = document.getElementById("imgCanvas");
    var ctxImg = img.getContext("2d");
    var getImg = document.getElementById("imgSource");
    //将裁剪的图片放置到canvas的指定位置
    ctxImg.drawImage(getImg, 20, 100, 30, 60, 45, 105, 30, 60); 
   
    march(); 
}

var marquee = document.getElementById("Marquee");
var offset = 0;
function drawMarquee(ctx) { 
    ctx.clearRect(0, 0, marquee.width, marquee.height);
    ctx.setLineDash([2, 15]);
    ctx.lineDashOffset = offset;//offset正值逆时针，offset负值顺时针
    ctx.strokeRect(100, 80, 120, 90);
}

//设置偏移量
function march() { 
    var ctx = marquee.getContext("2d");
    offset++;
    if (offset > 20) {
        offset = 0;
    }
    drawMarquee(ctx);
    //以函数引用的方式传递。延时方法两种传参方式，setTimeout("march()",20)(字符串方式)，setTimeout(march,20)(函数引用方式) 
    setTimeout(march, 20);
}

//运用Web Worker获取大量数据而不影响页面的加载
function init() {
    var worker = new Worker('../../js/worker.js');
    worker.onmessage = function(evt)
    {
        document.getElementById("result").innerHTML += evt.data+"</br>";
    }

    worker.onerror = function (evt)
    {
        //错误信息
        console.log("程序运行出错：" + evt.message);
        worker.terminate();//终止运行worker
    }
}
