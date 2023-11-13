import axios from "axios";
// import { v4 as uuidv4 } from "uuid";

const client = axios.create({ baseURL: "" });

export const request = ({ ...options }) => {
  client.defaults.headers.common["Content-Type"] = "application/json";
  const onSuccess = (response: any) => response;
  const onError = (error: any) => {
    //   // handle errors on calls
    //   options.setToastMessage({
    //     id: uuidv4(),
    //     type: "error",
    //     title: options.actionTitle,
    //     content: error.response?.data?.Message
    //       ? error.response.data.Message
    //       : error.message
    //       ? error.message
    //       : error.response.statusText,
    //     duration: 5000,
    //   });
    //   //console.log("axios-extended error ", error);
    return error;
  };
  return client(options).then(onSuccess).catch(onError);
};
