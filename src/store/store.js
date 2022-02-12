import {createStore} from 'vuex'
import axios from 'axios'


let state = {
    games: []
}

const getters = {
   allGames: state => state.games
}

const actions = {
    getGames({commit}) {
        axios.get('http://localhost:3000/games')
        .then(resp => { commit('setGames', resp.data) })
    },
    
    filteredGames({commit}) {
        commit('filterGames')
    }
}

const mutations = {
    setGames(state, games) {
        state.games = games
    },

    filterGames(state, genre) {
        state.filter(item => item.genre === genre)
    }
}

export default createStore({
    state,
    getters,
    actions,
    mutations
})