import boxShadow from "assets/theme/functions/boxShadow";

const blackMain = "black"; // Assuming black.main is defined somewhere

const shadowStyles = {
    xs: boxShadow([0, 2], [9, -5], blackMain, 0.15),
    sm: boxShadow([0, 5], [10, 0], blackMain, 0.12),
    md: `${boxShadow([0, 4], [6, -1], blackMain, 0.1)},
     ${boxShadow([0, 2], [4, -1], blackMain, 0.06)}`,
    lg: `${boxShadow([0, 10], [15, -3], blackMain, 0.1)},
     ${boxShadow([0, 4], [6, -2], blackMain, 0.05)}`,
    xl: `${boxShadow([0, 20], [25, -5], blackMain, 0.1)},
     ${boxShadow([0, 10], [10, -5], blackMain, 0.04)}`,
    xxl: boxShadow([0, 20], [27, 0], blackMain, 0.05),
    inset: boxShadow([0, 1], [2, 0], blackMain, 0.075, "inset"),
};

export default shadowStyles;
