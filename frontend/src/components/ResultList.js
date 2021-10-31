import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function ResultList(props) {
    return props.results.map((park) =>
        <div key={park.id}>
            <Card sx={{ maxWidth: 700, margin: '0 auto'}}>
            <CardMedia
                component="img"
                height="250"
                image={park.images[0].url}
                alt=""
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {park.fullName}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    Description
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {park.description}
                </Typography>
                <br/>
                <Typography variant="body1" color="text.secondary">
                    Directions
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {park.directionsInfo}
                </Typography>
                <br />
                <Typography variant="body1" color="text.secondary">
                    Weather
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {park.weatherInfo}
                </Typography>
                <br />
                <Typography variant="body1" color="text.secondary">
                    More Info
                </Typography>
                <Typography variant="body2" color="text.secondary">
                <a target="_blank" href={park.url}>LINK</a>
                </Typography>
            </CardContent>
        </Card>
        <br/>
        </div>
    );
}

export default ResultList;
