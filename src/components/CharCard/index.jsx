import { CharacterList, ListElement, Img, CardTitle } from "./style";

const List = ({ characters }) => {
  return (
    <CharacterList>
      {characters &&
        characters.map((character) => (
          <ListElement key={character.id}>
            <CardTitle className="characterName">{character.name} </CardTitle>
            <Img src={character.image} alt="" />
          </ListElement>
        ))}
    </CharacterList>
  );
};

export default List;
