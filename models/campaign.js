const mongoose = require('mongoose')
const request = require('request-promise')

const compaign = function (campaignDB) {

    this.campaignDB = campaignDB

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

                let newCampaign = new this.campaignDB({
                    name: campaign.name,
                    country: campaign.country,
                    budget: campaign.budget,
                    goal: campaign.goal,
                    category
                })

                return newCampaign
                    .save()
                    .catch(err => {
                        return { "error": err }
                    })
            } else {
                let category = await this.getCategory()
                if (!category.error) {
                    let newCampaign = new this.campaignDB({
                        name: campaign.name,
                        country: campaign.country,
                        budget: campaign.budget,
                        goal: campaign.goal,
                        category
                    })

                    return newCampaign
                        .save()
                        .catch(err => {
                            return { "error": err }
                        })
                } else {
                    return { "error": category.error }
                }
            }
        } else {
            return { "error": "Wrong Budget" }
        }

    }

    this.getCampaign = async () => {
        return this.campaignDB
            .find()
            .catch(err => {
                return { "error": err }
            })
    }

}

module.exports = compaign