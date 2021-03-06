import Logo from "./logo";
import PropTypes from "prop-types";
import React, { Fragment } from "react";
import breakpoints from "../utils/breakpoints";
import styled from "@emotion/styled";
import { colors } from "../utils/colors";
import { transparentize } from "polished";

import { withPrefix } from "gatsby";

const Container = styled.aside({
  flexShrink: 0,
  width: 288,
  height: "100vh",
  borderRight: `1px solid ${colors.divider}`,
  overflowY: "auto",
  position: "sticky",
  top: 0,
  padding: "24px 0",
});

const ResponsiveContainer = styled(Container)((props) => ({
  [breakpoints.md]: {
    height: "100%",
    backgroundColor: "white",
    boxShadow: `0 0 48px ${transparentize(0.75, "black")}`,
    position: "fixed",
    zIndex: 2,
    opacity: props.open ? 1 : 0,
    visibility: props.open ? "visible" : "hidden",
    transform: props.open ? "none" : "translateX(-100%)",
    transitionProperty: "transform, opacity, visibility",
    transitionDuration: "150ms",
    transitionTimingFunction: "ease-in-out",
  },
}));

const Header = styled.div({
  display: "flex",
  marginBottom: 24,
  paddingLeft: 24,
  paddingRight: 24,
});

const StyledLink = styled.a({
  color: colors.text1,
  textDecoration: "none",
});

const Sidebar = React.forwardRef((props, ref) => {
  const content = (
    <Fragment>
      <Header>
        <StyledLink href={withPrefix(props.logoLink)}>
          <Logo />
        </StyledLink>
      </Header>
      <div className={props.className}>{props.children}</div>
    </Fragment>
  );

  if (props.responsive) {
    return (
      <ResponsiveContainer ref={ref} open={props.open}>
        {content}
      </ResponsiveContainer>
    );
  }

  return <Container>{content}</Container>;
});

Sidebar.displayName = "Sidebar";

Sidebar.propTypes = {
  children: PropTypes.node.isRequired,
  open: PropTypes.bool,
  responsive: PropTypes.bool,
  logoLink: PropTypes.string,
  className: PropTypes.string,
};

Sidebar.defaultProps = {
  logoLink: "/",
};

export default Sidebar;
