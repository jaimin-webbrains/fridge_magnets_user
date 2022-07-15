import SideBarUser from "components/sidebar/SideBarUser";
import DashboardLayout from "layouts/DashboardLayout";
import Intro from "views/Intro";
import About_us from "views/pages/AboutUs/about_us";
import products from "views/pages/AddProducts/products";
import productsAddForm from "views/pages/AddProducts/productsAddForm";
import brands from "views/pages/brands/brands";
import brandsAddModal from "views/pages/brands/brandsAddModal";
import categories from "views/pages/Categories/categories";
import categoriesAddModal from "views/pages/Categories/categoriesAddModal";
import colors from "views/pages/Colors/colors";
import colorsAddModal from "views/pages/Colors/colorsAddModal";
import content from "views/pages/content/content";
import Content from "views/pages/content/content";
import Size from "views/pages/content/size";
import Gallery from "views/pages/Gallery/gallery";
import markers from "views/pages/Markers/markers";
import markersAddModal from "views/pages/Markers/markersAddModal";
import News from "views/pages/News/news";
import papers from "views/pages/Papers/papers";
import papersAddModal from "views/pages/Papers/papersAddModal";
import settings from "views/pages/Settings/settings";
import sizes from "views/pages/Sizes/sizes";
import sizesAddModal from "views/pages/Sizes/sizesAddModal";

const dashboardRoutes = [
  { path: "/", component: DashboardLayout },
  { path: "/categories/:slug", component: Content },
  { path: "/categories/size", component: Size },
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
