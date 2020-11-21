<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="1">
            <v-btn icon to="/">
              <v-icon>home</v-icon>
            </v-btn>
          </v-col>
          <v-col md="4" offset-md="3" sm="8">
            <SearchComponent />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <router-view></router-view>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import SearchComponent from './components/SearchComponent.vue';

// Define the component in class-style
@Component({
  components: {
    SearchComponent,
  },
})
export default class App extends Vue {
  beforeMount() {
    this.$store.dispatch('searchRestaurant', this.$router.currentRoute.query.query);
  }
}
</script>
