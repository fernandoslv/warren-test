<template>
    <form>
        <div class="filtros">        
            <div class="filtros__section">
                <input class="inputsearch" placeholder="Filtrar pelo título" type="text"/>        
            </div>
            <div class="filtros__section">
                <select @change="filtrarPorStatus" v-model="statusValue">
                    <option v-for="(status, index) in statusOptions" :key="index" :value="status.cod">{{status.desc}}</option>
                </select>
            </div>
        </div>
    </form>
</template>

<script>
export default{
    name:'TransacaoFiltros',
    emits:['filtarPorSolicitada', 'filtrarPorProcessadas', 'filtrarPorConcluidas', 'filtrarPorTodas'],
    data(){
        return{
            statusValue:0,
            statusOptions:[
                {
                    cod: '0',
                    desc:'Todos status'
                },
                {
                    cod:'created',
                    desc:'Solicitado'
                },
                {
                    cod:'processing',
                    desc:'Processado'                    
                },
                {
                    cod:'processed',
                    desc:'Concluído'                    
                }
            ]
        }
    },
    methods:{
        filtrarPorStatus(e){
            let statusSelecionado = e.target.value;

            console.log(statusSelecionado);

            switch(statusSelecionado){
                case 'created':                   
                    this.$emit('filtarPorSolicitada');
                    break;                
                case 'processing':
                    this.$emit('filtrarPorProcessadas');
                    break;                
                case 'processed':
                    this.$emit('filtrarPorConcluidas');
                    break;                
                default:
                    this.$emit('filtrarPorTodas');
                    break;                
            }            
        }
    }    
}
</script>

<style lang="scss" scoped>
@import "@/assets/base.scss";

.inputsearch{
    padding: 5px 10px;
    height: 35px;
    width: 100%;
    border: 1px solid $silver;
    border-radius: 4px;
}
 select{
    padding: 5px 10px;    
    height: 35px;
    width: 100%;
    border: 1px solid $silver;
    border-radius: 4px;
 }

 .filtros{
     display: flex;
     justify-content: start;
     margin: 20px 0px;
     .filtros__section{         
         margin: 10px;
     }
 }
</style>