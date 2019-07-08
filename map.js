var mapData = [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
  
var foregroundData = [[  3,  3,  3,  3,  3,  3,  2,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3, 3],
  [  3,  20, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,  2,  3],
  [  3,  3,  16, -1,  -1,  -1, -1,  3, 3,  3,  3,  3, 2,  3, -1,  3,  3,  3,  3,  3,  3,  3,  3, -1, -1,  3],
  [  3, -1, -1, -1,  3,  3, -1,  3, 3,  3,  3,  3, -1,  3, -1,  3,  3,  3,  3,  3,  3,  3,  3,  3, -1,  3],
  [  3, -1,  3, -1,  3,  3, -1, -1, 17,  3,  3,  3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,  3],
  [  3, -1,  3, -1,  3,  3, -1, -1,  3,  3,  3,  3,  3,  3,  3,  3, 2, -1,  3,  3,  3,  3,  3, -1, -1,  3],
  [  3, -1,  3, -1,  3,  3, -1,  2,  3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2,  3, -1, -1,  3],
  [  3, -1,  3, -1,  3,  3, -1, -1,  3, -1, -1,  -1, -1, -1, -1, -1, -1, 17, 2, -1, -1, -1,  3, -1, -1,  3],
  [  3, -1,  3, -1,  3,  3, -1, -1,  3, -1, 18, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,  3, -1, -1,  3],
  [  3, -1,  3, -1,  3,  3, -1, -1, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,  3, -1, -1,  3],
  [  3, -1,  3, -1,  3,  3, -1, -1, -1, -1, -1, -1, -1, 20, -1, -1,  -1, -1, -1, -1, -1, -1,  3, -1, -1,  3],
  [  3, -1,  3, -1,  3,  3, -1, -1,  3, -1, -1, -1, -1, -1, -1, -1, 18, -1, -1, -1, -1, 13,  3, -1, -1,  3],
  [  3, -1,  3, -1,  3,  3, -1, -1,  3, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 13, 13,  3, -1, -1,  3],
  [  3, -1,  3, -1,  3,  3, -1, -1,  3,  3, -1, -1,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3, -1, -1,  3],
  [  3, -1,  3, -1,  3,  3, -1, -1,  3, -1, -1, -1, 17, 14, 14, 14, 14, 14, 14, 14, -1,  2,  3, -1, 17, -1],
  [  3, -1,  3, -1,  3,  3, -1, -1,  3, -1, -1,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3, -1, -1, 15],
  [  3, -1,  3, -1,  3,  3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 17,  2,  3,  3, -1, 17, -1],
  [  3, -1,  3,  2,  3,  3, -1, 16, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,  3],
  [  3, -1,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3]];

