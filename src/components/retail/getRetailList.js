import axios from "axios";

export function getRetailList(path, isShipped, callback) {
  axios
    .get("/retail?sort=date&page=0")
    .then((res) => {
      if (res.data !== null) {
        let data = { list: res.data.data.orders, isShipped: isShipped }
        data = isShipped ? { ...data, total: res.data.data.shippedAmount } :
          { ...data, total: res.data.data.unShippedAmount };
        callback(null, data)
      } else {
        callback(new Error("데이터가 없어요😅"));
      }
    })
    .catch((error) => {
      console.log("proxy request error", error);
      callback(new Error("에러 발생"));
    });
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
      key: "isPaid",
      label: "입금 여부",
      sortable: true,
      thClass: "align-middle",
      tdClass: "align-middle",
    },
  ],
};

export function getRetailItem(path, callback) {
  const id = parseInt(path.replace("/retail/edit/", ""), 10);
  axios
    .get(`/retail/${id}`)
    .then((res) => {
      if (res.data !== null) {
        callback(null, { list: res.data.data });
      } else {
        callback(new Error("데이터가 없어요😅"));
      }
    })
    .catch((error) => {
      console.log("proxy request error", error);
      callback(new Error("에러 발생", error));
    });
}
