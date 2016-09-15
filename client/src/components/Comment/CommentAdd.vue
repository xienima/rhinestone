<script>
  import {savePostComment} from './commentActions'

  export default {
    data () {
      return {
        newComment: ''
      }
    },
    vuex: {
      actions: {
        savePostComment
      }
    },
    methods: {
      addNewPostComment () {
        if (this.$commentAdd.valid) {
          const postId = this.$route.params.pid
          const comment = this.newComment
          this.savePostComment(postId, comment)
          this.newComment = ''
        }
      }
    }
  }
</script>

<template>
  <div class="panel panel-default">
    <div class="panel-heading">Add a new Comment</div>
    <div class="panel-body">
      <validator name="commentAdd">
        <form v-on:submit.preven="addNewPostComment()">
          <div class="form-group">
            <textarea
              placeholder="Enter your comment"
              id="comment"
              v-model="newComment"
              class="form-control"
              v-validate:comment="{
                required: {rule: true, message: 'Comment body is required'},
                minlength: {rule: 5, message: 'Comment is too small. Should be at least 5 character long'}
              }"
            ></textarea>
            <span v-if="$commentAdd.comment.required && $commentAdd.comment.touched === true" class="error-message">
              {{ $commentAdd.comment.required }}
            </span>
            <span v-if="$commentAdd.comment.minlength && $commentAdd.comment.touched === true" class="error-message">
              {{ $commentAdd.comment.minlength }}
            </span>
          </div>

          <div class="form-group">
            <button class="btn btn-primary pull-right">
              <i class="fa fa-reply"></i> Post reply
            </button>
          </div>
        </form>
      </validator>
    </div>
  </div>
</template>
