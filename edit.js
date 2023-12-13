function storeProductData() {
    var itemName = document.getElementById('id').value;
    var itemPrice = document.getElementById('price').value;
    var itemImg = document.getElementById('Img').value;
    var itemDesc = document.getElementById('desc').value;

    var newProduct = {
        name: itemName,
        price: itemPrice,
        img: itemImg,
        desc: itemDesc
    };

    
    var productList = JSON.parse(localStorage.getItem('productList')) || [];


    productList.push(newProduct);

 
    localStorage.setItem('productList', JSON.stringify(productList));


    alert('Product added successfully!');
}
let products = [
    {
        id: 1,
        name: 'Müdzzarella Sticks',
        desc: 'Deep fried and delicious sticks of local Müd created in house.',
        image: 'images/mozzarrekea.png',
        price: 12.99
    },
    {
        id: 2,
        name: 'Bloomin Müdions',
        desc: 'Fried, battered, and finely harvested Müd from our own backyard.',
        image: 'images/blloming_mduios.png',
        price: 14.99
    },
    {
        id: 3,
        name: 'Müd Stuffed Müd',
        desc: 'Finely pressed Müd wrapped in the highest quality l ocal Müd in the country.',
        image: 'images/mudzoneeee.png',
        price: 9.99
    },
    {
        id: 4,
        name: 'Buffalo Müd Dip',
        desc: 'Shredded Müd mixed with buffalo sauce and locally bought  ese.',
        image: 'images/buffalo_mud_dip.png',
        price: 19.99
    },
    {
        id: 5,
        name: 'Müd Balls',
        desc: 'Perfectly seasoned and spiced Müd balls served with a side of Müdinara sauce',
        image: 'images/mudballs.png',
        price: 14.99
    },
    {
        id: 6,
        name: 'Müdsanga',
        desc: 'Stacked layers of pasta packed with meat and cheese, covered in Müd sauce.   ',
        image: 'images/mudsagna.png',
        price: 26.99
    },
    {
        id: 7,
        name: 'Müdfredo',
        desc: 'Pasta cooked al dente and tossed in our creamy homemade alfredo sauce & sliced Müd.',
        image: 'images/fettuccine.png',
        price: 29.99
    },
    {
        id: 8,
        name: 'MLT',
        desc: 'Finely pressed Müd wrapped in the highest quality local Müd in the country.',
        image: 'images/MLT.png',
        price: 41.99
    },
    {
        id: 9,
        name: 'Philly Müdsteak',
        desc: 'A Müdsteak with finely ground Müd topped with Müd and fried onions.',
        image: 'images/mudsteak.png',
        price: 33.99
    },
    {
        id: 10,
        name: 'Ceasars Müd Salad',
        desc: 'Romaine lettuce, parmesan cheese, tomatoes, croutons, & Müd.',
        image: 'images/CSALAD.png',
        price: 28.99
    },
    {
        id: 11,
        name: 'Southwest Müd Salad',
        desc: 'Slices of grilled spicy chicken breast served on a fresh bed of mixed greens, topped with Müd.',
        image: 'images/southwest_mud.png',
        price: 29.99
    },
    {
        id: 12,
        name: 'Müd Pie',
        desc: 'A true classic and a staple for any Müd based dessert.',
        image: 'images/mudddd_pie.png',
        price: 26.99
    },
    {
        id: 13,
        name: 'Soft Served Müdcream',
        desc: 'Freshly made soft served Müd in a waffle cone.',
        image: 'images/mudcream.png',
        price: 29.99
    },
    {
        id: 14,
        name: 'Angel Müd Cake',
        desc: 'A soft and plump cake made of our finest Müd.',
        image: 'images/angel_mud.png',
        price: 41.99
    },
    {
        id: 15,
        name: 'TiraMüdsu',
        desc: 'Elegant cake made with espresso and Müd.',
        image: 'images/tiramudsu.png',
        price: 33.99
    },
    {
        id: 16,
        name: 'Müdcuterie Board',
        desc: 'Aged Cheeses with Müd and crackers.',
        image: 'images/mud_cuterie.png',
        price: 28.99
    },
    {
        id: 17,
        name: 'Müdonnay',
        desc: 'The finest chardonnay with Müd.',
        image: 'images/mudonnay.png',
        price: 26.99
    },
    {
        id: 18,
        name: 'Müdgarita',
        desc: 'A well crafted mixed drink that features Müd.',
        image: 'images/mudgariyat.png',
        price: 29.99
    },
    {
        id: 19,
        name: 'Diet Dr Müd',
        desc: 'The greatest soda ever created.',
        image: 'images/DRMUD.png',
        price: 41.99
    },
    {
        id: 20,
        name: 'Müddy Water',
        desc: 'The finest water filtered through pounds of Müd.',
        image: 'images/muddy_water.png',
        price: 33.99
    },
];
var mergedProducts = [...products, newProduct];

console.log(mergedProducts);