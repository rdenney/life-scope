<template>
  <div class="login-container">
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required placeholder="Enter your email" />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input
          type="password"
          id="password"
          v-model="password"
          required
          placeholder="Enter your password"
        />
      </div>
      <button type="submit" :disabled="isFormInvalid">Log In</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'LogIn',
  setup() {
    const email = ref('')
    const password = ref('')

    // Basic form validation
    //const isFormInvalid = computed(() => email.value.trim() === '' || password.value.trim() === '')

    const handleLogin = () => {
      // Here you would typically send the credentials to your backend for validation
      // For demonstration, we'll just log to the console
      console.log(`Logging in with email: ${email.value} and password: ${password.value}`)

      // Reset form fields
      email.value = ''
      password.value = ''
    }

    return {
      email,
      password,
      handleLogin
    }
  }
}
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
}

button:disabled {
  background-color: #ccc;
}
</style>
