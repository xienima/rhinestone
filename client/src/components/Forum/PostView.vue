<script>
import {getForumPostDetails} from './forumActions'

export default {
  created () {
    console.log('Pull post data', this.$route.params.pid)
    this.getForumPostDetails()
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
      <div class="panel panel-default">
        <div class="panel-heading main-post">
          <strong>{{ forumStore.viewPost.title }}</strong>
        </div>
        <div class="panel-body">
          {{ forumStore.viewPost.body }}
        </div>
      </div>
    </div>
    <div class="col-md-12">
      <div class="panel panel-default" v-for="comment in forumStore.viewPost.comments">
        <div class="panel-heading comment-title">
          <span>{{ comment.created_at | moment }}</span>
          <span class="pull-right">{{ comment.user.name }}</span>
        </div>
        <div class="panel-body">
          {{ comment.body }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .panel-default > .panel-heading.main-post {
    background-color: #bfbfbf;
  }
  .panel-heading.comment-title {
    font-size: 1.1em;
  }
</style>
