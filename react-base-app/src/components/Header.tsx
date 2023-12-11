import { ChangeEvent } from "react";
import { Link, NavLink } from "react-router-dom";
import useCustomTheme from "../hooks/useCustomTheme";
import { headerTitle, links, tailwindThemes } from "../utils/constants";

const Header = () => {
	const setTheme = useCustomTheme(tailwindThemes);

	function changeTheme(e: ChangeEvent<HTMLSelectElement>) {
		setTheme(e.target.value);
	}

	return (
		<header className='navbar sticky top-0  z-50 bg-secondary text-secondary-content'>
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
				<Link className='btn btn-ghost text-xl' to='/'>
					{headerTitle}
				</Link>
			</div>
			<div className='navbar-end gap-2'>
				<select
					className='select select-md focus:border-none select-ghost  text-md focus:bg-secondary focus:rounded-md'
					onChange={changeTheme}
				>
					{tailwindThemes.map((item) => (
						<option
							key={item}
							value={item}
							className='text-center font-semibold'
						>
							{item}
						</option>
					))}
				</select>
			</div>
		</header>
	);
};

export default Header;
