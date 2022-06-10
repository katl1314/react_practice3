// 버블링 단계에서 이벤트 캐치
document.querySelector('body').addEventListener('click', function() {

});

// 캡처링 단계에서 이벤트 캐치
document.querySelector('p').addEventListener('click', function() {

}, true);

// 타깃 단계에서 이벤트 캐치
document.querySelector('buton').addEventListener('click', function() {
    
});