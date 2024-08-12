export const LOCAL_STORAGE_KEY = "contacts";

export function getContacts() {
    const contacts = localStorage.getItem(LOCAL_STORAGE_KEY);
    return contacts ? JSON.parse(contacts) : [];
}

export function saveContacts(contacts) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
}

export function addContact(contact) {
    const contacts = getContacts();
    contacts.push(contact);
    saveContacts(contacts);
}

export function updateContact(updatedContact) {
    const contacts = getContacts().map(contact =>
        contact.id === updatedContact.id ? updatedContact : contact
    );
    saveContacts(contacts);
}

export function deleteContact(contactId) {
    const contacts = getContacts().filter(contact => contact.id !== contactId);
    saveContacts(contacts);
}
