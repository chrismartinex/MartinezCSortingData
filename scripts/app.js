//import
// import { saveToLocalStorageByName, getLocalStorage, removeFromLocalStorage } from './'

// let Data = GetData()
//connecting to the data.json file
async function GetData(){
const res = await fetch("./data/data.json");
const data = await res.json();
// console.log(data.People);
return data.People
}


let injectInfoHere = document.getElementById('injectInfoHere');

async function MainElement(){    
let Data = await GetData()
console.log(Data)

injectInfoHere.innerHTML = '';
for(i =0; i < Data.length; i++){
    console.log(Data[i]);
    let Parent = document.createElement('tr');
    let child = document.createElement('th');
    child.scope = 'col-1'

    let textContent = document.createTextNode(`${Data[i].Id}`)

    // let col = child.appendChild(textContent);

    let child1 = document.createElement('th');
    let textContent1 = document.createTextNode(`${Data[i].FirstName}`);

    // let col1 = child1.appendChild(textContent1);

    let child2 = document.createElement('th');
    let textContent2 = document.createTextNode(`${Data[i].LastName}`);

    // let col2 = child2.appendChild(textContent2);

    let child3 = document.createElement('th');
    let textContent3 = document.createTextNode(`${Data[i].Height}`);

    // let col3 = child3.appendChild(textContent3);

    let child4 = document.createElement('th');
    let textContent4 = document.createTextNode(`${Data[i].Age}`);

    // let col4 = child4.appendChild(textContent4);

    let child5 = document.createElement('th');
    let textContent5 = document.createTextNode(`${Data[i].Email}`);

    // let col5 = child5.appendChild(textContent5);


    child.appendChild(textContent)
    child1.appendChild(textContent1)
    child2.appendChild(textContent2)
    child3.appendChild(textContent3)
    child4.appendChild(textContent4)
    child5.appendChild(textContent5)


    Parent.appendChild(child);
    Parent.appendChild(child1)
    Parent.appendChild(child2)
    Parent.appendChild(child3)
    Parent.appendChild(child4)
    Parent.appendChild(child5)

    injectInfoHere.appendChild(Parent)

}

}
MainElement()







//creating the array variable that will store all the info

//   function MainElement(){
//     const data = GetData()

    
//   }
//   MainElement()



  // let peeps = data.People;
    //  injectInfoHere.innerHTML = '';
    //  console.log(data);
    //  for(i = 0; i < peeps.length; i++){
    //     console.log(peeps[1]);
    // }