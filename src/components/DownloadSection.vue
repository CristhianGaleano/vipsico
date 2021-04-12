<template>
  <section id="download">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col sm="4" class="hidden-xs-only">
              <v-img src="~@/assets/img/ill2.svg" class="d-block ml-auto mr-auto" max-width="350px" />
            </v-col>
            <v-col cols="12" sm="8" class="white--text text-left">
              <h1 class="font-weight-light display-2 mb-2">Objetivo</h1>
              <h1 class="font-weight-light">
                El objetivo principal de ENEPSI VI es construir un encuentro experiencial y académico que posibilite el aprendizaje, la creación de ideas y el diálogo alrededor de la psicología en el marco de los retos contemporáneos de la sociedad Colombiana. Permitiendo reconocer y evidenciar la importancia de los procesos de investigación que se gestan en los estudiantes desde los campos clínico, del deporte, educativo, social, organizacional, neuropsicológico y del desarrollo.
              </h1>
              <!-- <v-btn rounded outlined href="https://github.com/Joabsonlg/Landing-Page" target="_blank" large color="white" class="mt-4">
                <v-icon class="mr-2">
                  mdi-github
                </v-icon>
                Git Hub
              </v-btn> -->
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
#download {
  background-image: url("~@/assets/img/bgDownload.jpg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 500px;
}

#download .container,
#download .row {
  height: 100%;
}
</style>