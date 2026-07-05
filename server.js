const express= require('express');

const app= express();


app.use(express.static('public')); //this tells my app to serve all the static files in the public folders


app.get('/zaid',(request,response)=>{
    response.sendFile(__dirname+'/views/zaid-facts.html')
})


app.use(express.static('public')) //this tells my app to serve all the static files in the public folders

app.get('/test',(request,response)=>{
    //The server should send back a message like this <p>Success!</p>
    response.send('<p>Success!</p>')
})

app.get('/',(request,response)=>{
    response.sendFile(__dirname+'/views/index.html')
})

app.get('/about',(request,response)=>{
    response.sendFile(__dirname+'/views/about.html')
})









app.listen(3000, () => {
    console.log('Server is running on port 3000');
})