require('../../../less/less0-2/SlipGoods.less')
//引入zepto模块依赖
import $ from 'n-zepto'

//引入食物列表组件
var Foodlist = require('./Foodlist.js')

//引入React模块依赖
var React = require('react');


var SlipItem = React.createClass({
    componentWillMount: function(){
        this.rows = this.props.handleMsg(this.props.kind)
    },
    render: function(){
        return (
            <Foodlist name = {"kind"} child = {this.rows}/>
        )
    }
})

//横向滚动条
var SlipGoods = React.createClass({
    componentDidMount: function(){
        var record = 0;
        var _self = this;
        var wid = $(window).width();
        var uWid = $('.kind').width();
        var diff = wid - uWid; 
        var icurLeft = 0;
        var u = 0.5;
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
    },
    render: function(){
        return (
            <div className={'slipGoods'}>
                <div className={'slip'}>
                    <SlipItem kind={this.props.data} handleMsg={this.props.handleMsg}/>
                </div>
            </div>
        )
    }
})


module.exports = SlipGoods