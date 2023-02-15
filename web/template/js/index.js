import "../css/index.scss";
import Loading from '../../common/utils/loading/index';
{{#analytics}}
import Logger from '../../common/utils/logger/index';
{{/analytics}}
let loading = new Loading({
  msg: {
    title: { con: 'Loading...' },
    txt: { con: '' }
  }
});
loading.show();
document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    loading.hide();
  }
};