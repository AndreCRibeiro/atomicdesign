import React from 'react';
import data from './data.json';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import am4lang_pt_BR from "@amcharts/amcharts4/lang/pt_BR";

function App() {
  am4core.useTheme(am4themes_animated);
  const chart = am4core.create('chartdiv', am4charts.XYChart);
  am4core.options.queue = true;

  chart.language.locale = am4lang_pt_BR;

  chart.data = data;

  var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
  dateAxis.renderer.minGridDistance = 1;

  // Set date label formatting
  dateAxis.dateFormats.setKey("day", "eeee \n dd/MM/yyyy");
  dateAxis.periodChangeDateFormats.setKey("day", "eeee \n dd/MM/yyyy");

  // Create value axis
  const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  valueAxis.renderer.inversed = false;
  valueAxis.renderer.minLabelPosition = 0.01;

  // 1ª linha
  const series1 = chart.series.push(new am4charts.LineSeries());
  // Configuração da linha
  series1.dataFields.valueY = 'outros';
  series1.dataFields.dateX = 'year';
  series1.name = 'Outros';
  series1.stroke = am4core.color("#3A8340");

  // Configuração do texto no hover
  series1.tooltipText = '{name}: {valueY}';
  series1.tooltip.getFillFromObject = false;
  series1.tooltip.background.fill = am4core.color("#fff");
  series1.tooltip.label.fill = am4core.color("#3A8340");

  // Configuração do ponto de interesse no gráfico
  let bullet1 = series1.bullets.push(new am4charts.CircleBullet());
  bullet1.width = 10;
  bullet1.height = 10;
  bullet1.circle.fill = am4core.color("#3A8340");

  // 2ª linha
  const series2 = chart.series.push(new am4charts.LineSeries());
  // Configuração da linha
  series2.dataFields.valueY = 'cancelado';
  series2.dataFields.dateX = 'year';
  series2.name = 'Canc.';
  series2.stroke = am4core.color("#EC0000");

  // Configuração do texto no hover
  series2.tooltipText = '{name}: {valueY}';
  series2.tooltip.getFillFromObject = false;
  series2.tooltip.background.fill = am4core.color("#fff");
  series2.tooltip.label.fill = am4core.color("#EC0000");

  // Configuração do ponto de interesse no gráfico
  let bullet2 = series2.bullets.push(new am4charts.Bullet());
  bullet2.width = 10;
  bullet2.height = 10;
  bullet2.horizontalCenter = "middle";
  bullet2.verticalCenter = "middle";
  let rectangle = bullet2.createChild(am4core.Rectangle);
  rectangle.strokeWidth = 2;
  rectangle.width = 10;
  rectangle.height = 10;
  rectangle.fill = am4core.color("#EC0000");

  // 3ª linha
  const series3 = chart.series.push(new am4charts.LineSeries());
  // Configuração da linha
  series3.dataFields.valueY = 'chb';
  series3.dataFields.dateX = 'year';
  series3.name = 'CHB';
  series3.stroke = am4core.color("#3366FF");

  // Configuração do texto no hover
  series3.tooltipText = '{name}: {valueY}';
  series3.tooltip.getFillFromObject = false;
  series3.tooltip.background.fill = am4core.color("#fff");
  series3.tooltip.label.fill = am4core.color("#3366FF");

  // Configuração do ponto de interesse no gráfico
  let bullet3 = series3.bullets.push(new am4charts.Bullet());
  bullet3.width = 10;
  bullet3.height = 10;
  bullet3.horizontalCenter = "middle";
  bullet3.verticalCenter = "middle";
  let triangle = bullet3.createChild(am4core.Triangle);
  triangle.strokeWidth = 2;
  triangle.width = 10;
  triangle.height = 10;
  triangle.fill = am4core.color("#3366FF");

  // Add chart cursor
  chart.cursor = new am4charts.XYCursor();

  const hs1 = series1.segments.template.states.create('hover');
  hs1.properties.strokeWidth = 5;
  series1.segments.template.strokeWidth = 2;

  const hs2 = series2.segments.template.states.create('hover');
  hs2.properties.strokeWidth = 5;
  series2.segments.template.strokeWidth = 1;

  const hs3 = series3.segments.template.states.create('hover');
  hs3.properties.strokeWidth = 5;
  series3.segments.template.strokeWidth = 1;


  // Add legend
  chart.legend = new am4charts.Legend();
  chart.legend.position = "top";
  chart.legend.itemContainers.template.events.on('over', function (event) {
    const { segments } = event.target.dataItem.dataContext;
    segments.each(function (segment) {
      segment.isHover = true;
    });
  });

  chart.legend.itemContainers.template.events.on('out', function (event) {
    const { segments } = event.target.dataItem.dataContext;
    segments.each(function (segment) {
      segment.isHover = false;
    });
  });

  // Create a horizontal scrollbar with previe and place it underneath the date axis
  chart.scrollbarX = new am4charts.XYChartScrollbar();
  chart.scrollbarX.series.push(series1, series2, series3);
  chart.scrollbarX.parent = chart.bottomAxesContainer;


  return (
    <div id="chartdiv" style={{ width: "100%", height: "500px" }} />
  );
}

