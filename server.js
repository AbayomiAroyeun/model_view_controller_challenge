const express = require ('express');
const path = require ('path');
const app = express();
const PORT = process.env.port || 3000





app.get('/view',(req, res) =>{
    res.sendfile(path.join(process.cwd(),"/view/view.html"))
});


app.listen(PORT, ()=>{
    console.log("port running on http://localhost:", +PORT)
})