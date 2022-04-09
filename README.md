# ✅ React Todo App
  
> React로 구현한 Todo App입니다.
할 일 목록을 추가, 삭제, 수정할 수 있으며 새로고침을 하더라도 기존의 데이터가<br/> LocalStorage에 stirng형태로 남아있을 수 있도록 설정했습니다.<br/>
Tailwind CSS를 사용하여 UI를 꾸미고, React-beautiful-dnd 를 사용하여 Drag로 순서를 바꿀 수 있도록 구현하였습니다.

<br/>
<br/>

## 📌 배포 사이트
<div align="center">   
<br/>    
    
💡 사이트 이동하기 💡  
  

[🔗 jm-todo](https://jm-todo.netlify.app/)
 
(ctrl + click 시 새창으로 열기)
  
</div>

<br/>
<br/>
 

## 📝 Skill & Preview
<br/>
<br/>
<p align="center">
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"/> &nbsp
<img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=for-the-badge&logo=Tailwind CSS&logoColor=white"/> &nbsp 
<img src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=Netlify&logoColor=white"/> &nbsp 
<img src="https://img.shields.io/badge/React beautiful dnd-14CC80?style=for-the-badge&logo=Bitdefender&logoColor=white"/> &nbsp 
<br/>
<br/>
<p align="center">
<img src="https://user-images.githubusercontent.com/82005305/156791554-2a6b9232-251c-46d9-b93a-7dfe158be7ba.gif">
</p> 


<br/>
<br/>

## ⚠ Installation

### **앱 실행**

```
"npm run start"
```

### **배포**

```jsx
"npm run build"
```

### Tailwindcss

```jsx
"autoprefixer": "^10.4.2",
"postcss": "^8.4.7",
"tailwindcss": "^3.0.23"
```

### react-beautiful-dnd

```jsx
"react-beautiful-dnd": "^13.1.0"
```



<br/>
<br/>

## 🔍 기능설명

### 1. 할 일 목록 입력

- 사용자가 입력창에 데이터를 입력하고 Enter를 누르거나 ➕ 버튼을 누르면 목록창에 데이터가 표시되면서 입력창은 비어있는 상태로 대기하게 됩니다.

### 2. 목록 수정

- ✏ 버튼 → 목록을 수정할 수 있음 / 영화의 개봉일, 상영시간, 제목, 출연자. 감독, 별점, 영화사 등의 정보가 나온다
- 💾 버튼 → 수정된 목록을 저장
- ↺ 버튼 → 수정 전 상태로 되돌리기
 

### 3. 목록 삭제

- ✖ 버튼 → 선택한 목록 하나를 삭제
- delete All 버튼 → 전체 목록을 삭제 

### 4. Drag

- 목록 위에 마우스를 올리면 pointer모양으로 변하게 됨, 목록을 Drag해서 순서를 바꿀 수 있음
