// old function:

function oldFunctionSyntax(arg1, arg2) {
    // function logic is here
}

function funcWithUnlimitedArgs(...args) {
    // unlimited arguments (spread operator)
}

(arg1, arg2) => {
    // arrow function
}
(...args) => {
    // arrow function, with unlimitedArgs )
}

const arrowFuncWithPointer = (arg1, arg2) => { }

const oneArgFunc = arg => {
    return arg + 1
    // one ArgFunction, no () needed
}
const oneArgOneLine = arg => arg + 1; // one line function will return the one line.

// IIFE : Immediately Invoked Function Expression

(function iifeExample() {
    // logicHere
}());


// (function (){

// }())

// iife ArrowFunction
(() => { })();


// async function iife
(async () => {
    await funcWithUnlimitedArgs()
})();



// simple currying


const buildSandwich = (ing1) => {
    return (ing2) => {
        return (ing3) => {
            return `${ing1}, ${ing2}, ${ing3}}`
        }
    }
}

buildSandwich('Steak')('Thina')('Harif')

const oneLineSandwich = ing1 => ing2 => ing3 => `${ing1}, ${ing2},${ing3}`
oneLineSandwich('Steak')('Thina')('Harif')

const multiply = (x, y) => x * y;
const curriedMultiply = x => y => x * y

multiply(2, 3) === curriedMultiply(2)(3) // true;
const timesTen = curriedMultiply(10)
80 === timesTen(8)







const total = (x, y, z) => x + y + z



const curry = (fn) => {
    return curried = (...args) => {
        if (fn.length !== args.length) {
            return curried.bind(null, ...args)
        }
        return fn(...args)
    }
}

const curriedTotal = curry(total)
curriedTotal(10)(20)(30) === total(10, 20, 30)



const curry2 = fn => a => b => fn(a, b)

function customLog(level, date, message, extras) {
    console.log(`${level}::${date}::${message}`)
    if (extras) {
        console.log("Extra data: ", extras)
    }
}

const cLog = curry(log)
//We go from writing
log('DEBUG', new Date(), "This is a debug message")

//To writing
cLog('DEBUG')(new Date())("This is a debug message")

// advantages: readable, reusable


const logDebug = cLog('DEBUG')(new Date())
const logError = cLog('ERROR')(new Date())
logDebug("This is a debug message")
logError("this is a ERORR MESSAGE")

// lodash have currying function!