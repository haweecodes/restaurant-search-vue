<template>
  <v-banner class='text-center error white--text'>
    {{message}}
  </v-banner>
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';

// Define the component in class-style
@Component({
  props: ['message'],
})
export default class NotFound extends Vue {
}
</script>
