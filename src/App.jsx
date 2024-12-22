import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import Grid from '@mui/material/Grid2';

import Main from './pages/Main';
import Header from './components/layout/Header';
import Nav from './components/layout/Nav';

export default function App() {
	return (
		<Container maxWidth='lg'>
			<Box>
				<Header></Header>
				<Grid container spacing={2}>
					<Grid size={3}>
						<Nav></Nav>
					</Grid>

					<Grid size={9}>
						<Routes>
							<Route path='/' element={<Main />} />
						</Routes>
					</Grid>
				</Grid>
			</Box>
		</Container>
	);
}
