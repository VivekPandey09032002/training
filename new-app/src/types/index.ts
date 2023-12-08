type NoteType = {
	id: number;
	title: string;
	content: string;
	category: number;
	created_at: string;
	updated_at?: string;
};

type CategoryType = {
	id: number;
	category_name: string;
	priority: string;
};

export type { NoteType, CategoryType };
