# RetailList

- 서버에서 데이터를 받고 화면에 데이터를 보여줌

## Vue.data 구성

```
data
ㄴ isloading : 서버에서 데이터를 받음 ? True : False
ㄴ error : 에러 메시지 내용
ㄴ fields : b-table에서 보여줄 내용 정의
ㄴ perPage: 페이지 당 열의 최대 개수
ㄴ currentPage: 현재 페이지
ㄴ retail : 서버에서 데이터를 받은 내용
    ㄴ shippedAmount : data.shippedAmount
    ㄴ unShippedAmount : data.unShippedAmount
    ㄴ list : data.orders
```

## 시나리오

### 서버와 데이터 주고 받기

1. 왼쪽 리스트 버튼을 클릭 => 소매 미발송/발송 목록을 클릭해서 이동
1. Vue.data 생성
1. created에서 startPage() 실행
   1. isloading = true
   2. pageNum이 정의 되지 않았으면 pageNum = 1로 선언
   3. getRetailList()에서 서버에 GET 전송
      1. 데이터가 있으면
         - callback에 retail 값 전달
         - currentPage = pageNum으로 변경
      2. 데이터가 없으면 에러 처리
   4. isloading = false

### 화면에 데이터 보여주기

- 코드가 좀 복잡하면 RetailListTable.vue로 분리할 수 있음

1. isloading = true 면 loading 화면 보여줌
2. isloading = false면 div#retail-list를 보여줌
   - isShippedPage : route의 path를 확인해서 `발송/미발송 총 kg`을 리턴
   - `b-table`
     - fields : 데이터 중 table에 보여줄 내용을 key에 정의
     - items : Vue.data.retail.list(서버에서 받은 소매 리스트)
     - row-clicked : 열을 선택하면 수정 페이지로 이동
     - template #table-colgroup : 입금 여부 열만 width를 작게 설정
     - template #cell(isPaid) : 입금 완료면 `⭕`, 미완료면 `❌`
   - `b-pagination`
     - v-model : 현재 페이지 값(Vue.data.currentPage)을 모니터링
     - total-rows : 발송/미발송 데이터의 총 개수(임시로 MAX(발송 kg,미발송 kg)으로 설정함)
     - per-page : 한 페이지 당 보여줄 데이터 수
     - page-click : pagination 번호 A를 클릭한 뒤 A 페이지를 보여주기 전에 실행할 함수 정의
       - 번호 A를 클릭하면 startPage(A-1)를 실행 : 서버에서 page=A-1을 받아와서 페이지 새로 그림
