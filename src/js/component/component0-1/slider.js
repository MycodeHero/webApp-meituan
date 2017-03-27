(function ($) {

        var $Slider = document.getElementById('slider');
        var moveWidth = $Slider.children[0].offsetWidth;
        var $I = $(".slider-wrapper i");
        var sliderTimer = null;
        var num = $Slider.children.length - 1;
        var flag = true;
        var index = 0;
        var startPosition, endPosition, deltaX, deltaY, moveLength;

        $(".slider-wrapper").bind('touchstart', function(e){
            var touch = e.touches[0];
            startPosition = {
                x: touch.pageX,
                y: touch.pageY
            }
        }) .bind('touchmove', function(e){
            var touch = e.touches[0];
            endPosition = {
                x: touch.pageX,
                y: touch.pageY
            };

            deltaX = endPosition.x - startPosition.x;
            deltaY = endPosition.y - startPosition.y;
            moveLength = Math.sqrt(Math.pow(Math.abs(deltaX), 2) + Math.pow(Math.abs(deltaY), 2));
        }).bind('touchend', function(e){
            if(deltaX < 0) { // 向左划动
                autoMove(1);
            } else if (deltaX > 0) { // 向右划动
                autoMove(-1);
            }
        });

            for (var i = 0; i < $I.length; i++) {
                $I[i].onclick = (function (iIndex) {
                    return function () {
                        clearInterval(sliderTimer);
                        index = iIndex;
                        startMove($Slider, {left: -iIndex * moveWidth}, endJudge);
                    }
                })(i)
            }

            //  direction -1 ---向左轮播
            // direction 1 / undefined -----向右轮播
            function autoMove(direction) {
                if (flag) {
                    flag = false;
                    clearInterval(sliderTimer);
                    if(direction === 1 || !direction) {
                        index++;
                        startMove($Slider, {left: $Slider.offsetLeft - moveWidth}, endJudge);
                    }else if (direction === -1) {
                        index--;
                        if ($Slider.offsetLeft === 0) {
                            $Slider.style.left = -moveWidth * num + 'px';
                            index = num - 1;
                        }
                        startMove($Slider, {left: $Slider.offsetLeft + moveWidth}, endJudge);
                    }
                }
            }

           function endJudge () {
                if ($Slider.offsetLeft === - moveWidth * num) {
                    $Slider.style.left = '0px';
                    index = 0;
                }       
                sliderTimer = setInterval(autoMove, 1500); 
                flag = true;  
                changeIndex(index);
           }

           function changeIndex (index) {
               for (var i = 0; i < $I.length; i++) {
                    $I[i].setAttribute('class', '');
               }
               $I[index].setAttribute('class', 'active');
           }

           sliderTimer = setInterval(autoMove, 1500);   



//------------------------------------------------------------------------------------------------
        function getStyle (obj, attr) {
            if (obj.currentStyle) {
                return obj.currentStyle[attr];
            }else {
                return window.getComputedStyle(obj,false)[attr];
            }
        }
                
        function startMove (obj, json, func) {
            clearInterval(obj.timer);
            var iSpeed;
            var iCur;
            var name;
            obj.timer = setInterval(function () {
                var bStop = true;
                for (var attr in json) {                            
                    if (attr === 'opacity') {                                
                        name = attr;
                        iCur = parseFloat(getStyle(obj, attr)) * 100;
                    }else {
                        iCur = parseInt(getStyle(obj, attr));
                    }                            
                    iSpeed = (json[attr] - iCur) / 7;
                    if (iSpeed > 0) {
                        iSpeed = Math.ceil(iSpeed);
                    }else {
                        iSpeed = Math.floor(iSpeed);
                    }
                    if (attr === 'opacity') {
                        obj.style.opacity = (iCur + iSpeed) / 100;
                    }else {
                        obj.style[attr] = iCur + iSpeed + 'px';
                    }
                    if (Math.floor(Math.abs(json[attr] - iCur)) !== 0) {
                        bStop = false;
                    }
                }
                if (bStop) {
                    if (name === 'opacity') {
                        obj.style.opactiy = json[name] / 100;
                    }
                    clearInterval(obj.timer);
                    func();
                }
            }, 30);
        } 
})(window.Zepto);