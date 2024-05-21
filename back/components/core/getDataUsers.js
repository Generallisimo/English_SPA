exports.FromData = async (mysqlConnection, data) => {
 
    console.log(data)
    if(data){
        let dataUsers = await new Promise(replyData => {
            mysqlConnection.query('INSERT INTO forms (name, social, email, phone) VALUES (?, ?, ?, ?)', [data.name, data.social, data.email, data.phone], (error, result) => {
                if(error){console.log(error), replyData(false)} else {replyData(result)}
            })
        })
        console.log(dataUsers)
    }else{
        return console.log('Error with send data on MySQL')
    }

}