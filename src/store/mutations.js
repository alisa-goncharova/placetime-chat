const mutations = {
    UPDATE_MESSAGES(state, payload) {
        //Ищем включение id,меняем сообщенпие в state
        state.messages = state.messages.map((message, index) => {
            if(index === payload.id) {
                return {...message, text: payload.text}
            }
            return message;
        })
    },
    ADD_MESSAGE(state, payload) {
        state.messages.push(payload);
        console.log(payload);
    }
}

export default mutations;