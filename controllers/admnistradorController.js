const database = require('../models');


class admnistrador{
    static async encontreTodosOsCadastros(req, res) {
        try{
            const todosOsCadastros = await database.Clientes.findAll()
            return res.status(200).json(todosOsCadastros)
        } catch (error) {
            return res.status(500).json(error.message)
        }
        }

        static async encontreUmCadastro(req, res) {
            const { id } = req.params
            try{
                const umCadastro = await database.Clientes.findOne( {
                    where: { id }})
                    return res.status(200).json(umCadastro)
            } catch (error) {
                return res.status(500).json(error.message)
            }
            }

        static async atualizarUmCadastro (req, res) {
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
            try{
                const meuPedido = await database.Pedido.findAll()
                return res.status(200).json(meuPedido)
                // return res.status(200).render("paineldousuario")
            } catch (error) {
                return res.status(500).json(error.message)
            }
            }

        static async encontreUmPedido(req, res) {
            const { id } = req.params
            try{
                // const meuPedido = await database.Pedido.findAll()
                // return res.status(200).json(meuPedido)
                // return res.status(200).render("paineldousuario")
                 const umPedido = await database.Pedido.findOne( {
                    where: { id: Number(id) }})
                    return res.status(200).json(umPedido)
            } catch (error) {
                return res.status(500).json(error.message)
            }
            }


    }

module.exports = admnistrador;