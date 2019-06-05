const pharmacie=[
    {
        _id :'00001',
        type :'pharmacie du jour',
        nom : 'Makhlouf Ahmed',
        adresse :'Tunis',
        codepostal :4021,
        telephone :'+(216) 70 25 47 20',
        latitude :9,
        longitude:34
       
    }
]

const reducerlistpharmacie=(state=pharmacie,action)=>{
    switch (action.type){
        case 'ADD_PHARMACIE' : 
        return(
            state.concat(action.newpharmacie)
        )
        case 'SAVE_PHARMACIE' :
            return(
                state=action.pharmacielist
            )
        case 'DELETE_PHARMACIE' :
            return(
                state.filter(el=>el._id!==action._id)
            )
        case 'EDIT_PHARMACIE' :
            return(
                state.map(el => (el._id === action.editpharmacie._id)?el= action.editpharmacie:el)
            )
        default :
        return state
    }
}
export default reducerlistpharmacie;