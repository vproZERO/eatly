<template>
  <div>
    <Header />
    <h2 class="text-center">Cart Product</h2>
    <ul class="mx-auto lg:w-[692px] sm:w-[492px] s:w-[317px] mb-[210px]">
      <li
        class="w-full flex items-start justify-between rounded-xl shadow-xl mb-[42px] lg:py-[23px] lg:px-[10px]"
      >
        <div class="flex items-center gap-[10px]">
          <div class="lg:w-[98px] sm:w-[70px] s:w-[59px]">
            <img src="../assets/logo.png" alt="" />
          </div>
          <div>
            <h2
              class="text-lightblack lg:text-[22px] lg:leading-[30px] sm:text-[15px] sm:leading-[21px] s:text-[13px] s:leading-[18px] font-semibold"
            >
              {{ product.title }}
            </h2>
            <h4
              class="text-lightblack font-semibold lg:text-[18px] lg:leading-[25px] sm:text-[12px] sm:leading-[18px] s:text-[10px] s:leading-[15px]"
            >
              ${{ product.price }}
            </h4>
          </div>
        </div>
        <div>
          <div class="flex items-center gap-[8px]">
            <button @click="decrement" class="decrement py-[13px] px-[10px] rounded-[10px]">
              <span class="w-[8px] block h-[1.5px] bg-lightblack"></span>
            </button>
            <span
              class="lg:text-[17px] lg:leading-[24px] sm:text-[12px] sm:leading-[17px] s:text-[10px] s:leading-[14px] text-lightblack font-normal"
              >{{count}}</span
            >
            <button
            @click="increment"
              class="decrement bg-lightblack py-[3px] px-[10px] rounded-[10px]"
            >
              <span class="text-white">+</span>
            </button>
          </div>
          <p
            class="text-lightblack font-semibold lg:text-[18px] lg:leading-[25px] sm:text-[12px] sm:leading-[18px] s:text-[10px] s:leading-[15px] text-center mt-"
          >
          </p>
        </div>
      </li>
    </ul>

    <div class="mx-auto lg:w-[692px] sm:w-[492px] s:w-[317px]">
      <div
        class="flex items-center justify-between border-b-[1px] border-lightgray border-dashed pb-[13px] mb-[15px]"
      >
        <h3
          class="font-normal md:text-[20px] md:leading-[23px] text-lightblack opacity-[70%] s:text-[12px] s:leading-[14px]"
        >
          Subtotal
        </h3>
        <p
          class="font-normal md:text-[20px] md:leading-[23px] text-lightblack opacity-[70%] s:text-[12px] s:leading-[14px]"
        >
          $58.96
        </p>
      </div>
      <div
        class="flex items-center justify-between border-b-[1px] border-lightgray border-dashed pb-[13px] mb-[15px]"
      >
        <h3
          class="font-normal md:text-[20px] md:leading-[23px] text-lightblack opacity-[70%] s:text-[12px] s:leading-[14px]"
        >
          Delivery
        </h3>
        <p
          class="font-normal md:text-[20px] md:leading-[23px] text-lightblack opacity-[70%] s:text-[12px] s:leading-[14px]"
        >
          $3.59
        </p>
      </div>
      <div class="flex items-center justify-between pb-[13px] mb-[61px]">
        <h3
          class="md:text-[20px] md:leading-[23px] text-lightblack font-extrabold s:text-[12px] s:leading-[14px]"
        >
          Total
        </h3>
        <p
          class="md:text-[20px] md:leading-[23px] text-lightblack font-extrabold s:text-[12px] s:leading-[14px]"
        >
          $62.55
        </p>
      </div>
      <button
        type="button"
        class="text-center w-full bg-purple text-white rounded-[15px] font-semibold lg:text-[20px] lg:leading-[30px] lg:py-[24px] sm:text-[14px] sm:leading-[21px] sm:py-[17px] s:text-[12px] s:leading-[18px] s:py-[14px]"
      >
        Review Payment
      </button>
    </div>
    <Get />
    <Footer />
  </div>
</template>
<script>
import Header from "../layout/header.vue";
import Get from "../components/get.vue";
import Footer from "../layout/footer.vue";
import axios from "axios";
import Swal from "sweetalert2";

export default {
  name: "cart",
  components: {
    Header,
    Get,
    Footer,
  },
  
  data() {
    return {
      count: 0,
      product: {
        id: "",
        title: "",
        category: "",
        price: "",
        description: "",
      },
      isSaving: false,
    };
  },
  methods: {
    increment() {
      this.count ++
    },
    decrement() {
      this.count --
    }
  },
  created() {
    console.log(this.count);
    const id = this.$route.params.id;
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        let productInfo = response.data;
        this.product.id = productInfo.id;
        this.product.category = productInfo.category;
        this.product.price = productInfo.price;
        this.product.title = productInfo.title;
        this.product.description = productInfo.description;
        return response;
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "An Error Occured!",
          showConfirmButton: false,
          timer: 1500,
        });
        return error;
      });
  },
};
</script>
<style scoped>
.decrement {
  border: 1px solid #323142;
}
</style>