const express = require('express');
const router = express.Router();
const {SolahTime} = require('../models/solahTime')


router.get('/getSolahTime', async (req, res) => {

    // get all the times
    const solahTimes = await SolahTime.find()
    
    //get the newest entry
    let data = solahTimes[solahTimes.length - 1]
    res.send(data)
  });

  router.post('/setSolahTime', async (req, res) => {
    console.log("POST works", req.body)
    let solahTime = new SolahTime({ 
        Fajir: req.body.fajirTime,
        Zuhur: req.body.zuhurTime,
        Asir: req.body.asirTime,
        Magrib: req.body.magribTime,
        Ishai: req.body.ishaTime,
        CreateDate: Date.now(),
      });
      solahTime = await solahTime.save();
      res.send(solahTime)
});

module.exports = router; 