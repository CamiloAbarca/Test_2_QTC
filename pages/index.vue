<template>
  <v-container>
    <v-row>
      <v-col></v-col>
      <v-col>
        <Test />
      </v-col>
      <v-col></v-col>
    </v-row>
    <v-row>
      <v-col>
        <Edit />
      </v-col>
      <v-col></v-col>
      <v-col>
        <Delete />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Test from '~/components/Test.vue'
  export default {
    layout: 'empty',
    components: {
      Test
    }
  }

</script>

<style lang="scss" scoped>

</style>