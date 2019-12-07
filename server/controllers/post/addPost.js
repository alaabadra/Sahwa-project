const {addPost} = require('../../database/queries/posts/addPost');

exports.addPost =(req,res)=>{
    console.log(9999,req.body);
    const {title} = req.body;
    const {post} = req.body;
    addPost(title,post)
    .then(result=>{
        console.log(6666,result.rows);
        if(result.rowCount){
            res.status(200).send({
                error:null,
                title:result.rows[0].title,
                post:result.rows[0].post
            })
        }else{
            res.status(400).send(JSON.stringify({ msg: 'Internal ServerError' }));
           
        }
        
    })

    
}