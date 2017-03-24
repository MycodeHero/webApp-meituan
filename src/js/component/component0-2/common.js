var React = require('react');

function handleMsg(props, name){
     var kind = props;
     var rows = [];
     kind.forEach(function(ele, index){
        rows.push(<li key={index} style={{background:'url(' + ele.imgSrc + ') 0% 0%/100% 100%'}}>
                <div className={name}>
                    <h4>{ele.title}</h4>
                    <p style={(ele.spe)?{background:"#fc3"}:{}}>{ele.msg}</p>
                </div>
        </li>)
    })
    return rows;
}

module.exports = handleMsg