import React from "react";
import LoginPageClient from "./page.client";
export { generateStaticParams } from '../static-params';

export default function page() {
  return <LoginPageClient />;
}
