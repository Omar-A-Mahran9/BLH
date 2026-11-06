import { createApp } from 'vue'
import App from './App.vue'
import reveal from './motion/reveal'
import './styles/main.css'
import './styles/motion.css'

createApp(App).directive('reveal', reveal).mount('#app')
