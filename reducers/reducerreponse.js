const reponses=[
    {
        _id : '0000001',
        question1: 'Ventre et hanches',
        question2 :"Un appétit d'ogre et ma gourmandise",
        question3 :"Je grignote très souvent",
        question4 :"Oui, l'arrêt ou la reprise du tabac",
        question5 :"Soutien psychologique et méthode innovante",
        question6 :"Retrouver mes capacités physiques",
        question7 :"Suivre une phase d'attaque courte mais contraignante",
        question8 :"Entre 5 et 15 minutes",
        question9 :"Une célébrité dans le domaine de la nutrition",

       
    }
]

const reducerreponse=(state=reponses,action)=>{
    switch (action.type){
        case 'ADD_REPONSE' : 
        return(
            state.concat(action.newREPONSE)
        )
        case 'SAVE_REPONSE' :
            return(
                state=action.REPONSElist
            )
        case 'DELETE_REPONSE' :
            return(
                state.filter(el=>el._id!==action._id)
            )
        case 'EDIT_REPONSE' :
            return(
                state.map(el => (el._id === action.editREPONSE._id)?el= action.editREPONSE:el)
            )
        default :
        return state
    }
}
export default reducerreponse;