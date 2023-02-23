
let inputSearch = document.getElementById('searchbar');

inputSearch.addEventListener('keyup',filterproduct);

// callback function

function filterproduct(){
    let filterValue = inputSearch.value.toLowerCase();
    // console.log(filterValue);
    let item = cards.querySelectorAll('.card');
    
    for(i=0;i<item.length;i++){
        let span = item[i].querySelector('.title');

        if(span.innerHTML.toLowerCase().indexOf(filterValue) > -1){
            item[i].style.display="initial";

        }
        else{
            item[i].style.display="none";
        }
    }
}



fetch('https://fakestoreapi.com/products').then((data)=>{
    return data.json();
}).then((completedata)=>{
    
    let data1=" ";
    
    completedata.map((values)=>{
        data1 +=  ` <div class="card">
        <img src=${values.image} alt="Folder" class="images">
        <div class='contnt'>
        <p class="title"> ${values.title}</p>
        <span>${values.price}</span>
        <span>${values.rating.rate}*   (${values.rating.count})</span>
        </div>
       </div>`;
    });

    document.getElementById("cards").innerHTML=data1;
}).catch((err)=>{

    console.log(err)


})




