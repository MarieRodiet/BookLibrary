<script lang="ts">
    import { books, deleteBook, type Book} from '$lib/stores/bookStore';
    import { goto } from '$app/navigation';
	import BookItem from '@mgas/lib/components/BookItem.svelte';
    import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
    import { FontAwesomeIcon} from '@fortawesome/svelte-fontawesome';

    const generateSlug = (title: string): string => title.toLowerCase().replace(/\s+/g, '-');

    const navigateToBook = (slug: string) => {
        goto(`/book/${slug}`);
    };

    let selectedBook : Book | null = null;
    const selectBook = (book : Book) => {
        selectedBook = book;
    }
</script>

<main>
    <h1>Book Library</h1>

    <a href="/add-book">
        <button>Add a New Book</button>
    </a>

    <h2>Books:</h2>
    <table>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Year</th>
          <th>themes</th>
          <th>Summary</th>
          <th></th>
        </tr>

    {#each $books as book (book.title)}
        <tr>
            <td><button on:click={()=> selectBook(book)}>{book.title}</button></td>
            <td>{book.author}</td>
            <td>{book.year}</td>
            <td>{book.themes}</td>
            <td>{book.summary}</td>
            <td>
                <button on:click={() => deleteBook(book)}>
                    <FontAwesomeIcon icon={faTrashCan} />
                </button>
            </td>
        </tr>
    {/each}
    </table>

    {#if selectedBook}
    <BookItem {...selectedBook}/>
    {/if}
</main>

<style>
    table{
        width: 100%;
    }
    table td, th{ 
        border: black 1px solid;
        text-align: center;

    }
    button {
        padding: 10px;
        background-color: #007BFF;
        color: white;
        border: none;
        cursor: pointer;
        margin-bottom: 20px;
    }

    button:hover {
        background-color: #0056b3;
    }

    div {
        margin-bottom: 20px;
    }
</style>
