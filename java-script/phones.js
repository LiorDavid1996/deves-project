let url = "https://my-json-server.typicode.com/Jeck99/fake-server/devices";


function openModal(el) {
  el.nextElementSibling.style.display = "block";
}

function closeModal(el) {
  el.parentNode.parentNode.style.display = "none";
}

async function printScreen(params) {

  let devices = await fetch(url).then((data) => data.json());
  devices.forEach((device,index) => {
    container.innerHTML += cardTemplate(device),brands[index] ;
  });

}
const brands=["Galaxy S22","Galaxy S22","iphone 12","radmi note 11","experia 7","pixel 2","iphone 13 pro","iphone x","experia 9","iphone 11","iphone 12 pro","pixel 5","experia nav","radmi not2","iphone 12 pro max"]
let phons=[ "1phone.png","2phone.png","3phone.png","4phone.png","5phone.png","6phone.png","7phone.png","8phone.png","9phone.png","10phone.png","11phone.png","12phone.png","13phone.png","14phone.png","15phone.png",


]
printScreen();
let content=0
let cont=0
function cardTemplate(device) {

  return `
    <div class=" col-md-4 col-sm-1  justify-content-center p-3"   >
        <img src="../Photos/phones/${phons[cont++]}" class="phone_img" alt="" onclick="openModal(this)";>
      <div id="modal-l">
        <div class="modal-content-l">
                <span class="close-l" onclick="closeModal(this)">&times;</span>
                <p  class="h4 ">brand:${device.brand}</p>
                <hr>
                <p  class="h4">isAvailable:${device.isAvailable}</p>
                <hr>
                <p class="h4">createdAt:${device.createdAt}</p>
                <hr>
                <p class="h4">color:${device.color}</p>
                <hr>
                <p class="h4">id:${device.id}</p>
                <hr>
                 <p class="h4">ram:${device.ram}</p>
                <hr>
                 <p class="h4">price:${device.price}</p>
                <hr>

                 <button type="button" class="btn btn-danger">delete</button>
                 <button type="button" class="btn btn-primary">buy now</button>
                 </div>
      </div>
      <h1 id="h1text">${brands[content++]}</h1>
      <div id="box_Contener"></div>
    </div>  
    `;
}
