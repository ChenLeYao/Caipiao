rem();
function rem() {
var fz = document.querySelector('html').offsetWidth / 7.5;
document.querySelector('html').style.fontSize =
    fz <= 100 ? fz + 'px' : '100px';
}
window.onresize = function() {
  rem();
};
//function rem() {
//var offsetWidth = document.querySelector('html').offsetWidth;
//
//var fz = offsetWidth > 750 ? offsetWidth/ 50 : offsetWidth/ 7.5 ; 
//// 25 55
//document.querySelector('html').style.fontSize =
//  fz >= 25 ? fz + 'px' : '100px';
//  offsetWidth > 550 && (document.querySelector('.dish_body').style.width = '15rem');
//  offsetWidth > 550 && (document.querySelector('.dish').style.width = '15rem');
//}