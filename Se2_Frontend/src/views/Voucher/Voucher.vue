<template>
  <div class="container-fluid">
    <div class="py-3 sub-hold">
      <div class="mb-4 layout-column clearfix">
        <SlideBarAdmin></SlideBarAdmin>

        <div class="right-column">
          <h5 class="wel-txt mt-3 mb-3">VOUCHERS</h5>
          <router-link to="/admin/voucher/add">
                  <button class="btn btn-primary plus-btn">
                    <i
                      class="fa-solid fa-plus fa-2xl"
                      style="
                        color: #ffffff;
                        transform: translateX(-2px) translateY(1px);
                      "
                    ></i>
                  </button>
                </router-link>
          <div class="container-fluid">
            <div class="product-inline-hold">
              <div
                class="content"
              >
                  <div class="voucher-info"  v-for="voucher in vouchers" :key="voucher.id">
                    <div class="voucher-name">{{ voucher.name }}</div>
                    <div class="voucher-actions">
                      <router-link
                                :to="{
                                  name: 'EditVoucher',
                                  params: { id: voucher.id }
                                }"
                              >
                      <button
                        class="btn btn-primary mr-2"
                      
                      >
                        Edit
                      </button>
                      </router-link>
                      
                      <button
                        class="btn btn-danger"
                        @click="deleteVoucher(voucher.id)"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import SlideBarAdmin from "../SlideBarAdmin.vue";
export default {
  components: { SlideBarAdmin },
  data() {
    return {
      vouchers: ""
    };
  },
  props: ["baseURL", "vouchers"],
  methods: {
    async getVoucher() {
      await axios
        .get(`${this.baseURL}voucher/`)
        .then((res) => {
          console.log(res.data);
          this.vouchers = res.data;
        })
        .catch((err) => console.log("err", err));
    }, async deleteVoucher(pid){
      const confirmDelete = await swal({
           title: "Are you sure?",
           text: "Once deleted, you will not be able to recover this!",
           icon: "warning",
           buttons: true,
           dangerMode: true,
    });
    if (confirmDelete) {
      await axios.delete(`${this.baseURL}voucher/delete/${pid}`).then(() => {
                        this.$emit("fetchData");
                        swal({
                            text: "Voucher has been deleted successfully",
                            icon: "success"    
                        })
                        this.$router.push({name: "Voucher"})
                        this.$router.go(0)
                    }).catch(err => console.log('err', err));
                  }
  
    }
  },
  mounted() {
    this.getVoucher();
  }
};
</script>
<style scoped>
.container {
  width: 50%;
}
.content{
  width: 50%;
  margin-left: 16%;
}
.voucher-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
.voucher-name {
  font-weight: bold;
}
.slidebar {
  margin-left: 100px;
  margin-bottom: 5px;
  margin-top: 50px;
}
.wel-txt{
  margin-left: 450px;
}
.plus-btn {
  float: right;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  margin-right: 15px;
}
</style>
