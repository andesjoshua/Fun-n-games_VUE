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
    }
}

const mutations = {
    setGames(state, games) {
        state.games = games
    }
}

export default createStore({
    state,
    getters,
    actions,
    mutations
})