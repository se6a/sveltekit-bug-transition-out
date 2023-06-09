/// <reference types="@sveltejs/kit" />

declare module "*.svg";
declare module "*.jpg";
declare module "*.png";
declare module "*.gif";
declare module "*.mp3";

declare module "*?url";

declare module "$app/*";
declare module "/src/*";
declare module "$lib/*";

interface Window {
  APP: any;
  CHRONIC: any;
}
