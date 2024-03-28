import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//引入cookies
import VueCookies from 'vue-cookies'
//引入element plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/assets/base.scss'
import '@/assets/icon/iconfont.css'

import Request from '@/utils/Request';
import Message from '@/utils/Message'
import Confirm from '@/utils/Confirm'
import Verify from '@/utils/Verify'
import Utils from '@/utils/Utils'
//组件
import Table from '@/components/Table.vue'
import Cover from '@/components/Cover.vue'
import Avatar from '@/components/Avatar.vue'
import Dialog from '@/components/Dialog.vue'
import CoverUpload from '@/components/CoverUpload.vue'

const app = createApp(App)
app.use(router)
app.use(ElementPlus);
//配置全局变量
app.config.globalProperties.Request = Request;
app.config.globalProperties.Message = Message;
app.config.globalProperties.Confirm = Confirm;
app.config.globalProperties.Verify = Verify;
app.config.globalProperties.Utils = Utils;

app.config.globalProperties.VueCookies = VueCookies;
app.config.globalProperties.globalInfo = {
    imageUrl: "/api/file/getImage/",
    avatarUrl: "/api/file/getAvatar/",
    webDomain: import.meta.env.VITE_WEB_DOMAIN
}
app.component("Table", Table);
app.component("Cover", Cover);
app.component("Avatar", Avatar);
app.component("Dialog", Dialog);
app.component("CoverUpload", CoverUpload);
app.mount('#app')
