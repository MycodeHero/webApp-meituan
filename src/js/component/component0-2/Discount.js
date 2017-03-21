require('../../../less/less0-2/Discount.less')
//引入react的模块依赖
var React = require('react');

//标题组件
var Title = React.createClass({
    getDefaultProps: function(){
        return {
            style: {
                width:'100%',
                height:'33px',
                lineHeight:'33px',
                fontWeight:550,
            }
        }
    },
    render: function(){
         return (
            <p style={{textAlign:'center',paddingTop:'9px'}}>— <span style={this.props.style}>优惠专区</span> —</p>
        )
    }
})

//优惠种类组件
var DiscountItem = React.createClass({
    componentWillMount: function(){
        var kind = this.props.kindItem;
        var rows = [];
        kind.forEach(function(ele, index){
            rows.push(<li key={index} style={{background:'url(' + ele.imgSrc + ') 0% 0%/ 100% 100%'}}>
                <div className={'dis-text'}>
                    <h4>{ele.text}</h4>
                    <p>{ele.discount}</p>
                </div>
            </li>)
        })
        this.rows = rows;
    },
    render: function(){
        return (
            <div style={{display:'flex'}}>
                <div className={'dis-left'}>
                    <ul>
                        {
                            this.rows.slice(0, 1)
                        }
                    </ul>
                </div>
                <div className={'dis-right'}>
                    <ul className={'layout'}>
                        {
                            this.rows.slice(1, 3)
                        }
                    </ul>
                    <ul className={'layout'}>
                        {
                            this.rows.slice(3, 5)
                        }
                    </ul>
                </div>
            </div>
        )
    }
})

//优惠组件
var Discount = React.createClass({
    render: function(){
        return (
            <div>
                <Title/>
                <DiscountItem kindItem = {this.props.data}/>
            </div>
        )
    }
})
module.exports = Discount;