$(document).on('turbolinks:load', function() {
  //「カテゴリーから探す」にマウスが乗るとイベント発火
  $('.num1').mouseover(function(){  
  //カテゴリーのバー表示
    $('.menuCategoryBer').show();
  });
  //カテゴリーバーにマウスが乗るとカテゴリーバー表示
  $('.menuCategoryBer').mouseover(function(){
    $('.menuCategoryBer').show();
  });
  //カテゴリーバーからマウスが離れるとカテゴリーバー非表示
  $('.menuCategoryBer').mouseout(function(){
    $('.menuCategoryBer').hide();
  });
  //「カテゴリーから探す」からマウスが離れるとカテゴリーバー非表示
  $('.num1').mouseout(function(){  
    $('.menuCategoryBer').hide();
  });
});

$(document).on('turbolinks:load', function() {
  //「カテゴリーから探す」にマウスが乗るとイベント発火
  $('.num2').mouseover(function(){  
  //カテゴリーのバー表示
    $('.menuBroundBer').show();
  });
  //カテゴリーバーにマウスが乗るとカテゴリーバー表示
  $('.menuBroundBer').mouseover(function(){
    $('.menuBroundBer').show();
  });
  //カテゴリーバーからマウスが離れるとカテゴリーバー非表示
  $('.menuBroundBer').mouseout(function(){
    $('.menuBroundBer').hide();
  });
  //「カテゴリーから探す」からマウスが離れるとカテゴリーバー非表示
  $('.num2').mouseout(function(){  
    $('.menuBroundBer').hide();
  });
});
