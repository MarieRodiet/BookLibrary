<script lang="ts">
    export let title: string;
    export let author: string;
    export let year: number;
    export let themes: string[];
    export let summary: string;
</script>

<div class="book-item">
    <h2>{title}</h2>
    <h3>{author}</h3>
    <p><strong>Year:</strong> {year}</p>
    <p><strong>Themes:</strong>{themes.join(', ')}</p>
    <p>{summary}</p>
</div>

<style>
    .book-item{
        border: 1px solid #ddd;
        padding: 1rem;
        margin: 1rem 0;
        width: 300px;
    }
</style>