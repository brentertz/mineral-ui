const compute = require('./compute');
const paratest = require('./paratest');

const tests = [
  {
    subject: compute.roundPlaces,
    cases: [
      {
        name: "works with more",
        args: [1, 10.25],
        result: 10.3
      }, {
        name: "works with less",
        args: [2, 10.5],
        result: 10.5
      }, {
        name: "works with ints",
        args: [1, 10],
        result: 10
      }, {
        name: "works with zero",
        args: [0, 10.876],
        result: 11
      }
    ]
  }, {
    subject: compute.clamp,
    cases: [
      {
        name: "works inside",
        args: [0, 10, 5],
        result: 5
      }, {
        name: "works above",
        args: [0, 10, 15],
        result: 10
      }, {
        name: "works below",
        args: [0, 10, -5],
        result: 0
      }
    ]
  }, {
    subject: compute.distance,
    cases: [
      {
        name: "works",
        args: [{x:0, y:0}, {x:0, y:5}],
        result: 5
      }, {
        name: "doesn't return negatives",
        args: [{x:5, y:0}, {x:0, y:0}],
        result: 5
      }
    ]
  }, {
    subject: compute.pointOnAndDistanceFromLine,
    cases: [
      {
        name: "works",
        args: [{x:0, y:0}, {x:2, y:0}, {x:1, y:1}],
        result: {point:{x:1, y:0}, distance:1}
      }, {
        name: "when point is outside segment",
        args: [{x:0, y:0}, {x:2, y:0}, {x:3, y:1}],
        result: {point:{x:3, y:0}, distance:1}
      }
    ]
  }, {
    subject: compute.minDistanceFromReference,
    cases: [
      {
        name: "works",
        args: [[{x:3,y:0}, {x:5, y:5}], {x:0,y:0}],
        result: 3
      }
    ]
  }, {
    subject: compute.color,
    cases: [
      {
        name: "works at no distance",
        args: [100, 700, 0],
        result: "#fff"
      }, {
        name: "works at some distance",
        args: [100, 700, 350],
        result: "#808080"
      }, {
        name: "works with all single digit hex",
        args: [100, 700, 673],
        result: "#0a0a0a"
      }, {
        name: "works at great distance",
        args: [100, 700, 1050],
        result: "#000"
      }
    ]
  }, {
    subject: compute.centroid,
    cases: [
      {
        name: "works",
        args: [{x:15, y:15}, {x:47, y:40}, {x:65,y:20}],
        result: {x:42, y:25}
      }, {
        name: "works still",
        args: [{x:19, y:13}, {x:25, y:42}, {x:-5,y:28}],
        result: {x:13, y:28}
      }
    ]
  }, {
    subject: compute.lerp,
    cases: [
      {
        name: "works",
        args: [50, 0, 100, 0, 16],
        result: 8
      }, {
        name: "rounds appropriately",
        args: [45, 0, 100, 0, 16],
        result: 7.2
      }, {
        name: "lower",
        args: [-10, 0, 100, 0, 16],
        result: -1.6
      }, {
        name: "another",
        args: [600, 700, 0, 0, 15],
        result: 2.142857142857143
      }, {
        name: "higher",
        args: [800, 700, 0, 0, 15],
        result: -2.142857142857143
      }
    ]
  }, {
    subject: compute.padColor,
    cases: [
      {
        name: "works",
        args: ["ff"],
        result: "#fff"
      }, {
        name: "works",
        args: ["f"],
        result: "#0f0f0f"
      }
    ]
  }
];

paratest("compute", tests);
