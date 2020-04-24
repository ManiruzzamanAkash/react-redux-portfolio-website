const environment = "development";
let baseURL = "http://127.0.0.1:8200/";
if (environment != "development") {
  baseURL = "https://api-portfolio.devsenv.com/";
}

/**
 * LifeStory / About
 */
export const API_LIFESTORY = `${baseURL}MyPortfolioAPI/api/v1/lifestory`;
export const API_ABOUT_SETTINGS = `${baseURL}MyPortfolioAPI/api/v1/about`;

/**
 * PortFolio Categories
 */
export const API_CATEGORY_LIST = `${baseURL}MyPortfolioAPI/api/v1/categories`;

/**
 * PortFolio
 */
export const API_PORTFOLIO_LIST = `${baseURL}MyPortfolioAPI/api/v1/portfolios`;
export const API_PORTFOLIO_LIST_BY_CATEGORY = `${baseURL}MyPortfolioAPI/api/v1/portfolios/categories`;

/**
 * Contact
 */
export const API_STORE_CONTACT = `${baseURL}MyPortfolioAPI/api/v1/send-contact`;
