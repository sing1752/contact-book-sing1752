<template>
    <div class="container mx-auto p-4">
      <Header />
      <h2 class="text-2xl font-bold mb-4">Edit Contact</h2>
      <ContactForm
        :contact="contact"
        submitButtonText="Save Changes"
        @submit="submitForm"
      />
    </div>
  </template>
  
  <script>
  import Header from '../components/header.vue';
  import ContactForm from '../components/ContactForm.vue';
  import { getContacts, updateContact } from '../utils/localStorageHelper';
  
  export default {
    components: {
      Header,
      ContactForm,
    },
    data() {
      return {
        contact: {
          id: '',
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          address: '',
        },
      };
    },
    created() {
      const contacts = getContacts();
      const contact = contacts.find(contact => contact.id === this.$route.params.id);
      if (contact) {
        this.contact = { ...contact };
      }
    },
    methods: {
      submitForm(updatedContact) {
        updateContact(updatedContact);
        this.$router.push({ name: 'ContactDetails', params: { id: this.contact.id } });
      },
    },
  };
  </script>
  