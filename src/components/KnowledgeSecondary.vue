<template>  
<div data-aos="fade-up"  data-aos-offset="200"  data-aos-once="true" data-aos-id="knoledgeaos" data-aos-delay="100" > 
        <div class="text-xs-center">
          <v-container grid-list-sm>
            <v-layout row wrap>
           
              
               <v-flex xs12 sm6 md4 lg3 xl3>  
                <v-progress-circular
                :rotate="180"
                :size="100"
                :width="15"
                :value="valueProgress"
                color="pink"
                >
                {{ valueProgress }}%
                </v-progress-circular>  
                <p>Wordpress, CPT, ACF, Api Rest, Elementor, Themes, Plugins, WooCommerce & SEO</p>
              </v-flex>   
              
              <v-flex xs12 sm6 md4 lg3 xl3>  
                <v-progress-circular
                :rotate="180"
                :size="100"
                :width="15"
                :value="valueProgress-5"
                color="blue lighten-1"
                >
                {{ valueProgress-5 }}%
                </v-progress-circular>  
                <p>PHP, Laravel, Livewire, Alpine & Filament </p>
              </v-flex> 
              <v-flex xs12 sm6 md4 lg3 xl3>  
                <v-progress-circular
                :rotate="180"
                :size="100"
                :width="15"
                :value="valueProgress-10"
                color="green "
                >
                {{ valueProgress-10 }}%
                </v-progress-circular>  
                <p>Shopify & PrestaShop</p>
              </v-flex>
              <v-flex xs12 sm6 md4 lg3 xl3>  
                <v-progress-circular
                :rotate="180"
                :size="100"
                :width="15"
                :value="valueProgress-40"
                color="orange "
                >
                {{ valueProgress-40 }}%
                </v-progress-circular>  
                <p>VPS & Docker</p>
              </v-flex>
            </v-layout>
          </v-container>  

    </div>
    </div>
</template>
<script>  

 export default {
    data () {
      return {
        interval: {},
        valueProgress: 0,  
      }
    }, 
    mounted () { 
      this.getValue()   
      
    },
    methods:{
       getValue(){
           document.addEventListener('aos:in:knoledgeaos', () => { 
            this.valueProgress = 100
          });  
       } 
    } 
     
  }  
   
</script>
<style lang="scss">
    .v-progress-circular{ 
        margin: 1rem
    }
  .v-progress-circular__overlay{
    transition: all 1s ease-in-out;
  }

</style>