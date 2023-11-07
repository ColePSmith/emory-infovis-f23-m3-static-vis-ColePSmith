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
const datecodes = new Array(0,
    56,
    149,
    400,
    612,
    646,
    692,
    779,
    800,
    836,
    872,
    882
    );

const dates = new Array("4/12/2021", "6/7/2021", "9/8/2021", "5/17/2022", "12/15/2022", "1/18/2023", "3/5/2023", "5/31/2023", "6/21/2023", "7/27/2023","9/1/2023", "9/11/2023");
const descrips = new Array("Atlanta Police Foundation unveils the first renderings of the proposed training center on 150 acres of the old Atlanta Prison Farm. They include plans for shooting ranges, classrooms, recruit housing, a burn building, space for explosion tests, a kennel for canine units, and public green space.",

"Atlanta City District 12 Council member Joyce Sheperd introduces legislation authorizing the mayor to lease 150 acres of the Atlanta Prison Farm to the Atlanta Police Foundation for a new public safety training center.",

"Council votes to authorize the lease ordinance after more than 17 hours of public comment, mostly from opponents of the project. The office of former Mayor Keisha Lance Bottoms issues a press release saying the city will contribute to paying for the $90 million facility through “a 30-year $1 million per year lease starting in FY24 or a single contribution through a general obligation bond.",

"Police arrest eight protesters while attempting to clear them from part of the South River Forest. Authorities accused some of the demonstrators of throwing Molotov cocktails.",

"Police arrest and charge five protesters with domestic terrorism. A week later, crews begin demolition at Intrenchment Creek Park. A few days after that, activists return and rebuild their camps.",

"Environment activist Manuel “Tortuguita” Terán is fatally shot at least 57 times by Georgia State Patrol. Authorities stated officers returned fire after Terán shot a state trooper in the abdomen. Activists said they think the trooper was hit by “friendly fire.” Terán’s death is followed by downtown Atlanta protests. Police later arrest and charge six people with domestic terrorism after some of the demonstrators destroyed property.",

"Construction equipment is set on fire at the training center site, leading to the arrest of 35 protesters. More protesters are arrested and charged with domestic terrorism. Opponents later characterize the charges as a scare tactic designed to intimidate demonstrators. During this week, Emory Professors Leo Owens and Zachary Peskowitz fielded their poll about public opinion on the construction of Cop City. By clicking the square, you can compare the Emory poll to the poll supposedly conducted by the City of Atlanta and the actual decision made by the City Council.",

"Law enforcement officers raid an Edgewood neighborhood home reportedly owned by Network for Strong Communities nonprofit executives Marlon Scott Kautz, 39, and Adele Maclean, 42. Network for Strong Communities is affiliated with the Atlanta Solidarity Fund.\nBoth Kautz and Maclean were arrested along with Savannah D. Patterson, 30, of Savannah, Georgia. They were charged with money laundering and charity fraud in connection with an investigation of individuals accused of committing “criminal acts” at the training center’s build site and other metro Atlanta locations. The arrests sent shockwaves through the local civil rights community, drawing concern from U.S. Sens. Jon Ossoff and Raphael Warnock, as well as condemnation from leaders of several organizations that raise bail money for protesters.",

"Due to the large-scale opposition and unclear public opinion on the construction of the Atlanta Police Training Facility, a referendum vote is petitioned for. A petition is approved which, if successful, would put Cop City on the upcoming ballot and would allow the people to decide. The petition would need nearly 58,000 witnessed signatures, and these signatures would go through a rigorous screening process.",

"The people most impacted by the construction, residents of the unincorporated Dekalb County near the building site, are unable to sign the petition or help gather signatures. A judge determines that Dekalb County voters should be able to help gather petitions and extends the deadline from August 21st to September 25th.",

"An appellate court declares the previous judge’s decision incorrect and moves the deadline back to August 21st. This puts the referendum in legal limbo as it is unclear whether the petition will be valid.",

"Consistent with the judge’s decision to extend the deadline, organizers turn in boxes of signed petitions to the city. Officials then stated that because they missed the mid-August “deadline,” the nearly 116,000 signatures could not be counted. The number of collected signatures doubles the projected required amount of 58,000.");

