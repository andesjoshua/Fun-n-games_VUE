<template>
    <div>
       <button @click="game = randomize(allGames)">
           Find Game!
       </button>
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
    props: ["showModal", "allGames"],
     setup() {
        let randomize = (allGames) => {
            let randomGameIdx = Math.floor(Math.random() * allGames.length - 1)
            return allGames[randomGameIdx]
        }
        return { 
            randomize,
        }
    },
    data() {
       return {
            game: []
       }
    }
}
   

</script>
