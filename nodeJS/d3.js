const fs = require('fs');

// fs.writeFile("hey.txt","Heyy this is Amogh speaking!",function(err){
//     if(err) console.error(err);
//     else console.log("Done");
// })
// fs.appendFile("hey.txt",",Roger that partner , arjun speaking",function(err){
//     if(err) console.error(err);
//     else console.log("Done");
// })
// fs.rename("hey.txt","amogh.txt",function(err){
//     if(err) console.error(err);
//     else console.log("Done")
// })
// fs.copyFile("amogh.txt","./npm32/amoghS.txt",function(err){
//     if(err) console.error(err);
//     else console.log("Done");
// })
// fs.unlink("./npm/amoghS.txt",function(err){
//     if(err) console.error(err);
//     else console.log("Deleted");
// })

// fs.rm("./nexttoyou",{recursive:true},function(err){
//     if(err) console.error(err);
//     else console.log("Deleted");
// })
// fs.mkdir("./nexttoyou",{recursive:true},function(err){
//     if(err) console.error(err);
//     else console.log("Made");
// })
// fs.readFile("hey.txt","utf-8",function(err,data){
//     if(err) console.error(err);
//     else console.log(data);
// })

//-------------HTTP-------------------------//

const http = require('http');
const server = http.createServer(function(req,res){
    res.end("Heloo amogh, koi naa mill jayegi");

})

server.listen(3000);
