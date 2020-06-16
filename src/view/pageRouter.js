import React from 'react';
import PageSample from './pages/pageSample';
import Environment from './pages/environment';
import Top from './pages/top';

const PageRouter = ({states, pages}) => {
	return (
		<>
			{states.page === 0 && <Top name={pages[0].name} />}
			{states.page === 1 && <Environment comment={pages[1].name} />}
			{states.page === 2 && <PageSample comment={pages[2].name} />}
		</>
	);
}

export default PageRouter;
