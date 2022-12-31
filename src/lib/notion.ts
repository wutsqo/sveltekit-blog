import { Client } from '@notionhq/client';
import { NOTION_TOKEN } from '$env/static/private';

export const notion = new Client({
	auth: NOTION_TOKEN
});
