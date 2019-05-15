最近开始使用koa，开始看koa-router的源码，在这个仓库下一点点来实现一个小的koa-router，来检验自己读源码的效果

✔ 已实现基本路由（router.get|post|delete(path, function...)）

✔ 实现了path-to-reg，不再依赖path-to-reg模块

2019/5/15
修正了之前在route函数中，对于compose的尾调用没有用return返回的问题