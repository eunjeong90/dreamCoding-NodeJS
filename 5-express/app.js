import express from "express";
const app = express();

app.get("/sky/:id", (req, res, next) => {
  // console.log(req.path);
  // console.log(req.headers);
  console.log(req.params);
  console.log(req.params.id);
  console.log(req.query);
  console.log(req.query.keyword);

  // get이 요청만 된 상태에서 아무것도 보내주지 않았기 때문에,
  // client에게 responsive를 보내줘야 서버가 계속 돌지 않는다
  // res.send(`hi! ${req.params.id}`);
  res.json({ name: "eunjeong" });
  res.setHeader("key", "value");
  res.sendStatus(200);
  res.status(201).send("created");
});

app.listen(8080);
