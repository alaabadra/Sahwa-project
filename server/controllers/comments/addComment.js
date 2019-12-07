const {addComment} = require('../../database/queries/comments/addComment');

exports.addComment =(req,res)=>{
    console.log(9999,req.body);
    const {username,comment,postComments_id} = req.body;
    addComment(username,comment,postComments_id)
    .then(result=>{
        console.log(6666,result.rows);
        if(result.rowCount){
            res.status(200).send({
                error:null,
                username:result.rows[0].username,
                comment:result.rows[0].comment,
                postComments_id:result.rows[0].postcomments_id
            })
        }else{
            res.status(400).send(JSON.stringify({ msg: 'Internal ServerError' }));
           
        }
        
    })

    
}