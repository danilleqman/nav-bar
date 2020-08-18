import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import { NavLink, Route } from "react-router-dom";
import FavoriteIcon from "@material-ui/icons/Favorite";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    overflowX: "hidden",
  },
  tabs: {
    display: "flex",
    position: "fixed",

    background:
      "linear-gradient(180deg, rgba(17,0,36,1) 0%, rgba(95,5,151,1) 100%)",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    height: "100%",
    paddingRight: "28px",
    color: "white",
  },
  content: {
    zIndex: 1,
    minHeight: "100vh",
    backgroundColor: "white",
    marginLeft: "70px",
    width: "100%",

    borderRadius: "32px 0 0 32px",
  },
  tabsFooter: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  tab: {
    height: "48px",
    width: "48px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    color: "transparent",
    fontSize: "8px",
    margin: "2px 12px 2px 12px",
  },
  tabIcon: {
    fontSize: "1px",
    color: "white",
  },
}));

export default function Nav({ pages }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.tabs}>
        <div>
          <FavoriteIcon />
        </div>

        <Tabs orientation="vertical" variant="scrollable">
          {pages.map((page, index) => {
            return (
              <NavLink
                key={index}
                icon={page.icon}
                label={page.label}
                to={page.link}
                className={classes.tab}
                activeStyle={{
                  borderRadius: "8px",
                  color: "white",
                  backgroundColor: "rgba(255, 255, 255, 0.5)",
                }}
              >
                <div className={classes.tabIcon}>{page.icon}</div>
                <div>{page.label}</div>
              </NavLink>
            );
          })}
        </Tabs>

        <div className={classes.tabsFooter}>
          <FavoriteIcon /> <FavoriteIcon />
        </div>
      </div>

      <div className={classes.content}>
        {pages.map((page) => {
          return <Route path={page.link}>{page.content}</Route>;
        })}
      </div>
    </div>
  );
}
