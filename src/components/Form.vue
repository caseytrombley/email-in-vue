<template>
  <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
  >
    <input
        type="hidden"
        name="form-name"
        value="ask-question"
    >
    <two-button-modal
        title="Send a message"
        @cancel="$emit('cancel')"
        @click="handleSubmit"
    >
      <v-text-field
          v-model="form.name"
          label="Your Name"
      />
      <v-text-field
          v-model="form.email"
          label="Email"
      />
      <v-textarea
          v-model="form.message"
          label="Message"
      />
    </two-button-modal>
  </form>
</template>


<script>
import TwoButtonModal from './Modal.vue';
import axios from 'axios';
export default {
  components: {
    TwoButtonModal,
  },
  data: () => ({
    form: {
      name: '',
      email: '',
      message: '',
    },
  }),
  methods: {
    resetForm() {
      this.$set(this.form, 'name', '');
      this.$set(this.form, 'email', '');
      this.$set(this.form, 'message', '');
    },
    encode(data) {
      return Object.keys(data)
          .map(
              (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`,
          )
          .join('&');
    },
    handleSubmit() {
      const axiosConfig = {
        header: { 'Content-Type': 'application/x-www-form-urlencoded' },
      };
      this.form.speaker = this.speaker.name;
      axios.post(
          '/',
          this.encode({
            'form-name': 'contact-speaker',
            ...this.form,
          }),
          axiosConfig,
      );
      //this.resetForm();
    },
  },
};
</script>