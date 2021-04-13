<template>
  <div>
    <!-- <v-row justify="space-around">
      <v-icon @click="model--">
        mdi-minus
      </v-icon>
      {{ model }}
      <v-icon @click="model++">
        mdi-plus
      </v-icon>
    </v-row> -->
    <v-carousel v-model="model" >
      <v-carousel-item v-for="(comite, i) in comites" :key="i" >
        <v-sheet
          :color="color"
          height="20%"
          width="100%"
          tile
          
        >
        <v-row 
        align="start"
        justify="center"
        >
          <v-col cols="md-9">
            <h1 class="text-center colortext pt-1 font-weight-light display-1">Conoce los integrantes de los diferentes comites</h1>
          </v-col>
        </v-row>
          <v-row
            class="fill-height"
            align="start"
            justify="center"
          >
           <!-- <v-col md="12">
             <span class="text-align-center">Comite {{ comite.nombre }} </span>
           </v-col> -->
                <v-col md="3"  v-for="(integrante, j) in comite.integrantes" :key="j">
                  <!-- {{ comite }} -->
                  <v-list shaped :color="color">
                    <v-list-item-group color="secondary">
                      <v-list-item>
                      <v-list-item-avatar avatar>
                        <v-img class="circle2" max-height="150" :src="integrante.img"/>
                        </v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-title  class="colortext body-2">{{ integrante.nombre }}</v-list-item-title>
                        <v-list-item-subtitle class=""><v-chip small>Comité {{ comite.nombre }}</v-chip></v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                    </v-list-item-group>
                  </v-list>
                </v-col>
               
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<style>
.colortext{
  color: black;
}
</style>

<script>
  export default {
    data () {
      return {
        comites: [
           { nombre: 'Académico', integrantes: [
            { nombre: 'Michelle Guevara Prieto', img: require("../assets/img/c-integrante-1.png") },
            { nombre: 'Salomé Ospina Álvarez', img: require("../assets/img/c-integrante-2.png") },
            { nombre: 'Isabela Ricón Hurtado', img: require("../assets/img/c-integrante-3.png") },
            { nombre: 'Manuela Bedoya Gärtner', img: require("../assets/img/c-integrante-4.png") },
            { nombre: 'Valeria Rizo Moreno', img: require("../assets/img/c-integrante-5.png") },
            { nombre: 'Isabella Prada Campo', img: require("../assets/img/c-integrante-6.png") },
            { nombre: 'María de los Ángeles Cifuentes Osorio', img: require("../assets/img/c-integrante-7.png") },
            { nombre: 'Michelle Hurtado Ramirez', img: require("../assets/img/c-integrante-8.png") },
            { nombre: 'María Camila Idárraga López', img: require("../assets/img/c-integrante-9.png") },
            { nombre: 'Danna Yulissa García Quevedo', img: require("../assets/img/c-integrante-10.png") },
            
                      ] 
            },
         { nombre: 'Cultural', integrantes: [
           { nombre: 'Natalia Castaño García', img: require("../assets/img/c-integrante-11.png")},
           { nombre: 'Valeria Velásquez Díaz', img: require("../assets/img/c-integrante-12.png")},
         ]  },
         { nombre: 'Comunicación', integrantes: [
           { nombre: 'Salomé Ospina Álvarez',  img: require("../assets/img/c-integrante-13.png")},
           { nombre: 'Nicolas Muñoz Giraldo',  img: require("../assets/img/c-integrante-14.png")},
           { nombre: 'Juan Diego Escobar Puentes',  img: require("../assets/img/c-integrante-15.png")},
         ] },
         { nombre: 'Logistico', integrantes: [
           { nombre: 'Yuly Andrea Osorio Gómez',  img: require("../assets/img/c-integrante-16.png")},
           { nombre: 'Katherine Escárraga Blandon',  img: require("../assets/img/c-integrante-17.png")},
           { nombre: 'Laura Michelle zuluaga Gutierrez',  img: require("../assets/img/c-integrante-18.png")},
           { nombre: 'Stefany Agudelo Parra',  img: require("../assets/img/c-integrante-19.png")},
           { nombre: 'Karol Estefany Arango Celis',  img: require("../assets/img/c-integrante-20.png")},
           { nombre: 'Vanessa Álvarez Torres',  img: require("../assets/img/c-integrante-21.png")},
           { nombre: 'Luisa María Galeano Cadavid',  img: require("../assets/img/c-integrante-22.png")},
           { nombre: 'María Angélica Rojas Villa',  img: require("../assets/img/c-integrante-23.png")},
           { nombre: 'Juana Valeria Restrepo montes',  img: require("../assets/img/c-integrante-24.png")},
           { nombre: 'Andrés Felipe Álvarez Henao',  img: require("../assets/img/c-integrante-25.png")},
           { nombre: 'Juan Eduardo Montoya Franco',  img: require("../assets/img/c-integrante-26.png")},
           { nombre: 'Michael David Pérez Restrepo',  img: require("../assets/img/c-integrante-27.png")},
           { nombre: 'Maria Daniela Gutiérrez Martínez',  img: require("../assets/img/c-integrante-28.png")},
           { nombre: 'Vanessa castaño rojas',  img: require("../assets/img/c-integrante-29.png")},
           { nombre: 'Dayana Arias',  img: require("../assets/img/c-integrante-30.png")},
         ]}
        ],
        
        
        model: 0,
        color: 'carrousel',
      }
    },
  }
</script>