//---------------------------------------------------queue function
queue()
    .defer(d3.csv, 'data/referendumData.csv')
    .await(makeGraphs);

//---------------------------------------------------colours/variables
var regionColors = d3.scale.ordinal()
    .domain(['dublin', 'south', 'midlands-north-west'])
    .range(['#E994AB', '#CB59E8', '#67C7E2']);

var booleanColors = d3.scale.ordinal()
    .domain(['yes', 'no'])
    .range(['#75ECFD', '#7DFDD7']);

function makeGraphs(error, referendumData) {
    var ndx = crossfilter(referendumData);

    show_national_result(ndx);
    show_turnout_per_region(ndx);
    show_constituency_vote(ndx);

    dc.renderAll();

}

//---------------------------------------------------national result pie chart
function show_national_result(ndx) {
    var national_dim = ndx.dimension(dc.pluck('voteType'));
    var total_count_ireland = national_dim.group().reduceSum(dc.pluck('voteCount'));

    dc.pieChart('#national_count')
        .radius(150)
        .dimension(national_dim)
        .group(total_count_ireland)
        .transitionDuration(500)
        .colorAccessor(function(d) {
            return d.key[2];
        })
        .colors(booleanColors)
}

//---------------------------------------------------regions result pie chart
function show_turnout_per_region(ndx) {
    var regional_dim = ndx.dimension(dc.pluck('region'));
    var turnout_count = regional_dim.group().reduceSum(dc.pluck('voteCount'));

    dc.pieChart('#regional-count')
        .radius(150)
        .innerRadius(50)
        .dimension(regional_dim)
        .group(turnout_count)
        .transitionDuration(500)
        .colorAccessor(function(d) {
            return d.key[0];
        })
        .colors(regionColors)
}

//---------------------------------------------------yes / no tally constituency result stacked chart
function show_constituency_vote(ndx) {
    var constituency_list = ndx.dimension(dc.pluck('constituency'));
    var no_count = constituency_list.group().reduceSum(function(d) {
        if (d.voteType === 'no') {
            return +d.voteCount;
        }
        else {
            return 0;
        }
    });
    var yes_count = constituency_list.group().reduceSum(function(d) {
        if (d.voteType === 'yes') {
            return +d.voteCount;
        }
        else {
            return 0;
        }
    });
    
    var total_reg = constituency_list.group().reduceSum(function(d){
        if (d.electoralRegCount >= 1) {
            return +d.electoralRegCount;
        }
        else {
            return 0;
        }
    })

    var turnout_chart = dc.barChart('#stacked_chart');
    turnout_chart
        .width(1000)
        .height(500)
        .dimension(constituency_list)
        .group(no_count, 'no vote')
        .stack(yes_count, 'yes vote')
        .stack(total_reg, 'total registered')
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .renderHorizontalGridLines(true)
        .elasticY(true)
        .on('renderlet', function(chart) {
            chart.selectAll("g.x text")
                .attr('dx', '-30')
                .attr('transform', "rotate(-30)");
        })
        .legend(dc.legend().x(420).y(0).itemHeight(15).gap(5));

    turnout_chart.margins().right = 100
    turnout_chart.margins().bottom = 50
    turnout_chart.margins().left = 100;

}

//---------------------------------------------------turnout line chart


