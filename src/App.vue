<template>
  <v-app> 
    <v-content>
      <router-view/> 
       <a class="go-up" href="#" >  <img :src="require('./assets/up.svg')"> </a> 
    </v-content>
  </v-app>
</template> 
<script> 
export default {
  name: 'App',
  data () {
    return {
      //
    }
  }
}
</script> 

<style lang="scss">
  $primary:#183661;
    .go-up{
      position: absolute;
      right: 20px;
      bottom: 11px;
      width: 45px;
      height: 45px;
      background: darken($color: #202aab, $amount: 9);
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      img{
        width: 20px;
      }
      &:hover{
          background: darken($color: #202aab, $amount: 15);
      }
    }
    ::selection{
      background:  var(--v-secondary-base) ;
      color: white;
    }
  @media only screen and (min-width: 1904px) {
    .container {
      max-width: 1360px !important;
    }
  }
</style>
