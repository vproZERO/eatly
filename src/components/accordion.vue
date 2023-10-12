<template>
  <div class="md:py-[100px] md:px-[96px] s:py-[31px] s:px-[25px]">
    <h2
      class="mb-[67px] text-center mx-auto font-semibold lg:w-[408px] lg:text-[45px] lg:leading-[54px] sm:w-[290px] sm:text-[32px] sm:leading-[38px] s:w-[215px] s:text-[23px] s:leading-[28px]"
    >
      Frequently Asked <span class="text-purple">Questions</span>
    </h2>

    <div class="faqs">
      <FAQVue
        v-for="(faq, i) in faqs"
        :faq="faq"
        :index="i"
        :key="i"
        :open="faq.open"
        @toggleOpen=" toggleOpen"
      />
    </div>
  </div>
</template>
<script>
import FAQVue from "./FAQ.vue";
export default {
  components: {
    FAQVue,
  },
  data: () => {
    return {
      faqs: [
        {
          question: "How long does delivery take?",
          answer: `You Can Get Information By Contacting Our Support Team Have 24/7 Service. What’s The Difference Between Free And Paid Plan ?`,
          open: false,
        },
        {
          question: "How Does It Work ?",
          answer: `You Can Get Information By Contacting Our Support Team Have 24/7 Service. What’s The Difference Between Free And Paid Plan ?`,
          open: false,
        },
        {
          question: "How does your food delivery service work?",
          answer: `You Can Get Information By Contacting Our Support Team Have 24/7 Service. What’s The Difference Between Free And Paid Plan ?`,
          open: false,
        },
        {
          question: "What payment options do you accept?",
          answer: `You Can Get Information By Contacting Our Support Team Have 24/7 Service. What’s The Difference Between Free And Paid Plan ?`,
          open: false,
        },
        {
          question: "Do you offer discounts or promotions?",
          answer: `You Can Get Information By Contacting Our Support Team Have 24/7 Service. What’s The Difference Between Free And Paid Plan ?`,
          open: false,
        },
      ],
    };
  },
  methods: {
    toggleOpen: function (index) {
      this.faqs = this.faqs.map((faq, i) => {
        if (index === i) {
          faq.open = !faq.open;
        }else{
                faq.open = false
        }

        return faq;
      });
    },
  },
};
</script>
<style>

    .faq .question {
        position: relative;
        transition: all 0.4s linear;
    }
    .faq.open .question{
        margin-block: 15px;
    }
    .faq.open .question::after{
        transform: translateY(-50%) rotate(180deg);
        background-image: url('../assets/minus.svg');
    }

    .faq.open .answer{
        opacity: 1;
        max-height: 1000px;
    }
    .faq .question::after{
        content: '';
        position: absolute;
        top: 50%;
        right: 0px;
        transform: translateY(-50%) rotate(0deg);
        width: 30px;
        height: 30px;
        background-image: url('../assets/plus.svg');
        background-position: center;
        background-size: contain;



        transition: all 0.4s linear;
    }
    .faq .answer{
        opacity: 0;
        overflow-y: hidden;
        max-height: 0;
        transition: all 0.4s ease-out;
    }


</style>
