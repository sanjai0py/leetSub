import express from "express";
const app = express();
import { LeetCode, Credential } from "leetcode-query";
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post("/", async (req, res) => {
  console.log("Suuuuuuuuu");
});

let cookies = undefined;
let name = undefined;

app.post("/auth", async (req, res) => {
  console.log("trying user auth");
  try {
    cookies = req.body.cookies;
    name = req.body.name;

    res.send("auth success");
  } catch (error) {
    console.log(error);
  }
});

app.get("/getRecentSubmission", async (req, res) => {
  try {
    //init credentials
    const credential = new Credential();
    await credential.init(cookies);

    const leetcode = new LeetCode(credential);
    res.send(await leetcode.submissions(100, 0));
  } catch (err) {
    console.log(err);
  }
});



app.listen(PORT, () => console.log(`app listening on ${PORT}`));
