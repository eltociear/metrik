import { css } from "@emotion/react";
import React, { FC } from "react";
import Title from "../assets/icons/Title";
import OldLogo from "../assets/icons/OldLogo";
import { Link } from "react-router-dom";

const headerStyles = css({
	padding: "0 30px",
	boxShadow: "0 2px 4px #f0f1f2",
	backgroundColor: "#ffffff",
	display: "flex",
	alignItems: "center",
});

const Header: FC = () => {
	return (
		<Link to={"/"}>
			<div css={headerStyles}>
				<OldLogo />
				<Title css={{ marginLeft: 8 }} />
			</div>
		</Link>
	);
};

export default Header;
