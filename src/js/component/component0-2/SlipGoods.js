import $ from 'n-zepto'
require('../../../less/less0-2/SlipGoods.less')
var React = require('react');


//横向滚动条
var SlipGoods = React.createClass({
    getDefaultProps: function(){
        return {
            style: {

            }
        }
    },
    getInitalState: function(){
        return({
            left: 0
        })
    },
    componentDidMount: function(){
        var _self = this;
        var record = 0;
        var moveLeft = 0;
        var wid = $(window).width();
        var fin = $('.slip').width();
        var one = wid - fin;
        $('.kind').on('touchstart',function(e){
            var initPosW = e.touches[0].clientX;
            var target = $('.kind')[0];
            var u = 0.3;
            $(document).on('touchmove', function(e){ 
                var icurPosW = e.touches[0].clientX;
                var diffValue = icurPosW - initPosW + record;
                moveLeft = target.offsetLeft;
                if((moveLeft < wid && moveLeft > 0)){
                    diffValue *= u
                }
                if(moveLeft < one && moveLeft > -(fin)){
                    diffValue = one + (diffValue - one) * u
                }
                target.style.left = diffValue + 'px';
                _self.setState({
                    left : diffValue
                })
                console.log(_self.state.left)
                $(document).on('touchend', function(){
                    record = diffValue;
                    if((moveLeft < wid && moveLeft > 0)){
                        target.style.transition = "left 500ms ease-out";
                        target.style.left = "0px";
                        record = 0;
                    }else if(moveLeft < one && moveLeft > -(fin)){
                        target.style.transition = "left 500ms ease-out";
                        target.style.left = one+"px";
                        record = one;
                    }
                })
            })
        })
    },
    render: function(){
        return (
            <div className={'slipGoods'}>
                <div className={'slip'} style={this.props.style}>
                    <KindItem kind={this.props.data}/>
                </div>
            </div>
        )
    }
})

var KindItem = React.createClass({
    componentWillMount: function(){
        var kind = this.props.kind;
        var rows = [];
        var _self = this;
        kind.forEach(function(ele, index){
            rows.push(<li key={index + 1000} style={{background:'url('+ ele.imgSrc +') 0% 0%/100% 100%'}}>
                <div>
                    <h5>{ele.title}</h5>
                    <p>{ele.msg}</p>
                </div>
            </li>)
        })
        this.rows = rows;
    },
    render: function(){
        return (
            <ul className={"kind"}>
                {
                    this.rows
                }
            </ul>
        )
    }
})

module.exports = SlipGoods