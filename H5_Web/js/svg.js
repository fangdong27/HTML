
$( function () {
    getLocation();
});

//判断浏览器是否支持Geolocation定位
function getLocation() {

    var options = {
        enableHighAccuracy: true, //boolean 是否要求高精度的地理信息，默认为false
        maximumAge: 1000 //应用程序的缓存时间
    }

    if (navigator.geolocation) {
        //浏览器支持geolocation H5自带的定位接口
        navigator.geolocation.getCurrentPosition(onSuccess, onError, options);

    } else {
        //浏览器不支持geolocation
        console.log("浏览器不支持!");
    }
}

//成功时（支持定位）
function onSuccess(position){
    //返回用户位置
    //经度
    var longitude = position.coords.longitude;
    console.log("经度：" + longitude);
    //纬度
    var latitude = position.coords.latitude;
    console.log("纬度：" + latitude);

    //调用腾讯地图API
     //getLocByTencentMap(latitude, longitude);

    //调用百度地图API
     getLocByBaiDuMap(latitude,longitude);

}

//失败时
function onError(error) {
    var objTencent = document.getElementById("TencentMap");
    var objBaidu = document.getElementById("BaiDuMap");
    switch (error.code) {
        case error.PERMISSION_DENIED:
            alert("用户拒绝对获取地理位置的请求");
            objTencent.innerHTML += '用户拒绝对获取地理位置的请求';
            objBaidu.innerHTML += '用户拒绝对获取地理位置的请求';
            break;

        case error.POSITION_UNAVAILABLE:
            alert("位置信息是不可用的");
            objTencent.innerHTML += '位置信息是不可用的';
            objBaidu.innerHTML += '位置信息是不可用的';
            break;

        case error.TIMEOUT:
            alert("请求用户地理位置超时");
            objTencent.innerHTML += '请求用户地理位置超时';
            objBaidu.innerHTML += '请求用户地理位置超时';
            break;

        case error.UNKNOWN_ERROR:
            alert("未知错误");
            objTencent.innerHTML += '未知错误';
            objBaidu.innerHTML += '未知错误';
            break;
    }

}

//调用腾讯地图API
function getLocByTencentMap(latitude, longitude) { 
    //腾讯地图确定当前中心地理坐标(纬度，经度)
    var center = new qq.maps.LatLng(latitude, longitude);

    //使用腾讯地图API 定义map变量 调用 qq.maps.Map() 构造函数   获取地图显示容器
    var map = new qq.maps.Map(document.getElementById("TencentMap"), {
        //地图的中心地理坐标
        center: center,
        //初始化地图缩放级别
        zoom: 18
    });

    //在地图中创建信息提示窗口
    var infoWin = new qq.maps.InfoWindow({
        map: map
    });
    //打开信息窗口
    infoWin.open();
    //设置信息窗口显示区的内容
    infoWin.setContent('<div style="width:200px;padding:10px;">' +
        '腾讯地图定位结果：<br/>您在这里<br/>纬度：' + latitude + '<br/>经度：' + longitude);
    //设置信息窗口的位置
    infoWin.setPosition(center);
}

//调用百度地图API
function getLocByBaiDuMap(latitude, longitude) {
    //创建地图实例，放入包含地图的容器ID
    var map = new BMap.Map("BaiDuMap");

    // 初始化地图,设置中心点坐标(经度，纬度)和地图级别 
    var point = new BMap.Point(longitude, latitude);//创建Point位置实例
    map.centerAndZoom(point, 18); //设置地图中心点及缩放级别
    map.addControl(new BMap.MapTypeControl());   //添加地图类型控件(地图，卫星，三维)

    //添加地图控件
    var top_left_control = new BMap.ScaleControl({ anchor: BMAP_ANCHOR_TOP_LEFT });// 左上角，添加比例尺
    var top_left_navigation = new BMap.NavigationControl();  //左上角，添加默认缩放平移控件
    map.addControl(top_left_control);
    map.addControl(top_left_navigation);

    var marker = new BMap.Marker(point);  //创建一个Marker点
    map.addOverlay(marker);  //将Marker点覆盖到地图上
    //marker.setAnimation(BMAP_ANIMATION_BOUNCE);  //使Marker点跳动起来
    map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放 
     
    var opts = {
        width: 200,     // 信息窗口宽度
        height: 100,     // 信息窗口高度
        title: "百度地图定位信息：", // 信息窗口标题
        enableMessage: true,//设置允许信息窗发送短息
        message: "确认地址~"
    }
    var infoWindow = new BMap.InfoWindow('<div style="width:200px;padding:10px;">' +
        '您在这里<br/>纬度：' + latitude + '<br/>经度：' + longitude, opts);  // 创建信息窗口对象 
    marker.addEventListener("click", function () {
        map.openInfoWindow(infoWindow, point); //开启信息窗口
    });
}