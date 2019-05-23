const mongoose = require('mongoose')
const request = require('request-promise')

const compaign = function (campaignDB) {

    this.campaignDB = campaignDB

    this.getCampaign = async () => {
        return this.campaignDB
            .find()
            .catch(err => {
                return { "error": err }
            })
    }

    this.getCategory = async () => {
        return request('https://ngkc0vhbrl.execute-api.eu-west-1.amazonaws.com/api/?url=https://arabic.cnn.com/')
            .then(body => {
                return JSON.parse(body).category.name
            })
            .catch(err => {
                return { "error": err }
            });
    }

    this.addCampaign = async (campaign) => {

        if (campaign.budget == 149 || campaign.budget == 399 || campaign.budget == 999) {

            let category = campaign.category
            if (category) {
                let newCampaign
                if(campaign._id) {
                    newCampaign = new this.campaignDB({
                        _id: mongoose.Types.ObjectId(campaign._id),
                        name: campaign.name,
                        country: campaign.country,
                        budget: campaign.budget,
                        goal: campaign.goal,
                        category
                    })
                } else {

                    newCampaign = new this.campaignDB({
                        name: campaign.name,
                        country: campaign.country,
                        budget: campaign.budget,
                        goal: campaign.goal,
                        category
                    })
                }

                return newCampaign
                    .save()
                    .catch(err => {
                        return { "error": err }
                    })
            } else {
                let category = await this.getCategory()
                if (!category.error) {
                    let newCampaign 

                    if(campaign._id) {
                        newCampaign = new this.campaignDB({
                            _id: mongoose.Types.ObjectId(campaign._id),
                            name: campaign.name,
                            country: campaign.country,
                            budget: campaign.budget,
                            goal: campaign.goal,
                            category
                        })
                    } else {
    
                        newCampaign = new this.campaignDB({
                            name: campaign.name,
                            country: campaign.country,
                            budget: campaign.budget,
                            goal: campaign.goal,
                            category
                        })
                    }

                    return newCampaign
                        .save()
                        .catch(err => {
                            return { "error": err }
                        })
                }

                return { "error": category.error }
            }
        }

        return { "error": "Wrong Budget!" }

    }

    this.updateCampaign = async (id, updates) => {
        return this.campaignDB
            .findById(id)
            .then(campaign => {
                if (!campaign) {
                    return { "error": "Wrong ID!" }
                }

                campaign.name = updates.name
                campaign.country = updates.country
                campaign.budget = updates.budget
                campaign.goal = updates.goal
                if (updates.category)
                    campaign.category = updates.category
                return campaign
                    .save()
                    .catch(err => {
                        return { "error": err }
                    })
            })
            .catch(err => {
                return { "error": err }
            })
    }

    this.deleteCampaign = async (id) => {
        return this.campaignDB
            .deleteOne({ _id: id })
            .then(deleted => {
                return { "done": true }
            })
            .catch(err => {
                return { "error": err }
            })
    }

}

module.exports = compaign