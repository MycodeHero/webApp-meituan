var express = require('express');
var router = express.Router();
var fs = require('fs');
var PATH = './public/data/';

//读取数据模块
//查询接口， token校验
//公共接口，无需校验
//data/read?type=it
//data/read?type=it.json
router.get('/read', function(req, res, next) {
    var type = req.param('type') || ''; //获取url中type的参数 当没有返回''
    fs.readFile(PATH + type + '.json', function(err, data){ //读取文件，第一个参数文件路径， 第二个回调函数
        if(err){    //如果有报错对象 则向用户发送错误信息
            return res.send({
                status : 0,
                info : "读取文件出现异常" 
            })
        }
        //TODO:Try
        var obj = [];
        try{
            obj = JSON.parse(data.toString());
        }catch (e) {
            obj = []
        }
        var COUNT = 50; //一次获取50个对象属性
        
        if(obj.length > COUNT){
            obj = obj.slice(0, COUNT);
        }
        return res.send({
            status : 1,
            data : obj
        })
    })
});

//写入数据模块
router.post('/write', function(req, res, next){
    if(!req.session.user){
        return res.send({
            status : 0,
            info : "未鉴权认证"
        })
    }
    var type = req.param('type') || '';
    var url = req.param('url') || '';
    var img = req.param('img') || '';
    var title = req.param('title') || '';
    if(!type || !url || !img || !title){
        return res.send({
            status : 0,
            info : "提交信息不全"
        })
    }
    var filePath = PATH + type + '.json';
    fs.readFile(filePath, function(err, data){
        if(err){
            return res.send({
                status : 0,
                info : '读取数据失败'
            })
        } 
        var arr = JSON.parse(data.toString());
        var obj = {
            title : title,
            img : img,
            url : url,
            id : guidGenerate(),
            time : new Date().getTime()
        }
        arr.unshift(obj);
        var newData = JSON.stringify(arr);
        fs.writeFile(filePath, newData, function(err,data){
            if(err){
                return res.send({
                    status : 0,
                    info : '写入数据失败'
                })
            }
            return res.send({
                status : 1,
                info : obj
            })
        })
    })
})

//删除数据模块
router.post('/del', function(req, res, next){
    var id = req.body.id;
    var type = req.body.type;
    if(!type || !id){
        return res.send({
            status : 0,
            info : '获取信息不全'
        })
    }

    fs.readFile(PATH + type + '.json', function(err, data){
        if(err){
            return res.send({
                status : 0,
                info : '读取数据失败'
            })
        }
        var arr = JSON.parse(data.toString()),
            len = arr.length;
        var newArr = arr.filter(function(item){
            return !(item.id == id)
        })
        var newData = JSON.stringify(newArr);
        fs.writeFile(PATH + type + '.json', newData, function(err, data){
            if(err){
                return res.send({
                    status : 0,
                    info : '写入数据失败'
                })
            }
            return res.send({
                status : 1,
                info : "删除成功"
            })
        })
    })
})
//阅读写入模块接口
router.post('/write_config', function(req, res, next){
    if(!req.session.user){
        return res.send({
            status : 0,
            info : "未鉴权认证"
        })
    }
    //TIDI : 后期进行提交数据的验证
    //防xss攻击， xss
    //npm install xss
    //require('xss')
    //var str = xss(name);
    var data = req.body.data;
    //TODO: try catch
    var obj;
    try{
        obj = JSON.parse(data);
    }catch(e){
        obj = [];
    }
    var newData = JSON.stringify(obj);
    //写入
    fs.writeFile(PATH + 'config.json', newData, function(err, data){
        if(err){
            return res.send({
                status : 0,
                info : '写入数据失败'
            })
        }

        return　res.send({
            status : 1,
            info : obj
        })
    })
})

//登录接口
router.post('/login', function(req, res, next){
  //用户名、密码、验证码
  var username = req.body.username;
  var password = req.body.password;

  //TODO ：对用户名、密码进行校验
  //xss处理、判空

  //密码加密 md5(md5(password + '随机字符串'))
  //密码需要加密－> 可以写入JSON文件
  if(username === 'admin' && password === '123456'){
    if(req.session.user){
        req.session.user = req.session.user
    }
    req.session.user = {
      username: username
    };
    return res.send({
      status: 1
    });
  }

  return res.send({
    status: 0,
    info: "登录失败"
  });
});

//随机产生一个ID
function guidGenerate(){
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c){
        var r = Math.random() * 16 | 0,
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    }).toUpperCase();
}

module.exports = router;
