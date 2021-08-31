const fs = require('fs')
const folderName = process.argv[2] || 'Next_Project'


try{
    fs.mkdirSync(folderName)
    fs.writeFileSync(`${folderName}/index.html`, '')
    fs.writeFileSync(`${folderName}/style.css`, '')
    fs.writeFileSync(`${folderName}/app.js`, '')
    
}catch(er){
    console.log('Something went wrong!!!!')
    console.log(er)
}

