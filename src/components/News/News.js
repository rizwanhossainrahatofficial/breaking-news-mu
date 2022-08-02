import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './News.css'
import { margin } from '@mui/system';
const News = (props) => {
    console.log(props.article)
    const{title,description,urlToImage}=props.article
    return (
        <div style={{float:'left',padding:'10px', width:'30%'}}>
            <div>
             <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={urlToImage}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
        </div>
    );
};

export default News;