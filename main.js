const w = 1200;
const h = 600;
const marginLeft = 30;
const marginTop = 30;
const emData = [48,46,6];
const AData = [61,26,13];
const council = [73,27,0]
const txtH = 10;
var counter = 0;
var poemCounter = 0;
var slide = 0;
const poem = new Array(
    "On some deciduous decision dragged a lot",
    "in this vescent grumbling. Sleepily, flitted",
    "before it under wing and some. Here is a",
    "green which hasn’t -- undergirded already --",
    "but might… might. Slinking, cleaning, a",
    "pressed back under fresh air under fresh air",
    "under fresh air w/ out \that dread leech ribbons",
    "through stone Spined with baton, pieceworked",
    "palladium Tinted eyes and rolled down lids In",
    "sheets, a crackled crone Of delirium and lordly",
    "bids/ Para-Chrome; osteological architecture",
    "of the period from after, higher cabinets domed",
    "blowing sand through rotted glass and lead",
    "blossoms. flattened munitions for the carriers",
    "for withholding the bile drawn tracts, trading",
    "corpse for copse. Piped under thicker tracks",
    "thicker ties thicker bars, cracked visors devoid",
    "of green or hearth, flak jackets, livery clung",
    "beasts of some future burden, liquified down",
    "transplanted subdued co-opted. Rolled steam",
    "Dragged back from some acquiesced end."
);

var yBar = d3.scaleLinear()
    .domain([0, 100])       
    .range([0, h - 2*marginTop]); 

var yBarAxis = d3.scaleLinear()
    .domain([0, 100])       
    .range([h - 2*marginTop, 0]); 

var xBarAxis = d3.scaleLinear()
    .domain([0, 100])       
    .range([h - 2*marginTop, 0]); 

let svg = d3.select("#div")
    .append("svg")
    .attr("width",w + marginTop)
    .attr("height",h)
    .append("g")
    .attr("transform", "translate(" + 2*marginLeft + "," + marginTop / 2 + ")");

svg.append("text")
    .attr("class", "ylabel")
    .attr("text-anchor", "middle")
    .attr("transform", "rotate(-90)")
    .attr("y", 0 - marginTop)
    .attr("x", -(h-2*marginTop)/2)
    .text("Percent Response");   

svg.append("text")
    .attr("class", "dataOrigin")
    .attr("text-anchor", "middle")
    .attr("y", h/6)
    .attr("x", w/2)
    .attr("fill", "black")
    .text("Poll");
     
svg.call(d3.axisLeft(yBarAxis));

function makeBar(height, order, label) {
    svg.append("rect")
    .attr("width",w/4)
    .attr("height", yBar(height))
    .attr("x", w / 3 * (order - 1) + marginTop)
    .attr("y", function(d, i){
        return h - yBar(height) - 2*marginTop;
    })
    .attr("fill", "black");

    svg.append("text")
    .attr("class", "xlabels")
    .attr("text-anchor", "middle")
    .attr("x", w / 3 * (order - 1) + marginTop + w/8)
    .attr("y", h - marginTop)
    .attr("fill", "black")
    .text(label);
}

function sourceMaker(URL) {
    svg.append("text")
    .attr("class", "source")
    .attr("text-anchor", "middle")
    .attr("y", h/6 + marginTop)
    .attr("x", w/2)
    .text("Source")
    .on('click', function(d) {
        window.open(
          URL,
          '_blank' // <- This is what makes it open in a new window.
        );
    })
    .on("mouseover", () => {
        d3.selectAll(".source")
            .classed("source-hover", true)
            .classed("source", false);    
    })
    .on("mouseout", () => {
        d3.selectAll(".source-hover")
            .classed("source", true)
            .classed("source-hover", false);    
    });
}


function makeBarPoetry(height, order, label) {
    counter = 0;
    poemCounter = order * 5;
    svg.append("text")
    .attr("class", "xlabels")
    .attr("text-anchor", "middle")
    .attr("x", w / 3 * (order - 1) + marginTop + w/8)
    .attr("y", h - marginTop)
    .attr("fill", "black")
    .text(label);

    while(counter * txtH < yBar(height)) {
    svg.append("text")
    .attr("class", "poetry")
    .attr("text-anchor", "middle")
    .attr("x", w / 3 * (order - 1) + marginTop + w/8)
    .attr("y", function(d, i){
        return h - 2*marginTop - counter * txtH;
    })
    .attr("fill", "black")
    .text(poem[poemCounter%poem.length]);
    counter++;
    poemCounter++;
    }

    svg.append("text")
    .attr("class", "percentage")
    .attr("text-anchor", "middle")
    .attr("x", w / 3 * (order - 1) + marginTop + w/8)
    .attr("y", function(d, i){
        return h - 2.5*marginTop - counter * (txtH);
    })
    .attr("fill", "black")
    .text(height + "%");
}

function displayEmory() {
    d3.select("body").selectAll(".poetry").remove();
    d3.select("body").selectAll(".percentage").remove();
    d3.select("body").selectAll(".dataOrigin").text("Emory University Poll");
    makeBarPoetry(emData[0],1,"Support the APTF");
    makeBarPoetry(emData[1],2,"Against the APTF");
    makeBarPoetry(emData[2],3,"Not Sure");
    sourceMaker("https://www.documentcloud.org/documents/23712765-buckhead_survey_public-1?responsive=1&title=1");


}

function displayAtl() {
    d3.select("body").selectAll(".poetry").remove();
    d3.select("body").selectAll(".percentage").remove();
    d3.select("body").selectAll(".dataOrigin").text("City of Atlanta Poll");
    makeBarPoetry(AData[0],1,"Support the APTF");
    makeBarPoetry(AData[1],2,"Against the APTF");
    makeBarPoetry(AData[2],3,"Not Sure");
    sourceMaker("https://www.11alive.com/article/news/politics/do-69-of-atlanta-residents-support-cop-city/85-a849e26d-7989-4dc8-821c-8cc9c3175b15");
}

function displayCouncil() {
    d3.select("body").selectAll(".poetry").remove();
    d3.select("body").selectAll(".percentage").remove();
    d3.select("body").selectAll(".dataOrigin").text("Atlanta City Council Vote");
    makeBarPoetry(council[0],1,"Support APTF Construction");
    makeBarPoetry(council[1],2,"Against APTF Construction");
    makeBarPoetry(council[2],3,"Not Sure");
    sourceMaker("https://www.nytimes.com/2023/06/06/us/atlanta-cop-city-funding-vote.html");
}

document.getElementById("forward-button").addEventListener("click", function(d){
    slide++;
    if(slide == 3){
        slide--;
    }
    if(slide%3 == 0){
        displayEmory();
    } else if (slide%3 == 1) {
        displayAtl();
    } else {
        displayCouncil();
    }
});
document.getElementById("backward-button").addEventListener("click", function(d){
    slide--;
    if(slide == -1){
        slide++;
    }
    if(slide%3 == 0){
        displayEmory();
    } else if (slide%3 == 1) {
        displayAtl();
    } else {
        displayCouncil();
    }
});

displayEmory();

//bonus:
//figure out black rectangles covering em up and then retreating back deleting the texts
//make web accessible

