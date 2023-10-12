<template>
  <div class="md:py-[48px]  md:px-[96px] s:py-[33px] s:px-[25px]">
    <div
      class="pb-[24px] flex items-center s:w-[332px] xs:w-[400px] md:w-[100%] s:mx-auto s:justify-between md:justify-between border-b-2 border-lightgray"
    >
      <a href="#/home" class="flex items-center gap-3">
        <div class="md:w-[46px] md:h-[42px] s:w-[40px] s:h-[35px]">
          <img src="../assets/logo.png" alt="logo" />
        </div>
        <h2 class="font-bold text-purple text-[21px] leading-[27px]">eatly</h2>
      </a>
      <ul class="flex items-center lg:gap-[53px] md:gap-[38px]  s:hidden md:flex">
        <li>
          <a
            class="text-gray text-[17px] leading-[26px] capitalize hover:text-purple font-medium"
            href="#/home"
            >home</a
          >
        </li>
        <li>
          <a
            class="text-gray text-[17px] leading-[26px] capitalize hover:text-purple font-medium"
            href="#/dishes"
            >dishes</a
          >
        </li>
      </ul>
      <div class="flex items-center  lg:gap-[20px] xl:gap-[35px] s:hidden md:flex">
        <a href="#/cart" class="w-7 h-7">
            <img src="../assets/cart.svg" alt="cart shopping">
        </a>
        <button class="py-[17px] px-[26px] rounded-[17px]">
          <a
            class="text-[17px] leading-[26px] font-bold capitalize text-gray"
            href="#/signin"
            >login</a
          >
        </button>
        <button class="bg-purple py-[17px] px-[26px] rounded-[17px] hover:bg-opacity-75">
          <a
            class="text-[17px] leading-[26px] font-bold capitalize text-white"
            href="#/signup"
            >sign up</a
          >
        </button>
      </div>

      <button v-on:click="isOpen = !isOpen" class="s:block md:hidden s:w-[31px] s:h-[18px]">
        <img src="../assets/menu.png" alt="menu icon" />
      </button>

      <div :class="isOpen ? 'block' : 'hidden'"
        class="fixed z-40  md:hidden  bg-opacity-40 bg-lightgray top-0 bottom-0 left-0 right-0"
      >
        <div
          class="sm:w-[350px] s:w-[200px] overflow-y-auto bg-white fixed right-0  top-5 bottom-5 p-5 px-10"
        >
          <button  v-on:click="isOpen = !isOpen"
            class="absolute top-3 right-5 s:w-7 s:h-7 rounded-full hover:bg-gray hover:text-white"
          >
            X
          </button>
          <ul class="w-full text-center mx-auto mt-16 mb-16">
            <li class="mb-16">
              <a
                class="text-gray md:text-[17px] md:leading-[26px] sm:text-[17px] xs:text-[12 px] s:text-[12px] capitalize hover:text-purple font-medium"
                href="#/home"
                >home</a
              >
            </li>
            <li>
              <a
                class="text-gray md:text-[17px] md:leading-[26px] sm:text-[17px] xs:text-[12 px] s:text-[12px] capitalize hover:text-purple font-medium"
                href="#/dishes"
                >dishes</a
              >
            </li>
          </ul>
          <div class="">
            <div class="w-7 h-7 mx-auto mb-10">
                <img src="../assets/cart.svg" alt="cart shopping">
            </div>
            <button class="py-[17px] px-[26px] rounded-[17px] block mx-auto mb-10 w-full">
              <a
                class="text-[17px] leading-[26px] font-bold capitalize text-gray"
                href="#/signin"
                >login</a
              >
            </button>
            <button class="bg-purple md:py-[17px] md:px-[26px] rounded-[17px] block mx-auto w-full s:px-[10px] s:py-[10px]">
              <a
                class="text-[17px] leading-[26px] font-bold capitalize text-white"
                href="#/signup"
                >sign up</a
              >
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>


export default {
    data : () => {
        return {
            isOpen : false,
            onOpen : false
        }
    }
};
</script>
<style lang=""></style>
