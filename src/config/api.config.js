const BASE_URL = 'https://bapi.ubitex.io/v1.0'

// statics
export const GET_BLOG_HEADER_DATA_URL = `${BASE_URL}/static/blog/getBlogHeaderData` //GET
export const GET_BLOG_HEADER_SLIDER_URL = `${BASE_URL}/static/blog/getBlogHeaderSlider` //GET

// blog
export const GET_BLOG_POST_URL = `${BASE_URL}/posts` //GET
export const GET_BLOG_CATEGORIES_URL = `${BASE_URL}/categories` //GET
export const GET_BLOG_ADD_COMMENT_URL = `${BASE_URL}/comments/addComment` //POST