import React from 'react'
import PostMessage from './Post/Post'
import { useSelector } from 'react-redux'
import {Grid,CircularProgress} from '@mui/material'

function Posts({setCurrentId}) {
    const posts = useSelector((state) => state.posts)

    console.log(posts)
  return (
    !posts.length ? <CircularProgress/>  : (
      <Grid className='container' container alignItems="stretch" spacing={3} >
          {posts.map((post) => (
            <Grid key={post.id} item xs={12} sm={6} >
               <PostMessage post={post} setCurrentId={setCurrentId} />
            </Grid>
          ))

          }
      </Grid>
    )
  )
}

export default Posts