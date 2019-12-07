const {addComplaint} = require('../../database/queries/complaint/addComplaint');

exports.addComplaint =(req,res)=>{
    console.log(9999,req.body);
    const {phone_num,titlecomp,msg_comp,voice_note} = req.body;
    addComplaint(phone_num,titlecomp,msg_comp,voice_note)
    .then(result=>{
        console.log(6666,result.rows);
        if(result.rowCount){
            res.status(200).send({
                error:null,
                phone_num:result.rows[0].phone_num,
                titlecomp:result.rows[0].titlecomp,
                msg_comp:result.rows[0].msg_comp,
                voice_note:result.rows[0].voice_note,
            })
        }else{
            res.status(400).send(JSON.stringify({ msg: 'Internal ServerError' }));
           
        }
        
    })

    
}