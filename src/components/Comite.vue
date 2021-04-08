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
    <v-carousel v-model="model">
      <v-carousel-item v-for="(comite, i) in comites" :key="i">
        <v-sheet
          :color="color"
          height="80%"
          tile
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
           <!-- <v-col md="12">
             <span class="text-align-center">Comite {{ comite.nombre }} </span>
           </v-col> -->
                <v-col md="3" v-for="(integrante, j) in comite.integrantes" :key="j">
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
            { nombre: 'Danna Michelle Guevara Prieto', img: require("../assets/img/c-integrante-1.png") },
            { nombre: 'Danna Michelle Guevara Prieto', img: require("../assets/img/c-integrante-1.png") },
            { nombre: 'Salomé Ospina Álvarez', img: require("../assets/img/c-integrante-1.png") },
            { nombre: 'Isabela Ricón Hurtado', img: require("../assets/img/c-integrante-1.png") },
            { nombre: 'Manuela Bedoya Gärtner', img: require("../assets/img/c-integrante-1.png") },
            { nombre: 'Valeria Rizo Moreno', img: require("../assets/img/c-integrante-1.png") },
            { nombre: 'Isabella Prada Campo', img: require("../assets/img/c-integrante-1.png") },
            { nombre: 'María de los Ángeles Cifuentes Osorio', img: require("../assets/img/c-integrante-1.png") },
            { nombre: 'Michelle Hurtado Ramirez', img: require("../assets/img/c-integrante-1.png") },
            { nombre: 'Camila Idarraga María Camila Idárraga López', img: require("../assets/img/c-integrante-1.png") },
            { nombre: 'Danna Yulissa García Quevedo', img: require("../assets/img/c-integrante-1.png") },
                      ] 
            },
         { nombre: 'Cultural', integrantes: [
           { nombre: 'Natalia Castaño García', img: require("../assets/img/c-integrante-1.png")},
           { nombre: 'Valeria Velásquez Díaz', img: require("../assets/img/c-integrante-1.png")},
         ]  },
         { nombre: 'Comunicación', integrantes: [
           { nombre: 'Salomé Ospina Álvarez',  img: require("../assets/img/c-integrante-1.png")},
           { nombre: 'Nicolas Muñoz Giraldo',  img: require("../assets/img/c-integrante-1.png")},
           { nombre: 'Juan Diego Escobar Puentes',  img: require("../assets/img/c-integrante-1.png")},
         ] },
         { nombre: 'Logistico', integrantes: [
           { nombre: 'Salomé Ospina Álvarez',  img: require("../assets/img/c-integrante-1.png")},
           { nombre: 'Salomé Ospina Álvarez',  img: require("../assets/img/c-integrante-1.png")},
           { nombre: 'Salomé Ospina Álvarez',  img: require("../assets/img/c-integrante-1.png")},
           { nombre: 'Salomé Ospina Álvarez',  img: require("../assets/img/c-integrante-1.png")},
           { nombre: 'Salomé Ospina Álvarez',  img: require("../assets/img/c-integrante-1.png")},
           { nombre: 'Salomé Ospina Álvarez',  img: require("../assets/img/c-integrante-1.png")},
           { nombre: 'Salomé Ospina Álvarez',  img: require("../assets/img/c-integrante-1.png")},
           { nombre: 'Salomé Ospina Álvarez',  img: require("../assets/img/c-integrante-1.png")},
           { nombre: 'Salomé Ospina Álvarez',  img: require("../assets/img/c-integrante-1.png")},
           { nombre: 'Salomé Ospina Álvarez',  img: require("../assets/img/c-integrante-1.png")},
           { nombre: 'Salomé Ospina Álvarez',  img: require("../assets/img/c-integrante-1.png")},
           { nombre: 'Salomé Ospina Álvarez',  img: require("../assets/img/c-integrante-1.png")},
           { nombre: 'Salomé Ospina Álvarez',  img: require("../assets/img/c-integrante-1.png")},
           { nombre: 'Salomé Ospina Álvarez',  img: require("../assets/img/c-integrante-1.png")},
           { nombre: 'Salomé Ospina Álvarez',  img: require("../assets/img/c-integrante-1.png")},
         ]}
        ],
        
        
        model: 0,
        color: 'carrousel',
      }
    },
  }
</script>