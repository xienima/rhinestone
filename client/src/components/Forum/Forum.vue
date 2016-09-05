<script>
  export default {

  }
</script>

<template>
  <div id="forum-wrapper">
    <p><a v-link="{name: 'forum-add'}" class="btn btn-primary">Add new Forum</a></p>
    <table class="table table-bordered table-striped table-hover">
      <thead>
        <tr>
          <th>Title</th>
          <th>Created by</th>
          <th>Time ago</th>
          <th>Total post</th>
        </tr>
      </thead>
    </table>
  </div>
</template>
