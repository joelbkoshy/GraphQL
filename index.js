var { graphql, buildSchema } = require("graphql")

var schema = buildSchema(`
type Query{
    hello : String
}
`)

var rootValue ={
    hello : ()=>   "Hello World"
}

graphql({
    schema,
    source: "{ hello }",
    rootValue
}).then((res)=>console.log(res))