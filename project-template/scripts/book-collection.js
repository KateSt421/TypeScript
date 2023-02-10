export class ProductCollection<T extends Product> extends Collection<T> {
    public get price(): number {
        let totalPrice = 0
        const keys = Object.getOwnPropertyNames(this.items)

        for (const key of keys) {
            const item = this.items[key]
            totalPrice += item.price
        }

        return totalPrice
    }
}

// коллекция книг для удобной работы
// BookCollection в коде выглядит читабельнее чем Collection<Book>
export class BookCollection extends ProductCollection<Book> {
}