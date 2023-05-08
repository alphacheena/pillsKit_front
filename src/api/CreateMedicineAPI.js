import axios from "axios";

export async function CreateMedicine(credentials) {
  try {
    const token = JSON.parse(localStorage.getItem("jwt"));
    const res = await axios.post(
      "http://127.0.0.1:8000/medicine",
      {
        kit_id: credentials.kit_id,
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
    console.log("created");
  } catch (error) {
    console.log(error);
  }
}
