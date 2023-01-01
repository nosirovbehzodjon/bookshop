/*sellectors*/
const content = document.querySelector("#content");
const sidebar = document.querySelector("#sidebar");
const allbooksBtn = document.querySelector("#allbooks");
const expensiveBtn = document.querySelector("#expensive");
const cheepBtn = document.querySelector("#cheep");
const middleBtn = document.querySelector("#middle");
const totalPrice = document.querySelector(".total-price");
const footerTotalPrice = document.querySelector("footer .total-price");
const filterTitle = document.querySelector(".filter-title");
const footerFilterTitle = document.querySelector("footer .filter-title");
const searchInp = document.querySelector("#search");
const searchPriceInp = document.querySelector("#searchPrice");
const searchMaxBtn = document.querySelector("#searchMaxBtn");
const searchMinBtn = document.querySelector("#searchMinBtn");
const visibleBtn = document.querySelector("#visible-btn");
const hiddenBtn = document.querySelector("#hidden-btn");
const data = [
    {
        id: 1,
        title: "Umrning bir lahzasi!",
        description: "Inson umir va hayot yo'liga bag'ishlanadi.",
        price: 9000,
        status: "cheep",
    },
    {
        id: 2,
        title: "Baxtiyor oila!",
        description: "Islomi hayot va oila.",
        price: 150000,
        status: "expensive",
    },
    {
        id: 3,
        title: "Otamdan qolgan dalalar.",
        description: "Insoniylik.",
        price: 50000,
        status: "middle",
    },
    {
        id: 4,
        title: "Ilm olish sirlari!",
        description: "Ilm olish siralari islomiy shakilda.",
        price: 100000,
        status: "expensive",
    },
    {
        id: 5,
        title: "Yulduzli tunlar!",
        description: "Yaxshi kitob bo'lsa kerak.",
        price: 6000,
        status: "cheep",
    },
    {
        id: 6,
        title: "Kichkina shahzoda",
        description: "Filni yutayotgan ilon yohut shlyapa mash-mashalari.",
        price: 80000,
        status: "middle",
    },
    {
        id: 7,
        title: "Shaytanat",
        description: "Lorem fndslk nflk ssdlkfslkfnsflknsdflknfdslf flks",
        price: 90000,
        status: "middle",
    },
];

function createCard(title, desk, price) {
    /*create element*/
    const card = document.createElement("div");
    const topCard = document.createElement("div");
    const cardTitle = document.createElement("h2");
    const cardDesk = document.createElement("p");
    const cardPrice = document.createElement("p");
    /*add class*/
    card.className = "card";
    topCard.className = "topCard";
    cardTitle.className = "cardTitle";
    cardDesk.className = "cardDesk";
    cardPrice.className = "cardPrice";
    /*add text*/
    topCard.textContent = "BOOKS";
    cardTitle.textContent = title;
    cardDesk.textContent = desk;
    cardPrice.textContent = `Narxi: ${price} so'm`;
    /*append element*/
    card.append(topCard);
    card.append(cardTitle);
    card.append(cardDesk);
    card.append(cardPrice);
    return card;
}

function getData(array) {
    let totalSum = 0;
    for (let i = 0; i < array.length; i++) {
        totalSum = totalSum + array[i].price;
        content.append(
            createCard(array[i].title, array[i].description, array[i].price)
        );
    }
    totalPrice.textContent = `Totatal price: ${totalSum} so’m`;
    footerTotalPrice.textContent = `Totatal price: ${totalSum} so’m`;
}

function filterStatusData(array, status) {
    filterTitle.textContent = status;
    footerFilterTitle.textContent = status;
    let empty = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].status == status.toLowerCase()) {
            empty.push(array[i]);
        }
    }
    content.innerHTML = "";
    getData(empty);
}

//initial card
getData(data);

allbooksBtn.addEventListener("click", function () {
    filterTitle.textContent = "All books";
    footerFilterTitle.textContent = "All books";
    content.innerHTML = "";
    getData(data);
});

expensiveBtn.addEventListener("click", function () {
    filterStatusData(data, "Expensive");
});

cheepBtn.addEventListener("click", function () {
    filterStatusData(data, "Cheep");
});

middleBtn.addEventListener("click", function () {
    filterStatusData(data, "Middle");
});
searchMaxBtn.addEventListener("click", function () {
    if (searchPriceInp.value == "" || isNaN(searchPriceInp.value)) {
        alert("Qiymat kiritishda xatoga yo'l qo'yfingiz!");
    } else {
        let maxArr = [];
        filterTitle.textContent = `Higher than ${searchPriceInp.value}`;
        footerFilterTitle.textContent = `Higher than ${searchPriceInp.value}`;
        for (let i = 0; i < data.length; i++) {
            if (data[i].price >= searchPriceInp.value) {
                maxArr.push(data[i]);
            }
        }
        content.innerHTML = "";
        getData(maxArr);
    }
});
searchMinBtn.addEventListener("click", function () {
    if (searchPriceInp.value == "" || isNaN(searchPriceInp.value)) {
        alert("Qiymat kiritishda xatoga yo'l qo'yfingiz!");
    } else {
        let minArr = [];
        filterTitle.textContent = `Lower than ${searchPriceInp.value}`;
        footerFilterTitle.textContent = `Lower than ${searchPriceInp.value}`;
        for (let i = 0; i < data.length; i++) {
            if (data[i].price <= searchPriceInp.value) {
                minArr.push(data[i]);
            }
        }
        content.innerHTML = "";
        getData(minArr);
    }
});
searchInp.addEventListener("input", function (e) {
    let searchResult = e.target.value;
    let searchD = data.filter((item) =>
        item.title.toLowerCase().includes(searchResult.toLowerCase())
    );
    content.innerHTML = "";
    getData(searchD);
});

//---------------
window.addEventListener("resize", function (e) {
    if (e.target.innerWidth > 750) {
        sidebar.style.transform = "translateX(0%)";
    }
});
visibleBtn.addEventListener("click", function () {
    sidebar.style.transform = "translateX(0%)";
});
hiddenBtn.addEventListener("click", function () {
    sidebar.style.transform = "translateX(-100%)";
});
