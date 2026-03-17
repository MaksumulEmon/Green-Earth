
// const categoryContainer = document.getElementById('categoryContainer');
// const tressContainer = document.getElementById('tressContainer');
// const loadingSpainer = document.getElementById('loadingSpainer');



// function showLoading() {
//     loadingSpainer.classList.remove("hidden");
//     tressContainer.innerHTML = "";
// }

// function hideLoading() {
//     loadingSpainer.classList.remove("flex")
// }
// async function loadCategries() {
//     const res = await fetch("https://openapi.programming-hero.com/api/categories");
//     const data = await res.json();
//     console.log(data.categories);
//     data.categories.forEach(category => {
//         const btn = document.createElement('button');
//         btn.className = "btn btn-outline  font-semibold w-full";
//         btn.innerText = category.category_name;
//         btn.onclick = () => selectedCategory(category.id, btn)

//         categoryContainer.appendChild(btn);
//     });
// }


// async function selectedCategory(categoryID, btn) {
//     console.log(categoryID, btn)
//     showLoading()

//     const allButtons = document.querySelectorAll("#categoryContainer button ,#allTressBtn")
//     console.log(allButtons);
//     allButtons.forEach(btn => {
//         btn.classList.remove("btn-primary")
//         btn.classList.add("btn-outline")
//     })

//     btn.classList.add("btn-primary")
//     btn.classList.remove("btn-outline")

 
//     const res = await fetch(`https://openapi.programming-hero.com/api/category/${categoryID}`);
//     const data = await res.json();
//     console.log(data);
//     alltress(data.plants)
// }

// async function alltress() {
//     showLoading();
//     const res = await fetch("https://openapi.programming-hero.com/api/plants");
//     const data = await res.json();
//     hideLoading();
//     console.log(data.plants);
//     data.plants.forEach(category => {
//         console.log(category);
//         const card = document.createElement("div");
//         const className = "bg-white p-4 rounded space-y-2 cursor-pointer ";
//         card.innerHTML = `
            
//                         <img class="h-60 w-full object-cover rounded-xl" src="${category.image}"
//                          alt="${category.name}">
//                         <h4 class="text-left font-bold">Mango Tree</h4>
//                         <p class="text-left text-[12px] opacity-0.8 line-clamp-2">A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense
//                             green !</p>
//                         <div class="flex justify-between">
//                             <p class="font-semibold bg-[#dcfce7] py-1 px-3 text-[14px] rounded-full">Fruit Tree</p>
//                             <p class="font-bold">500$</p>

//                         </div>

//                         <button class="btn btn-success rounded-full w-full mt-2">Success</button>

                   
//         `;
//         tressContainer.appendChild(card)

//     })
// }

// loadCategries();
// alltress();







const categoryContainer = document.getElementById('categoryContainer');
const tressContainer = document.getElementById('tressContainer');
const loadingSpainer = document.getElementById('loadingSpainer');

function showLoading() {
    loadingSpainer.classList.remove("hidden");
    loadingSpainer.classList.add("flex");
    tressContainer.innerHTML = "";
}

function hideLoading() {
    loadingSpainer.classList.add("hidden");
}

async function loadCategries() {
    const res = await fetch("https://openapi.programming-hero.com/api/categories");
    const data = await res.json();

    data.categories.forEach(category => {
        const btn = document.createElement('button');

        btn.className = "btn btn-outline font-semibold w-full";
        btn.innerText = category.category_name;

        btn.onclick = () => selectedCategory(category.id, btn);

        categoryContainer.appendChild(btn);
    });
}

async function selectedCategory(categoryID, btn) {

    showLoading();

    const allButtons = document.querySelectorAll("#categoryContainer button , #allTressBtn");

    allButtons.forEach(button => {
        button.classList.remove("btn-primary");
        button.classList.add("btn-outline");
    });

    btn.classList.add("btn-primary");
    btn.classList.remove("btn-outline");

    const res = await fetch(`https://openapi.programming-hero.com/api/category/${categoryID}`);
    const data = await res.json();

    displayTrees(data.plants);
}

function displayTrees(plants) {

    hideLoading();

    plants.forEach(tree => {

        const card = document.createElement("div");

        card.className = "bg-white p-4 rounded space-y-2 cursor-pointer";

        card.innerHTML = `
            <img class="h-60 w-full object-cover rounded-xl" src="${tree.image}" alt="${tree.name}">
            <h4 class="text-left font-bold">${tree.name}</h4>
            <p class="text-left text-[12px] opacity-80 line-clamp-2">${tree.description || "No description available"}</p>

            <div class="flex justify-between">
                <p class="font-semibold bg-[#dcfce7] py-1 px-3 text-[14px] rounded-full">${tree.category}</p>
                <p class="font-bold">$${tree.price || 500}</p>
            </div>

            <button class="btn btn-success rounded-full w-full mt-2">Buy Now</button>
        `;

        tressContainer.appendChild(card);
    });
}

async function alltress() {

    showLoading();

    const res = await fetch("https://openapi.programming-hero.com/api/plants");
    const data = await res.json();

    displayTrees(data.plants);
}

loadCategries();
alltress();