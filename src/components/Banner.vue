<template>
  <div class="banner">
    <div
      id="carouselExampleIndicators"
      class="container carousel slide p-0"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="@/assets/img/banner1.jpg" class="d-block w-100" alt="banner" />
        </div>
        <div class="carousel-item">
          <img src="@/assets/img/banner2.jpg" class="d-block w-100" alt="banner" />
        </div>
        <div class="carousel-item">
          <img src="@/assets/img/banner3.jpg" class="d-block w-100" alt="banner" />
        </div>
        <div class="carousel-item">
          <img src="@/assets/img/banner4.jpg" class="d-block w-100" alt="banner" />
        </div>
      </div>
    </div>
    <div class="options">
      <div class="options-title">
        <h2>Welcome to Travel Taiwan</h2>
      </div>
      <div class="options-tool">
        <select class="category" v-model="currentCategory">
          <option value="" disabled>類別</option>
          <option value="attractions">景點導覽</option>
          <option value="activity">觀光活動</option>
        </select>
        <select class="city" v-model="currentCity">
          <option value="" disabled>所有縣市</option>
          <option :value="item.City" v-for="item in city" :key="item">{{ item.CityName }}</option>
        </select>
        <button type="bitton"><i class="fas fa-search"></i></button>
      </div>
    </div>
  </div>
</template>

<script>
import getAuthorizationHeader from '../tools/AuthorizationHeader';

export default {
  data() {
    return {
      city: [],
      currentCity: '',
      currentCategory: '',
    };
  },
  methods: {
    getData(url, dataName) {
      this.axios
        .get(url, {
          headers: getAuthorizationHeader(),
        })
        .then((response) => {
          this[dataName] = response.data;
        });
    },
  },
  mounted() {
    this.getData('https://gist.motc.gov.tw/gist_api/V3/Map/Basic/City?$format=JSON', 'city');
  },
};
</script>

<style scoped>
.container {
  max-width: 1440px;
}
.banner {
  position: relative;
  margin-top: -15px;
}
.carousel-indicators {
  margin-bottom: 50px;
}
.options {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.options-tool {
  display: flex;
  justify-content: center;
  align-items: center;
}
.options .options-title h2 {
  text-align: center;
  font-style: italic;
  font-weight: bold;
  font-size: 48px;
  color: #ffffff;
  text-shadow: 10px 8px 12px rgba(0, 0, 0, 0.37);
}
.options .options-tool .category {
  width: 190px;
  height: 48px;
  background: #ffffff;
  box-shadow: 4px 4px 11px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  text-align: center;
  color: #6f7789;
  outline: none;
}
.options .options-tool .category option {
  color: #6f7789;
}
.options .options-tool .city {
  width: 297px;
  height: 48px;
  margin-left: 20px;
  background: #ffffff;
  box-shadow: 4px 4px 11px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  text-align: center;
  color: #6f7789;
  outline: none;
}
.options .options-tool .city option {
  color: #6f7789;
}
.options .options-tool button {
  height: 42px;
  width: 42px;
  font-size: 24px;
  background: #08a6bb;
  border-radius: 8px;
  color: #ffffff;
  border: none;
  margin-left: 20px;
}
.options .options-tool button:hover {
  color: #08a6bb;
  background: #ffffff;
}
</style>
