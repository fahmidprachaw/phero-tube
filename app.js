const loadData = (id) =>{
    fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`)
    .then(res => res.json())
    .then(data => displayData(data))
}

const displayData = (datas) =>{
    const data = datas.data
    const cartContainer = document.getElementById("cart-container")
    cartContainer.innerHTML = ` `;
    if (datas.status){
        data.forEach((element) => {
        console.log(element)
        const card = document.createElement("div")
        card.classList.add("col-md-4")
        card.classList.add("gap-3")
        card.innerHTML = `
                <div class="card" style="width: 18rem;">
                    <img src=${element.thumbnail} class="img-fluid card-img-top" alt="...">
                    <div class="d-flex align-items-center">
                        <div>
                            <img src=${element.authors[0].profile_picture} class="img-fluid profile-pic" alt="...">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">${element.title}</h5>
                            <p class="profile-name">${element.authors[0].profile_name}</p> 
                            <p class="profile-name">${element.others.views} views</p> 
                        </div>
                    </div>
                </div>
        `;
        cartContainer.appendChild(card)
        });
    }
    else{
        const card1 =document.createElement("div")
        card1.classList.add("text-center")
        card1.innerHTML = `
            <img src="./resource/Icon.png" alt="" srcset="">
            <h1>Oops!! Sorry, There is no</h1>
            <h1>content here</h1>

        `;

        cartContainer.appendChild(card1)
    }
}

loadData(1000)