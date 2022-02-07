<template>
    <h1>Find Your Free Game!</h1>
    <div>
    
       <button @click="filter(games)">All Games</button>
       <button @click="filter(games)">Shooter</button>
       <button @click="filter(games)">Sports</button>
       <button @click="filter(games)">MMORPG</button>
       <button @click="filter(games)">Card Game</button>

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
        filter: function(genre, games) {
            const updatedGames = games.filter((item) => {
                // return item.genre === genre
                console.log(genre, item)
                
            })
            games = updatedGames
            console.log(games)
        }

        
    }
}
</script>

<style>
.details {
    width: 250px;
    align-items:center;
    justify-content: left;
}

 ul {
     list-style-type: none;
     margin: 20px;
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