
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import { CharacterType } from "../types/CharacterType";
import "./card.css"
const ChatertorCard = ({
    id,
    name,
    description,
    thumbnail,
    comics,
}: CharacterType) => {
    const theme = useTheme();
    

    

    return (
        <Link to={`/${id}`} className="Card">
            <Card sx={{ display: 'flex', boxShadow: "4px 7px 12px 9px rgba(200,200,200,0.81)" }} >
                <CardMedia
                    component="img"
                    sx={{ width: 151, objectFit: "fill" }}
                    image={thumbnail.path + "." + thumbnail.extension}
                    alt="Live from space album cover"
                />
                <Box sx={{ display: 'flex', flexDirection: 'column', width: 245 }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            {name}
                        </Typography>

                        <Typography noWrap variant="subtitle1" color="text.secondary" component="div" overflow="hidden"
                            whiteSpace="pre-line"
                            textOverflow="ellipsis" height={75}  >
                            {description}
                        </Typography>

                    </CardContent>

                </Box>

            </Card>
        </Link>

    );
}


export default ChatertorCard