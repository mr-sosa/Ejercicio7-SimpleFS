const fs=require('fs');

function createDocument(items){
    let data = JSON.stringify(items, null, 2);
    fs.writeFile('./data/productos-menores.json', data, error => {
        if (error){
            console.log(error);
        }else{
            console.log('El archivo fue creado');
        }            
    });
}

function loadDocument(){
    fs.readFile('./data/products-ecommerce.json', (err, data) => {
        if (err) throw err;
        let archivo = JSON.parse(data);
        let allItems = archivo.items;
        let items = []
        allItems.map((item) => {
            if(item.price.amount < 10000){
                items.push(item);
                console.log("ID: " + item.id);
                console.log("Price: " + item.price.amount);
            }
        });
        console.log(items.length);
        createDocument("Número de productos menores a 10000: " + items);
    });
}

loadDocument();