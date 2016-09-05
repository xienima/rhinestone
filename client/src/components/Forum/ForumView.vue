<script>
  import {getForumById} from './forumActions'

  export default {
    created () {
      this.getForumById(this.$route.params.id)
    },

    vuex: {
      getters: {
        forumStore: state => state.forumStore
      },
      actions: {
        getForumById
      }
    }
  }
</script>

<template>
  <div class="row">
    <div class="col-md-12">
      <p>
        <a v-link="{name: 'forum-list'}" class="btn btn-warning">
          <i class="fa fa-chevron-left"></i> Back to list
        </a>
      </p>
    </div>
  </div>
  <div class="row">
    <div class="col-md-12">
      <div class="panel panel-default">
        <div class="panel-heading"><strong>Forum:</strong> <span class="name">{{ forumStore.viewForum.title }}</span></div>

        <div class="panel-body">
          {{ forumStore.viewForum.body }}
        </div>

        <div class="panel-footer">
          <span class="created-by"><i class="fa fa-user"></i> {{ forumStore.viewForum.user.name }}</span>
          <span class="created-time"><i class="fa fa-clock-o"></i> {{ forumStore.viewForum.created_at }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .panel-footer {
    span {
      margin-right: 1em;
    }
  }
</style>