export default App;

  // // Add data

  // // Set input format for the dates
  // // Pode quebrar a formatação do gráfico -> (dd-MM-yy)
  // chart.dateFormatter.inputDateFormat = "dd-MM-yyyy";

  // // Create axes
  // let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
  // // Caso queira por uma label no eixo X
  // // dateAxis.title.text = "Data";
  // let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

  // // Create series
  // let series = chart.series.push(new am4charts.LineSeries());
  // series.dataFields.valueY = "value";
  // series.dataFields.dateX = "date";
  // series.tooltipText = "R$ {value}"
  // series.strokeWidth = 2;

  // // Controla a distância das bolinhas
  // series.minBulletDistance = 15;

  // // Mudar a cor da linha
  // series.stroke = am4core.color("#EC0000");

  // // Drop-shaped tooltips
  // // Mudar a cor do background e do text do tooltop
  // series.tooltip.getFillFromObject = false;
  // series.tooltip.background.fill = am4core.color("#fff");
  // series.tooltip.label.fill = am4core.color("#f00");

  // series.tooltip.pointerOrientation = "vertical";
  // series.tooltip.label.minWidth = 100;
  // series.tooltip.label.minHeight = 20;
  // series.tooltip.label.textAlign = "middle";
  // series.tooltip.label.textValign = "middle";


  // // Make bullets grow on hover
  // let bullet = series.bullets.push(new am4charts.CircleBullet());
  // bullet.circle.strokeWidth = 2;
  // bullet.circle.radius = 3;
  // bullet.circle.fill = am4core.color("#EC0000");


  // let bullethover = bullet.states.create("hover");
  // bullethover.properties.scale = 1.3;

  // // Make a panning cursor
  // chart.cursor = new am4charts.XYCursor();
  // chart.cursor.behavior = "panXY";
  // chart.cursor.xAxis = dateAxis;
  // chart.cursor.snapToSeries = series;

  // // Create vertical scrollbar and place it before the value axis
  // chart.scrollbarY = new am4core.Scrollbar();
  // chart.scrollbarY.parent = chart.leftAxesContainer;
  // chart.scrollbarY.toBack();

  // // Create a horizontal scrollbar with previe and place it underneath the date axis
  // chart.scrollbarX = new am4charts.XYChartScrollbar();
  // chart.scrollbarX.series.push(series);
  // chart.scrollbarX.parent = chart.bottomAxesContainer;

  // dateAxis.start = 0.79;
  // dateAxis.keepSelection = true;

  // chart.data = [{
  //   "date": "2012-07-27",
  //   "value": 13
  // }, {
  //   "date": "2012-07-28",
  //   "value": 11
  // }, {
  //   "date": "2012-07-29",
  //   "value": 15
  // }, {
  //   "date": "2012-07-30",
  //   "value": 16
  // }, {
  //   "date": "2012-07-31",
  //   "value": 18
  // }, {
  //   "date": "2012-08-01",
  //   "value": 13
  // }, {
  //   "date": "2012-08-02",
  //   "value": 22
  // }, {
  //   "date": "2012-08-03",
  //   "value": 23
  // }, {
  //   "date": "2012-08-04",
  //   "value": 20
  // }, {
  //   "date": "2012-08-05",
  //   "value": 17
  // }, {
  //   "date": "2012-08-06",
  //   "value": 16
  // }, {
  //   "date": "2012-08-07",
  //   "value": 18
  // }, {
  //   "date": "2012-08-08",
  //   "value": 21
  // }, {
  //   "date": "2012-08-09",
  //   "value": 26
  // }, {
  //   "date": "2012-08-10",
  //   "value": 24
  // }, {
  //   "date": "2012-08-11",
  //   "value": 29
  // }, {
  //   "date": "2012-08-12",
  //   "value": 32
  // }, {
  //   "date": "2012-08-13",
  //   "value": 18
  // }, {
  //   "date": "2012-08-14",
  //   "value": 24
  // }, {
  //   "date": "2012-08-15",
  //   "value": 22
  // }, {
  //   "date": "2012-08-16",
  //   "value": 18
  // }, {
  //   "date": "2012-08-17",
  //   "value": 19
  // }, {
  //   "date": "2012-08-18",
  //   "value": 14
  // }, {
  //   "date": "2012-08-19",
  //   "value": 15
  // }, {
  //   "date": "2012-08-20",
  //   "value": 12
  // }, {
  //   "date": "2012-08-21",
  //   "value": 8
  // }, {
  //   "date": "2012-08-22",
  //   "value": 9
  // }, {
  //   "date": "2012-08-23",
  //   "value": 8
  // }, {
  //   "date": "2012-08-24",
  //   "value": 7
  // }, {
  //   "date": "2012-08-25",
  //   "value": 5
  // }, {
  //   "date": "2012-08-26",
  //   "value": 11
  // }, {
  //   "date": "2012-08-27",
  //   "value": 13
  // }, {
  //   "date": "2012-08-28",
  //   "value": 18
  // }, {
  //   "date": "2012-08-29",
  //   "value": 20
  // }, {
  //   "date": "2012-08-30",
  //   "value": 29
  // }, {
  //   "date": "2012-08-31",
  //   "value": 33
  // }, {
  //   "date": "2012-09-01",
  //   "value": 42
  // }, {
  //   "date": "2012-09-02",
  //   "value": 35
  // }, {
  //   "date": "2012-09-03",
  //   "value": 31
  // }, {
  //   "date": "2012-09-04",
  //   "value": 47
  // }, {
  //   "date": "2012-09-05",
  //   "value": 52
  // }, {
  //   "date": "2012-09-06",
  //   "value": 46
  // }, {
  //   "date": "2012-09-07",
  //   "value": 41
  // }, {
  //   "date": "2012-09-08",
  //   "value": 43
  // }, {
  //   "date": "2012-09-09",
  //   "value": 40
  // }, {
  //   "date": "2012-09-10",
  //   "value": 39
  // }, {
  //   "date": "2012-09-11",
  //   "value": 34
  // }, {
  //   "date": "2012-09-12",
  //   "value": 29
  // }, {
  //   "date": "2012-09-13",
  //   "value": 34
  // }, {
  //   "date": "2012-09-14",
  //   "value": 37
  // }, {
  //   "date": "2012-09-15",
  //   "value": 42
  // }, {
  //   "date": "2012-09-16",
  //   "value": 49
  // }, {
  //   "date": "2012-09-17",
  //   "value": 46
  // }, {
  //   "date": "2012-09-18",
  //   "value": 47
  // }, {
  //   "date": "2012-09-19",
  //   "value": 55
  // }, {
  //   "date": "2012-09-20",
  //   "value": 59
  // }, {
  //   "date": "2012-09-21",
  //   "value": 58
  // }, {
  //   "date": "2012-09-22",
  //   "value": 57
  // }, {
  //   "date": "2012-09-23",
  //   "value": 61
  // }, {
  //   "date": "2012-09-24",
  //   "value": 59
  // }, {
  //   "date": "2012-09-25",
  //   "value": 67
  // }, {
  //   "date": "2012-09-26",
  //   "value": 65
  // }, {
  //   "date": "2012-09-27",
  //   "value": 61
  // }, {
  //   "date": "2012-09-28",
  //   "value": 66
  // }, {
  //   "date": "2012-09-29",
  //   "value": 69
  // }, {
  //   "date": "2012-09-30",
  //   "value": 71
  // }, {
  //   "date": "2012-10-01",
  //   "value": 67
  // }, {
  //   "date": "2012-10-02",
  //   "value": 63
  // }, {
  //   "date": "2012-10-03",
  //   "value": 46
  // }, {
  //   "date": "2012-10-04",
  //   "value": 32
  // }, {
  //   "date": "2012-10-05",
  //   "value": 21
  // }, {
  //   "date": "2012-10-06",
  //   "value": 18
  // }, {
  //   "date": "2012-10-07",
  //   "value": 21
  // }, {
  //   "date": "2012-10-08",
  //   "value": 28
  // }, {
  //   "date": "2012-10-09",
  //   "value": 27
  // }, {
  //   "date": "2012-10-10",
  //   "value": 36
  // }, {
  //   "date": "2012-10-11",
  //   "value": 33
  // }, {
  //   "date": "2012-10-12",
  //   "value": 31
  // }, {
  //   "date": "2012-10-13",
  //   "value": 30
  // }, {
  //   "date": "2012-10-14",
  //   "value": 34
  // }, {
  //   "date": "2012-10-15",
  //   "value": 38
  // }, {
  //   "date": "2012-10-16",
  //   "value": 37
  // }, {
  //   "date": "2012-10-17",
  //   "value": 44
  // }, {
  //   "date": "2012-10-18",
  //   "value": 49
  // }, {
  //   "date": "2012-10-19",
  //   "value": 53
  // }, {
  //   "date": "2012-10-20",
  //   "value": 57
  // }, {
  //   "date": "2012-10-21",
  //   "value": 60
  // }, {
  //   "date": "2012-10-22",
  //   "value": 61
  // }, {
  //   "date": "2012-10-23",
  //   "value": 69
  // }, {
  //   "date": "2012-10-24",
  //   "value": 67
  // }, {
  //   "date": "2012-10-25",
  //   "value": 72
  // }, {
  //   "date": "2012-10-26",
  //   "value": 77
  // }, {
  //   "date": "2012-10-27",
  //   "value": 75
  // }, {
  //   "date": "2012-10-28",
  //   "value": 70
  // }, {
  //   "date": "2012-10-29",
  //   "value": 72
  // }, {
  //   "date": "2012-10-30",
  //   "value": 70
  // }, {
  //   "date": "2012-10-31",
  //   "value": 72
  // }, {
  //   "date": "2012-11-01",
  //   "value": 73
  // }, {
  //   "date": "2012-11-02",
  //   "value": 67
  // }, {
  //   "date": "2012-11-03",
  //   "value": 68
  // }, {
  //   "date": "2012-11-04",
  //   "value": 65
  // }, {
  //   "date": "2012-11-05",
  //   "value": 71
  // }, {
  //   "date": "2012-11-06",
  //   "value": 75
  // }, {
  //   "date": "2012-11-07",
  //   "value": 74
  // }, {
  //   "date": "2012-11-08",
  //   "value": 71
  // }, {
  //   "date": "2012-11-09",
  //   "value": 76
  // }, {
  //   "date": "2012-11-10",
  //   "value": 77
  // }, {
  //   "date": "2012-11-11",
  //   "value": 81
  // }, {
  //   "date": "2012-11-12",
  //   "value": 83
  // }, {
  //   "date": "2012-11-13",
  //   "value": 80
  // }, {
  //   "date": "2012-11-14",
  //   "value": 81
  // }, {
  //   "date": "2012-11-15",
  //   "value": 87
  // }, {
  //   "date": "2012-11-16",
  //   "value": 82
  // }, {
  //   "date": "2012-11-17",
  //   "value": 86
  // }, {
  //   "date": "2012-11-18",
  //   "value": 80
  // }, {
  //   "date": "2012-11-19",
  //   "value": 87
  // }, {
  //   "date": "2012-11-20",
  //   "value": 83
  // }, {
  //   "date": "2012-11-21",
  //   "value": 85
  // }, {
  //   "date": "2012-11-22",
  //   "value": 84
  // }, {
  //   "date": "2012-11-23",
  //   "value": 82
  // }, {
  //   "date": "2012-11-24",
  //   "value": 73
  // }, {
  //   "date": "2012-11-25",
  //   "value": 71
  // }, {
  //   "date": "2012-11-26",
  //   "value": 75
  // }, {
  //   "date": "2012-11-27",
  //   "value": 79
  // }, {
  //   "date": "2012-11-28",
  //   "value": 70
  // }, {
  //   "date": "2012-11-29",
  //   "value": 73
  // }, {
  //   "date": "2012-11-30",
  //   "value": 61
  // }, {
  //   "date": "2012-12-01",
  //   "value": 62
  // }, {
  //   "date": "2012-12-02",
  //   "value": 66
  // }, {
  //   "date": "2012-12-03",
  //   "value": 65
  // }, {
  //   "date": "2012-12-04",
  //   "value": 73
  // }, {
  //   "date": "2012-12-05",
  //   "value": 79
  // }, {
  //   "date": "2012-12-06",
  //   "value": 78
  // }, {
  //   "date": "2012-12-07",
  //   "value": 78
  // }, {
  //   "date": "2012-12-08",
  //   "value": 78
  // }, {
  //   "date": "2012-12-09",
  //   "value": 74
  // }, {
  //   "date": "2012-12-10",
  //   "value": 73
  // }, {
  //   "date": "2012-12-11",
  //   "value": 75
  // }, {
  //   "date": "2012-12-12",
  //   "value": 70
  // }, {
  //   "date": "2012-12-13",
  //   "value": 77
  // }, {
  //   "date": "2012-12-14",
  //   "value": 67
  // }, {
  //   "date": "2012-12-15",
  //   "value": 62
  // }, {
  //   "date": "2012-12-16",
  //   "value": 64
  // }, {
  //   "date": "2012-12-17",
  //   "value": 61
  // }, {
  //   "date": "2012-12-18",
  //   "value": 59
  // }, {
  //   "date": "2012-12-19",
  //   "value": 53
  // }, {
  //   "date": "2012-12-20",
  //   "value": 54
  // }, {
  //   "date": "2012-12-21",
  //   "value": 56
  // }, {
  //   "date": "2012-12-22",
  //   "value": 59
  // }, {
  //   "date": "2012-12-23",
  //   "value": 58
  // }, {
  //   "date": "2012-12-24",
  //   "value": 55
  // }, {
  //   "date": "2012-12-25",
  //   "value": 52
  // }, {
  //   "date": "2012-12-26",
  //   "value": 54
  // }, {
  //   "date": "2012-12-27",
  //   "value": 50
  // }, {
  //   "date": "2012-12-28",
  //   "value": 50
  // }, {
  //   "date": "2012-12-29",
  //   "value": 51
  // }, {
  //   "date": "2012-12-30",
  //   "value": 52
  // }, {
  //   "date": "2012-12-31",
  //   "value": 58
  // }, {
  //   "date": "2013-01-01",
  //   "value": 60
  // }, {
  //   "date": "2013-01-02",
  //   "value": 67
  // }, {
  //   "date": "2013-01-03",
  //   "value": 64
  // }, {
  //   "date": "2013-01-04",
  //   "value": 66
  // }, {
  //   "date": "2013-01-05",
  //   "value": 60
  // }, {
  //   "date": "2013-01-06",
  //   "value": 63
  // }, {
  //   "date": "2013-01-07",
  //   "value": 61
  // }, {
  //   "date": "2013-01-08",
  //   "value": 60
  // }, {
  //   "date": "2013-01-09",
  //   "value": 65
  // }, {
  //   "date": "2013-01-10",
  //   "value": 75
  // }, {
  //   "date": "2013-01-11",
  //   "value": 77
  // }, {
  //   "date": "2013-01-12",
  //   "value": 78
  // }, {
  //   "date": "2013-01-13",
  //   "value": 70
  // }, {
  //   "date": "2013-01-14",
  //   "value": 70
  // }, {
  //   "date": "2013-01-15",
  //   "value": 73
  // }, {
  //   "date": "2013-01-16",
  //   "value": 71
  // }, {
  //   "date": "2013-01-17",
  //   "value": 74
  // }, {
  //   "date": "2013-01-18",
  //   "value": 78
  // }, {
  //   "date": "2013-01-19",
  //   "value": 85
  // }, {
  //   "date": "2013-01-20",
  //   "value": 82
  // }, {
  //   "date": "2013-01-21",
  //   "value": 83
  // }, {
  //   "date": "2013-01-22",
  //   "value": 88
  // }, {
  //   "date": "2013-01-23",
  //   "value": 85
  // }, {
  //   "date": "2013-01-24",
  //   "value": 85
  // }, {
  //   "date": "2013-01-25",
  //   "value": 80
  // }, {
  //   "date": "2013-01-26",
  //   "value": 87
  // }, {
  //   "date": "2013-01-27",
  //   "value": 84
  // }, {
  //   "date": "2013-01-28",
  //   "value": 83
  // }, {
  //   "date": "2013-01-29",
  //   "value": 84
  // }, {
  //   "date": "2013-01-30",
  //   "value": 81
  // }];
