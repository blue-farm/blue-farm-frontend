import { opt } from "../router/index";

const { routes } = opt;

const home = routes.find(({ path }) => path === "/");
const retail = routes.find(({ path }) => path === "/retail");
const wholesale = routes.find(({ path }) => path === "/wholesale");
const company = routes.find(({ path }) => path === "/company");

const data_retail = [
  { path: `${retail.path}/${retail.children[0].path}`, name: "미발송 목록" },
  { path: `${retail.path}/${retail.children[1].path}`, name: "주문서 작성" },
];

const data_wholesale = [
  {
    path: `${wholesale.path}/${wholesale.children[0].path}`,
    name: "주문 목록",
  },
  {
    path: `${wholesale.path}/${wholesale.children[1].path}`,
    name: "주문서 작성",
  },

  {
    path: company.path,
    name: "도매 업체 관리",
  },
];

const data_test = [
  { path: home.path, name: "홈으로 돌아가기💨" },
  { path: `${retail.path}/edit/1`, name: "소매 주문서 수정" },
  { path: `${wholesale.path}/edit/1`, name: "도매 주문서 수정" },
];

export { data_retail, data_wholesale, data_test };
