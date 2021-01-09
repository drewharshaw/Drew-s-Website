import * as React from "react";

import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";

export function ScrollSlide(props) {
  const { children, scrolPos } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: scrolPos,
  });

  return (
    <Slide in={trigger} direction="left" timeout={350}>
      {children}
    </Slide>
  );
}
