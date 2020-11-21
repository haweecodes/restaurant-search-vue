<template>
   <v-chip
    class="my-1 text-justify"
    :color="color"
    label
    text-color="white"
    >
      <v-icon left>
        {{icon}}
      </v-icon>
      {{label}}
    </v-chip>
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';

// Define the component in class-style
@Component({
  props: ['label', 'icon', 'color'],
})
export default class RestaurantDetailChip extends Vue {
}
</script>
