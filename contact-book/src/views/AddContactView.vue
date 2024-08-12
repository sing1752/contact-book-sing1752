<template>
    <div class="container mx-auto p-4">
      <Header />
      <h2 class="text-2xl font-bold mb-4">Add New Contact</h2>
      <ContactForm
        :contact="contact"
        submitButtonText="Add Contact"
        @submit="submitForm"
      />
    </div>
  </template>
  
  <script>
  import Header from '../components/header.vue';
  import ContactForm from '../components/ContactForm.vue';
  import { createContact } from '../models/contact';
  import { addContact } from '../utils/localStorageHelper';
  
  export default {
    components: {
      Header,
      ContactForm,
    },
    data() {
      return {
        contact: {
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          address: '',
        },
      };
    },
    methods: {
      submitForm(contact) {
        const newContact = createContact(contact);
        addContact(newContact);
        this.$router.push({ name: 'ContactDetails', params: { id: newContact.id } });
      },
    },
  };
  </script>
  