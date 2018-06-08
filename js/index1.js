/*<!-- 新歌首发大banner部分<!--选项卡+轮播图-->-->*/


<!-- 鼠标滑过新歌首发每个部分-->
/*中国*/
$('.getChina').mouseover(function () { $('.China-Small-Icon').show()});
$('.getChina').mouseout(function () { $('.China-Small-Icon').hide()});

$('.getChina1').mouseover(function () { $('.China-Small-Icon1').show()});
$('.getChina1').mouseout(function () { $('.China-Small-Icon1').hide()});

$('.getChina2').mouseover(function () { $('.China-Small-Icon2').show()});
$('.getChina2').mouseout(function () { $('.China-Small-Icon2').hide()});

$('.getChina3').mouseover(function () { $('.China-Small-Icon3').show()});
$('.getChina3').mouseout(function () { $('.China-Small-Icon3').hide()});
/*港台*/
$('.getGossip').mouseover(function () { $('.Gossip-small-img').show()});
$('.getGossip').mouseout(function () { $('.Gossip-small-img').hide()});

$('.getGossip1').mouseover(function () { $('.Gossip-small-img1').show()});
$('.getGossip1').mouseout(function () { $('.Gossip-small-img1').hide()});

$('.getGossip2').mouseover(function () { $('.Gossip-small-img2').show()});
$('.getGossip2').mouseout(function () { $('.Gossip-small-img2').hide()});

$('.getGossip3').mouseover(function () { $('.Gossip-small-img3').show()});
$('.getGossip3').mouseout(function () { $('.Gossip-small-img3').hide()});
/*欧美*/

$('.EURO').mouseover(function () { $('.EURO-small-img').show()});
$('.EURO').mouseout(function () { $('.EURO-small-img').hide()});

$('.EUROPE1').mouseover(function () { $('.EUROPE-small-img1').show()});
$('.EUROPE1').mouseout(function () { $('.EUROPE-small-img1').hide()});

$('.EUROPE2').mouseover(function () { $('.EUROPE-small-img2').show()});
$('.EUROPE2').mouseout(function () { $('.EUROPE-small-img2').hide()});

$('.EUROPE3').mouseover(function () { $('.EUROPE-small-img3').show()});
$('.EUROPE3').mouseout(function () { $('.EUROPE-small-img3').hide()});
/*韩国*/
$('.Kor').mouseover(function () { $('.Kor-small-img').show()});
$('.Kor').mouseout(function () { $('.Kor-small-img').hide()});

$('.Korea1').mouseover(function () { $('.Korea-small-img1').show()});
$('.Korea1').mouseout(function () { $('.Korea-small-img1').hide()});

$('.Korea2').mouseover(function () { $('.Korea-small-img2').show()});
$('.Korea2').mouseout(function () { $('.Korea-small-img2').hide()});

$('.Korea3').mouseover(function () { $('.Korea-small-img3').show()});
$('.Korea3').mouseout(function () { $('.Korea-small-img3').hide()});
/*日本*/
$('.jap').mouseover(function () { $('.jap-small-img').show()});
$('.jap').mouseout(function () { $('.jap-small-img').hide()});

$('.japan1').mouseover(function () { $('.japan-small-img1').show()});
$('.japan1').mouseout(function () { $('.japan-small-img1').hide()});

$('.japan2').mouseover(function () { $('.japan-small-img2').show()});
$('.japan2').mouseout(function () { $('.japan-small-img2').hide()});

$('.japan3').mouseover(function () { $('.japan-small-img3').show()});
$('.japan3').mouseout(function () { $('.japan-small-img3').hide()});
//轮播图
var NewContentBOX=$('.NewContent-BOX');
var $ul=$('.BOX-ul');
var $aLi=$ul.find('li');
// console.log($aLi);
// console.log(NewContentBOX);
var banner=$('.BOX-banner');
var NewCon=$('.NewContent');
// console.log(banner)
var leftBtn=$('#leftBtn');
var rightBtn=$('#rightBtn');
var divs=$('.div-img');
// console.log(divs)
var timer=null;
var s=0;
clearInterval(timer);
timer=setInterval(autoMove,2000);
function autoMove(){
    if(s>=divs.length-1){
        s=0;
        banner.css('left',-s*960);
    }
    s++;
    banner.animate({left:-s*960},800);
    bannerTip()
}
//3.焦点自动轮播
function bannerTip(){
    var tmp=s>=$aLi.length?0:s;
    $.each($aLi,function(index,item){
        item.className=index==tmp?'on':null;//JS
    })

}
//4.鼠标移入停止，移出继续
NewCon.mouseover(function(){
    clearInterval(timer);
    leftBtn.show();
    rightBtn.show();
});
NewCon.mouseout(function(){
    timer=setInterval(autoMove,2000);
        leftBtn.hide();
        rightBtn.hide();
});
//5.点击焦点手动切换
handleChange();
function handleChange(){
    $.each($aLi,function(index,item){
        $(item).click(function(){
            s=$(this).index();
            banner.animate({left:-s*960},800);
            bannerTip();
        })
    })
}
//6.点击左右按钮切换
rightBtn.click(function(){
    autoMove();
});
leftBtn.click(function(){
    if(s<=0){
        s=divs.length-1;
        banner.css('left',-s*960);
    }
    s--;
    banner.animate({left:-s*960},800);
    bannerTip();
});

/***********************************************************/
var rank=$('.rank-box1');
console.log(rank);
$(function(){
    $(".rank-box1").hover(
        function(){
            var that=this;
            item6Timer=setTimeout(function(){
                $(that).find("div").animate({width:240,height:436,left:0,top:0},300,function(){
                    $(that).find("h2").fadeOut(200);
                    $(that).find("dl").fadeIn(200);
                });
            },100);
        },
        function(){
            var that=this;
            clearTimeout(item6Timer);
            $(that).find("dl").fadeOut(200);
            $(that).find("div").stop().animate({width:0,height:0,left:122,top:205},300);
            $(that).find("h2").fadeIn(200);
        }
    )
});


/*回到顶部*/
function fn(attr,value) {
    if(value===undefined){
        return document.documentElement[attr]||document.body[attr];
    }
    document.documentElement[attr]=document.body[attr]=value;
}
var goTOP1=document.getElementsByClassName('goTOP1')[0];
var timers=null;
var boks=false;
var goTOP=document.getElementsByClassName("goTOP")[0];

window.onscroll=function () {
    if(boks){
        clearInterval(timers);
    }
    boks=true;
    console.log(boks);

    if( fn ('scrollTop')>fn('clientHeight')){
        goTOP.style.display='block';
    }else {
        goTOP.style.display='none';
    }
};
goTOP1.onclick=function () {
    var target=fn('scrollTop')+fn('clientHeight');
    var duration=1000;
    var interval=30;
    var step=target/duration*interval;
    timers=setInterval(function () {
        var currentTop=fn('scrollTop');
        if(currentTop<=0){
            clearInterval(timers);
            return;
        }
        currentTop-=step;
        fn('scrollTop',currentTop);
        boks=false;

    },interval)
};
