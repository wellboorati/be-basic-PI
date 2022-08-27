function alterar(id){
    fetch(`http://localhost:3000/alterarprodutos/${id}`, {method:"put"})
    .then(response => console.log(response))
    .catch(e => console.log(e))
}