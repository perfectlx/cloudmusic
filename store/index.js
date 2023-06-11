import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state : {
        playListIds : [],
		nextId : ''
    },
    mutations : {
        INIT_PLAYLISTIDS(state,payload){
            state.playListIds = payload;
        },
		NEXT_ID(state,payload){
			for(var i=0;i<state.playListIds.length;i++){
				if( state.playListIds[i].id == payload ){
					state.nextId = state.playListIds[i+1].id;
				}
			}
		}
    }
});