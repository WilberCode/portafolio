<template>
<v-container grid-list-md mb-4 >
  <v-layout row  wrap align-content-space-between="true" class="card-wrap" >
    <template v-for="page in pages">  
      <v-flex xs12 sm12 md6 lg6  px-3 py-3  :key="page.sertor" data-aos="fade-up"  data-aos-offset="200"  data-aos-once="true"> 
        <v-card class="card">
          <v-img
            class="white--text" 
            :src="require(`../assets/${page.imgUrl}`)" 
          >
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <!-- <span class="headline">Top 10 Australian beaches</span> -->
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>
          <div class="card-description">
              <v-card-title >
              <div>
                <span class="font-weight-bold">{{page.name}}</span> 
                <p class="grey--text">{{page.sector}}</p> 
                <a  class="list-link py-2 pr-5" :href="page.link" target="_blank" >{{page.link}}</a> 
              </div>
            </v-card-title> 
          </div>
        </v-card>
      </v-flex>
    </template>
  </v-layout>
</v-container>
  
</template>
<script>
export default {
    data(){
      return{
        pages:[
         
           {
            imgUrl:'lumiluperu.jpg',
            name:'Lumilu Perú',
            sector:'Market Shop', 
            link:'https://lumiluperu.com/'
          }, 
          {
            imgUrl:'pigeon.jpg',
            name:'Pigeon LATAM',
            sector:'Cuidado del bebé', 
            link:'https://pigeonlatam.com'
          },
           {
            imgUrl:'screenshot-igc.jpg',
            name:'IGC - Instituto de Gerencia Intercontinental',
            sector:'Centro de capacitación', 
            link:'https://igc.edu.pe'
          },
           {
            imgUrl:'screenshot-escuela.jpg',
            name:'EG - Escuela de Gerencia y Gestión',
            sector:'Centro de capacitación', 
            link:'https://escuelag.com'
          },
           {
            imgUrl:'prestigescreenshot.jpg',
            name:'Prestige Dental Care',
            sector:'Salud', 
            link:'https://prestigedentalcarefl.com/'
          },  
         
          {
            imgUrl:'call2action.jpg',
            name:'Call2action',
            sector:'Agencia de Marketing',
            link:'https://call2action.pe/'
          },
           {
            imgUrl:'lunademielscreenshot.jpg',
            name:'Portal de luna de miel',
            sector:'Guía para parejas', 
            link:'https://www.lunademiel.com.pe/'
          },
          {
            imgUrl:'tendenzescreenshot.jpg',
            name:'Tendenze Perú Comunicaciones',
            sector:'Agencia de Marketing',
            link:'https://tendenzeperu.com/'
          },
          {
            imgUrl:'cyberweektododkasa.jpg',
            name:'Cyber Week TododKasa',
            sector:'Tienda', 
            link:'https://cyberweektododkasa.feriasdigitales.pe/'
          },
         
          {
            imgUrl:'feriasdigitalesscreenshot.jpg',
            name:'Ferias Digitales',
            sector:'Agencia de Marketing', 
            link:'https://feriasdigitales.pe/'
          },
          
          {
            imgUrl:'magaescreenshot.jpg',
            name:'Il magazzino delle sorelle',
            sector:'Decoración', 
            link:'https://ilmagazzinodellesorelle.com/'
          },
           {
            imgUrl:'nmscreenshot.jpg',
            name:'Nuevo Mundo Espacios',
            sector:'Inmobiliaria',
            link:'http://www.nuevomundoespacios.com.pe/'
          },
          {
            imgUrl:'meatfestscreenshot.jpg',
            name:'Cyber Week MEAT FEST',
            sector:'Tienda de comestibles y especialidades', 
            link:'https://cyberweekmeatfest.feriasdigitales.pe/'
          }, 
          {
            imgUrl:'cyberscreenshot.jpg',
            name:'Cyber Week Bebe & Mamá',
            sector:'Tienda', 
            link:'https://cyberweekbyby.feriasdigitales.pe/'
          },
          {
            imgUrl:'solidascreenshot.jpg',
            name:'Solida Construcción',
            sector:'Constructora', 
            link:'https://www.solidaconstruccion.com/'
          },
         {
            imgUrl:'biooilscreenshot.jpg',
            name:'Bio Oil Perú',
            sector:'Cuidado de la Piel', 
            link:'https://biooilperu.pe'
          }
          ]
      }
    }
}
</script>
<style lang="scss" >
  .card{
    &-wrap{
      margin:0 -40px !important;
      @media (max-width:900px){ 
           margin:0 -34px !important;

      }
    } 
    border-radius: 10px;
    box-shadow: var(--shadow-lg);
    &-description{
      padding: 1em;
    }
  }

</style>