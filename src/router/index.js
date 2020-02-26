import  Vue from 'vue'
import Router from 'vue-router'
import equipe from '@/views/Equipe'
// import tarefa from '@/components/Tarefa'

Vue.use(Router)

const routes = [
    {
        name: 'equipes',
        path: '/equipes',
        component: equipe
    },
    // {
    //     name: 'tarefa',
    //     path: '/tarefas',
    //     component: tarefa
    // }
]

const rotas = new Router({routers: routes})

export default rotas