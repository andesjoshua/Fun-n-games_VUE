<template>
    <h1 class='header' >
       <a href='http://localhost:8080/%7B%7Bgame.game_url%7D%7D'> Fun N' Games! </a>
            <img src='/logo.png' class='logo'/>
    </h1>
</template>

<style>
    a {
        text-decoration: none;
        color: black;
    }
    a:hover {
        color: red;
    }
    .header {
        display: flex;
        margin-left: 50px;
        padding: 20px;
    }
    .logo {
        height: 40px;
        margin: 5px;
        display: flex;
    }
</style>