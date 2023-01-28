const BASE_URL = 'https://bapi.ubitex.io/v1.0'

// blog statics
export const GET_BLOG_HEADER_DATA_URL = `${BASE_URL}/static/blog/getBlogHeaderData` //GET
export const GET_BLOG_HEADER_SLIDER_URL = `${BASE_URL}/static/blog/getBlogHeaderSlider` //GET

// blog
export const GET_BLOG_POST_URL = `${BASE_URL}/posts` //GET
export const GET_BLOG_CATEGORIES_URL = `${BASE_URL}/categories` //GET
export const GET_BLOG_TAGS_URL = `${BASE_URL}/tags` //GET
export const GET_BLOG_WRITERS_URL = `${BASE_URL}/writers` //GET
export const GET_BLOG_ADD_COMMENT_URL = `${BASE_URL}/comments/addComment` //POST

//markets
export const GET_CRYPTO_INFO_URL = `${BASE_URL}/cryptoInfo` //GET

//markets static
export const GET_MARKETS_HEADER_DATA_URL = `${BASE_URL}/static/crypto/getGainerLoserFavorite` //GET
