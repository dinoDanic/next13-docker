import React from "react";
import { SomeComponent } from "./some-component/some-component";
import { TrigerMe } from "@/components/triger-me";

export const Sidebar = () => {
  return (
    <div>
      <SomeComponent />
      <TrigerMe />
    </div>
  );
};
