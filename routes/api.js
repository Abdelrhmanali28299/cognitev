const express = require('express')
const Campaign = require("../models/campaign")
const CampaignDB = require("../models/DB/campaignDB")

const router = express.Router()

const campaign = new Campaign(CampaignDB)

router.get('/', async (req, res) => {
    res.json(await campaign.getCampaign())
})

router.post('/', async (req, res) => {
    res.json(await campaign.addCampaign(req.body))
})

module.exports = router