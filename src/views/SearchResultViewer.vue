<template>
  <section>
    <v-container v-if="loader">
      <v-row>
        <v-col cols="auto">
          <v-btn to="/" outlined>
              <v-icon>keyboard_backspace</v-icon>
              Go Back
            </v-btn>
        </v-col>
        <v-col md="4" lg4="4" class="d-flex align-center">
          <p class="mb-0">Showing {{getSearchResult.length}}
            <span class="green--text font-weight-black">
              {{searchText}}
            </span>
            result
          </p>
        </v-col>
      </v-row>
      <v-row v-if="getSearchResult.length > 0">
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
                <v-list-item-title class="headline mb-1 d-flex flex-wrap align-center">
                   <p class="mb-0">{{ restaurant.name }}</p>
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
              <v-btn outlined block text @click="showDetails(restaurant)"> View Details </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-row v-else>
        <v-col xs='12'>
          <NotFound :message="notFoundMsg"/>
      </v-col>
      </v-row>
    </v-container>
    <v-container v-else class="d-flex justify-center align-center">
      <v-progress-circular
        :size="70"
        :width="7"
        color="purple"
        indeterminate
      ></v-progress-circular>
    </v-container>
  </section>
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import EventBus from '@/plugins/eventbus';

// Define the component in class-style
@Component({
  components: {
    NotFound: () => import('@/components/NotFound.vue'),
  },
})
export default class SearchComponent extends Vue {
  searchText = this.$router.currentRoute.query.query;

  loader = false;

  notFoundMsg = 'No data to show'

  beforeMount() {
    this.loader = true;
    EventBus.$on('NEW_SEARCH', () => {
      this.loader = false;
      setTimeout(() => {
        this.searchText = this.$router.currentRoute.query.query;
        this.loader = true;
      }, 1000);
    });
  }

  get getSearchResult() {
    return this.$store.state.searchResult;
  }

  // eslint-disable-next-line class-methods-use-this
  showDetails(details) {
    // this.$store.commit('setRestaurant', details);
    localStorage.setItem('restaurant', JSON.stringify(details));
    this.$router.push({ name: 'ViewDetail' });
  }
}
</script>

<style>
</style>
