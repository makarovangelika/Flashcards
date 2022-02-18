import { createSlice } from '@reduxjs/toolkit';

export const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {}
    },
    reducers: {
        addTopic: (state, action) => {
            const { id, name, icon } = action.payload;
            state.topics[id] = {
                id: id,
                name: name,
                icon: icon,
                quizIds: []
            }
        },
        addQuizIdToTheTopic: (state, action) => {
            const { topicId, id } = action.payload;
            state.topics[topicId].quizIds.push(id);
        }
    }
});

export const selectTopics = state => state.topics.topics;
export default topicsSlice.reducer;
export const { addTopic, addQuizIdToTheTopic } = topicsSlice.actions;