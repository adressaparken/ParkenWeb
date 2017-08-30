$(document).ready(function() {
    //when loading the page this ajax call will create the Noise(semsor=NO2) Are aChart
    $.ajax({
        type: 'get',
        dataType: 'json',
        url: "http://parken.perseum.com:10010/v1/sensorDataList?sensor=NO2&limit=100&offset=0", //this is the API url request to get the last 100 results for NO2 sensor
        success: function(result) {
            CreateNoiseAreChart(result);
        },
        error: function(error) {
            //in case of error calling API the chart will be using the bellow jason example that is a sample of the API result
            var result = [{ "sensor": "NO2", "date": "2017-05-29T13:40:18.000Z", "value": "0.094" }, { "sensor": "NO2", "date": "2017-05-29T13:34:28.000Z", "value": "0.094" }, { "sensor": "NO2", "date": "2017-05-29T13:28:35.000Z", "value": "0.090" }, { "sensor": "NO2", "date": "2017-05-29T12:59:25.000Z", "value": "0.087" }, { "sensor": "NO2", "date": "2017-05-29T12:53:35.000Z", "value": "0.090" }, { "sensor": "NO2", "date": "2017-05-29T12:30:14.000Z", "value": "0.110" }, { "sensor": "NO2", "date": "2017-05-29T12:01:04.000Z", "value": "0.087" }, { "sensor": "NO2", "date": "2017-05-29T11:55:14.000Z", "value": "0.081" }, { "sensor": "NO2", "date": "2017-05-29T11:49:24.000Z", "value": "0.077" }, { "sensor": "NO2", "date": "2017-05-29T11:37:41.000Z", "value": "0.087" }, { "sensor": "NO2", "date": "2017-05-29T11:26:01.000Z", "value": "0.087" }, { "sensor": "NO2", "date": "2017-05-29T11:20:11.000Z", "value": "0.084" }, { "sensor": "NO2", "date": "2017-05-29T11:14:21.000Z", "value": "0.084" }, { "sensor": "NO2", "date": "2017-05-29T11:02:40.000Z", "value": "0.123" }, { "sensor": "NO2", "date": "2017-05-29T10:56:51.000Z", "value": "0.084" }, { "sensor": "NO2", "date": "2017-05-29T10:51:00.000Z", "value": "0.084" }, { "sensor": "NO2", "date": "2017-05-29T10:39:20.000Z", "value": "0.081" }, { "sensor": "NO2", "date": "2017-05-29T10:33:31.000Z", "value": "0.081" }, { "sensor": "NO2", "date": "2017-05-29T10:27:41.000Z", "value": "0.077" }, { "sensor": "NO2", "date": "2017-05-29T10:21:50.000Z", "value": "0.077" }, { "sensor": "NO2", "date": "2017-05-29T10:16:00.000Z", "value": "0.081" }, { "sensor": "NO2", "date": "2017-05-29T10:10:10.000Z", "value": "0.171" }, { "sensor": "NO2", "date": "2017-05-29T10:04:20.000Z", "value": "0.081" }, { "sensor": "NO2", "date": "2017-05-29T09:46:50.000Z", "value": "0.087" }, { "sensor": "NO2", "date": "2017-05-29T09:41:00.000Z", "value": "0.084" }, { "sensor": "NO2", "date": "2017-05-29T09:35:10.000Z", "value": "0.081" }, { "sensor": "NO2", "date": "2017-05-29T09:29:20.000Z", "value": "0.081" }, { "sensor": "NO2", "date": "2017-05-29T09:23:30.000Z", "value": "0.074" }, { "sensor": "NO2", "date": "2017-05-29T09:17:40.000Z", "value": "0.181" }, { "sensor": "NO2", "date": "2017-05-29T09:11:50.000Z", "value": "0.081" }, { "sensor": "NO2", "date": "2017-05-29T09:06:00.000Z", "value": "0.084" }, { "sensor": "NO2", "date": "2017-05-29T08:54:19.000Z", "value": "0.081" }, { "sensor": "NO2", "date": "2017-05-29T08:48:30.000Z", "value": "0.084" }, { "sensor": "NO2", "date": "2017-05-29T08:42:40.000Z", "value": "0.084" }, { "sensor": "NO2", "date": "2017-05-29T08:31:00.000Z", "value": "0.084" }, { "sensor": "NO2", "date": "2017-05-29T08:25:09.000Z", "value": "0.084" }, { "sensor": "NO2", "date": "2017-05-29T08:13:29.000Z", "value": "0.081" }, { "sensor": "NO2", "date": "2017-05-29T08:07:40.000Z", "value": "0.077" }, { "sensor": "NO2", "date": "2017-05-29T08:01:49.000Z", "value": "0.084" }, { "sensor": "NO2", "date": "2017-05-29T07:55:59.000Z", "value": "0.123" }, { "sensor": "NO2", "date": "2017-05-29T07:50:09.000Z", "value": "0.084" }, { "sensor": "NO2", "date": "2017-05-29T07:32:39.000Z", "value": "0.119" }, { "sensor": "NO2", "date": "2017-05-29T07:26:49.000Z", "value": "0.077" }, { "sensor": "NO2", "date": "2017-05-29T07:20:59.000Z", "value": "0.077" }, { "sensor": "NO2", "date": "2017-05-29T07:15:09.000Z", "value": "0.081" }, { "sensor": "NO2", "date": "2017-05-29T07:09:19.000Z", "value": "0.074" }, { "sensor": "NO2", "date": "2017-05-29T07:03:29.000Z", "value": "0.077" }, { "sensor": "NO2", "date": "2017-05-29T06:57:39.000Z", "value": "0.077" }, { "sensor": "NO2", "date": "2017-05-29T06:51:49.000Z", "value": "0.077" }, { "sensor": "NO2", "date": "2017-05-29T06:45:59.000Z", "value": "0.094" }, { "sensor": "NO2", "date": "2017-05-29T06:40:09.000Z", "value": "0.071" }, { "sensor": "NO2", "date": "2017-05-29T06:34:19.000Z", "value": "0.077" }, { "sensor": "NO2", "date": "2017-05-29T06:28:29.000Z", "value": "0.077" }, { "sensor": "NO2", "date": "2017-05-29T06:22:38.000Z", "value": "0.077" }, { "sensor": "NO2", "date": "2017-05-29T06:16:49.000Z", "value": "0.077" }, { "sensor": "NO2", "date": "2017-05-29T06:10:59.000Z", "value": "0.077" }, { "sensor": "NO2", "date": "2017-05-29T06:05:08.000Z", "value": "0.074" }, { "sensor": "NO2", "date": "2017-05-29T05:59:18.000Z", "value": "0.074" }, { "sensor": "NO2", "date": "2017-05-29T05:53:25.000Z", "value": "0.074" }, { "sensor": "NO2", "date": "2017-05-29T05:47:35.000Z", "value": "0.074" }, { "sensor": "NO2", "date": "2017-05-29T05:35:55.000Z", "value": "0.106" }, { "sensor": "NO2", "date": "2017-05-29T05:30:05.000Z", "value": "0.071" }, { "sensor": "NO2", "date": "2017-05-29T05:24:15.000Z", "value": "0.074" }, { "sensor": "NO2", "date": "2017-05-29T05:18:25.000Z", "value": "0.071" }, { "sensor": "NO2", "date": "2017-05-29T05:12:35.000Z", "value": "0.074" }, { "sensor": "NO2", "date": "2017-05-29T05:00:55.000Z", "value": "0.071" }, { "sensor": "NO2", "date": "2017-05-29T04:55:05.000Z", "value": "0.074" }, { "sensor": "NO2", "date": "2017-05-29T04:43:25.000Z", "value": "0.074" }, { "sensor": "NO2", "date": "2017-05-29T04:37:35.000Z", "value": "0.077" }, { "sensor": "NO2", "date": "2017-05-29T04:31:45.000Z", "value": "0.074" }, { "sensor": "NO2", "date": "2017-05-29T04:20:05.000Z", "value": "0.071" }, { "sensor": "NO2", "date": "2017-05-29T04:08:25.000Z", "value": "0.071" }, { "sensor": "NO2", "date": "2017-05-29T04:02:35.000Z", "value": "0.074" }, { "sensor": "NO2", "date": "2017-05-29T03:56:45.000Z", "value": "0.077" }, { "sensor": "NO2", "date": "2017-05-29T03:50:54.000Z", "value": "0.074" }, { "sensor": "NO2", "date": "2017-05-29T03:45:04.000Z", "value": "0.074" }, { "sensor": "NO2", "date": "2017-05-29T03:39:14.000Z", "value": "0.077" }, { "sensor": "NO2", "date": "2017-05-29T03:15:54.000Z", "value": "0.087" }, { "sensor": "NO2", "date": "2017-05-29T03:10:04.000Z", "value": "0.077" }, { "sensor": "NO2", "date": "2017-05-29T03:04:14.000Z", "value": "0.071" }, { "sensor": "NO2", "date": "2017-05-29T02:58:24.000Z", "value": "0.077" }, { "sensor": "NO2", "date": "2017-05-29T02:52:34.000Z", "value": "0.077" }, { "sensor": "NO2", "date": "2017-05-29T02:46:44.000Z", "value": "0.077" }, { "sensor": "NO2", "date": "2017-05-29T02:40:54.000Z", "value": "0.077" }, { "sensor": "NO2", "date": "2017-05-29T02:29:14.000Z", "value": "0.077" }, { "sensor": "NO2", "date": "2017-05-29T02:23:24.000Z", "value": "0.077" }, { "sensor": "NO2", "date": "2017-05-29T02:17:34.000Z", "value": "0.077" }, { "sensor": "NO2", "date": "2017-05-29T02:05:54.000Z", "value": "0.077" }, { "sensor": "NO2", "date": "2017-05-29T02:00:04.000Z", "value": "0.074" }, { "sensor": "NO2", "date": "2017-05-29T01:54:13.000Z", "value": "0.077" }, { "sensor": "NO2", "date": "2017-05-29T01:42:34.000Z", "value": "0.074" }, { "sensor": "NO2", "date": "2017-05-29T01:36:44.000Z", "value": "0.129" }, { "sensor": "NO2", "date": "2017-05-29T01:30:53.000Z", "value": "0.081" }, { "sensor": "NO2", "date": "2017-05-29T01:25:03.000Z", "value": "0.077" }, { "sensor": "NO2", "date": "2017-05-29T01:19:13.000Z", "value": "0.077" }, { "sensor": "NO2", "date": "2017-05-29T01:13:23.000Z", "value": "0.071" }, { "sensor": "NO2", "date": "2017-05-29T01:07:33.000Z", "value": "0.171" }, { "sensor": "NO2", "date": "2017-05-29T01:01:43.000Z", "value": "0.068" }, { "sensor": "NO2", "date": "2017-05-29T00:55:53.000Z", "value": "0.077" }, { "sensor": "NO2", "date": "2017-05-29T00:50:03.000Z", "value": "0.077" }];
            CreateNoiseAreChart(result);
        }
    });

    //when loading the page this ajax call will create the luminosity(semsor=LUM) Area Chart
    $.ajax({
        type: 'get',
        dataType: 'json',
        url: "http://parken.perseum.com:10010/v1/sensorDataList?sensor=LUM&limit=100&offset=0", //this is the API url request to get the last 100 results for LUM sensor
        success: function(result) {
            CreateLumAreChart(result);
        },
        error: function(error) {
            //in case of error calling API the chart will be using the bellow jason example that is a sample of the API result
            var result = [{ "sensor": "LUM", "date": "2017-05-29T14:21:10.000Z", "value": "2.198" }, { "sensor": "LUM", "date": "2017-05-29T14:17:30.000Z", "value": "98.925" }, { "sensor": "LUM", "date": "2017-05-29T14:16:04.000Z", "value": "2.750" }, { "sensor": "LUM", "date": "2017-05-29T14:10:59.000Z", "value": "2.198" }, { "sensor": "LUM", "date": "2017-05-29T14:05:53.000Z", "value": "2.198" }, { "sensor": "LUM", "date": "2017-05-29T14:02:03.000Z", "value": "98.925" }, { "sensor": "LUM", "date": "2017-05-29T14:00:46.000Z", "value": "2.198" }, { "sensor": "LUM", "date": "2017-05-29T13:51:45.000Z", "value": "98.925" }, { "sensor": "LUM", "date": "2017-05-29T13:50:34.000Z", "value": "3.304" }, { "sensor": "LUM", "date": "2017-05-29T13:45:28.000Z", "value": "2.750" }, { "sensor": "LUM", "date": "2017-05-29T13:41:21.000Z", "value": "99.022" }, { "sensor": "LUM", "date": "2017-05-29T13:40:22.000Z", "value": "2.750" }, { "sensor": "LUM", "date": "2017-05-29T13:36:12.000Z", "value": "99.022" }, { "sensor": "LUM", "date": "2017-05-29T13:35:16.000Z", "value": "2.750" }, { "sensor": "LUM", "date": "2017-05-29T13:31:03.000Z", "value": "99.022" }, { "sensor": "LUM", "date": "2017-05-29T13:30:10.000Z", "value": "2.750" }, { "sensor": "LUM", "date": "2017-05-29T13:25:54.000Z", "value": "99.022" }, { "sensor": "LUM", "date": "2017-05-29T13:20:45.000Z", "value": "98.925" }, { "sensor": "LUM", "date": "2017-05-29T13:19:58.000Z", "value": "3.304" }, { "sensor": "LUM", "date": "2017-05-29T13:15:36.000Z", "value": "99.022" }, { "sensor": "LUM", "date": "2017-05-29T13:14:52.000Z", "value": "3.304" }, { "sensor": "LUM", "date": "2017-05-29T13:09:46.000Z", "value": "3.304" }, { "sensor": "LUM", "date": "2017-05-29T13:04:40.000Z", "value": "3.304" }, { "sensor": "LUM", "date": "2017-05-29T13:00:09.000Z", "value": "98.925" }, { "sensor": "LUM", "date": "2017-05-29T12:59:34.000Z", "value": "2.750" }, { "sensor": "LUM", "date": "2017-05-29T12:54:59.000Z", "value": "99.022" }, { "sensor": "LUM", "date": "2017-05-29T12:49:22.000Z", "value": "3.858" }, { "sensor": "LUM", "date": "2017-05-29T12:44:41.000Z", "value": "99.022" }, { "sensor": "LUM", "date": "2017-05-29T12:44:16.000Z", "value": "3.858" }, { "sensor": "LUM", "date": "2017-05-29T12:39:10.000Z", "value": "3.858" }, { "sensor": "LUM", "date": "2017-05-29T12:34:24.000Z", "value": "98.925" }, { "sensor": "LUM", "date": "2017-05-29T12:34:04.000Z", "value": "3.858" }, { "sensor": "LUM", "date": "2017-05-29T12:29:15.000Z", "value": "98.925" }, { "sensor": "LUM", "date": "2017-05-29T12:28:57.000Z", "value": "3.858" }, { "sensor": "LUM", "date": "2017-05-29T12:24:05.000Z", "value": "98.827" }, { "sensor": "LUM", "date": "2017-05-29T12:23:52.000Z", "value": "3.858" }, { "sensor": "LUM", "date": "2017-05-29T12:18:56.000Z", "value": "98.925" }, { "sensor": "LUM", "date": "2017-05-29T12:18:46.000Z", "value": "3.858" }, { "sensor": "LUM", "date": "2017-05-29T12:13:47.000Z", "value": "98.925" }, { "sensor": "LUM", "date": "2017-05-29T12:13:39.000Z", "value": "3.858" }, { "sensor": "LUM", "date": "2017-05-29T12:08:35.000Z", "value": "98.925" }, { "sensor": "LUM", "date": "2017-05-29T12:08:33.000Z", "value": "4.414" }, { "sensor": "LUM", "date": "2017-05-29T12:03:27.000Z", "value": "3.858" }, { "sensor": "LUM", "date": "2017-05-29T12:03:26.000Z", "value": "98.827" }, { "sensor": "LUM", "date": "2017-05-29T11:58:21.000Z", "value": "4.414" }, { "sensor": "LUM", "date": "2017-05-29T11:58:17.000Z", "value": "98.827" }, { "sensor": "LUM", "date": "2017-05-29T11:53:15.000Z", "value": "4.414" }, { "sensor": "LUM", "date": "2017-05-29T11:53:08.000Z", "value": "98.925" }, { "sensor": "LUM", "date": "2017-05-29T11:48:09.000Z", "value": "4.414" }, { "sensor": "LUM", "date": "2017-05-29T11:47:59.000Z", "value": "98.925" }, { "sensor": "LUM", "date": "2017-05-29T11:43:03.000Z", "value": "4.414" }, { "sensor": "LUM", "date": "2017-05-29T11:37:57.000Z", "value": "4.414" }, { "sensor": "LUM", "date": "2017-05-29T11:37:41.000Z", "value": "97.361" }, { "sensor": "LUM", "date": "2017-05-29T11:32:51.000Z", "value": "4.414" }, { "sensor": "LUM", "date": "2017-05-29T11:32:32.000Z", "value": "91.691" }, { "sensor": "LUM", "date": "2017-05-29T11:27:45.000Z", "value": "4.414" }, { "sensor": "LUM", "date": "2017-05-29T11:27:23.000Z", "value": "91.300" }, { "sensor": "LUM", "date": "2017-05-29T11:22:39.000Z", "value": "4.414" }, { "sensor": "LUM", "date": "2017-05-29T11:17:33.000Z", "value": "4.414" }, { "sensor": "LUM", "date": "2017-05-29T11:17:05.000Z", "value": "90.811" }, { "sensor": "LUM", "date": "2017-05-29T11:12:27.000Z", "value": "4.970" }, { "sensor": "LUM", "date": "2017-05-29T11:11:56.000Z", "value": "90.323" }, { "sensor": "LUM", "date": "2017-05-29T11:07:21.000Z", "value": "4.970" }, { "sensor": "LUM", "date": "2017-05-29T11:02:15.000Z", "value": "4.414" }, { "sensor": "LUM", "date": "2017-05-29T11:01:38.000Z", "value": "89.736" }, { "sensor": "LUM", "date": "2017-05-29T10:57:09.000Z", "value": "4.414" }, { "sensor": "LUM", "date": "2017-05-29T10:56:28.000Z", "value": "89.443" }, { "sensor": "LUM", "date": "2017-05-29T10:52:03.000Z", "value": "4.414" }, { "sensor": "LUM", "date": "2017-05-29T10:51:20.000Z", "value": "89.150" }, { "sensor": "LUM", "date": "2017-05-29T10:46:57.000Z", "value": "4.414" }, { "sensor": "LUM", "date": "2017-05-29T10:46:10.000Z", "value": "88.954" }, { "sensor": "LUM", "date": "2017-05-29T10:41:51.000Z", "value": "4.414" }, { "sensor": "LUM", "date": "2017-05-29T10:40:57.000Z", "value": "85.533" }, { "sensor": "LUM", "date": "2017-05-29T10:36:45.000Z", "value": "3.858" }, { "sensor": "LUM", "date": "2017-05-29T10:31:39.000Z", "value": "4.414" }, { "sensor": "LUM", "date": "2017-05-29T10:30:39.000Z", "value": "88.465" }, { "sensor": "LUM", "date": "2017-05-29T10:26:33.000Z", "value": "4.414" }, { "sensor": "LUM", "date": "2017-05-29T10:25:29.000Z", "value": "88.368" }, { "sensor": "LUM", "date": "2017-05-29T10:21:27.000Z", "value": "4.414" }, { "sensor": "LUM", "date": "2017-05-29T10:20:20.000Z", "value": "88.172" }, { "sensor": "LUM", "date": "2017-05-29T10:11:14.000Z", "value": "4.970" }, { "sensor": "LUM", "date": "2017-05-29T10:10:02.000Z", "value": "88.074" }, { "sensor": "LUM", "date": "2017-05-29T10:06:08.000Z", "value": "4.414" }, { "sensor": "LUM", "date": "2017-05-29T10:04:50.000Z", "value": "88.368" }, { "sensor": "LUM", "date": "2017-05-29T09:55:57.000Z", "value": "4.414" }, { "sensor": "LUM", "date": "2017-05-29T09:54:32.000Z", "value": "87.683" }, { "sensor": "LUM", "date": "2017-05-29T09:50:51.000Z", "value": "4.414" }, { "sensor": "LUM", "date": "2017-05-29T09:49:23.000Z", "value": "87.488" }, { "sensor": "LUM", "date": "2017-05-29T09:45:44.000Z", "value": "3.858" }, { "sensor": "LUM", "date": "2017-05-29T09:40:38.000Z", "value": "3.858" }, { "sensor": "LUM", "date": "2017-05-29T09:39:05.000Z", "value": "87.292" }, { "sensor": "LUM", "date": "2017-05-29T09:35:32.000Z", "value": "3.858" }, { "sensor": "LUM", "date": "2017-05-29T09:33:56.000Z", "value": "87.195" }, { "sensor": "LUM", "date": "2017-05-29T09:25:20.000Z", "value": "3.304" }, { "sensor": "LUM", "date": "2017-05-29T09:23:38.000Z", "value": "86.999" }, { "sensor": "LUM", "date": "2017-05-29T09:20:14.000Z", "value": "4.414" }, { "sensor": "LUM", "date": "2017-05-29T09:18:29.000Z", "value": "87.292" }, { "sensor": "LUM", "date": "2017-05-29T09:10:02.000Z", "value": "4.414" }, { "sensor": "LUM", "date": "2017-05-29T09:08:11.000Z", "value": "87.781" }, { "sensor": "LUM", "date": "2017-05-29T09:04:56.000Z", "value": "4.414" }];
            CreateLumAreChart(result);
        }
    });

    //this function creates the chart
    function CreateNoiseAreChart(data) {
        var margin = {
                top: 30,
                right: 0,
                bottom: 0,
                left: 0
            },
            width = 125 - margin.left - margin.right,
            height = 125 - margin.top - margin.bottom;

        var parseDate = d3.time.format("%Y-%m-%dT%H:%M:%S.%LZ").parse;

        var x = d3.time.scale()
            .range([0, width]);

        var y = d3.scale.linear()
            .range([height, 0]);

        var xAxis = d3.svg.axis()
            .scale(x)
            .orient("bottom");

        var yAxis = d3.svg.axis()
            .scale(y)
            .orient("left");

        var area = d3.svg.area()
            .x(function(d) {
                return x(d.date);
            })
            .y0(height)
            .y1(function(d) {
                return y(d.value);
            });

        var svg = d3.select("#areaNoise").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


        data.forEach(function(d) {
            d.date = parseDate(d.date);
            d.value = +d.value;
        });

        x.domain(d3.extent(data, function(d) {
            return d.date;
        }));
        y.domain([0, d3.max(data, function(d) {
            return d.value;
        })]);

        svg.append("path")
            .datum(data)
            .attr("class", "area")
            .attr("d", area);

        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis);

        svg.append("g")
            .attr("class", "y axis")
            .call(yAxis)
            .append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", ".71em")
            .style("text-anchor", "end")
            .text("Noise");
    }

    //this function creates the chart
    function CreateLumAreChart(data) {
        var margin = { top: 0, right: 0, bottom: 0, left: 0 },
            width = 125 - margin.left - margin.right,
            height = 125 - margin.top - margin.bottom;

        var parseDate = d3.time.format("%Y-%m-%dT%H:%M:%S.%LZ").parse;

        var x = d3.time.scale()
            .range([0, width]);

        var y = d3.scale.linear()
            .range([height, 0]);

        var xAxis = d3.svg.axis()
            .scale(x)
            .orient("bottom");

        var yAxis = d3.svg.axis()
            .scale(y)
            .orient("left");

        var area = d3.svg.area()
            .x(function(d) { return x(d.date); })
            .y0(height)
            .y1(function(d) { return y(d.value); });

        var svg = d3.select("#areaLum").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


        data.forEach(function(d) {
            d.date = parseDate(d.date);
            d.value = +d.value;
        });

        x.domain(d3.extent(data, function(d) { return d.date; }));
        y.domain([0, d3.max(data, function(d) { return d.value; })]);

        svg.append("path")
            .datum(data)
            .attr("class", "area")
            .attr("d", area);

        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis);

        svg.append("g")
            .attr("class", "y axis")
            .call(yAxis)
            .append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", ".71em")
            .style("text-anchor", "end")
            .text("LUM");
    }
});