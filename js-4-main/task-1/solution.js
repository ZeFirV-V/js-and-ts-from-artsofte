const A = {
    gamma: 9
}

const B = {
    lambda: 'lambda'
}

B.__proto__ = Object.create(A);

const C = {
    figma: 'site'
}

C.__proto__ = Object.create(B);

export const aggregate = {};
aggregate.__proto__ = Object.create(C);