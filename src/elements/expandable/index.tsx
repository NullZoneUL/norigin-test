import React, { ReactNode, useEffect, useRef, useState } from "react";
import Arrow from "@assets/images/arrow/arrow.svg";
import "./_style.scss";

const Expandable = ({
  children,
  height,
}: {
  children: ReactNode;
  height: number;
}) => {
  const [expanded, setExpanded] = useState(false);
  const [fixed, setFixed] = useState(false);
  const fullLengthContainer = useRef<HTMLDivElement>();

  useEffect(() => {
    let checkWidthTimeout: ReturnType<typeof setTimeout>;
    const resizeListener = (): void => {
      clearTimeout(checkWidthTimeout);
      checkWidthTimeout = setTimeout(() => {
        if (fullLengthContainer.current?.clientHeight <= height) {
          setFixed(true);
          return;
        }
        setFixed(false);
      }, 300);
    };
    window.addEventListener("resize", resizeListener);

    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  useEffect(() => {
    if (fullLengthContainer.current?.clientHeight <= height) {
      setFixed(true);
    }
  }, [children, height]);

  return (
    <div
      className={`expandable-container ${
        expanded || fixed ? "expandable-expanded" : ""
      }`}
    >
      <div className="expandable-text" style={{ maxHeight: `${height}px` }}>
        <div ref={fullLengthContainer}>{children}</div>
      </div>
      <div className="expandable-shadow"></div>
      {!fixed && (
        <div
          className="expandable-expand"
          onClick={() => setExpanded(!expanded)}
        >
          <img src={Arrow} />
        </div>
      )}
    </div>
  );
};

export default Expandable;
