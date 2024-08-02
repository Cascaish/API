import express from 'express'
const servidor = express()

servidor.use(express.json)

servidor.get ('/calculadora/:n1/:n2', (req,resp) =>{
let n1 = Number(req.params.n1);
let n2 = Number(req.params.n2);
let soma = n1 + n2;

resp.send({
    soma: soma})

})





servidor.get ('/calculadora/subtracao/:n1/:n2', (req,resp) =>{
    let n1 = Number(req.params.n1);
    let n2 = Number(req.params.n2);
    let sub = n1 - n2;
    
    resp.send({
        subtracao: sub})
    
    })
    
    
    servidor.listen(
    
        5001,
        () => console.log('API 5001')
    )
    