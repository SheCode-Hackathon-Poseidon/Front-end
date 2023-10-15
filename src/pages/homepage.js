import * as React from 'react' 
import Header from '../components/layout/header'
import SideBar from '../components/layout/sidebar'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Post from '../components/post';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function HomePage(){
    return(
        <div>
            <Header />
            <Grid container spacing={2} sx={{marginTop: '10px', height: '100vh' }}>
                <Grid item xs={2} >
                        <SideBar/>
                </Grid>
                <Grid item xs={8}>
                    <Item>
                        <Post />
                    </Item>
                </Grid>
            </Grid>
        </div>
    )
}