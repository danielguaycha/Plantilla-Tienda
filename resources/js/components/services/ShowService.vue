<template>
    <div class="container">
        <div v-if="service">

            <div class="card text-white bg-dark mb-3 service-show">
                <figure>
                    <div :style="`background-image: url(/img/${service.img})`" class="card-img-top"></div>
                </figure>
                <div class="card-body">
                    <h5 class="card-title">{{ service.name }}</h5>
                    <div class="card-subtitle">{{ service.description }}</div>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item d-flex list-group-item-dark justify-content-between" v-for="s in service.plans" :key="s.name">
                        <b>
                            {{ s.name }}
                        </b>
                        <a :href="getLink(s)" class="btn btn-primary" target="_blank">
                            <i class="fa fa-shopping-cart mr-1"></i>
                            Comprar <b>$ {{ formatPrice(s.price) }}</b>
                        </a>
                    </li>
                </ul>
            </div>

        </div>
        <div v-else class="not-found">
            <h2>404</h2>
            <p>
                No encontramos lo que buscas
            </p>
        </div>
    </div>
</template>

<script>
import db from "../../plugins/db";
import config from "../../config";

export default {
    name: "ShowService",
    data: () => ({
        slug: null,
        service: null,
    }),
    created() {
        this.slug = this.$route.params.slug;
        this.service = db.servicios.find(e => e.slug === this.slug);
        console.log(this.service)
    },
    methods: {
        formatPrice(value) {
            let val = (value/1).toFixed(2).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },
        getLink(service){
            let text =  `Comprar *${this.service.name}*.\n Paquete ${service.name} - $${service.price}`
            return `https://wa.me/${config.phone}?text=${text}&lang=es`;
        }
    }
}
</script>

<style scoped>

</style>
