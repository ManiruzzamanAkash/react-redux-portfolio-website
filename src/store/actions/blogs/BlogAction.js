import {
  API_PORTFOLIO_LIST,
  API_PORTFOLIO_LIST_BY_CATEGORY,
} from "../../../APIEndPoint";
import { GET_BLOGS, SET_BLOGS_LOADING } from "../ActionTypes";
import Axios from "axios";

export const getBlogAction = (categoryID) => (dispatch) => {
  dispatch({ type: SET_BLOGS_LOADING, payload: true });

  let apiEndPoint = API_PORTFOLIO_LIST;
  if (typeof categoryID !== "undefined" && categoryID !== 0) {
    apiEndPoint = `${API_PORTFOLIO_LIST_BY_CATEGORY}/${categoryID}`;
  }

  Axios.get(apiEndPoint)
    .then((res) => {
      dispatch({ type: SET_BLOGS_LOADING, payload: false });
      const data = [
        {
          id: 1,
          title:
            "Laravel and React Basic - Intermidate Task Management Project",
          short_description:
            "Hello Everyone, This is a Laravel and React Basic - Intermidate Task Management Project",
          is_external_link: true,
          link:
            "https://www.youtube.com/watch?v=6d4lxfv8x0k&list=PL_ftyCsXJUO79X799gETULG6YdsFfzJeA",
          image: "https://i.ibb.co/d6ZGQcY/details-page.png",
          link_type: "youtube",
        },
        {
          id: 2,
          title: "How To Make a Role Management Application using React",
          short_description:
            "Hello Everyone, This is a Role Management Project Using React JS",
          is_external_link: true,
          link:
            "https://www.youtube.com/watch?v=ibTnjfQ9GKQ&list=PL_ftyCsXJUO5hRMon8sQDyEUIbOfgq107",
          image:
            "https://camo.githubusercontent.com/27424986eee609a9f6142a23867ad4ca2ae9dd7e/68747470733a2f2f692e6962622e636f2f56337a584431342f446179732d44656661756c742e706e67",

          link_type: "youtube",
        },
        // {
        //   id: 3,
        //   title: "Simple Calculator Source Code using React JS",
        //   short_description:
        //     "Hello Everyone, This is a Simple Calculator Source Code using React JS",
        //   is_external_link: true,
        //   link: "https://github.com/ManiruzzamanAkash/react-calculator",
        //   image:
        //     "https://camo.githubusercontent.com/8ada9e08be42b37a9f3d1708f592463287479f36/68747470733a2f2f692e6962622e636f2f79734343526b582f64656d6f2d6c6f6f6b2d726573756c742e706e67",
        // },
      ];
      return dispatch(dispatchGetBlogs(data));
      // return dispatch(dispatchGetBlogs(res.data.data));
    })
    .catch((err) => {
      dispatch({ type: SET_BLOGS_LOADING, payload: false });
      return dispatch(dispatchGetBlogs([]));
    });
};

const dispatchGetBlogs = (data) => {
  return { type: GET_BLOGS, payload: data };
};
