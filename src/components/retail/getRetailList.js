import axios from "axios";

export function getRetailList(path, pageNum, callback) {
  axios
    .get(`/retail?sort=date&page=${pageNum - 1}`)
    .then((res) => {
      if (res.data !== null) {
        let retail = {
          list: res.data.data.orders,
          shippedAmount: res.data.data.shippedAmount,
          unShippedAmount: res.data.data.unShippedAmount,
        };
        callback(null, retail);
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
  isLoading: false,
  error: null,
  retail: null,
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
