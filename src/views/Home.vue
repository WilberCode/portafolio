<template> 
  <div> 
    <svg class="morphsvg" id="morphsvg" width="100%" height="100%" viewBox="0 0 1366 650" preserveAspectRatio="none">
      <path class="morph" d="M1365 -1H-1V49.9576C355 65.7911 512.158 43.0561 715 59.8432C1025 85.4985 1365 65.7274 1365 65.7274V-1Z" fill="#202aab"></path>
    </svg> 
    <Header/> 
    <Banner/> 
    <main class="main">
      <v-container >
         <v-layout row wrap>
           <v-flex xs12>  
            <v-layout row wrap>
                <v-flex xs12>  
                 <div class="recursos">

                  <h2>  Capacidades Técnicas y Disponibilidad </h2> <br>
                  <h3>  Recursos Técnicos: </h3>
                  <p>Cuento con un equipo de cómputo robusto y una conexión a internet estable,<br class="hidden-sm-and-down">
                    asegurando así un trabajo eficiente y una comunicación fluida en todo momento.</p>
                  <h3>  Disponibilidad: </h3> 
                  <p>Estoy siempre disponible para ofrecer soluciones rápidas cuando surjan problemas,<br class="hidden-sm-and-down">
                    garantizando la continuidad y eficiencia de los proyectos.</p>
                 </div>
                </v-flex>
            </v-layout>
            <h2 id="experencia" class="text-xs-center mt-5 mb-4" >Experencias</h2>
            <Experencies/>
             <h2 id="proyectos" class="text-xs-center mt-5 mb-4">Páginas desarrolladas</h2>
             <Success/>
             <h2 id="conocimientos" class="text-xs-center mt-5 mb-4" >Conocimientos</h2>
            <Knowledge/>
             <h2 id="conocimientos" class="text-xs-center mt-5 mb-4" >Conocimientos Adicionales</h2>
            <knowledge-secondary/>
            </v-flex>
         </v-layout>
      </v-container>
    </main>
    <Footer/> 
</div>
</template>

 
<script>

 import Header from '../components/Header'
 import Banner from '../components/Banner'
 import Knowledge from '../components/Knowledge'
 import Experencies from '../components/Experencies'
 import Success from '../components/Success'
 import Footer from '../components/Footer' 
import KnowledgeSecondary from '../components/KnowledgeSecondary.vue'
 export default {
  components:{
      Knowledge,
      Header,
      Banner,
      Experencies,
      Success,
      Footer,
      KnowledgeSecondary  
  },
  data() { 
    return {   
    }
  }
}
 
</script> 
<style lang="scss">  
.recursos{
  margin-top:-70px;
}
// Breakpoints  
:root{ 
--xl: 1904px;
--lg: 1264px;
--md: 959px;
--sm: 960px;
--xs: 600px;  
}
$md: 959px;  
* {
  font-family: 'Roboto', sans-serif !important;
}
h1,h2,h3,h4,h5 { 
  font-family: 'Roboto Slab', serif  !important;

}

* i{ font-family: 'Material Icons' !important; }
.morphsvg{ 
    width:100%;
    height:750px;
    position:absolute;  
    top:0;
    left:0;
    right:0;
    pointer-events:none; 
    z-index: 1;
    // @media (max-width:$md){
    //   height:26%; 
    // }
    // @media (max-width:960px){
    //   height:26%; 
    // }
    // @media (max-width:650px){
    //   height:735px; 
    //   path.morph{
    //    d: path("M0 0H1366V557.448C1150 569 1092.91 607.458 838.535 648.223C322 731 0 668.512 0 668.512V0Z"); 
    //   }
    // }  
    @media (max-width:1000px){
      height:780px; 
      path.morph{
       d: path("M0 0H1366V492.82C1150 503.034 1092.91 537.033 838.535 573.072C322 646.252 0 573.072 0 573.072V0Z"); 
      } 
    }   
    @media (max-width:400px){
      height:980px; 
    }   
    
  
}  
.main{
  margin-top:1em;  
  @media (max-width: 650px) {
  margin-top:4em;  

  }
  @media (max-width: 325px) {
    margin-top:2.5em;  

  }
} 

</style>