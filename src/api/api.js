import request from "./index";

// const baseURL = "http://43.139.70.11:8903";
// const baseURL = "http://localhost:8903";
const baseURL = "http://www.zhonghanlogistics.cn:8903";
const filterRes = res => res.status === 200 && res.data;

export const apiGetBaseInfo = name => {
  return request({
    url: `${baseURL}/v1/get/info`,
    method: "get",
    params: { name }
  }).then(filterRes);
};

export const apiGetBanner = () => {
  return request({
    url: `${baseURL}/v1/get/banner`,
    method: "get"
  }).then(filterRes);
};

export const apiGetRelative = () => {
  return request({
    url: `${baseURL}/v1/get/relativeService`,
    method: "get"
  }).then(filterRes);
};

export const apiGetCustom = () => {
  return request({
    url: `${baseURL}/v1/get/custom`,
    method: "get"
  }).then(filterRes);
};

export const apiGetAdvantage = () => {
  return request({
    url: `${baseURL}/v1/get/advantage`,
    method: "get"
  }).then(filterRes);
};

export const apiGetRecruit = () => {
  return request({
    url: `${baseURL}/v1/get/recruit`,
    method: "get"
  }).then(filterRes);
};

export const apiSubmitContact = form => {
  return request({
    url: `${baseURL}/v1/add/contactus`,
    method: "post",
    data: new URLSearchParams(form).toString()
  }).then(filterRes);
};

export const apiGetNews = () => {
  return request({
    url: `${baseURL}/v1/get/news`,
    method: "get"
  }).then(filterRes);
};

export default {};
