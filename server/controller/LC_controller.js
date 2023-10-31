import { LeetCode, Credential } from "leetcode-query";

class LC {
  leetcode = null 
  async LC_auth(req, res) {
    console.log("trying user auth");
    try {
      const cookies = req.body.cookies;
      const name = req.body.name;

      //init credentials
      const credential = new Credential();
      await credential.init(cookies);

      LC.leetcode = new LeetCode(credential);

      res.send("auth successful");
    } catch (err) {
      console.log(err);
    }
  }

  async LC_getRecentSubmission(req, res) {
    const v = LC.leetcode.RecentSubmission()
    console.log(v);
  }
}

const lc_controller = new LC();
export default lc_controller;
