let cual, eliminar, indice
do {
    class Comidas {
        constructor(pizza, tamaño, cantidad) {
            this.pizza = pizza
            this.tamaño = tamaño
            this.cantidad = cantidad
        }


        aumentarStock(nuevoStock){
            this.stock += nuevoStock // this.stock = this.stock + nuevo stock
        }
    }

    const pizza1 = new Comidas("hawaiana", "mediana", 1)
    const pizza2 = new Comidas("queso", "grande", 2)
    const pizza3 = new Comidas("peperoni", "pequeña", 5)

    const pizzas = [pizza1, pizza2, pizza3]


    alert("ingrese los productos a ingresar: ")


    const pizza = new Comidas(prompt("ingrese su pizza "), prompt("ingrese un tamaño"), parseInt(prompt("ingrese la cantidad deseada ")))

    pizzas.push(pizza)
    

    console.table(pizzas) 


    eliminar = prompt("desea agregar otro elemento? ").toLowerCase()   

} while (eliminar === "si")

alert("gracias, vuelve pronto")

