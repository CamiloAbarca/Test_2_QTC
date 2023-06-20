<template>
  <div>
    <!-- Botón Generar Frase -->
    <br>
    <v-btn 
      @click="onGetNewMsg"
    >
      Generar Frase
    </v-btn>
    <br>
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
            @click="sendQuote(quote.quote, quote.author, index)"
              
            >
            Send Update
            </v-btn>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import { GET_NEW_MSG } from '~/store/actions.types'
import { SET_QUOTELIST, SET_QUOTELIST_UPDATE} from '~/store/mutations.types';


export default {
  data () {
    return {
      loadingMsg: false,
      quotes: [],
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

    async deleteQuote (index) {
      const list = [...this.quoteList]
      list.splice(index, 1)
      this.$store.commit(SET_QUOTELIST, list)
    },

    async sendQuote (quote, author, index) {
      this.deleteQuote(index)
      const listUpdate = [...this.quoteListUpdate]
      listUpdate.push({quote, author})
      this.$store.commit(SET_QUOTELIST_UPDATE, listUpdate)
    }
  },

  computed: {
    ...mapGetters([
      'quoteList',
      'quoteListUpdate',
    ])
  }
}
</script>

<style lang="scss" scoped>

</style>