$(document).ready(function() {
    $.ajax({
        type: 'get',
        dataType: 'json',
        url: "http://localhost:10010/sensorDataByDate?start_date=2016-05-07 15:57:23&end_date=2017-05-13%2015%3A57%3A23&interval=MONTH",
        success: function(result) {
            CreateD3StreamGraph(result);
        },
        error: function(error) {
            var result = [{ "sensor": "TCA", "date": "2016-05-06T23:00:00.000Z", "value": 91.60897459218471 }, { "sensor": "TCA", "date": "2016-05-31T23:00:00.000Z", "value": 82.06493595461525 }, { "sensor": "TCA", "date": "2016-06-30T23:00:00.000Z", "value": 84.84129806531871 }, { "sensor": "TCA", "date": "2016-07-31T23:00:00.000Z", "value": 84.00868260085495 }, { "sensor": "TCA", "date": "2016-08-31T23:00:00.000Z", "value": 113.8393660744092 }, { "sensor": "TCA", "date": "2016-09-30T23:00:00.000Z", "value": 108.14319013937917 }, { "sensor": "TCA", "date": "2016-11-01T00:00:00.000Z", "value": 107.9943850560023 }, { "sensor": "TCA", "date": "2016-12-01T00:00:00.000Z", "value": 107.9527659956198 }, { "sensor": "TCA", "date": "2017-01-01T00:00:00.000Z", "value": 112.44650694846425 }, { "sensor": "TCA", "date": "2017-02-01T00:00:00.000Z", "value": 108.18479704649934 }, { "sensor": "TCA", "date": "2017-03-01T00:00:00.000Z", "value": 113.35292399678092 }, { "sensor": "TCA", "date": "2017-03-31T23:00:00.000Z", "value": 121.6384901654445 }, { "sensor": "PIR", "date": "2016-05-06T23:00:00.000Z", "value": 1 }, { "sensor": "PIR", "date": "2016-05-31T23:00:00.000Z", "value": 1 }, { "sensor": "PIR", "date": "2016-06-30T23:00:00.000Z", "value": 1 }, { "sensor": "PIR", "date": "2016-07-31T23:00:00.000Z", "value": 1 }, { "sensor": "PIR", "date": "2016-08-31T23:00:00.000Z", "value": 1 }, { "sensor": "PIR", "date": "2016-09-30T23:00:00.000Z", "value": 1 }, { "sensor": "PIR", "date": "2016-11-01T00:00:00.000Z", "value": 1 }, { "sensor": "PIR", "date": "2016-12-01T00:00:00.000Z", "value": 1 }, { "sensor": "PIR", "date": "2017-01-01T00:00:00.000Z", "value": 1 }, { "sensor": "PIR", "date": "2017-02-01T00:00:00.000Z", "value": 1 }, { "sensor": "PIR", "date": "2017-03-01T00:00:00.000Z", "value": 1 }, { "sensor": "PIR", "date": "2017-03-31T23:00:00.000Z", "value": 1 }, { "sensor": "NO2", "date": "2016-05-06T23:00:00.000Z", "value": 0.09907813074941829 }, { "sensor": "NO2", "date": "2016-05-31T23:00:00.000Z", "value": 0.09227191308177987 }, { "sensor": "NO2", "date": "2016-06-30T23:00:00.000Z", "value": 0.09687198101354316 }, { "sensor": "NO2", "date": "2016-07-31T23:00:00.000Z", "value": 0.08478647741147811 }, { "sensor": "NO2", "date": "2016-08-31T23:00:00.000Z", "value": 0.07260074738415688 }, { "sensor": "NO2", "date": "2016-09-30T23:00:00.000Z", "value": 0.046441156322782916 }, { "sensor": "NO2", "date": "2016-11-01T00:00:00.000Z", "value": 0.04512153608102343 }, { "sensor": "NO2", "date": "2016-12-01T00:00:00.000Z", "value": 0.05422720457953042 }, { "sensor": "NO2", "date": "2017-01-01T00:00:00.000Z", "value": 0.05280704794916455 }, { "sensor": "NO2", "date": "2017-02-01T00:00:00.000Z", "value": 0.04800265127885188 }, { "sensor": "NO2", "date": "2017-03-01T00:00:00.000Z", "value": 0.051781014213019685 }, { "sensor": "NO2", "date": "2017-03-31T23:00:00.000Z", "value": 0.06094223505887728 }, { "sensor": "MCP", "date": "2016-05-06T23:00:00.000Z", "value": 50 }, { "sensor": "MCP", "date": "2016-05-31T23:00:00.000Z", "value": 50 }, { "sensor": "MCP", "date": "2016-06-30T23:00:00.000Z", "value": 50 }, { "sensor": "MCP", "date": "2016-07-31T23:00:00.000Z", "value": 50 }, { "sensor": "MCP", "date": "2016-08-31T23:00:00.000Z", "value": 50 }, { "sensor": "MCP", "date": "2016-09-30T23:00:00.000Z", "value": 50 }, { "sensor": "MCP", "date": "2016-11-01T00:00:00.000Z", "value": 50 }, { "sensor": "MCP", "date": "2016-12-01T00:00:00.000Z", "value": 50 }, { "sensor": "MCP", "date": "2017-01-01T00:00:00.000Z", "value": 50 }, { "sensor": "MCP", "date": "2017-02-01T00:00:00.000Z", "value": 50 }, { "sensor": "MCP", "date": "2017-03-01T00:00:00.000Z", "value": 50 }, { "sensor": "MCP", "date": "2017-03-31T23:00:00.000Z", "value": 50 }, { "sensor": "LUM", "date": "2016-05-06T23:00:00.000Z", "value": 93.31856376938973 }, { "sensor": "LUM", "date": "2016-05-31T23:00:00.000Z", "value": 63.797348998569184 }, { "sensor": "LUM", "date": "2016-06-30T23:00:00.000Z", "value": 83.64545403610795 }, { "sensor": "LUM", "date": "2016-07-31T23:00:00.000Z", "value": 130.6374519891737 }, { "sensor": "LUM", "date": "2016-08-31T23:00:00.000Z", "value": 160.91263189781293 }, { "sensor": "LUM", "date": "2016-09-30T23:00:00.000Z", "value": 161.62397954433655 }, { "sensor": "LUM", "date": "2016-11-01T00:00:00.000Z", "value": 182.60018537401766 }, { "sensor": "LUM", "date": "2016-12-01T00:00:00.000Z", "value": 189.76982737875736 }, { "sensor": "LUM", "date": "2017-01-01T00:00:00.000Z", "value": 157.84536569385753 }, { "sensor": "LUM", "date": "2017-02-01T00:00:00.000Z", "value": 149.62184463229895 }, { "sensor": "LUM", "date": "2017-03-01T00:00:00.000Z", "value": 144.0132407805853 }, { "sensor": "LUM", "date": "2017-03-31T23:00:00.000Z", "value": 131.80188297713272 }, { "sensor": "HUMA", "date": "2016-05-06T23:00:00.000Z", "value": 52.34582719685798 }, { "sensor": "HUMA", "date": "2016-05-31T23:00:00.000Z", "value": 49.92381648158953 }, { "sensor": "HUMA", "date": "2016-06-30T23:00:00.000Z", "value": 56.65023769574926 }, { "sensor": "HUMA", "date": "2016-07-31T23:00:00.000Z", "value": 61.48519817073163 }, { "sensor": "HUMA", "date": "2016-08-31T23:00:00.000Z", "value": 65.83810375670834 }, { "sensor": "HUMA", "date": "2016-09-30T23:00:00.000Z", "value": 61.80409003568479 }, { "sensor": "HUMA", "date": "2016-11-01T00:00:00.000Z", "value": 61.556582474953984 }, { "sensor": "HUMA", "date": "2016-12-01T00:00:00.000Z", "value": 65.0971397439394 }, { "sensor": "HUMA", "date": "2017-01-01T00:00:00.000Z", "value": 64.70597230236604 }, { "sensor": "HUMA", "date": "2017-02-01T00:00:00.000Z", "value": 60.20642216032185 }, { "sensor": "HUMA", "date": "2017-03-01T00:00:00.000Z", "value": 60.143027958501726 }, { "sensor": "HUMA", "date": "2017-03-31T23:00:00.000Z", "value": 60.71120122753191 }, { "sensor": "CO2", "date": "2016-05-06T23:00:00.000Z", "value": 2.556971703452186 }, { "sensor": "CO2", "date": "2016-05-31T23:00:00.000Z", "value": 2.6412054699430576 }, { "sensor": "CO2", "date": "2016-06-30T23:00:00.000Z", "value": 2.703519574868839 }, { "sensor": "CO2", "date": "2016-07-31T23:00:00.000Z", "value": 2.7394492655059755 }, { "sensor": "CO2", "date": "2016-08-31T23:00:00.000Z", "value": 2.730866584879622 }, { "sensor": "CO2", "date": "2016-09-30T23:00:00.000Z", "value": 2.610851926977703 }, { "sensor": "CO2", "date": "2016-11-01T00:00:00.000Z", "value": 2.540761185682315 }, { "sensor": "CO2", "date": "2016-12-01T00:00:00.000Z", "value": 2.5177415174020545 }, { "sensor": "CO2", "date": "2017-01-01T00:00:00.000Z", "value": 2.489892616526877 }, { "sensor": "CO2", "date": "2017-02-01T00:00:00.000Z", "value": 2.4611588959925377 }, { "sensor": "CO2", "date": "2017-03-01T00:00:00.000Z", "value": 2.4770465522257754 }, { "sensor": "CO2", "date": "2017-03-31T23:00:00.000Z", "value": 2.4981535759449067 }, { "sensor": "CO", "date": "2016-05-06T23:00:00.000Z", "value": 3.299999999999513 }, { "sensor": "CO", "date": "2016-05-31T23:00:00.000Z", "value": 3.2999999999995673 }, { "sensor": "CO", "date": "2016-06-30T23:00:00.000Z", "value": 3.299999999999558 }, { "sensor": "CO", "date": "2016-07-31T23:00:00.000Z", "value": 3.299999999999561 }, { "sensor": "CO", "date": "2016-08-31T23:00:00.000Z", "value": 3.2999999999996006 }, { "sensor": "CO", "date": "2016-09-30T23:00:00.000Z", "value": 3.299999999999561 }, { "sensor": "CO", "date": "2016-11-01T00:00:00.000Z", "value": 3.290145728642781 }, { "sensor": "CO", "date": "2016-12-01T00:00:00.000Z", "value": 3.299338246023221 }, { "sensor": "CO", "date": "2017-01-01T00:00:00.000Z", "value": 3.296196247602959 }, { "sensor": "CO", "date": "2017-02-01T00:00:00.000Z", "value": 3.278337640099236 }, { "sensor": "CO", "date": "2017-03-01T00:00:00.000Z", "value": 3.297651512957447 }, { "sensor": "CO", "date": "2017-03-31T23:00:00.000Z", "value": 3.2999999999995713 }, { "sensor": "AP2", "date": "2016-05-06T23:00:00.000Z", "value": 3.2999999999995313 }, { "sensor": "AP2", "date": "2016-05-31T23:00:00.000Z", "value": 3.299999999999584 }, { "sensor": "AP2", "date": "2016-06-30T23:00:00.000Z", "value": 3.299999999999571 }, { "sensor": "AP2", "date": "2016-07-31T23:00:00.000Z", "value": 3.2999999999995993 }, { "sensor": "AP2", "date": "2016-08-31T23:00:00.000Z", "value": 3.2999999999995877 }, { "sensor": "AP2", "date": "2016-09-30T23:00:00.000Z", "value": 3.2999999999995646 }, { "sensor": "AP2", "date": "2016-11-01T00:00:00.000Z", "value": 3.299999999999572 }, { "sensor": "AP2", "date": "2016-12-01T00:00:00.000Z", "value": 3.299999999999563 }, { "sensor": "AP2", "date": "2017-01-01T00:00:00.000Z", "value": 3.2999999999995784 }, { "sensor": "AP2", "date": "2017-02-01T00:00:00.000Z", "value": 3.2999999999996037 }, { "sensor": "AP2", "date": "2017-03-01T00:00:00.000Z", "value": 3.2999999999996446 }, { "sensor": "AP2", "date": "2017-03-31T23:00:00.000Z", "value": 3.2999999999997436 }];
            CreateD3StreamGraph(result);
        }
    });

    function CreateD3StreamGraph(data) {
        margin = {
            top: 20,
            right: 135,
            bottom: 20,
            left: 0
        };

        width = $(window).width() - margin.left - margin.right;
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