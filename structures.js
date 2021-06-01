const user = {
  username: String,
  email: String,
  password: String, // hashed
  image: String, // ? do we need this
};

const post = {
  likeCount: Number,
  commentCount: Number,
  title: String,
  description: String,
  user: user,
  image: String, // Not mandatory and this will only store the url of the stored image
};

const pages = {
  timeline,
  profile_page,
};

const loginProviders = {
  email,
  google,
  facebook,
  apple,
};
