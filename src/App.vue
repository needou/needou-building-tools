<template>
  <div id="app">
    <tower-crane
        :width="900"
        :height="500"
        url="/td.fbx"
        :load-ratio="13" :wind="12" :weight="34" :margin="11" :tower-height="100" :rotation="23" :inclination="24"/>
    <elevator />
  </div>
</template>

<script>
import {TowerCrane,Elevator} from './index'
//import {TowerCrane,Elevator} from '../dist/needou-building-tools.common.js'
export default {
  name: 'App',
  components: {
    TowerCrane,Elevator
  }
}
</script>

<style>
html,body{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  display: flex;
}
</style>
