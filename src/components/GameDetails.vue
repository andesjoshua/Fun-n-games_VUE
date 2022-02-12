<template>
    <div v-for="game of allGames" :key="game.id" class="games">
                <a v-bind:href="game.game_url" target='blank'>
                    <img v-bind:src="game.thumbnail">
                </a>
                <ul class="details">
                    <li> Title: {{game.title}} </li>
                    <li> Genre: {{game.genre}} </li>
                    <li> Platform: {{game.platform}} </li> 
                    <li> Release Date: {{game.release_date}} </li>
                </ul>
        </div>
</template>

<script>
    export default {
        props: ["allGames"]
    }
</script>

<style>
.details {
        width: 250px;
        align-items:center;
        justify-content: left;
    }

    .games {
        padding: 20px;
        margin: auto;
        margin-bottom: 10px;
        display: flex;
        justify-content: center;
        border: .5px transparent;
        width: 650px;
        box-shadow: 4px 4px 8px 0px rgba(0,0,0,0.2);

    }
    .games:hover {
        z-index: .5;
        transform: scale(1.01);
        background-color: #237db9;
    }
</style>