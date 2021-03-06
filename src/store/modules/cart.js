import { ADD_TO_CART, ADD_COUNTER } from "../mutation-type";
const state = {
  cart: []
};
// mutations是同步
const mutations = {
  [ADD_TO_CART](state, payload) {
    state.cart.push(payload);
  },
  [ADD_COUNTER](state, payload) {
    payload.count++;
  }
};

// actions可同步也可异步
const actions = {
  addCart({ commit, state }, payload) {
    // eslint-disable-next-line no-unused-vars
    return new Promise((resolve, reject) => {
      // 查找之前数组中是否有该商品
      let oldProduct = state.cart.find(item => item.iid === payload.iid);
      if (oldProduct) {
        commit(ADD_COUNTER, oldProduct);
        resolve("当前商品的数量+1");
      } else {
        payload.count = 1;
        payload.checked = true;
        commit(ADD_TO_CART, payload);
        resolve("加入购物车成功!");
      }
    });
  }
};
const getters = {
  cartList(state) {
    return state.cart;
  },
  cartListLength(state) {
    return state.cart.length;
  }
};
export default {
  state,
  mutations,
  actions,
  getters
};
