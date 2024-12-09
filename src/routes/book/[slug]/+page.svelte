<script lang="ts">
    import { books, viewBook, type Book } from '$lib/stores/bookStore';
    import BookItem from "@mgas/lib/components/BookItem.svelte";
    import { onDestroy } from 'svelte';
    import { page } from '$app/stores';

    let selectedBook: Book | null = null;
    let unsubscribe: () => void;
    $: {
        unsubscribe = books.subscribe((bookList) => {
            selectedBook = bookList.find(book => book.title === $page.params.slug) || null;
        });
    }

    onDestroy(() => {
        unsubscribe();
    });

    //let bookToView: Book | null = viewBook($page.params.title)
</script>

<h1>Page of a book</h1>
{#if selectedBook}
    <BookItem {...selectedBook} />
{:else}
    <p>Book not found.</p>
{/if}