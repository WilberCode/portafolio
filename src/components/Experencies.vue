<template>
    <div>  
        <v-timeline align-top  :dense="$vuetify.breakpoint.smAndDown"   >
          
            <v-timeline-item   color="primary lighten-1 experencie"  fill-dot 
                large   >
                <template v-slot:icon  color="red"  >
                    <v-avatar  >
                    <img :src="require('../assets/tendenzelogo.png')"  >
                    </v-avatar>
                </template>
                <template v-slot:opposite  align-start >
                    <span >Agosto 2019 - Hasta la actualidad 💪</span>
                </template>

                <v-card color="white lighten-1 pt-4 experencie-card "
                    dark 
                >
                    <v-card-title class="title primary px-5 py-2  experencie-title line-left  "   >Grupo Tendenze Comunicaciones</v-card-title>
                        <v-card-text class="white text--primary">
                             <h2 class="black--text subtitle-span ">Cargo: <span>Desarrollador Web - Remoto 🔴🖥️</span></h2> 
                               <!--   <h2 class="black--text mt-3 " >Funciones:</h2  >  
                            <ul class="list mt-2" >
                                <li>Desarrollar páginas Webs</li> 
                                <li>Desarrollar Tiendas Online</li> 
                                <li>Configurar SEO esencial para Webs</li> 
                                <li>Desarrollar landings</li> 
                                <li>Optimizar Webs</li>
                                <li>Maquetar Emailings personalizadas </li>
                                <li>Subir Web a producción</li>
                            </ul> -->
                            <h2  class="black--text mt-3 " >Proyectos desarrollados:</h2> 
                             <ul class="list list-success mt-2" >
                                 <h3  class="font-weight-bold roboto-condensed-bold black--text mt-3 mb-2 " >Páginas Webs</h3>
                                <li>Pigeon LATAM: <a  class="list-link" href="https://pigeonlatam.com/" target="_blank" >https://pigeonlatam.com/</a> </li>
                                <li>Luna de miel: <a  class="list-link" href="https://www.lunademiel.com.pe/" target="_blank" >https://www.lunademiel.com.pe</a> </li>
                                <li>Prestige Dental Care: <a  class="list-link" href="https://prestigedentalcarefl.com" target="_blank" >https://prestigedentalcarefl.com</a> </li>
                                <li>Grupo Tendenze Comunicaciones: <a  class="list-link" href="https://tendenzeperu.com/" target="_blank" >https://tendenzeperu.com</a> </li>
                                <li>Call2action: <a  class="list-link" href="https://call2action.pe/" target="_blank" >https://call2action.pe/</a> </li>
                                <li>Ferias Digitales: <a  class="list-link" href="https://feriasdigitales.pe/" target="_blank" >https://feriasdigitales.pe/</a> </li>
                                <li>Nuevo mundo espacios: <a  class="list-link" href="http://www.nuevomundoespacios.com.pe/" target="_blank" >http://www.nuevomundoespacios.com.pe/</a> </li>
                                <li>Bio Oil Perú: <a  class="list-link" href="https://biooilperu.pe/" target="_blank" >https://biooilperu.pe/</a> </li>
                                <h3  class="font-weight-bold roboto-condensed-bold black--text mt-3 mb-2 " >Tiendas Online</h3>
                                <li>Lumilu Perú: <a  class="list-link" href="https://lumiluperu.com/" target="_blank" >https://lumiluperu.com/</a></li>
                                <li>Ilmagazzino: <a  class="list-link" href="https://ilmagazzinodellesorelle.com/" target="_blank" >https://ilmagazzinodellesorelle.com/</a> </li>
                                <li>Cyber week TododKasa: <a  class="list-link" href="https://cyberweektododkasa.feriasdigitales.pe/" target="_blank" >https://cyberweektododkasa.feriasdigitales.pe/</a> </li>
                                <li>Cyber week Meat Fest: <a  class="list-link" href="https://cyberweekmeatfest.feriasdigitales.pe/" target="_blank" >https://cyberweekmeatfest.feriasdigitales.pe</a> </li>
                                <li>Cyber Week Baby: <a  class="list-link" href="https://cyberweekbyby.feriasdigitales.pe/" target="_blank" >https://cyberweekbyby.feriasdigitales.pe/</a> </li>
                            </ul> 
                          
                        </v-card-text>  
                    </v-card>
            </v-timeline-item>
              <v-timeline-item   color="primary lighten-1 experencie"  fill-dot 
                large   >
                <template v-slot:icon  color="red"  >
                    <v-avatar class="white" >
                    <img  style="width:80%" :src="require('../assets/divelia.svg')"  >
                    </v-avatar>
                </template>
                <template v-slot:opposite  align-start >
                    <span >Febrero 2023 - Agosto 2023 💪</span>
                </template>

                <v-card color="white lighten-1 pt-4 experencie-card "
                    dark 
                >
                    <v-card-title class="title primary px-5 py-2  experencie-title line-left  "   >Divelia</v-card-title>
                        <v-card-text class="white text--primary">
                             <h2 class="black--text subtitle-span ">Cargo: <span>Desarrollador Web - Remoto 🖥️</span></h2> 
                               <!--   <h2 class="black--text mt-3 " >Funciones:</h2  >  
                            <ul class="list mt-2" >
                                <li>Desarrollar páginas Webs</li> 
                                <li>Desarrollar Tiendas Online</li> 
                                <li>Configurar SEO esencial para Webs</li> 
                                <li>Desarrollar landings</li> 
                                <li>Optimizar Webs</li>
                                <li>Maquetar Emailings personalizadas </li>
                                <li>Subir Web a producción</li>
                            </ul> -->
                            <h2  class="black--text mt-3 " >Proyectos desarrollados:</h2> 
                             <ul class="list list-success mt-2" >
                                <h3  class="font-weight-bold roboto-condensed-bold black--text mt-3 mb-2 " >Páginas Webs</h3>
                                <li>Your Essence Peru: <a  class="list-link" href="https://youressenceperu.com/" target="_blank" >https://youressenceperu.com/</a> </li>
                                <li>Curriculums: <a  class="list-link" href="https://www.curriculums.com.pe/" target="_blank" >https://www.curriculums.com.pe/</a> </li>
                                <li>Emprende: <a  class="list-link" href="https://emprende.net/" target="_blank" >https://emprende.net/</a> </li>
                                <h3  class="font-weight-bold roboto-condensed-bold black--text mt-3 mb-2 " >Tiendas Online</h3>
                                <li>Soldametal: <a  class="list-link" href="https://soldametal.com/" target="_blank" >https://soldametal.com/</a></li> 
                                <li>Hosteleria: <a  class="list-link" href="https://hosteleriamaquinaria.es/" target="_blank" >https://hosteleriamaquinaria.es/</a></li> 
                            </ul> 
                          
                        </v-card-text>  
                    </v-card>
            </v-timeline-item>
            <v-timeline-item   color="primary lighten-1 experencie" fill-dot 
                large  data-aos="fade-up"  data-aos-offset="200"  data-aos-once="true" >
                <template v-slot:icon>
                    <v-avatar>
                    <img :src="require('../assets/igclogo.png')">
                    </v-avatar>
                </template>
                <template v-slot:opposite  align-end >
                    <span >Deciembre 2018 - Junio 2019 : <strong>Etapa 1</strong> ✔️  <br>  Septiembre 2022 - Noviembre 2022 : <strong>Etapa 2</strong> ✔️</span>
                </template>

                <v-card color="white  lighten-1 pt-4 experencie-card"
                    dark 
                >
                    <v-card-title class="title primary px-5 py-2  experencie-title line-right ">Instituto de Gerencia Intercontinental (IGC)</v-card-title>
                    <v-card-text class="white text--primary"> 
                        <h2 class="black--text subtitle-span ">Cargo: <span>Desarrollador Web - Freelancer 💻</span></h2> 
                     <!--    <h2 class="black--text mt-3" >Funciones:</h2> 
                        <ul class="list mt-2" >
                            <li>Diseñar Web</li>
                            <li>Desarrollar Web </li> 
                            <li>Configurar SEO esencial para Webs</li> 
                            <li>Maquetar emailings personalizadas</li>
                            <li>Subir Web a producción</li> 
                        </ul> -->
                        <h2 class="black--text mt-3" >Proyectos desarrollados:</h2> 
                        <ul class="list list-success mt-2" >
                            <li>IGC: <a  class="list-link" href="https://igc.edu.pe" target="_blank" >https://igc.edu.pe</a> </li>
                            <li>EGG: <a  class="list-link" href="https://escuelag.com" target="_blank" >https://escuelag.com</a> </li>
                            <li>Aula virtual: <a  class="list-link" href="https://aulavirtual.igc.edu.pe" target="_blank" >https://aulavirtual.igc.edu.pe</a> </li>
                         </ul>  
                    </v-card-text>  
                    </v-card>
            </v-timeline-item>

           <v-timeline-item  color="  primary lighten-1  experencie " md12  
            fill-dot large key="2" data-aos="fade-up"  data-aos-offset="200"  data-aos-once="true">
            <template v-slot:icon>
                <v-avatar>
                <span style="font-weight:500; color:white;font-size:20px " >S</span>
                </v-avatar>
            </template>
            <template v-slot:opposite  align-start >
                <span >Mayo 2022 - Julio 2022 ✔️</span>
            </template>

            <v-card color="white lighten-1 pt-4 experencie-card "
                dark 
            >
                <v-card-title class="title primary px-5 py-2  experencie-title line-left ">Solida Construcción</v-card-title>
                    <v-card-text class="white text--primary   "> 
                        <h2 class="black--text subtitle-span ">Cargo: <span>Desarrollar Web - Freelancer 💻</span></h2> 
                     <!--    <h2 class="black--text mt-3 " >Funciones:</h2  >  
                        <ul class="list mt-2" >
                            <li>Programación para Webs</li>
                            <li>Maquetación de páginas Webs</li>
                            <li>Actualización de información en la web</li>
                            <li>Actualización de información en Aula virtual</li>
                            <li>Asistencia en el area de soporte técnico</li> 
                        </ul> -->
                        <h2  class="black--text mt-3 " >Proyecto desarrollado:</h2>
                           <ul class="list list-success mt-2" >
                            <li>Solida Construcción: <a  class="list-link" href="https://www.solidaconstruccion.com" target="_blank" >https://www.solidaconstruccion.com</a> </li> 
                         </ul>   
                    </v-card-text>  
               <!--  <v-card-title class="title primary px-5 py-2  experencie-title line-left ">Idat</v-card-title>
                    <v-card-text class="white text--primary   "> 
                        <h2 class="black--text subtitle-span ">Cargo: <span>Practicante Web</span></h2> 
                        <h2 class="black--text mt-3 " >Funciones:</h2  >  
                        <ul class="list mt-2" >
                            <li>Programación para Webs</li>
                            <li>Maquetación de páginas Webs</li>
                            <li>Actualización de información en la web</li>
                            <li>Actualización de información en Aula virtual</li>
                            <li>Asistencia en el area de soporte técnico</li> 
                        </ul>
                        <h2  class="black--text mt-3 " >Logros:</h2>
                            <ul class="list list-success mt-2" >
                             <li>He complido las tareas asignadas en tiempo establecido.</li>
                             <li>He apoyado en dar soluciones a equipos con fallas técnicas en el área de soporte. </li>
                             <li>Idat: <a  class="list-link" href="https://www.idat.edu.pe/" target="_blank" >https://www.idat.edu.pe/</a> </li>
                           </ul>   
                    </v-card-text>   -->
                </v-card>
            </v-timeline-item>
        </v-timeline> 
 
    </div>
