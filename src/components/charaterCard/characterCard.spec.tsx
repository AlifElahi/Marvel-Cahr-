import renderer from "react-test-renderer";
import { CharacterType } from "../../types/CharacterType";
import CharacterCard from "./characterCard";


describe("ComicCard components", () => {
  const initialState: CharacterType = {
    id: 112,
    name: "Alif Elahi",
    thumbnail: { extension: "png", path: "xyz" },
    comics:{items:[{name:"dark"}]},
    description:"One day I wish to be a Marvel hero"
  };

  it("renders correctly", () => {
    const tree = renderer.create(<CharacterCard {...initialState} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});