function myMiddleware(req,res,next){
    console.log("im a middlewware")
    next()
}

module.exports = myMiddleware