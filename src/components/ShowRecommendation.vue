<template>
    <div class="container">
        <div class="card-recommendation" v-for="blog in blogs" :key="blog.id">
            <h3>{{ blog.title }}</h3>
            <p>{{ blog.body | snippets }}</p>
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
    filters: {
        snippets(value) {
            return value.toString().slice(0,100) + "... (click to read more)";
        }
    },
    created() {
        this.$http.get('https://jsonplaceholder.typicode.com/posts')
                .then(res => {
                    // console.log(res);
                    this.blogs = res.body;
                    this.blogs = this.blogs.slice(0,4);
                });
    }
}
</script>
<style scoped>
.container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
}

.card-recommendation {
    border: 1px solid black;
    max-width: 300px;
    max-height: 350px;
    text-align: center;
    margin: 0 10px;
    cursor: pointer;
}

.card-recommendation:hover {
    transform: scale(1.1);
}
</style>