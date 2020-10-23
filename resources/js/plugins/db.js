export default {
    servicios : [
        {
            name: 'Netflix Premium UHD 4k',
            slug: 'netflix',
            description: 'Básico, Estándar, Premium',
            img: 'netflix.jpg',
            type: 1,
            price: 0,
            plans: [
                {name: 'Básico', price: 4.99},
                {name: 'Estándar', price: 6.99},
                {name: 'Premium', price: 9.99}
            ]
        },
        {
            name: 'Amazon Prime Video',
            description: '3 dispositivos',
            img: 'prime.jpg',
            type: 0,
            price: 5.99
        },
        {
            name: 'Spotify Premium',
            description: '1 dispositivo',
            img: 'spotify.png',
            type: 0,
            price: 4.99
        },
        {
            name: 'Youtube Premium',
            description: '3 dispositivos',
            img: 'yt.jpg',
            type: 0,
            price: 4.99
        },
        {
            name: 'IPTV',
            description: '1 a 3 Dispositivos',
            img: 'iptv.jpg',
            slug: 'iptv',
            type: 1,
            price: 0,
            plans: [
                {name: '1 Dispositivo', price: 4.99},
                {name: '2 Dispositivos', price: 7.99},
                {name: '3 Dispositivos', price: 9.99}
            ]
        },
        {
            name: 'Gifs Cards',
            description: 'Google Play & Play Station',
            img: 'gifs.jpg',
            type: 0,
            price: -1,
        },
        {
            name: 'Diamantes FreeFire',
            slug: 'diamantes-free-fire',
            description: 'Recargas desde 100 diamantes',
            img: 'freefire.jpg',
            type: 1,
            price: 0,
            plans: [
                {name: '100 +bonus 10', price: 1.75},
                {name: '310 +bonus 31', price: 4.50},
                {name: '520 +bonus 52', price: 6.50},
                {name: '1060 +bonus 106', price: 12.50},
            ]
        },
    ],
}
