const router = require('express').Router();
const services=require('../controllers/services');
const {addPost} = require('../controllers/post/addPost');
const {addComment} = require('../controllers/comments/addComment');
const {getComments}=require('../controllers/comments/getComments')
const {addContanctUS}=require('../controllers/contactUs/addContanctUS');
const {addComplaint}=require('../controllers/complaint/addComplaint');
const {getAllPosts}=require('../controllers/post/getAllPosts');
const {getPost}=require('../controllers/post/getPost');

router.get('/get-blackmail-services',services.getBalckmainServices);
router.get('/get-comments/:postid',getComments);
router.get('/get-all-posts',getAllPosts);
router.get('/get-post/:postid',getPost);
router.post('/add-post',addPost);
router.post('/add-comm',addComment);
router.post('/add-contactus',addContanctUS);
router.post('/add-comp',addComplaint);
module.exports=router;

// fetch('/api/v1/get-comments/:postid', {
//     method: 'GET',
//     credentials: 'same-origin',
//     headers: {
//       'Content-type': 'application/json',
//     },
//   })
//     .then(res => {

//       return res.json()

//     })
//     .then(response => {
//         response.allCommentsForThisPost
//     });
////////////////////////////////////////////
// fetch('/api/v1/get-all-posts', {
//     method: 'GET',
//     credentials: 'same-origin',
//     headers: {
//       'Content-type': 'application/json',
//     },
//   })
//     .then(res => {

//       return res.json()
//     })
//     .then(response => {
//         response.post,
            // response.title
//     });

// fetch('/api/v1/get-post/{$postid}', {
//     method: 'GET',
//     credentials: 'same-origin',
//     headers: {
//       'Content-type': 'application/json',
//     },
//   })
//     .then(res => {

//       return res.json()

//     })
//     .then(response => {
//         response.post,
            // response.title
//     });
/////////////////////////////////////
    // 
    // fetch('/api/v1/get-blackmail-services', {
    //     method: 'GET',
    //     credentials: 'same-origin',
    //     headers: {
    //       'Content-type': 'application/json',
    //     },
    //   })
    //     .then(res => {
    //       return res.json()
    //     })
    //     .then(response => {
            // if(response){
            //     response.forEach(element => {
            //         element.starting_word
            //     });
            // }
    //     });
    ///////////////////////////////////////
    // fetch('/api/add-post', {
    //     method: 'POST',
    //     credentials: 'same-origin',
    //     headers: {
    //       'Content-type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       title,
    //       post,
    //     }),
    //   })
    //     .then(response => {
    //     });

    //     fetch('/api/add-comm', {
    //         method: 'POST',
    //         credentials: 'same-origin',
    //         headers: {
    //           'Content-type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //           username,
    //           comment,
    //           postComments_id
    //         }),
    //       })
    //         .then(response => {
    //             if(response){
    //                 console.log('success');
                    
                    // fetch('/api/v1/get-comments', {
                    //     method: 'GET',
                    //     credentials: 'same-origin',
                    //     headers: {
                    //       'Content-type': 'application/json',
                    //     },
                    //   })
                    //     .then(res => {

                    //       return res.json()

                    //     })
                    //     .then(response => {
                    //         response.allCommentsForThisPost
                    //     });
            //     }
            // });

            // fetch('/api/add-contactus', {
            //     method: 'POST',
            //     credentials: 'same-origin',
            //     headers: {
            //       'Content-type': 'application/json',
            //     },
            //     body: JSON.stringify({
            //       name,
            //       phone_no,
            //       email,
            //       msg
            //     }),
            //   })
            //     .then(response => {
            //         console.log('sucsess add your question for contact , wait a few time to reply on you');                    
            //     });

            // fetch('/api/add-comp', {
            //     method: 'POST',
            //     credentials: 'same-origin',
            //     headers: {
            //       'Content-type': 'application/json',
            //     },
            //     body: JSON.stringify({
            //         titlecomp,
            //         msg_comp
            //     }),
            //   })
            //     .then(response => {
            //         console.log('sucsess add your question for contact , wait a few time to reply on you');        
            //     });
            