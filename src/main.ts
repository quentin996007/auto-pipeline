import { createApp } from 'vue'

import App from './App.vue'
import naive from 'naive-ui'
import './index.css'
import { createPinia } from 'pinia'
import Codemirror from "codemirror-editor-vue3";

// 通用字体
// import 'vfonts/Lato.css'
// 等宽字体
// import 'vfonts/FiraCode.css'



const app = createApp(App)

app.use(naive)
app.use(Codemirror)
app.use(createPinia())


app.mount('#app')
