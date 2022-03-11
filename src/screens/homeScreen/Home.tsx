import * as React from 'react';
import ChatertorCard from '../../components/charectorCard';
import InfiniteScroll from "react-infinite-scroll-component";
import { Grid } from '@mui/material';
import { height, padding } from '@mui/system';
import './Home.css'
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getCharacterList, getCharacters } from '../../store/features/characterSlice';

export default function Home() {
    const dispatch = useAppDispatch();
    const { status, results, count } = useAppSelector(getCharacterList);

    React.useEffect(() => {
        if (count === 0) {
          dispatch(getCharacters(0));
        }
      }, [count, dispatch]);


    return (
        <div id="scrollableDiv" style={{display:'flex', justifyContent:'center',alignContent:"center", height:"87vh" ,overflow: "auto" }}>
            <InfiniteScroll
                dataLength={count}
                next={() => dispatch(getCharacters(count))}
                hasMore={true}
                loader={<p style={{ width:"100%", textAlign: 'center' }}><b>Loading...</b></p>}
                scrollableTarget="scrollableDiv"
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
                className="cards"
            >
                {results.map((x, index) =>

                    <ChatertorCard {...x} key={index}/>

                )}
            </InfiniteScroll>

        </div>
    );
}
