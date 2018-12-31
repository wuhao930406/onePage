/**
 * Created by Administrator on 2018/12/31 0031.
 */
var n = 0;
function prev(obj){
    if(n!=0){
        $(".cardgroup").animate({marginLeft:0},600);
        n --;
        $(obj).css({opacity:0.6});
        $(obj).siblings("img").css({opacity:1});
    }

}

function next(obj){
    if(n==0){
        $(".cardgroup").animate({marginLeft:-300},600);
        n++;
        $(obj).css({opacity:0.6});
        $(obj).siblings("img").css({opacity:1});
    }

}
