<template>
    <input class='search-bar' placeholder='Search games...'/>
    <h2>Find Your Free Game!</h2>    
    <div>
       <button @click="filterGames('Shooter', games)">Shooter</button>
       <button @click="filterGames('Fighting', games)">Fighting</button>
       <button @click="filterGames('MMORPG', games)">MMORPG</button>
       <button @click="filterGames('Card Game', games)">Card Game</button>
    </div>
        <div v-for="game of games" :key="game.id" class="games">
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
        },
        methods: {
        filterGames: function(genre, games) {
                return this.games = games.filter((item) => item.genre === genre)
            }
        }, 
        computed: {
           
        }
    };
</script>

<style>
    
    ul {
        list-style-type: none;
        margin: 20px;
    }
    input {
        
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
      .search-bar {
        display: flex;
        margin-left: 70px;
        background-color: white;
        border: 2px solid color #222222;
        padding: 0.4rem 0.8rem;
        border-radius: 50px;
        font-size: 1rem;
        font-family: inherit;
    }
</style>