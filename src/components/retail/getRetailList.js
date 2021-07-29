import data from "../tmpdata/RetailList.json";

export function getRetailList(path, isShipped, callback) {
  // fake an API request
  setTimeout(() => {
    //console.log(path);
    if (data.list.length > 0) {
      const { list, ...others } = data;
      const filter_list = list.filter((item) => item.shipped === isShipped);
      const filter_data = {
        list: [...filter_list],
        isShipped: isShipped,
        ...others
      };
      callback(null, filter_data);
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
      tdClass: "align-middle"
    },
    {
      key: "name",
      label: "주문자",
      sortable: true,
      thClass: "align-middle",
      tdClass: "align-middle"
    },
    {
      key: "amount",
      label: "kg",
      sortable: true,
      thClass: "align-middle",
      tdClass: "align-middle"
    },

    {
      key: "payment",
      label: "입금 여부",
      sortable: true,
      thClass: "align-middle",
      tdClass: "align-middle"
    }
  ]
};

export function getRetailItem(path, callback) {
  // fake an API request
  //console.log(path);
  const id = parseInt(path.replace("/retail/edit/", ""), 10);
  //console.log(id);

  if (data.list.length > 0) {
    const { list, ...others } = data;
    let filter_list = list.filter((item) => item.id === id);
    const filter_data = {
      list: filter_list[0],
      ...others
    };
    callback(null, filter_data);
  } else {
    callback(new Error("데이터가 없어요😅"));
  }
}
