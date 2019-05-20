const express = require('express')
const Campaign = require("../models/campaign")
const CampaignDB = require("../models/DB/campaignDB")

const router = express.Router()

const campaign = new Campaign(CampaignDB)

router.get('/', async (req, res) => {
    let campaigns = await campaign.getCampaign()
    if (campaigns.error) {
        res.status(404)
    }
    res.json(campaigns)
})

router.post('/', async (req, res) => {
    let newCampaign = await campaign.addCampaign(req.body)
    if (newCampaign.error) {
        res.status(404)
    }
    res.json(newCampaign)
})

router.put('/:id', async (req, res) => {
    let updatedCampaign = await campaign.updateCampaign(req.params.id, req.body)
    if (updatedCampaign.error) {
        res.status(404)
    }
    res.json(updatedCampaign)
})

router.delete('/:id', async (req, res) => {
    let deleted = await campaign.deleteCampaign(req.params.id)
    if (deleted.error) {
        res.status(404)
    }
    res.json(deleted)
})

module.exports = router