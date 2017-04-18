function touchMove(ele, direction, u = 0.5){
    var record = 0;
    var _self = this;
    var winOffset = 0;
    var domOffset = 0;
    var diff = 0;
    var icurOffset = 0;
    var u = u;  //摩擦力
    if(direction === 'cross'){
        winOffset = $(window).width();
        domOffset = ele.width();
        diff = winOffset - domOffset; 
    }else{
        winOffset = 478;
        domOffset = ele.height();
        diff = winOffset - domOffset;
    }
    ele.on('touchstart', function(e){
    var initPos = (direction === 'cross') ? e.touches[0].clientX :e.touches[0].clientY;
    var target = this;
    target.style.transition = "";
    $(document).on('touchmove', function(e){
        var icurPos = (direction === 'cross') ? e.touches[0].clientX : e.touches[0].clientY;
        icurOffset = icurPos - initPos + record;
        if(icurOffset < winOffset && icurOffset > 0){
            icurOffset *= u;
        }else if(icurOffset < diff && icurOffset > -(domOffset) && diff  < 0){
            icurOffset = (icurOffset - diff) * u + diff;
        }else if(icurOffset < -49 && diff > 0){
            icurOffset = -49 + icurOffset * u;
        }
        if(direction === 'cross'){
            target.style.left = icurOffset + 'px';
        }else{
            target.style.top = icurOffset + 'px';
        }
        $(document).on('touchend', function(){
            $(document).off('touchmove').off('touchend');
            record = icurOffset;
            if(record < winOffset && record > 0){
               
                if(direction === 'cross'){
                    target.style.transition = "left 500ms ease-out";
                   target.style.left = '0px';
                }else{
                    target.style.transition = "top 500ms ease-out";
                    target.style.top = '0px';
                }
                record = 0;
            }else if(record < diff && record > -(domOffset) && diff < 0){
                if(direction === 'cross'){
                    target.style.transition = "left 500ms ease-out";
                    target.style.left = diff + 'px';
                }else{
                    target.style.transition = "top 500ms ease-out";
                    target.style.top = diff - 49 + 'px';
                }
                record = diff - 49;
            }else if(record < -49 - diff && diff>0){
                target.style.transition = "top 500ms ease-out";
                target.style.top = "-49px";
                record = -49;
            }
        })
    })
})
}

module.exports = touchMove;
