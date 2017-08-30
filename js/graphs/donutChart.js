$(document).ready(function() {

    $.ajax({
        type: 'get',
        dataType: 'json',
        //this is API request will return the average value per day of each sensor between the 2 dates
        url: "http://62.92.70.116:10010/v1/sensorDataByDate?start_date=2017-05-28%2000:00:00&end_date=2017-05-28%2015:23:59&interval=DAY",
        success: function(result) {
            // in the chart we are just showing some of the sensors, so the code bellow will just select the sensors that we want and not all of them
            var dataFiltered = result.filter(function(d) {
                return d.sensor == "LUM" || d.sensor == "MCP" || d.sensor == "HUMA";
            });

            CreateDonutChart(dataFiltered);
        },
        error: function(error) {
            //in case of error calling API the chart will be using the bellow jason example that is a sample of the API result
            var dataFiltered = [{ "sensor": "TCA", "date": "2017-05-27T23:00:00.000Z", "value": 96.6 }, { "sensor": "MCP", "date": "2017-05-27T23:00:00.000Z", "value": 50 }, { "sensor": "LUM", "date": "2017-05-27T23:00:00.000Z", "value": 103.14 }, { "sensor": "HUMA", "date": "2017-05-27T23:00:00.000Z", "value": 63.72 }];
            CreateDonutChart(dataFiltered);
        }
    });

    function CreateDonutChart(dataset) {
        var pie = d3.layout.pie()
            .value(function(d) { return d.value })
            .sort(null)
            .padAngle(.03);

        var w = 250,
            h = 300;

        var outerRadius = w / 2;
        var innerRadius = 100;

        var color = d3.scale.ordinal().range(["#16193B", "#35478C", "#F07F4A", "#697DD1", "#9AD6E3"]);

        var arc = d3.svg.arc()
            .outerRadius(outerRadius)
            .innerRadius(innerRadius);

        var svg = d3.select("#donutChart")
            .append("svg")
            .attr({
                width: w,
                height: h,
                class: 'shadow'
            }).append('g')
            .attr({
                transform: 'translate(' + w / 2 + ',' + h / 2 + ')'
            });
        var path = svg.selectAll('path')
            .data(pie(dataset))
            .enter()
            .append('path')
            .attr({
                d: arc,
                fill: function(d, i) {
                    return color(d.data.sensor);
                }
            });

        path.transition()
            .duration(1000)
            .attrTween('d', function(d) {
                var interpolate = d3.interpolate({ startAngle: 0, endAngle: 0 }, d);
                return function(t) {
                    return arc(interpolate(t));
                };
            });


        var restOfTheData = function() {
            var text = svg.selectAll('text')
                .data(pie(dataset))
                .enter()
                .append("text")
                .transition()
                .duration(200)
                .attr("transform", function(d) {
                    return "translate(" + arc.centroid(d) + ")";
                })
                .attr("dy", ".4em")
                .attr("text-anchor", "middle")
                .text(function(d) {
                    return d.data.value;
                })
                .style({
                    fill: '#fff',
                    'font-size': '10px'
                });

            var legendRectSize = 20;
            var legendSpacing = 7;
            var legendHeight = legendRectSize + legendSpacing;


            var legend = svg.selectAll('.legend')
                .data(color.domain())
                .enter()
                .append('g')
                .attr({
                    class: 'legend',
                    transform: function(d, i) {
                        //Just a calculation for x & y position
                        return 'translate(-35,' + ((i * legendHeight) - 65) + ')';
                    }
                });
            legend.append('rect')
                .attr({
                    width: legendRectSize,
                    height: legendRectSize,
                    rx: 20,
                    ry: 20
                })
                .style({
                    fill: color,
                    stroke: color
                });

            legend.append('text')
                .attr({
                    x: 30,
                    y: 15
                })
                .text(function(d) {
                    return d;
                }).style({
                    fill: '#929DAF',
                    'font-size': '14px'
                });
        };
        setTimeout(restOfTheData, 1000);
    }
});