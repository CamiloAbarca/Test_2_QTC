<template>
  <div>
    <h3>En proceso</h3>
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
        v-for="quote, index in quoteListUpdate"
          :key="quote.index"
        >
          <td>{{ quote.quote }}</td>
          <td>{{ quote.author }}</td>
          <td>
            <v-btn
            x-small
            @click="sendQuote(index)"
              
            >
            Send to Update
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

import { SET_QUOTELIST_UPDATE } from '~/store/mutations.types'


export default {
  data () {
    return {
      loadingMsg: false,
      quotes: [],
    }
  },

  methods: {
    async addQuotesUpdate (result) {
      const list = [...this.quoteListUpdate]
      list.push(result)
      this.$store.commit(SET_QUOTELIST_UPDATE, list)

    },

    async sendQuote () {
      console.log('Enviado')
    }
  },

  computed: {
    ...mapGetters([
      'quoteListUpdate'
    ])
  }
}
</script>

<style lang="scss" scoped>

</style>