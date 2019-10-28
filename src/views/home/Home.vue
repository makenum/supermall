<template>
  <div class="home">
    <nav-bar type="primary">
      <h3 slot="center" class="title">购物街</h3>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
  </div>
</template>

<script>
import { getHomeMultidata } from "network/home";
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./child/HomeSwiper";
export default {
  name: "home",
  components: {
    NavBar,
    HomeSwiper
  },
  data() {
    return {
      banners: []
    };
  },
  created() {
    this._getHomeMultidata();
  },
  methods: {
    _getHomeMultidata() {
      getHomeMultidata().then(res => {
        console.log(res);
        this.banners = res.data.data.banner.list;
      });
    }
  }
};
</script>
