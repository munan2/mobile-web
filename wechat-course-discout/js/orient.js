// js判断屏幕横竖屏：
    function orient() {

        var base = 750,scale;


        if (window.orientation == 0 || window.orientation == 180) {
            // 竖屏
            scale = screen.width / base;
        } else if (window.orientation == 90 || window.orientation == -90) {
            // 横屏 ios在横屏的情况下 宽高不变
            var isiOS = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
            if(isiOS){
                scale = screen.height / base;
            }else{
                scale = screen.width / base;
            }
            
        }
        
        var meta = document.querySelector('meta[name="viewport"]');
        meta.setAttribute('content', 'width=' + base + ',initial-scale=' + scale + ',maximum-scale=' + scale + ', minimum-scale=' + scale + ',user-scalable=0,target-densitydpi=device-dpi');

        return false;
    }

    $(window).bind('orientationchange', function(e) {
        orient();
    });