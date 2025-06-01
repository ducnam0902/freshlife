import React from "react";
import {
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import logo from "@/assets/Fresh-logo.png";
import { NavLink } from "react-router";
import routes from "@/utils/route";
import { FaTasks, FaChartLine } from "react-icons/fa";
interface ICustomizeListItem {
    route: string,
    title: string,
    icon: React.ReactNode
}
const CustomizeListItem = ({ route, title, icon }: ICustomizeListItem) => {
    return (<NavLink
        to={route}
        style={{ color: "unset", textDecoration: "unset" }}
    >
        {({ isActive }) => (
            <ListItem
                disablePadding
                sx={{
                    background: isActive
                        ? "linear-gradient(to right, #38d900, #5ee32f)"
                        : "#fff",
                }}
            >
                <ListItemButton>
                    <ListItemIcon sx={{ minWidth: '40px', color: isActive ? '#fff' : '#979d97' }}>
                        {icon}
                    </ListItemIcon>
                    <ListItemText
                        primary={title}
                        sx={{
                            color: isActive ? "#fff" : "#979d97",
                            textDecoration: "none",
                            ".MuiTypography-body1": {
                                fontWeight: isActive ? "600" : "500",
                                fontSize: '14px'
                            },
                        }}
                    />
                </ListItemButton>
            </ListItem>
        )}
    </NavLink>)
}

const Header = () => {
    return (
        <Box sx={{ width: "15%", height: "100vh", borderRight: '1px solid #eaebea', boxShadow: '4px 0 5px #eaebea' }}>
            <Box sx={{ marginX: "auto", paddingTop: 2, textAlign: "center" }}>
                <img src={logo} alt="Fresh Life Logo" width={"80px"} />
            </Box>
            <List>
                <CustomizeListItem route={routes.home} title="Dashboard" icon={<FaChartLine />} />
                <CustomizeListItem route={routes.tasks} title="Tasks" icon={<FaTasks />} />
            </List>
        </Box>
    );
};

export default Header;
