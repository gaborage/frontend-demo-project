import React from "react";
import ReactDOM from "react-dom";

import "./index-part1.scss";
import "./index-part2.scss";
import "lib/3rd-party";
import Lazy from "../../component/Lazy";

ReactDOM.render(
    <Lazy module={import(/* webpackChunkName: "welcome" */ "../../component/welcome/welcome")} name="neo"/>,
    document.getElementById("app")
);
