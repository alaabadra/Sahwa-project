const {getPost} = require('../../database/queries/posts/getPost');

exports.getPost =(req,res)=>{
    console.log('postid',req.params.postid);
    const {postid}=req.params;
    getPost(postid)
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
    .catch(console.log)

    
}