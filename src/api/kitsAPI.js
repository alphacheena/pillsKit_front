import axios from "axios";

export const fetchKits = async () => {
  try {
    const token = JSON.parse(localStorage.getItem("jwt"));
    const res = await axios.get(`http://127.0.0.1:8000/kits`, {
      headers: {
        Authorization: `Bearer ${token.access}`,
      },
    });
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
