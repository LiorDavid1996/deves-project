let userPost="https://my-json-server.typicode.com/Jeck99/fake-server/devices"
let data={}
const form = document.getElementById('postForm')
const resultOutput=document.getElementById('result')
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    //create an array that contains all the fields
    Array.from(form.elements)
    // take each index and assign to the data object
    .forEach(element =>
        {if(elementname!='submit')
        data[element.name]=element.value}
    );

    
    const validationResult=validation()
    if(!validationResult){postDevise();
        resultOutput.style.color='green'
        resultOutput.innerHTML=
    `Thank you, a price valuation will be sent to your email in 3 business days
    `}
    else{
        resultOutput.style.color='red';
        for (let index = 0; index < validationResult.length; index++) {
            const element = validationResult[index];
            resultOutput.innerHTML+=`
            <p>${element}</>
            `
        }
        ;return false}
})

async function postDevise(params) {
    try{
        await fetch(userPost,
        {
            method:"post",
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

function validation (){
const errLog=[]
for (const key in data) {
        const element = data[key];
        //checks if the element is empty?
        if (element=="")errLog.push(`${key} can not be empty`)
        //check only if the input's name is one of the two for any char that is neither letter nor whitespace

        if(key==('firstName'||"lastName")){
            if(element.match(/[^A-Za-z,\s]+/g))errLog.push(`a ${key} can contain only letters from the English alphabet`)
        }
        // see if the email has the at sign and that it appears only once
    if(key=='email'){
    const atSign=element.indexOf('@')
    console.log(atSign);
    if(atSign==-1||element.lastIndexOf('@')!=atSign ){errLog.push(`the email must have  one "@" (only one)`)}
    }
    }
    if(errLog.length)return errLog
    return false
}
