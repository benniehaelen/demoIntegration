import { Component, ViewEncapsulation } from '@angular/core';

import { DynoCardBaseComponent } from '@iot-edge-dynocard/features';
import { DataService, UrlManagingService } from "@iot-edge-dynocard/core";

// import * as d3 from "d3";
declare var d3;

@Component({
  selector: 'dynocard-chart',
  templateUrl: './dynocard.component.html',
  styleUrls: ['./dynocard.style.css'],
  encapsulation: ViewEncapsulation.None
})

export class DynoCardComponent extends DynoCardBaseComponent {
  chartData: any;
  //---Power Bi
  private target: HTMLElement;
  private settings: VisualSettings;
  private refoptions: VisualUpdateOptions;

  //--- SVG
  private dynoCardSvg: d3.Selection<SVGAElement>;
  private surCrdSvgGrp: d3.Selection<SVGAElement>;
  private pumpCrdSvgGrp: d3.Selection<SVGAElement>;
  private drawLineFunc: d3.svg.Line<DataPoint>;
  private svgCanvasHeight: number;

  // axis
  private xAxisGroup: d3.Selection<SVGAElement>;
  private yAxisGroupSurface: d3.Selection<SVGAElement>;
  private yAxisGroupPump: d3.Selection<SVGAElement>;
  private xAxis_Position;
  private yAxis_Load;

  private dataSet: ViewModel;
  private eventSelVal: any = 'all';
  private pumpSelVal: any = 'all';
  private eventIdDDList;
  private cardTypeDDList;
  private plotteSurfacedPath: any;
  private plottePumpPath: any;
  private isDropDownRender: boolean = false;
  private margin = { top: 100, right: 50, bottom: 80, left: 5 }
  private totalAnimationTime: number = 2000;

  constructor(private dataService: DataService, private urlManagingService: UrlManagingService) {
    super();
    this.target = options.element;

    if (typeof document !== "undefined") {
      this.target.appendChild(HtmlControl.createInitialHeader());
      let animateButton = HtmlControl.createAnimationButton(this);
      document.getElementById("buttonDiv").appendChild(animateButton);

      this.dynoCardSvg = d3.select(document.getElementById("dynoCardDiv")).append("svg").classed("dyno-svg-cls", true);

      this.surCrdSvgGrp = this.dynoCardSvg.append("g").classed("sur-svg-grp-cls", true);
      this.surCrdSvgGrp.attr({ id: "surfaceCard" });
      this.pumpCrdSvgGrp = this.dynoCardSvg.append("g").classed("pump-svg-grp-cls", true);
      this.pumpCrdSvgGrp.attr({ id: "pumpCard" });

      this.xAxisGroup = this.dynoCardSvg.append("g").classed("x-axis", true);
      this.yAxisGroupSurface = this.dynoCardSvg.append("g").classed("y-axis", true);
      this.yAxisGroupPump = this.dynoCardSvg.append("g").classed("y-axis-pump", true);
    }

    this.loadChartData()

  }

  async loadChartData() {
    await this.dataService.get(this.urlManagingService.getDynoCardSampleData).toPromise()

      .then((response) => {
        this.chartData = response;
        this.renderChart()
      })

      .catch(error => {
        console.log('DynoCardComponent.loadChartData() Error:', error);
        return error;
      });
  }

  renderChart() {


    const svg = d3.select("svg"),
      margin = { top: 20, right: 80, bottom: 30, left: 50 },
      width = svg.attr("width") - margin.left - margin.right,
      height = svg.attr("height") - margin.top - margin.bottom,
      g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    const parseTime = d3.timeParse("%Y%m%d");

    const x = d3.scaleTime().range([0, width]),
      y = d3.scaleLinear().range([height, 0]),
      z = d3.scaleOrdinal(d3.schemeCategory10);

    const line = d3.line()
      .curve(d3.curveBasis)
      .x(function (d) {
        return x(d.date);
      })
      .y(function (d) {
        return y(d.temperature);
      });

    d3.tsv("assets/data.tsv", type, function (error, data) {
      if (error) throw error;

      const cities = data.columns.slice(1).map(function (id) {
        return {
          id: id,
          values: data.map(function (d) {
            return { date: d.date, temperature: d[id] };
          })
        };
      });

      x.domain(d3.extent(data, function (d) {
        return d.date;
      }));

      y.domain([
        d3.min(cities, function (c) {
          return d3.min(c.values, function (d) {
            return d.temperature;
          });
        }),
        d3.max(cities, function (c) {
          return d3.max(c.values, function (d) {
            return d.temperature;
          });
        })
      ]);

      z.domain(cities.map(function (c) {
        return c.id;
      }));

      g.append("g")
        .attr("class", "axis axis--x")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

      g.append("g")
        .attr("class", "axis axis--y")
        .call(d3.axisLeft(y))
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", "0.71em")
        .attr("fill", "#000")
        .text("Temperature, ºF");

      const city = g.selectAll(".city")
        .data(cities)
        .enter().append("g")
        .attr("class", "city");

      city.append("path")
        .attr("class", "line")
        .attr("d", function (d) {
          return line(d.values);
        })
        .style("stroke", function (d) {
          return z(d.id);
        });

      city.append("text")
        .datum(function (d) {
          return { id: d.id, value: d.values[d.values.length - 1] };
        })
        .attr("transform", function (d) {
          return "translate(" + x(d.value.date) + "," + y(d.value.temperature) + ")";
        })
        .attr("x", 3)
        .attr("dy", "0.35em")
        .style("font", "10px sans-serif")
        .text(function (d) {
          return d.id;
        });
    });

    function type(d, _, columns) {
      d.date = parseTime(d.date);
      for (let i = 1, n = columns.length, c; i < n; ++i) d[c = columns[i]] = +d[c];
      return d;
    }


  }
}
