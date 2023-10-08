<template>
    <div>
        <Header/>
        <Hero/>
        <Featuress/>
        <Download/>
        <Product/>
        <Chicken/>
        <Get/>
        <Footer/>
    </div>
</template>
<script>
import Header from '../layout/header.vue'
import Hero from '../components/hero.vue'
import Featuress from '../components/featuress.vue'
import Download from '../components/download.vue'
import Product from '../components/product.vue'
import Chicken from '../components/chicken.vue'
import Get from '../components/get.vue'
import Footer from '../layout/footer.vue'
export default {
    components: {
        Header,
        Hero,
        Featuress,
        Download,
        Product,
        Chicken,
        Get,
        Footer,
    }
}
</script>
<style lang="">
    
</style>