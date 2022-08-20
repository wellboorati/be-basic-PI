const database = require('../models');


class paineldousuario{
    static async encontreMeuCadastro(req, res) {
        const { id } = req.params
        try{
            // const meuCadastro = await database.Clientes.findAll()
            // return res.status(200).json(meuCadastro)
            // return res.status(200).render("paineldousuario")
            console.log(id)
            const meuCadastro = await database.Clientes.findOne( {
                where: { id:id }})
                return res.status(200).json(meuCadastro)
        } catch (error) {
            return res.status(500).json(error.message)
        }
        }

        static async atualizarMeuCadastro (req, res) {
            const { id } = req.params
            const informacoes = req.body
            try {
                await database.Clientes.update(informacoes, {where: {id: Number(id)}})
                const atualizarMeuCadastro = await database.Pessoas.findOne( {
                    where: { id: Number(id)}})
                    return res.status(200).json(atualizarMeuCadastro)
            } catch (error) {
                return res.status(500).json(error.message)
            }
        }

        static async encontreMeusPedidos(req, res) {
            const { id } = req.params
            try{
                // const meuPedido = await database.Pedido.findAll()
                // return res.status(200).json(meuPedido)
                // return res.status(200).render("paineldousuario")
                 const meuPedido = await database.Pedido.findOne( {
                    where: { id: Number(id) }})
                    return res.status(200).json(meuPedido)
            } catch (error) {
                return res.status(500).json(error.message)
            }
            }


    }

module.exports = paineldousuario;