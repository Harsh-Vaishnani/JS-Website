let maindiv = document.querySelector(".container");

let fachdata = async () => {
    try {
        let data = await fetch("https://fakestoreapi.com/products");
        let products = await data.json();
        renderdata(products);
    } catch (error) {
        console.log(error);
    }
};

let renderdata = (Data) => {
    Data.forEach(ele => {
        console.log(ele);
        let div = document.createElement("div");
        let img = document.createElement("img");
        let title = document.createElement("h1");
        let price = document.createElement("h4");
        price.style.color="darkgreen";
        price.style.fontWeight="lighter";
        price.style.fontSize="20px";
        let category = document.createElement("h4");
        category.style.fontStyle = "italic";
        category.style.fontSize = "18px";
        img.src = ele.image;
        title.innerText = `Title: ${ele.title}`;
        price.innerText = `Price: $${ele.price}`;
        category.innerText = `Category: ${ele.category}`;
        div.append(img, title, price, category);
        maindiv.append(div);
    });
};

fachdata();