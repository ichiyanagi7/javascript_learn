// ""と""2回使うとエラー起こす。""と''を使用する
$("#tab-contents .tab[id != 'tab']").hide();

$("#tab-menu a").on('click',function(event){
  $("#tab-contents .tab").hide();
  // 一度全部非表示
  $("#tab-menu .active").removeClass("active");
  // activeクラスを除去
  $(this).addClass("active");
  // クリックされた要素にactiveクラスを付与
  $($(this).attr("href")).show();
  // .attr() HTML要素の属性を取得できる。ここではhref属性を取得させている
  event.preventDefault();
});