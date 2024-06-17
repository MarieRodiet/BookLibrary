<script lang="ts">
    import { onMount } from "svelte";
    import { writable } from "svelte/store";
    import bookStore from "$lib/stores/bookStore";
    import BookItem from "$lib/components/BookItem.svelte";
    import type { Book } from "$lib/stores/bookStore";


let searchQuery = writable ('');
let filteredBooks: Book[] = [];

onMount(()=> {
    bookStore.subscribe(value => {
        filteredBooks = value;
    })
})

$: searchQuery.subscribe(query => {
    bookStore.subscribe(value => {
        filteredBooks = value.filter(b => b.title.toLocaleLowerCase().includes(query.toLowerCase()) || b.author.toLowerCase().includes(query.toLowerCase()))
    })
})

</script>

<main>
    <h2>Search books</h2>
    <input type="text" bind:value={$searchQuery} placeholder="Search by title or author"/>
    {#if $searchQuery && filteredBooks.length === 0}
    <p>No books found</p>
    {/if}

    {#each filteredBooks as book (book.title)}
    <BookItem {...book} />
    {/each}
    <slot></slot>
</main>