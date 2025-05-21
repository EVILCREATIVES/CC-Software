const boreholes = [
  {
    name: "SE",
    position: Cesium.Cartesian3.fromDegrees(141.1586611111111, -5.175230555555556, 0.0),
    cylinder: {
      length: 0,
      topRadius: 1.0,
      bottomRadius: 1.0,
      material: Cesium.Color.LIME.withAlpha(0.9)
    },
    label: {
      text: "SE",
      font: '12px sans-serif',
      fillColor: Cesium.Color.WHITE,
      style: Cesium.LabelStyle.FILL_AND_OUTLINE,
      outlineWidth: 2,
      verticalOrigin: Cesium.VerticalOrigin.BOTTOM
    }
  },
  {
    name: "NE",
    position: Cesium.Cartesian3.fromDegrees(141.1586222222222, -5.159055555555556, 0.0),
    cylinder: {
      length: 0,
      topRadius: 1.0,
      bottomRadius: 1.0,
      material: Cesium.Color.LIME.withAlpha(0.9)
    },
    label: {
      text: "NE",
      font: '12px sans-serif',
      fillColor: Cesium.Color.WHITE,
      style: Cesium.LabelStyle.FILL_AND_OUTLINE,
      outlineWidth: 2,
      verticalOrigin: Cesium.VerticalOrigin.BOTTOM
    }
  },
  {
    name: "sw",
    position: Cesium.Cartesian3.fromDegrees(141.1453555555555, -5.174558333333334, 0.0),
    cylinder: {
      length: 0,
      topRadius: 1.0,
      bottomRadius: 1.0,
      material: Cesium.Color.LIME.withAlpha(0.9)
    },
    label: {
      text: "sw",
      font: '12px sans-serif',
      fillColor: Cesium.Color.WHITE,
      style: Cesium.LabelStyle.FILL_AND_OUTLINE,
      outlineWidth: 2,
      verticalOrigin: Cesium.VerticalOrigin.BOTTOM
    }
  },
  {
    name: "NW",
    position: Cesium.Cartesian3.fromDegrees(141.1452388888889, -5.159166666666667, 0.0),
    cylinder: {
      length: 0,
      topRadius: 1.0,
      bottomRadius: 1.0,
      material: Cesium.Color.LIME.withAlpha(0.9)
    },
    label: {
      text: "NW",
      font: '12px sans-serif',
      fillColor: Cesium.Color.WHITE,
      style: Cesium.LabelStyle.FILL_AND_OUTLINE,
      outlineWidth: 2,
      verticalOrigin: Cesium.VerticalOrigin.BOTTOM
    }
  },
  {
    name: "Cu-a/ 105-135'",
    position: Cesium.Cartesian3.fromDegrees(141.1507463921946, -5.163781944570592, -120.0),
    cylinder: {
      length: 30,
      topRadius: 1.0,
      bottomRadius: 1.0,
      material: Cesium.Color.LIME.withAlpha(0.9)
    },
    label: {
      text: "Cu-a/ 105-135'",
      font: '12px sans-serif',
      fillColor: Cesium.Color.WHITE,
      style: Cesium.LabelStyle.FILL_AND_OUTLINE,
      outlineWidth: 2,
      verticalOrigin: Cesium.VerticalOrigin.BOTTOM
    }
  },
  {
    name: "Cu-b/ 100-110'",
    position: Cesium.Cartesian3.fromDegrees(141.1499462837428, -5.165180912359054, -105.0),
    cylinder: {
      length: 10,
      topRadius: 1.0,
      bottomRadius: 1.0,
      material: Cesium.Color.LIME.withAlpha(0.9)
    },
    label: {
      text: "Cu-b/ 100-110'",
      font: '12px sans-serif',
      fillColor: Cesium.Color.WHITE,
      style: Cesium.LabelStyle.FILL_AND_OUTLINE,
      outlineWidth: 2,
      verticalOrigin: Cesium.VerticalOrigin.BOTTOM
    }
  },
  {
    name: "Cu-c/ 82-118'",
    position: Cesium.Cartesian3.fromDegrees(141.1521155359352, -5.164791976588722, -100.0),
    cylinder: {
      length: 36,
      topRadius: 1.0,
      bottomRadius: 1.0,
      material: Cesium.Color.ORANGE.withAlpha(0.9)
    },
    label: {
      text: "Cu-c/ 82-118'",
      font: '12px sans-serif',
      fillColor: Cesium.Color.WHITE,
      style: Cesium.LabelStyle.FILL_AND_OUTLINE,
      outlineWidth: 2,
      verticalOrigin: Cesium.VerticalOrigin.BOTTOM
    }
  },
  {
    name: "Cu-d/ 75-125'",
    position: Cesium.Cartesian3.fromDegrees(141.1530569193091, -5.165823422228427, -100.0),
    cylinder: {
      length: 50,
      topRadius: 1.0,
      bottomRadius: 1.0,
      material: Cesium.Color.ORANGE.withAlpha(0.9)
    },
    label: {
      text: "Cu-d/ 75-125'",
      font: '12px sans-serif',
      fillColor: Cesium.Color.WHITE,
      style: Cesium.LabelStyle.FILL_AND_OUTLINE,
      outlineWidth: 2,
      verticalOrigin: Cesium.VerticalOrigin.BOTTOM
    }
  },
  {
    name: "Cu-e/ 90-116'",
    position: Cesium.Cartesian3.fromDegrees(141.1514238504805, -5.166792192637873, -103.0),
    cylinder: {
      length: 26,
      topRadius: 1.0,
      bottomRadius: 1.0,
      material: Cesium.Color.LIME.withAlpha(0.9)
    },
    label: {
      text: "Cu-e/ 90-116'",
      font: '12px sans-serif',
      fillColor: Cesium.Color.WHITE,
      style: Cesium.LabelStyle.FILL_AND_OUTLINE,
      outlineWidth: 2,
      verticalOrigin: Cesium.VerticalOrigin.BOTTOM
    }
  },
  {
    name: "Cu-f/ 60-85'",
    position: Cesium.Cartesian3.fromDegrees(141.1543111902525, -5.167169121667389, -72.5),
    cylinder: {
      length: 25,
      topRadius: 1.0,
      bottomRadius: 1.0,
      material: Cesium.Color.LIME.withAlpha(0.9)
    },
    label: {
      text: "Cu-f/ 60-85'",
      font: '12px sans-serif',
      fillColor: Cesium.Color.WHITE,
      style: Cesium.LabelStyle.FILL_AND_OUTLINE,
      outlineWidth: 2,
      verticalOrigin: Cesium.VerticalOrigin.BOTTOM
    }
  },
  {
    name: "Cu-g/ 60-73'",
    position: Cesium.Cartesian3.fromDegrees(141.153063714713, -5.167960497304777, -66.5),
    cylinder: {
      length: 13,
      topRadius: 1.0,
      bottomRadius: 1.0,
      material: Cesium.Color.LIME.withAlpha(0.9)
    },
    label: {
      text: "Cu-g/ 60-73'",
      font: '12px sans-serif',
      fillColor: Cesium.Color.WHITE,
      style: Cesium.LabelStyle.FILL_AND_OUTLINE,
      outlineWidth: 2,
      verticalOrigin: Cesium.VerticalOrigin.BOTTOM
    }
  },
  {
    name: "V2.1a/ 192-200'",
    position: Cesium.Cartesian3.fromDegrees(141.1498846575957, -5.158102816607913, -196.0),
    cylinder: {
      length: 8,
      topRadius: 1.0,
      bottomRadius: 1.0,
      material: Cesium.Color.LIME.withAlpha(0.9)
    },
    label: {
      text: "V2.1a/ 192-200'",
      font: '12px sans-serif',
      fillColor: Cesium.Color.WHITE,
      style: Cesium.LabelStyle.FILL_AND_OUTLINE,
      outlineWidth: 2,
      verticalOrigin: Cesium.VerticalOrigin.BOTTOM
    }
  },
  {
    name: "V2.1b/ 187-197'",
    position: Cesium.Cartesian3.fromDegrees(141.1492154425037, -5.15957056423894, -192.0),
    cylinder: {
      length: 10,
      topRadius: 1.0,
      bottomRadius: 1.0,
      material: Cesium.Color.LIME.withAlpha(0.9)
    },
    label: {
      text: "V2.1b/ 187-197'",
      font: '12px sans-serif',
      fillColor: Cesium.Color.WHITE,
      style: Cesium.LabelStyle.FILL_AND_OUTLINE,
      outlineWidth: 2,
      verticalOrigin: Cesium.VerticalOrigin.BOTTOM
    }
  },
  {
    name: "V4a/ 114-119'",
    position: Cesium.Cartesian3.fromDegrees(141.1455455309631, -5.163634381892858, -116.5),
    cylinder: {
      length: 5,
      topRadius: 1.0,
      bottomRadius: 1.0,
      material: Cesium.Color.LIME.withAlpha(0.9)
    },
    label: {
      text: "V4a/ 114-119'",
      font: '12px sans-serif',
      fillColor: Cesium.Color.WHITE,
      style: Cesium.LabelStyle.FILL_AND_OUTLINE,
      outlineWidth: 2,
      verticalOrigin: Cesium.VerticalOrigin.BOTTOM
    }
  },
  {
    name: "V4b/ 108-116'",
    position: Cesium.Cartesian3.fromDegrees(141.1478655217144, -5.165585509790188, -112.0),
    cylinder: {
      length: 8,
      topRadius: 1.0,
      bottomRadius: 1.0,
      material: Cesium.Color.LIME.withAlpha(0.9)
    },
    label: {
      text: "V4b/ 108-116'",
      font: '12px sans-serif',
      fillColor: Cesium.Color.WHITE,
      style: Cesium.LabelStyle.FILL_AND_OUTLINE,
      outlineWidth: 2,
      verticalOrigin: Cesium.VerticalOrigin.BOTTOM
    }
  },
  {
    name: "V7a/ 142-150'",
    position: Cesium.Cartesian3.fromDegrees(141.1480637272041, -5.172829064480075, -146.0),
    cylinder: {
      length: 8,
      topRadius: 1.0,
      bottomRadius: 1.0,
      material: Cesium.Color.LIME.withAlpha(0.9)
    },
    label: {
      text: "V7a/ 142-150'",
      font: '12px sans-serif',
      fillColor: Cesium.Color.WHITE,
      style: Cesium.LabelStyle.FILL_AND_OUTLINE,
      outlineWidth: 2,
      verticalOrigin: Cesium.VerticalOrigin.BOTTOM
    }
  },
  {
    name: "V7b/ 135-142'",
    position: Cesium.Cartesian3.fromDegrees(141.1499204014461, -5.174701455603857, -138.5),
    cylinder: {
      length: 7,
      topRadius: 1.0,
      bottomRadius: 1.0,
      material: Cesium.Color.LIME.withAlpha(0.9)
    },
    label: {
      text: "V7b/ 135-142'",
      font: '12px sans-serif',
      fillColor: Cesium.Color.WHITE,
      style: Cesium.LabelStyle.FILL_AND_OUTLINE,
      outlineWidth: 2,
      verticalOrigin: Cesium.VerticalOrigin.BOTTOM
    }
  },
  {
    name: "V7c/ 120-127'",
    position: Cesium.Cartesian3.fromDegrees(141.1520586852913, -5.177418868716856, -123.5),
    cylinder: {
      length: 7,
      topRadius: 1.0,
      bottomRadius: 1.0,
      material: Cesium.Color.LIME.withAlpha(0.9)
    },
    label: {
      text: "V7c/ 120-127'",
      font: '12px sans-serif',
      fillColor: Cesium.Color.WHITE,
      style: Cesium.LabelStyle.FILL_AND_OUTLINE,
      outlineWidth: 2,
      verticalOrigin: Cesium.VerticalOrigin.BOTTOM
    }
  },
  {
    name: "Au-a/ 72-114'",
    position: Cesium.Cartesian3.fromDegrees(141.1509742156008, -5.164683138965361, -93.0),
    cylinder: {
      length: 42,
      topRadius: 1.0,
      bottomRadius: 1.0,
      material: Cesium.Color.ORANGE.withAlpha(0.9)
    },
    label: {
      text: "Au-a/ 72-114'",
      font: '12px sans-serif',
      fillColor: Cesium.Color.WHITE,
      style: Cesium.LabelStyle.FILL_AND_OUTLINE,
      outlineWidth: 2,
      verticalOrigin: Cesium.VerticalOrigin.BOTTOM
    }
  },
  {
    name: "Au-b/ 68-85'",
    position: Cesium.Cartesian3.fromDegrees(141.1525700127856, -5.165614369440094, -76.5),
    cylinder: {
      length: 17,
      topRadius: 1.0,
      bottomRadius: 1.0,
      material: Cesium.Color.LIME.withAlpha(0.9)
    },
    label: {
      text: "Au-b/ 68-85'",
      font: '12px sans-serif',
      fillColor: Cesium.Color.WHITE,
      style: Cesium.LabelStyle.FILL_AND_OUTLINE,
      outlineWidth: 2,
      verticalOrigin: Cesium.VerticalOrigin.BOTTOM
    }
  },
  {
    name: "Au-c/ 70-86'",
    position: Cesium.Cartesian3.fromDegrees(141.1542673432526, -5.166208775176492, -78.0),
    cylinder: {
      length: 16,
      topRadius: 1.0,
      bottomRadius: 1.0,
      material: Cesium.Color.LIME.withAlpha(0.9)
    },
    label: {
      text: "Au-c/ 70-86'",
      font: '12px sans-serif',
      fillColor: Cesium.Color.WHITE,
      style: Cesium.LabelStyle.FILL_AND_OUTLINE,
      outlineWidth: 2,
      verticalOrigin: Cesium.VerticalOrigin.BOTTOM
    }
  },
  {
    name: "Au-d/ 80-105'",
    position: Cesium.Cartesian3.fromDegrees(141.1510310683898, -5.166221865787453, -92.5),
    cylinder: {
      length: 25,
      topRadius: 1.0,
      bottomRadius: 1.0,
      material: Cesium.Color.LIME.withAlpha(0.9)
    },
    label: {
      text: "Au-d/ 80-105'",
      font: '12px sans-serif',
      fillColor: Cesium.Color.WHITE,
      style: Cesium.LabelStyle.FILL_AND_OUTLINE,
      outlineWidth: 2,
      verticalOrigin: Cesium.VerticalOrigin.BOTTOM
    }
  },
  {
    name: "Au-e/ 59-84'",
    position: Cesium.Cartesian3.fromDegrees(141.1535735789801, -5.166919690720502, -71.5),
    cylinder: {
      length: 25,
      topRadius: 1.0,
      bottomRadius: 1.0,
      material: Cesium.Color.LIME.withAlpha(0.9)
    },
    label: {
      text: "Au-e/ 59-84'",
      font: '12px sans-serif',
      fillColor: Cesium.Color.WHITE,
      style: Cesium.LabelStyle.FILL_AND_OUTLINE,
      outlineWidth: 2,
      verticalOrigin: Cesium.VerticalOrigin.BOTTOM
    }
  },
  {
    name: "V1a/ 195-205'",
    position: Cesium.Cartesian3.fromDegrees(141.1505753375433, -5.157726204489606, -200.0),
    cylinder: {
      length: 10,
      topRadius: 1.0,
      bottomRadius: 1.0,
      material: Cesium.Color.LIME.withAlpha(0.9)
    },
    label: {
      text: "V1a/ 195-205'",
      font: '12px sans-serif',
      fillColor: Cesium.Color.WHITE,
      style: Cesium.LabelStyle.FILL_AND_OUTLINE,
      outlineWidth: 2,
      verticalOrigin: Cesium.VerticalOrigin.BOTTOM
    }
  },
  {
    name: "V1b/ 122-135'",
    position: Cesium.Cartesian3.fromDegrees(141.1511085350601, -5.160055765675398, -128.5),
    cylinder: {
      length: 13,
      topRadius: 1.0,
      bottomRadius: 1.0,
      material: Cesium.Color.LIME.withAlpha(0.9)
    },
    label: {
      text: "V1b/ 122-135'",
      font: '12px sans-serif',
      fillColor: Cesium.Color.WHITE,
      style: Cesium.LabelStyle.FILL_AND_OUTLINE,
      outlineWidth: 2,
      verticalOrigin: Cesium.VerticalOrigin.BOTTOM
    }
  },
  {
    name: "V1c/ 110-120'",
    position: Cesium.Cartesian3.fromDegrees(141.1523018201204, -5.163040785460531, -115.0),
    cylinder: {
      length: 10,
      topRadius: 1.0,
      bottomRadius: 1.0,
      material: Cesium.Color.LIME.withAlpha(0.9)
    },
    label: {
      text: "V1c/ 110-120'",
      font: '12px sans-serif',
      fillColor: Cesium.Color.WHITE,
      style: Cesium.LabelStyle.FILL_AND_OUTLINE,
      outlineWidth: 2,
      verticalOrigin: Cesium.VerticalOrigin.BOTTOM
    }
  },
  {
    name: "V1d/ 82-95'",
    position: Cesium.Cartesian3.fromDegrees(141.1550025579414, -5.165800650889471, -88.5),
    cylinder: {
      length: 13,
      topRadius: 1.0,
      bottomRadius: 1.0,
      material: Cesium.Color.LIME.withAlpha(0.9)
    },
    label: {
      text: "V1d/ 82-95'",
      font: '12px sans-serif',
      fillColor: Cesium.Color.WHITE,
      style: Cesium.LabelStyle.FILL_AND_OUTLINE,
      outlineWidth: 2,
      verticalOrigin: Cesium.VerticalOrigin.BOTTOM
    }
  },
  {
    name: "V1e/ 55-64'",
    position: Cesium.Cartesian3.fromDegrees(141.1569872032706, -5.168970701832382, -59.5),
    cylinder: {
      length: 9,
      topRadius: 1.0,
      bottomRadius: 1.0,
      material: Cesium.Color.LIME.withAlpha(0.9)
    },
    label: {
      text: "V1e/ 55-64'",
      font: '12px sans-serif',
      fillColor: Cesium.Color.WHITE,
      style: Cesium.LabelStyle.FILL_AND_OUTLINE,
      outlineWidth: 2,
      verticalOrigin: Cesium.VerticalOrigin.BOTTOM
    }
  },
  {
    name: "V1f/ 35-45'",
    position: Cesium.Cartesian3.fromDegrees(141.1598022240888, -5.170980107199287, -40.0),
    cylinder: {
      length: 10,
      topRadius: 1.0,
      bottomRadius: 1.0,
      material: Cesium.Color.LIME.withAlpha(0.9)
    },
    label: {
      text: "V1f/ 35-45'",
      font: '12px sans-serif',
      fillColor: Cesium.Color.WHITE,
      style: Cesium.LabelStyle.FILL_AND_OUTLINE,
      outlineWidth: 2,
      verticalOrigin: Cesium.VerticalOrigin.BOTTOM
    }
  },
  {
    name: "V2a/ 185-200'",
    position: Cesium.Cartesian3.fromDegrees(141.1469386225386, -5.158581317588299, -192.5),
    cylinder: {
      length: 15,
      topRadius: 1.0,
      bottomRadius: 1.0,
      material: Cesium.Color.LIME.withAlpha(0.9)
    },
    label: {
      text: "V2a/ 185-200'",
      font: '12px sans-serif',
      fillColor: Cesium.Color.WHITE,
      style: Cesium.LabelStyle.FILL_AND_OUTLINE,
      outlineWidth: 2,
      verticalOrigin: Cesium.VerticalOrigin.BOTTOM
    }
  },
  {
    name: "V2b/ 180-197'",
    position: Cesium.Cartesian3.fromDegrees(141.1485152784448, -5.160175416386109, -188.5),
    cylinder: {
      length: 17,
      topRadius: 1.0,
      bottomRadius: 1.0,
      material: Cesium.Color.LIME.withAlpha(0.9)
    },
    label: {
      text: "V2b/ 180-197'",
      font: '12px sans-serif',
      fillColor: Cesium.Color.WHITE,
      style: Cesium.LabelStyle.FILL_AND_OUTLINE,
      outlineWidth: 2,
      verticalOrigin: Cesium.VerticalOrigin.BOTTOM
    }
  },
  {
    name: "V2c/ 125-139'",
    position: Cesium.Cartesian3.fromDegrees(141.1497020162708, -5.162828428998539, -132.0),
    cylinder: {
      length: 14,
      topRadius: 1.0,
      bottomRadius: 1.0,
      material: Cesium.Color.LIME.withAlpha(0.9)
    },
    label: {
      text: "V2c/ 125-139'",
      font: '12px sans-serif',
      fillColor: Cesium.Color.WHITE,
      style: Cesium.LabelStyle.FILL_AND_OUTLINE,
      outlineWidth: 2,
      verticalOrigin: Cesium.VerticalOrigin.BOTTOM
    }
  },
  {
    name: "V2d/ 99-112'",
    position: Cesium.Cartesian3.fromDegrees(141.1506582132181, -5.166874677946268, -105.5),
    cylinder: {
      length: 13,
      topRadius: 1.0,
      bottomRadius: 1.0,
      material: Cesium.Color.LIME.withAlpha(0.9)
    },
    label: {
      text: "V2d/ 99-112'",
      font: '12px sans-serif',
      fillColor: Cesium.Color.WHITE,
      style: Cesium.LabelStyle.FILL_AND_OUTLINE,
      outlineWidth: 2,
      verticalOrigin: Cesium.VerticalOrigin.BOTTOM
    }
  },
  {
    name: "V2e/ 65-74'",
    position: Cesium.Cartesian3.fromDegrees(141.1548926077436, -5.167498902402127, -69.5),
    cylinder: {
      length: 9,
      topRadius: 1.0,
      bottomRadius: 1.0,
      material: Cesium.Color.LIME.withAlpha(0.9)
    },
    label: {
      text: "V2e/ 65-74'",
      font: '12px sans-serif',
      fillColor: Cesium.Color.WHITE,
      style: Cesium.LabelStyle.FILL_AND_OUTLINE,
      outlineWidth: 2,
      verticalOrigin: Cesium.VerticalOrigin.BOTTOM
    }
  },
  {
    name: "V3a/ 85-96'",
    position: Cesium.Cartesian3.fromDegrees(141.1426474996973, -5.161723272398266, -90.5),
    cylinder: {
      length: 11,
      topRadius: 1.0,
      bottomRadius: 1.0,
      material: Cesium.Color.LIME.withAlpha(0.9)
    },
    label: {
      text: "V3a/ 85-96'",
      font: '12px sans-serif',
      fillColor: Cesium.Color.WHITE,
      style: Cesium.LabelStyle.FILL_AND_OUTLINE,
      outlineWidth: 2,
      verticalOrigin: Cesium.VerticalOrigin.BOTTOM
    }
  },
  {
    name: "V3b/ 116-132'",
    position: Cesium.Cartesian3.fromDegrees(141.146179338523, -5.162520017211491, -124.0),
    cylinder: {
      length: 16,
      topRadius: 1.0,
      bottomRadius: 1.0,
      material: Cesium.Color.LIME.withAlpha(0.9)
    },
    label: {
      text: "V3b/ 116-132'",
      font: '12px sans-serif',
      fillColor: Cesium.Color.WHITE,
      style: Cesium.LabelStyle.FILL_AND_OUTLINE,
      outlineWidth: 2,
      verticalOrigin: Cesium.VerticalOrigin.BOTTOM
    }
  },
  {
    name: "V3c/ 87-95'",
    position: Cesium.Cartesian3.fromDegrees(141.1485848126983, -5.1634748490881, -91.0),
    cylinder: {
      length: 8,
      topRadius: 1.0,
      bottomRadius: 1.0,
      material: Cesium.Color.LIME.withAlpha(0.9)
    },
    label: {
      text: "V3c/ 87-95'",
      font: '12px sans-serif',
      fillColor: Cesium.Color.WHITE,
      style: Cesium.LabelStyle.FILL_AND_OUTLINE,
      outlineWidth: 2,
      verticalOrigin: Cesium.VerticalOrigin.BOTTOM
    }
  },
  {
    name: "V3d/ 75-85'",
    position: Cesium.Cartesian3.fromDegrees(141.1506756951932, -5.165332054886616, -80.0),
    cylinder: {
      length: 10,
      topRadius: 1.0,
      bottomRadius: 1.0,
      material: Cesium.Color.LIME.withAlpha(0.9)
    },
    label: {
      text: "V3d/ 75-85'",
      font: '12px sans-serif',
      fillColor: Cesium.Color.WHITE,
      style: Cesium.LabelStyle.FILL_AND_OUTLINE,
      outlineWidth: 2,
      verticalOrigin: Cesium.VerticalOrigin.BOTTOM
    }
  },
  {
    name: "V3e/ 64-76'",
    position: Cesium.Cartesian3.fromDegrees(141.1530279898888, -5.167235286899797, -70.0),
    cylinder: {
      length: 12,
      topRadius: 1.0,
      bottomRadius: 1.0,
      material: Cesium.Color.LIME.withAlpha(0.9)
    },
    label: {
      text: "V3e/ 64-76'",
      font: '12px sans-serif',
      fillColor: Cesium.Color.WHITE,
      style: Cesium.LabelStyle.FILL_AND_OUTLINE,
      outlineWidth: 2,
      verticalOrigin: Cesium.VerticalOrigin.BOTTOM
    }
  },
  {
    name: "V5a/ 112-128'",
    position: Cesium.Cartesian3.fromDegrees(141.1449150059792, -5.165907327271221, -120.0),
    cylinder: {
      length: 16,
      topRadius: 1.0,
      bottomRadius: 1.0,
      material: Cesium.Color.LIME.withAlpha(0.9)
    },
    label: {
      text: "V5a/ 112-128'",
      font: '12px sans-serif',
      fillColor: Cesium.Color.WHITE,
      style: Cesium.LabelStyle.FILL_AND_OUTLINE,
      outlineWidth: 2,
      verticalOrigin: Cesium.VerticalOrigin.BOTTOM
    }
  },
  {
    name: "V5b/ 96-106'",
    position: Cesium.Cartesian3.fromDegrees(141.1476368910147, -5.166966114322263, -101.0),
    cylinder: {
      length: 10,
      topRadius: 1.0,
      bottomRadius: 1.0,
      material: Cesium.Color.LIME.withAlpha(0.9)
    },
    label: {
      text: "V5b/ 96-106'",
      font: '12px sans-serif',
      fillColor: Cesium.Color.WHITE,
      style: Cesium.LabelStyle.FILL_AND_OUTLINE,
      outlineWidth: 2,
      verticalOrigin: Cesium.VerticalOrigin.BOTTOM
    }
  },
  {
    name: "V5c/ 72-80'",
    position: Cesium.Cartesian3.fromDegrees(141.1504446425675, -5.167686357816616, -76.0),
    cylinder: {
      length: 8,
      topRadius: 1.0,
      bottomRadius: 1.0,
      material: Cesium.Color.LIME.withAlpha(0.9)
    },
    label: {
      text: "V5c/ 72-80'",
      font: '12px sans-serif',
      fillColor: Cesium.Color.WHITE,
      style: Cesium.LabelStyle.FILL_AND_OUTLINE,
      outlineWidth: 2,
      verticalOrigin: Cesium.VerticalOrigin.BOTTOM
    }
  },
  {
    name: "V6a/ 88-96'",
    position: Cesium.Cartesian3.fromDegrees(141.1451927333411, -5.170357234818364, -92.0),
    cylinder: {
      length: 8,
      topRadius: 1.0,
      bottomRadius: 1.0,
      material: Cesium.Color.LIME.withAlpha(0.9)
    },
    label: {
      text: "V6a/ 88-96'",
      font: '12px sans-serif',
      fillColor: Cesium.Color.WHITE,
      style: Cesium.LabelStyle.FILL_AND_OUTLINE,
      outlineWidth: 2,
      verticalOrigin: Cesium.VerticalOrigin.BOTTOM
    }
  },
  {
    name: "V6b/ 69-78'",
    position: Cesium.Cartesian3.fromDegrees(141.1477873584544, -5.169990625306434, -73.5),
    cylinder: {
      length: 9,
      topRadius: 1.0,
      bottomRadius: 1.0,
      material: Cesium.Color.LIME.withAlpha(0.9)
    },
    label: {
      text: "V6b/ 69-78'",
      font: '12px sans-serif',
      fillColor: Cesium.Color.WHITE,
      style: Cesium.LabelStyle.FILL_AND_OUTLINE,
      outlineWidth: 2,
      verticalOrigin: Cesium.VerticalOrigin.BOTTOM
    }
  },
  {
    name: "V6c/ 75-85'",
    position: Cesium.Cartesian3.fromDegrees(141.15030343354, -5.168248968592347, -80.0),
    cylinder: {
      length: 10,
      topRadius: 1.0,
      bottomRadius: 1.0,
      material: Cesium.Color.LIME.withAlpha(0.9)
    },
    label: {
      text: "V6c/ 75-85'",
      font: '12px sans-serif',
      fillColor: Cesium.Color.WHITE,
      style: Cesium.LabelStyle.FILL_AND_OUTLINE,
      outlineWidth: 2,
      verticalOrigin: Cesium.VerticalOrigin.BOTTOM
    }
  },
  {
    name: "V8a/ 92-102'",
    position: Cesium.Cartesian3.fromDegrees(141.155155165303, -5.176495066009828, -97.0),
    cylinder: {
      length: 10,
      topRadius: 1.0,
      bottomRadius: 1.0,
      material: Cesium.Color.LIME.withAlpha(0.9)
    },
    label: {
      text: "V8a/ 92-102'",
      font: '12px sans-serif',
      fillColor: Cesium.Color.WHITE,
      style: Cesium.LabelStyle.FILL_AND_OUTLINE,
      outlineWidth: 2,
      verticalOrigin: Cesium.VerticalOrigin.BOTTOM
    }
  },
  {
    name: "V8b/ 60-68'",
    position: Cesium.Cartesian3.fromDegrees(141.1567412984058, -5.174085756506141, -64.0),
    cylinder: {
      length: 8,
      topRadius: 1.0,
      bottomRadius: 1.0,
      material: Cesium.Color.LIME.withAlpha(0.9)
    },
    label: {
      text: "V8b/ 60-68'",
      font: '12px sans-serif',
      fillColor: Cesium.Color.WHITE,
      style: Cesium.LabelStyle.FILL_AND_OUTLINE,
      outlineWidth: 2,
      verticalOrigin: Cesium.VerticalOrigin.BOTTOM
    }
  },
  {
    name: "V8c/ 45-53'",
    position: Cesium.Cartesian3.fromDegrees(141.1589385951349, -5.171416421454268, -49.0),
    cylinder: {
      length: 8,
      topRadius: 1.0,
      bottomRadius: 1.0,
      material: Cesium.Color.LIME.withAlpha(0.9)
    },
    label: {
      text: "V8c/ 45-53'",
      font: '12px sans-serif',
      fillColor: Cesium.Color.WHITE,
      style: Cesium.LabelStyle.FILL_AND_OUTLINE,
      outlineWidth: 2,
      verticalOrigin: Cesium.VerticalOrigin.BOTTOM
    }
  },
];