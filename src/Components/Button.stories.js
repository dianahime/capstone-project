import React from "react";
import Button from "./Button";
import GlobalStyles from "../GlobalStyles";

export default {
  title: "Button",
  component: Button,
};

export const Text = () => (
  <>
    <GlobalStyles />
    <Button text="Hello" />
  </>
);
