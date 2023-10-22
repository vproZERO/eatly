<template lang="">
    <div>
        <Header/>
        <Product/>
        <Accordion/>
        <Footer/>
    </div>
</template>
<script>
import Header from '../layout/header.vue'
import Accordion from '../components/accordion.vue'
import Footer from '../layout/footer.vue'
import Product from '../components/product.vue'
export default {
    components: {
        Header,
        Accordion,
        Footer,
        Product
    }
}
</script>
<style lang="">
    
</style>