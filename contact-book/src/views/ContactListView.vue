<template>
    <div class="container mx-auto p-4">
      <Header />
      <input
        v-model="searchQuery"
        placeholder="Search Contacts..."
        class="w-full p-2 mb-4 border rounded"
      />
      <ul class="space-y-2">
        <li v-for="contact in filteredContacts" :key="contact.id">
          <router-link
            :to="{ name: 'ContactDetails', params: { id: contact.id } }"
            class="text-blue-600 hover:underline"
          >
            {{ contact.lastName }}, {{ contact.firstName }}
          </router-link>
        </li>
      </ul>
      <router-link
        to="/add"
        class="inline-block mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Add New Contact
      </router-link>
    </div>
  </template>
  
  <script>
  import Header from '../components/header.vue';
  import { getContacts } from '../utils/localStorageHelper';
  
  export default {
    components: {
      Header,
    },
    data() {
      return {
        searchQuery: '',
        contacts: getContacts(),
      };
    },
    computed: {
      filteredContacts() {
        return this.contacts
          .filter(contact =>
            `${contact.firstName} ${contact.lastName}`
              .toLowerCase()
              .includes(this.searchQuery.toLowerCase())
          )
          .sort((a, b) => a.lastName.localeCompare(b.lastName));
      },
    },
  };
  </script>
  