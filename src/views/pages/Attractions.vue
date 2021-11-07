<template>
  <GoTop />
  <Navber />
  <Banner />
  <Footer />
</template>
<script>
// import getAuthorizationHeader from '../tools/AuthorizationHeader';
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
