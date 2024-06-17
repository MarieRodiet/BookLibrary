import { writable } from 'svelte/store';

interface Book {
	title: string;
	author: string;
	year: number;
	themes: string[];
	summary: string;
}

const books = writable<Book[]>([
	{
		title: 'Book 1',
		author: 'Author 1',
		year: 2000,
		themes: ['Theme 1', 'Theme 2'],
		summary: 'Summary of book 1.',
	},
	{
		title: 'Book 2',
		author: 'Author 2',
		year: 2005,
		themes: ['Theme 3', 'Theme 4'],
		summary: 'Summary of book 2.',
	},
]);

export default books;
