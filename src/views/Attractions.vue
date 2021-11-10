<template>
  <Loading :active="isLoading" />
  <div class="container">
    <div class="title">
      <h2 v-if="current.city === ''">熱門景點</h2>
      <h2 v-else>{{ current.city }} 景點</h2>
      <p>
        台灣的各個美景，都美不勝收。<br />
        等你一同來發現這座寶島的奧妙！
      </p>
    </div>
    <div class="row row-cols-2 row-cols-md-4 g-4">
      <div class="col" v-for="item in filterData[currentPage]" :key="item.ID">
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
            <p v-if="'Address' in item"><i class="fas fa-map-marker-alt"></i>{{ item.Address }}</p>
            <p v-if="'Phone' in item">
              <i class="fas fa-phone"></i>{{ item.Phone }}
            </p>
          </div>
          <div class="card-footer">
            <div class="card-btn"><button type="button" @click="openModal(item)">了解更多</button></div>
          </div>
        </div>
      </div>
    </div>
    <!-- 分頁 -->
    <nav class="d-flex justify-content-center">
      <ul class="pagination">
        <li class="page-item" :class="{ disabled: currentPage === 0 }">
          <a class="page-link" href="#" aria-label="Previous" @click.prevent="currentPage--">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item disabled">
          <a class="page-link" href="#">{{ currentPage + 1 }} / {{ filterData.length }}</a>
        </li>
        <li class="page-item" :class="{ disabled: currentPage === filterData.length - 1 }">
          <a class="page-link" href="#" aria-label="Next" @click.prevent="currentPage++">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
  <Modal ref="Modal" :data="tempData" />
</template>

<script>
import getAuthorizationHeader from '../tools/AuthorizationHeader';
import Modal from '../components/Modal.vue';

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
      currentPage: 0,
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
  computed: {
    filterData() {
      const newData = [];
      this.attractions.forEach((item, i) => {
        if (i % 16 === 0) {
          newData.push([]);
        }
        const page = parseInt(i / 16, 0);
        newData[page].push(item);
      });
      return newData;
    },
  },
  mounted() {
    this.getData(
      'https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$top=3000&$format=JSON',
      'attractions',
    );
    this.emitter.on('sendData', (data) => {
      this.current = data;
    });
    this.emitter.on('sendUrl', (data) => {
      this.getData(data, 'attractions');
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
.pagination {
  margin-top: 100px;
  margin-bottom: 50px;
}
.pagination a {
  color: #08a6bb;
}
.pagination a:hover {
  color: #ffffff;
  background-color: #08a6bb;
}
</style>
