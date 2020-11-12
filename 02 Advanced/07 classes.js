// const animal = {
//     name: 'Animal',
//     age: 5,
//     hasTail: true
// }

/*

class Animal {

    static type = 'type Animal'

    constructor(options) {
        this.name = options.name
        this.age = options.age
        this.hasTail = options.hasTail
    }

    voice() {
        console.log('I am Animal')
    }
}

// const cat = new Animal({
//     name: 'animal',
//     age: 5,
//     hasTail:true
// })

class Cats extends Animal {
    static type = 'type CATS'

    constructor(options) {
        super(options)
        this.color = options.color
    }

    voice () {
        super.voice()
        console.log('I am Cat')
    }

    get ageInfo() {
        return this.age * 7
    }

    set ageInfo(newAge) {
        this.age = newAge
    }
}

const cat1 = new Cats({
    name: 'Cat1',
    age: 7,
    hasTail: true,
    color: 'black'
})
*/

class Component {
    constructor(selector) {
        this.$el = document.querySelector(selector)
    }

    hide() {
        this.$el.style.display = 'none'
    }

    show() {
        this.$el.style.display = 'block'
    }
}

class Box extends Component {
    constructor(myobject){
        super(myobject.selector)
        this.$el.style.width = this.$el.style.height = myobject.size + 'px'
        this.$el.style.background = myobject.color

        this.$el.addEventListener('click', () => {
            this.$el.style.display = 'none'
        })
    }

}

const box1 = new Box({
    selector: '#box1',
    size: 80,
    color: 'red'
})

const box2 = new Box({
    selector: '#box2',
    size: 50,
    color: 'blue'
})

class Circle extends Box {
    constructor(circleObj) {
        super(circleObj)

        this.$el.style.borderRadius = '50%'
    }
}

const c = new Circle({
    selector: '#circle',
    size: 40,
    color: 'green'
})

