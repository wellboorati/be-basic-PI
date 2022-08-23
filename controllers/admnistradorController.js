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
            const {
                nome, email, sexo, cpf, data_nascimento, telefone, senha, endereco, numero, complemento, bairro, cidade, estado, cep
                } = req.body;

            try {
                const usuario = await database.Clientes.update({ nome, email, senha, sexo, cpf, data_nascimento, telefone },
                    {where: { id }})

                const usuarioEndereco = await database.Cliente_endereco.update({ endereco, numero, complemento, bairro, cidade , estado, cep },
                    {where: { id }})

                    return res.status(200).json(usuario)

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