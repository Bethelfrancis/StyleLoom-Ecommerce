const displayProducts = document.querySelector('.styleloom-products');
const hambuger = document.querySelector('.hambuger');
const dropdownMenu = document.querySelector('.dropdown-menu');
const navbar = document.querySelector('.navbar');
const navBtn = document.querySelectorAll('.buton');


let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollTop > lastScrollTop) {
        navbar.style.top = '-70px';
    } else {
        navbar.style.top = '0';
    }

    lastScrollTop = currentScrollTop <= 0 
    ? 0 
    : currentScrollTop;
});

hambuger.addEventListener('click', () => {
    hambuger.classList.toggle('open');
    dropdownMenu.classList.toggle('open');

    if (dropdownMenu.classList.contains('open')) {
        document.body.classList.add('no-scroll')
    } else {
        document.body.classList.remove('no-scroll')
    }
})

navBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        hambuger.classList.remove('open')
        dropdownMenu.classList.remove('open')
        document.body.classList.remove('no-scroll')
    })
})

const allProduct = [
    {
        id: 0,
        name: 'Timeless A-line Evening Dress',
        person: 'Women',
        type: 'Womenswear',
        fit: 'Ankle-length',
        price: 109.99,
        image: 'images/home/neck-lace-bl.png'
    },
    {
        id: 1,
        name: 'Floral Bloom Maxi Dress',
        person: 'Women',
        type: 'Womenswear',
        fit: 'Slin Fit',
        price: 54.99,
        image: 'images/home/slin-fit.png'
    },
    {
        id: 2,
        name: 'Elegant Evening Gown',
        person: 'Women',
        type: 'Womenswear',
        fit: 'Flowing skirt',
        price: 89.99,
        image: 'images/home/flowing-skit.png'
    },
    {
        id: 3,
        name: 'Urban Chic Handbag',
        person: 'Women',
        type: 'Accessories',
        fit: 'Spacious',
        price: 49.99,
        image: 'images/home/spacious.png'
    },
    {
        id: 4,
        name: 'Sophisticate Sun Hat',
        person: 'Women',
        type: 'Accessories',
        fit: 'One size fits all',
        price: 24.99,
        image: 'images/home/hat.png'
    },
    {
        id: 5,
        name: 'Boho Chin Printed Scarf',
        person: 'Women',
        type: 'Womenswear',
        fit: 'Lightweight',
        price: 19.99,
        image: 'images/home/ligthweight.png'
    },
    {
        id: 6,
        name: 'Sophisticate Sun Hat',
        person: 'Women',
        type: 'Accessories',
        fit: 'One size fits all',
        price: 24.99,
        image: 'images/home/no-look-hat.png'
    },
    {
        id: 7,
        name: 'Timeless A-line Evening Dress',
        person: 'Men',
        type: 'Menswear',
        fit: 'Party',
        price: 200,
        image: 'images/home/school-bag.png'
    },
    {
        id: 8,
        name: 'Timeless A-line Evening Dress',
        person: 'Men',
        type: 'Menswear',
        fit: 'Party',
        price: 200,
        image: 'images/home/suit-men-blue.png'
    },
    {
        id: 9,
        name: 'Timeless A-line Evening Dress',
        person: 'Men',
        type: 'Menswear',
        fit: 'Party',
        price: 200,
        image: 'images/home/yell-me.png'
    },
    {
        id: 10,
        name: 'Timeless A-line Evening Dress',
        person: 'Men',
        type: 'Menswear',
        fit: 'Party',
        price: 200,
        image: 'images/home/kon-shoe.png'
    },
    {
        id: 11,
        name: 'Timeless A-line Evening Dress',
        person: 'Men',
        type: 'Menswear',
        fit: 'Party',
        price: 200,
        image: 'images/home/cin.png'
    },
    {
        id: 12,
        name: 'Timeless A-line Evening Dress',
        person: 'Men',
        type: 'Menswear',
        fit: 'Party',
        price: 200,
        image: 'images/home/causual-wear.png'
    },
    {
        id: 13,
        name: 'Timeless A-line Evening Dress',
        person: 'Men',
        type: 'Menswear',
        fit: 'Party',
        price: 200,
        image: 'images/home/srip-suit.png'
    },
    {
        id: 14,
        name: 'Timeless A-line Evening Dress',
        person: 'Men',
        type: 'Menswear',
        fit: 'Party',
        price: 200,
        image: 'images/home/short.png'
    },
    {
        id: 15,
        name: 'Timeless A-line Evening Dress',
        person: 'Men',
        type: 'Menswear',
        fit: 'Party',
        price: 200,
        image: 'images/home/nice-sort.png'
    },
    {
        id: 16,
        name: 'Timeless A-line Evening Dress',
        person: 'Men',
        type: 'Menswear',
        fit: 'Party',
        price: 200,
        image: 'images/home/og-yahoo-boy.png'
    },
    {
        id: 17,
        name: 'Timeless A-line Evening Dress',
        person: 'Men',
        type: 'Menswear',
        fit: 'Party',
        price: 200,
        image: 'images/home/blue.png'
    },
    {
        id: 18,
        name: 'Timeless A-line Evening Dress',
        person: 'Men',
        type: 'Menswear',
        fit: 'Party',
        price: 200,
        image: 'images/home/togeter.png'
    },
    {
        id: 19,
        name: 'Timeless A-line Evening Dress',
        person: 'Men',
        type: 'Menswear',
        fit: 'Party',
        price: 200,
        image: 'images/home/show-dem.png'
    },
    {
        id: 20,
        name: 'Timeless A-line Evening Dress',
        person: 'Men',
        type: 'Menswear',
        fit: 'Party',
        price: 200,
        image: 'images/home/white-suit.png'
    },
    {
        id: 21,
        name: 'Timeless A-line Evening Dress',
        person: 'Men',
        type: 'Menswear',
        fit: 'Party',
        price: 200,
        image: 'images/home/kid-suit.png'
    },
    {
        id: 22,
        name: 'Timeless A-line Evening Dress',
        person: 'Men',
        type: 'Menswear',
        fit: 'Party',
        price: 200,
        image: 'images/home/swtwe.png'
    },
    {
        id: 23,
        name: 'Timeless A-line Evening Dress',
        person: 'Men',
        type: 'Menswear',
        fit: 'Party',
        price: 200,
        image: 'images/home/japan-girls.png'
    }
]


