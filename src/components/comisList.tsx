

import { ExtendedComicBookType } from '../types/ComicBookType';
import { Box, Grid } from '@mui/material';
import Comic from './comicCard';

const ComicList = ({ comics }: { comics: ExtendedComicBookType[] }) => {
    return (

        <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={1} justifyContent="center" columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {comics?.map((comic, i) => (
                    <Grid item xs={6}>
                        <Comic key={i} {...comic} />
                    </Grid>

                ))}

            </Grid>
        </Box>
    );
}

export default ComicList
