<template>
    <div>
        <!-- Buttons for filtering through game genres -->
       <button @click="filteredGames = filterGames(allGames, 'Shooter')">Shooter</button>
       <button @click="filteredGames = filterGames(allGames, 'Fighting')">Fighting</button>
       <button @click="filteredGames = filterGames(allGames, 'MMORPG')">MMORPG</button>
       <button @click="filteredGames = filterGames(allGames, 'Card Game')">Card Game</button>
    </div>
    
    <div v-for="game of filteredGames" :key="game.id" class="games">
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
        props: ["allGames"],
        setup() {
            let filterGames = (allGames, genre) => {
                let gamesByGenre = allGames.filter(game => game.genre === genre);
                return gamesByGenre     
            }
            return {
                filterGames
            }
        },
        data() {
            return {
                filteredGames: []
            }
        },
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
    button {
        color: white;
        padding: 10px 20px;
        background-color: blueviolet;
        border-radius: 50px;
        margin: 5px;
        cursor: pointer;
        font-size: 15px;
    }
    button:hover {
        z-index: .25;
        transform: scale(1.05)
    }
</style>