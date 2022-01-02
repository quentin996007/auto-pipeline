import { createApp } from 'vue'

// import 完要在naive-ui前的样式后, 手动挂个meta标签, 
document.head.insertAdjacentHTML('beforeend', '<meta name="naive-ui-style" />');

import App from './App.vue'
import naive from 'naive-ui'
import './index.css'
import { createPinia } from 'pinia'
// @ts-ignore
import Codemirror from "codemirror-editor-vue3";



// 通用字体
// import 'vfonts/Lato.css'
// 等宽字体
// import 'vfonts/FiraCode.css'

// import { useMutationObserver } from '@vueuse/core';

// // 修复 Naive UI 和 Tailwind 样式优先级引起的样式错误问题
// useMutationObserver(document.head, () => {
//   const naiveStyles = Array.from(document.head.querySelectorAll('style[cssr-id]'));

//   if (naiveStyles.find((style) => (style.nextElementSibling ? !style.nextElementSibling.hasAttribute('cssr-id') : false))) {
//     naiveStyles.forEach((style) => {
//       document.head.appendChild(style);
//     });
//   }
// }, {
//   childList: true
// });




const app = createApp(App)

app.use(naive)
app.use(Codemirror)
app.use(createPinia())

app.mount('#app')
