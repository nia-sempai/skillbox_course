// 1. Работа с простыми типами
// Напишите тип функции, конкатенирующей две строки
// concat('Hello ', 'World') // -> Hello World;

function concat(s1: string, s2: string): string {
    return `${s1} ${s2}`;
}

let result = concat('Hello ', 'World');

// 2. Работа с интерфейсами

// Напишите интерфейс для описания следующих данных
const MyHomeTask: Task = {
    howIDoIt: "I Do It Wel",
    someArray: ["string one", "string two", 42],
    withData: [
        {
            howIDoIt: "I Do It Wel",
            someArray: ["string one", 23]
        }
    ],
}

interface Task {
    howIDoIt: String,
    someArray: Array<String | number>,
    withData?: Array<Task>
}


// 3. Типизация функций, используя Generic

// В уроке про Generics мы написали интерфейс массива MyArray
// добавьте типизацию для метода reduce();

interface MyArray<ArrayType> {
    [N: number]: ArrayType;
    map<U>(fn: (el: ArrayType, index: number, arr: MyArray<ArrayType>) => U): MyArray<U>;
    reduce<U>(fn: (previousValue: U, currentValue: ArrayType, currentIndex: number, array: MyArray<ArrayType>) => U, initialValue: U): U;
}

const myArray: MyArray<number> = [1,2,3];

const initialValue = 0;

myArray.reduce((accumulator, value) => accumulator + value, initialValue); // -> 6
// myArray.reduce((accumulator, currentValue) => accumulator + currentValue + "df", initialValue); //Будет ошибка, так как не number

// 4. Работа с MappedTypes

interface IHomeTask {
    data: string;
    numbericData: number;
    date: Date;
    externalData: {
        basis: number;
        value: string;
    }
}
// Стандартный generic Partial работает так же как Readonly, только для внешних ключей.
// Напишите такой MyPartial, чтобы создание подобного объекта стало возможным

const homeTask: MyPartial<IHomeTask> = {
    externalData: {
        value: 'win'
    }
}
//
type MyPartial<T> = {
    [N in keyof T]?: T[N] extends object ? MyPartial<T[N]> : T[N]
}
