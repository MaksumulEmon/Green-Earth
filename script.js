
const categoryContainer = document.getElementById('categoryContainer');
const tressContainer = document.getElementById('tressContainer');
const loadingSpainer = document.getElementById('loadingSpainer');


async function loadCategries() {
    const res = await fetch("https://openapi.programming-hero.com/api/categories");
    const data = await res.json();
    console.log(data.categories);
    data.categories.forEach(category => {
        const btn = document.createElement('button');
        btn.className = "btn btn-outline  font-semibold w-full";
        btn.innerText = category.category_name;
        categoryContainer.appendChild(btn);
    });
}


async function alltress() {
    loadingSpainer.classList.remove("hidden")
    loadingSpainer.classList.add("flex")
    const res = await fetch("https://openapi.programming-hero.com/api/plants");
    const data = await res.json();
    loadingSpainer.classList.add("hidden")
    console.log(data.plants);
    data.plants.forEach(category => {
        console.log(category);
        const card = document.createElement("div");
        const className = "bg-white p-4 rounded space-y-2 cursor-pointer ";
        card.innerHTML = `
            
                        <img class="h-60 w-full object-cover rounded-xl" src="${category.image}"
                         alt="${category.name}">
                        <h4 class="text-left font-bold">Mango Tree</h4>
                        <p class="text-left text-[12px] opacity-0.8 line-clamp-2">A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense
                            green !</p>
                        <div class="flex justify-between">
                            <p class="font-semibold bg-[#dcfce7] py-1 px-3 text-[14px] rounded-full">Fruit Tree</p>
                            <p class="font-bold">500$</p>

                        </div>

                        <button class="btn btn-success rounded-full w-full mt-2">Success</button>

                   
        `;
        tressContainer.appendChild(card)

    })
}

loadCategries();
alltress();

