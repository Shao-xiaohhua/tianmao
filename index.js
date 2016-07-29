$(function(){
   var tu = $('.banner-box .tu');
   var an=$('.banner-box .an');
    move =function(n,fangxiang){
        var dian=$('.dian .diandian');
        var nn = fangxiang==='left'?'right':'left';
        var now = $('.banner-box .tu.now ');
        now.addClass(fangxiang)
                .delay(600)
                .queue(function(){
                    $(this)
                        .removeClass('now')
                        .removeClass(fangxiang)
                        .dequeue();
                })
        next= now.next();
        $(n).addClass(nn);
        $(n).get(0).offsetWidth;
        $(n).removeClass(nn);
        $(n).addClass('now');


        if(now.next().length){
            var biao=now.next().index();
        }else {
            biao=$('.haha:first-child').index();
        }
        dian.removeClass('bian');
        dian.eq(biao).addClass('bian');
    }
    an.on('click',function(){
        var now=$('.now');
        next=now.next();
        if(next.length){
            next=now.next();
        }else {
            next=$('.tu').eq(0);
        }
        move(next,'left');
    })
  var haha=function(){
   an.trigger('click');
  }
    var t=setInterval(haha,2000);
});
//app
$(function(){

});