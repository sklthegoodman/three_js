/**
 * Created by wrynnsun on 16/6/5.
 */
//stats
var stats;
!function () {
    stats = new Stats();
    stats.setMode(0);
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';
    $('#stats').append(stats.domElement);
    return stats;
}();