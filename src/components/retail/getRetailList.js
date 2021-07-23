import data from "../tmpdata/RetailList.json";

export function getRetailList(route, callback) {
  // fake an API request
  setTimeout(() => {
    //console.log(route);
    if (data.list.length > 0) {
      const { list, ...others } = data;
      const unshipped_list = list.filter((item) => item.shipped === false);
      const unshipped_data = { list: [...unshipped_list], ...others };
      callback(null, unshipped_data);
    } else {
      callback(new Error("데이터가 없어요😅"));
    }
  }, 500);
}
