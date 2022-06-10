<template>
  <ContentBase>
    <div class="row">
      <div class="col-3">
        <UserProfileinfo @fl="follo" @ufl="unfollo" :us="user" />
        <UserProfileWrite @ac="accept_submit" @ac_del="accept_delete"/>
      </div>
      <div class="col-9">
        <UserProfilePosts :post="po" />
      </div>
    </div>

  </ContentBase>
</template>

<script>
import ContentBase from '../components/ContentBase';
import UserProfileinfo from '../components/UserProfileinfo';
import UserProfilePosts from '../components/UserProfilePosts';
import UserProfileWrite from '../components/UserProfileWrite';
import { reactive } from 'vue';
export default {
  name: 'UserProfile',
  components: {
    ContentBase,
    UserProfileinfo,
    UserProfilePosts,
    UserProfileWrite,
  },
  setup() {
    const user = reactive({
      id: 1,
      username: "bessie",
      lastname: "hardy",
      fans_cnt: 323,
      is_followed: false,
    });

    const po = reactive({
      cnt: 3,
      posts: [
        {
          id: 1,
          userid: 1,
          content: "这是第一帖"
        },
        {
          id: 1,
          userid: 1,
          content: "第二天天气不错"
        },
        {
          id: 1,
          userid: 1,
          content: "第三天很困"
        }
      ]
    });

    const follo = () => {
      if (user.is_followed) return;
      user.is_followed = true;
      user.fans_cnt++;
    }

    const unfollo = () => {
      if (!user.is_followed) return;
      user.is_followed = false;
      user.fans_cnt--;
    }

    const accept_submit = (content) => {
      po.cnt++;
      po.posts.unshift({
        id: po.cnt,
        userid: 1,
        content: content,
      })
    }

    const accept_delete = () => {
      po.cnt--;
      po.posts.splice(0,1);
    }

    return {
      user,
      follo,
      unfollo,
      po,
      accept_submit,
      accept_delete
    }
  }
}
</script>

<style scoped>
</style>