"use client";

import { useEffect } from "react";

const AccessibilityComponent = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("accessibility").then((module) => {
        new module.Accessibility();
      });
    }
  }, []);

  return null; // The package renders its own UI
};

export default AccessibilityComponent;
