const { render } = require('ejs');
const database = require('../models');


class paineldousuario{
    static async encontreMeuCadastro(req, res) {
        const { id } = req.params
        try{
            const meuCadastro = await database.Clientes.findOne( {
                where: { id }})
                //return res.status(200).json(meuCadastro)
                return res.render("meucadastro", { meuCadastro });
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

                    //return res.status(200).json(usuario)
                    return res.render('meucadastroaltera', { usuario })

            } catch (error) {
                return res.status(500).json(error.message)
            }
        }

        static async encontreMeusPedidos(req, res) {
                const { cliente_id, id } = req.params
                try{
                    const pedido = await database.Pedido.findOne( {
                        where: {
                            cliente_id,
                            id
                        }})
                        // return res.status(200).json(pedido)
                        return res.render("meuPedido", { pedido })
                } catch (error) {
                    return res.status(500).json(error.message)
                }
                }

        static async redefinirSenha (req, res) {
            const { id } = req.params
            const { senha } = req.body;

            try {
                const usuarioSenha = await database.Clientes.update({ senha },
                    {where: { id }})

                return res.status(200).json(usuarioSenha)

            } catch (error) {
                return res.status(500).json(error.message)
            }
        }


    }

module.exports = paineldousuario;