<template>
    <div class="container">
        <div class="row">
            <div class="col-6 col-sm-6 col-md-4 col-xl-3" v-for="s in servicios" :key="s.name">
                <service :service="s"></service>
            </div>
        </div>
    </div>
</template>

<script>
import Service from "./Service";
import db from "../../plugins/db";
export default {
    name: "ListServices",
    components: {Service},
    data: () => ({
        servicios: db.servicios
    }),
}
</script>

<style scoped>

</style>