const sources = new Array("https://atlanta.capitalbnews.org/cop-city-timeline/", "https://atlanta.capitalbnews.org/cop-city-timeline/", "https://atlanta.capitalbnews.org/cop-city-timeline/", "https://atlanta.capitalbnews.org/cop-city-timeline/", "https://atlanta.capitalbnews.org/cop-city-timeline/", "https://atlanta.capitalbnews.org/cop-city-timeline/", "https://atlanta.capitalbnews.org/cop-city-timeline/", "https://www.thenation.com/article/activism/stop-cop-city-ballot-referendum-atlanta-georgia/", "https://apnews.com/article/cop-city-voter-referendum-atlanta-56fe1f952b09d380ebfc036bd6417785/", "https://apnews.com/article/atlanta-cop-city-referendum-signatures-andre-dickens-c87580027902f9e4173f5d5e1b06aadf/", "https://apnews.com/article/atlanta-cop-city-referendum-signatures-andre-dickens-c87580027902f9e4173f5d5e1b06aadf/");




var yBar = d3.scaleLinear()
    .domain([0, 100])       
    .range([0, h - 2*marginTop]); 
var yBarAxis = d3.scaleLinear()
    .domain([0, 100])       
    .range([h - 2*marginTop, 0]); 
var xBarAxis = d3.scaleLinear()
    .domain([0, 100])       
    .range([h - 2*marginTop, 0]); 
var timeAxis = d3.scaleLinear()
    .domain([0, 882])       
    .range([0,w]); 

let svg = d3.select("#div")
    .append("svg")
    .attr("width",1.5*w + marginTop)
    .attr("height",h)
    .append("g")
    .attr("transform", "translate(" + (2*marginLeft + 100) + "," + marginTop / 2 + ")");


function buildChartBackground() {
    //TODO add info button to link to adjustable pie chart
    svg.selectAll("*").remove();

    svg.append("text")
        .attr("text-anchor", "middle")
        .attr("y", h/7)
        .attr("font-size", "50px")
        .attr("font-family", "Helvetica")
        .attr("x", w)
        .attr("fill", "black")
        .text("X")
        .on('click', function(d) {   
            buildTimeline();
        })       
    ;

    svg.append("text")
        .attr("text-anchor", "middle")
        .attr("class", "forbutton")
        .attr("font-size", "50px")
        .attr("font-family", "Helvetica")
        .attr("y", h/6)
        .attr("x", 3*w/4)
        .attr("fill", "black")
        .text(">")
        .on("mouseover", () => {
            d3.selectAll(".forbutton")
                .classed("forbutton-hover", true)
                .classed("forbutton", false);    
        })
        .on("mouseout", () => {
            d3.selectAll(".forbutton-hover")
                .classed("forbutton", true)
                .classed("forbutton-hover", false);    
        })
        .on('click', function(d) {   
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
        })       
    ;

    svg.append("text")
        .attr("text-anchor", "middle")
        .attr("class", "backbutton")
        .attr("font-size", "50px")
        .attr("font-family", "Helvetica")
        .attr("y", h/6)
        .attr("x", w/4)
        .attr("fill", "black")
        .text("<")
        .on("mouseover", () => {
            d3.selectAll(".backbutton")
                .classed("backbutton-hover", true)
                .classed("backbutton", false);    
        })
        .on("mouseout", () => {
            d3.selectAll(".backbutton-hover")
                .classed("backbutton", true)
                .classed("backbutton-hover", false);    
        })
        .on('click', function(d) {   
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
        })       
    ;
    
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
      //TODO fix this malarkey!
    //svg.call(d3.axisLeft(yBarAxis));

/*
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
    document.getElementById("backward-button")
        .addEventListener("click", function(d){
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
    */
}

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
          '_blank' 
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
    makeBarPoetry(emData[0],1,"Support APTF Construction");
    makeBarPoetry(emData[1],2,"Against APTF Construction");
    makeBarPoetry(emData[2],3,"Not Sure");
    sourceMaker("https://www.documentcloud.org/documents/23712765-buckhead_survey_public-1?responsive=1&title=1");

    svg.append("text")
        .attr("text-anchor", "middle")
        .attr("y", 0)
        .attr("font-size", "20px")
        .attr("font-family", "Courier")
        .attr("x", w/2)
        .attr("fill", "black")
        .text("Click for a Deeper Data Dive")
        .on('click', function(d) {   
            displayPie();
        })       
    ;

}

