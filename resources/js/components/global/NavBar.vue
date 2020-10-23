<template>
    <div>
        <div class="social-nt">
            <a href="mailto:digitalstore593@gmail.com"><i class="fa fa-envelope"></i>digitalstore593@gmail.com</a>
            <a href="https://wa.me/message/2W57BMQQMXHWJ1" target="_blank"><i class="fab fa-whatsapp"></i>+593980727838</a>
            <a href="https://www.facebook.com/DigitalStoreEcu/" target="_blank"><i class="fab fa-facebook"></i>DigitalStoreEc</a>
        </div>
        <nav class="navbar navbar-expand-sm navbar-dark bg-primary">
            <router-link class="navbar-brand custom-brand" to="/">
                <img src="/img/logo.jpg" alt="" height="30">
                {{ appName }}
            </router-link>
            <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId"
                    aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation"></button>

            <div class="collapse navbar-collapse" id="collapsibleNavId">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">

                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
import config from "../../config";

export default {
    name: "NavBar",
    data: () => ({
        appName: config.appName
    }),
}
</script>

<style scoped>

</style>
