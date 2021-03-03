const { create } = require("../model/valuemodel");
const Racao = require("../model/valuemodel");
module.exports = {
    async create(req , res){
        const racao = await Racao.create(req.body)
        return res.status(201).json(racao)
    }
}