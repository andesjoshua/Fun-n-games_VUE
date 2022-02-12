<template>
    <!-- Search bar functionality pending on learning state management in Vue -->
    <input class='search-bar' placeholder='Search games...'/>
    <h2>Find Your Free Game!</h2>    
    <div>
        <!-- Buttons for filtering through game genres -->
       <button @click="filteredGames(allGames ,'Shooter')">Shooter</button>
       <button @click="filteredGames(allGames, 'Fighting')">Fighting</button>
       <button @click="filteredGames(allGames, 'MMORPG',)">MMORPG</button>
       <button @click="filteredGames(allGames, 'Card Game')">Card Game</button>
    </div>
        <!-- This component loads the cards for all games -->
        <GameDetails :all-games="allGames" />
</template>

<script>   
import {useStore} from 'vuex';
import {computed} from 'vue';
import GameDetails from './GameDetails.vue'

export default {
    setup() {
        const store = useStore();
        return {
            //retrieves game data
            allGames: computed(() => store.getters.allGames),

            //performs api call and stores data in state
            setGames: store.dispatch('getGames'), 
        }
    }, 
    components: {
        'GameDetails': GameDetails
    }
}

</script>

<style>
    
    ul {
        list-style-type: none;
        margin: 20px;
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