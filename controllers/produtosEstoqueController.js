const database = require("../models");

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

      fornecedor_id,
      nome,
      preco,
      quantidade_disponivel: quantidade,
      ativo,
    });


    return res.redirect("/listarprodutos");
  },

  productInventoryPage: (req, res) => {
    return res.render("produtosestoque");//ou res.json
  },

  // listarProdutos: async (req,res)=>{
  //   const produtos = await database.Produto_estoque.findAll()
  //   return res.json(produtos);
  // },
  listarProdutos: async (req,res) => {
    const produtos = await database.Produto_estoque.findAll()
    return res.render("listarprodutos",{produtos},);
  },


  // deletarProdutos:async (req,res)=>{
  //   //lógica de deletar

  //   return res.json();
  // },
};

module.exports = produtosEstoqueController;

