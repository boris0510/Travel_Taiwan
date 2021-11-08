<template>
  <GoTop />
  <Navber />
  <Banner />
  <Router-view/>
  <Footer />
</template>
<script>
import Navber from '@/components/Navber.vue';
import Banner from '@/components/Banner.vue';
import Footer from '@/components/Footer.vue';
import GoTop from '@/components/GoTop.vue';

export default {
  name: 'Attractions',
  components: {
    Navber,
    Banner,
    Footer,
    GoTop,
  },
};
</script>

<style lang="scss">
@import './assets/scss/all.scss';
body{
  font-family: 'Roboto', sans-serif;
}
</style>
