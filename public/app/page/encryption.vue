<template>
  <div id="app">
      <div class="container wrapper card-shadow">
          <br>
          <textarea class="form-control" draggable="false" autofocus placeholder="input"></textarea>
          <br>
        <ul class="nav nav-tabs" role="tablist">
        <li role="presentation" class="active"><a href="#">MD5</a></li>
        <li role="presentation"><a href="#">SHA1</a></li>
        <button type="button" class="btn btn-success pull-right">加密</button>
      </ul>
      <br>
      <table class="table table-striped">
      <tbody>
          <tr>
            <th class="col-md-2"></th>
            <th class="col-md-8">123</th>
          </tr>
        <tr>
          <td class="col-md-2">32大</td>
          <td class="col-md-8">202cb962ac59075b964b07152d234b70</td>
        </tr>
        <tr>
          <td class="col-md-2">32小</td>
          <td class="col-md-8">202cb962ac59075b964b07152d234b70</td>
        </tr>
        <tr>
          <td class="col-md-2">16大</td>
          <td class="col-md-8">ac59075b964b0715</td>
        </tr>
        <tr>
          <td class="col-md-2">16小</td>
          <td class="col-md-8">ac59075b964b0715</td>
        </tr>
      </tbody>
      </table>
      <br><br><br><br><br><br><br><br>
      </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>

</style>
