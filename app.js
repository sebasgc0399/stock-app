const express=require('express')
require('dotenv').config()

const app=express()

app.get('/',(req,res)=>{
  console.log('Petición recibida')
  res.status(200).send('<h1>Hola mundo!</h1>')
})

const PORT=process.env.PORT || 4000

app.listen(PORT,()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})