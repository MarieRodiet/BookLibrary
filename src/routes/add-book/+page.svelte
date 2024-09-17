<script>
    import { books, addNewBook } from "$lib/stores/bookStore";
    import { goto } from '$app/navigation';

    let title = "";
    let author = "";
    let year = "";
    let themes = "";
    let summary = "";

    const handleSubmit = () => {
        // Validate the form data
        if (!title || !author || !year || !themes || !summary) {
            alert("Please fill out all fields.");
            return;
        }

        const newBook = {
            title,
            author,
            year : parseInt(year),
            themes : themes.split(",").map(t => t.trim()),
            summary
        }

        // Add the new book to the store
        addNewBook(newBook);

        // Navigate back to the home page
        goto('/');
    };
</script>

<main>
    <h1>Add a New Book</h1>
    <form on:submit|preventDefault={handleSubmit}>
        <label for="title">Title:</label>
        <input id="title" bind:value={title} type="text" required />

        <label for="author">Author:</label>
        <input id="author" bind:value={author} type="text" required />

        <label for="year">Year:</label>
        <input id="year" bind:value={year} type="number" required />

        <label for="themes">Themes:</label>
        <input id="themes" bind:value={themes} type="text" required />

        <label for="summary">Summary:</label>
        <textarea id="summary" bind:value={summary} required></textarea>

        <button type="submit">Add Book</button>
    </form>
</main>

<style>
    form {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    label {
        font-weight: bold;
    }

    input, textarea {
        padding: 5px;
        font-size: 1rem;
    }

    button {
        padding: 10px;
        background-color: #007BFF;
        color: white;
        border: none;
        cursor: pointer;
    }

    button:hover {
        background-color: #0056b3;
    }
</style>
