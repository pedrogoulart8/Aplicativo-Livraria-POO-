//simulação uma base de dados

module.exports = class Database{

    #storage = {

        authors: [],
        books: [],
        posters: [],
        orders: [],
        users: [],

    }

    find(key){

        return this.#storage[key]

    }


    saveAuthor(author){

        this.#storage.authors.push(author)

    }


    findBookByName(bookName){

        return this.#storage.books.find(b => b.name === bookName)

    }





    saveBook(book){

        //verificando se o livro existe
        const booksExists = this.findBookByName(book.name)

        //Caso não exista, inserir no array 'books'
        if(!booksExists){

            this.#storage.books.push(book)

        }

    }


    addBooksToStock(bookName, quantity){

        const book = this.findBookByName(bookName)

        //Caso o livro exista, chamar esse metodo
        book?.addtoStock(quantity)

    }


    removeBookFromStock(bookName, quantity){

        const book = this.findBookByName(bookName)

        book?.removeFromStock(quantity)

    }





    ////////Posters/////////////


    



    findPosterByName(posterName){

        return this.#storage.posters.find(p => p.name === posterName)

    }





    savePoster(poster){

        //verificando se o livro existe
        const posterExists = this.findPosterByName(poster.name)

        //Caso não exista, inserir no array 'poster'
        if(!posterExists){

            this.#storage.poster.push(poster)

        }

    }


    addPosterToStock(posterName, quantity){

        const poster = this.findPosterByName(posterName)

        //Caso o livro exista, chamar esse metodo
        poster?.addtoStock(quantity)

    }


    removePosterFromStock(posterName, quantity){

        const poster = this.findPosterByName(posterName)

        poster?.removeFromStock(quantity)

    }




    saveUser(user){

        const userExists = this.#storage.users.find(u => u.email === user.email)

        if(!userExists){

            this.#storage.users.push(user)

        }

    }


    saveOrder(order){

        this.#storage.orders.push(order)

    }


    showStorage(){

        console.table(this.#storage.authors)
        console.table(this.#storage.books)
        console.table(this.#storage.posters)
        console.table(this.#storage.users)
        console.table(this.#storage.orders.map(order => order.data))

    }


}