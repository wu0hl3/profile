<template>
  <div id="Banner" class="w-full h-screen z-10">
    <swiper :slides-per-view="1" class="w-full h-full" effect="fade" :autoplay="{ delay: 2000 }">
      <swiper-slide
        v-for="(item, index) in swiperList"
        :key="index"
        :virtualIndex="index"
        :class="item.bg"
        >{{ item }}</swiper-slide
      >
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { EffectFade, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.min.css';

SwiperCore.use([EffectFade, Autoplay]);

export default {
  name: 'Banner',
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    updateData() {
      setTimeout(() => {
        this.swiperList.push({
          name: 'banner5',
          bg: 'bg-gray-900',
        });
      }, 9000);
    },
  },
  data() {
    return {
      swiperList: [
        {
          name: 'banner1',
          bg: 'bg-gray-500',
        },
        {
          name: 'banner2',
          bg: 'bg-gray-600',
        },
        {
          name: 'banner3',
          bg: 'bg-gray-700',
        },
        {
          name: 'banner4',
          bg: 'bg-gray-800',
        },
      ],
    };
  },
  mounted() {
    this.updateData();
  },
};
</script>

<style>
</style>