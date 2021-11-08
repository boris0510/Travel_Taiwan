<template>
  <Loading :active="isLoading" />
  <div class="container p-0">
    <div class="title">
      <h2 v-if="current.city === ''">熱門景點</h2>
      <h2 v-else>{{ current.city }} 景點</h2>
      <p>
        台灣的各個美景，都美不勝收。<br />
        等你一同來發現這座寶島的奧妙！
      </p>
    </div>
    <div class="row row-cols-1 row-cols-md-4 g-4">
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
    <!-- 分頁 -->
    <nav class="d-flex justify-content-center">
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import getAuthorizationHeader from '../tools/AuthorizationHeader';

export default {
  name: 'Attractions',
  data() {
    return {
      attractions: [],
      currentCategory: '',
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
    this.getData(
      'https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$top=20&$format=JSON',
      'attractions',
    );
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
.pagination{
  margin-top: 100px;
  margin-bottom: 50px;
}
.pagination a{
  color: #08a6bb;
}
.pagination a:hover{
  color: #FFFFFF;
  background-color: #08a6bb;
}
</style>
