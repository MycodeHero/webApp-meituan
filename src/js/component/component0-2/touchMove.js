(function($){
    var record = 0;
    var _self = this;
    var wid = $(window).width();
    var uWid = $('.kind').width();
    var diff = wid - uWid; 
    var icurLeft = 0;
    var u = 0.5;  //摩擦力
    $('.kind').on('touchstart', function(e){
        var initPosW = e.touches[0].clientX;
        var target = this;
        target.style.transition = "";
        $(document).on('touchmove', function(e){
            var icurPosW = e.touches[0].clientX;
            icurLeft = icurPosW - initPosW + record;
            if(icurLeft < wid && icurLeft > 0){
                icurLeft *= u;
            }else if(icurLeft < (wid - uWid) && icurLeft > -(uWid)){
                icurLeft = (icurLeft - diff) * u + diff;
            }
            target.style.left = icurLeft + 'px';
            $(document).on('touchend', function(){
                $(document).off('touchmove').off('touchend');
                record = icurLeft;
                if(record < wid && record > 0){
                    target.style.transition = "left 500ms ease-out";
                    target.style.left = '0px';
                    record = 0;
                }else if(record < diff && record > -(uWid)){
                    target.style.transition = "left 500ms ease-out";
                    target.style.left = diff + 'px';
                    record = diff;
                }
            })
        })
    })
}(window.Zepto))