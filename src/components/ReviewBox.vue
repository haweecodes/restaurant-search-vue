<template>
  <v-container id="review-container">
    <v-row>
        <v-col xs="12" md="12" col="12">
          <h2 class="mb-0">Review Box</h2>
        </v-col>
      </v-row>
      <v-row  v-if="reviews.length > 0">
        <v-col v-for="(review, i) in reviews" :key="i">
          <v-sheet
            color="white"
            elevation="1"
            class="d-flex flex-column align-center"
            height="250">
            <v-avatar
              color="primary"
              size="56"
              class="mb-1"
            >
            <img
                :src="review.user.profile_image"
                :alt="review.user.name"
              >
            </v-avatar>
            <p class="title">
              {{review.user.name}}
            </p>
            <p class="font-italic Caption text-center">
              "
                {{review.review_text}}
              "
            </p>
            <v-rating
                    empty-icon="star_border"
                    full-icon="star"
                    half-icon="star_half"
                    length="5"
                    medium
                    readonly
                    :value="parseFloat(review.rating)"
                  ></v-rating>
          </v-sheet>
        </v-col>
      </v-row>
      <v-row v-else>
        <v-col xs="12">
           <v-banner  class="text-center">
            No Reviews Available
          </v-banner>
        </v-col>
      </v-row>
    <!-- <v-row>
      <v-col v-for="(review, i) in reviews" :key="i">
        <v-sheet
          color="white"
          elevation="1"
          class="d-flex flex-column align-center"
          height="250">
          <v-avatar
            color="primary"
            size="56"
            class="mb-1"
          >
           <img
              :key="review.user.profile_image"
              :alt="review.user.name"
            >
          </v-avatar>
          <p class="title">
            {{review.user.name}}
          </p>
          <p class="font-italic Caption text-center">
            "
              {{review.review_text}}
            "
          </p>
          <v-rating
                  empty-icon="star_border"
                  full-icon="star"
                  half-icon="star_half"
                  length="5"
                  medium
                  readonly
                  :value="parseFloat(review.rating)"
                ></v-rating>
        </v-sheet>
      </v-col>
    </v-row> -->
  </v-container>
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';

// Define the component in class-style
@Component({
  props: ['reviews'],
})
export default class ReviewBox extends Vue {
}
</script>
