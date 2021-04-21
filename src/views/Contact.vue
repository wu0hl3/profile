<template>
  <form
    id="Contact"
    class="bg-gray-100 rounded-lg p-10 lg:p-10 lg:px-20 flex flex-wrap mx-auto max-w-prose"
    @submit.prevent=""
  >
    <label for="name" class="my-5 mx-2">Name:</label>
    <input
      type="text"
      name="name"
      id="name"
      placeholder="Your name"
      class="bg-gray-50 rounded shadow p-1 py-2 w-full"
      v-model="name"
    />
    <button
      for="email"
      class="my-5 p-1 rounded active:bg-gray-300 active:text-white"
      title="Click me"
      @click.prevent="emailOrPhone = true"
      :class="{ 'text-gray-500': !emailOrPhone }"
    >
      Email
    </button>
    <span class="my-7 text-gray-500 text-xs mx-2">or</span>
    <button
      for="phone"
      class="my-5 p-1 rounded active:bg-gray-300 active:text-white"
      title="Click me"
      @click.prevent="emailOrPhone = false"
      :class="{ 'text-gray-500': emailOrPhone }"
    >
      Phone</button
    >
    <template v-if="emailOrPhone">
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        class="bg-gray-50 rounded shadow p-1 py-2 w-full"
        v-model="email"
      />
    </template>
    <template v-else>
      <input
        type="tel"
        name="phone"
        id="phone"
        placeholder="Phone"
        class="bg-gray-50 rounded shadow p-1 py-2 w-full"
        v-model="phone"
    /></template>

    <label for="comments" class="my-5 mx-2">Leave a Comment</label>
    <textarea
      name="comments"
      id="comments"
      placeholder="Type your message here..."
      class="bg-gray-50 rounded shadow p-1 resize-none w-full h-36"
      v-model="comments"
    ></textarea>
    <input
      type="submit"
      value="Submit"
      class="bg-gray-500 mt-10 w-full rounded p-1 py-2 text-gray-50 hover:bg-gray-600"
    />
  </form>
</template>

<script>
import { ref, toRefs, reactive } from 'vue';

export default {
  name: 'Contact',
  setup() {
    const emailOrPhone = ref(true);
    const state = reactive({
      name: '',
      email: '',
      phone: '',
      comments: '',
      emailOrPhone: '',
    });
    return { ...toRefs(state), emailOrPhone };
  },
};
</script>

<style>
button:focus {
  outline: none;
}
</style>