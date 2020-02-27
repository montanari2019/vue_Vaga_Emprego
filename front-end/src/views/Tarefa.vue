<template>
  <div>
    <cabecario></cabecario>

    <main class="main ">
      <div class="container">
        <h6 class="display-4 text-center">Tarefas</h6>
        
        <main class="container">
          <form class="card">
            <div class="card-body">
              <label class="label--main" for="titulo">Título:</label>
              <input class="form-control" v-model="titulo" type="text" placeholder="Digite o titulo da tarefa">

              <label class="label--main" for="descricao">Descrição:</label>
              <textarea class="form-control" v-model="descricao" id="exampleFormControlTextarea1" placeholder="Digite a descrição da tarefa" rows="6"></textarea>

             
                  <label class="label--main" for="selectEquipe">Selecione a Equipe:</label>
                   <select class="form-control" v-model="equipe_responsavel" v-on:change="carregarMembro()">
                    <option v-for="(equipe, id) in equipes" v-bind:key="id">{{ equipe.nome }}</option>
                  </select>

                  <label class="label--main" for="selectMembro">Selecione o Membro:</label>
                  <select class="form-control">
                    <option>ikaro</option>
                  </select>

                  <div class="d-flex justify-content-between">
                    <button class="btn btn-success mt-4" v-on:click="getTarefa()">Sincronizar</button>
                    <button class="btn btn-info pl-4 pr-4 mt-4">Inserir</button>
                  </div>
              </div>
           
          </form>

          <section class="conteiner_main-tarefa" v-for="(tarefa, id) in tarefas" v-bind:key="id">
            <div class="col-sm-12">
              <div class="card mt-4">
                <div class="card-body">
                  <h4 class="card-title">{{tarefa.titulo}} <span class="badge badge-info span-badge">{{tarefa.id}}</span></h4>
                  <p class="card-text">{{tarefa.descricao}}</p>
                  <h6 class="font-weight-bold">{{tarefa.responsavel}}</h6>
                  <h6 class="font-weight-">{{tarefa.equipe_responsavel}}</h6>
                  <br>
                  <button class="btn btn-danger p-2 pr-4 pl-4 fa fa-trash" ></button>
                </div>
              </div>
            </div>
          </section>

        </main>
      </div>
    </main>

    <rodaPe></rodaPe>

  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import cabecario from '../components/Header'
import rodaPe from '../components/Footer'
export default {
  name: 'tarefas',
  components:{
    cabecario,
    rodaPe
  },
  data(){
    return{
      titulo: '',
      descricao: '',
      responsavel: '',
      equipe_responsavel: '',

      tarefas: [],
      equipes: [],
    }
  },
  methods: {
    addTarefa(){

    },
    
    // Buscando equipes para popular o select
   getEquipe(){
         return fetch('http://localhost:3010/api/v1/equipes')
        .then(res => res.json())
        .then((res) =>{
        this.equipes = res
      })
        .catch(erro => console.log(erro))
    },

    // Carregando membros
    carregarMembro(nome){
      let equipeList = this.equipes

      let equipeSelect = equipeList.filter((equipe) => {
          return equipe.nome == nome
      })

      return equipeSelect

    },

    getTarefa(){
      return fetch('http://localhost:3010/api/v1/tarefas')
      .then(res => res.json())
      .then((res) =>{
        this.tarefas = res
      })
      .catch(erro => console.log(erro))
    }
  },

  created (){
     this.getEquipe()
     this.getTarefa()
  }

  
}
</script>

<style scoped>

.span-badge{
  font-size: 12px;
}

.conteiner_main-tarefa{
    display: flex;
    flex-direction: column;
}  
@media(min-width: 650px){
  
    .conteiner_main-tarefa{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }

}
.label--main {
  display: block;
  font-family: "Roboto", "sans-serif";
  font-size: 12px;
  padding-top: 6px;
  margin-top: 5px;
  color: #6c757d;
}
.main{
  margin: 10px;
  padding: 20px;
}
.conteiner_ajuste{
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.header{
    
    background: #00428F;
    margin: -8px;
    margin-top: -16px

}
.header-titulo{
    font-family: 'Montserrat', sans-serif;
    font-size: 15px;
    font-variant: small-caps;
    color: #f2f2f2;
    padding: 20px;
    padding-bottom: 5px;
    padding-right: 0%;
    background: #00428F;
    
}
@media(min-width: 650px){
    .header-titulo{
        font-size: 24px;
        padding-left: 50px;
        padding-bottom: 0;
    }
    .flexbox{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
   
}
.header-subtitulo{
    font-family: 'Montserrat', sans-serif;
    font-size: 24px;
    font-weight: bold;
    color: #f2f2f2; 
    padding: 20px;
    padding-right: 0%;
    padding-top: 0%;
    padding-bottom: 10%;
   
}
@media(min-width: 650px){
    .header-subtitulo{
        font-size: 36px;
        padding-left: 50px;
        padding-top: 0;
    }
   
}
.link-tarefa{
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    font-weight: bold;
    color: #ffffff;
    padding: 10px 20px;
    margin-right: 15px;
    border: solid 1px rgb(255, 255, 255);
    border-radius: 5px;
    background-color: #00428F;
}
@media(min-width: 650px){
   .link-tarefa{
       margin-right: 30px;
   }
   
}
.link-tarefa:hover{
    background-color: #ffffff;
    color: #00428F;
    border: solid 1px #00428F;
}
</style>