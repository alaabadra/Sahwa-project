const {getComments} = require('../../database/queries/comments/getComments');

exports.getComments =(req,res)=>{
    console.log('postid',req.params.postid);
    const {postid}=req.params;
    getComments(postid)
    .then(result=>{
        console.log(6666,result.rows);
        if(result.rowCount){
            res.status(200).send({
                error:null,
                allCommentsForThisPost:result.rows
            })
        }else{
            res.status(400).send(JSON.stringify({ msg: 'Internal ServerError' }));
           
        }
        
    })
    .catch(console.log)

    
}