class heroi{

    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
       // this.ataque = ataque
    }

    //método atacar
    atacar(){ 

        let ataque

        if(this.tipo === "Bruxa"){
            ataque = "magia"        
        } else if(this.tipo === "Guerreira"){
            ataque = "espada"
        } else if(this.tipo === "Monge"){
            ataque = "artes marciais"
        } else if(this.tipo === "Ninja"){
            ataque = "hadouken"
        } else if(this.tipo === "Mago"){
            ataque = "feitiço"
        }        

        console.log(`${this.tipo} atacou usando ${ataque}`)
    }
 }


 // novas instâncias
let heroi1 = new heroi("Cassandra", 42, "Bruxa")
let heroi2 = new heroi("Aoife", 30, "Guerreira")
let heroi3 = new heroi("Madalena", 32, "Monge")
let heroi4 = new heroi("Muirne", 29, "Ninja")
let heroi5 = new heroi("Ciáran", 35, "Mago")
    

heroi1.atacar()
heroi2.atacar()
heroi3.atacar()
heroi4.atacar()
heroi5.atacar()


