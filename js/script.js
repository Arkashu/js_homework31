'use strict';
const someObj = {
    firstName: 'Nikolaiev',
    lastName: 'Arkadii'
}
function example(a, b) {
    console.log(this, a, b);
}

function bindContext(func, context, ...rest) {
    return function (...args) {
        const meth = 'newMethod';
        context[meth] = func;
        const result = context[meth](...rest.concat(args));
        delete context[meth];
        return result;
    }
}
bindContext(example, someObj)(100, 200);

