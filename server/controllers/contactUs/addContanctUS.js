const {addContanctUS} = require('../../database/queries/contactUS/addContanctUS');

exports.addContanctUS =(req,res)=>{
    console.log(9999,req.body);
    const {name,phone_no,email,msg} = req.body;
    addContanctUS(name,phone_no,email,msg)
    .then(result=>{
        console.log(6666,result.rows);
        if(result.rowCount){
            res.status(200).send({
                error:null,
                name:result.rows[0].contact_name,
                phoneNo:result.rows[0].phone_no,
                email:result.rows[0].email,
                msg:result.rows[0].msg
            })
        }else{
            res.status(400).send(JSON.stringify({ msg: 'Internal ServerError' }));
           
        }
        
    })

    
}