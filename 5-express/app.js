import express from "express";
const app = express();

// all의 경우 어떠한 method로 보내든 항상 안에 있는
// 코드가 수행됨 대신,
// 지정된 path 외에 다른 추가 path가 있는 경우 아래 코드가
// 수행되지 않는다 ('/all/*' 이라고 하면 비슷하게 동작은 되겠쥬?)
app.all('/all', (req, res, next) => {
  console.log('All')
  next()
})

// use는 지정된 path외에 다른 추가 path에도 코드가 반응한다
app.use('/use', (req, res, next) => {
  console.log('Use')
  next()
})

app.get('/', (req, res, next) => {
  console.log('first');
  // responsive를 해주고 나면 다음 미들웨어로 넘어가지 않음
  /* 하나의 callback에서 조건에 따라 여러 res가 있을 때,
  조건에 따라 responsive를 다르게 해줘야할 때,
  조건문 안에 있는 send를 return 해주어야만 한다
  'Cannot set headers after they are sent to the client'
  라는 error가 뜨게된다 */
  if (true) {
    return res.send('Hello!');
  }
  res.send('another~');
},
(req, res, next) => {
  console.log('first2');
  next();
})

app.get('/', (req, res, next) => {
  console.log('second');
})


// 없는 path일시 보내줄 코드
app.use((req, res, next) => {
  res.status(404).send('not available!');
})

// 어떤 경로던지 상관없이 처음에 에러를 받고 
// req할 res와 next를 받는 에러 핸들러를 만들어줘야함 
app.use((error, req, res, next) => {
  console.log(error);
  res.status(500).send('sorry, try later!')
})

app.listen(8080);
