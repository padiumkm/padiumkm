import { useEffect, useRef } from "react";

export let useClickOutside = (handler: () => void) => {
  let domNode = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let maybeHandler = (event: any) => {
      if (domNode.current) {
        if (event.target.tagName !== "svg" && event.target.tagName !== "path") {
          if (event.target.className?.includes("outer")) {
            return;
          } else if (domNode.current.contains(event.target)) {
            handler();
          }
        } else {
          return;
        }
      }
    };

    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  }),
    [domNode];

  return domNode;
};
