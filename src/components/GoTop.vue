<template>
  <div class="gotop d-none">
    <a href="#" @click.prevent="top"><img src="../assets/img/gotop.png" alt="gotop"></a>
  </div>
</template>

<script>
export default {
  name: 'GoTop',
  methods: {
    top() {
      document.documentElement.scrollTop = 0;
    },
  },
  mounted() {
    window.onscroll = (event) => {
      if (event.target.scrollingElement.scrollTop > 250) {
        const el = document.querySelector('.gotop');
        if (el !== null) {
          el.className = 'gotop d-block';
        }
      } else {
        const el = document.querySelector('.gotop');
        if (el !== null) {
          el.className = 'gotop d-none';
        }
      }
    };
  },
};
</script>

<style scoped>
.gotop {
  position: fixed;
  right: 50px;
  bottom: 120px;
  z-index: 99;
}
@media (max-width: 768px) {
  .gotop {
    right: 10px;
    bottom: 5px;
  }
  .gotop a {
    font-size: 35px;
  }
}
</style>
