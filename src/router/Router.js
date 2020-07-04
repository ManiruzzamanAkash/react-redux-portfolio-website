import React from "react";
import CVPageContainer from "../views/pages/CVPageContainer";
import BlogsPageContainer from "../views/pages/BlogsPageContainer";

const HomePageContainer = React.lazy(() =>
  import("../views/pages/HomePageContainer")
);
const AboutPageContainer = React.lazy(() =>
  import("../views/pages/AboutPageContainer")
);
const ContactPageContainer = React.lazy(() =>
  import("../views/pages/ContactPageContainer")
);
const PortfolioPageContainer = React.lazy(() =>
  import("../views/pages/PortfolioPageContainer")
);
const ExtraActivityPageContainer = React.lazy(() =>
  import("../views/pages/ExtraActivityPageContainer")
);

const routes = [
  {
    path: "/",
    name: "Home page",
    component: HomePageContainer,
    exact: true,
  },
  {
    path: "/about",
    name: "About page",
    component: AboutPageContainer,
    exact: true,
  },
  {
    path: "/contact",
    name: "Contact page",
    component: ContactPageContainer,
    exact: true,
  },
  {
    path: "/portfolio",
    name: "Portfolio page",
    component: PortfolioPageContainer,
    exact: true,
  },
  {
    path: "/skills",
    name: "Skills Page",
    component: ExtraActivityPageContainer,
    exact: true,
  },
  {
    path: "/cv",
    name: "CV Page",
    component: CVPageContainer,
    exact: true,
  },
  {
    path: "/blog",
    name: "Blogs",
    component: BlogsPageContainer,
    exact: true,
  },
];

export default routes;
