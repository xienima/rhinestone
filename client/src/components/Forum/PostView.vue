<script>
import {getForumPostDetails} from './forumActions'
import Comment from './../Comment/Comment'

export default {
  components: {
    Comment
  },
  created () {
    this.getForumPostDetails(this.$route.params.pid)
  },
  vuex: {
    getters: {
      forumStore: state => state.forumStore
    },
    actions: {
      getForumPostDetails
    }
  }
}
</script>

<template>
  <div class="row">
    <div class="col-md-12">
      <p>
        <a v-link="{name: 'forum-view', params: {id: forumStore.viewPost.forum_id}}" class="btn btn-warning">
        <i class="fa fa-chevron-left"></i> Back to Forum
      </a>
      </p>
    </div>
  </div>
  <div class="row">

    <!-- Display the main post content -->
    <div class="col-md-12">
      <div class="panel panel-default">
        <div class="panel-heading main-post">
          <strong>{{ forumStore.viewPost.title }}</strong>
        </div>
        <div class="panel-body">
          {{ forumStore.viewPost.body }}
        </div>
      </div>
    </div>
    <!-- End Display the main post content -->

    <!-- Display comments -->
    <div class="col-sm-10 col-sm-push-1">
      <comment :comment="comment" v-for="comment in forumStore.viewPost.comments"></comment>
    </div>
    <!-- End Display comments -->

    <div class="row">
      <div class="col-sm-10 col-sm-push-1">

      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .panel-default > .panel-heading.main-post {
    background-color: #158cba;
    color: white;
  }
  .panel-heading.comment-title {
    font-size: 1.1em;
  }
</style>
