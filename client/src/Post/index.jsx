import React from 'react';
import './style.css';
import { Spinner} from 'react-bootstrap'
import { Container, Alert, Card, Col, Row, Form, Button, Modal } from 'react-bootstrap'
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { log } from 'util';
export default class Post extends React.Component {
    state={
      title:'',
      post:''
    }
    componentDidMount(){
      const {title,post}=this.state;
    fetch('/api/v1//get-post/:postid', {
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
        console.log('ressssss',response);
        // response.allPosts.forEach(element => {
        //   console.log('ele',element.title);
        //   console.log('ele',element.post);
        //   this.setState({title:element.title,post:element.post});
        // });
    });

    fetch('/api/v1/get-comments/:postid', {
    method: 'GET',
    credentials: 'same-origin',
    headers: {
      'Content-type': 'application/json',
    },
  })
    .then(res => { 
        console.log(2222,res);
         

      return res.json()

    })
    .then(response => {
        console.log('tfdtftft',response);
        
        // response.allCommentsForThisPost
    });
    }
    render(){
      const {title,post}=this.state;
        return(
          <div>

            <div>all posts</div>
            <p >{title}</p>
            <p >{post}</p>
          </div>

        )
    }
}