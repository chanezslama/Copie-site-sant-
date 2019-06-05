const stateinitial=[
    {
        _id :'001',
        nom :'slama',
        prenom : 'chanez',
        profession :'ingénieur',
        date : '22/05/1995',
        adresse :'sousse',
        telephone :'50061020',
        email : 'chanez@gmail.com',
        password :'admin',

    }
]

const reducerlist=(state=stateinitial,action)=>{
    switch (action.type){
        case 'ADD_CONTACT' : 
        return(
            state.concat(action.newcontact)
        )
        case 'SAVE_CONTACT' :
            return(
                state=action.contacts
            )
        case 'DELETE_CONTACT' :
            return(
                state.filter(el=>el._id!==action._id)
            )
        case 'EDIT_CONTACT' :
            return(
                state.map(el => (el._id === action.editcontact._id)?el= action.editcontact:el)
            )
        default :
        return state
    }
}
export default reducerlist ;