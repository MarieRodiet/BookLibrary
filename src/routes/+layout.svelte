
<nav>
    <a href="/">Home</a>
    <a href="/add-book">Add Book</a>
</nav>

<slot />

<style>

    nav {
        margin-bottom: 20px;
    }
    a {
        margin-right: 10px;
        text-decoration: none;
        color: #007BFF;
    }
    a:hover {
        color: #0056b3;
    }
</style>