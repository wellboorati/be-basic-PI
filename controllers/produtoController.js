const database = require("../models");

class produtoController {
  static async listarTodosOsProdutos(req, res) {
    try {
      const { categoria } = req.query;
      const produtos = await database.Produto_estoque.findAll(
        categoria ? { where: { categoria_id: categoria } } : {}
      );
      return res.status(200).render("produtos", { produtos });
      // return res.status(200).json(todosOsProdutos)
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async categorias(req, res) {
    try {
      const produtos = await database.Produto_estoque.findAll(
        "Camiseta Gola V"
      );
      // return res.render("produtos",{produtos})
      return res.status(200).json(produtos);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }


static async listarProduto(req, res) {
  const { id } = req.query
  try{
      const detalheproduto = await database.Produto_estoque.findOne( {
          where: {
              id
          }})
          console.log(detalheproduto)
          return res.status(200).render("productdetails", {detalheproduto})
          // return res.status(200).json(meuPedido)
  } catch (error) {
      return res.status(500).json(error.message)
  }
  }

  // static async carrinhoPage (req, res) {
  //   return res.render('carrinho')
  // }

  static async produtoCarrinho(req, res) {
    const { id } = req.query
    try{
        const detalheproduto = await database.Produto_estoque.findOne( {
            where: {
                id
            }})
            return res.status(200).render("carrinho", {detalheproduto})
            // return res.status(200).json(detalheproduto)
    } catch (error) {
        return res.status(500).json(error.message)
    }
    }


static async productDetailsPage(req, res) {
  return res.render('productdetails')
}

}

module.exports = produtoController;
