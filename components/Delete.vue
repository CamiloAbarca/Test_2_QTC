<template>
  <div>
    <h3>Delete</h3>
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
        v-for="quote, index in quoteListDelete"
          :key="quote.index"
        >
          <td>{{ quote.quote }}</td>
          <td>{{ quote.author }}</td>
          <td>
            <v-btn
            x-small
            @click="sendQuote(quote.quote, quote.author, index)"
              
            >
            Cancel
            </v-btn>
            <v-btn
            x-small
            @click="deleteQuote(index)"
              
            >
            Delete
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

import { SET_QUOTELIST_DELETE, SET_QUOTELIST} from '~/store/mutations.types'


export default {
  data () {
    return {
      quotes: [],
    }
  },

  methods: {
    async addQuotesDelete (result) {
      const list = [...this.quoteListDelete]
      list.push(result)
      this.$store.commit(SET_QUOTELIST_DELETE, list)

    },

    async deleteQuote (index) {
      const list = [...this.quoteListDelete]
      list.splice(index, 1)
      this.$store.commit(SET_QUOTELIST_DELETE, list)
    },

    async sendQuote (quote, author, index) {
      this.deleteQuote(index)
      const list = [...this.quoteList]
      list.push({quote, author})
      this.$store.commit(SET_QUOTELIST, list)
    }
  },

  computed: {
    ...mapGetters([
      'quoteListDelete',
      'quoteList',
    ])
  }
}
</script>

<style lang="scss" scoped>

</style>