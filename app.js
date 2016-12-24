/**
 * Created by Administrator on 2016/12/24.
 */
var express=require('express');
var path=require('path');
var app=express();
var bodyParser=require('body-parser');
app.set('view engine','ejs');
app.set('views',path.resolve('views'));//第一个views是固定写法
var users = [];
app.use(bodyParser.urlencoded({extend:true}));
//注册
app.get('/signup',function(req,res){
    res.render('signup',{title:'注册'});
});
app.post('/add',function(req,res){
    console.log(req.body);//表单提交的数据是对象格式的
    users.push(req.body);
    res.redirect('/signin')//重定向

});
app.get('/signin',function(req,res){
    res.render('signin',{title:'登录'});
});
app.post('/ass',function(req,res){
    console.log(req.body);
    var flag=users.find(function(item){
        return item.name==req.body.name&&item.password==req.body.password
    });
    if(flag){
        res.render('welcome',{title:'欢迎'});
        //res.redirect('/welcome')
    }else{
        //res.redirect('/signin')
        res.render('signin',{title:'登录'});
    }
});
app.listen(8085,function(){
    console.log('8080 port')
});