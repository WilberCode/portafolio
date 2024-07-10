<template> 
  <v-footer
    dark
    height="auto" id="Contactos" class="mt-5  "
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="primary pa-0 ">
        <v-container >
          <v-layout row wrap class="footer-contact white black--text "  pa-5 > 
            <v-flex xs12 sm12 md2 lg2 xl4  >
              <div>
                <h2>Contactos</h2> 
              </div> 
            </v-flex> 
            <v-flex xs12 sm12 md10 lg10 xl8 d-flex align-center="true" >
              <div  class="d-inline-flex wrap  footer-contact-info " > 
                  <h4 class="slash " >Correo: <span class="font-weight-regular">parionahuaraca@gmail.com</span></h4>
                  <h4 class="slash " >Celular: <span class="font-weight-regular">926776516</span></h4>
                  <h4 class=""   >Lugar de recidencia: <span class="font-weight-regular">Lima - Perú</span></h4> 
              </div> 
            </v-flex> 
          </v-layout>
          <v-layout row wrap justify-center="true"  > 
                <div  class="mt-4" > 
                  <v-btn
                    v-for="social in socials"
                    :key="social"
                    class="mx-2 social-icon"
                    dark
                    icon
                    :href="social.link"
                    target="_blank" 
                  >
                    <v-icon size="18px">{{ social.icon }}</v-icon>
                  </v-btn>  
                </div>
              </v-layout> 
        </v-container>
      </v-card-title>
 
      <v-card-actions class=" footer-bottom  justify-center py-4 font-weight-thin   " > 
       Copyright &copy;{{ new Date().toISOString().substr(0, 4)}} — Wilber Pariona
      </v-card-actions>
    </v-card> 
  </v-footer>  
</template> 
<script>
export default {
      data: () => ({ 
      socials: [ 
        {icon:'fab fa-github',link:'https://github.com/WilberCode/'},
        {icon:'fab fa-facebook',link:'https://www.facebook.com/wilberparionah'},
        {icon:'fab fa-twitter',link:'https://twitter.com/ParionaDeivis'},
        {icon:'fab fa-linkedin',link:'https://www.linkedin.com/in/wilber-pariona-huaraca-69971713a/'}
      ]
    })
}
</script>
<style lang="scss" >

    .footer{
      &-contact{
        box-shadow: var(--shadow-lg);
        margin-top: -6em;
        border-radius: 6px;
         @media (max-width:400px){ 
           padding: 1.4em !important ;
        }
        &-info{
           @media (max-width:900px){
             margin-top: 6px;
            display: block !important ; 
            width: 100%;
          }
        }
      }
      &-bottom{
         border-top: 1px solid rgba( 255,255,255, .08 );  
         background: var(--v-primary-base);
      }
    }
       
    .slash{
      position: relative; 
      &::after{
        content: '';
        // position: absolute;
        width: 1px;
        height: 20px;
        background: #000;
        transform: rotate(35deg);
        display: block;
        position: absolute;
        right: 35px;
        top: 2px;
        @media (max-width:900px){
          display: none; 
        }
      }
    }
    .slash, h4{
      @media (max-width:600px){
        display: block; 
        width: 100%;
      }
    }
    .social{
      &-icon{
        border: 2px solid rgba($color: #fff, $alpha: .75);
      }
    }
</style>