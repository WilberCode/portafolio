<template>
<v-container class="banner banner-content"  id="Acercademi"> 

  <v-layout row wrap>  
    <v-flex xs12 sm12 md4 lg5 xl4 >  
      <div class="banner-bio">
        <h2>¡Hola! Soy Wilber.</h2>
        <p>
          Un desarrollador web con más de 4 años de experiencia, durante los cuales he trabajado en diversos proyectos que me han permitido adquirir habilidades sólidas en el desarrollo web.


          <br> <br>
          Me apasiona aprender nuevas tecnologías y adaptarme a las necesidades de cada proyecto. Durante los últimos 2 años, he estado mejorando mis habilidades en React y Next.js, y estoy emocionado por la oportunidad de unirme a un equipo donde pueda crecer y contribuir con mi entusiasmo por el desarrollo web. ¡Estoy listo para esta nueva aventura!
        </p>
       </div>
       
      <v-btn class="banner-btn large fill-bg  "  round color="secondary"   data-aos="fade-up" outline  data-aos-offset="200" data-aos-delay="800"  data-aos-once="true" href="https://drive.google.com/file/d/1EnkFI5bNy3xDuc7X0HfM6_TZVtOiFjMd/view" target="_blank"   >Descargar CV </v-btn>
      <v-btn class="banner-btn  large banner-btn--whatsapp"   round  color="secondary"    outline data-aos="fade-up"  data-aos-offset="200" data-aos-delay="1200" data-aos-once="true" href="https://api.whatsapp.com/send?phone=51938343796&text=Hola" target="_blank" > WhatsApp </v-btn>
      <div class="banner-avatar d-inline-flex py-3 px-4" outline data-aos="fade-up"  data-aos-offset="200" data-aos-delay="1500"  >
        <div  class="banner-avatar-image" >
          <img  class=" " src="../assets/wilberpariona.jpg" alt="Github"> 
              <v-btn class="mx-2 social-icon  " href="https://github.com/WilberCode" target="_blank" >
                <v-icon size="18px"> {{'fab fa-github'}} </v-icon>
             </v-btn> 
        </div>
        <div class="d-flex  align-center">
           <div class="ml-4">
             <p class="mb-2 font-weight-bold banner-avatar-number	">Teléfono: <a href="tel:+51926776516">926776516</a></p>  
             <p  class="mb-0 " >Lima - Perú</p> 
           </div>
        </div>
      </div>
    </v-flex>
    <v-flex xs12 sm12 md8 lg7 xl8>  
      <div class=" banner-image text-sx-center relative text-sm-center text-md-center text-lg-right" >
        <img :src="require('../assets/me2.svg')" data-aos="fade-up"  data-aos-offset="200"  data-aos-once="true" data-aos-delay="1800" >
      </div>
      </v-flex>
  </v-layout> 
</v-container>
</template>
<script>

export default {
    data(){
      return{
     
      }
  
    } 
}
</script>
<style lang="scss">
 
$md: 959px; 
.banner{
  &-content{
    position:relative;
    z-index: 5;
  }
  &-bio{
    h2{
      margin-top:1em;
      margin-bottom:.8em;
    }
    color:#fff;
  }
  
  &-btn{
    font-size:14px;
    color:#000000;
    text-transform:none;
    padding:1.8rem 2em;
    margin-left:0;  
    border-radius: 14px;
    font-size: 18px;    
    &--whatsapp{
      border-width: 2px !important; 
    }
    @media (max-width:600px) {
      padding:1.8rem 1.5em; 
      
    }
  }
  & .fill-bg.v-btn.v-btn--outline{
    background: var(--v-secondary-base) !important;
    color:#202aab!important;
     border-width: 2px !important;
     border-color: var(--v-secondary-base) ;
  }
  &-avatar{

    box-shadow: var(--shadow-lg);
    border-radius: 14px;
    overflow: hidden;
    background: #fff; 
    width: 100%;
    max-width: 350px;
    margin-top: 2em;
    &-image{
      flex: initial !important; 
      position: relative;
      .social-icon {
          width: 38px !important;
          height: 38px !important;
          position: absolute;
          bottom: -15px;
          left: -8px;
          background: #000;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          border-radius: 100%;
          min-width: auto;
          border:2px solid #000; 
           box-shadow: none !important; 
           background-color: #fff !important;
      }
    }
    &-number{
      font-size: 15px;
    }
    img{
      width: 80px; 
      display: block;
      border-radius: 50%;
      background:var(--v-primary-lighten5);
    }
  }
  &-image{
    margin-top:2em ; 
    img{
      @media (max-width:$md){
        width:70%; 
        margin-top:-15px;
      }
    //  @media (max-width:var(--sm)){
    //     width:20%; 
    //   }
    }
   @media (min-width:360px) and  (max-width:645px) {
      margin-top:7em;
   }
  }
}
</style>
