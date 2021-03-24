<template>
  <div class="text-center d-inline pa-0">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="grey"
          dark
          v-bind="attrs"
          text
          small
          class="py-0 px-2"
          v-on="on"
        >
        <v-chip
        x-small>
          Consultar
        </v-chip>
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2">
          Cuentas disponibles
        </v-card-title>

        <v-card-text>
          
            <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Banco
          </th>
          <th class="text-left">
            Cuenta
          </th>
          <th class="text-left">
            Tipo
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in desserts"
          :key="item.name"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.calories }}</td>
          <td>{{ item.tipo }}</td>
        </tr>
        <tr>
          <td>
            A NOMBRE DE: 
          </td>
          <td colspan="3">
            <b> UNIVERSIDAD CATÓLICA DE PEREIRA</b>
          </td>
        </tr>
        <tr>
          <td>
            NIT: 
          </td>
          <td colspan="3" class="text-center">
            <b> 891.408.261-1</b>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
          

        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <!-- <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            I accept
          </v-btn> -->
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      desserts: [
          {
            name: 'COLPATRIA',
            calories: 702001749,
            tipo: 'AHORROS'
          },
          {
            name: 'SUDAMERIS',
            calories: 601002892,
            tipo: 'CORRIENTE'
          },
          {
            name: 'BANCOLOMBIA',
            calories: 27033844925,
            tipo: 'CORRIENTE (58807)'
          },
          {
            name: 'PICHINCHA',
            calories: 410220757,
            tipo: 'CORRIENTE'
          },
          {
            name: 'BBVA',
            calories: 803000488,
            tipo: 'AHORROS'
          },
          {
            name: 'AV VILLAS',
            calories: 303092530,
            tipo: 'CORRIENTE'
          },
          {
            name: 'OCCIDENTE',
            calories: 33043225,
            tipo: 'CORRIENTE'
          }
        ],
    }
  },

}
</script>