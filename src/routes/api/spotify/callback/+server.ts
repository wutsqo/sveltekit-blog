import type { RequestHandler } from '../$types';

const GET: RequestHandler = () => {
	return new Response('OK');
};

export { GET };
