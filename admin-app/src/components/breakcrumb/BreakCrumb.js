import React from "react";
import "./breakcrumb.css";
import {
  Breadcrumbs as MUIBreadcrumbs,
  Link,
  Typography,
} from "@material-ui/core";
import { withRouter } from "react-router-dom";

const Breadcrumbs = (props) => {
  const {
    history,
    location: { pathname },
  } = props;
  const pathnames = pathname.split("/").filter((x) => x);
  // console.log("***********");
  // console.log(pathnames);
  // console.log("***********");
  return (
    <MUIBreadcrumbs className="first-break" aria-label="breadcrumb">
      {pathnames.length > 0 ? (
        <Link onClick={() => history.push("/")}>Home</Link>
      ) : (
        <Typography className="typo"> Home </Typography>
      )}
      {pathnames.map((name, index) => {
        if (pathnames[index].length < 15) {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          return isLast ? (
            <Typography key={name}>{name}</Typography>
          ) : (
            <Link key={name} onClick={() => history.push(routeTo)}>
              {name}
            </Link>
          );
        }
      })}
    </MUIBreadcrumbs>
  );
};

export default withRouter(Breadcrumbs);
