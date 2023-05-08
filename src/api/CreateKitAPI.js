import axios from "axios";

export async function CreateKit(credentials) {
  try {
    const token = JSON.parse(localStorage.getItem("jwt"));
    const res = await axios.post("http://127.0.0.1:8000/kit",{
        location: credentials.location,
      }, {
        headers: {
          Authorization: "Bearer " + token.access,
        },
      }
    )
  } catch (error) {
    console.log(error);
  }
}
