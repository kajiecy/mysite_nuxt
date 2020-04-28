import Vue from 'vue'
import store from '@/store'

import GithubApi from '@/util/GithubApi.ts'; // @ is an alias to /src
Vue.prototype.$githubApi = new GithubApi({
  clientId:'bb75d376202e7c49a8b6',
  clientSecret:'b2cc94c423c87d09e'+'84119876e4abea998bfee07',
  owner:'kajiecy',
  repo:'kajiecy.github.io',
});
Vue.mixin({
  methods: {
    formatDate(val, n) {
      let padDate = function (va) {
        va = va < 10 ? "0" + va : va;
        return va;
      };
      let value = new Date(val),
        year = value.getFullYear(),
        month = padDate(value.getMonth() + 1),
        day = padDate(value.getDate()),
        hour = padDate(value.getHours()),
        minutes = padDate(value.getMinutes()),
        seconds = padDate(value.getSeconds());
      if (n===1) return year + "-" + month + "-" + day + " " + hour + ":" + minutes;
      else return (year + "年" + month + "月" + day + "日");
    }
  }
});

