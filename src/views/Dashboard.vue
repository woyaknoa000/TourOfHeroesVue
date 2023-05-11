<template>
  <div>
    <h2>Top Heroes</h2>
    <div class="heroes-menu">
      <router-link v-for="hero in heroes" :key="hero.id" to="/heroes">{{ hero.name }}</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import {Hero} from '@/models/hero'

@Options({
  components: {
  },
})
export default class Dashboard extends Vue {
  heroes: Hero[] = [{name: 'John', id: 0}, {name: 'Greg', id: 1}];
}
</script>

<style>
/* DashboardComponent's private CSS styles */

h2 {
    text-align: center;
  }
  
  .heroes-menu {
    padding: 0;
    margin: auto;
    max-width: 1000px;
  
    /* flexbox */
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: flex-start;
    align-items: flex-start;
  }
  
  a {
    background-color: #3f525c;
    border-radius: 2px;
    padding: 2rem;
    font-size: 1.2rem;
    text-decoration: none;
    display: inline-block;
    color: #fff;
    text-align: center;
    width: 100%;
    min-width: 70px;
    margin: .5rem auto;
    box-sizing: border-box;
  
    /* flexbox */
    order: 0;
    flex: 0 1 auto;
    align-self: auto;
  }
  
  @media (min-width: 600px) {
    a {
      width: 18%;
      box-sizing: content-box;
    }
  }
  
  a:hover {
    background-color: #000;
  }
</style>