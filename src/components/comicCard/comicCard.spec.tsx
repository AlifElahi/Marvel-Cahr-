import renderer from "react-test-renderer";
import { ExtendedComicBookType } from "../../types/ComicBookType";

import ComicCard from "./comicCard";

describe("ComicCard components", () => {
  const initialState: ExtendedComicBookType = {
    id: 112,
    title: "Comic Book",
    dates: [{ type: "onsaleDate", date: "2020-03-18T00:00:00-0400" }],
    pageCount: 123,
    prices: [{ type: "printPrice", price: 321 }],
    thumbnail: { extension: "png", path: "xyz" },
    urls: [{ type: "detail", url: "https://google.com" }],
  };

  it("renders correctly", () => {
    const tree = renderer.create(<ComicCard {...initialState} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});