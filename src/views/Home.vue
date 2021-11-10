<template>
  <Loading :active="isLoading" />
  <div class="container">
    <div class="attractions">
      <div class="title">
        <h2>熱門景點</h2>
        <p>
          台灣的各個美景，都美不勝收。<br />
          等你一同來發現這座寶島的奧妙！
        </p>
      </div>
      <div class="row row-cols-2 row-cols-md-4 g-4">
        <div class="col" v-for="item in attractions" :key="item.ID">
          <div class="card h-100">
            <img
              :src="item.Picture.PictureUrl1"
              v-if="!JSON.stringify(item.Picture) === '{}' || 'PictureUrl1' in item.Picture"
              class="card-img-top"
              alt="attractions-img"
            />
            <img src="../assets/img/test.png" class="card-img-top" v-else alt="attractions-img" />
            <div class="card-body">
              <h3>{{ item.Name }}</h3>
              <span v-if="'OpenTime' in item"
                ><i class="far fa-clock"></i>開放時間 : {{ item.OpenTime }}</span
              >
              <p><i class="fas fa-map-marker-alt"></i>{{ item.Address }}</p>
              <p v-if="'Phone' in item"><i class="fas fa-phone"></i>電話 : {{ item.Phone }}</p>
            </div>
            <div class="card-footer">
              <div class="card-btn">
                <button type="button" @click="openModal(item)">了解更多</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="activity">
      <div class="title">
        <h2>熱門活動</h2>
        <p>
          各種不同的活動內容 <br />
          邀請您一銅來共襄盛舉！
        </p>
      </div>
      <div class="row row-cols-2 row-cols-md-4 g-4">
        <div class="col" v-for="item in activity" :key="item.ID">
          <div class="card h-100">
            <img
              :src="item.Picture.PictureUrl1"
              v-if="!JSON.stringify(item.Picture) === '{}' || 'PictureUrl1' in item.Picture"
              class="card-img-top"
              alt="attractions-img"
            />
            <img src="../assets/img/test.png" class="card-img-top" v-else alt="attractions-img" />
            <div class="card-body">
              <h3>{{ item.Name }}</h3>
              <p v-if="'Location' in item">
                <i class="fas fa-map-marker-alt"></i>{{ item.Location }}
              </p>
              <p v-if="'Phone' in item"><i class="fas fa-phone"></i>電話 : {{ item.Phone }}</p>
            </div>
            <div class="card-footer">
              <div class="card-btn">
                <button type="button" @click="openModal(item)">了解更多</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-banner">
      <div class="bottom-banner-img">
        <img src="../assets/img/footer1.png" alt="footer" />
      </div>
      <div class="bottom-banner-txt">
        <p>
          “To travel is to live” <br />
          – Hans Christian Anderson-
        </p>
      </div>
    </div>
  </div>
  <Modal ref="Modal" :data="tempData" />
</template>

<script>
import getAuthorizationHeader from '../tools/AuthorizationHeader';
import Modal from '../components/Modal.vue';

export default {
  name: 'Home',
  data() {
    return {
      attractions: [],
      activity: [],
      isLoading: false,
      tempData: {},
    };
  },
  components: {
    Modal,
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
    openModal(item) {
      this.tempData = { ...item };
      this.$refs.Modal.showModal();
    },
  },
  mounted() {
    this.getData(
      'https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$top=8&$format=JSON',
      'attractions',
    );
    this.getData(
      'https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity?$top=8&$format=JSON',
      'activity',
    );
  },
};
</script>

<style scoped>
.container {
  max-width: 1440px;
}
.attractions {
  margin-bottom: 150px;
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
.bottom-banner {
  max-width: 1440px;
  height: 100%;
  margin-top: 150px;
  position: relative;
}
.bottom-banner .bottom-banner-img img {
  max-width: 100%;
  vertical-align: middle;
}
.bottom-banner .bottom-banner-txt p {
  position: absolute;
  top: 50%;
  left: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
  font-weight: bold;
  font-size: 32px;
  line-height: 60px;
  color: #ffffff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 0;
}
@media (max-width: 768px) {
  .bottom-banner .bottom-banner-txt p {
    font-size: 24px;
  }
}
</style>
