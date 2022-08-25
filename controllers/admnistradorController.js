const database = require("../models");

class admnistrador {
  static async encontreTodosOsCadastros(req, res) {
    try {
      const todosOsCadastros = await database.Clientes.findAll();
      return res.status(200).json(todosOsCadastros);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async encontreUmCadastro(req, res) {
    const { id } = req.params;
    try {
      const umCadastro = await database.Clientes.findOne({
        where: { id },
      });
      return res.status(200).json(umCadastro);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async atualizarUmCadastro(req, res) {
    const { id } = req.params;
    const {
      nome,
      email,
      sexo,
      cpf,
      data_nascimento,
      telefone,
      senha,
      endereco,
      numero,
      complemento,
      bairro,
      cidade,
      estado,
      cep,
    } = req.body;

    try {
      const usuario = await database.Clientes.update(
        { nome, email, senha, sexo, cpf, data_nascimento, telefone },
        { where: { id } }
      );

      const usuarioEndereco = await database.Cliente_endereco.update(
        { endereco, numero, complemento, bairro, cidade, estado, cep },
        { where: { id } }
      );

      return res.status(200).json(usuario);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  // PEDIDO
  static async todosOsPedidos(req, res) {
    try {
      const meuPedido = await database.Pedido.findAll();
      return res.status(200).json(meuPedido);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async encontreUmPedido(req, res) {
    const { cliente_id, id } = req.params;
    try {
      const umPedido = await database.Pedido.findOne({
        where: {
          cliente_id: Number(cliente_id),
          id: Number(id),
        },
      });
      return res.status(200).json(umPedido);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  // PRODUTO
  static async todosOsProdutos(req, res) {
    try {
      const produtos = await database.Produto_estoque.findAll();
      return res.status(200).json(produtos);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async atualizarUmProduto(req, res) {
    const { id } = req.params;
    const {
      fornecedor_id,
      categoria_id,
      nome,
      preco,
      cor,
      p_quantidade_disponivel,
      m_quantidade_disponivel,
      g_quantidade_disponivel,
      image_url,
      ativo,
    } = req.body;

    try {
      const produtos = await database.Produto_estoque.update(
        {
          fornecedor_id,
          categoria_id,
          nome,
          preco,
          cor,
          p_quantidade_disponivel,
          m_quantidade_disponivel,
          g_quantidade_disponivel,
          image_url,
          ativo,
        },
        { where: { id } }
      );

      return res.status(200).json(produtos);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async deletarUmProduto(req, res) {
    const { id } = req.params;

    try {
        const deletarProduto = await database.Produto_estoque.destroy({
            where: { id },
          });

          return res.status(200).json(deletarProduto);
        } catch (error) {
          return res.status(500).json(error.message);
        }
      }

  //FORNECEDOR
  static async encontreTodosOsFornecedores(req, res) {
    try {
      const todosOsFornecedores = await database.Fornecedores.findAll();
      return res.status(200).json(todosOsFornecedores);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async encontreUmFornecedor(req, res) {
    const { id } = req.params;
    try {
      const umFornecedor = await database.Fornecedores.findOne({
        where: { id },
      });
      return res.status(200).json(umFornecedor);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async atualizarUmFornecedor(req, res) {
    const { id } = req.params;
    const {
      nome_empresa,
      nome_contato,
      produto,
      telefone,
      email,
      endereco,
      numero,
      complemento,
      bairro,
      cidade,
      estado,
    } = req.body;

    try {
      const fornecedor = await database.Fornecedores.update(
        {
          nome_empresa,
          nome_contato,
          produto,
          telefone,
          email,
          endereco,
          numero,
          complemento,
          bairro,
          cidade,
          estado,
        },
        { where: { id } }
      );

      return res.status(200).json(fornecedor);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }


  static async deletarUmFornecedor(req, res) {
    const { id } = req.params;

    try {
        const deletarFornecedor = await database.Fornecedores.destroy({
            where: { id },
          });

          return res.status(200).json(deletarFornecedor);
        } catch (error) {
          return res.status(500).json(error.message);
        }
      }
}

module.exports = admnistrador;
