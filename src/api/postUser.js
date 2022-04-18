import axios from 'axios';

const postUser = async (user) => {
  const url = 'https://625ca4b54c36c75357687926.mockapi.io/user';
  const post = await axios.post(url, user);
  return post;
};

export default postUser;
