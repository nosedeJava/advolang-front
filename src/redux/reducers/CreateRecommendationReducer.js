const initialState = {
    resourceType:'',
    resource:'',
    thumbnail:'',
    categories: []
}

const newRecommendation = (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE":
            return {
                ...state,
                ...action.payload
            }
        case "UPDATE_CATEGORY":
            return {
                ...state,
                categories: state.categories.concat(action.payload)
            }
        default:
            return state
    }
}

export default newRecommendation;
