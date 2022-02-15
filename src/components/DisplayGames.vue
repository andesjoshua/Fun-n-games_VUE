<template>
    <!-- Search bar functionality pending on Vuex -->
    <input class='search-bar' placeholder='Search games...'/>

    <h2>Find Your Free Game!</h2>    

   

    <!-- This button opens a modal window where you can find a random game from the list-->
    <button @click="showModal = true" id='random-bttn'>Find Random Game</button>
    <transition appear>
        <div class='modal-overlay' v-if='showModal' @click='showModal = false'></div>
    </transition>
    <transition name='slide' appear>
        <div class='modal' v-if='showModal'>
            <h1>Random Game Generator</h1>

             <!-- This component generates a random game from the allGames list -->
            <RandomGame :all-games="allGames" :show-modal="showModal"/>     

            <button @click='showModal = false'>
                Close
                
            </button>
        </div>
    </transition>

    <!-- This component loads the cards for all games -->
    <GameDetails :all-games="allGames"/>
</template>

<script>   
import {useStore} from 'vuex';
import {computed} from 'vue';
import GameDetails from './GameDetails.vue'
import RandomGame from './RandomGame.vue'

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
        'GameDetails': GameDetails,
        'RandomGame': RandomGame,
    },
    data() {
            return {
                showModal: false
            }
        }
}
</script>

<style>
    
    ul {
        list-style-type: none;
        margin: 20px;
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
    .modal {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 99;
        width: 100%;
        max-width: 400px;
        background-color: white;
        border-radius: 16px;
    }
     #random-bttn {
         background-color: blue
     }

     .modal-overlay {
         position: absolute;
         top: 0;
         left: 0;
         bottom: 0;
         right: 0;
         z-index: 98;
         background-color: rgba(0, 0, 0, 0.3)
     }
   
</style>