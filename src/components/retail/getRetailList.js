import data from "../tmpdata/RetailList.json";

export function getRetailList(route, callback) {
  // fake an API request
  setTimeout(() => {
    //console.log(route);
    if (data.list.length > 0) {
      callback(null, data);
    } else {
      callback(new Error("데이터가 없어요😅"));
    }
  }, 500);
}
