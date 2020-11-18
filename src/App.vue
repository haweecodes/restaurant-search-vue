<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row>
          <v-col md="4" offset-md="4">
            <SearchComponent />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import SearchComponent from './components/SearchComponent.vue';

export default Vue.extend({
  name: 'App',

  components: {
    SearchComponent,
  },

  data: () => ({
    //
  }),
});
</script>
