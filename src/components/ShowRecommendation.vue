<template>
    <div>
        <h2>Most Read Article</h2>
        <div class="card-recommendation" v-for="blog in blogs" :key="blog.id">
            <h3>{{ blog.title }}</h3>
            <p>{{ blog.body }}</p>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            blogs: []
        }
    },
    created() {
        this.$http.get('https://jsonplaceholder.typicode.com/posts')
                .then(res => {
                    // console.log(res);
                    this.blogs = res.body;
                });
    }
}
</script>
<style scoped>
.card-recommendation {
    border: 1px solid black;
    max-width: 300px;
    text-align: center;
}    
</style>