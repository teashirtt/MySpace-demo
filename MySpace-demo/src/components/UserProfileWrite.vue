<template>
    <div class="card field">
        <div class="cardbody">
            <div class="mb-3">
                <label for="edit" class="form-label">编辑帖子</label>
                <textarea v-model="content" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                <button @click="submit" type="button" class="btn btn-info btn-sm">发帖</button>
                <button @click="postdelete"  type="button" class="btn btn-danger btn-sm"
                    id="red">删除</button>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'

export default {
    name: "UserProfileWrite",
    setup(props, context) {
        let content = ref('');
        const submit = () => {
            context.emit('ac', content.value);
            console.log(1);
            content.value = "";
        }
        const postdelete = () => {
            context.emit('ac_del');
        }
        return {
            content,
            submit,
            postdelete
        }
    }
}
</script>

<style scoped>
.field {
    margin-top: 20px;
}

button {
    margin-top: 10px;
}

#red {
    margin-left: 10px;
}


</style>