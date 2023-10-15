import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import CardActions from '@mui/material/CardActions';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { Carousel } from 'antd';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Col, Row } from 'antd';

export default function Post() {

  const theme = useTheme();
  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

  const comment = {
    author:'Minh',
    avatar: 'https://stcv4.hnammobile.com/downloads/1/huong-dan-tim-kiem-hinh-anh-tren-google-cuc-don-gian-01627630582.jpg',
    text:'kjhglhgg'
  };

  return (
    <Card sx={{ display: 'flex', height: 400}}>
        <Row style={{alignItems: 'center', padding: '0px 5px 0px 5px'}}>
            <Col span={10} push={14}>
                <CardContent sx={{ flex: '1 0 auto' ,  textAlign: 'left',  borderBottom: '1px solid #ddd', alignItems: 'top'}}>
                    <Typography ariant="subtitle1" color="text.secondary" component="div" >
                        {bull} 12 hours ago
                    </Typography>
                    <Typography sx={{ fontSize: 16, paddingLeft: 2 }} component="div" variant="body2"  >
                        Tôi làm được cái này rồi nè
                    </Typography>
                </CardContent>
                <Box id='comment'>
                    <List>
                        <ListItem sx={{borderBottom: '1px solid #ddd' }}>
                        <ListItemAvatar>
                            <Avatar src={comment.avatar} alt={comment.author}  />
                        </ListItemAvatar>
                        <ListItemText primary={comment.author} secondary={comment.text} />
                        </ListItem>
                    </List>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'bottom', pl: 1, pb: 1 }}>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <FavoriteBorderIcon/>
                        </IconButton>
                        <IconButton aria-label="add a comment">
                            <MapsUgcOutlinedIcon/>
                        </IconButton>
                    </CardActions>
                </Box>
            </Col>
            <Col span={14} pull={10} >
            {/* <Carousel autoplay style={contentStyle}>
            <CardMedia
                component="img"
                image= 'https://www.kidsup.net/wp-content/uploads/2022/01/be-hoc-tieng-anh-01.png'
                alt="image"
                >
            </CardMedia>
            <CardMedia
                component="img"
                image= 'https://www.kidsup.net/wp-content/uploads/2022/01/be-hoc-tieng-anh-01.png'
                alt="image"
                >
            </CardMedia>

            </Carousel> */}
            <CardMedia
                component="img"
                image= 'https://www.kidsup.net/wp-content/uploads/2022/01/be-hoc-tieng-anh-01.png'
                alt="image"
                sx={{borderRadius:8}}
                >
            </CardMedia>
            </Col>
        </Row>
    </Card>
  );
}