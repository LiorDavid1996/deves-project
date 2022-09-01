let usersUrl= "https://my-json-server.typicode.com/Jeck99/fake-server/users"

async function printTable(params) {
    
    let users = await fetch(usersUrl)
     .then(data=> data.json())
     
     users.forEach(user => {
        trContainer.innerHTML+=tableTemplate(user)   
     });   
}
printTable()

function tableTemplatesa(user) {
    return `
    <tr>
    <td>${user.name.first} </td>
    <
    <td>${user.name.last} </td>
    <td>${user.age} </td>
    <td>${user.email} </td>
    <td>${user.phone} </td>
    <td> <button type="button" class="btn btn-danger" onclick="deleteUsers(this)">delete</button></td>
    </tr>
    `
}

async function deleteUsers(){
    try{
        await fetch(usersUrl,
        {
            method:"delete",
            body:JSON.stringify(data),
            Headers:{
                'Contact-Type' : 'application/json'
            }
        }
            )
    }
    catch(error) {}
    finally {}
}