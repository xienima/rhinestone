<script>
  import {getForums} from './forumActions'

  export default {
    created () {
      this.getForums()
    },

    vuex: {
      getters: {
        forumStore: state => state.forumStore
      },
      actions: {
        getForums
      }
    }
  }
</script>

<template>
  <div id="forum-wrapper">
    <p>
      <a v-link="{name: 'forum-add'}" class="btn btn-primary">
        <i class="fa fa-plus"></i> Add new Forum
      </a>
    </p>
    <table class="table table-bordered table-striped table-hover">
      <thead>
        <tr>
          <th>Title</th>
          <th>Created by</th>
          <th>Last activity</th>
          <th>Total post</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="forum in forumStore.forums">
          <td><a v-link="{name: 'forum-view', params: {id: forum.id}}">{{ forum.title }}</a></td>
          <td>{{ forum.user.name }}</td>
          <td>{{ forum.updated_at | moment }}</td>
          <td>{{ forum.posts.count ? forum.posts.count : 0 }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
