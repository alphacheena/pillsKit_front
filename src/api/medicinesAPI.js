import axios from "axios";

export const fetchMedicines = async (kit_id) => {
  try {
    const token = JSON.parse(localStorage.getItem("jwt"));
    const res = await axios.get(`http://127.0.0.1:8000/medicines/${kit_id}`, {
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
