$(document).ready(function() {

    $.ajax({
        type: 'get',
        dataType: 'json',
        //this is API request will return the average value per day of each sensor between the 2 dates
        url: "https://adressaparken.hackheim.no/api/v1/sensorDataByDate?start_date=2017-05-28%2000:00:00&end_date=2017-05-28%2015:23:59&interval=DAY",
        success: function(result) {
            // in the chart we are just showing some of the sensors, so the code bellow will just select the sensors that we want and not all of them
            var dataFiltered = result.filter(function(d) {
                return d.sensor == "LUM" || d.sensor == "MCP" || d.sensor == "HUMA";
            });
            generate(dataFiltered, "#donutChart");
        },
        error: function(error) {
            //in case of error calling API the chart will be using the bellow jason example that is a sample of the API result
            var dataFiltered = [{ "sensor": "MCP", "date": "2017-05-27T23:00:00.000Z", "value": 50 }, { "sensor": "LUM", "date": "2017-05-27T23:00:00.000Z", "value": 103.14 }, { "sensor": "HUMA", "date": "2017-05-27T23:00:00.000Z", "value": 63.72 }];
            generate(dataFiltered, "#donutChart");
        }
    });

    function generate(data, id) {

        var category = ['LUM', 'MCP', 'HUMA'],
            cateColor = ["#0068b7", "#00b7ee", "#a5d4f3"];

        var margin = { top: 20, right: 0, bottom: 20, left: 0 },
            width = $(id).width() - margin.left - margin.right,
            height = $(id).height() - margin.top - margin.bottom;

        var radius = Math.min(width, height) / 2,
            innerRadius = radius * 0.25,
            outerRadius = radius * 0.75;

        var legendRectSize = radius / 8,
            legendSpacing = radius / 3;

        var color = d3.scale.ordinal()
            .domain(category)
            .range(cateColor);

        var formatPercent = d3.format(".0%");

        var pie = d3.layout.pie()
            .value(function(d) { return d.value; })
            .sort(null);

        var arc = d3.svg.arc()
            .innerRadius(innerRadius)
            .outerRadius(outerRadius);

        var svgX = (width + margin.right + margin.left) / 2,
            svgY = (radius * 2 + margin.top * 2) / 2;

        var svg = d3.select(id).append("svg")
            .attr("width", width + margin.right + margin.left)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + svgX + "," + svgY + ")");

        path = svg.datum(data).selectAll(".solidArc")
            .data(pie)
            .enter()
            .append("path")
            .attr("fill", function(d) {
                return color(d.data.sensor);
            })
            .attr("class", "solidArc")
            .attr("stroke", "none")
            .attr("d", arc)
            .each(function(d) {
                this._current = d;
            })
            .on('mouseover', function(d) {
                console.log(d);

                d3.select(this).transition().duration(200).attr("d", arc.innerRadius(innerRadius).outerRadius(outerRadius / 0.75 * 0.9));

                //count the sum
                var count = 0;
                for (var i = 0; i < category.length; i++) {
                    count += parseInt(data[i]['value']);
                }

                svg.append("svg:text")
                    .attr("class", "donutCenterText")
                    .attr("dy", "-.3em")
                    .attr("text-anchor", "middle")
                    .transition().duration(200)
                    .text(d['data']['sensor']);

                svg.append("svg:text")
                    .attr("class", "donutCenterText")
                    .attr("dy", ".8em")
                    .attr("text-anchor", "middle")
                    .transition().duration(200)
                    .text(formatPercent(d['value'] / count));

            })
            .on('mouseout', function(d) {
                d3.select(this).transition().duration(200).attr("d", arc.innerRadius(innerRadius).outerRadius(outerRadius));

                d3.selectAll('.donutCenterText').remove();
            });

        //legend rendering
        var legend = svg.selectAll('.legend')
            .data(color.domain())
            .enter()
            .append('g')
            .attr("id", function(d) {
                return "legend-" + d;
            })
            .attr('class', 'legend')
            .attr('transform', function(d, i) {
                var horz = (i - 1.5) * (legendSpacing + legendRectSize);
                var vert = radius + margin.bottom / 4;
                return 'translate(' + horz + ',' + vert + ')';
            });

        legend.append('rect')
            .attr('width', legendRectSize)
            .attr('height', legendRectSize)
            .style('fill', color)
            .style('stroke', color);

        legend.append('text')
            .data(data)
            .attr('x', legendRectSize * 1.2)
            .attr('y', legendRectSize / 1.3)
            .text(function(d) {
                //console.log(d);
                return d.sensor;
            });

        this.getPath = function() {
            return path;
        }

        this.getArc = function() {
            return d3.svg.arc().innerRadius(innerRadius).outerRadius(outerRadius);
        }
    }
});