function displayAtl() {
    d3.select("body").selectAll(".poetry").remove();
    d3.select("body").selectAll(".percentage").remove();
    d3.select("body").selectAll(".dataOrigin").text("City of Atlanta Poll");
    makeBarPoetry(AData[0],1,"Support APTF Construction");
    makeBarPoetry(AData[1],2,"Against APTF Construction");
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

function pied(ag, pro, nut) {
    let stop1 = 6.28 * ag / 100;
    let stop2 = stop1 + 6.28 * nut / 100;
    svg
        .append("path")
        .attr("transform", "translate("+w/2+","+h/3+")")
        .attr("d", d3.arc()
        .innerRadius( 100 )
        .outerRadius( 180 )
        .startAngle( stop1 )    
        .endAngle( stop2 )      
        )
        .attr('stroke', 'black')
        .attr('fill', 'grey');

    svg
        .append("path")
        .attr("transform", "translate("+w/2+","+h/3+")")
        .attr("d", d3.arc()
        .innerRadius( 100 )
        .outerRadius( 180 )
        .startAngle( 0 )     
        .endAngle( stop1 )      
        )
        .attr('stroke', 'black')
        .attr('fill', 'white');

    svg
        .append("path")
        .attr("transform", "translate("+w/2+","+h/3+")")
        .attr("d", d3.arc()
        .innerRadius( 100 )
        .outerRadius( 180 )
        .startAngle( stop2 )     
        .endAngle( 6.28 )      
        )
        .attr('stroke', 'black')
        .attr('fill', 'black');
}

function displayPie() {
    //d3.select("body").selectAll(".poetry").remove();
    //d3.select("body").selectAll(".percentage").remove();
    //d3.select("body").selectAll(".dataOrigin").text("Emory University Poll");
    svg.selectAll("*").remove();

    pied(0,0,0);

    svg.append("text")
    .attr("text-anchor", "middle")
    .attr("y", h/7)
    .attr("font-size", "50px")
    .attr("font-family", "Helvetica")
    .attr("x", w)
    .attr("fill", "black")
    .text("X")
    .on('click', function(d) {   
        buildChartBackground();
        displayEmory();
    });

    svg.append("text")
        .attr("text-anchor", "middle")
        .attr("class", "filter")
        .attr("y", 3*h/4 - 10)
        .attr("x", w/2)
        .attr("fill", "black")
        .text("All Atlanta Residents")
        .on('click', function(e) {   
            pied(48,46,6);
            d3.selectAll(".filter-clicked")
                .classed("filter-clicked", false);  
            e.target.classList.add("filter-clicked");
            //e.target.classList.remove("filter");
        })       
    ;

    svg.append("text")
        .attr("text-anchor", "middle")
        .attr("class", "filter")
        .attr("y", 3*h/4 +25)
        .attr("x", w/2)
        .attr("fill", "black")
        .text("Only Buckhead Residents")
        .on('click', function(e) {   
            pied(61,32,7);
            d3.selectAll(".filter-clicked")
                .classed("filter-clicked", false);  
            e.target.classList.add("filter-clicked");
        })       
    ;

    svg.append("text")
        .attr("text-anchor", "middle")
        .attr("class", "filter")
        .attr("y", 3*h/4 +60)
        .attr("x", w/2)
        .attr("fill", "black")
        .text("Non-Buckhead Residents")
        .on('click', function(e) {   
            pied(46,48,6);
            d3.selectAll(".filter-clicked")
                .classed("filter-clicked", false);  
            e.target.classList.add("filter-clicked");
        })       
    ;

    svg.append("text")
        .attr("text-anchor", "middle")
        .attr("class", "filter")
        .attr("y", 3*h/4 +95)
        .attr("x", w/2)
        .attr("fill", "black")
        .text("Black Residents")
        .on('click', function(e) {   
            pied(44,47,9);
            d3.selectAll(".filter-clicked")
                .classed("filter-clicked", false);  
            e.target.classList.add("filter-clicked");
        })       
    ;

    svg.append("text")
        .attr("text-anchor", "middle")
        .attr("class", "filter")
        .attr("y", 3*h/4 +130)
        .attr("x", w/2)
        .attr("fill", "black")
        .text("White Residents")
        .on('click', function(e) {   
            pied(55,42,3);
            d3.selectAll(".filter-clicked")
                .classed("filter-clicked", false);  
            e.target.classList.add("filter-clicked");
        })       
    ;








    svg
        .append("text")
        .attr("class", "percentage")
        .attr("text-anchor", "end")
        .attr("transform", "translate(300,196)")
        .text("Support APTF Construction")
        .attr('fill', 'black');

        svg
        .append("text")
        .attr("class", "percentage")
        .attr("text-anchor", "end")
        .attr("transform", "translate(300,237)")
        .text("Not Sure")
        .attr('fill', 'black');

        svg
        .append("text")
        .attr("class", "percentage")
        .attr("text-anchor", "end")
        .attr("transform", "translate(300,216)")
        .text("Against APTF Construction")
        .attr('fill', 'black');

        svg
        .append("rect")
        .attr("width",15)
        .attr("height",15)
        .attr("transform", "translate(310,205)")
        .attr("stroke", "black")
        .attr("fill", "black");

        svg
        .append("rect")
        .attr("width",15)
        .attr("height",15)
        .attr("transform", "translate(310,185)")
        .attr("stroke", "black")
        .attr("fill", "white");

        svg
        .append("rect")
        .attr("width",15)
        .attr("height",15)
        .attr("transform", "translate(310,225)")
        .attr("stroke", "black")
        .attr("fill", "grey");
    
}

function buildTimeline() {
    svg.selectAll("*").remove()
    //TODO?2 desc of what to do
    //TODO?3 title card animation?
    //TODO?1 dates above/below dots
    //TODO?2 makes an indication of what slide ur on
    initInfo();
    svg
        .append("rect")
        .attr("width",w)
        .attr("height",5)
        .attr("transform", "translate(0,"+ (h - 50) +")")
        .attr("fill", "black");
    
    svg
        .append("rect")
        .attr("height", 20)
        .attr("width", 20)
        .attr("transform", "translate("+(timeAxis(datecodes[6]) - 10)+","+ (h-85) +")")
        .attr("fill", "black")
        .attr("class", "timePoint")
        .on('click', function(d) {   
            buildChartBackground();
            displayEmory();
        })
        .on("mouseover", () => {
            d3.selectAll(".timePoint")
                .classed("timePoint-hover", true)
                .classed("timePoint", false);    
        })
        .on("mouseout", () => {
            d3.selectAll(".timePoint-hover")
                .classed("timePoint", true)
                .classed("timePoint-hover", false);    
        });

    let i = 0;
    for (let i = 0; i < 12; i++) {
    svg
        .append("circle")
        .attr("r", 10)
        .attr("transform", "translate("+timeAxis(datecodes[i])+","+ (h-47) +")")
        .attr("fill", "black")
        .attr("class", "timePoint" + i + "")
        .on('click', function(d) {   
            revealInfo(i);
        })
        .on("mouseover", () => {
            d3.selectAll(".timePoint" + i + "")
                .classed("timePoint-hover", true)
                .classed("timePoint" + i + "", false);    
        })
        .on("mouseout", () => {
            d3.selectAll(".timePoint-hover")
                .classed("timePoint" + i + "", true)
                .classed("timePoint-hover", false);    
        });

    
    }
}

function wrap(text, width) {
    text.each(function () {
        var text = d3.select(this),
            words = text.text().split(/\s+/).reverse(),
            word,
            line = [],
            lineNumber = 0,
            lineHeight = 1.1, 
            x = text.attr("x"),
            y = text.attr("y"),
            dy = 0, 
            tspan = text.text(null)
                        .append("tspan")
                        .attr("x", x)
                        .attr("y", y)
                        .attr("dy", dy + "em");
        while (word = words.pop()) {
            line.push(word);
            tspan.text(line.join(" "));
            if (tspan.node().getComputedTextLength() > width) {
                line.pop();
                tspan.text(line.join(" "));
                line = [word];
                tspan = text.append("tspan")
                            .attr("x", x)
                            .attr("y", y)
                            .attr("dy", ++lineNumber * lineHeight + dy + "em")
                            .text(word);
            }
        }
    });
}

function initInfo() {

    svg
        .append("text")
        .attr("class", "descrip-title")
        .attr("x", w/2)
        .attr("y", h/4)
        .attr("text-anchor", "middle")
        .text("History of the Atlanta Police Training Facility")
    ;

    svg
        .append("text")
        .attr("class", "descrip")
        .attr("x", w/2)
        .attr("y", h/3)
        .attr("text-anchor", "middle")
        .text("by Cole Smith")
        .call(wrap, 800)
    ;

    

    svg
        .append("text")
        .attr("class", "descrip-source")
        .attr("x", w/2)
        .attr("y", h/3.5)
        .attr("text-anchor", "middle")
        .text("")
        .on('click', function(d) {
            window.open(
                //TODO replace with index and source
                "https://www.nytimes.com/2023/06/06/us/atlanta-cop-city-funding-vote.html",
              '_blank' 
            );
        })
        .on("mouseover", () => {
            d3.selectAll(".descrip-source")
                .classed("descrip-source-hover", true)
                .classed("descrip-source", false);    
        })
        .on("mouseout", () => {
            d3.selectAll(".descrip-source-hover")
                .classed("descrip-source", true)
                .classed("descrip-source-hover", false);    
        })
    ;

}

function revealInfo(index) {
    svg.selectAll(".descrip")
        .text(descrips[index])
        .call(wrap, 800)
    ;

    svg.selectAll(".descrip-title")
        .text(dates[index])
    ;

    svg.selectAll(".descrip-source")
        .text("Source")
        .on('click', function(d) {
            window.open(
                sources[index],
              '_blank' 
            );
        })
    ;

}

//buildTimeline();
buildTimeline();




//bonus:
//figure out black rectangles covering em up and then retreating back deleting the texts
//make header "type in"
