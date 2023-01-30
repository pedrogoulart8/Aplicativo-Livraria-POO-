

module.exports = class Order{

    #total
    #items
    #user

    constructor(items, user){

        //Função que avalia se tem quantidade de produtos suficientes no estoque para realizar um pedido
        items.forEach(({product, quantity}) => {

            if(quantity > product.inStock){

                throw new Error ('Quantidade insuficiente em estoque')


            }
        })

        this.#items =  items
        this.#user = user

        //Valor total do pedido (preço + quantidade)
        this.#total = items.reduce((valorAcumulado, {product, quantity}) => valorAcumulado + (product.price * quantity), 0)

    }

    get data(){

        return{

            items: this.#items,
            user: this.#user,
            total: this.#total

        }

    }

}