<template>
  <div
    @click="$emit('toggleOpen', index)"
    :class="open ? 'faq open' : 'faq'"
    class="faq border-b-[1px] border-lightgray mb-[28px]"
  >
    <div
      class="question font-semibold lg:text-[23px] lg:leading-[59px] sm:text-[16px] sm:leading-[42px] s:text-[12px] s:leading-[31px] s:mb-[13px]"
    >
      {{ faq.question }}
    </div>
    <div
      class="answer font-normal text-gray lg:text-[20px] lg:leading-[32px] sm:text-[14px] sm:leading-[22px] s:text-[11px] s:leading-[17px] s:w-[235px] sm:w-[560px] lg:w-[788px] pb-[15px]"
    >
      {{ faq.answer }}
    </div>
  </div>
</template>
<script>
export default {
  name: "FAQ",
  props: ["faq", "index", "open"],
};
</script>
<style lang="">
</style>