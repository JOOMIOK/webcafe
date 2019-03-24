var menuLi = $('.menu > li');
var subLink = $('.sub-menu a');
var section =$('.board section');
var tab =$('.tab');
var boardLi = $('.board li');
var related = $('.related-list');

subLink.addClass('icon-dot-circled');
boardLi.addClass('icon-dot-circled');

//메인메뉴의 하위메뉴를 제어하기 위한 스크립트
menuLi.on('mouseover focusin',function(){
  menuLi.removeClass('menu-act');
  $(this).addClass('menu-act');
});


// 공지사항 및 자료실 텝 제어를 위한 스크립트   마지막 자료실에서는 엔터를 쳐야 넘어가게
// tab.on('click keyup', function(e){
//   e.preventDefault();
//    if(e.type === 'click' || e.keyCode === 13){
//     section.removeClass('board-act');
//     $(this).parent().addClass('board-act');
//    }
//   });


// 공지사항 자료실 텝으로 넘어가기
  tab.on('click focusin', function(e){
    e.preventDefault();
    section.removeClass('board-act');
    $(this).parent().addClass('board-act');
 });

 //관련사이트 애니메이션을 위한 스크립트
 related.on('mouseover focusin', function(){
   $(this).addClass('related-act')
 })
 related.on('mouseout focusout', function(){
  $(this).removeClass('related-act')
})