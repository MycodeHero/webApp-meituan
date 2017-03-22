require('../../../less/less0-2/Trait.less')
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
        var kind = this.props.trait;
        var rows = [];
        kind.forEach(function(ele, index){
            rows.push(<li key={index} style={{background:'url(' + ele.imgSrc + ') 0% 0%/100% 100%'}}>
                    <div>
                        <h5>{ele.title}</h5>
                    </div>
            </li>)
        })
        this.rows = rows;
    },
    render: function(){
        return (
            <div className="trait-wrap">
                <ul className={'trait-item'}>{
                        this.rows
                    }
                </ul>
            </div>
        )
    }
})

//优惠组件
var Triat = React.createClass({
    render: function(){
        return (
            <div className={'trait'}>
                <Title/>
                <DiscountItem trait = {this.props.data}/>
            </div>
        )
    }
})
module.exports = Triat;