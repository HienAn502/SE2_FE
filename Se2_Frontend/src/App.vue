<template>
  <Header></Header>
  <Content>
    <router-view 
    ></router-view>
  </Content>
  <Footer></Footer>

</template>

<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Content from "./components/Content.vue";
</script>

<style scoped></style>
