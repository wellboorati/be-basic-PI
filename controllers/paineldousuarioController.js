const database = require('../models');


class paineldousuario{
    static async encontreMeuCadastro(req, res) {
        const { id } = req.params
        try{
            const meuCadastro = await database.Clientes.findOne( {
                where: { id }})
                return res.status(200).json(meuCadastro)
        } catch (error) {
            return res.status(500).json(error.message)
        }
        }

        static async atualizarMeuCadastro (req, res) {
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