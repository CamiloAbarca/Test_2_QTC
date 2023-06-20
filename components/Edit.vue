<template>
  <div>
    <h3>Update</h3>
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
          <td>
            {{ quote.quote }}
          </td>
          <td>{{ quote.author }}</td>
          <td>
            <v-btn
            x-small
            @click="sendQuote(quote.quote, quote.author, index)"
              
            >
            Send to Delete
            </v-btn>
            <v-btn
            x-small
            @click="updateQuote"
              
            >
            Update | NOT APPLIED
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

import { SET_QUOTELIST_UPDATE, SET_QUOTELIST_DELETE} from '~/store/mutations.types'


export default {
  data () {
    return {
      quotes: [],
    }
  },

  methods: {
    async addQuotesUpdate (result) {
      const list = [...this.quoteListUpdate]
      list.push(result)
      this.$store.commit(SET_QUOTELIST_UPDATE, list)

    },

    async deleteQuote (index) {
      const list = [...this.quoteListUpdate]
      list.splice(index, 1)
      this.$store.commit(SET_QUOTELIST_UPDATE, list)
    },

    async sendQuote (quote, author, index) {
      this.deleteQuote(index)
      const listDelete = [...this.quoteListDelete]
      listDelete.push({quote, author})
      this.$store.commit(SET_QUOTELIST_DELETE, listDelete)
    },

    async updateQuote () {
      console.log('Actualizando...')
    }
  },

  computed: {
    ...mapGetters([
      'quoteListUpdate',
      'quoteListDelete',
    ])
  }
}
</script>

<style lang="scss" scoped>

</style>