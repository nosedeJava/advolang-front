const updateRecommendation = (recommendation) => {
    return{
        type: "UPDATE",
        payload: recommendation
    }
}

export default {
    updateRecommendation
}
