var tableArray = [];

function makeTable()
{
    // create the table and header
    var table = document.createElement("table");
    var tHeader = document.createElement("thead");
    table.appendChild(tHeader);
    table.style.borderSpacing = "0px";
    var headerRow = document.createElement("tr"); 
    
    // create the header cells
    for(var i = 0; i < 4; i++)
    {
        headerRow.appendChild(document.createElement("th"));
        var headerCell = headerRow.cells;
        headerCell[i].appendChild(document.createTextNode("Header " + (i+1)));
        headerCell[i].style.border = "thin solid";
    }
    
    // add the header row to thead
    tHeader.appendChild(headerRow);

    // create the data cells 
    var tContent = document.createElement("tBody");
    table.appendChild(tContent);
	
    
	// create a number to help with array placement
    var numAdd = 0;

     
    // create the body cells
    for(var i = 0; i < 3; i++)
    {
        var bodyRow = document.createElement("tr");
        
        // loop to creat three rows of four columns
        for(var j = 0; j < 4; j++)
        {
            // create data cells and add text
            bodyRow.appendChild(document.createElement('td'));
            bodyRow.cells[j].appendChild(document.createTextNode((j+1) + ', ' + (i+1)));
            // make all borders thin
            bodyRow.cells[j].style.border = "thin solid";
            
            // add the cell to an array
            tableArray[(numAdd + i + j)] = (bodyRow.cells[j]);
            
        }
		
        // decrement numAdd once to keep array assignment correct
        if(numAdd == 3)
        { numAdd = 2; }  
		numAdd = (numAdd + i + (j - 1));
        
        tContent.appendChild(bodyRow);
    }

    document.body.appendChild(table);
}


// call the function to create the table
makeTable();


// set location of starting selected cell
tableArray[0].style.border = "thick solid";



// create arrow buttons
function createArrows()
{
    var arrows = document.createElement("span");
    var leftArrow = document.createElement("button");
    leftArrow.textContent = "<";
	leftArrow.id = "left";
	arrows.appendChild(leftArrow);
    
    var upArrow = document.createElement("button");
    upArrow.textContent = "^";
	upArrow.id = "up";
	arrows.appendChild(upArrow);
    
    var downArrow = document.createElement("button");
    downArrow.textContent = "v";
	downArrow.id = "down";
	arrows.appendChild(downArrow);
    
    var rightArrow = document.createElement("button");
    rightArrow.textContent = ">";
	rightArrow.id = "right";		
	arrows.appendChild(rightArrow);

     
    document.body.appendChild(arrows);
}    


// call function to create arrows
createArrows();



//create functions to change active cell
// the following code was inspired by Sara Hassam's post on Piazza
function moveLeft(event)
{   
	for(var i = 0; i < tableArray.length; i++)
	{
		// disable movement if far left cells are selected
		if(tableArray[0].style.border == "thick solid")
        {  event.preventDefault(); }
    
		else if(tableArray[4].style.border == "thick solid")
        {  event.preventDefault(); }
    
		else if(tableArray[8].style.border == "thick solid")
        {  event.preventDefault(); }
		
		// otherwise, set new border to thick, and change old border to thin
		else
        {
			if(tableArray[i].style.border == "thick solid")
            {
				tableArray[(i-1)].style.border = "thick solid";
				tableArray[i].style.border = "thin solid";
			}
		}
	}
}




function moveUp(event)
{
	for(var i = 0; i < tableArray.length; i++){
		// disable movement if top cells are selected
		if(tableArray[0].style.border == "thick solid")
        {  event.preventDefault(); }
        
		else if(tableArray[1].style.border == "thick solid")
        {  event.preventDefault(); }
        
		else if(tableArray[2].style.border == "thick solid")
        {  event.preventDefault(); }
        
		else if(tableArray[3].style.border == "thick solid")
        {  event.preventDefault(); }
        
		else
        {
			// otherwise, set new border to thick, and change old border to thiny
			if(tableArray[i].style.border == "thick solid")
            {
				tableArray[(i-4)].style.border = "thick solid";
				tableArray[i].style.border = "thin solid";
			}
		}
	}
}




function moveDown(event)
{
	for(var i = (tableArray.length - 1); i > -1; i--){
		// If cells in bottom row are selected, disable button
		if(tableArray[8].style.border == "thick solid")
        {  event.preventDefault(); }
    
		else if(tableArray[9].style.border == "thick solid")
        {  event.preventDefault(); }
    
		else if(tableArray[10].style.border == "thick solid")
        {  event.preventDefault(); }
    
		else if(tableArray[11].style.border == "thick solid")
        {  event.preventDefault(); }
    
		else
        {
			// If the current cell is already selected, change border styles accordingly
			if(tableArray[i].style.border == "thick solid")
            {
				tableArray[(i+4)].style.border = "thick solid";
				tableArray[i].style.border = "thin solid";
			}
		}
	}
}




function moveRight(event)
{
	for(var i = (tableArray.length - 1); i > -1; i--)
    {
		// Disable movement if far right cells are selected
		if(tableArray[3].style.border == "thick solid")
        {  event.preventDefault(); }
        
		else if(tableArray[7].style.border == "thick solid")
        {  event.preventDefault(); }
        
		else if(tableArray[11].style.border == "thick solid")
        {  event.preventDefault(); }

		else
        {
			// // otherwise, set new border to thick, and change old border to thin
			if(tableArray[i].style.border == "thick solid")
            {
				tableArray[(i+1)].style.border = "thick solid";
				tableArray[i].style.border = "thin solid";
			}
		}
	}
}




// create the markCell button
var highlight = document.createElement("span");
var markCell = document.createElement("button");
markCell.textContent = "Mark Cell";
highlight.appendChild(markCell);
document.body.appendChild(highlight);

// create a function to turn a cell's background yellow
function makeYellow()
{
	for(var i = 0; i < tableArray.length; i++)
	{
    	if(tableArray[i].style.border == "thick solid")
    	{
     		tableArray[i].style.backgroundColor = "yellow";   
    	}   
	} 
}   

// add click events to arrows and Mark Cell button
document.getElementById("left").addEventListener("click", moveLeft);    
document.getElementById("up").addEventListener("click", moveUp);    
document.getElementById("down").addEventListener("click", moveDown);    
document.getElementById("right").addEventListener("click", moveRight);    
markCell.addEventListener("click", makeYellow);    











