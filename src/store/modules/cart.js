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
    // 查找之前数组中是否有该商品
    let oldProduct = state.cart.find(item => item.iid === payload.iid);
    if (oldProduct) {
      commit("AddCounter", oldProduct);
    } else {
      payload.count = 1;
      payload.checked = true;
      commit("AddCart", payload);
    }
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
