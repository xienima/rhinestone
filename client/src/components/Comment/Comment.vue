<script>
  export default {
    props: ['comment']
  }
</script>

<template>
  <div class="panel panel-default">
    <div class="panel-heading comment-title">
      <span>{{ comment.created_at | moment }}</span>
      <span class="pull-right">{{ comment.user.name }}</span>
    </div>
    <div class="panel-body">{{ comment.body }}</div>
  </div>
</template>
