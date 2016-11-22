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
              <th class="col-md-2">源</th>
              <th class="col-md-8">{{inputStr}}</th>
          </tr>
          <tr v-for="item in result">
              <td class="col-md-2">{{item.name}}</td>
              <td class="col-md-8">{{item.value}}</td>
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
                {name: 'MD5', id: 1}
                // {name: 'SHA1', id: 2}
            ],
            nowEncrypt: 1,
            inputStr: '123',
            result: []
        }
    },
    methods: {
        encrypt: function () {
            if (!this.inputStr) return;

            if (this.nowEncrypt === 1) {
                var value = MD5(this.inputStr);
                this.handlerMD5(value);
            }
        },
        handlerMD5: function (value) {
            if (!value) return;

            this.result = [
                {name: '32小写', value: value},
                {name: '32大写', value: value.toUpperCase()},
                {name: '16小写', value: value.substr(8, 16)},
                {name: '16大写', value: value.substr(8, 16).toUpperCase()}
            ];
        }
    }
}
</script>

<style>

</style>