</template>
<script>
export default {
    data: () => ({  
    })
}
</script>
<style lang="scss" >

$primary:#202aab;
:root{ 
    --shadow-lg: -15px 15px 40px 0 rgba(0, 0, 0, 0.03), -28px 16px 22px 0 rgba(0, 0, 0, 0.01), -9px 31px 25px 0 rgba(0, 0, 0, 0.01), 0 0 0 1px rgba(0, 0, 0, 0.03);
}
.shadow{
    &-lg{
     box-shadow:-15px 15px 40px 0 rgba(0, 0, 0, 0.03), -28px 16px 22px 0 rgba(0, 0, 0, 0.01), -9px 31px 25px 0 rgba(0, 0, 0, 0.01), 0 0 0 1px rgba(0, 0, 0, 0.03);
    }
} 
.v-card__text{
    padding: 2.5em 3.5em;
     @media (max-width:400px){ 
        padding: 2em 2.5em;
    } 
}

@media (max-width:400px){ 
    .v-timeline--dense:before, .v-timeline-item__dot,.v-timeline-item__opposite{
        left:50% !important ;
        transform:translateX(-50%);
    }
    .v-timeline-item__body{
        max-width: 100% !important ;
        margin: 8.5em 0 2em 0;
    }
    .v-timeline-item__opposite{
        display: block !important;
        position: absolute;
        top: 6em;
        width: 100%;
        max-width: 100%;
        text-align: center !important;
        margin-left: 0 !important;
    }
}

