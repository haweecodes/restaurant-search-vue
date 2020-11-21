<template>
  <v-container id='review-container'>
    <v-row>
      <v-col xs='12' md='12' col='12'>
        <h2 class='mb-0'>Menu</h2>
      </v-col>
    </v-row>
    <v-row v-if='!notAvailable'>
      <v-col cols='12'>
        <p class='title blue--text'>{{ menuObj.name }}</p>
      </v-col>
      <v-col
        cols='12'
        md='2'
        xs='12'
        v-for='(dish, i) in menuObj.dishes'
        :key='i'
      >
        <v-sheet
          color='white'
          elevation='1'
          class='d-flex flex-column align-center'
          height='120'
        >
         <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <p class='title text-center' v-bind="attrs"
              v-on="on">
                {{ dish.dish.name | longName }}
              </p>
          </template>
          <span>{{dish.dish.name}}</span>
        </v-tooltip>

          <p class='font-italic Caption text-center'>
            {{ dish.dish.price }}
          </p>
        </v-sheet>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col xs='12'>
        <NotFound :message="notFoundMsg"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';

// Define the component in class-style
@Component({
  props: ['resID'],
  filters: {
    longName(value) {
      if (!value) return '';
      if (value.split('').length > 30) {
        return `${value.split('').splice(0, 30).join('')}...`;
      }

      return value;
    },
  },
  components: {
    NotFound: () => import('@/components/NotFound.vue'),
  },
})
export default class MenuBox extends Vue {
  notAvailable = false;

  notFoundMsg = 'No Daily Menu Available'

  /* eslint-disable @typescript-eslint/camelcase */
  menuObj = {};

  beforeMount() {
    this.$store.dispatch('getDailyMenu', this.resID).then((res) => {
      if (res.status === 400 || res.data.daily_menus.length < 1) {
        this.notAvailable = true;
      } else {
        this.menuObj = res.data.daily_menus[0].daily_menu;
      }
    });
  }
}
</script>
