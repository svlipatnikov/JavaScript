const person = Object.create(
    { //прототип
        caclulateAge() {
            console.log('Age: ', new Date().getFullYear() - this.birthYear)
        }
    },     
    { //ключи
        name: {
            value: 'Sergei',
            enumerable: true,
            writable: true,
            configurable:true,

        },
        birthYear: {
            value: 1988,
            enumerable: false,
            writable: false,
            configurable: false,
        },
        age: {
            get() {
                //логика при обращении к значению (не является методом, но выполнет действия)
                document.body.style.background = 'black' 
                return new Date().getFullYear() - this.birthYear
            },
            set(value) {
                // дополнительная логика при установке значения
                document.body.style.background = 'red'
                console.log('Set age' , value)    
            }
        }
        
    }
)

//console.log(person)

/*
const person = {
    name: 'Sergai',
    birthYear: 1988
}*/

person.name = '123'
person.birthYear = 123123

for (let key in person) {
    if (person.hasOwnProperty(key)) { // чтобы не заходить в протоип
        console.log('key', key, person[key])
    }    
}

//Геттеры и сеттеры
//console.log(person.age)
//person.age = 100
