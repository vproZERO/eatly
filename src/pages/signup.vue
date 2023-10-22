<template>
  <div class="flex justify-between">
    <div
      class="md:px-[96px] md:py-[48px] s:py-[31px] s:px-[25px] md:w-[880px] xs:w-[450px] s:w-[320px] s:mx-auto sm:mx-0"
    >
      <div
        class="flex items-center justify-between s:border-b-2 border-lightgray sm:border-b-0 s:mb-[100px] sm:mb-0"
      >
        <a
          class="block md:w-[46px] md:h-[42px] sm:w-[37px] sm:h-[34px] s:w-[45px] s:h-[42px] md:mb-[172px] sm:mb-[130px] s:mb-[30px]"
          href="#/home"
        >
          <img src="../assets/logo.png" alt="logo" />
        </a>
        <button
          v-on:click="isOpen = !isOpen"
          class="s:block sm:hidden s:w-[31px] s:h-[18px]"
        >
          <img src="../assets/menu.png" alt="menu icon" />
        </button>

        <div
          :class="isOpen ? 'block' : 'hidden'"
          class="fixed z-40 md:hidden bg-opacity-40 bg-lightgray top-0 bottom-0 left-0 right-0"
        >
          <div
            class="sm:w-[350px] s:w-[200px] overflow-y-auto bg-white fixed right-0 top-5 bottom-5 p-5 px-10"
          >
            <button
              v-on:click="isOpen = !isOpen"
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
              <a href="#/cart" class="block w-7 h-7 mx-auto mb-10">
                <img src="../assets/cart.svg" alt="cart shopping" />
              </a>
              <button
                class="py-[17px] px-[26px] rounded-[17px] block mx-auto mb-10 w-full"
              >
                <a
                  class="text-[17px] leading-[26px] font-bold capitalize text-gray"
                  href="#/signin"
                  >login</a
                >
              </button>
              <button
                class="bg-purple md:py-[17px] md:px-[26px] rounded-[17px] block mx-auto w-full s:px-[10px] s:py-[10px]"
              >
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
      <p
        class="mb-3 capitalize text-center lg:w-[289px] mx-auto lg:text-[35px] lg:leading-[44px] font-semibold xs:w-[218px] xs:text-[25px] xs:leading-[31px]"
      >
        Sign Up To eatly
      </p>
      <form
        class="mb-5 lg:w-[382px] bg-input md:rounded-[14px] mx-auto flex items-center md:gap-[33px] md:py-[24px] md:pl-[23px] s:w-[271px] s:gap-[23px] s:py-[17px] s:pl-[16px] s:rounded-[10px]"
      >
        <div>
          <img src="../assets/usericon.png" alt="email" />
        </div>

        <input
          class="bg-inherit"
          type="text"
          id="name"
          name="name"
          v-model="name"
          placeholder="Full Name"
        />
        <div v-if="validationErrors.name" >
          <small class="text-danger">
            {{ validationErrors?.name[0] }}
          </small>
        </div>
      </form>
      <form
        class="mb-5 lg:w-[382px] bg-input md:rounded-[14px] mx-auto flex items-center md:gap-[33px] md:py-[24px] md:pl-[23px] s:w-[271px] s:gap-[23px] s:py-[17px] s:pl-[16px] s:rounded-[10px]"
      >
        <div>
          <img src="../assets/email.png" alt="email" />
        </div>

        <input
          class="bg-inherit"
          type="email"
          name="email"
          id="email"
          v-model="email"
          placeholder="Email"
        />
        <div class="flex flex-col" v-if="validationErrors.email">
          <small class="text-danger">
            {{ validationErrors.email[0] }}
          </small>
        </div>
      </form>

      <form
        class="mb-5 lg:w-[382px] bg-input md:rounded-[14px] mx-auto flex items-center md:gap-[33px] md:py-[24px] md:pl-[23px] s:w-[271px] s:gap-[23px] s:py-[17px] s:pl-[16px] s:rounded-[10px]"
      >
        <div>
          <img src="../assets/lock.png" alt="email" />
        </div>

        <input
          class="bg-inherit"
          type="password"
          id="password"
          name="password"
          v-model="password"
          placeholder="Password"
        />
        <div v-if="validationErrors.password" class="flex flex-col">
          <small class="text-danger">
            {{ validationErrors?.password[0] }}
          </small>
        </div>
      </form>

      <div class="s:w-[271px] lg:w-[382px] mx-auto text-end mb-10">
        <a class="text-purple" href="#">Forget Password ?</a>
      </div>

      <button
      @click="registerAction()"
      :disabled="isSubmitting"
      type="button"
        class="mb-5 s:w-[271px] lg:w-[382px] mx-auto block bg-purple text-white rounded-[11px] py-[17px] px-[111px] mb-3"
      >
        Sign in
      </button>
      <div class="s:w-[271px] lg:w-[382px] mx-auto text-center mb-10">
        <p>
          Already Have An Account?
          <a class="text-purple" href="#/signin">Log In</a>
        </p>
      </div>
    </div>

    <div
      class="bg-purple lg:w-[663px] md:pt-[70px] md:pl-[78px] md:pr-[39px] md:pb-[58px] sm:w-[471px] s:hidden sm:block"
    >
      <div>
        <img src="../assets/biggroup.png" alt="big img group" />
      </div>
      <h3
        class="lg:text-[40px] lg:leading-[44px] text-white text-center font-extrabold sm:text-[28px] sm:leading-[31px] mb-5"
      >
        Find Foods With Love
      </h3>
      <p
        class="text-center text-white font-normal lg:text-[14px] lg:leading-[21px] sm:text-[9px] sm:leading-[14px] sm:w-[355px] mx-auto"
      >
        Eatly Is The Food Delivery Dashboard And Having More Than 2K+ Dishes
        Including Asian, Chinese, Italians And Many More. Our Dashboard Helps
        You To Manage Orders And Money.
      </p>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import Swal from 'sweetalert2'
export default {

  data: () => {
    return {
      isOpen: false,
      onOpen: false,
      name:'',
      email:'',
      password:'',
      validationErrors:{},
      isSubmitting:false,
    };
  },
  created() {
    if(localStorage.getItem('token') != "" && localStorage.getItem('token') != null){
      this.$router.push('/home')
      Swal.fire({
          icon: 'info',
          title: 'Siz registratsiyadan otkansiz!',
          showConfirmButton: false,
          timer: 1500
        })
    }
  },
  methods: {
    registerAction() {
      this.isSubmitting = true
      let payload = {
        name: this.name,
        email: this.email,
        password: this.password
      }
      axios.post('https://mock-api.binaryboxtuts.com/api/register', payload)
      .then(response => {
        localStorage.setItem('token' , response.data.token)
        this.$router.push('/home')
        
        return response
      })
      .catch(error => {
        this.isSubmitting = false
        if(error.response.data.errors != undefined) {
          this.validationErrors = error.response.data.errors
        }
        return error
      })
    }
  },
};
</script>
<style lang=""></style>
