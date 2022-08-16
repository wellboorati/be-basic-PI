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

<<<<<<< HEAD
  // listarProdutos: async (req,res)=>{
  //   const produtos = await database.Produto_estoque.findAll()
  //   return res.json(produtos);
  // },
  listarProdutos: async (req,res) => {
    const produtos = await database.Produto_estoque.findAll()
    return res.render("listarprodutos",{produtos},);
  },
=======
  listarProdutos: async (req,res)=>{
    //const produtos = await database.Produto_estoque.findAll()
    //return res.json(produtos);
    return res.render("listarProdutos");
  }
>>>>>>> ddc39db30d20563fe0028df6d11a524b9f6d112a


  // deletarProdutos:async (req,res)=>{
  //   //lógica de deletar

  //   return res.json();
  // },
};

module.exports = produtosEstoqueController;

