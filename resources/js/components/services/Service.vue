<template>
    <div class="card text-white bg-dark service p-0">
        <figure>
            <div :style="`background-image: url(/img/${service.img})`" class="card-img-top" alt="freefire"></div>
        </figure>
        <div class="card-body">
            <h5 class="card-title">{{ service.name }}</h5>
            <p class="card-text">{{ service.description}}</p>

            <router-link :to="{name: 'service', params: {slug: service.slug}}"
                class="btn btn-secondary btn-block" v-if="service.type === 1">Ver planes</router-link>
            <a :href="getUrl(service)" target="_blank" class="btn btn-primary btn-block" v-else><i class="fa fa-shopping-cart mr-1"></i>Comprar <b v-if="service.price > 0">${{service.price}}</b></a>
        </div>
    </div>
</template>

<script>
import config from "../../config";

export default {
    name: "Service",
    props: {
        service: {
            type: Object|Array,
            required: true
        },
    },
    methods: {
        getUrl(service){
            let text =  `Comprar ${service.name} ${service.price < 0 ? '' : ' - $'+service.price}`
            return `https://wa.me/${config.phone}?text=${text}&lang=es`;
        }
    }
}
</script>

<style scoped>

</style>
