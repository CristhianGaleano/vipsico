<template>
  <div>
    <v-row justify="space-around">
      <v-icon @click="model--">
        mdi-minus
      </v-icon>
      {{ model }}
      <v-icon @click="model++">
        mdi-plus
      </v-icon>
    </v-row>
    <v-carousel v-model="model">
      <v-carousel-item v-for="(comite, i) in comites" :key="i">
        <v-sheet
          :color="color"
          height="100%"
          tile
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
           <v-col md="12">
             <span class="text-align-center">Comite {{ comite.nombre }} </span>
           </v-col>
                <v-col md="2" v-for="(integrante, j) in comite.integrantes" :key="j">
                  <!-- {{ comite }} -->
                  <v-list :color="color">
                    <v-list-item>
                      <v-list-item-avatar><v-img class="circle2" max-height="150" :src="integrante.img"/></v-list-item-avatar>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title>{{ integrante.nombre }}</v-list-item-title>
                        <v-list-item-subtitle>{{ comite.nombre }}</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-col>
               
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        comites: [
           { nombre: 'Académico', integrantes: [
            { nombre: 'Danna Michelle Guevara Prieto', img: require("../assets/img/ponente6.png") },
            { nombre: 'Danna Michelle Guevara Prieto', img: require("../assets/img/ponente6.png") },
            { nombre: 'Salomé Ospina Álvarez', img: require("../assets/img/ponente6.png") },
            { nombre: 'Isabela Ricón Hurtado', img: require("../assets/img/ponente6.png") },
            { nombre: 'Manuela Bedoya Gärtner', img: require("../assets/img/ponente6.png") },
            { nombre: 'Valeria Rizo Moreno', img: require("../assets/img/ponente6.png") },
            { nombre: 'Isabella Prada Campo', img: require("../assets/img/ponente6.png") },
            { nombre: 'María de los Ángeles Cifuentes Osorio', img: require("../assets/img/ponente6.png") },
            { nombre: 'Michelle Hurtado Ramirez', img: require("../assets/img/ponente6.png") },
            { nombre: 'Camila Idarraga María Camila Idárraga López', img: require("../assets/img/ponente6.png") },
            { nombre: 'Danna Yulissa García Quevedo', img: require("../assets/img/ponente6.png") },
                      ] 
            },
         { nombre: 'Cultural', integrantes: [
           { nombre: 'Natalia Castaño García', img: require("../assets/img/ponente6.png")},
           { nombre: 'Valeria Velásquez Díaz', img: require("../assets/img/ponente6.png")},
         ]  },
         { nombre: 'Comunicación', integrantes: [
           { nombre: 'Salomé Ospina Álvarez',  img: require("../assets/img/ponente6.png")},
           { nombre: 'Nicolas Muñoz Giraldo',  img: require("../assets/img/ponente6.png")},
           { nombre: 'Juan Diego Escobar Puentes',  img: require("../assets/img/ponente6.png")},
         ] },
         { nombre: 'Logistico', integrantes: [
           { nombre: 'Salomé Ospina Álvarez',  img: require("../assets/img/ponente6.png")},
           { nombre: 'Salomé Ospina Álvarez',  img: require("../assets/img/ponente6.png")},
           { nombre: 'Salomé Ospina Álvarez',  img: require("../assets/img/ponente6.png")},
           { nombre: 'Salomé Ospina Álvarez',  img: require("../assets/img/ponente6.png")},
           { nombre: 'Salomé Ospina Álvarez',  img: require("../assets/img/ponente6.png")},
           { nombre: 'Salomé Ospina Álvarez',  img: require("../assets/img/ponente6.png")},
           { nombre: 'Salomé Ospina Álvarez',  img: require("../assets/img/ponente6.png")},
           { nombre: 'Salomé Ospina Álvarez',  img: require("../assets/img/ponente6.png")},
           { nombre: 'Salomé Ospina Álvarez',  img: require("../assets/img/ponente6.png")},
           { nombre: 'Salomé Ospina Álvarez',  img: require("../assets/img/ponente6.png")},
           { nombre: 'Salomé Ospina Álvarez',  img: require("../assets/img/ponente6.png")},
           { nombre: 'Salomé Ospina Álvarez',  img: require("../assets/img/ponente6.png")},
           { nombre: 'Salomé Ospina Álvarez',  img: require("../assets/img/ponente6.png")},
           { nombre: 'Salomé Ospina Álvarez',  img: require("../assets/img/ponente6.png")},
           { nombre: 'Salomé Ospina Álvarez',  img: require("../assets/img/ponente6.png")},
         ]}
        ],
        
        
        model: 0,
        color: 'carrousel',
      }
    },
  }
</script>