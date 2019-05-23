const mongoose = require('mongoose')
const assert = require('assert')

const Campaign = require("../models/campaign")
const CampaignDB = require("../models/DB/campaignDB")

describe("Campaign test", () => {

    beforeAll(async () => {
        mongoose.Promise = global.Promise

        await mongoose
            .connect(global.__MONGO_URI__ + "campaign", { useNewUrlParser: true })
            .then(() => {
                console.log(`your database connected`)
            })
            .catch(err => {
                console.log(err)
            })
    })

    afterAll(async () => {
        await mongoose.connection.close()
    })

    it("get post endpoint", async () => {
        const campaign = new Campaign(CampaignDB)
        let campaigns = await campaign.getCampaign()
        //assert(Array.isArray(campaigns) == true)
        expect(Array.isArray(campaigns)).toEqual(true);
    })

    it("add post endpoint", async () => {
        const campaign = new Campaign(CampaignDB)
        const mockCampaign = {
            "_id": "5ce3756cd39d434c8c4fce96",
            "name": "n1",
            "country": "USA",
            "budget": 149,
            "goal": "Awareness",
            "category": "Technology"
        };
        let newCampaign = await campaign.addCampaign(mockCampaign)
        console.log(newCampaign)
        expect(newCampaign._id).toEqual(mongoose.Types.ObjectId(mockCampaign._id));
    })

})