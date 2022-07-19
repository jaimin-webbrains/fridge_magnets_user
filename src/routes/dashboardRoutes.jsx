import About_us from "views/pages/AboutUs/about_us";

import content from "views/pages/content/content";
import Content from "views/pages/content/content";
import Size from "views/pages/content/size";
import Gallery from "views/pages/Gallery/gallery";

import News from "views/pages/News/news";

const dashboardRoutes = [
  // { path: "/", component: DashboardLayout },
  { path: "/home", component: content },
  { path: "/categories", component: content },
  { path: "/categories/:slug", component: Content },
  { path: "/categories/size", component: Size },
  { path: "/printing-products", component: content },
  { path: "/printing-products/:slug", component: content },

  { path: "/categories/:slug/:brand", component: Content },
  { path: "/printing-products/:slug/:brand", component: content },

  { path: "/news", component: News },
  { path: "/about-us", component: About_us },
  { path: "/gallery", component: Gallery },

  // { path: "/categories/add", component: categoriesAddModal },

  // { path: "/brands", component: brands },
  // { path: "/brands/add", component: brandsAddModal },

  // { path: "/colors", component: colors },
  // { path: "/colors/add", component: colorsAddModal },

  // { path: "/papers", component: papers },
  // { path: "/papers/add", component: papersAddModal },

  // { path: "/sizes", component: sizes },
  // { path: "/sizes/add", component: sizesAddModal },

  // { path: "/markers", component: markers },
  // { path: "/markers/add", component: markersAddModal },

  // { path: "/Products", component: products },
  // { path: "/Products/add", component: productsAddForm },
  // { path: "/Products/edit/:id", component: productsAddForm },

  // { path: "/Settings", component: settings },
];

export default dashboardRoutes;
