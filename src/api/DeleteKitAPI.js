import axios from "axios";

export async function DeleteKit(kit_id) {
  try {
    const token = JSON.parse(localStorage.getItem("jwt"));
    const res = await axios.delete(`http://127.0.0.1:8000/kit/delete/${kit_id}`, {
      headers: {
        Authorization: "Bearer " + token.access,
      },
    });
  } catch (error) {
    console.log(error);
  }
}
