<template lang="">
    <div>
        <Header/>
        <Products/>
        <Accordion/>
        <Footer/>
    </div>
</template>
<script>
import Header from '../layout/header.vue'
import Products from '../components/product.vue'
import Accordion from '../components/accordion.vue'
import Footer from '../layout/footer.vue'
export default {
    components: {
        Header,
        Products,
        Accordion,
        Footer
    }
}
</script>
<style lang="">
    
</style>