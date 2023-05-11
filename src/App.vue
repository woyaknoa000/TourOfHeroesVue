<template>
  <nav>
    <router-link to="/">Dashboard</router-link>
    <router-link to="/heroes">Heroes</router-link>
  </nav>
  <router-view/>
</template>

<style lang="scss">
  nav a {
      padding: 10px;
      font-weight: 700;
  }
</style>
