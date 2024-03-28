后端部署说明
web端
application.properties文件需要修改的几个地方
1、配置 mysql连接  这里填写你自己mysql的账号和密码
spring.datasource.username=root
spring.datasource.password=root

2、配置文件存放路路配置文件存放路路
project.folder=c:/easybbs/

3、设置web端管理员账号
admin.emails=test@qq.com

4、设置邮箱SpringBoot整合邮件服务（QQ邮箱）可以参考 https://blog.csdn.net/qq_51929833/article/details/128283461注意 如果配置了服务密码还是无法发送邮箱验证码，请跟换网络，使用手机热点给电脑提供网络再试试
admin端
application.properties文件需要修改的几个地方
1、配置 mysql连接  这里填写你自己mysql的账号和密码
spring.datasource.username=root
spring.datasource.password=root

2、配置文件存放路路配置文件存放路路 (注意，这个路径不要设置到桌面，不要包含中文，就按照下面的设置，是反斜杠，反斜杠，反斜杠，直接用下面的也行，不用改了)
project.folder=c:/easybbs/

3、配置管理端登录账号管理端没有做账号体系，就是一个固定的账号登录，这个固定的账号就是配置的，不是在数据库中
admin.account=admin
admin.password=admin123



配置图片资源
最后将这个地址:https://wwur.lanzout.com/b0287caej  密码:2023
中下载的资源中的file 目录拷贝到 project.folder=c:/easybbs/ 对应的目录中

前端
node版本
node -v  

  显示 v16.20.0 或者  v16.20.2 都可以，如果跟这个版本区别很大，重新安装
node 下载 https://nodejs.org/download/release/v16.20.2/node-v16.20.2-x86.msi

镜像配置

cmd 命令下执行以下命令
npm config set registry https://registry.npmmirror.com/


注意
管理登录地址：http://127.0.0.1:3005/   默认账号密码  admin   admin123
访客端登录地址：http://localhost:3004/  
初始化的两个账号  test@qq.com   test02@qq.com  密码都是 test123456  
