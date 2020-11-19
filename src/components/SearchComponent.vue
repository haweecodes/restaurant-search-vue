<template>
  <v-text-field v-model="searchText" placeholder="Search your restaurant"
    append-icon="search"
    outlined @keyup.enter="searchRestaurant"></v-text-field>
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import EventBus from '@/plugins/eventbus';
// Define the component in class-style
@Component
export default class SearchComponent extends Vue {
  searchText = '';

  // Methods will be component methods
  searchRestaurant() {
    if (this.searchText === '') return;
    if (this.$router.currentRoute.query.query === this.searchText) return;
    this.$store.dispatch('searchRestaurant', this.searchText);
    EventBus.$emit('NEW_SEARCH');
    this.$router.push({ name: 'Result', query: { query: this.searchText } });
    this.searchText = '';
    // search api
  }
}
</script>

<style>

</style>
