var express = require('express');
var router = express.Router();
const spawnSync = require("child_process").spawnSync;

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('game')
});

router.get('/game', async function (req, res, next) {

  const pythonProcess = await spawnSync('python', ['game.py']);
  const result = pythonProcess.stdout?.toString()?.trim();
  const error = pythonProcess.stderr?.toString()?.trim();
  console.log(result, error);
  res.send(result);


});
module.exports = router;
