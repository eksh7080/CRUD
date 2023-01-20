# 📚 프로젝트 소개
 > 원티드 프리온보딩 챌린지 프론트엔드 코스 TodoList
 
 <br/>


## 🖱 최종 화면 구성

 **Auth**

|로그인(/login)|회원가입(/signup)|
| ------------------------------------------------------------ | ------------------------------------------------------------ |
|<img src="https://user-images.githubusercontent.com/93601210/213424764-008ee264-91ef-4024-abbc-87941dceb1b3.gif" width="400" height="360" /> | <img src="https://user-images.githubusercontent.com/93601210/213424829-ed4ece04-7f22-4030-ba83-d0d2f77e98f3.gif" width="400" height="360" />|


 **Todo(/todo)**

| 투두 수정 | 투두 삭제 |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
|<img src="https://user-images.githubusercontent.com/93601210/213445878-7547098d-12ca-49ed-b8f6-69d66b3e237b.gif" width="400" height="360" />| <img src="https://user-images.githubusercontent.com/93601210/213445895-b6a44f90-1c30-42fc-81a5-959a07e9ec8b.gif" width="400" height="360" />|

<br/>

## 🏹 실행 방법
```typescript
 공통 - git clone https://github.com/eksh7080/wanted-pre-onboarding-challenge-fe-1.git
 
 FE
 cd front - yarn install && yarn start
 
 BE
 cd server - yarn install && yarn start
```

<br/>

## 🔏 구현 요구 사항

### 로그인/회원가입

 - [x] 최소한 이메일, 비밀번호 input, 제출 button을 갖도록 구성
 - [x] 이메일 조건: 최소 @, . 포함
 - [x] 비밀번호 조건: 8자 이상 입력
 - [x] 이메일과 비밀번호가 모두 입력되어 있고, 조건을 만족해야 제출 버튼이 활성화
 - [x] 로그인 API를 호출하고, 올바른 응답을 받았을 때 루트 경로로 이동
 - [x] 응답으로 받은 토큰은 로컬 스토리지에 저장
 - [ ] 다음 번에 로그인 시 토큰이 존재한다면 루트 경로로 리다이렉트 시켜주세요
 - [ ] 어떤 경우든 토큰이 유효하지 않다면 사용자에게 알리고 로그인 페이지로 리다이렉트 시켜주세요
 
### TodoList

- [ ] 목록 / 상세 영역으로 나누어 구현해주세요
- [x] Todo 목록을 볼 수 있습니다.
- [x] Todo 추가 버튼을 클릭하면 할 일이 추가 됩니다.
- [ ] Todo 수정 버튼을 클릭하면 수정 모드를 활성화하고, 수정 내용을 제출하거나 취소할 수 있습니다.
- [x] Todo 삭제 버튼을 클릭하면 해당 Todo를 삭제할 수 있습니다.
- [x] 새로고침을 했을 때 현재 상태가 유지되어야 합니다.
- [ ] 개별 Todo를 조회 순서에 따라 페이지 뒤로가기를 통하여 조회할 수 있도록 해주세요.
- [x] 수정되는 Todo의 내용이 목록에서도 실시간으로 반영되어야 합니다
 
 <br/>
 
## 📂 폴더구조
```
src
 ┣ Globalstate
 ┣ Home
 ┣ Todo
 ┣ auth
 ┃ ┣ Login
 ┃ ┗ Signup
 ┣ components
 ┃ ┣ Header.tsx
 ┃ ┗ style.tsx
 ┣ hooks
 ┃ ┗ useToken.tsx
 ┣ types
 ┃ ┗ todoType.tsx
 ┣ utils
 ┃ ┣ api.tsx
 ┃ ┗ queryFn.tsx
 ┣ App.tsx
 ┣ Routers.tsx
 ┣ index.css
 ┗ index.tsx
```


