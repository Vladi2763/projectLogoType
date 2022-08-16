export type Article = {
  src: string;
  tag: string;
  title: string;
  author: string;
  date: string;
  veiws: string;
  text: string;
};

export type InitialState = {
  articles: Array<Article>;
  listNavigation: Array<string>;
};

const initialState: InitialState = {
  articles: [
    {
      src: "first",
      tag: "lifestyle",
      title: "Eat Right For Your Exercise Regime",
      author: "Niek Bove",
      date: "April 8, 2018",
      veiws: "3K Views",
      text: "Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…",
    },
    {
      src: "second",
      tag: "lifestyle",
      title: "The Look: Perfect Balance",
      author: "Niek Bove",
      date: "April 8, 2018",
      veiws: "3K Views",
      text: "Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…",
    },
    {
      src: "third",
      tag: "style",
      title: "Fun Things to Do in Rome",
      author: "Niek Bove",
      date: "April 8, 2018",
      veiws: "3K Views",
      text: "Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…",
    },
    {
      src: "fourth",
      tag: "style",
      title: "24 Colorful Ceilings That Add Unexpected Contrast to Any Room",
      author: "Niek Bove",
      date: "April 8, 2018",
      veiws: "3K Views",
      text: "Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…",
    },
    {
      src: "fifth",
      tag: "Lifestyle",
      title: "9 New Songs to Heat Up Your Fall Playlist",
      author: "Niek Bove",
      date: "April 8, 2018",
      veiws: "3K Views",
      text: "Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…",
    },
    {
      src: "sixth",
      tag: "Events",
      title: "What You Need on Your Bedside Table",
      author: "Niek Bove",
      date: "April 8, 2018",
      veiws: "3K Views",
      text: "Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…",
    },
    {
      src: "seventh",
      tag: "Travel",
      title: "When Two Wheels Are Better Than Four",
      author: "Niek Bove",
      date: "April 8, 2018",
      veiws: "3K Views",
      text: "Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…",
    },
    {
      src: "eighth",
      tag: "Travel",
      title: "26 Living Room Ideas from the Homes of Top Designers",
      author: "Niek Bove",
      date: "April 8, 2018",
      veiws: "3K Views",
      text: "Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…",
    },
    {
      src: "ninth",
      tag: "Music",
      title: "What Makes Your City’s Style Unique",
      author: "Niek Bove",
      date: "April 8, 2018",
      veiws: "3K Views",
      text: "Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…",
    },
  ],
  listNavigation: ["demos", "post", "features", "categories", "shop"],
};

const mainReducer = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default mainReducer;
