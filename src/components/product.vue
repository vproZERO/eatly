<template>
  <div class="md:py-[0px] md:px-[96px] s:py-[31px] s:px-[25px]">
    <div class="border-b-2 border-lightgray pb-[90px]">
      <h2
        class="mx-auto md:text-[45px] md:leading-[25px] capitalize font-semibold text-lightblack md:mb-[75px] md:w-[342px] sm:text-[32px] sm:leading-[18px] sm:mb-[53px] sm:w-[243px] s:text-[30px] s:leading-[36px] s:mb-[61px] s:w-[127px]"
      >
        Our Top <span class="text-purple">Dishes</span>
      </h2>

      <ul
        class="grid lg:grid-cols-5 md:grid-cols-3 md:gap-[30px] sm:gap-[21px] s:grid-cols-2 sm:grid-cols-2 s:w-[375px] mx-auto md:w-[750px] lg:w-[1240px]"
      >
        <li
          v-for="product in products"
          :key="product"
          class="relative bg-white md:w-[224px] md:rounded-[34px] md:pt-[23px] md:pb-[29px] md:pl-[5px] md:pr-[17px] md:mb-[30px] sm:mb-[21px] s:mb-[41px] sm:w-[159px] sm:rounded-[24px] sm:pt-[16px] sm:pb-[21px] sm:pl-[4px] sm:pr-[12px] s:w-[146px] s:rounded-[22px] s:pt-[15px] s:pb-[19px] s:pl-[3px] s:ml-[10px] xs:ml-[0px] s:pr-[11px]"
        >
          <button
            class="absolute md:right-[21px] sm:right-[15px] s:right-[14px]"
          >
            <img class="" src="../assets/hearth.png" alt="hearth img" />
          </button>
          <div class="md:w-[201px] sm:w-[143px] s:w-[131px]">
            <img src="" alt="product image" />
          </div>
          <p
            class="capitalize text-yellow bg-bgyellow text-center md:w-[63px] md:text-[11px] md:font-normal md:py-[2px] md:rounded-[4px] md:ml-[21px] sm:w-[41px] sm:text-[8px] sm:font-normal sm:rounded-[3px] sm:ml-[15px] s:w-[38px] s:text-[7px] s:font-normal s:rounded-[3px] s:ml-[14px]"
          >
            {{ product.category }}
          </p>
          <h3
            class="capitalize text-lightblack font-semibold md:ml-[21px] md:text-[23px] md:leading-[37px] sm:ml-[15px] sm:text-[16px] sm:leading-[26px] s:ml-[14px] s:text-[15px] s:leading-[24px] mb-20"
          >
            {{ product.title }}
          </h3>
          <div
            class="flex items-center md:gap-[5px] sm:gap-[4px] s:gap-[3px] md:ml-[21px] sm:ml-[15px] s:ml-[14px] mb-5 absolute bottom-10"
          >
            <p
              class="text-lightgray font-normal md:text-[17px] md:leading-[23px] sm:text-[12px] sm:leading-[16px] s:text-[11px] s:leading-[15px]"
            >
              15min
            </p>
            <div class="md:w-[15px] sm:w-[10px] s:w-[10px]">
              <img src="../assets/star.png" alt="star image" />
            </div>
            <p
              class="text-lightgray font-normal md:text-[17px] md:leading-[23px] sm:text-[12px] sm:leading-[16px] s:text-[11px] s:leading-[15px]"
            >
              {{ product.rating.rate }}
            </p>
          </div>
          <div
            class="md:ml-[21px] sm:ml-[15px] s:ml-[14px] s:w-[113px] sm:w-[123px] md:w-[174px] flex items-center justify-between absolute bottom-2"
          >
            <p
              class="text-lightblack font-bold md:text-[25px] md:leading-[40px] sm:text-[18px] sm:leading-[28px] s:text-[16px] s:leading-[26px]"
            >
              ${{ product.price
              }}<span
                class="text-lightgray md:text-[18px] sm:text-[13px] s:text-[12px]"
                >.99</span
              >
            </p>
            <router-link :to="`/cart/${product.id}`"
              class="bg-lightblack hover:opacity-50 md:rounded-[8px] md:py-[10px] md:px-[14px] sm:rounded-[6px] sm:py-[8px] sm:px-[10px] s:rounded-[5px] s:py-[7px] s:px-[8px]"
            >
              <img
                class="md:w-[15px] md:h-[15px] sm:w-[10px] sm:h-[10px] s:w-[9px] s:h-[9px]"
                src="../assets/plus.png"
                alt="plus image"
              />
            </router-link>
          </div>
        </li>
        <button class="text-lightblack opacity-[70%] ">View All </button>
      </ul>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      products: [],
    };
  },
  created() {
    this.fetchProjectList();
  },
  methods: {
    async fetchProjectList() {
      await axios
        .get("https://fakestoreapi.com/products")
        .then((res) => {
          this.products = res.data;
          return res;
        })
        .catch((error) => {
          return error;
        });
    },
  },
};
</script>
<style lang="">
</style>