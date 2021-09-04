const user = {
  id: String, // We need id too, to link with the user for easy working on our side. It will not be visible to the user. 
  username: String,
  email: String,
  password: String, // hashed
  profileImage: String, // ? do we need this
};

// All the post will be stored under a posts collection something like this
// posts/{post1}
// posts/{post2}
const post = {
  likeCount: Number,
  DislikeCount: Number,
  time : Numbers,//eg 5 hours ago
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
  twitter,
  github,
};

// All the likes will be stored under a single likes collection just like post
const like = {
  user: user, // The user who liked the post
  postId: String, // The id of the liked post
};

// Comments will also be stored under a collection called comments
const comment = {
  user: user,
  postId: String,
  comment: String,
};
