const stateIMC=[
    {
        _id :'000001',
        nom :'chanez',
        size : 1.65,
        weight : 57,
        desiredweight : 60,

    }
]

const reducerIMC=(state=stateIMC,action)=>{
    switch (action.type){
        case 'ADD_IMC' : 
        return(
            state.concat(action.newIMC)
        )
        case 'SAVE_IMC' :
            return(
                state=action.IMClist
            )
        case 'DELETE_IMC' :
            return(
                state.filter(el=>el._id!==action._id)
            )
        case 'EDIT_IMC' :
            return(
                state.map(el => (el._id === action.editIMC._id)?el= action.editIMC:el)
            )
        default :
        return state
    }
}
export default reducerIMC ;