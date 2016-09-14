<script>
  import {saveForumPost} from './forumActions'

  export default {
    data () {
      return {
        newPost: {
          title: '',
          body: '',
          forumId: this.$route.params.fid
        },
        showErrorMessage: false
      }
    },
    methods: {
      savePost () {
        if (this.$addForumPost.valid) {
          this.saveForumPost(this.newPost)
        } else {
          console.log('Validation errors', this.$addForumPost)
          this.showErrorMessage = true
        }
      }
    },
    vuex: {
      actions: {
        saveForumPost
      }
    }
  }
</script>

<template>
  <!-- <pre>{{ $data | json }}</pre> -->
  <div class="row">
    <div class="col-md-12">
      <div class="alert alert-info alert-dismissible" v-show="showErrorMessage">
        <button class="close"><span v-on:click="this.showErrorMessage=false">x</span></button>
        <strong>Oops! couldn't save the post.</strong> Looks like you made a mistake in the form.
        Fill it up correctly and try again. Best of luck.
      </div>
      <div class="panel panel-default">
        <div class="panel-heading">Add new Post</div>

        <div class="panel-body">
          <validator name="addForumPost">
            <form v-on:submit.prevent="savePost()">
              <div class="form-group">
                <label>Post title</label>
                <input type="text"
                  id="title"
                  v-model="newPost.title"
                  v-validate:title="{required: {rule: true, message: 'Title is required for a Post'}}"
                  class="form-control"
                  placeholder="Enter post title" >
                  <span v-if="$addForumPost.title.required && $addForumPost.title.touched === true" class="error-message">
                    {{ $addForumPost.title.required }}
                  </span>
              </div>

              <div class="form-group">
                <label>Post content</label>
                <textarea class="form-control"
                  id="body"
                  v-model="newPost.body"
                  v-validate:body="{
                    required: {rule: true, message: 'Body content is required for a Post'},
                    minlength: {rule: 10, message: 'The body content should be at least 10 characters long'}
                  }"
                  ></textarea>
                  <span v-if="$addForumPost.body.required && $addForumPost.body.touched === true" class="error-message">
                    {{ $addForumPost.body.required }}
                  </span>
                  <span v-if="$addForumPost.body.minlength && $addForumPost.body.touched === true" class="error-message">
                    {{ $addForumPost.body.minlength }}
                  </span>
              </div>
            </form>
          </validator>
        </div>

        <div class="panel-footer">
          <a v-link="{name: 'forum-view', params: {id: $route.params.fid}}" class="btn btn-sm btn-warning">
            <i class="fa fa-chevron-left"></i> Back
          </a>
          <button class="btn btn-sm btn-success" v-on:click="savePost()">
            <i class="fa fa-save"></i> Save
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
