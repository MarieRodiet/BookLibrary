<script lang="ts">
    import {onMount} from "svelte";
    import {page} from "$app/stores";
    import bookStore from "$lib/stores/bookStore";
    import type { Book } from "$lib/stores/bookStore";

    let book : Book | null = null;
    let slug: string = '';

    $: slug = $page.params.slug;

    onMount(()=> {
        bookStore.subscribe(value => {
            book = value.find(b => b.title.toLowerCase().replace(/\s+/g, '-') === slug) || null
        })
    })
</script>

{#if book}
    <h1>{book.title}</h1>
    <h2>{book.author}</h2>
    <p><strong>Year:</strong> {book.year}</p>
    <p><strong>Themes:</strong> {book.themes.join(', ')}</p>
    <p>{book.summary}</p>
{/if}