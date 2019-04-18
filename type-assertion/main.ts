
let message
message = 'abc'

// Chi ro kieu cho message, co 2 cach
let endsWithC = (<string>message).endsWith('c')
let alternativeWay = (message as string).endsWith('c')

console.log(endsWithC)