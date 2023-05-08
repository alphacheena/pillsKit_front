import axios from "axios";

const loginUser = async (credentials) => {
  try {
    const res = await axios.post("http://127.0.0.1:8000/api/token", {
      username: credentials.username,
      password: credentials.password,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const createUser = async (credentials) => {
  try {
    const res = await axios.post("http://127.0.0.1:8000/register", {
      username: credentials.username,
      first_name: credentials.first_name,
      last_name: credentials.last_name,
      email: credentials.email,
      password: credentials.password,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export { loginUser, createUser };
