<template>
    <h1>Games</h1>
    <ul>
        <div v-for="game of games" :key="game.id">
                {{game.title}}
        </div>
    </ul>
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