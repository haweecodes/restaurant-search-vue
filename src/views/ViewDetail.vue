<template>
  <section>
    <v-container>
      <!-- banner -->
      <DetailBanner :restaurant="restaurant"/>

      <!-- menu -->
      <MenuBox :resID="restaurant.id"/>

      <!-- customer review -->
      <ReviewBox :reviews="topReviews"  />
    </v-container>
  </section>
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import DetailBanner from '@/components/DetailBanner.vue';
import ReviewBox from '@/components/ReviewBox.vue';
import MenuBox from '@/components/MenuBox.vue';

// Define the component in class-style
@Component({
  components: {
    DetailBanner,
    ReviewBox,
    MenuBox,
  },
})
export default class SearchComponent extends Vue {
  restaurant = {};

  /* eslint-disable @typescript-eslint/camelcase */
  topReviews = [
    {
      rating: '5',
      review_text: 'The best latte I\'ve ever had. It tasted a little sweet',
      id: '24127336',
      rating_color: '305D02',
      review_time_friendly: '2 months ago',
      rating_text: 'Insane!',
      timestamp: '1435507367',
      likes: '0',
      user: {
        name: 'John Doe',
        zomato_handle: 'John',
        foodie_level: 'Super Foodie',
        foodie_level_num: '9',
        foodie_color: 'f58552',
        profile_url: 'https://www.zomato.com/john',
        profile_deeplink: 'zoma.to/u/1170245',
        profile_image: 'https://cdn.vuetifyjs.com/images/john.jpg',
      },
      comments_count: '0',
    },
    {
      rating: '5',
      review_text: 'The best latte I\'ve ever had. It tasted a little sweet',
      id: '24127336',
      rating_color: '305D02',
      review_time_friendly: '2 months ago',
      rating_text: 'Insane!',
      timestamp: '1435507367',
      likes: '0',
      user: {
        name: 'John Doe',
        zomato_handle: 'John',
        foodie_level: 'Super Foodie',
        foodie_level_num: '9',
        foodie_color: 'f58552',
        profile_url: 'https://www.zomato.com/john',
        profile_deeplink: 'zoma.to/u/1170245',
        profile_image: 'https://cdn.vuetifyjs.com/images/john.jpg',
      },
      comments_count: '0',
    },
    {
      rating: '5',
      review_text: 'The best latte I\'ve ever had. It tasted a little sweet',
      id: '24127336',
      rating_color: '305D02',
      review_time_friendly: '2 months ago',
      rating_text: 'Insane!',
      timestamp: '1435507367',
      likes: '0',
      user: {
        name: 'John Doe',
        zomato_handle: 'John',
        foodie_level: 'Super Foodie',
        foodie_level_num: '9',
        foodie_color: 'f58552',
        profile_url: 'https://www.zomato.com/john',
        profile_deeplink: 'zoma.to/u/1170245',
        profile_image: 'https://cdn.vuetifyjs.com/images/john.jpg',
      },
      comments_count: '0',
    },
    {
      rating: '3',
      review_text: 'The best latte I\'ve ever had. It tasted a little sweet',
      id: '24127336',
      rating_color: '305D02',
      review_time_friendly: '2 months ago',
      rating_text: 'Insane!',
      timestamp: '1435507367',
      likes: '0',
      user: {
        name: 'John Doe',
        zomato_handle: 'John',
        foodie_level: 'Super Foodie',
        foodie_level_num: '9',
        foodie_color: 'f58552',
        profile_url: 'https://www.zomato.com/john',
        profile_deeplink: 'zoma.to/u/1170245',
        profile_image: 'https://cdn.vuetifyjs.com/images/john.jpg',
      },
      comments_count: '0',
    },
    {
      rating: '4.5',
      review_text: 'The best latte I\'ve ever had. It tasted a little sweet',
      id: '24127336',
      rating_color: '305D02',
      review_time_friendly: '2 months ago',
      rating_text: 'Insane!',
      timestamp: '1435507367',
      likes: '0',
      user: {
        name: 'John Doe',
        zomato_handle: 'John',
        foodie_level: 'Super Foodie',
        foodie_level_num: '9',
        foodie_color: 'f58552',
        profile_url: 'https://www.zomato.com/john',
        profile_deeplink: 'zoma.to/u/1170245',
        profile_image: 'https://cdn.vuetifyjs.com/images/john.jpg',
      },
      comments_count: '0',
    },
  ];

  beforeMount() {
    this.restaurant = JSON.parse(localStorage.getItem('restaurant'));
    // this.restaurant = this.$store.state.selectedRestaurant;

    // this.topReviews = this.restaurant.all_reviews.reviews.slice(0, 4);
  }
}
</script>

<style lang="scss">
.v-rating {
  margin-right: 2px;
  button {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
}
</style>
