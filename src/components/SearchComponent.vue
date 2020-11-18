<template>
  <v-text-field v-model="searchText" placeholder="Search your restaurant"
    outlined @keyup.enter="searchRestaurant"></v-text-field>
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';

// Define the component in class-style
@Component
export default class SearchComponent extends Vue {
  searchText = '';

  // Methods will be component methods
  searchRestaurant() {
    this.$store.dispatch('searchRestaurant', this.searchText);
    console.log(process.env);
    // search api
  }
}
</script>

<style>

</style>
