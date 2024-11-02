interface IProduct {
    id: number;
    name: string;
    price: number;
    description?: string;
}

class Product implements IProduct {
    constructor(
        public id: number,
        public name: string,
        public price: number,
        public description?: string
    ) {}
}

class ProductManager {
    private products: Product[] = [];

    addProduct(product: Product): void {
        this.products.push(product);
        console.log(`Товар добавлен: ${product.name}`);
    }

    removeProduct(productId: number): void {
        this.products = this.products.filter(p => p.id !== productId);
        console.log(`Товар с ID ${productId} удален`);
    }

    listProducts(): void {
        console.log("Товары в системе:");
        this.products.forEach(product => {
            console.log(`- ${product.name} (${product.price})`);
        });
    }
}

class Cart {
    private items = new Map<Product, number>();

    addProduct(product: Product, quantity: number = 1): void {
        if (this.items.has(product)) {
            this.items.set(product, this.items.get(product)! + quantity);
        } else {
            this.items.set(product, quantity);
        }
        console.log(`Добавлено в корзину: ${product.name} - ${quantity} шт.`);
    }

    removeProduct(product: Product, quantity: number = 1): void {
        if (this.items.has(product)) {
            const newQty = this.items.get(product)! - quantity;
            if (newQty <= 0) {
                this.items.delete(product);
                console.log(`Удален из корзины: ${product.name}`);
            } else {
                this.items.set(product, newQty);
                console.log(`Обновлено количество в корзине: ${product.name} - ${newQty} шт.`);
            }
        }
    }

    viewCart(): void {
        console.log("Текущая корзина:");
        this.items.forEach((quantity, product) => {
            console.log(`- ${product.name} x${quantity}`);
        });
    }
}

enum OrderStatus {
    Pending = "Pending",
    Shipped = "Shipped",
    Delivered = "Delivered",
    Cancelled = "Cancelled"
}

// Класс заказа
class Order {
    constructor(
        public id: number,
        public cart: Cart,
        public status: OrderStatus = OrderStatus.Pending
    ) {}

    changeStatus(newStatus: OrderStatus): void {
        this.status = newStatus;
        console.log(`Статус заказа ID ${this.id} изменен на ${newStatus}`);
    }
}

class OrderManager {
    private orders: Order[] = [];

    addOrder(order: Order): void {
        this.orders.push(order);
        console.log(`Заказ ID ${order.id} добавлен`);
    }

    listOrders(): void {
        console.log("Текущие заказы:");
        this.orders.forEach(order => {
            console.log(`- Заказ ID: ${order.id}, Статус: ${order.status}`);
        });
    }
}

const productManager = new ProductManager();
const orderManager = new OrderManager();

const product1 = new Product(1, "Ноутбук", 1000);
const product2 = new Product(2, "Смартфон", 500);

productManager.addProduct(product1);
productManager.addProduct(product2);
productManager.listProducts();

const cart = new Cart();
cart.addProduct(product1, 2);
cart.addProduct(product2, 1);
cart.viewCart();

const order = new Order(1, cart);
orderManager.addOrder(order);
order.changeStatus(OrderStatus.Shipped);
orderManager.listOrders();