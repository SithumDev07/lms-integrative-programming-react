import axios from "axios";
import { toast } from "react-toastify";
import { store } from "../store";
import { showAlert } from "../store/reducers/errorSlice";
import { TOASTIFY_ERROR_FONTS } from "../utils/constants";
import {useSelector} from "react-redux";
import {Component} from "react";

const errorHandling = (error) => {
  const { response } = error;

  store.dispatch(
    showAlert({
      message: response.data.message,
      isVisible: true,
      severity: TOASTIFY_ERROR_FONTS.ERROR,
    }),
  );

  store.dispatch(
    showAlert({
      shouldShow: true,
      message: response.data.message,
      type: TOASTIFY_ERROR_FONTS.ERROR,
    }),
  );

  const errorObject = {};
  if (response && response.status === 401) {
    errorObject.status = 401;
    errorObject.errorCode = error.response?.data.errorCode;
    errorObject.errorMessage = error.response?.data.errorMessage;
    errorObject.data = {};
    toast("An Error Occurred");
  } else {
    errorObject.status = 408;
    errorObject.errorMessage = "Network Error";
    toast("Network Error");
  }
};

const responseHandling = (response) => {
  const responseObject = {
    data: response.data,
    status: response.status,
    token: response.headers.authorization,
    refreshToken: response.headers.refreshToken,
  };

  if (responseObject.status === 201) {
    toast("Successfully Created!");
  }

  return responseObject;
};

class ApiService {

  http = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, HEAD, OPTIONS"
    },
  });

  async apiGET(path, config) {
    const response = await this.http
    .get(path, config)
      .then((response) => responseHandling(response))
      .catch((error) => errorHandling(error));

    return response;
  }

    async apiPOST(path, body, config) {
    const json = JSON.stringify(body);
    console.log("body", body)
    const response = await this.http
    .post(path, json, config)
      .then((response) => responseHandling(response))
      .catch((error) => errorHandling(error));

    return response;
  }

  async apiPATCH(path, id, body) {
    const json = JSON.stringify(body);
    const response = await this.http
      .patch(`${path}/${id}`, json)
      .then((response) => responseHandling(response))
      .catch((error) => errorHandling(error));

    return response;
  }

  async apiPutPathParam(path, body) {
    const json = JSON.stringify(body);
    const response = await this.http
      .put(path, json)
      .then((response) => responseHandling(response))
      .catch((error) => errorHandling(error));

    return response;
  }

  async apiDELETE(path, id) {
    const response = await this.http
      .delete(`${path}/${id}`)
      .then((response) => responseHandling(response))
      .catch((error) => errorHandling(error));

    return response;
  }
}

export default new ApiService();
