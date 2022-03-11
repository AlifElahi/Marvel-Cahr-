import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { ExtendedComicBookType } from '../types/ComicBookType';

const Comic = ({
    id,
    title,
    pageCount,
    dates,
    prices,
    thumbnail,
    urls,
}: ExtendedComicBookType) => {
    const [publishedDate] = React.useState(
        dates.find((date) => date.type === "onsaleDate")?.date
    );
    return (
        <Card sx={{ maxWidth: 345 }}>
            <a

                href={urls.find((url) => url.type === "detail")?.url}
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
            >
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={thumbnail.path + "." + thumbnail.extension}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                        {publishedDate ?
                            <Typography variant="body2" color="text.secondary">
                                Publish date- {new Date(publishedDate).toLocaleDateString()}
                            </Typography> : <></>}
                        <Typography variant="body2" color="text.secondary">
                            {"Price - $" + prices.find((price) => price.type === "printPrice")?.price ||
                                "-"}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Page count : {pageCount || "-"}
                        </Typography>





                    </CardContent>
                </CardActionArea>
            </a>
        </Card>
    );
}

export default Comic