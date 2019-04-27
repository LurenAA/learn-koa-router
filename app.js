const Koa = require('koa')
const Router = require('./modules/router')

let router = Router()

router.get('/user', function (ctx, next){
  console.log("user1")
  next().then(res => {
    console.log(res)
  })
  return "user1 return "
}, function (ctx, next){
  console.log("user2")
  next().then(res => {
    console.log(res)
  })
  return "user2 return "
})


router.get('/', function (ctx, next){
  console.log('/')
  next()
})

const app = new Koa()

app.use(router.route())

app.listen(4000)