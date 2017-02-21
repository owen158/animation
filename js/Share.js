/**
 * Created by owen on 2016.12.15/12/14.
 */
// 左右轮播
function onscroll(y,b) {
    window.onscroll = function () {
        var sDiv = document.getElementById('y');
        var sDiv_1 = document.getElementById('b');
        // document.body.scrollTop   兼容谷歌浏览器
        //  document.documentElement.scrollTop  兼容IE浏览器
        //滚动点离浏览器顶部的距离
        var varTop=document.documentElement.scrollTop||document.body.scrollTop;
        console.log('在'+varTop)
        //oDiv.style.top=scrollTop+(document.documentElement.clientHeight-oDiv.offsetHeight)/2+'px';
        var t = varTop + (document.documentElement.clientHeight - sDiv.offsetHeight) / 1.5;
        var t = varTop + (document.documentElement.clientHeight - sDiv_1.offsetHeight) / 1.5;
        console.log('还'+t)
//                console.log(t)
        //给DIV的高赋值
        //document.documentElement.clientHeight可见区域的高度
        //oDiv.style.top=scrollTop+(document.documentElement.clientHeight-oDiv.offsetHeight)/2+'px';
        //让速度发生变化
        startMove(parseInt(t),7);
    }
    var varTimer = null;
    function startMove(destination,speed,y,b) {
        var sDiv = document.getElementById('y');
        var sDiv_1 = document.getElementById('b')
        clearInterval(varTimer);    //开启一个定时器
        varTimer = setInterval(function () {
            //div一开始离目标的距离除以speed  div移动的速度  div距离越近  速度越小
            var varSpeed = (destination - sDiv.offsetTop) / speed;
            // console.log('你'+sDiv.offsetTop)
            //Round是四舍五入 ceil向上取整。。floor向下取整
            varSpeed = varSpeed > 0 ? Math.ceil(varSpeed) : Math.floor(varSpeed);
            if (sDiv.offsetTop == destination) {//到达目的地  清除定时器
                clearInterval(varTimer);
            }
            else {//移动
                sDiv.style.top = sDiv.offsetTop + varSpeed + 'px';
            }
            var varSpeed = (destination - sDiv_1.offsetTop) / speed;//Round是四舍五入 ceil向上取整。。floor向下取整
            varSpeed = varSpeed > 0 ? Math.ceil(varSpeed) : Math.floor(varSpeed);//到达目的地  清除定时器
            if (sDiv_1.offsetTop == destination) {
                clearInterval(varTimer);
            }
            else {//移动
                sDiv_1.style.top = sDiv_1.offsetTop + varSpeed + 'px';
            }
        }, 30);
    }
}
// 导航条效果
function Share(i,d) {
    var dd=document.getElementsByClassName(i)[0].children;
    var ii=document.getElementsByClassName(d)[0].children;
    for (var i=0;i<dd.length;i++){
        (function (index) {
            dd[i].onclick=function (e) {
                e.preventDefault()
                for (i=0;i<dd.length;i++){
                    dd[i].className='delete';
                    ii[i].className='delete'
                }
                this.className='active';
                ii[index].className='active';
            }
        })(i)
    }
};
// 轮播效果
function Share_1(i,d,o) {
    var dd=document.getElementsByClassName(i)[0].children;
    var ii=document.getElementsByClassName(d)[0];
    var width=document.getElementsByClassName(o)[0].children[0].clientWidth;
    var now=0;
    for(var i=0;i<dd.length;i++){
        dd[i].index=i;
        dd[i].onmousemove=function () {
            clearInterval(t)
        }
        dd[i].onmouseout=function () {
            t=setInterval(inter,1000)
        }
        dd[i].onclick=function (e) {
            e.preventDefault();
            console.log(this.index)
            now=this.index;
            tad();
        }
    }
    function tad() {
        for (i=0;i<dd.length;i++){
            dd[i].className='delete';
        }
        dd[now].className='active';
        ii.style.left=-width*now+'px';
    }
    function inter() {
        now++;
        if(now==5) now=0;
        tad()
    }
    var t=setInterval(inter,1000)
};
// var D_1=document.getElementById('D_1')
// var D_2=document.getElementById('D_2')
// var f=true;
// function rgb() {
//     function rgba() {
//         var r=parseInt(Math.random()*255+1);
//         var g=parseInt(Math.random()*255+1);
//         var b=parseInt(Math.random()*255+1);
//         return "rgb("+r+","+g+","+b+")";
//     }
//     D_1.style.background=rgba();
//     D_2.style.background=rgba()
// }
// setInterval(rgb,200)
//
// function char() {
//     if(f){
//         D_1.style.color='red';
//         f=false
//     }else{
//         D_1.style.color='#000';
//         f=true;
//     }
// }
// setInterval(char,100)
// 左右滚动效果
// function scroll(d) {
//     var oDiv=document.getElementById(d);
//     oDiv.style.top=document.body.scrollTop + 200;  //控制上下位置
//     oDiv.style.left = document.body.scrollLeft + 100; //控制横向位置
// }
// scroll('');
// Share('are','Sha');
// Share('box_2','box_3');
// Share_1('box_2','box_3','L_box');
