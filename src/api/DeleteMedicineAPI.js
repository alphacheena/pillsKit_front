import axios from "axios";

export async function DeleteMedicine(medicine_id) {
  try {
    const token = JSON.parse(localStorage.getItem("jwt"));
    const res = await axios.delete(`http://127.0.0.1:8000/medicine/delete/${medicine_id}`, {
      headers: {
        Authorization: "Bearer " + token.access,
      },
    });
  } catch (error) {
    console.log(error);
  }
}
