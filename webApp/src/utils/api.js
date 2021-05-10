import axios from "axios";

export async function getEmployees() {
  try {
    //const response = await axios.get("https://api.1337co.de/v3/employees", {
        const response = await axios.get("http://localhost:3001/api/getEmployees", {
          // headers: {
          //     //Authorization: "api-key 14:2021-04-30:lucas.stenberg@tretton37.com 98bbcb9671b4b2bbd13062a20ce47fd6cbfb81ee3898bb5ac0b2f8c0d470d632"
          // }
      }
        );
    return response.data;
  } catch (error) {
    console.log(error);
    return "err";
  }
}

export async function getInitialData(apiKey) {
  console.log(apiKey)
  try {
    const response = await axios.get("http://localhost:3001/api/getInintialData",
      {
         params: {
        key:apiKey
      }
      },
        );
    return response.data;
  } catch (error) {
    console.log(error);
    return "err";
  }
}

export async function checkProgres() {
  try {
    const response = await axios.get("http://localhost:3001/api/checkProgress",
        );
    return response.data;
  } catch (error) {
    console.log(error);
    return "err";
  }
}