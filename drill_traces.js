const drillTraces = [
  {
    name: "V1a/ 17-28m",
    position: Cesium.Cartesian3.fromDegrees(-8.910215833831415, 6.538030095367452),
    polyline: {
      positions: Cesium.Cartesian3.fromDegreesArrayHeights([
        -8.910215833831415, 6.538030095367452, 0,
        -8.910215833831415, 6.538030095367452, -28.0
      ]),
      width: 2,
      material: Cesium.Color.RED
    }
  },
  {
    name: "V1b/ 19-27m",
    position: Cesium.Cartesian3.fromDegrees(-8.906752577736981, 6.537951981841064),
    polyline: {
      positions: Cesium.Cartesian3.fromDegreesArrayHeights([
        -8.906752577736981, 6.537951981841064, 0,
        -8.906752577736981, 6.537951981841064, -27.0
      ]),
      width: 2,
      material: Cesium.Color.RED
    }
  },
  {
    name: "V1c/ 28-35m",
    position: Cesium.Cartesian3.fromDegrees(-8.903771575986244, 6.538929656216102),
    polyline: {
      positions: Cesium.Cartesian3.fromDegreesArrayHeights([
        -8.903771575986244, 6.538929656216102, 0,
        -8.903771575986244, 6.538929656216102, -35.0
      ]),
      width: 2,
      material: Cesium.Color.RED
    }
  },
  {
    name: "V1d/ 35-41m",
    position: Cesium.Cartesian3.fromDegrees(-8.899597748132027, 6.539983193634133),
    polyline: {
      positions: Cesium.Cartesian3.fromDegreesArrayHeights([
        -8.899597748132027, 6.539983193634133, 0,
        -8.899597748132027, 6.539983193634133, -41.0
      ]),
      width: 2,
      material: Cesium.Color.RED
    }
  },
  {
    name: "V2a/ 20-26m",
    position: Cesium.Cartesian3.fromDegrees(-8.906383632141925, 6.5372961093297),
    polyline: {
      positions: Cesium.Cartesian3.fromDegreesArrayHeights([
        -8.906383632141925, 6.5372961093297, 0,
        -8.906383632141925, 6.5372961093297, -26.0
      ]),
      width: 2,
      material: Cesium.Color.RED
    }
  },
  {
    name: "V2b/ 32-39m",
    position: Cesium.Cartesian3.fromDegrees(-8.905237530249824, 6.535844174876264),
    polyline: {
      positions: Cesium.Cartesian3.fromDegreesArrayHeights([
        -8.905237530249824, 6.535844174876264, 0,
        -8.905237530249824, 6.535844174876264, -39.0
      ]),
      width: 2,
      material: Cesium.Color.RED
    }
  },
  {
    name: "V2c/ 30-38m",
    position: Cesium.Cartesian3.fromDegrees(-8.90338518201026, 6.534629168548737),
    polyline: {
      positions: Cesium.Cartesian3.fromDegreesArrayHeights([
        -8.90338518201026, 6.534629168548737, 0,
        -8.90338518201026, 6.534629168548737, -38.0
      ]),
      width: 2,
      material: Cesium.Color.RED
    }
  },
  {
    name: "V2d/ 21-28m",
    position: Cesium.Cartesian3.fromDegrees(-8.901737493415316, 6.533026936144803),
    polyline: {
      positions: Cesium.Cartesian3.fromDegreesArrayHeights([
        -8.901737493415316, 6.533026936144803, 0,
        -8.901737493415316, 6.533026936144803, -28.0
      ]),
      width: 2,
      material: Cesium.Color.RED
    }
  },
  {
    name: "V3a/ 14-22m",
    position: Cesium.Cartesian3.fromDegrees(-8.90731401366218, 6.538752102837822),
    polyline: {
      positions: Cesium.Cartesian3.fromDegreesArrayHeights([
        -8.90731401366218, 6.538752102837822, 0,
        -8.90731401366218, 6.538752102837822, -22.0
      ]),
      width: 2,
      material: Cesium.Color.RED
    }
  },
  {
    name: "V3b/ 9-17m",
    position: Cesium.Cartesian3.fromDegrees(-8.907577225434588, 6.541552887452835),
    polyline: {
      positions: Cesium.Cartesian3.fromDegreesArrayHeights([
        -8.907577225434588, 6.541552887452835, 0,
        -8.907577225434588, 6.541552887452835, -17.0
      ]),
      width: 2,
      material: Cesium.Color.RED
    }
  },
  {
    name: "V4a/ 20-26m",
    position: Cesium.Cartesian3.fromDegrees(-8.90434756801259, 6.538394478493414),
    polyline: {
      positions: Cesium.Cartesian3.fromDegreesArrayHeights([
        -8.90434756801259, 6.538394478493414, 0,
        -8.90434756801259, 6.538394478493414, -26.0
      ]),
      width: 2,
      material: Cesium.Color.RED
    }
  },
  {
    name: "V4b/ 25-33m",
    position: Cesium.Cartesian3.fromDegrees(-8.902297285072624, 6.537154070180242),
    polyline: {
      positions: Cesium.Cartesian3.fromDegreesArrayHeights([
        -8.902297285072624, 6.537154070180242, 0,
        -8.902297285072624, 6.537154070180242, -33.0
      ]),
      width: 2,
      material: Cesium.Color.RED
    }
  },
  {
    name: "V4c/ 18-25m",
    position: Cesium.Cartesian3.fromDegrees(-8.900570347545475, 6.5358307627197),
    polyline: {
      positions: Cesium.Cartesian3.fromDegreesArrayHeights([
        -8.900570347545475, 6.5358307627197, 0,
        -8.900570347545475, 6.5358307627197, -25.0
      ]),
      width: 2,
      material: Cesium.Color.RED
    }
  },
  {
    name: "D1a/ 12-27m",
    position: Cesium.Cartesian3.fromDegrees(-8.90766136886963, 6.539152337179276),
    polyline: {
      positions: Cesium.Cartesian3.fromDegreesArrayHeights([
        -8.90766136886963, 6.539152337179276, 0,
        -8.90766136886963, 6.539152337179276, -27.0
      ]),
      width: 2,
      material: Cesium.Color.RED
    }
  },
  {
    name: "D1b/ 12-24m",
    position: Cesium.Cartesian3.fromDegrees(-8.907821108833545, 6.540228427842127),
    polyline: {
      positions: Cesium.Cartesian3.fromDegreesArrayHeights([
        -8.907821108833545, 6.540228427842127, 0,
        -8.907821108833545, 6.540228427842127, -24.0
      ]),
      width: 2,
      material: Cesium.Color.RED
    }
  },
  {
    name: "D1c/ 10-22m",
    position: Cesium.Cartesian3.fromDegrees(-8.907794738221192, 6.541334764508712),
    polyline: {
      positions: Cesium.Cartesian3.fromDegreesArrayHeights([
        -8.907794738221192, 6.541334764508712, 0,
        -8.907794738221192, 6.541334764508712, -22.0
      ]),
      width: 2,
      material: Cesium.Color.RED
    }
  },
  {
    name: "D2a/ 22-36m",
    position: Cesium.Cartesian3.fromDegrees(-8.902432526233294, 6.539003516830102),
    polyline: {
      positions: Cesium.Cartesian3.fromDegreesArrayHeights([
        -8.902432526233294, 6.539003516830102, 0,
        -8.902432526233294, 6.539003516830102, -36.0
      ]),
      width: 2,
      material: Cesium.Color.RED
    }
  },
  {
    name: "D2b/ 26-41m",
    position: Cesium.Cartesian3.fromDegrees(-8.901469130672009, 6.539072599404979),
    polyline: {
      positions: Cesium.Cartesian3.fromDegreesArrayHeights([
        -8.901469130672009, 6.539072599404979, 0,
        -8.901469130672009, 6.539072599404979, -41.0
      ]),
      width: 2,
      material: Cesium.Color.RED
    }
  },
  {
    name: "D2c/ 29-46m",
    position: Cesium.Cartesian3.fromDegrees(-8.900635280631343, 6.539258592383805),
    polyline: {
      positions: Cesium.Cartesian3.fromDegreesArrayHeights([
        -8.900635280631343, 6.539258592383805, 0,
        -8.900635280631343, 6.539258592383805, -46.0
      ]),
      width: 2,
      material: Cesium.Color.RED
    }
  },
  {
    name: "D3a/ 25-40m",
    position: Cesium.Cartesian3.fromDegrees(-8.902605160677115, 6.534268489396943),
    polyline: {
      positions: Cesium.Cartesian3.fromDegreesArrayHeights([
        -8.902605160677115, 6.534268489396943, 0,
        -8.902605160677115, 6.534268489396943, -40.0
      ]),
      width: 2,
      material: Cesium.Color.RED
    }
  },
  {
    name: "D3b/ 24-38m",
    position: Cesium.Cartesian3.fromDegrees(-8.902608803250779, 6.533462411002329),
    polyline: {
      positions: Cesium.Cartesian3.fromDegreesArrayHeights([
        -8.902608803250779, 6.533462411002329, 0,
        -8.902608803250779, 6.533462411002329, -38.0
      ]),
      width: 2,
      material: Cesium.Color.RED
    }
  },
  {
    name: "D3c/ 19-34m",
    position: Cesium.Cartesian3.fromDegrees(-8.903069774958382, 6.532629597666687),
    polyline: {
      positions: Cesium.Cartesian3.fromDegreesArrayHeights([
        -8.903069774958382, 6.532629597666687, 0,
        -8.903069774958382, 6.532629597666687, -34.0
      ]),
      width: 2,
      material: Cesium.Color.RED
    }
  },
];
