import { ChangeEvent, useEffect, useState } from "react";
import { HEADER_TITLE, MENU_OPTIONS, THEME } from "../utils/Constants";

const Header = () => {
	const [theme, setTheme] = useState("");
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
					<div tabIndex={0} className='btn btn-ghost btn-circle'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-5 w-5'
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
					<ul className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'>
						<li tabIndex={0}>
							<a href='/portfolio'>Portfolio</a>
						</li>
						<li tabIndex={0}>
							<a href='/about'>About</a>
						</li>
						<li tabIndex={0}>
							<a href='/'>Home</a>
						</li>
						<li>
							<a href='#carousel'>Carosual</a>
						</li>
					</ul>
				</div>
			</div>
			<div className='navbar-center'>
				<a className='btn btn-ghost text-xl'>{HEADER_TITLE}</a>
			</div>
			<div className='navbar-end gap-2'>
				<button className='btn btn-ghost btn-circle'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-5 w-5'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
						/>
					</svg>
				</button>
				<select
					className='select select-sm focus:border-none select-ghost max-w-xs text-sm'
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
