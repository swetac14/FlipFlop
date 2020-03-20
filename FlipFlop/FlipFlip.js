// for implementing game info block
var flipCounter, timer;
var divblock, blockData, blockFrontImages;

function init() {
    //initializing values    
    flipCounter = 0;
    var minutes = 2;
    var display = document.getElementById("Timer");
    blockFrontImages = ["Images/pokemon1.gif",
        "Images/pokemon2.gif",
        "Images/pokemon3.gif",
        "Images/pokemon4.gif",
        "Images/pokemon5.gif",
        "Images/pokemon6.gif",
        "Images/pokemon7.gif",
        "Images/pokemon8.gif",
        "Images/pokemon9.gif"];

    startTimer(minutes, display);
    shuffledBlocks = shuffleBlocks(blockFrontImages);
    document.getElementById("Flips").innerText = `Flips: ${flipCounter}`;
}

function shuffleBlocks(blocksArray) {
    var currentIndex = blocksArray.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
        // Pick an element from the remaining lot...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // Swap it with the current element.
        temporaryValue = blocksArray[currentIndex];
        blocksArray[currentIndex] = blocksArray[randomIndex];
        blocksArray[randomIndex] = temporaryValue;
    }
    return blocksArray;
}

