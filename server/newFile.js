import { LeetCode } from "leetcode-query";
import { app, credential } from ".";

app.get("/getRecentSubmission", async (req, res) => {
  console.log("trying user auth");
  try {
    const leetcode = new LeetCode(credential);
    console.log(await leetcode.submissions(100, 0));
    // res.send(await leetcode.submissions(100, 0));
  } catch (err) {
    console.log(err);
  }
});