// function shuffleArray(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
//     return array;
// }

// const displayRandomProducts = (numProducts) => {
//     const shuffledProducts = shuffleArray([...allProduct]);
//     const randomProducts = shuffledProducts.slice(0, numProducts);

//     displayProduct(randomProducts);
// }

// const displayProduct = (products) => {
//     displayProducts.innerHTML = '';

//     products.forEach(({ id, name, type, fit, price, image }) => {
//         displayProducts.innerHTML += `
//             <div class="product" id='${id}'>
//                 <img src="${image}" alt="${name}" class="product-img">
//                 <div class="products-button">
//                     <button class="type">${type}</button>
//                     <button type="button" class="shop">Shop Now</button>
//                 </div>
//                 <h3>${name}</h3>
//                 <div class="product-price">
//                     <h4><span>Fit</span> ${fit}</h4>
//                     <h4><span>Price</span> $${price}</h4>
//                 </div>
//             </div>
//         `;
//     });
// }

// const numberOfProductsToShow = 8;
// displayRandomProducts(numberOfProductsToShow);

let startingIndex = 0;
let endingIndex = 8;

const displayProduct = (product) => {
    product.forEach(({id, name, type, fit, price, image}) => {
        displayProducts.innerHTML += `
            <div class="product" id='${id}'>
                <img src="${image}" alt="${name}" class="product-img">
                <div class="products-button">
                    <button class="type">${type}</button>
                    <button type="button" class="shop">Shop Now</button>
                </div>
                <h3>${name}</h3>
                <div class="product-price">
                    <h4><span>Fit</span> ${fit}</h4>
                    <h4><span>Price</span> $${price}</h4>
                </div>
            </div>
        `
    })
}

displayProduct(allProduct.slice(startingIndex, endingIndex))
let random = Math.random()