<template>
  <ContentBase>
    <div class="row justify-content-md-center">
      <div class="col-3">
        <form @submit.prevent="login">
          <div class="mb-3">
            <label for="username" class="form-label">用户名</label>
            <input type="text" class="form-control" id="username" v-model="username">
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">密码</label>
            <input type="password" class="form-control" id="password" v-model="password">
          </div>
          <div class="error-message">{{errormessage}}</div>
          <button type="submit" class="btn btn-primary">登录</button>
        </form>
      </div>
    </div>
  </ContentBase>
</template>

<script>
import ContentBase from '../components/ContentBase';
import { ref } from 'vue';

export default {
  name: 'LoginView',
  components: {
    ContentBase,
  },
  setup() {
    let username = ref('');
    let password = ref('');
    let errormessage = ref('');
    const login = () => {
      console.log(username.value, password.value);
    }

    return {
      username,
      password,
      login,
      errormessage
    }
  }
}
</script>

<style scoped>
button {
  width: 100%;
}

.error-message {
  color: red;
}
</style>