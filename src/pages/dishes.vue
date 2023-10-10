<template lang="">
    <div>
        <Header/>
        <Products/>
        <Footer/>
    </div>
</template>
<script>
import Header from '../layout/header.vue'
import Products from '../components/product.vue'
import Footer from '../layout/footer.vue'
export default {
    components: {
        Header,
        Products,
        Footer
    }
}
</script>
<style lang="">
    
</style>