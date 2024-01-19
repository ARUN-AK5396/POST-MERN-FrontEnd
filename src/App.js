import React,{useEffect,useState} from 'react';
import {Container,Typography,Grow,Grid, AppBar} from '@mui/material'
import { useDispatch } from 'react-redux';


import {getPosts}  from './actions/Posts';
import Form from './Form/Form';
import Posts from './Posts/Posts';
import  './Styles.css'

function App() {
    const disPatch = useDispatch();
    const [currentId , setCurrentId] = useState(null)
    
    useEffect(() => {
       disPatch(getPosts());
    }, [disPatch]);

  return (
   <Container maxWidth="lg"> 
      <AppBar className="appBar" position='static' color='inherit'>
          <Typography className="heading" variant='h4' color={"black"} align='center'>Posts</Typography>
          {/* <img className="img" style={{alignItems:'center'}} src={image} alt="Memory" height="300" /> */}
      </AppBar>
      <Grow in >
          <Container>
            <Grid container justifyContent="space-between" alignItems="stretch" spacing={4}>
               <Grid item xs={12} sm={7}>
                  <Posts setCurrentId={setCurrentId} />
               </Grid>
               <Grid item xs={12} sm={4} >
                   <Form currentId={currentId} setCurrentId={setCurrentId} />
               </Grid>
            </Grid>
          </Container>
      </Grow>
   </Container>
  );
}

export default App;
