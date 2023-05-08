import axios from "axios";

export const EditProfileAPI = async (credentials) => {
  try {
    const token = JSON.parse(localStorage.getItem("jwt"));
    const res = await axios.put(
      `http://127.0.0.1:8000/user/update/${credentials.user_id}`,
      {
        username: credentials.username,
        first_name: credentials.first_name,
        last_name: credentials.last_name,
        email: credentials.email,
      },
      {
        headers: {
          Authorization: "Bearer " + token.access,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};
