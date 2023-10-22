<template lang="">
    <div>
        <Header/>
        <Accordion/>
        <Footer/>
    </div>
</template>
<script>
import Header from '../layout/header.vue'
import Accordion from '../components/accordion.vue'
import Footer from '../layout/footer.vue'
export default {
    components: {
        Header,
        Accordion,
        Footer
    }
}
</script>
<style lang="">
    
</style>