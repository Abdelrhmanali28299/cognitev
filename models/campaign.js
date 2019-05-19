const mongoose = require('mongoose')
const request = require('request')

const compaign = (campaignDB) => {
    
    this.campaignDB = campaignDB

    this.addCampaign = async (campaign) => {
        
        let category = campaign.category
        if(category) {

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
                    return {"error": err}
                })
        } else {
            request('https://ngkc0vhbrl.execute-api.eu-west-1.amazonaws.com/api/?url=https://arabic.cnn.com/', function (error, response, body) {
                if(error)
                    return {"error": error}
                if(response) {
                    category = body.category.name

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
                            return {"error": err}
                        })
                }
            })
        }
        
    }

    this.getCampaign = async () =>{
        return this.campaignDB
            .find({})
            .catch(err => {
                return {"error": err}
            })
    }

}