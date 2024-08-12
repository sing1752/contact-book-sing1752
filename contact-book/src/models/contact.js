export function createContact({ firstName, lastName, email, phone, address }) {
    return {
        id: Date.now().toString(),
        firstName,
        lastName,
        email,
        phone,
        address
    };
}
