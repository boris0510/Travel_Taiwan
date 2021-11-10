<template>
  <div
    class="modal fade"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    ref="modal"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header border-bottom-0 pb-0 ms-auto">
          <button
            type="button"
            class="btn close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="fas fa-times"></i>
          </button>
        </div>
        <div class="modal-body">
          <div class="modal-body-title">{{ tempData.Name }}</div>
          <div class="modal-body-addr">
            <i class="fas fa-map-marker-alt"></i>{{ tempData.Address }}
          </div>
          <p class="modal-body-context">
            {{ tempData.Description }}
          </p>
          <div class="modal-body-img">
            <img
              :src="tempData.Picture.PictureUrl1"
              v-if="!JSON.stringify(tempData.Picture) === '{}' || 'PictureUrl1' in tempData.Picture"
              class="card-img-top"
              alt="attractions-img"
            />
            <img src="../assets/img/test.png" class="card-img-top" v-else alt="attractions-img" />
          </div>
          <div class="modal-body-order">
            <p v-if="'OpenTime' in tempData"><i class="far fa-clock"></i>{{ tempData.OpenTime }}</p>
            <p v-if="'TicketInfo' in tempData">
              <i class="fas fa-ticket-alt"></i>{{ tempData.TicketInfo }}
            </p>
            <p v-if="'Phone' in tempData"><i class="fas fa-phone"></i>{{ tempData.Phone }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal';

export default {
  props: {
    data: {},
  },
  watch: {
    data() {
      this.tempData = this.data;
    },
  },
  data() {
    return {
      modal: {},
      tempData: {
        Picture: {},
      },
    };
  },
  methods: {
    showModal() {
      this.modal.show();
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal);
  },
};
</script>

<style scoped>
.close {
  background-color: #cbcbcb;
  color: #ffffff;
  width: 32px;
  height: 32px;
  font-size: 20px;
  border: 0px;
  padding: 0;
  transition: all 0.3s;
}
.close:hover {
  background-color: #08a6bb;
  color: #ffffff;
}
.modal-body-title {
  font-weight: 900;
  font-size: 24px;
  color: #393939;
  margin-bottom: 22px;
}
.modal-body-addr {
  font-weight: 500;
  font-size: 14px;
  color: #6f7789;
  margin-bottom: 22px;
}
.modal-body-addr i {
  color: #08a6bb;
  margin-right: 8px;
}
.modal-body-context {
  font-weight: normal;
  font-size: 16px;
  color: #6f7789;
  margin-bottom: 22px;
}
.modal-body-img {
  margin-bottom: 40px;
}
.modal-body-img img {
  max-width: 100%;
  vertical-align: middle;
}
.modal-body-order {
  font-weight: bold;
  font-size: 16px;
  color: #08a6bb;
}
.modal-body-order i {
  margin-right: 8px;
}
</style>
