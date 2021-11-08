<template>
  <Loading :active="isLoading"/>
  <div class="container p-0">
    <div class="attractions">
      <div class="title">
        <h2>熱門景點</h2>
        <p>
          台灣的各個美景，都美不勝收。<br />
          等你一同來發現這座寶島的奧妙！
        </p>
      </div>
      <div class="row row-cols-1 row-cols-md-4 g-4">
        <div class="col" v-for="item in attractions" :key="item.ID">
          <div class="card h-100">
            <img
              src="../assets/img/test.png"
              class="card-img-top"
              v-if="JSON.stringify(item.Picture) === '{}'"
              alt="attractions-img"
            />
            <img
              :src="item.Picture.PictureUrl1"
              v-else
              class="card-img-top"
              alt="attractions-img"
            />
            <div class="card-body">
              <h3>{{ item.Name }}</h3>
              <span v-if="item.OpenTime.length < 10"
                ><i class="far fa-clock"></i>開放時間 : {{ item.OpenTime }}</span
              >
              <span v-else><i class="far fa-clock"></i>開放時間 : 詳見官網</span>
              <p><i class="fas fa-map-marker-alt"></i>{{ item.Address }}</p>
              <p v-if="'Phone' in item"><i class="fas fa-phone"></i>電話 : {{ item.Phone }}</p>
              <p v-else><i class="fas fa-phone"></i>電話 : 詳見官網</p>
            </div>
            <div class="card-footer">
              <div class="card-btn"><button type="button">了解更多</button></div>
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
      <div class="row row-cols-1 row-cols-md-4 g-4">
        <div class="col" v-for="item in activity" :key="item.ID">
          <div class="card h-100">
            <img
              src="../assets/img/test.png"
              class="card-img-top"
              v-if="JSON.stringify(item.Picture) === '{}'"
              alt="activity-img"
            />
            <img :src="item.Picture.PictureUrl1" v-else class="card-img-top" alt="activity-img" />
            <div class="card-body">
              <h3>{{ item.Name }}</h3>
              <p><i class="fas fa-map-marker-alt"></i>{{ item.Location }}</p>
              <p v-if="'Phone' in item"><i class="fas fa-phone"></i>電話 : {{ item.Phone }}</p>
              <p v-else><i class="fas fa-phone"></i>電話 : 詳見官網</p>
            </div>
            <div class="card-footer">
              <div class="card-btn"><button type="button">了解更多</button></div>
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
</template>

<script>
import getAuthorizationHeader from '../tools/AuthorizationHeader';

export default {
  name: 'Home',
  data() {
    return {
      attractions: [],
      activity: [],
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
    this.getData('https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$top=8&$format=JSON', 'attractions');
    this.getData('https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity?$top=8&$format=JSON', 'activity');
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
.bottom-banner {
  max-width: 1440px;
  height: 100%;
  margin-top: 90px;
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
</style>
