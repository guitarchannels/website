import React, { Fragment, useState, useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import mainMenuData from "../../data/NavMenuData";
import MainMenuSection from "../../entities/MainMenuSection";
import MainMenuItem from "../../entities/MainMenuItem";
import GlobalContext from "../../contexts/GlobalContext";
import classNames from "classnames";

export default function NavMenuMobile() {
	const [open, setOpen] = useState(false);
	const location = useLocation();

	const globalContext = useContext(GlobalContext.Context);

	const openMenu = (
		<div className="navbar-menu is-active">
			<div className="navbar-start">
				<div className="navbar-item has-dropdown is-hoverable">
					{mainMenuData.map((section: MainMenuSection) => {
						return (
							<Fragment key={section.title}>
								<a className="navbar-link">{section.title}</a>
								<div className="navbar-dropdown">
									{section.items.map((item: MainMenuItem) => {
										return (
											<NavLink
												className={classNames({
													"navbar-item": true,
													"is-active": item.isDefault && location.pathname === "/"
												})}
												key={item.href}
												activeClassName="is-active"
												to={item.href}
												onClick={() => {
													setOpen(false);
												}}
											>
												{item.title}
											</NavLink>
										);
									})}
								</div>
							</Fragment>
						);
					})}
				</div>
			</div>
		</div>
	);

	return (
		<nav className="navbar is-hidden-tablet" role="navigation" aria-label="main navigation">
			<div className="navbar-brand">
				<a className="navbar-item" href="/">
					<img src={require("../../static/img/logo.svg")} height="28" />
				</a>

				<a role="button" className="navbar-burger burger" onClick={() => setOpen(!open)}>
					<span aria-hidden="true" />
					<span aria-hidden="true" />
					<span aria-hidden="true" />
				</a>
			</div>

			{open ? openMenu : null}
		</nav>
	);
}
