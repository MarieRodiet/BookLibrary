<script lang="ts">
    import {onMount} from 'svelte';
    import bookStore from '$lib/stores/bookStore';
    import BookItem from '$lib/components/BookItem.svelte';
    import type { Book } from '$lib/stores/bookStore';

    let books: Book[] = [];

    onMount(()=> {
        bookStore.subscribe(value => {
            books = value;
        })
    })
</script>

<main>
    <h1>Book Library</h1>
    {#each books as book (book.title)}
    <BookItem {...book} />
    {/each}
</main>