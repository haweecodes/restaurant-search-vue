<template>
  <section>
    <v-container>
      <v-row>
        <v-col md="3" v-for="(restaurant, i) in getSearchResult" :key="i">
          <v-card
            class="mx-auto"
            max-width="344"
            outlined
          >
            <v-img
              height="250"
              :src="restaurant.featured_image"
            ></v-img>

            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title class="headline mb-1">
                   {{ restaurant.name }}
                     <v-chip
                      class="ma-2"
                      label
                    >
                      {{restaurant.establishment[0]}}
                    </v-chip>
                </v-list-item-title>
                <v-list-item-subtitle
                  >{{restaurant.cuisines}}</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title class="mb-1">
                  Phone: {{restaurant.phone_numbers}}
                </v-list-item-title>
                <v-list-item-subtitle
                  > Address: {{restaurant.location.address}}</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>

            <v-card-actions>
              <v-btn outlined block text> View Details </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';

// Define the component in class-style
@Component
export default class SearchComponent extends Vue {
  searchText = '';

  beforeMount() {
    this.$store.dispatch('searchRestaurant', this.$router.currentRoute.query.query);
  }

  // Methods will be component methods
  get getSearchResult() {
    console.log(this.$store.state);
    return this.$store.state.searchResult;
  }
}
</script>

<style>
</style>
