import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import React from 'react';

export default function Nav() {
	return (
		<nav>
			<div>
				<div className='bg-orange-200 w-full h-56 m-1'></div>
			</div>

			<div className='bg-orange-200 w-full h-auto m-1 p-2'>
				<div>
					<h1 className='text-2xl font-bold mb-4'>이름</h1>
					<ul>
						<li className='mb-2'>
							<LocalPhoneRoundedIcon />
							<span>연락처</span>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
