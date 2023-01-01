import { NOTION_BOOKMARK_DATABASE } from '$env/static/private';
import { notion } from '$lib/notion';
import type { BookmarkItem } from '$lib/types';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const bookmarks = [];
	const response = await notion.databases.query({
		database_id: NOTION_BOOKMARK_DATABASE
	});

	for (const result of response.results) {
		const bookmark: BookmarkItem = {
			id: result.id,
			title: '',
			url: '',
			comment: '',
			date: '',
			tags: []
		};

		if ('properties' in result) {
			if ('title' in result.properties.Name) {
				bookmark.title = result.properties.Name.title[0]?.plain_text;
			}
			if ('url' in result.properties.URL) {
				bookmark.url = result.properties.URL.url ?? '';
			}
			if ('rich_text' in result.properties.Comment) {
				bookmark.comment = result.properties.Comment.rich_text[0]?.plain_text;
			}
			if ('date' in result.properties.Date) {
				bookmark.date = result.properties.Date.date?.start ?? '';
			}
			if ('multi_select' in result.properties.Tags) {
				bookmark.tags = result.properties.Tags.multi_select.map((tag) => {
					return {
						id: tag.id,
						name: tag.name
					};
				});
			}

			bookmarks.push(bookmark);
		}
	}

	return {
		bookmarks
	};
};
