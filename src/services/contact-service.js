export default class ContactService {
    constructor() {
        /**
         * TODO put the url in an env file  
         */
        this.apiUrl = 'http://localhost:3500/api'
    }


    getContactList = () => {
        fetch(this.apiUrl + '/contacts', 
        { method: 'GET', accept: 'application/json' }).then((response)=>{
           response.json().then((objet) =>{
            console.log(objet);   
            return objet.register;})
        })

    }
}


