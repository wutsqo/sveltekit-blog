export interface Book {
	id: string;
	title: string;
	author: string;
	cover: string;
	content?: string;
	status?: string;
}

export interface BookmarkTag {
	id: string;
	name: string;
}

export interface BookmarkItem {
	id: string;
	title: string;
	url: string;
	comment: string;
	date: string;
	tags: BookmarkTag[];
}
