class ProductManager {

    constructor() {
        this.products = [];
    }

    getProducts = () => {
        return this.products;
    }

    addProduct = (
        title, description, price, thumbnail, code, stock
    ) => {
        const products = {
            title,
            description,
            price,
            thumbnail,
            code: [],
            stock
        };

        if (this.products.length === 0) {
            products.id = 1;
        } else {
            products.id = this.products[this.products.length - 1].id + 1;
        };
        
    
        this.products.push(products);
    }
    
    getProductById = (idProducto, idCodigo) => {
        const codigoIndex = this.products.findIndex(products => products.id === idProducto); 
        if (codigoIndex === -1) {
            console.log('Not found');
            return;
        }


        this.products[codigoIndex].code.push(idCodigo);
    }
}


const manejadorProductos = new ProductManager();
manejadorProductos.addProduct('Remera Rolling Stone', 'Remera de verano', 1500, 'sin imagen', 20);
manejadorProductos.addProduct('jeans alaska', 'mom', 4500, 'sin imagen', 12);
manejadorProductos.addProduct('buso edicion limita', 'buso rustico', 3500, 'sin imagen', 15);


manejadorProductos.getProductById(1, 3, 4);
console.log(manejadorProductos.getProducts());