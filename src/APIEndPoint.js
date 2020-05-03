const environment = "development";
let baseURL = "http://127.0.0.1:8200/MyPortfolioAPI/";
if (environment !== "development") {
  baseURL = "https://akash.devsenv.com/api/";
}

/**
 * LifeStory / About
 */
export const API_LIFESTORY = `${baseURL}api/v1/lifestory`;
export const API_ABOUT_SETTINGS = `${baseURL}api/v1/about`;

/**
 * PortFolio Categories
 */
export const API_CATEGORY_LIST = `${baseURL}api/v1/categories`;

/**
 * PortFolio
 */
export const API_PORTFOLIO_LIST = `${baseURL}api/v1/portfolios`;
export const API_PORTFOLIO_LIST_BY_CATEGORY = `${baseURL}api/v1/portfolios/categories`;

/**
 * Extra Activity Types
 */
export const API_ACTIVITY_TYPE_LIST = `${baseURL}api/v1/activity-types`;

/**
 * Extra Activity
 */
export const API_ACTIVITY_LIST = `${baseURL}api/v1/activities`;
export const API_ACTIVITY_LIST_BY_TYPE = `${baseURL}api/v1/activities/types`;

/**
 * Contact
 */
export const API_STORE_CONTACT = `${baseURL}api/v1/send-contact`;
