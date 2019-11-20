import { formatDate } from "@/common/utils";
// 格式化价格
export const formatPrice = value => {
  return `￥${parseInt(value).toFixed(2)}`;
};
// 格式化日期
export const displayDate = value => {
  // 将时间戳转为Date对象
  const date = new Date(value * 1000); //如果date为13位不需要乘1000
  // 将date进行格式化
  return formatDate(date, "yyyy-MM-dd hh:mm:ss");
};
// 优化价格显示
export const sellCountFilter = value => {
  if (value < 10000) {
    return value;
  }
  return `${(value / 10000).toFixed(1)}万`;
};
