const express = require('express');
const bodyParser = require('body-parser');
const routes = require("./routes");
const app = express();
const mongoose = require('mongoose');
var cors=require('cors');


app.use(cors({origin:true,credentials: true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
mongoose.connect("mongodb+srv://BrunoARC:Negoalbino123@cluster0.xbumn.mongodb.net/Vortexdb?retryWrites=true&w=majority",{
    useNewUrlParser: true, 
  useUnifiedTopology: true,
  useFindAndModify: false
})

const notesSchema = {
  valor:Number , 
  date:String
}

app.use(express.static('public'))

app.get("/", function(req , res){
  res.sendFile(__dirname + "/index.html") 
})

app.post("/", function(req , res){
  let newNote = new Note({
    valor: req.body.valor,
    date: req.body.date
  });
  newNote.save();
  res.redirect('/');
})
app.post("/date/", async function(req , res){

  let consulta = (await Note.find({}));
  var soma = 0
  let data = req.body.datames

  console.log(req.body)

  //console.log(data)
  consulta.forEach(element => { 
    if(data == element.date){
      soma += element.valor
      console.log(soma)

    }

  });
  res.send(`<span id="result">${soma}</span>`)

  //res.redirect('/');
})


const Note = mongoose.model("Note", notesSchema);

mongoose.connection.on('error', (err) => { 
  console.log('Erro na conexão com o banco de dados: ' + err) 
})

mongoose.connection.on('disconnected', () => { 
  console.log('Aplicação desconectada do banco de dados!') 
})

mongoose.connection.on('connected', () => { 
  console.log('Aplicação conectada ao banco de dados!') 
})
app.use(routes);
app.listen(3000, () => {
      console.log("Conectado a API express!")
});