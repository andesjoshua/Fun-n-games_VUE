<template>
    <h1>Fun N' Games</h1>
        <div v-for="game of games" :key="game.id" class="games">
                <a href="{{game.game_url}}" target='blank'>
                    <img v-bind:src="game.thumbnail">
                </a>
                <ul class="details">
                    <li> Title: {{game.title}} </li>
                    <li> Genre: {{game.genre}} </li>
                    <li> Platform: {{game.platform}} </li> 
                </ul>
        </div>
</template>

<script>

export default {
    data() {
        return {
            games: [],
        }
    },
    mounted() {
        fetch('http://localhost:3000/games')
        .then(response => response.json())
        .then(data => this.games = data)
        .catch(err => console.log(err.message))
    }
}
</script>

<style>

.details {
    width: 200px;
}

 ul {
     list-style-type: none;
 }
 .games {
    padding: 20px;
    display: flex;
    justify-content: center;
}
</style>