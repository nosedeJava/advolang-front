const updateRecommendation = (recommendation) => {
    return{
        type: "UPDATE",
        payload: recommendation
    }
}

const updateCategory = (category) => {
    return{
        type: "UPDATE_CATEGORY",
        payload: category
    }
}

export default {
    updateRecommendation,
    updateCategory
}
