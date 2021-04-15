<template>
  <section  class="pb-8">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-card style="width: 100%">
            <!-- <h1 class="text-center pt-6 font-weight-light display-2">Más información</h1> -->
            <v-divider class="my-6"></v-divider>
          </v-card>
        </v-col>
      </v-row>

      <v-row align="center" justify="center">
        <v-col cols="10">
              <v-row >
                <v-col cols="4">
                  <v-card class="alto" shaped disabled>
                    <v-card-title class="salto">Apertura y difusión de la convocatoria</v-card-title>
                    <v-card-text class="font-weight-bold" >03 de noviembre de 2020</v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="4">
                  <v-card class="alto" shaped disabled>
                    <v-card-title class="salto">Recepción de ponencias </v-card-title>
                    <v-card-text class="font-weight-bold">Hasta el 20 de marzo de 2021</v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="4">
                  <v-card class="alto" shaped disabled>
                    <v-card-title class="salto">Evaluación de ponencias </v-card-title>
                    <v-card-text class="font-weight-bold">Hasta el 09 de abril de 2021</v-card-text>
                  </v-card>
                </v-col>
              </v-row>
              <v-row >
                <v-col cols="4">
                  <v-card class="alto" shaped disabled>
                    <v-card-title class="salto">Publicación preliminar de las ponencias aprobadas  </v-card-title>
                    <v-card-text class="font-weight-bold">12 de abril de 2021</v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="4">
                  <v-card class="alto" shaped disabled>
                    <v-card-title class="salto">Proceso de reclamaciones</v-card-title>
                    <v-card-text class="font-weight-bold">Del 12 al 13 de abril de 2021</v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="4">
                  <v-card class="alto" shaped disabled>
                    <v-card-title class="salto">Publicación Definitiva de las ponencias aprobadas</v-card-title>
                    <v-card-text class="font-weight-bold">16 de abril de 2021</v-card-text>
                  </v-card>
                </v-col>
              </v-row>
              <v-row >
                <v-col cols="4">
                  <v-card class="alto" shaped disabled>
                    <v-card-title>Sexto encuentro nacional de estudiantes de psicología</v-card-title>
                    <v-card-text class="font-weight-bold">Del 28 al 30 de abril de 2021</v-card-text>
                                      </v-card>
                </v-col>
                <v-col cols="4">
                  <v-card class="alto" shaped disabled>
                    <v-card-title>Publicación de memorias</v-card-title>
                    <v-card-text class="font-weight-bold">Pendiente</v-card-text>
                  </v-card>
                </v-col>
                
              </v-row>
        </v-col>
      </v-row>
  


    </v-container>
    <div class="svg-border-rounded text-light">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 144.54 17.34"
        preserveAspectRatio="none"
        fill="currentColor"
      >
        <path
          d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0"
        />
      </svg>
      <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          fill="currentColor"
      >
        <path
            d="M0,64L80,90.7C160,117,320,171,480,181.3C640,192,800,160,960,138.7C1120,117,1280,107,1360,101.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
    </div>
  </section>
</template>

<style lang="scss">
$main_color: #283e79;

ul {
  font-size: 13px;
  line-height: 1.5em;
  margin: 5px 0 15px;
  padding: 0;

  li {
    list-style: none;
    position: relative;
    padding: 0 0 0 20px;
  }

  li {
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 5px;
      width: 10px;
      height: 10px;
      background-color: $main_color;
      border-radius: 50%;
      -moz-border-radius: 50%;
      -webkit-eeborder-radius: 50%;
    }
  }
}
</style>

<style scoped>
.header {
  background-color: #283e79;
  color: white;
}

.circle1 {
  border-radius: 50%;
  width: 150px;
  height: 150px;
  background-color: #f0f8ff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.circle2 {
  border-radius: 50%;
  width: 100px;
  height: 100px;
  background-color: #e0effc;
  display: flex;
  align-items: center;
  justify-content: center;
}

.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.svg-border-rounded svg {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  color: #f4f7f5;
  z-index: -1;
}

#pricing {
  z-index: 0;
}

.content {
  z-index: 1;
}
.alto {
  min-height: 133px;
}
svg {
  overflow: hidden;
}

section {
  position: relative;
}

.salto { word-break: keep-all; }
</style>

<script>
export default {
  data: () => ({
    planos: [
      {
        title: "Básico",
        price: "R$100,00",
        img: "f1.png",
        features: [
          {
            icon: {
              text: "mdi-check",
              color: "success",
            },
            text: "Feature 1",
          },
          {
            icon: {
              text: "mdi-check",
              color: "success",
            },
            text: "Feature 2",
          },
          {
            icon: {
              text: "mdi-cancel",
              color: "red",
            },
            text: "Feature 3",
          },
          {
            icon: {
              text: "mdi-cancel",
              color: "red",
            },
            text: "Feature 4",
          },
        ],
      },
      {
        title: "Padrão",
        price: "R$150,00",
        img: "f2.png",
        features: [
          {
            icon: {
              text: "mdi-check",
              color: "success",
            },
            text: "Feature 1",
            color: "success",
          },
          {
            icon: {
              text: "mdi-check",
              color: "success",
            },
            text: "Feature 2",
          },
          {
            icon: {
              text: "mdi-check",
              color: "success",
            },
            text: "Feature 3",
            color: "success",
          },
          {
            icon: {
              text: "mdi-cancel",
              color: "red",
            },
            text: "Feature 4",
          },
        ],
      },
      {
        title: "Premium",
        price: "R$250,00",
        img: "f3.png",
        features: [
          {
            icon: {
              text: "mdi-check",
              color: "success",
            },
            text: "Feature 1",
            color: "success",
          },
          {
            icon: {
              text: "mdi-check",
              color: "success",
            },
            text: "Feature 2",
          },
          {
            icon: {
              text: "mdi-check",
              color: "success",
            },
            text: "Feature 3",
            color: "success",
          },
          {
            icon: {
              text: "mdi-check",
              color: "success",
            },
            text: "Feature 4",
            color: "success",
          },
        ],
      },
    ],
  }),
  computed: {
    size() {
      const size = {md: "large", xl: "x-large"}[
          this.$vuetify.breakpoint.name
          ];
      return size ? {[size]: true} : {};
    }
  },
};
</script>