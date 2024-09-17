import { writable } from 'svelte/store';

export interface Book {
	title: string;
	author: string;
	year: number;
	themes: string[];
	summary: string;
}

export const books = writable<Book[]>([
	{
		title: 'book1',
		author: 'Author 1',
		year: 2000,
		themes: ['Theme 1', 'Theme 2'],
		summary: 'Summary of book 1.',
	},
	{
		title: 'book2',
		author: 'Author 2',
		year: 2005,
		themes: ['Theme 3', 'Theme 4'],
		summary: 'Summary of book 2.',
	},
]);


export function addNewBook(newBook : Book){
    books.update((currentBooks) => {
        return [
            ...currentBooks,
            newBook
        ]
    });
}

export function deleteBook(toDelete : Book){
    books.update((currentBooks) => {
        return currentBooks.filter((b) => b.title !== toDelete.title)
    })
}
