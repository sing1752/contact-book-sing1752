<template>
  <form @submit.prevent="handleSubmit" class="space-y-4">
    <input
      v-model="contact.firstName"
      placeholder="First Name"
      class="w-full p-2 border rounded"
      required
    />
    <input
      v-model="contact.lastName"
      placeholder="Last Name"
      class="w-full p-2 border rounded"
      required
    />
    <input
      v-model="contact.email"
      placeholder="Email"
      class="w-full p-2 border rounded"
      required
    />
    <input
      v-model="contact.phone"
      placeholder="Phone"
      class="w-full p-2 border rounded"
    />
    <input
      v-model="contact.address"
      placeholder="Address"
      class="w-full p-2 border rounded"
    />
    <button
      type="submit"
      class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
    >
      {{ submitButtonText }}
    </button>
  </form>
</template>

<script>
export default {
  props: {
    contact: {
      type: Object,
      required: true,
    },
    submitButtonText: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleSubmit() {
      this.$emit('submit', { ...this.contact });
    },
  },
};
</script>
