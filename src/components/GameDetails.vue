<template>
    <div>
        <!-- Buttons for filtering through game genres -->
       <button @click="filteredGames = filterGames(allGames, ''); showWelcome = false">All Games</button>
       <button @click="filteredGames = filterGames(allGames, 'Shooter'); showWelcome = false">Shooter</button>
       <button @click="filteredGames = filterGames(allGames, 'Fighting'); showWelcome = false">Fighting</button>
       <button @click="filteredGames = filterGames(allGames, 'MMORPG'); showWelcome = false">MMORPG</button>
       <button @click="filteredGames = filterGames(allGames, 'Card Game'); showWelcome = false">Card Game</button>
       <button @click="filteredGames = filterGames(allGames, 'Strategy'); showWelcome = false">Strategy</button>

    </div>

    <!-- This div loads all games filtered by a chosen genre -->
    <div class="page">
      <div v-for="game of filteredGames" :key="game.id" class="games">
            <a :href="game.game_url" target='blank'>
                <img :src="game.thumbnail"/>
            </a>

            <ul class="details">
                <li> Title: {{game.title}} </li>
                <li> Genre: {{game.genre}} </li>
                <li> Platform: {{game.platform}} </li> 
                <li> Release Date: {{game.release_date}} </li>
            </ul>
        </div>

        <div v-if="showWelcome" class="welcome">
               <h2>Find Your Free Game!</h2>    
        </div>
    </div>
</template>

<script>    
    export default {
        props: ["allGames"],
        setup() {
                // This function takes in the allGames array and filters it to display only games that match the specified genre.
                const filterGames = (allGames, genre) => {
                    if(genre === '') return allGames

                    let filteredGames = allGames.filter(game => game.genre === genre);
                    return filteredGames                        
            }
            return {
                filterGames,
            }
        },
        data() {
            return {
               filteredGames: [],
               showWelcome: true
            }
        }
    }
</script>

<style>
    .page {
        height: 100%;
        min-height: 80vh;
    }
    .details {
        width: 250px;
        align-items:center;
        justify-content: left;
    }

    .welcome {
        padding: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        min-height: 600px;
        font-size: 20px
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
    .filteredGames {
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