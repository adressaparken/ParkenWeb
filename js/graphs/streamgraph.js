$(document).ready(function() {
    $.ajax({
        type: 'get',
        dataType: 'json',
        //this API request will return the average value for each sensor for every month between the 2 dates
        url: "http://parken.perseum.com:10010/v1/sensorDataByDate?start_date=2016-05-06 15:57:23&end_date=2017-05-10 20:57:23&interval=MONTH",
        success: function(result) {
            CreateD3StreamGraph(result);
        },
        error: function(error) {
            //in case of error calling API the chart will be using the bellow jason example that is a sample of the API result
            var result = [{ "sensor": "TCA", "date": "2016-05-05T22:00:00.000Z", "value": "18.29" }, { "sensor": "TCA", "date": "2016-05-31T22:00:00.000Z", "value": "280.00" }, { "sensor": "TCA", "date": "2016-06-30T22:00:00.000Z", "value": "18.68" }, { "sensor": "TCA", "date": "2016-07-31T22:00:00.000Z", "value": "280.00" }, { "sensor": "TCA", "date": "2016-08-31T22:00:00.000Z", "value": "14.58" }, { "sensor": "TCA", "date": "2016-09-30T22:00:00.000Z", "value": "10.19" }, { "sensor": "TCA", "date": "2016-10-31T23:00:00.000Z", "value": "142.58" }, { "sensor": "TCA", "date": "2016-11-30T23:00:00.000Z", "value": "0.65" }, { "sensor": "TCA", "date": "2016-12-31T23:00:00.000Z", "value": "142.58" }, { "sensor": "TCA", "date": "2017-01-31T23:00:00.000Z", "value": "280.00" }, { "sensor": "TCA", "date": "2017-02-28T23:00:00.000Z", "value": "152.58" }, { "sensor": "TCA", "date": "2017-03-31T22:00:00.000Z", "value": "140.97" }, { "sensor": "PIR", "date": "2016-05-05T22:00:00.000Z", "value": "1" }, { "sensor": "PIR", "date": "2016-05-31T22:00:00.000Z", "value": "1" }, { "sensor": "PIR", "date": "2016-06-30T22:00:00.000Z", "value": "1" }, { "sensor": "PIR", "date": "2016-07-31T22:00:00.000Z", "value": "1" }, { "sensor": "PIR", "date": "2016-08-31T22:00:00.000Z", "value": "1" }, { "sensor": "PIR", "date": "2016-09-30T22:00:00.000Z", "value": "1" }, { "sensor": "PIR", "date": "2016-10-31T23:00:00.000Z", "value": "1" }, { "sensor": "PIR", "date": "2016-11-30T23:00:00.000Z", "value": "1" }, { "sensor": "PIR", "date": "2016-12-31T23:00:00.000Z", "value": "1" }, { "sensor": "PIR", "date": "2017-01-31T23:00:00.000Z", "value": "1" }, { "sensor": "PIR", "date": "2017-02-28T23:00:00.000Z", "value": "1" }, { "sensor": "PIR", "date": "2017-03-31T22:00:00.000Z", "value": "1" }, { "sensor": "NO2", "date": "2016-05-05T22:00:00.000Z", "value": "0.177" }, { "sensor": "NO2", "date": "2016-05-31T22:00:00.000Z", "value": "0.103" }, { "sensor": "NO2", "date": "2016-06-30T22:00:00.000Z", "value": "0.081" }, { "sensor": "NO2", "date": "2016-07-31T22:00:00.000Z", "value": "0.084" }, { "sensor": "NO2", "date": "2016-08-31T22:00:00.000Z", "value": "0.068" }, { "sensor": "NO2", "date": "2016-09-30T22:00:00.000Z", "value": "0.058" }, { "sensor": "NO2", "date": "2016-10-31T23:00:00.000Z", "value": "0.048" }, { "sensor": "NO2", "date": "2016-11-30T23:00:00.000Z", "value": "0.048" }, { "sensor": "NO2", "date": "2016-12-31T23:00:00.000Z", "value": "0.052" }, { "sensor": "NO2", "date": "2017-01-31T23:00:00.000Z", "value": "0.045" }, { "sensor": "NO2", "date": "2017-02-28T23:00:00.000Z", "value": "0.048" }, { "sensor": "NO2", "date": "2017-03-31T22:00:00.000Z", "value": "0.055" }, { "sensor": "MCP", "date": "2016-05-05T22:00:00.000Z", "value": "50" }, { "sensor": "MCP", "date": "2016-05-31T22:00:00.000Z", "value": "50" }, { "sensor": "MCP", "date": "2016-06-30T22:00:00.000Z", "value": "50" }, { "sensor": "MCP", "date": "2016-07-31T22:00:00.000Z", "value": "50" }, { "sensor": "MCP", "date": "2016-08-31T22:00:00.000Z", "value": "50" }, { "sensor": "MCP", "date": "2016-09-30T22:00:00.000Z", "value": "50" }, { "sensor": "MCP", "date": "2016-10-31T23:00:00.000Z", "value": "50" }, { "sensor": "MCP", "date": "2016-11-30T23:00:00.000Z", "value": "50" }, { "sensor": "MCP", "date": "2016-12-31T23:00:00.000Z", "value": "50" }, { "sensor": "MCP", "date": "2017-01-31T23:00:00.000Z", "value": "50" }, { "sensor": "MCP", "date": "2017-02-28T23:00:00.000Z", "value": "50" }, { "sensor": "MCP", "date": "2017-03-31T22:00:00.000Z", "value": "50" }, { "sensor": "LUM", "date": "2016-05-05T22:00:00.000Z", "value": "3.304" }, { "sensor": "LUM", "date": "2016-05-31T22:00:00.000Z", "value": "219.429" }, { "sensor": "LUM", "date": "2016-06-30T22:00:00.000Z", "value": "117.964" }, { "sensor": "LUM", "date": "2016-07-31T22:00:00.000Z", "value": "1.271" }, { "sensor": "LUM", "date": "2016-08-31T22:00:00.000Z", "value": "0.587" }, { "sensor": "LUM", "date": "2016-09-30T22:00:00.000Z", "value": "583.473" }, { "sensor": "LUM", "date": "2016-10-31T23:00:00.000Z", "value": "543.815" }, { "sensor": "LUM", "date": "2016-11-30T23:00:00.000Z", "value": "1.075" }, { "sensor": "LUM", "date": "2016-12-31T23:00:00.000Z", "value": "533.282" }, { "sensor": "LUM", "date": "2017-01-31T23:00:00.000Z", "value": "1.173" }, { "sensor": "LUM", "date": "2017-02-28T23:00:00.000Z", "value": "512.809" }, { "sensor": "LUM", "date": "2017-03-31T22:00:00.000Z", "value": "672.000" }, { "sensor": "HUMA", "date": "2016-05-05T22:00:00.000Z", "value": "46.4" }, { "sensor": "HUMA", "date": "2016-05-31T22:00:00.000Z", "value": "54.9" }, { "sensor": "HUMA", "date": "2016-06-30T22:00:00.000Z", "value": "49.3" }, { "sensor": "HUMA", "date": "2016-07-31T22:00:00.000Z", "value": "61.1" }, { "sensor": "HUMA", "date": "2016-08-31T22:00:00.000Z", "value": "66.4" }, { "sensor": "HUMA", "date": "2016-09-30T22:00:00.000Z", "value": "66.2" }, { "sensor": "HUMA", "date": "2016-10-31T23:00:00.000Z", "value": "66.7" }, { "sensor": "HUMA", "date": "2016-11-30T23:00:00.000Z", "value": "65.3" }, { "sensor": "HUMA", "date": "2016-12-31T23:00:00.000Z", "value": "63.7" }, { "sensor": "HUMA", "date": "2017-01-31T23:00:00.000Z", "value": "63.9" }, { "sensor": "HUMA", "date": "2017-02-28T23:00:00.000Z", "value": "63.2" }, { "sensor": "HUMA", "date": "2017-03-31T22:00:00.000Z", "value": "63.5" }, { "sensor": "CO2", "date": "2016-05-05T22:00:00.000Z", "value": "2.494" }, { "sensor": "CO2", "date": "2016-05-31T22:00:00.000Z", "value": "2.565" }, { "sensor": "CO2", "date": "2016-06-30T22:00:00.000Z", "value": "2.613" }, { "sensor": "CO2", "date": "2016-07-31T22:00:00.000Z", "value": "2.687" }, { "sensor": "CO2", "date": "2016-08-31T22:00:00.000Z", "value": "2.719" }, { "sensor": "CO2", "date": "2016-09-30T22:00:00.000Z", "value": "2.923" }, { "sensor": "CO2", "date": "2016-10-31T23:00:00.000Z", "value": "2.603" }, { "sensor": "CO2", "date": "2016-11-30T23:00:00.000Z", "value": "2.474" }, { "sensor": "CO2", "date": "2016-12-31T23:00:00.000Z", "value": "2.465" }, { "sensor": "CO2", "date": "2017-01-31T23:00:00.000Z", "value": "2.384" }, { "sensor": "CO2", "date": "2017-02-28T23:00:00.000Z", "value": "2.616" }, { "sensor": "CO2", "date": "2017-03-31T22:00:00.000Z", "value": "2.490" }, { "sensor": "CO", "date": "2016-05-05T22:00:00.000Z", "value": "3.300" }, { "sensor": "CO", "date": "2016-05-31T22:00:00.000Z", "value": "3.300" }, { "sensor": "CO", "date": "2016-06-30T22:00:00.000Z", "value": "3.300" }, { "sensor": "CO", "date": "2016-07-31T22:00:00.000Z", "value": "3.300" }, { "sensor": "CO", "date": "2016-08-31T22:00:00.000Z", "value": "3.300" }, { "sensor": "CO", "date": "2016-09-30T22:00:00.000Z", "value": "3.300" }, { "sensor": "CO", "date": "2016-10-31T23:00:00.000Z", "value": "3.300" }, { "sensor": "CO", "date": "2016-11-30T23:00:00.000Z", "value": "3.300" }, { "sensor": "CO", "date": "2016-12-31T23:00:00.000Z", "value": "3.300" }, { "sensor": "CO", "date": "2017-01-31T23:00:00.000Z", "value": "3.300" }, { "sensor": "CO", "date": "2017-02-28T23:00:00.000Z", "value": "3.300" }, { "sensor": "CO", "date": "2017-03-31T22:00:00.000Z", "value": "3.300" }, { "sensor": "AP2", "date": "2016-05-05T22:00:00.000Z", "value": "3.300" }, { "sensor": "AP2", "date": "2016-05-31T22:00:00.000Z", "value": "3.300" }, { "sensor": "AP2", "date": "2016-06-30T22:00:00.000Z", "value": "3.300" }, { "sensor": "AP2", "date": "2016-07-31T22:00:00.000Z", "value": "3.300" }, { "sensor": "AP2", "date": "2016-08-31T22:00:00.000Z", "value": "3.300" }, { "sensor": "AP2", "date": "2016-09-30T22:00:00.000Z", "value": "3.300" }, { "sensor": "AP2", "date": "2016-10-31T23:00:00.000Z", "value": "3.300" }, { "sensor": "AP2", "date": "2016-11-30T23:00:00.000Z", "value": "3.300" }, { "sensor": "AP2", "date": "2016-12-31T23:00:00.000Z", "value": "3.300" }, { "sensor": "AP2", "date": "2017-01-31T23:00:00.000Z", "value": "3.300" }, { "sensor": "AP2", "date": "2017-02-28T23:00:00.000Z", "value": "3.300" }, { "sensor": "AP2", "date": "2017-03-31T22:00:00.000Z", "value": "3.300" }];
            CreateD3StreamGraph(result);
        }
    });

    function CreateD3StreamGraph(data) {
        margin = {
            top: 20,
            right: 0,
            bottom: 20,
            left: 0
        };

        width = $("#streamgraph").width() - margin.left - margin.right;
        height = 250 - margin.top - margin.bottom;

        colorrange = ["#51D0D7", "#31B5BB"];

        parseDate = d3.time.format("%Y-%m-%dT%H:%M:%S.%LZ").parse;

        x = d3.time.scale().range([margin.left, width]);

        y = d3.scale.linear().range([height, 0]);

        z = d3.scale.ordinal().range(colorrange);

        xAxis = d3.svg.axis()
            .scale(x)
            .orient("bottom")
            .ticks(d3.time.month);

        yAxis = d3.svg.axis().scale(y);

        nest = d3.nest()
            .key(function(d) {
                return d.sensor;
            });

        data.forEach(function(d) {
            d.date = parseDate(d.date);
            d.value = +d.value;
        });

        stack = d3.layout.stack()
            .offset("silhouette")
            .values(function(d) {
                return d.values;
            })
            .x(function(d) {
                return d.date;
            })
            .y(function(d) {
                return d.value;
            });

        layers = stack(nest.entries(data));

        area = d3.svg.area()
            .interpolate("basis")
            .x(function(d) {
                return x(d.date);
            })
            .y0(function(d) {
                return y(d.y0);
            })
            .y1(function(d) {
                return y(d.y0 + d.y);
            });

        svg = d3.select("#streamgraph").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        layers = stack(nest.entries(data));

        x.domain(d3.extent(data, function(d) {
            return d.date;
        }));
        y.domain([0, d3.max(data, function(d) {
            return d.y0 + d.y;
        })]);

        svg.selectAll(".layer")
            .data(layers)
            .enter().append("path")
            .attr("class", "layer")
            .attr("d", function(d) {
                return area(d.values);
            })
            .style("fill", function(d, i) {
                return z(i);
            });

        svg.selectAll(".layer")
            .attr("opacity", 1)
            .on("mouseover", function(d, i) {
                svg.selectAll(".layer").transition()
                    .duration(250)
                    .attr("opacity", function(d, j) {
                        return j != i ? 0.6 : 1;
                    })
            });

    }
});