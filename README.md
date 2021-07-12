# blue-farm-frontend

## Using Framework/Library

- vue
- vue-router

## Route

```
/ : Home

/retail : 소매 타이틀
/retail/list : 소매 주문 목록
/retail/order : 소매 주문서 생성
/retail/edit/1 : 소매 주문서 수정

/wholesale : 도매 타이틀
/wholesale/list : 도매 주문 목록
/wholesale/order : 도매 주문서 생성
/wholesale/edit/1 : 도매 주문서 수정

/company : 도매 업체 관리(wholesale에 넣을까 하다가 따로 빼는 게 나을 것 같아서 이렇게 구성했옹!)
```

## 1차 작업 분배

- 주문 목록, 업체 관리 화면 : 나윤
- 주문서 생성, 수정 화면 : 현지

## Vscode에서 사용방법
```
1. git clone한다
2. vscode에서 폴더 열기를 한다
3. vscode - terminal을 연다
3-1. npm 설치 돼 있는지 확인(없으면 npm, node.js 설치 필요)
https://butter-ring.tistory.com/17
4. 연관 패키지 설치
$ npm install
5. 로컬 PC에 웹서버 띄우기
$ npm run serve
6. 결과물 확인
http://localhost:8080
```

## 참고 사이트

https://kr.vuejs.org/v2/guide/  
https://router.vuejs.org/kr/installation.html  
https://jeonghwan-kim.github.io/2018/04/07/vue-router.html
