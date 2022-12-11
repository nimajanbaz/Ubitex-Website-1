const BASE_URL = "http://185.67.102.232:1337";

export const GET_ALL_POSTS = `${BASE_URL}/api/posts?populate=*`;
export const GET_SINGLE_POST = (id) => {
  return `${BASE_URL}/api/posts/${id}?populate=*`;
};

export const GET_ALL_CATEGORIES = `${BASE_URL}/api/categories?populate=*`;
export const GET_SINGLE_CATEGORIES = (id) => {
  return `${BASE_URL}/api/categories/${id}?populate=*`;
};
