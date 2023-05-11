<template>
    <div class="heroes">
        <h2>My Heroes</h2>

        <div>
        <label for="new-hero">Hero name: </label>
        <input id="new-hero" />
        
        <!-- (click) passes input value to add() and then clears the input -->
        <button type="button" class="add-button">
            Add hero
        </button>
        </div>

        <ul class="heroes">
            <li v-for="hero in heroes" :key="hero.id">
                <a routerLink="/detail/{{hero.id}}">
                    <span class="badge">{{hero.id}}</span> {{hero.name}}
                </a>
                <!-- <button type="button" class="delete" title="Delete Hero"
                v-on:click="delete(hero)">x</button> -->
            </li>
        </ul>
    </div>
  </template>
  
  <script lang="ts">
  import { Hero } from '@/models/hero';
import { Options, Vue } from 'vue-class-component';
  
  @Options({
    components: {
    },
  })
  export default class Heroes extends Vue {
    heroes: Hero[] = [];


  }
  </script>

<style>
.heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  
  .heroes li {
    display: flex;
  }
  
  .heroes button {
    flex: 1;
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: 0;
    border-radius: 4px;
    display: flex;
    align-items: stretch;
    height: 1.8em;
  }
  
  .heroes button:hover {
    color: #2c3a41;
    background-color: #e6e6e6;
    left: .1em;
  }
  
  .heroes button:active {
    background-color: #525252;
    color: #fafafa;
  }
  
  .heroes button.selected {
    background-color: black;
    color: white;
  }
  
  .heroes button.selected:hover {
    background-color: #505050;
    color: white;
  }
  
  .heroes button.selected:active {
    background-color: black;
    color: white;
  }
  
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #405061;
    line-height: 1em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
  
  .heroes .name {
    align-self: center;
  }
</style>