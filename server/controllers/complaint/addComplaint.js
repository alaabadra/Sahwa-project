const {addComplaint} = require('../../database/queries/complaint/addComplaint');

exports.addComplaint =(req,res)=>{
    console.log(9999,req.body);
    const {titlecomp,msg_comp,voice_note,social_info} = req.body;
    addComplaint(titlecomp,msg_comp,voice_note,social_info)
    .then(result=>{
        console.log(6666,result.rows);
        if(result.rowCount){
            res.status(200).send({
                error:null,
                titlecomp:result.rows[0].titlecomp,
                msg_comp:result.rows[0].msg_comp,
                voice_note:result.rows[0].voice_note,
                social_info:result.rows[0].social_info
            })
        }else{
            res.status(400).send(JSON.stringify({ msg: 'Internal ServerError' }));
           
        }
        
    })

    
}