import React from 'react';
import './style.css';
import { Spinner } from 'react-bootstrap'
import { Container, Alert, Card, Col, Row, Form, Button, Modal } from 'react-bootstrap'
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { log } from 'util';
export default class Posts extends React.Component {
  state = {
    title: '',
    post: '',
    postId: '',
    AllPosts: '',
    visibleAddComment: '',
    username: '',
    comment: '',
    addcomment:'',
    addusername:'',
    msgSucc:''
  }
  componentDidMount() {
    const { title, post } = this.state;
    fetch('/api/v1/get-all-posts', {
      method: 'GET',
      credentials: 'same-origin',
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then(res => {
        return res.json()
      })
      .then(response => {
        console.log('ressssss', response.allPosts);
        // response.allPosts.foreach(element => {
        //   console.log('ele',element.title);
        //   console.log('ele',element.post_id);
        //   console.log('ele',element.post);
        // });
        for (var i = 0; i <= response.allPosts.length - 1; i++) {
          console.log('jjjjjj', response.allPosts[i].title);
          this.setState({ title: response.allPosts[i].title });
          this.setState({ postId: response.allPosts[i].post_id });



        }
        // this.setState({AllPosts:response.allPosts})
      });
    //  this.handleClick();
  }
 handleClick = (postId) => {
    console.log('sshshhshhshsh',postId);
    

    fetch(`/api/v1/get-post/${postId}`, {
      method: 'GET',
      credentials: 'same-origin',
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then(res => {
        return res.json()
      })
      .then(response => {
        console.log('gfgfgfg', response);
        
          this.setState({title:response.title,post:response.post});
       
      })
        fetch(`/api/v1/get-comments/${postId}`, {
          method: 'GET',
          credentials: 'same-origin',
          headers: {
            'Content-type': 'application/json',
          },
        })
          .then(res => {

            return res.json()

          })
          .then(response => {
            console.log('reddddd',response);
            for (var i = 0; i <= response.allCommentsForThisPost.length - 1; i++) {
              console.log('jjjjjj', response.allCommentsForThisPost[i]);
              this.setState({ username: response.allCommentsForThisPost[i].username,comment: response.allCommentsForThisPost[i].comment });
              // this.setState({ postId: response.allCommentsForThisPost[i].post_id });
    
                        this.setState({ visibleAddComment: true });
    
                                  this.handleChange = ({ target: { value, name } }) =>
                                    this.setState({ [name]: value });
    
            }
                    
          })
            
              this.handleClickAddComment = () => {
                const { addusername, addcomment } = this.state;
                fetch('/api/v1/add-comm', {
                  method: 'POST',
                  credentials: 'same-origin',
                  headers: {
                    'Content-type': 'application/json',
                  },
                  body: JSON.stringify({
                    addusername,
                    addcomment,

                  }),
                })
                  .then(response => {
                    if (response) {
                      console.log('success');
                      this.setState({msgSucc:'success'})
                    }
                  })
              }
        

  }
  render() {
    const { title, post, postId, AllPosts, visibleAddComment, username, comment,addusername,addcomment,msgSucc } = this.state;
    console.log('vvvvv',this.state.addcomment);
    console.log('vvvvv',this.state.addusername);

    return (
      <div>
        <p >{title}</p>
        {/* {
          AllPosts.map(element => {
            console.log('ele',element.title);
            console.log('ele',element.post_id);
            console.log('ele',element.post);
            this.setState({title:element.title,post:element.post,postId:element.post_id});
          })
        } */}
        {console.log('postiiiiid', this.state.postId)}


        <div>all posts</div>
        <p >{post}</p>
        <p >{title}</p>
        <Button
                                  variant="danger"
                                  onClick={e => {
                                    e.stopPropagation();
                                    this.handleClick(postId);
                                  }}
                                />
                                <p >{username}</p>
        <p >{comment}</p>
        {visibleAddComment ? (
          <Form className="complaints">
            <div className="complaints_div">
              <h2 className="complaints_div_h2">Add your comment</h2>

            </div>

            <Form.Group>
              <Form.Control
                type="text"
                name="addusername"
                value={addusername}
                placeholder="Enter your username"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                name="addcomment"
                value={addcomment}
                placeholder="Enter your comment"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Button
              className='create-button'
              variant="success"
              onClick={this.handleClickAddComment}
            />
                              <p className="msg-success">{msgSucc}</p>

          </Form>
        ) : null}
      </div>

    )
  }
}