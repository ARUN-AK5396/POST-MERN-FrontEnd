import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import './Styles.css'
import { deletePost, likePost } from '../../actions/Posts';

function PostMessage({ post , setCurrentId }) {

  const dispatch = useDispatch();

  return (
    <Card className='card'>
      <div className="headerComponent">
        <div className="title_post">
            <Typography variant="h6">{post.creator}</Typography>
            <Typography variant="body3">{moment(post.createdAt).fromNow()}</Typography>
        </div>
        <div className='moreButton'>
          <Button style={{ color: 'white' }} size='medium' onClick={() => setCurrentId(post._id)}>
            <EditIcon fontSize="default" />
          </Button>
        </div>
      </div>
      
      <CardMedia >
         <img className='image' src={post.selectedFile} alt='img' />
      </CardMedia>
      
      <div className='details'>
         <h3 className='title' style={{paddingLeft:'20px'}}>{post.title}</h3>
      </div>

      <div className='details'>
        <Typography variant='body2' style={{paddingLeft:'20px'}} color='textSecondary'>
          {post.tags.map((tag) => `#${tag}`)}
        </Typography>
      </div>

      <CardContent>
        <Typography className='title' variant="body2" color="textSecondary" component='p' gutterBottom>
          {post.message}
        </Typography>
      </CardContent>
      <CardActions className='cardActions'>
        <Button size='small' color='primary' onClick={() => {dispatch(likePost(post._id));}}>
          <ThumbUpIcon fontSize='small' />
           &nbsp;Like&nbsp;{post.likeCount}
        </Button>
        <Button size='small' color='primary' onClick={() => dispatch(deletePost(post._id))}>
          <DeleteIcon fontSize='small' />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}

export default PostMessage;
