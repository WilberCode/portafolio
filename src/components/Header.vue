<template>
<header  class="header" v-sticky>  
  <v-container > 
    <v-layout row wrap>
      <v-flex xs4 md2> 
          <a  href="https://wilbercode.github.io/porfolio/"> 
            <div class="header-logo">
              <img :src="require(`../assets/wph-logo.svg`)" alt="Wilber Pariona" data-aos="fade-left"  data-aos-offset="200" data-aos-rota  data-aos-once="true" data-aos-delay="1000" data-aos-easing="ease-in-sine"  class="wph-logo">
            </div>
          </a> 
      </v-flex>
      <v-flex xs8 md10  class="header-nav"> 
        <div id="toggle" class=" hidden-md-and-up  hidden-xl-and-up" @click="openMenu">
          <span v-for="spanCounter in  6" :key="spanCounter" ></span> 
        </div>
        <div class="menu-wrap hidden-sm-and-down" id="menu-wrap"> 
            <transition   name="custom-classes-transition"
              enter-active-class="animated tada"
              leave-active-class="animated bounceOutRight"> 
              <ul class="menu " id="menu" @click="openMenu">
                <li class="menu-item" v-for="link in links "  :key="link.title"><a color="white"  @click.prevent="scrollToSection(`#${link.hash}`)">{{ link.title }}</a></li>
              </ul> 
          </transition>
        </div>
      </v-flex>
    </v-layout>
  </v-container> 
</header>  
</template>
<script>
//  import * as easings from 'vuetify/es5/components/Vuetify/goTo/easing-patterns' ; 
export default {
 /*  @click="$vuetify.goTo(`#${link.hash}`, options)" */
    data(){
   

        return{
            links: [
                {title:'Acerca de mi', hash:'Acercademi'},
                {title:'Experencia', hash:'experencia'},
                {title:'Proyectos', hash:'proyectos'},
                {title:'Conocimientos', hash:'conocimientos'},
                {title:'Contactos', hash:'Contactos'}
            ] 
        }
    },
    methods: { 
        openMenu(){
          document.getElementById('menu-wrap').classList.toggle('hidden-sm-and-down')  
          document.getElementById('toggle').classList.toggle('open')   
        },
        scrollToSection(hash) {
          let target = document.querySelector(hash);
          if (target) {
            let scrollTop = (target.offsetTop) - 160;
            if (document.body.classList.contains('home')) {
              scrollTop = scrollTop > 0 ? scrollTop : 0;
            }
            window.scrollTo({
              top: scrollTop,
              behavior: 'smooth'
            });
            }
        }

    },
    computed: { 
        options () {
          return {
            duration: 1000,
            offset: 55,
            easing: 'easeInQuart'
          }
      } 
    },
     directives:{
        sticky:{
        bind: function (el) { 
            window.onscroll = ()=>{
            if(window.pageYOffset>el.offsetTop){
                el.classList.add('sticky-active')
            }  
            }  
        }
        }
    }
}

</script>
<style  lang="scss"  > 


:target{
  transform: translateY(200px);
}
$md: 959px;  
.sticky-active{
    position: fixed ;
    top: 0;
    left: 0;
    width: 100%; 
    z-index: 8; 
}
.header{ 
  position: sticky;
  z-index: 8;
  width: 100%;   
  background: var(--v-primary-base); 
  margin-top: 1.5em;
  .container{
    padding-top: 0;
    padding-bottom: 0;
  }
  &-nav{
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  &-logo{ 
    padding-top:.5em;
    padding-bottom:.5em;
    img{ 
     transform: rotate(-90deg);  
      width:60px;
      vertical-align:middle;
       /*   animation-delay: .2s; */
      animation-duration:3s;  
      //animation-iteration-count: infinite;
      animation-name: logoAnimation; 
    /*   transition: all ease-in-out; */
      
    }
    @keyframes logoAnimation {
      0%{
        transform: rotate(-90deg);  
      }
      100%{
         transform: rotate(0deg); 
      }
    }
  } 
  .menu{
     display: flex;
     align-items: center; 
     @media (max-width:$md){  
          width: 100%;
          flex-flow:column;
          align-items:flex-end; 
          margin-top: 0em; 
      }
      
    &-wrap{
      display: flex;
      justify-content: flex-end;
      @media (max-width:$md){  
        position: absolute;
        top: -4em;
        right: 0;
        width: 400px;
        height:400px;
        border-radius: 50% 0 50% 60%;
        background: darken($color: #202aab, $amount: 6);
        justify-content: center;
        // align-items: center; 
        padding: 5.5em; 
        &::before{
          content: '';
          position: absolute;
          top: 0;
          right: -8em;
          bottom: 0;
          left: 0;
          width: 105%;
          height: 110%;
          background: darken($color: #202aab, $amount: 9);
          z-index: -5;
          border-radius: 50% 0 50% 60%;
        }
      }
    } 
    &-item{
      list-style: none;
      margin-left: 1.8em;
         @media (max-width:$md){   
           margin-left:0;  
       }
      & a{
        color: #ffffff; 
        padding: .5em 0;
        transition: transform .5s cubic-bezier(0, 0, 0.22, 0.93);
        position: relative;
        @media (max-width:$md){    
           margin-bottom: .2em;  
           display: block;
        }
        &:active{ 
          display: inline-block;
          transform: scale(1.8);
     
        }
        &::before{
          content: '';
          position: absolute;
          bottom: -4px;
          width: 100%;
          height: 3px;
          border-radius: 0 0 3px 3px;
          background: #fff;
          opacity: 0;
          transition: all .3s cubic-bezier(0, 0, 0.88, -0.43); 
          transform: translateY(5px);
        } 
         
      }
      &:hover a::before{
           opacity: 1;
           transform: translateY(0);
       }
    }
  } 
}

 
/* Icon Toogle*/

 #toggle{
  width: 40px;
  height: 26px;
  position: relative; 
  transform: rotate(0deg); 
  transition: .5s ease-in-out;
  z-index: 8;
  cursor: pointer;
  span {
    display: block;
    position: absolute;
    height: 5px;
    width: 50%;
    background: #fff;
    opacity: 1; 
    transform: rotate(0deg); 
    transition: .25s ease-in-out;
    &:nth-child(even) {
      left: 50%;
      border-radius: 0 15px 15px 0;
    }
    &:nth-child(odd) {
      left:0px;
      border-radius: 15px 0 0 15px;
    }
    &:nth-child(1), &:nth-child(2) {
      top: 0px;
    }
    &:nth-child(3), &:nth-child(4) {
      top: 10px;
    }
    &:nth-child(5), &:nth-child(6) {
      top: 20px;
    } 
  }
  &.open{
    span{
      &:nth-child(1),&:nth-child(6) { 
        transform: rotate(45deg);
      }  
      &:nth-child(2),&:nth-child(5) { 
        transform: rotate(-45deg);
      } 
      &:nth-child(1) {
        left: 5px;
        top: 7px;
      }
      &:nth-child(2) {
        left: calc(50% - 5px);
        top: 7px;
      }
      &:nth-child(3) {
        left: -50%;
        opacity: 0;
      }
      &:nth-child(4) {
        left: 100%;
        opacity: 0;
      }
      &:nth-child(5) {
        left: 5px;
        top: 16px;
      } 
      &:nth-child(6) {
        left: calc(50% - 5px);
        top: 16px;
      }
    }
  }
 }  
 
</style>