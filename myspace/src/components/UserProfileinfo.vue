<template>
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-3">
                    <img width="50" src="https://img2.baidu.com/it/u=3990732507,3148015412&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
                        alt="">
                </div>
                <div class="col-9">
                    <div class="name">{{ us.username }}</div>
                    <div class="fans">fans:{{ us.fans_cnt }}</div>
                    <button @click="foll" v-if="!us.is_followed" type="button"
                        class="btn btn-primary btn-sm "> +关注</button>
                    <button @click="unfoll" v-if="us.is_followed" type="button"
                        class="btn btn-primary btn-sm ">取消关注</button>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

export default {
    name: "UserProfileinfo",
    props: {
        us: {
            type: Object,
            required: true,
        },
    },
    setup(props,context) {
        const foll = () => {
            context.emit('fl');
        };
        const unfoll = () => {
            context.emit('ufl');
        };

        return {
            foll,
            unfoll,
        }
    }
}
</script>

<style scoped>
img {
    border-radius: 50%;
}

.name {
    font-weight: bold;
}

.fans {
    font-size: 12px;
    color: rgba(0, 0, 0, 0.503);
}

button {
    padding: 2px, 4px;
    font-size: 12px;
}
</style>