.experencie{
    &-card{
        border-color: var(--v-primary-base)!important; 
        box-shadow: var(--shadow-lg);
        border-radius: 22px; 
        &::before, &::after{
            top: 32px !important;
        }
      
        @media (max-width:400px){ 
            h2{
                font-size: 15px; 
                span{
                    font-size: 14px; 

                }
            }
        } 
    }
    @at-root{
        .v-timeline--align-top .v-timeline-item__dot--large{
            top: 15px !important;  
        }
    }
    &-title {
        border-radius: 0 !important;
        position: relative; 
        @media (max-width:400px){ 
            padding: .8em 2.5em !important;
            font-size: 16px !important;
            box-shadow: 10px 0 0 0 var(--v-primary-base),-10px 0 0 0 var(--v-primary-base);
        } 
        &::before{
            content: '';
            position: absolute;
            height: 100%;
            width: 10px; 
            background: var(--v-primary-base); 
            
        }
        &::after{
            content: '';
            position: absolute;
        }
        &.line-left::before{
             left: -10px;
            @media (max-width:959px){  
                right: -10px;
                left: initial;

            }
            @media (max-width:400px){ 
                    height: auto;
                    width: auto;
                    left: -7px;
                    right: initial;
                    bottom: -7px;
                    border-style: solid;
                    border-spacing: 20px;
                    transform: rotate(-133deg);
                    border-width: 7px;
                    border-color: darken($color: $primary , $amount: 8)  transparent transparent;  
                    background: transparent;
           }
        }
        &.line-left::after{
            left: -7px;
            bottom: -7px;
            border-style: solid;
            border-spacing: 20px;
            transform: rotate(-133deg);
            border-width: 7px;
            border-color: darken($color: $primary , $amount: 8)  transparent transparent;  
            @media (max-width:959px){ 
                right: -7px;
                left: initial; 
                transform: rotate(133deg);

            }
        }
       
        &.line-right::before{
            right: -10px;
             @media (max-width:400px){ 
                    height: auto;
                    width: auto;
                    left: -7px;
                    bottom: -7px;
                    border-style: solid;
                    border-spacing: 20px;
                    transform: rotate(-133deg);
                    border-width: 7px;
                    border-color: darken($color: $primary , $amount: 8)  transparent transparent;  
                    background: transparent;
                    right: initial;
           }
            
        }
        &.line-right::after{
            right: -7px;
            bottom: -7px;
            border-style: solid;
            border-spacing: 20px;
            transform: rotate(133deg);
            border-width: 7px;
            border-color: darken($color: $primary , $amount: 8)  transparent transparent;  
        }
        
    }
}
.list{ 
    li{
        position: relative;
        display: flex;
        align-items: center;
        font-weight: 500 ; 
        font-size: 16px ;
        color: black;
        margin-bottom: 4px;
        @media (max-width:400px){
            font-size: 14px ;

        }
        &::before{
            content: '';
            position: absolute;
            left: -1.4em; 
            background: linear-gradient( lighten($color: $primary, $amount: 12) , darken($color: $primary, $amount: 18)) ;
            width: 16px;
            height: 16px; 
            clip-path: polygon(50% 0%, 95% 26%, 95% 76%, 50% 100%, 5% 75%, 5% 25%);
            transform: rotate(60deg); 
        }
    }
    &-success{
        li{
            display: flex;
            align-items: center; 
            justify-content: space-between;
            &::before{
            background: linear-gradient( lighten($color: #91ff00, $amount: 12) , darken($color: #91ff00, $amount: 18)) ; 
        }
        }
    }
    &-link{
        border: 2px solid  var(--v-primary-base) ;
        padding: 4px 3.2em 4px 8px;
        border-radius: 4px;
        position: relative;
        color: #000;
        text-decoration: none;
        font-size: 12px;
        word-break:normal;  
        width: 100%;
        max-width: 170px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden; 
        @media (max-width:400px){
             max-width: 120px;
             font-size: 9px;

        }
         
        &::after{
            content: 'ver'; 
            color: white;
            background:var(--v-primary-base); 
            position: absolute;
            right: 0;
            top: 0;
            bottom: 0;  
            display: flex;
            align-items: center;
            padding: 0 1em;
        }
    }
}

.subtitle-span  span{
    font-size: 16px;
    font-weight: 500;
}

    
</style>