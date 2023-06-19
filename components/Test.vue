<template>
  <div>
    <!-- Botón Generar Frase -->
    <br>
    <v-btn 
      @click="onGetNewMsg"
    >
      Generar Frase Random
    </v-btn>
    <br>
    <br>
    
    <!-- Form agregar frase -->
    <form>
    <v-text-field 
      v-model="quoteR"      
      label="Quote"
    ></v-text-field>
    <v-text-field
      v-model="authorR"
      label="Author"
    ></v-text-field>
    <v-btn
      class="mr-4"
      @click="createQuote(quoteR, authorR)"
    >
      Agregar
    </v-btn>
  </form>

  <br>
  <br>

    <v-divider></v-divider>
<!-- Tabla de quotes -->
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Quote
          </th>
          <th class="text-left">
            Author
          </th>
          <th class="text-left">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
        v-for="quote, index in quoteList"
          :key="quote.index"
        >
          <td>{{ quote.quote }}</td>
          <td>{{ quote.author }}</td>
          <td>
            <v-btn
            x-small
            @click="deleteQuotes(index)"
              
            >
            Eliminar
            </v-btn>
            <v-btn
            x-small
            @click="updateQuote()"
              
            >
            Editar
            </v-btn>
          </td>
        </tr>
      </tbody>
    </template>
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
import { mapGetters } from 'vuex';

import { GET_NEW_MSG } from '~/store/actions.types'

import { SET_QUOTELIST } from '~/store/mutations.types'


export default {
  data () {
    return {
      loadingMsg: false,
      quotes: [],
      quoteR: '',
      authorR: ''
    }
  },

  methods: {
    async onGetNewMsg () {
      try {
        this.loadingMsg = true
        const result = await this.$store.dispatch(GET_NEW_MSG)
        this.addQuotes(result)
      } catch (error) {
        console.log(error)
      } finally {
        this.loadingMsg = false
      }
    },

    async addQuotes (result) {
      const list = [...this.quoteList]
      list.push(result)
      this.$store.commit(SET_QUOTELIST, list)

    },

    async deleteQuotes (index) {
      const list = [...this.quoteList]
      list.splice(index, 1)
      this.$store.commit(SET_QUOTELIST, list)
    },

    async createQuote (quote, author) {
      const list = [...this.quoteList]
      const newQuote = {quote, author}
      list.push(newQuote)
      this.$store.commit(SET_QUOTELIST, list)
    },

    async updateQuote () {

    }
  },

  computed: {
    ...mapGetters([
      'quoteList'
    ])
  }
}
</script>

<style lang="scss" scoped>

</style>