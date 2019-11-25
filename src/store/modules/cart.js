const state = {
  cart: []
};

const mutations = {
  AddCart(state, payload) {
    state.cart.push(payload);
  },
  AddCounter(state, payload) {
    payload.count++;
  }
};

const actions = {
  addCart({ commit, state }, payload) {
    // eslint-disable-next-line no-unused-vars
    return new Promise((resolve, reject) => {
      // 查找之前数组中是否有该商品
      let oldProduct = state.cart.find(item => item.iid === payload.iid);
      if (oldProduct) {
        commit("AddCounter", oldProduct);
        resolve("当前商品的数量+1");
      } else {
        payload.count = 1;
        payload.checked = true;
        commit("AddCart", payload);
        resolve("添加了新商品");
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
