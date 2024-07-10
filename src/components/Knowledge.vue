<template>  
<div data-aos="fade-up"  data-aos-offset="200"  data-aos-once="true" data-aos-id="knoledgeaos" data-aos-delay="100" > 
        <div class="text-xs-center">
          <v-container grid-list-sm>
            <v-layout row wrap>
              <v-flex xs12 sm6 md4 lg3 xl3> 
                <v-progress-circular
                :rotate="90"
                :size="100"
                :width="15"
                :value="valueProgress-5"
                color="red"
                >
                {{ valueProgress-5 }}%
                </v-progress-circular>
                <p>React.js, Next.js & TypeScript</p>
              </v-flex>  
              <v-flex xs12 sm6 md4 lg3 xl3>
                 <v-progress-circular
                :rotate="360"
                :size="100"
                :width="15"
                :value="valueProgress"
                color="teal"
                >
                {{ valueProgress }}%
                </v-progress-circular>
                <p>Html5, Css3 & Sass</p>
              </v-flex>
              <v-flex xs12 sm6 md4 lg3 xl3>  
                <v-progress-circular
                :rotate="180"
                :size="100"
                :width="15"
                :value="valueProgress"
                color="orange"
                >
                {{ valueProgress }}%
                </v-progress-circular>  
                <p>Tailwindcss, Bootstrap, Materializecss & Foundation</p>
              </v-flex>
             
              <v-flex xs12 sm6 md4 lg3 xl3>
                 <v-progress-circular
                :rotate="-90"
                :size="100"
                :width="15"
                :value="valueProgress-5"
                color="primary"
                >
                {{ valueProgress-5 }}%
                </v-progress-circular>
                <p>JavaScript, JQuery & Redux</p> 
              </v-flex> 
         
              <v-flex xs12 sm6 md4 lg3 xl3>  
                <v-progress-circular
                :rotate="180"
                :size="100"
                :width="15"
                :value="valueProgress-10"
                color="teal darken-1"
                >
                {{ valueProgress-10 }}%
                </v-progress-circular>  
                <p>SQL, NoSQL, MySQL, MongoDB & Firebase</p>
              </v-flex> 
              <v-flex xs12 sm6 md4 lg3 xl3>  
                <v-progress-circular
                :rotate="180"
                :size="100"
                :width="15"
                :value="valueProgress-10"
                color="light-blue darken-2"
                >
                {{ valueProgress-10 }}%
                </v-progress-circular>  
                <p>Figma, Adove XD, Photoshop & Illustrator</p>
              </v-flex>  
              <v-flex xs12 sm6 md4 lg3 xl3>  
                <v-progress-circular
                :rotate="180"
                :size="100"
                :width="15"
                :value="valueProgress-10"
                color="lime darken-1"
                >
                {{ valueProgress-10 }}%
                </v-progress-circular>  
                <p>React + Inertia + Laravel + Api & Vue</p>
              </v-flex> 
               <v-flex xs12 sm6 md4 lg3 xl3>  
                <v-progress-circular
                :rotate="180"
                :size="100"
                :width="15"
                :value="valueProgress-10"
                color="green"
                >
                {{ valueProgress-10 }}%
                </v-progress-circular>  
                <p>Git, GitHub, GitLab, Markdown & Vercel</p>
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