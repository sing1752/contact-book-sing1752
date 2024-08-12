<template>
    <div class="container mx-auto p-4">
      <Header />
      <div class="bg-white shadow p-4 rounded">
        <h2 class="text-2xl font-bold mb-2">{{ contact.lastName }}, {{ contact.firstName }}</h2>
        <p class="mb-2"><strong>Email:</strong> {{ contact.email }}</p>
        <p class="mb-2"><strong>Phone:</strong> {{ contact.phone }}</p>
        <p class="mb-4"><strong>Address:</strong> {{ contact.address }}</p>
        <router-link
          :to="{ name: 'EditContact', params: { id: contact.id } }"
          class="inline-block bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600"
        >
          Edit
        </router-link>
        <button
          @click="deleteContact"
          class="inline-block bg-red-500 text-white py-2 px-4 ml-2 rounded hover:bg-red-600"
        >
          Delete
        </button>
        <router-link
          to="/"
          class="inline-block mt-4 text-blue-600 hover:underline block"
        >
          Back to Contacts
        </router-link>
      </div>
    </div>
  </template>
  
  <script>
  import Header from '../components/header.vue';
  import { getContacts, deleteContact as removeContact } from '../utils/localStorageHelper';
  
  export default {
    components: {
      Header,
    },
    data() {
      return {
        contact: {},
      };
    },
    created() {
      const contacts = getContacts();
      this.contact = contacts.find(contact => contact.id === this.$route.params.id);
    },
    methods: {
      deleteContact() {
        removeContact(this.contact.id);
        this.$router.push('/');
      },
    },
  };
  </script>
  