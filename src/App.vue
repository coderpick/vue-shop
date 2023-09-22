<script setup>
import Navbar from "./components/Navbar.vue"
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"
</script>
<template>
  <!-- Navigation-->
    <navbar></navbar>
    <!-- Header-->
    <Header />
    <!-- Products-->
    <router-view :key="$route.fullPath"></router-view>
    <!-- Footer-->
    <Footer />
</template>

<style scoped>

</style>
