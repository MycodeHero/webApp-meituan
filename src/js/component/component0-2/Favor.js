require('../../../less/less0-2/Favor.less')
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
            <p style={{textAlign:'center',paddingTop:'9px'}}>— <span style={this.props.style}>为你优选</span> —</p>
        )
    }
})

//优惠种类组件
var DiscountItem = React.createClass({
    componentWillMount: function(){
        var kind = this.props.favor;
        var rows = [];
        kind.forEach(function(ele, index){
            rows.push(<li key={index} style={{background:'url(' + ele.imgSrc + ') 0% 0%/ 100% 100%'}}>
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
            <div className="favor-wrap">
                <ul className={'favor-item'}>{
                        this.rows.slice(0, 3)
                    }
                </ul>
                <ul className={'favor-item'}>{
                        this.rows.slice(3, 6)
                    }
                </ul>
            </div>
        )
    }
})

//优惠组件
var Favor = React.createClass({
    render: function(){
        return (
            <div className={'favor'}>
                <Title/>
                <DiscountItem favor = {this.props.data}/>
            </div>
        )
    }
})
module.exports = Favor;