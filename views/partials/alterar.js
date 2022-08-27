function alterar(id,body){
    fetch(`http://localhost:3000/alterarprodutos/${id}`, {method:"put", 
    body
})
    .then(response => console.log(response))
    .catch(e => console.log(e))
}


// const requestOptions = {
//     method: 'PUT',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ title: 'Fetch PUT Request Example' })
// };
// fetch('https://reqres.in/api/articles/1', requestOptions)
//     .then(response => response.json())
//     .then(data => element.innerHTML = data.updatedAt );