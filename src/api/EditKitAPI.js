import axios from "axios";

export const EditKitAPI = async (credentials) => {
  try {
    const token = JSON.parse(localStorage.getItem("jwt"));
    const res = await axios.patch(
      `http://127.0.0.1:8000/kit/update/${credentials.kit_id}`,
      {
        location: credentials.location,
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
