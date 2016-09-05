<script>
  export default {
    data () {
      return {
        newForum: {
          title: '',
          body: ''
        }
      }
    },

    methods: {
      handleAddForumSubmit () {
        console.log(this.newForum)
      }
    }
  }
</script>

<template>
  <div id="forum-add-wrapper">
    <pre>{{ $data | json }}</pre>
    <validator name="addForum">
      <form v-on:submit.prevent="handleAddForumSubmit()">
        <div class="form-group">
          <label>Forum title</label>
          <input type="text"
            class="form-control"
            id="title"
            v-model="newForum.title"
            placeholder="Enter forum title">
        </div>

        <div class="form-group">
          <label>Forum body</label>
          <textarea
            id="body"
            class="form-control"
            v-model="newForum.body"
            placeholder="Enter forum post"></textarea>
        </div>

        <div class="form-group">
          <a v-link="{name: 'forum'}" class="btn btn-warning">Cancel</a>
          <button class="btn btn-success">Add new Forum</button>
        </div>
      </form>
    </validator>
  </div>
</template>
