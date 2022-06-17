<template>
  <div class="card">
    <div class="card-body">
      <div v-for="item in post.posts" :key="item.id">
        <!-- 只要保证key唯一也可以写 v-for="(item,index) in post.posts" :key="index"  -->
        <div class="card" id="posts">
          <div class="cardbody">
            {{ item.content }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserProfilePosts",
  props: {
    post: {
      type: Object,
      required: true,
    },
  }
}
</script>

<style scoped>
#posts {
  margin-bottom: 10px;
}
</style>