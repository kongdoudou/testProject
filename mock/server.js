// 所有的home请求都存放在这里
let Koa = require("koa");
let Router = require("koa-router");

let app = new Koa();
let router = new Router();

//用来解决跨域问题
let cors = require("koa-cors");

app.use(cors())
    .use(router.routes())
    .use(router.allowedMethods());

//模拟轮播图接口
let sliders = require("./sliders");

//获取轮播图的数据
router.get("/api/getSliders",(ctx,next)=>{
    // ctx.body的值是什么，那么返回的数据就是什么,默认是undefined
    ctx.body = sliders;
});

//模拟下拉刷新接口
let lessons = require("./lessons");
router.get("/api/getLessons/:type/:limit/:offset",(ctx,next)=>{
    let {type,limit,offset} = ctx.params;
    console.log(type,limit,offset,parseInt(offset)+parseInt(limit));
    ctx.body = {
        ...lessons,
        list:lessons.list.slice(offset,parseInt(offset)+parseInt(limit))
    };
});

app.listen(3002);