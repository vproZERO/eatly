<template>
    <div>
        <Header/>
            <h2 class="text-center text-xl capitalize mb-5">Create New Product</h2>
            <div class=" w-[1330px] mx-auto mb-10">
                <form class="border-[1px] rounded-md p-5 mb-5">
                    <label htmlFor="title">Title : </label>
                    <input v-model="product.title" type="text" id="title" name="title" class="rounded border-[1px] mr-3 mb-5  w-full">
                    
                    <label htmlFor="category">Category : </label>
                    <input v-model="product.category" type="text" id="category" name="category" class="border-[1px] mr-2 rounded w-full mb-5">
                    
                    <label htmlFor="price">Price : </label>
                    <input v-model="product.price" type="number" id="price" name="price" class="border-[1px] mr-3 rounded w-full mb-5">

                    <label htmlFor="time">Time : </label>
                    <input v-model="product.time" type="number" id="time" name="time" class="border-[1px] mr-2 rounded w-full mb-5">

                    <label htmlFor="rate">Rate : </label>
                    <input v-model="product.rate" type="text" id="rate" name="rate" class="border-[1px] rounded w-full mb-5">

                    <label htmlFor="img">Img : </label>
                    <input v-model="product.img" type="text" id="img" name="img" class="border-[1px] w-full mb-5 rounded mb-5">

                    <button @click="handleSave()" :disabled="isSaving" type="button" class="bg-transparent border hover:bg-blue text-blue font-semibold hover:text-white py-2 px-4  hover:border-transparent rounded">Save Product</button>
                </form>
            </div>
        <Footer/>
    </div>
</template>

<script>
import Header from '../layout/header.vue'
import Footer from '../layout/footer.vue'
import axios from 'axios'
import Swal from 'sweetalert2'
    export default {
        name: "Admin",
        components: {
            Header,
            Footer,
        },
        data() {
            return {
                product: {
                    title: '',
                    price: '',
                    category: '',
                    time: '',
                    rate: '',
                    img: ''
                },
                isSaving: false
            }
        },
        methods: {
            handleSave() {
                this.isSaving = true
                axios.post('http://localhost:5000/products', this.product)
                .then(response => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Product saved successfully!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    this.isSaving = false
                    this.product.title = ""
                    this.product.price = ""
                    this.product.category = ""
                    this.product.time = ""
                    this.product.rate = ""
                    this.product.img = ""
                    return response
                })
                .catch(error => {
                    Swal.fire({
                        icon: 'error',
                        title: 'An Error Occured!',
                        showConfirmButton: false,
                        timer:1500
                    })
                    return error
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>