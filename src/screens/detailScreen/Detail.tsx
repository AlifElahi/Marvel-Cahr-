import { CottageSharp } from '@mui/icons-material';
import * as React from 'react';
import { useParams } from 'react-router-dom';
import ComicList from '../../components/comisList';
import * as CharacterService from "../../services/Character/CharacterService";
import { CharacterType } from '../../types/CharacterType';
import { ExtendedComicBookType } from '../../types/ComicBookType';
import './Detail.css';




export const Details = () => {

const {id}= useParams()
const [character, setCharacter] = React.useState<CharacterType>();
const [comics, setComics] = React.useState<ExtendedComicBookType[]>();
    React.useEffect(() => {
        CharacterService.fetchCharacterDetails({ id}).then((r) =>
            setCharacter(r.results[0])
        );
        CharacterService.fetchCharacterComics({ id}).then((r) =>
            setComics(r.results)
        );
    }, []);
   
    return (
        <div  style={{  height: "100%", overflow: "scroll" }}>
        <div className="characterDetail">
            <div className="characterDetail__banner">
                <img
                    className="characterDetail__cover"
                    src={character?.thumbnail.path + "." + character?.thumbnail.extension}
                    alt=""
                />
                <div className="characterDetail__name">{character?.name}</div>
            </div>
            <div className="characterDetail__content">
                <h4>Description : </h4>
                <h4>{character?.description || "-"}</h4>
                <br />
                <h4>Comics : {comics?.length === 0 && "-"}</h4>
                {comics && <ComicList comics={comics} />}
            </div>
        </div>
        </div>
    );
}

export default Details