# 14_cli_test

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Template Setting
1. views 안에 view 전부 삭제
2. components 안에 파일 전부 삭제
3. router/index.js
  - routes 안에 비워두기
  - import HomeView 삭제하기
4. APP.vue 전체 삭제
  - vue -> 자동완성으로 vue template 형태 만들기