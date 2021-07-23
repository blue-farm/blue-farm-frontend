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

export const retailListData = {
  isloading: false,
  error: null,
  data: null,
  fields: [
    {
      key: "date",
      label: "주문일",
      sortable: true,
      thClass: "align-middle",
      tdClass: "align-middle",
    },
    {
      key: "name",
      label: "주문자",
      sortable: true,
      thClass: "align-middle",
      tdClass: "align-middle",
    },
    {
      key: "amount",
      label: "kg",
      sortable: true,
      thClass: "align-middle",
      tdClass: "align-middle",
    },

    {
      key: "payment",
      label: "입금 여부",
      sortable: true,
      thClass: "align-middle",
      tdClass: "align-middle",
    },
  ],
};
