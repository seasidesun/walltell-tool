<template>
  <div id="app">
      <div class="container wrapper card-shadow">
          <br>
          <textarea class="form-control" draggable="false" autofocus placeholder="input" v-model="inputStr"></textarea>
          <br>
        <ul class="nav nav-tabs" role="tablist">
            <li v-for="item in encryptType" :class="{active: nowEncrypt==item.id}" @click="nowEncrypt=item.id"><a href="#" >{{item.name}}</a></li>
        <button type="button" class="btn btn-success pull-right" @click="encrypt">加密</button>
      </ul>
      <br>
      <table class="table table-striped">
      <tbody>
          <tr>
            <th class="col-md-2"></th>
            <th class="col-md-8">{{inputStr}}</th>
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
import MD5 from '../../lib/md5.min.js'

export default {
    name: 'app',
    data () {
        return {
            encryptType: [
                {name: 'MD5', id: '1'},
                {name: 'SHA1', id: '2'}
            ],
            nowEncrypt: 1,
            inputStr: '123'
        }
    },
    methods: {
        encrypt: () => {
            console.log(MD5(this.inputStr));
        }
    }
}
</script>

<style>

</style>
