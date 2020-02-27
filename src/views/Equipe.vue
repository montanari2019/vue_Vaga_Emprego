<template>
  <div>

    <cabecario></cabecario>
    <main class="main">
      <div class="container">
        <h6 class="display-4 text-center">Equipes</h6>
        <section class="card">
            <div class="card-body">

                <label class="label--main" for="coordenador">Nome:</label>
                <div>
                    <input class="form-control" v-model="nome" type="text" name="nome" placeholder="Nome da equipe" >
                </div>

                <label class="label--main" for="coordenador">Coordenador:</label>
                <div>
                    <input class="form-control" v-model="coordenador" type="text" name="coordenador" placeholder="Coordenador da equipe" >
                </div>
                
                <label class="label--main" for="Dev 1">Dev 1:</label>
                <div>
                    <input class="form-control" v-model="dev1" type="text" name="dev1" placeholder="1º dev da equipe" >
                </div>
                
                <label class="label--main" for="Dev 2">Dev 2:</label>

                <div>
                    <input class="form-control" v-model="dev2" type="text" name="dev2" placeholder="2º dev da equipe" >
                </div>

                <label class="label--main" for="Dev 3">Dev 3:</label>
                <div>
                    <input class="form-control" v-model="dev3" v-on:keyup.enter="addEquipe(equipe)" type="text" name="dev3" placeholder="3º dev da equipe" >
                </div>

                <button class="btn btn-info pl-4 pr-4 mt-4" v-on:click="addEquipe(equipe)" >Inseir</button>
                
            </div>
                
            
        </section>

        <section class="mt-4"> 
            <div class="card mt-4">
                <div class="card-body">
                    <h6 class="text-capitalize font-weight-bold">coordenador</h6>
                    <h6 class="text-capitalize font-weight-light">dev 1</h6>
                    <h6 class="text-capitalize font-weight-light">dev 2</h6>
                    <h6 class="text-capitalize font-weight-light">dev 3</h6>
                </div>
            </div>

              <div class="card mt-4">
                <div class="card-body">
                    <h6 class="text-capitalize font-weight-bold">coordenador</h6>
                    <h6 class="text-capitalize font-weight-light">dev 1</h6>
                    <h6 class="text-capitalize font-weight-light">dev 2</h6>
                    <h6 class="text-capitalize font-weight-light">dev 3</h6>
                </div>
            </div>
              
           
        </section>
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
  name: 'equipes',
  data () {
     return{
            nome: '',
            coordenador: '',
            dev1: '',
            dev2: '',
            dev3: '',

            equipes: []
     } 
  },
  components: {
      cabecario,
      rodaPe
  },
  methods:{
      addEquipe(){
          let equipe = {
              'nome': this.nome,
              'coordenador': this.coordenador,
              'dev1': this.dev1,
              'dev2': this.dev2,
              'dev3': this.dev3
          }
          
          this.equipes.push(equipe)
          this.limparFormulario()

      },

      limparFormulario(){
          this.nome = '',
          this.coordenador = '',
          this.dev1 = '',
          this.dev2 = '',
          this.dev3 = ''        

      }
  }
}
</script>
  
<style scoped>

.label--main{
    display: block;
    font-family: 'Roboto', 'sans-serif';
    font-size: 12px;
    padding-top: 6px;
    margin-top: 5px;
    color: #6C757D;

}
.main{
  margin: 10px;
  padding: 20px;
  padding-bottom: 30px;
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
