<template>

    <div class="app-container">
        <div class="content">
            <nav-bar/>
            <router-view></router-view>
        </div>
        <Footer />
    </div>

</template>

<script>
import NavBar from "../components/global/NavBar";
import Footer from "../components/global/Footer";
export default {
name: "App.vue",
    components: {Footer, NavBar}
}
</script>

<style scoped>

</style>
