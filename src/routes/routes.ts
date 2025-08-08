import { lazy, LazyExoticComponent } from "react";
import { LazyPage01, LazyPage02, LazyPage03 } from "../01-lazyload/pages";

interface RouteConfig {
   path: string;
   to: string;
   Component: LazyExoticComponent<React.FC> | React.FC;
   name: string;
}

const Lazy01 = lazy(() => import(/* webpackChunkName: "LazyPage01" */ "../01-lazyload/pages/LazyPage01"));
const Lazy02 = lazy(() => import(/* webpackChunkName: "LazyPage02" */ "../01-lazyload/pages/LazyPage02"));
const Lazy03 = lazy(() => import(/* webpackChunkName: "LazyPage03" */ "../01-lazyload/pages/LazyPage03"));

export const routes: RouteConfig[] = [
   {
      path: "/lazy/01",
      to: "/lazy/01",
      Component: Lazy01,
      name: "Page01",
   },
   {
      path: "/lazy/02",
      to: "/lazy/02",
      Component: Lazy02,
      name: "Page02",
   },
   {
      path: "/lazy/03",
      to: "/lazy/03",
      Component: Lazy03,
      name: "Page03",
   }
];
