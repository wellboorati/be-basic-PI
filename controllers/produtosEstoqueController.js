const database = require("../models");

const produtosEstoqueController = {
  cadastro_produtos_estoque: async (req, res) => {
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

    const produtosEstoque = await database.Produto_estoque.create({
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
    });

    return res.redirect("listarProdutos");
  },

  productInventoryPage: (req, res) => {
    return res.render("produtosestoque");
  },

  listarProdutos: async (req, res) => {
    const produtos = await database.Produto_estoque.findAll();
    return res.render("listarprodutos", { produtos });
  },

  deletarProdutos: async (req, res) => {
    const { id } = req.params;
    try {
      const excluir = await database.Produto_estoque.destroy({
        where: { id: Number(id) },
      });
      res.status(200).json({ mensagem: `id ${id} deletado` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  },

  produtoDeletado: (req, res) => {
    return res.render("produtoDeletado");
  },

  //  atualizarProdutos:async (req, res)=> {
  //   const { id } = req.query;

  //   try {
  //       const alterar = await database.Produto_estoque.findOne({
  //           where: { id },
  //       });
  //           return res.status(200).render("alterarprodutos",{alterar})
  //   } catch (error) {
  //       return res.status(500).json(error.message);
  //   }
  // },

  // atualizarProduto:async (req, res)=> {
  //   const { id } = req.query;
  //   const {
  //   nome, preco, cor, p_quantidade_disponivel, m_quantidade_disponivel,
  //   g_quantidade_disponivel, ativo } = req.body;
  //   }

  //   try {
  //     const usuario = await database.Produto_estoque.update(
  //       { nome, preco, cor, p_quantidade_disponivel, m_quantidade_disponivel,
  //         g_quantidade_disponivel, ativo },
  //       { where: { id } }
  //       )
  //       return res.render("adminpageCadastros");
  //     } catch (error) {
  //       return res.status(500).json(error.message);
  //     }
};

module.exports = produtosEstoqueController;
