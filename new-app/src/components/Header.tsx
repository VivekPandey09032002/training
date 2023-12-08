import { ChangeEvent, useEffect, useRef, useState } from "react";
import { LOGO, THEME, links } from "../utils/Constants";
import { NavLink } from "react-router-dom";

const Header = () => {
	const [theme, setTheme] = useState("");
	const searchRef = useRef<HTMLElement>(null);
	useEffect(() => {
		const newTheme = THEME.find((item) => theme === item);
		document
			.querySelector("html")
			?.setAttribute("data-theme", newTheme ?? "light");
	}, [theme]);

	function changeTheme(e: ChangeEvent<HTMLSelectElement>) {
		setTheme(e.target.value);
	}
	return (
		<header id='header' className='navbar bg-base-100'>
			<div className='navbar-start'>
				<div className='dropdown'>
					<div tabIndex={0} className='btn btn-ghost btn-circle '>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-6 w-6'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M4 6h16M4 12h16M4 18h7'
							/>
						</svg>
					</div>
					<ul className='menu menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'>
						{links.map((link) => (
							<li key={link.id}>
								<NavLink
									style={({ isActive }) =>
										isActive ? { display: "none" } : {}
									}
									to={link.path}
									end
								>
									{link.name}
								</NavLink>
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className='navbar-center'>
				<a className='btn btn-ghost text-xl'>{LOGO}</a>
			</div>
			<div className='navbar-end gap-2'>
				<details className='dropdown dropdown-end'>
					<summary className='m-1 btn btn-ghost' ref={searchRef}>
						Search
					</summary>
					<div className='p-2 shadow menu dropdown-content  z-[1] bg-base-100 rounded-box w-52'>
						<input
							type='text'
							placeholder='Search Todo'
							className='input input-bordered input-sm w-full focus:border-none focus:outline-none'
							onKeyDown={(e) => {
								if (e.code === "Enter" || e.code == "Escape")
									searchRef.current?.click();
							}}
						/>
					</div>
				</details>
				<select
					className='select select-md focus:outline-none select-ghost max-w-xs text-md'
					onChange={changeTheme}
				>
					<option disabled selected>
						Theme
					</option>
					{THEME.map((item) => (
						<option key={item} value={item}>
							{item}
						</option>
					))}
				</select>
			</div>
		</header>
	);
};

export default Header;
