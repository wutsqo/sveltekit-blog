import { NOTION_BOOK_DATABASE } from '$env/static/private';
import { notion } from '$lib/notion';
import type { Book } from '$lib/types';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const books = [];
	const response = await notion.databases.query({
		database_id: NOTION_BOOK_DATABASE,
		filter: {
			property: 'Status',
			select: {
				equals: 'Read'
			}
		}
	});

	for (const result of response.results) {
		const book: Book = {
			id: result.id,
			title: '',
			author: '',
			cover: ''
		};

		if ('properties' in result) {
			if ('title' in result.properties.Name) {
				book.title = result.properties.Name.title[0].plain_text;
			}
			if ('rich_text' in result.properties.Author) {
				book['author'] = result.properties.Author.rich_text[0].plain_text;
			}
			if ('files' in result.properties.Cover) {
				book['cover'] = result.properties.Cover.files[0].name;
			}

			books.push(book);
		}
	}

	return {
		books
	};
};
