const database = require("../models");
// const fornecedor = require("../controllers/fornecedorController/")


const produtosEstoqueController = {
  cadastro_produtos_estoque: async (req, res) => {
    const {
      fornecedor_id,
      nome,
      preco,
      quantidade,
      ativo,
    } = req.body;


    const produtosEstoque = await database.Produto_estoque.create({
      // fornecedor_id: fornecedor.id,
      fornecedor_id,
      nome,
      preco,
      quantidade_disponivel: quantidade,
      ativo,
    });

    console.log(produtosEstoque);

    return res.json({
      fornecedor_id: produtosEstoque.id,
      nome: produtosEstoque.nome,
      preco: produtosEstoque.preco,
      quantidade: produtosEstoque.quantidade_disponivel,
      ativo: produtosEstoque.ativo,
    });
  },

  productInventoryPage: (req, res) => {
    return res.render("produtosestoque");
  },

};

module.exports = produtosEstoqueController;