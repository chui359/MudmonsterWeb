<template>
  <div class="home">
    <BlogPost :post="welcomeScreen" />
    <BlogPost :post="post" v-for="(post, index) in sampleBlogPost" :key="index" />
    <div class="blog-card-wrap">
      <div class="container">
        <h3>View More Rection Blogs</h3>
        <div class="blog-cards">
          <BlogCards v-for="(post, index) in sampleBlogCards" :key="index"/>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost.vue"
import BlogCards from "../components/BlogCard.vue"
export default {
  name: "Home",
  components: { BlogPost, BlogCards },
  data(){
    return{
      welcomeScreen: {
        title: "Welcome!",
        blogPost: "My blog articles",
        welcomeScreen: true,
        photo: "coding",
      },
      sampleBlogPost: [
        {
          title: "This is a Filler Title!",
          blogHTML: "This is a filler blog post title!",
          blogCoverPhoto: "beautiful-stories",
        },
        {
          title: "This is a Filler Title2!",
          blogHTML: "This is a filler blog post title!",
          blogCoverPhoto: "designed-for-everyone",
        },
      ],
      sampleBlogCards: [
        { blogTitle: "Blog Card #1", blogCoverPhoto:"stock-1", blogDate: "May 1, 2021"},
        { blogTitle: "Blog Card #1", blogCoverPhoto:"stock-2", blogDate: "May 1, 2021"},
        { blogTitle: "Blog Card #1", blogCoverPhoto:"stock-3", blogDate: "May 1, 2021"},
        { blogTitle: "Blog Card #1", blogCoverPhoto:"stock-4", blogDate: "May 1, 2021"},
      ],
    };
  },
};
</script>

<style lang="scss" scoped>

.blog-card-warp{
  h3{
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 32px;
  }
}

</style>
