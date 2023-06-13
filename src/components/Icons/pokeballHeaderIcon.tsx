import React from "react";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

const PokeballHeaderIcon: React.FC<SvgIconProps> = (props) => {
    return (
        <SvgIcon {...props}>
            <path d="M16.1452 0C7.06037 14.2597 1.31316 30.8418 0 48.6529H54.5137C58.3024 23.9667 79.687 5.05785 105.5 5.05785C119.757 5.05785 132.663 10.8262 142 20.1504V0H16.1452ZM142 92.8496V155.552C130.623 159.723 118.328 162 105.5 162C49.7214 162 4.0256 118.949 0 64.3471H54.5137C58.3024 89.0333 79.687 107.942 105.5 107.942C119.757 107.942 132.663 102.174 142 92.8496ZM105.5 92.2479C125.297 92.2479 141.346 76.243 141.346 56.5C141.346 36.757 125.297 20.7521 105.5 20.7521C85.703 20.7521 69.6544 36.757 69.6544 56.5C69.6544 76.243 85.703 92.2479 105.5 92.2479Z" />
        </SvgIcon>
    );
};

export default PokeballHeaderIcon;
