<template>
  <div>
    <!-- Ejemplo simple de componentes y reactividad -->
    <p>Author: {{ author }}</p>
    <p>Quote: {{ msg }}</p>
    <v-btn 
      outlined 
      color="blue" 
      :loading="loadingMsg"
      @click="onGetNewMsg"
    >
      Nueva Frase
    </v-btn>

    <v-divider></v-divider>

    <v-simple-table
    fixed-header
    height="300px"
  >
      <thead>
        <tr>
          <th class="text-left">
            Quote
          </th>
          <th class="text-left">
            Author
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="quote in quotes"
          :key="quote.quote"
        >
          <td>{{ quote.quote }}</td>
          <td>{{ quote.author }}</td>
        </tr>
      </tbody>
  </v-simple-table>

    <!--
      Test:
      Crear una tabla simple y consumir una API pública para llenarla de datos, una fila a la vez. La idea es implementar todas las 
      funcionalidades que creas que mejoran su uso y experiencia.

      - Crear v-simple-table (vuetify v2 https://v2.vuetifyjs.com/en/components/simple-tables/) de 2 columnas, Quote y Author. 
      - Crear un v-btn que agregue una fila a la tabla cada vez que se presiona.
      - La lista debe quedar guardada en el store usando Vuex.
      - Implementar el borrado de elementos de la tabla (y del store).
      - Extra1: Implementar el ingreso manual de nuevas frases y autores a la lista.
      - Extra2: Implementar la edición de los elementos de la tabla.
    -->

  </div>
</template>

<script>
//import { mapGetters } from 'vuex'

import {
  GET_NEW_MSG
} from '~/store/actions.types'

export default {
  data () {
    return {
      author: '...',
      msg: '...',
      loadingMsg: false,
      quotes: ''
    }
  },

  methods: {
    async onGetNewMsg () {
      try {
        this.loadingMsg = true
        const { quote } = await this.$store.dispatch(GET_NEW_MSG)
        const { author } = await this.$store.dispatch(GET_NEW_MSG)
        this.msg = quote
        this.author = author
        this.addQuotes(quote, author)
      } catch (error) {
        console.log(error)
      } finally {
        this.loadingMsg = false
      }
    },

    async addQuotes (quote, author) {
      let quotes = {
        quote: quote,
        author: author
      }
      
      localStorage.setItem('id', JSON.stringify(quotes) )

      this.obtainQuotes()
    },

    async obtainQuotes () {
      let dato = JSON.parse(localStorage.getItem('id'))
      this.quotes = {dato}
    }
  }

  /*
  computed: {
    ...mapGetters([
      'hi'
    ])
  }
  */
}
</script>

<style lang="scss" scoped>

</style>