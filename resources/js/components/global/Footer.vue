<template>
    <footer>
        <small>Todos los derechos reservados por el autor</small>
        <small>| {{ appName }}  {{ year}}</small>
    </footer>
</template>

<script>
import config from "../../config";

export default {
    name: "Footer",
    data: () => ({
        year: 2020,
        appName: config.appName
    }),
    created() {
        this.year = new Date().getFullYear();
    }
}
</script>

<style scoped>

</style>
