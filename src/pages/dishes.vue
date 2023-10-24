<template lang="">
    <div>
        <Header/>
        <Product/>
        <Accordion/>
        <Footer/>
    </div>
</template>
<script>
import Header from "../layout/header.vue";
import Accordion from "../components/accordion.vue";
import Product from '../components/product.vue'
import Footer from "../layout/footer.vue";
export default {
  components: {
    Header,
    Product,
    Accordion,
    Footer,
  },
};
</script>
<style lang="">
</style>