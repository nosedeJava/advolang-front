const initialState = {
    resourceType:'',
    resource:'',
    thumbnail:''
}

const newRecommendation = (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE":
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

export default newRecommendation;
