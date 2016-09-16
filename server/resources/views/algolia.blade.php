<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title> Algolia with Vue JS
    </title>
    <link rel="stylesheet" href="app.css">
    <link href='https://fonts.googleapis.com/css?family=Roboto:400,300,500,700' rel='stylesheet' type='text/css'>
</head>

<body>
    <div class="line">
        <h2>Lightning fast Search APIs </h2>
        <h4> Algolia & VueJs</h4>
        <input type="text" class="button" placeholder="Search users" v-model="query" v-on="keyup:search|key'enter'">
        <div class="results">
            <article v-repeat="user:users">
                <pre> @{{{user|json}}}</pre>
            </article>
        </div>
    </div>
<script src = "http://cdn.jsdelivr.net/algoliasearch/3/algoliasearch.min.js" > </script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/0.12.1/vue.js "></script>

<script>
    new Vue({
        el: 'body',

        data: { query: '', users: [] },

        ready: function() {
            // Update your APP ID and APP SEARCH KEY HERE
            this.client = algoliasearch({{ env('ALGOLIA_APP_ID') }}, {{ env('ALGOLIA_API_KEY') }});
            this.index = this.client.initIndex('CANDELETE');
        },

        methods: {
            search: function() {
                this.index.search(this.query, function(error, results) {
                    this.users = results.hits;
                    console.log(this.users);
                }.bind(this));
            }
        }
    });
</script>

</body>
</html>
