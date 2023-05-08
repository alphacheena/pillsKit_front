import axios from "axios";

export const fetchUser = async () => {
  try {
    const creds = JSON.parse(localStorage.getItem("jwt"));
    const res = await axios.get("http://127.0.0.1:8000/user", {
      headers: {
        Authorization: "Bearer " + creds.access,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
