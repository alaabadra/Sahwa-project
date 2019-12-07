const {getAllPosts} = require('../../database/queries/posts/getAllPosts');

exports.getAllPosts =(req,res)=>{
    getAllPosts()
    .then(result=>{
        console.log(6666,result.rows);
        if(result.rowCount){
            res.status(200).send({
                error:null,
                allPosts:result.rows
            })
        }else{
            res.status(400).send(JSON.stringify({ msg: 'Internal ServerError' }));
           
        }
        
    })
    .catch(console.log)

    
}