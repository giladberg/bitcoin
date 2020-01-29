import contactService from "../services/ContactService";
import { observable, decorate, action, runInAction } from 'mobx'

class ContactStore {
    @observable contacts = [];
    @observable filterBy  ={};
    @observable currentContact=null
    loadContacts() {
        return contactService.getContacts(this.filterBy).then((contacts) => {
            runInAction(() => {
                this.contacts = contacts
                
            })
        })
    }

    getContactById(contactId){
        return contactService.getContactById(contactId).then((contact) => {
            runInAction(() => {
                this.currentContact = contact    
            })
        })
    }
    @action
    setFilter(filterBy){
        this.filterBy = filterBy; 
        this.loadContacts();
    }

    async editContact(contact) {
         await contactService.saveContact(contact)
        runInAction(() => {
            this.loadContacts()
        })
    }
}
let store = new ContactStore(); 
export default store