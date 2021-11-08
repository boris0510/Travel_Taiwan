<template>
  <Loading :active="isLoading"/>
  <div class="container p-0">
    <div class="title">
      <h2 v-if="current.city === ''">熱門活動</h2>
      <h2 v-else>{{ current.city }} 活動</h2>
      <p>
        各種不同的活動內容 <br />
        邀請您一銅來共襄盛舉！
      </p>
    </div>
  </div>
</template>

<script>
import getAuthorizationHeader from '../tools/AuthorizationHeader';

export default {
  name: 'Attractions',
  data() {
    return {
      current: {
        category: '',
        city: '',
        cityEng: '',
      },
      isLoading: false,
    };
  },
  methods: {
    getData(url, dataName) {
      this.isLoading = true;
      this.axios
        .get(url, {
          headers: getAuthorizationHeader(),
        })
        .then((response) => {
          this[dataName] = response.data;
          this.isLoading = false;
        });
    },
  },
  mounted() {
    this.emitter.on('sendData', (data) => {
      this.current = data;
    });
  },
};
</script>

<style scoped>
.container {
  max-width: 1440px;
}
.title {
  margin-top: 80px;
  margin-left: 25px;
}
.title h2 {
  font-weight: bold;
  font-size: 30px;
  color: #08a6bb;
}
.title p {
  font-weight: bold;
  font-size: 16px;
  color: #aeaeae;
}
</style>
