<template>
  <v-banner>
    <v-row>
      <v-col md="7" lg="8">
        <h1>{{ restaurant.name }}</h1>
        <div id="rating-container" class="d-flex align-center">
          <v-rating
            empty-icon="star_border"
            full-icon="star"
            half-icon="star_half"
            length="5"
            medium
            readonly
            :value="rating"
          ></v-rating>
          ({{ rating }} by {{ restaurant.user_rating.votes }} people)
        </div>
        <div id="other-container">
          <DetailChip
            :label="restaurant.cuisines"
            :icon="'restaurant'"
            :color="'red lighten-1'"
          />
        </div>
        <div id="feature-container">
          <DetailChip
            :label="tagList"
            :icon="'star'"
            :color="'green lighten-1'"
          />
        </div>
        <div id="location-container">
          <DetailChip
            :label="restaurant.location.address"
            :icon="'location_on'"
            :color="'blue lighten-1'"
          />
        </div>
      </v-col>
      <v-col md="5" lg="4">
        <v-card
          outlined
          height="100%"
          class="d-flex align-center justify-center"
        >
          <v-card-text>
            <p class="mb-1 headline text-center font-weight-bold">
              Open from {{ restaurant.timings }}
            </p>
            <p class="mb-0 headline text-center font-weight-light">
              CALL US AT: {{restaurant.phone_numbers}}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-banner>
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import DetailChip from '@/components/RestaurantDetailChip.vue';

// Define the component in class-style
@Component({
  components: {
    DetailChip,
  },
  props: ['restaurant'],
})
export default class SearchComponent extends Vue {
  tagsList = [];

  rating = 0;

  /* eslint-disable @typescript-eslint/camelcase */

  beforeMount() {
    if (this.restaurant.highlights.length > 4) {
      this.tagList = this.restaurant.highlights.slice(0, 4).join(', ');
    } else {
      this.tagList = this.restaurant.highlights.join(', ');
    }
    this.rating = parseFloat(this.restaurant.user_rating.aggregate_rating, 10);
  }
}
</script>
