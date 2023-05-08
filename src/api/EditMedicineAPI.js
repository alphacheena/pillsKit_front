import axios from "axios";

export const EditMedicineAPI = async (credentials) => {
  try {
    const token = JSON.parse(localStorage.getItem("jwt"));
    const res = await axios.patch(
      `http://127.0.0.1:8000/medicine/update/${credentials.medicine_id}`,
      {
        name: credentials.name,
        expire_date: credentials.expire_date,
        count: credentials.count,
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
