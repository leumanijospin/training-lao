export type Question = {
  title: String;
  suggestions: Suggestion[];
};

export type Suggestion = {
  status: Boolean;
  name: String;
};
