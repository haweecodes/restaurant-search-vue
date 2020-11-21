<template>
  <section>
    <v-container>
      <v-row>
        <v-col md="4" v-for="(category, i) in categories" :key="i"
          class="d-flex justify-center align-center">
          <v-sheet
            color="white"
            elevation="2"
            height="200"
            width="400"
            class="d-flex justify-center align-center"
          >
            <p class="title">{{category.name}}</p>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class Home extends Vue {
  async beforeMount() {
    await this.$store.dispatch('getCategories');
  }

  get categories() {
    return this.$store.state.categoryResult;
  }
}
</script>
