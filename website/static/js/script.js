function resetToDefault() {
    // Hide all dynamic divs
    $(" #download-buttons, #Dataview, .tab-buttons, #tabs, #loading, #submit-sentences-btn, #submit-rows-btn").addClass('hidden');
    // Clear the file input
    
    
   
       // Clear any flash messages (assuming they are present in a list and need to be removed)
       $(".flashes").empty();
   
       // Reset Sentiment Analysis and Scatter Plot divs
       $("#SentimentPlotViewPie, #SentimentPlotViewBar, #SentimentView, #SentimentTable, #scattertextIframe").empty();
       // Hide additional buttons and elements
       $("#submit-rows-btn, #loading, #tab-buttons, #tabs, #dateSlider").addClass('hidden');
       // Reset Summary Tool
       $("#chosen_ratio").val(40);
       $("#ratio-value").text('40%');
       $("#summary").empty();
   
     
       // Reset Word List and Analysis
       $("#wordDropdown").val($("#wordDropdown option:first").val());
      
      
   
       // Reset the graph container
       $("#graphContainer").empty();
   
       // Reset Search Word in the Word Tree Tab
       $("#search_word").val('');
   
       // Reset the Word Tree visualization container
       $("#wordtree_basic").empty();
       document.getElementById("myGrid").classList.add("hidden");
       document.getElementById("dateSlider").classList.add("hidden");
   
       // Reset checkboxes for PDF generation
       $(".hidden-checkbox").prop("checked", false);
   
       // Reset hidden input fields in the PDF form
       $("#sentimentField, #wordtree, #wordCloudImageSrcField, #summaryField").val('');
       //Reset display of various input options to their default state
      // Reset the dropdown contents
      $("#wordDropdown").empty();
      $("#columnLabelsContainer").empty();
      const dateSlider = document.getElementById("dateSlider");
      const dateRangeSpan = document.getElementById("dateRange");
      dateSlider.style.display = 'none';
      dateRangeSpan.style.display = 'none';

      dateRangeSpan.textContent = 'Selected Range: ';
       // Clear the grid contents
       fetchedData = null;
      
}

function getCurrentLanguage() {
    return localStorage.getItem('chosenLanguage') || 'en';
}
function readUploadedFile(fileInput, callback) {
    var file = fileInput.files[0];
    var reader = new FileReader();
    reader.onload = function(e) {
      callback(e.target.result);
    };
    reader.onerror = function(e) {
      
      if (getCurrentLanguage() === 'cy') {
        alert("Gwall wrth ddarllen ffeil");
    } else {
        alert('Error reading file');
    }
    };
    reader.readAsText(file);
  }

  function showTab(tabIndex) {
    var i;
    var tabs = document.getElementsByClassName('tab-content');
    var buttons = document.getElementsByClassName('tab-btn');
    for (i = 0; i < tabs.length; i++) {
        tabs[i].style.display = 'none';
        buttons[i].classList.remove('tab-btn-selected');
    }
    document.getElementById('tab' + tabIndex).style.display = 'block';
    buttons[tabIndex].classList.add('tab-btn-selected');
    // Check if the fifth tab is being shown and then handle WordTree data
    if('tab' + tabIndex === 'tab5') {
        handleWordTreeData( currentWordTreeData,  // Global variables
         currentSearchWord)
    }
}
function toggleInputOption(option) {
  resetToDefault()
  document.getElementById('example-options').style.display = option === 'example' ? 'block' : 'none';
  var element = document.getElementById('file-to-analyze');
    
    if (option === 'upload') {
        element.style.display = 'flex';
        element.style.alignItems = 'center';

    } else {
        element.style.display = 'none';
        
    }
  document.getElementById('text-input').style.display = option === 'text' ? 'block' : 'none';
  document.getElementById('tab-buttons').classList.add('hidden');
  document.getElementById('tabs').classList.add('hidden');
  document.getElementById('column-selection').classList.add('hidden');
  //document.getElementById('tabs').classList.add('hidden');
}

function startAnalysisfile(event) {
  event.preventDefault();
  validateForm(event, 'text');
  const inputMethod = document.querySelector('input[name="input-method"]:checked').value;
  let data = new FormData();
  if (inputMethod === 'example') {
    $("column-selection").addClass('hidden');
  } else if (inputMethod === 'upload') {
    const fileInput = document.querySelector('input[type="file"]');
    const data = new FormData();
    data.append('file', fileInput.files[0]);
    data.append('input-method', 'upload');
  
    // ... rest of the code for upload
} else if (inputMethod === 'text') {
    $("column-selection").addClass('hidden');
    const text = document.getElementById('text-to-analyze').value;

    let dataForGrid;
    if(document.querySelector('input[name="text-input-method"]:checked').value === 'Split sentences') {
        const sentences = splitIntoSentences(text);  
        dataForGrid = sentences.map(sentence => ({ Review: sentence }));
    } else { // For 'Whole Text' option
        dataForGrid = [{ Review: text }];
    }

    
    onDataFetchedBasedOnSelectedColumn(dataForGrid); 
    document.getElementById('submit-rows-btn').classList.remove('hidden');
}
}

function splitIntoSentences(text) {
return text.match(/[^\.!\?]+[\.!\?]+/g) || [];
}






function processAnalysis(text) {
  // ... analysis code ...

  sendTextToServer(text);
  document.getElementById('Dataview').classList.remove('hidden');  // Show the DataView div
  document.getElementById('submit-sentences-btn').classList.remove('hidden');  // Show the submit button
}
document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const toggleCheckbox = document.getElementById('darkModeToggleCheckbox');

    toggleCheckbox.addEventListener('change', function() {
        if (toggleCheckbox.checked) {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
        }
    });
});


  

function selectExampleData() {
    // Implement this function to handle example data selection
}

function resetUI() {
  // Hide tab buttons and tabs
  document.getElementById('tab-buttons').classList.add('hidden');
  document.getElementById('tabs').classList.add('hidden');
  document.getElementById("second-input-container").classList.add("hidden");
  
  // Optionally reset other elements like the file input or text area:
  document.querySelector('input[type="file"]').value = ''; // Clear file input
  document.getElementById('text-to-analyze').value = '';   // Clear text area
}

///capture the text
function sendTextToServer(text) {
  fetch('/fileanalysis', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'text=' + encodeURIComponent(text)
  })
  .then(response => response.json())
  .then(data => {
      displaySentences(data.sentences);
  })
  .catch((error) => {
      console.error('Error:', error);
  });
}
  
  

function displaySentences(sentences) {
  const outputDiv = document.getElementById('Dataview');
  outputDiv.innerHTML = ""; // Clear previous content
  // Create a table and its parts
  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');

  // Create table header for checkboxes and master checkbox
  const thCheckBox = document.createElement('th');  // <-- This was the missing line
  const masterCheckbox = document.createElement('input');
  masterCheckbox.type = "checkbox";
  masterCheckbox.id = "master-check";
  masterCheckbox.checked = true;
  


  // Add the event listener right after creating the checkbox
  masterCheckbox.addEventListener("change", function() {
      const isChecked = this.checked;
      const checkboxes = document.querySelectorAll('.sentence-check');
      checkboxes.forEach(cb => {
          cb.checked = isChecked;
      });
  });

  thCheckBox.appendChild(masterCheckbox);
  thead.appendChild(thCheckBox);

  

  const thNumber = document.createElement('th');
  thNumber.innerText = "#";
  thead.appendChild(thNumber);

  const thSentence = document.createElement('th');
  thSentence.innerText = "Sentences";
  thead.appendChild(thSentence);

  table.appendChild(thead);

  sentences.forEach((sentence, index) => {
      const tr = document.createElement('tr');
      
      const tdCheckBox = document.createElement('td');
      const checkBox = document.createElement('input');
      checkBox.type = "checkbox";
      checkBox.classList.add("sentence-check");
      checkBox.value = sentence;
      checkBox.checked = true;
      tdCheckBox.appendChild(checkBox);
      tr.appendChild(tdCheckBox);

      const tdNumber = document.createElement('td');
      tdNumber.innerText = index + 1;
      tr.appendChild(tdNumber);

      const tdSentence = document.createElement('td');
      tdSentence.innerText = sentence;
      tr.appendChild(tdSentence);

      tbody.appendChild(tr);
  });

  table.appendChild(tbody);
  outputDiv.appendChild(table);
}


function sendSelectedSentences() {
  const checkedBoxes = document.querySelectorAll('.sentence-check:checked');
  const selectedSentences = Array.from(checkedBoxes).map(cb => cb.value);
  const summaryElement = document.getElementById('summary');
  
  
  fetch("/process_sentences", {
      method: "POST",
      headers: {
          'Content-Type': 'application/json', 'language' : getCurrentLanguage()
      },
      body: JSON.stringify({ sentences: selectedSentences })
  })
  .then(response => response.json())
  .then(data => {
      
      if (data.status === "success") {
          //displayWordFrequencies(data);
          displayOverallSentiment(data.sentimentCounts);
          displaySentimentTable(data.sentimentData);
          //displaySentimentAnalysis(data.sentimentData, data.sentimentCounts); 
          displayPlot(data.sentimentPlotPie, 'SentimentPlotViewPie');
          displayPlot(data.sentimentPlotBar, 'SentimentPlotViewBar');
          handleWordTreeData(data.wordTreeData, data.search_word);
          populateDropdown(data.wordFrequencies)
          document.getElementById('tab-buttons').classList.remove('hidden');  // Show the tab buttons
          document.getElementById('tabs').classList.remove('hidden');  // Show the tabs content
          showTab(0);  // Automatically switch to the analysis tab
           // Display the summary in the appropriate location
  
          summaryElement.textContent = data.summary;
          document.getElementById('scattertextIframe').src = data.scatterTextHtml;

        
      } else {
          console.error("Error processing sentences:", data);
      }
  })
  .catch(error => {
      console.error("Error sending selected sentences:", error);
  });
}





let currentPagesent = 1;
let itemsPerPagesent = 10; // or whatever number you choose
let totalPagessent = 1; // This will be calculated based on data length

// Function to display the overall sentiment score and its explanation
function displayOverallSentiment(sentimentCounts) {
    const outputDiv = document.getElementById('SentimentView');
    outputDiv.innerHTML = ""; // Clear previous content
    let overallSentiment;
    let explanation ="";
    // Calculate overall sentiment
    if (getCurrentLanguage() === 'cy') {
        overallSentiment = (sentimentCounts['Cadarnhaol'] || 0) - (sentimentCounts['Negyddol'] || 0);
        
    } else {
        overallSentiment = (sentimentCounts['Positive'] || 0) - (sentimentCounts['Negative'] || 0);
    }
    const overallSentimentContainer = document.createElement('div');
    overallSentimentContainer.className = 'overall-sentiment-container'; // for styling purposes

    const sentimentScoreHeader = document.createElement('h3');
    if (getCurrentLanguage() === 'cy') {
        sentimentScoreHeader.innerText = `Sentiment cyffredinol: ${overallSentiment}`;
    } else {
        sentimentScoreHeader.innerText = `Overall sentiment: ${overallSentiment}`;
    }
    
    overallSentimentContainer.appendChild(sentimentScoreHeader);

    const sentimentExplanation = document.createElement('p');
    if (overallSentiment > 0) {
         if (getCurrentLanguage() === 'cy') {
            sentimentExplanation.innerText = `Mae'r sgôr sentiment ar gyfartaledd o ${overallSentiment} yn dangos fod  ${overallSentiment} 1 yn fwy o sentimentau cadarnhaol na rhai negyddol yn y testun penodol.  Mae hyn yn awgrymu fod sentiment y testun ar gyfartaledd yn cadarnhaol. `;
       
        } else {
            sentimentExplanation.innerText = `The overall sentiment score of ${overallSentiment} indicates that there are ${overallSentiment} more positive than negative sentiments in the given text. This suggests that the overall sentiment of the text is positive.`;
       
        }
    
    } else if (overallSentiment < 0) {
        if (getCurrentLanguage() === 'cy') {
            sentimentExplanation.innerText = `Mae'r sgôr sentiment ar gyfartaledd o ${overallSentiment} yn dangos fod  ${overallSentiment} 1 yn fwy o sentimentau negyddol na rhai cadarnhaol yn y testun penodol.  Mae hyn yn awgrymu fod sentiment y testun ar gyfartaledd yn negyddol. `;
       
        } else {
            sentimentExplanation.innerText = `The overall sentiment score of ${overallSentiment} indicates that there are ${-overallSentiment} more negative than positive sentiments in the given text. This suggests that the overall sentiment of the text is negative.`;
  
        }
          } else {
            if (getCurrentLanguage() === 'cy') {
                sentimentExplanation.innerText = `Mae'r sgôr sentiment y testun ar gyfartaledd yn niwtral. `;
           
            } else {
                sentimentExplanation.innerText = "The overall sentiment of the text is neutral.";
            }
        
    }
    overallSentimentContainer.appendChild(sentimentExplanation);

    outputDiv.appendChild(overallSentimentContainer);
    explanation = sentimentExplanation.innerText;
    document.getElementById('sentiment_explanation').value = explanation;
}


 // Define language settings for Welsh
 const welshLanguageSettings = {
    "lengthMenu": "Dangos _MENU_ cofnod",
    "zeroRecords": "Dim cofnodion wedi'u darganfod",
    "info": "Yn dangos _START_ i _END_ o _TOTAL_ cofnod",
    "infoEmpty": "Dim cofnodion ar gael",
    "infoFiltered": "(hidlwyd o _MAX_ cyfanswm cofnodion)",
    "loadingRecords": "Llwytho...",
    "processing": "Prosesu...",
    "search": "Chwilio:",
    "paginate": {
        "first":    "Cyntaf",
        "last":     "Olaf",
        "next":     "Nesaf",
        "previous": "Blaenorol"
    }
};
let currentData = []; // Global variable to hold the current subset of data

function displaySentimentTable(sentimentData) {
    const outputDiv = document.getElementById('SentimentTable');
    outputDiv.innerHTML = "";

    if (!sentimentData || sentimentData.length === 0) {
        outputDiv.innerText = "No sentiment analysis results to display.";
        return;
    }

    const tableData = document.createElement('table');
    const theadData = document.createElement('thead');
    const tbodyData = document.createElement('tbody');

    tableData.id = "data-table";
    tableData.className = "w3-table w3-bordered w3-striped w3-hoverable w3-small";


    // Define headers
    const headers = getCurrentLanguage() === 'cy' ? 
        ["Adolygiad", "Label Sentiment", "Sgôr Hyder"] :
        ["Review", "Sentiment Label", "Confidence Score"];

    // Create headers
    const tr = document.createElement('tr');
    headers.forEach(header => {
        const th = document.createElement('th');
        th.innerText = header;
        tr.appendChild(th);
    });
    theadData.appendChild(tr);

    // Add data to table body
    sentimentData.sort((a, b) => b['Sentiment Score'] - a['Sentiment Score']).forEach(row => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${row.Review}</td>
            <td>${row['Sentiment Label']}</td>
            <td>${row['Sentiment Score']}</td>
        `;
        tbodyData.appendChild(tr);
    });

    tableData.appendChild(theadData);
    tableData.appendChild(tbodyData);
    outputDiv.appendChild(tableData);

    // Initialize DataTable with language settings
    $(document).ready(function() {
        $('#data-table').DataTable({
            order: [[2, 'desc']],
            language: getCurrentLanguage() === 'cy' ? welshLanguageSettings : {}
        });
    });
}



function displayTableContent(data, tbodyElement) {
    tbodyElement.innerHTML = '';
    // Sort data based on the sentiment score in descending order
    data.sort((a, b) => b['Sentiment Score'] - a['Sentiment Score']);
    const startIdx = (currentPagesent - 1) * itemsPerPagesent;
    const endIdx = startIdx + itemsPerPagesent;

    data.slice(startIdx, endIdx).forEach(row => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${row.Review}</td>
            <td>${row['Sentiment Label']}</td>
            <td>${row['Confiedent Score']}</td>
        `;
        tbodyElement.appendChild(tr);
    });
}




function createPaginationControlsent(container, data) {
    const existingPaginationControls = container.querySelector('.pagination-controls');
    if (existingPaginationControls) {
        existingPaginationControls.remove();
    }

    const navElement = document.createElement('div');
    navElement.className = 'w3-center w3-padding-16 pagination-controls';
    
    const paginationDiv = document.createElement('div');
    paginationDiv.className = 'w3-bar';

    // Add the previous button if the current page is not the first page
    if (currentPagesent > 1) {
        const prevButton = document.createElement('a');
        prevButton.className = 'w3-button w3-hover-black';
        prevButton.innerText = '« Previous';
        prevButton.addEventListener('click', function() {
            currentPagesent--;
            displayTableContent(data, container.querySelector('tbody')); 
        });
        paginationDiv.appendChild(prevButton);
    }

    // Display current page info
    totalPagessent = Math.ceil(data.length / itemsPerPagesent);
    const pageInfo = document.createElement('span');
    pageInfo.className = 'w3-bar-item w3-border w3-padding';
    pageInfo.innerText = `Page ${currentPagesent} of ${totalPagessent}`;
    paginationDiv.appendChild(pageInfo);

    // Add the next button if the current page is not the last page
    if (currentPagesent < totalPagessent) {
        const nextButton = document.createElement('a');
        nextButton.className = 'w3-button w3-hover-black';
        nextButton.innerText = 'Next »';
        nextButton.addEventListener('click', function() {
            currentPagesent++;
            displayTableContent(data, container.querySelector('tbody')); 
        });
        paginationDiv.appendChild(nextButton);
    }

    navElement.appendChild(paginationDiv);
    container.appendChild(navElement);
}





function displayPlot(plotHtml, elementId) {
  const plotContainer = document.getElementById(elementId);
  if (plotContainer) {
      plotContainer.innerHTML = plotHtml;

      // Find and execute scripts if any
      Array.from(plotContainer.getElementsByTagName("script")).forEach(oldScript => {
          const newScript = document.createElement("script");
          Array.from(oldScript.attributes).forEach(attr => newScript.setAttribute(attr.name, attr.value));
          newScript.appendChild(document.createTextNode(oldScript.innerHTML));
          oldScript.parentNode.replaceChild(newScript, oldScript);
      });
    

  } else {
      console.error("Cannot find the", elementId, "element");
  }
  
}
function setupSelectionListener(elementId) {
    const parentDiv = document.getElementById(elementId);
    const plotDiv = parentDiv.firstElementChild; // Targeting the first child div

    if (!plotDiv) {
        console.error("Couldn't find the Plotly chart div inside:", elementId);
        return;
    }

    plotDiv.on('plotly_selected', function(eventData) {
        if (eventData) {
            const selectedData = [];
            eventData.points.forEach(point => {
                // Ensure these mappings match your data structure
                if (point.y === 'negative') {
                    const datum = {
                        Review: point.x,          // Assuming point.x corresponds to 'Review'
                        'Sentiment Label': point.y, // point.y corresponds to 'Sentiment Label'
                        'Sentiment Score': point.z  // Assuming point.z corresponds to 'Sentiment Score'
                    };
                    selectedData.push(datum);
                }
            });

            // Now call your displaySentimentTable function with the selected data
            displaySentimentTable(selectedData);
        }
    });
}




function displayWordTree(wordTreeHtml) {
  const wordTreeContainer = document.getElementById('wordTreeContainer');
  wordTreeContainer.innerHTML = wordTreeHtml;
  document.getElementById('search_word').value =search_word;
  // For dynamic script execution:
  Array.from(wordTreeContainer.getElementsByTagName("script")).forEach(oldScript => {
      const newScript = document.createElement("script");
      Array.from(oldScript.attributes).forEach(attr => newScript.setAttribute(attr.name, attr.value));
      newScript.appendChild(document.createTextNode(oldScript.innerHTML));
      oldScript.parentNode.replaceChild(newScript, oldScript);
  });
}

let currentWordTreeData;  // Global variables
let currentSearchWord;
//  get the WordTree data from Flask
function handleWordTreeData(wordTreeData, search_word) {
    currentWordTreeData = wordTreeData;
    currentSearchWord = search_word;

    document.getElementById("search_word").value = currentSearchWord;
    google.charts.load('current', { packages: ['wordtree'] });
    google.charts.setOnLoadCallback(function () {
       
        // Force a redraw after a slight delay
        setTimeout(() => {
            drawWordTree(currentWordTreeData, currentSearchWord);
        }, 200); // You can adjust this delay if needed
    });
}


function drawWordTree(wordTreeData, search_word) {
    const container = document.getElementById('wordtree_basic');



    const data = google.visualization.arrayToDataTable(wordTreeData);
    const options = {
        wordtree: {
            format: 'implicit',
            type: 'double',
            word: search_word,
            colors: ['red', 'black', 'green']
        }
    };

    setTimeout(() => {
        const chart = new google.visualization.WordTree(container);
        chart.draw(data, options);
    }, 300); // Add a slight delay

    container.offsetHeight;
}

  

document.addEventListener("DOMContentLoaded", function() {
    const searchWordInput = document.getElementById("search_word");

    // Check if the element exists
    if (!searchWordInput) {
        console.error("Element with id 'search_word' not found.");
        return;  // Exit if the element doesn't exist
    }

    // Initial drawing of the word tree after the DOM is loaded
    if (currentSearchWord && currentSearchWord.trim() !== "") {
        drawWordTree(currentWordTreeData, currentSearchWord);
    }

    // Redraw upon input changes
    searchWordInput.addEventListener("input", function() {
        let newSearchWord = this.value;
        if (newSearchWord.trim() !== "") {
            drawWordTree(currentWordTreeData, newSearchWord);
        }
    });
});




  
function startAnalysisfile_uploaded(event) {
  event.preventDefault(); // To prevent the form from submitting in the traditional way
  validateForm(event, 'upload');
  const formData = new FormData(document.getElementById("text-analysis-form"));
  
  fetch("/fileanalysis", {
      method: 'POST',
      body: formData
  })
  .then(response => response.json())
  .then(data => {
      if (data.columns) {
          populateColumns(data.columns);
      }
  })
  .catch(error => console.error('Error:', error));
}
let fetchedData = null;
function viewSelectedColumns(event) {
    document.getElementById('submit-rows-btn').classList.remove('hidden');
    if (event) event.preventDefault();

    const dropdown = document.getElementById('columns-dropdown');
    const selectedColumns = [...dropdown.options]
        .filter(option => option.selected)
        .map(option => option.value);

    if (selectedColumns.length === 0) {
       
        if (getCurrentLanguage() === 'cy') {
            alert("Ni ddewiswyd colofnau!");
        } else {
            alert("No columns selected!");
        }
    }

    fetch('/fileanalysis', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            input_method: 'columns',
            selectedColumns: selectedColumns
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.message && data.message === "Data extracted") {
            initializeAllRowsAsSelected(data.data);
            //displayDatatable(data.data);

            fetchedData = data.data;
           
            onDataFetchedBasedOnSelectedColumn(fetchedData);
            
        } else {
            console.error("Error fetching data:", data);
        }
    })
    .catch(error => {
        console.error("Error:", error);
    });
}

let currentPage = 1;
const itemsPerPage = 15;
let totalPages;
let allSelectedRows = [];
let allData = [];
let displayData = [];

function initializeAllRowsAsSelected(data) {
    allSelectedRows = data.map(row => JSON.stringify(row));
}

function displayDatatable(data) {
    allData = data; // Store the entire data for later operations
    
    // Create the basic structure for DataTable
    const tableContainer = document.getElementById('data-table-container');
    tableContainer.innerHTML = `
    <table id='data-table' class='w3-table w3-bordered w3-striped'>
        <thead></thead>
        <tbody></tbody>
        <tfoot></tfoot>
    </table>`;
    // Add tfoot structure
    const tfoot = document.getElementById('data-table').querySelector('tfoot');
    const footerRow = document.createElement('tr');
    Object.keys(data[0]).forEach(key => {
        const th = document.createElement('th');
        footerRow.appendChild(th);
    });
    tfoot.appendChild(footerRow);

    // Adding header row with checkboxes and column names
    const thead = document.getElementById('data-table').querySelector('thead');
    const headerRow = document.createElement('tr');

    // Checkbox header
    const thCheckBox = document.createElement('th');
    const masterCheckbox = document.createElement('input');
    masterCheckbox.type = "checkbox";
    masterCheckbox.id = "master-check";
    masterCheckbox.checked = true;
    masterCheckbox.addEventListener("change", function() {
        const isChecked = this.checked;
        const checkboxes = document.querySelectorAll('.data-row-check');
        checkboxes.forEach(cb => {
            cb.checked = isChecked;

            const rowString = cb.value;
            if (isChecked && !allSelectedRows.includes(rowString)) {
                allSelectedRows.push(rowString);
            } else {
                const rowIndex = allSelectedRows.indexOf(rowString);
                if (rowIndex !== -1) {
                    allSelectedRows.splice(rowIndex, 1);
                }
            }
        });
    });
    thCheckBox.appendChild(masterCheckbox);
    headerRow.appendChild(thCheckBox);

    // Column names headers
    Object.keys(data[0]).forEach(key => {
        const th = document.createElement('th');
        th.textContent = key;
        headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);

    // Initialize DataTables
    const dataTable = $('#data-table').DataTable({
        data: allData,
        columns: [
            {
                data: null,
                render: function(data, type, full) {
                    const rowString = JSON.stringify(full);
                    const isChecked = allSelectedRows.includes(rowString);
                    return `<input type="checkbox" class="data-row-check" value="${rowString}" ${isChecked ? 'checked' : ''}>`;
                },
                orderable: false
            },
            ...Object.keys(allData[0]).map(key => ({ data: key }))
        ],
        initComplete: function() {
            // Add filtering capabilities to each column
            this.api().columns().every(function() {
                const columnIndex = this.index();
                if(columnIndex === 0) return; // Skip the checkbox column
                const column = this;
                const select = $('<select><option value=""></option></select>')
                    .appendTo($(column.footer()).empty())
                    .on('change', function() {
                        const val = $.fn.dataTable.util.escapeRegex($(this).val());
                        column.search(val ? '^' + val + '$' : '', true, false).draw();
                    });
        
                column.data().unique().sort().each(function(d, j) {
                    select.append('<option value="' + d + '">' + d + '</option>');
                });
            });
        
            // Attach datepicker to any existing date input fields in footer
            $('input.date-filter').datepicker({
                changeMonth: true,
                changeYear: true,
                onSelect: function() {
                    dataTable.draw();
                }
            });
        },
        

            
        
        drawCallback: function() {
            // Update master checkbox status based on current page
            const checkboxes = document.querySelectorAll('.data-row-check');
            const allChecked = Array.from(checkboxes).every(cb => cb.checked);
            masterCheckbox.checked = allChecked;
        }
    });

    // Handle the checkbox state after draw
    $('#data-table').on('change', '.data-row-check', function() {
        const rowString = this.value;
        if (this.checked && !allSelectedRows.includes(rowString)) {
            allSelectedRows.push(rowString);
        } else {
            const index = allSelectedRows.indexOf(rowString);
            if (index !== -1) {
                allSelectedRows.splice(index, 1);
            }
        }
        const checkboxes = document.querySelectorAll('.data-row-check');
        const allChecked = Array.from(checkboxes).every(cb => cb.checked);
        masterCheckbox.checked = allChecked;
    });
}



function createPaginationControls(container, data) {
    const navElement = document.createElement('nav');
    navElement.setAttribute('aria-label', "Page navigation");

    const paginationDiv = document.createElement('div');
    paginationDiv.className = 'pagination-controls';

    if (currentPage > 1) {
        const prevButton = document.createElement('button');
        prevButton.innerText = 'Previous';
        prevButton.addEventListener('click', function() {
            currentPage--;
            displayDatatable(data);
        });
        paginationDiv.appendChild(prevButton);
    }

    const pageInfo = document.createElement('span');
    pageInfo.innerText = `Page ${currentPage} of ${totalPages}`;
    paginationDiv.appendChild(pageInfo);

    if (currentPage < totalPages) {
        const nextButton = document.createElement('button');
        nextButton.innerText = 'Next';
        nextButton.addEventListener('click', function() {
            currentPage++;
            displayDatatable(data);
        });
        paginationDiv.appendChild(nextButton);
    }

    navElement.appendChild(paginationDiv);
    container.appendChild(navElement);
}




let choicesInstance = null;
function populateColumns(columns) {
    document.getElementById('column-selection').classList.remove('hidden'); 
    const dropdownElement = document.getElementById('columns-dropdown');

    // If there's an existing Choices instance, destroy it
    if (choicesInstance) {
        choicesInstance.destroy();
        choicesInstance = null;
    }

    // Reset dropdown
    dropdownElement.innerHTML = '';
    
    // Populate options
    columns.forEach(column => {
        const option = document.createElement('option');
        option.value = column;
        option.innerText = column;
        dropdownElement.appendChild(option);
    });

    // Reinitialize Choices.js
    choicesInstance = new Choices(dropdownElement, {
        removeItemButton: true,
        allowHTML: false,
    });
}




function resetColumnSelection() {
  // Hide the main container
  document.getElementById('column-selection').style.display = 'none';

  // Clear the dropdown
  document.getElementById('columns-dropdown').innerHTML = '';

  // Clear the data table container
  document.getElementById('data-table-container').innerHTML = '';

  // Reset visibility of other inner elements
  document.getElementById('columns-container').classList.add('hidden');
}
let wordFrequencies = {};
let semantictags ={};
function sendSelectedRows() {
    // Fetch the container holding the column labels
    const container = document.getElementById("columnLabelsContainer");
    
    // Get all the spans inside the container
    const labels = container.querySelectorAll(".column-label span");

    // Check if only one column label is left
    if (labels.length !== 1) {
        if (getCurrentLanguage() === 'cy') {
            alert("Dylid sicrhau mai un golofn yn unig a ddewisir er mwyn symud ymlaen.");
        } else {
            alert("Please ensure only one column is selected to proceed.");
        }
        return;
    }
    let allNumeric = true;  // Assume all are numeric initially
let someText = false;   // To check if there's any text content

for (let i = 0; i < labels.length; i++) {
    const textContent = labels[i].textContent || labels[i].innerText;

    // Check if it's a pure number
    if (isNaN(textContent)) {
        allNumeric = false; // It's not a pure number

        // Check if it contains alphabets (text)
        if (textContent.match(/[a-zA-Z]/)) {
            someText = true;
            break; // Exit the loop since we found text
        }
    }
}

if (allNumeric) {
    alert("The columns should not contain only numbers.");
    return;
} 


   
  
    // Retrieve the column names from visible labels
    const columnLabels = Array.from(document.querySelectorAll('#columnLabelsContainer .column-label span'))
                            .map(label => label.textContent);

    // Retrieve the selected rows after any filtration in the ag-Grid
    const selectedNodes = gridOptions.api.getSelectedNodes();

    // Process the selected rows
    const selectedData = selectedNodes.map(node => {
        const data = {};
        columnLabels.forEach(column => {
            data[column] = node.data[column];
        });
        return data;
    });
        // Check if at least two rows are selected
    if (selectedNodes.length < 2) {
            
            if (getCurrentLanguage() === 'cy') {
                alert("Dewiswch o leiaf ddwy res i ddechrau dadansoddi.");
            } else {
                alert("Please select at least two rows to start the analysis.");
            }
            return;
        }
    const mergedData = selectedData.map(row => {
        return columnLabels.map(column => row[column]).join(' ');  // Merge the selected columns into one string
    });

    const selectedColumn = labels[0].textContent || labels[0].innerText;

// Check for rows with only text (alphabets)
const allNumericRows = selectedData.every(row => {
    const cellValue = row[selectedColumn];
    return typeof cellValue === 'string' && !cellValue.match(/[a-zA-Z]+/);
});

const allTextRows = selectedData.every(row => {
    const cellValue = row[selectedColumn];
    return typeof cellValue === 'string' && cellValue.match(/[a-zA-Z]+/);
});

if (allNumericRows) {
    if (getCurrentLanguage() === 'cy') {
        alert("Mae o leiaf un rhes yn y golofn a ddewiswyd yn cynnwys rhifau neu symbolau yn unig.");
    } else {
        alert("At least one row in the selected column contains only numbers or symbols.");
    }
    return;

   
}



   
    const loadingElement = document.getElementById('loading');
    loadingElement.style.display = 'flex';
    const currentLang = getCurrentLanguage();

  // Send the mergedData to the server for processing
    fetch("/process_rows", {
      method: "POST",
      headers: {
          'Content-Type':  'application/json; charset=UTF-8'
      },
      body: JSON.stringify({ mergedData: mergedData, language: currentLang })
      
  })
  .then(response => response.json())
  .then(data => {
     

      if (data.status === "success") {
        
          loadingElement.style.display = 'none';
          // Handle the response data 
          //displayWordFrequencies(data);
          displayOverallSentiment(data.sentimentCounts);
          displaySentimentTable(data.sentimentData);
          displayPlot(data.sentimentPlotPie, 'SentimentPlotViewPie');
          displayPlot(data.sentimentPlotBar, 'SentimentPlotViewBar');
          //setupSelectionListener('SentimentPlotViewPie')
          handleWordTreeData(data.wordTreeData, data.search_word);
          document.getElementById("search_word").value = data.search_word;
          populateDropdown(data.wordFrequencies)
          wordFrequencies = data.wordFrequencies
          semantictags=data.sortedUniqueTags
          document.getElementById('tab-buttons').classList.remove('hidden');  // Show the tab buttons
          document.getElementById('tabs').classList.remove('hidden');  // Show the tabs content
          showTab(0);  // Automatically switch to the analysis tab

          const summaryElement = document.getElementById('summary');
          summaryElement.textContent = data.summary;

          const iframeElem = document.getElementById('scattertextIframe');
          sendWordCloudRequest();
          iframeElem.style.opacity = 0.99;
          requestAnimationFrame(() => {
              iframeElem.src = data.scatterTextHtml + "?t=" + new Date().getTime();
          });
          document.getElementById('scattertextIframe').style.display = 'none';
          setTimeout(() => {
              document.getElementById('scattertextIframe').style.display = 'block';
          }, 50);
          iframeElem.contentWindow.location.reload(true);
          
      } else {
          loadingElement.style.display = 'none';
          console.error("Error processing rows:", data);
      }
  })
  .catch(error => {
      loadingElement.style.display = 'none';
      console.error("Error sending selected rows:", error);
  });
}



$(document).ready(function() {
    var table = $('#example').DataTable();

    // Dynamically add a search input or select box to each column footer
    table.columns().every(function() {
        var column = this;
        if (this.data().eq(0).filter(value => !isNaN(new Date(value).getDate())).length > 0) { // Date column detection
            // This is probably a date column, so we won't add a select dropdown for it
            $(column.footer()).html("");
        } else {
            var select = $('<select><option value=""></option></select>')
                .appendTo($(column.footer()).empty())
                .on('change', function() {
                    var val = $.fn.dataTable.util.escapeRegex($(this).val());
                    column.search(val ? '^' + val + '$' : '', true, false).draw();
                });

            column.data().unique().sort().each(function(d, j) {
                select.append('<option value="' + d + '">' + d + '</option>');
            });
        }
    });

    // Date range filtering logic
    $.fn.dataTable.ext.search.push(function(settings, data, dataIndex) {
        var min = $('#date_start').datepicker("getDate");
        var max = $('#date_end').datepicker("getDate");
        
        for (var i = 0; i < data.length; i++) {
            var dateData = new Date(data[i]);
            if (!isNaN(dateData.getDate())) { // Date column detection
                var dateValue = dateData;
                if ((isNaN(min) && isNaN(max)) ||
                    (isNaN(min) && dateValue <= max) ||
                    (min <= dateValue && isNaN(max)) ||
                    (min <= dateValue && dateValue <= max)) {
                    return true;
                }
                return false;
            }
        }
        return true;
    });

    $("#date_start, #date_end").datepicker({
        changeMonth: true,
        changeYear: true,
        onSelect: function() {
            table.draw();
        }
    });
});


function reloadIframe() {
  const iframe = document.getElementById('scattertextIframe');
  //iframe.src = iframe.src;
  iframe.contentWindow.location.reload(true);
}
let selectedCloudType='';
let selectedcloudmeasure='';
function sendWordCloudRequest() {
    const cloudTypeDropdown = document.querySelector('select[name="cloud_type"]');
    selectedCloudType = cloudTypeDropdown.value;
    const cloudshapeDropdown = document.querySelector('select[name="cloud_shape"]');
    const selectedCloudshape = cloudshapeDropdown.value;
    const cloudcolorDropdown = document.querySelector('select[name="cloud_outline_color"]');
    const selectedCloudcolor = cloudcolorDropdown.value;
    const cloud_measureDropdown = document.querySelector('select[name="cloud_measure"]');
    selectedcloudmeasure = cloud_measureDropdown.value;
    const wordCloudImageElement = document.getElementById('wordCloudImage');
    fetch("/generate_wordcloud", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            cloud_type: selectedCloudType,
            cloud_shape: selectedCloudshape,
            cloud_outline_color: selectedCloudcolor,
            cloud_measure:selectedcloudmeasure
        })
    })
    .then(response => response.json())
    .then(data => {
        
        wordCloudImageElement.src = data.wordcloud_image_path;
        wordCloudImageElement.style.display = 'block';  // Display the image

        // Handle word list and generate checkboxes
        const wordListContainer = document.getElementById('wordListContainer');
        wordListContainer.innerHTML = '';  // Clear any previous checkboxes

        // Create 'Select/Deselect All' checkbox
        const selectAllContainer = document.createElement('div');
        const selectAllLabel = document.createElement('label');
        const selectAllCheckbox = document.createElement('input');
        selectAllCheckbox.type = 'checkbox';
        selectAllCheckbox.onclick = function() {
        toggleCheckboxes(this.checked);
        };
    selectAllLabel.appendChild(selectAllCheckbox);
    if (getCurrentLanguage() === 'cy') {
        selectAllLabel.appendChild(document.createTextNode(" Dewis/Dad-ddewis Popeth"));
    } else {
        selectAllLabel.appendChild(document.createTextNode(" Select/Deselect All"));
    }
   
    selectAllContainer.appendChild(selectAllLabel);
    wordListContainer.appendChild(selectAllContainer);

    // Generate checkboxes for words
    data.word_list.forEach(word => {
    
    const wordContainer = document.createElement('div');
    const label = document.createElement('label');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.value = word;
    checkbox.checked = true;
    checkbox.className = 'word-checkbox';  
    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(` ${word}`));
    wordContainer.appendChild(label);
    wordListContainer.appendChild(wordContainer);
    });
    })
    .catch(error => {
        console.error("Error generating word cloud:", error);
    });
}

function toggleCheckboxes(isChecked) {
    document.querySelectorAll('.word-checkbox').forEach(checkbox => {
        checkbox.checked = isChecked;
    });
}
document.addEventListener("DOMContentLoaded", function() {
    const cloudTypeDropdown = document.querySelector('[name="cloud_type"]');
    const cloudShapeDropdown = document.querySelector('[name="cloud_shape"]');
    const cloudOutlineColorDropdown = document.querySelector('[name="cloud_outline_color"]');
    const cloud_measureDropdown = document.querySelector('select[name="cloud_measure"]');
    const wordListContainer = document.getElementById('wordListContainer');
    cloud_measureDropdown.addEventListener('change', regenerateWordCloud);
    cloudTypeDropdown.addEventListener('change', generateWordClouds);
    cloudShapeDropdown.addEventListener('change', regenerateWordCloud);
    cloudOutlineColorDropdown.addEventListener('change', regenerateWordCloud);
    // Event delegation for checkboxes inside the word list container
    wordListContainer.addEventListener('change', function(event) {
        // Check if the changed element is a checkbox
        if (event.target.type === 'checkbox' && event.target.classList.contains('word-checkbox')) {
            regenerateWordCloud();
        }
    });
});

function generateWordClouds() {
    const loadingElement = document.getElementById('loading');
    loadingElement.style.display = 'flex';
    const formData = new FormData(document.getElementById('wordCloudForm'));
    const data = {
        cloud_type: formData.get('cloud_type'),
        cloud_shape: formData.get('cloud_shape'),
        cloud_outline_color: formData.get('cloud_outline_color'),
        cloud_measure : formData.get('cloud_measure')
        
    };
    
    fetch('/generate_wordcloud', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            
            
            const wordCloudImageElement = document.getElementById('wordCloudImage');
            wordCloudImageElement.src = "";
            wordCloudImageElement.style.display = 'none';

            setTimeout(() => {
                // Set the new wordcloud image and checkboxes after the delay
                wordCloudImageElement.src = data.wordcloud_image_path;
                wordCloudImageElement.style.display = 'block';
                renderWordCheckboxes(data.word_list);
                loadingElement.style.display = 'none';
            }, 5000)
            
            renderWordCheckboxes(data.word_list);
        }
    })
    .catch(error => {
        console.error("Error generating word cloud:", error);
    });
}
function renderWordCheckboxes(wordList) {
    const wordListContainer = document.getElementById('wordListContainer');
    wordListContainer.innerHTML = '';  // Clear previous word checkboxes

    // Create 'Select/Deselect All' checkbox
    const selectAllContainer = document.createElement('div');
    const selectAllLabel = document.createElement('label');
    const selectAllCheckbox = document.createElement('input');
    selectAllCheckbox.type = 'checkbox';
    selectAllCheckbox.onclick = function() {
        toggleCheckboxes(this.checked);
    };
    selectAllLabel.appendChild(selectAllCheckbox);
    selectAllLabel.appendChild(document.createTextNode(" Select/Deselect All"));
    selectAllContainer.appendChild(selectAllLabel);
    wordListContainer.appendChild(selectAllContainer);

    // Generate checkboxes for words
    wordList.forEach(word => {
        const wordContainer = document.createElement('div');
        const label = document.createElement('label');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = word;
        checkbox.checked = true;  // Default check all words
        checkbox.className = 'word-checkbox';  // For the select/deselect function
        checkbox.addEventListener('change', regenerateWordCloud);
        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(` ${word}`));
        wordContainer.appendChild(label);
        wordListContainer.appendChild(wordContainer);
    });
}


function regenerateWordCloud() {
    const selectedWords = [];
    document.querySelectorAll('.word-checkbox:checked').forEach(checkbox => {
        selectedWords.push(checkbox.value);
    });
    const loadingElement = document.getElementById('loading');
    loadingElement.style.display = 'flex';

    // Extract the column label name
    const columnLabels = document.querySelectorAll("#columnLabelsContainer .column-label");
    
    // If no labels are selected or more than one, show a message and exit the function
    if (columnLabels.length !== 1) {
       
        if (getCurrentLanguage() === 'cy') {
            alert("Dewiswch un golofn yn unig.");
        } else {
            alert("Please select exactly one column.");
        }
        return;
    }
   // Extract the column label name
   const columnLabel = document.querySelector("#columnLabelsContainer .column-label span");
   if (!columnLabel) {
      
       if (getCurrentLanguage() === 'cy') {
        alert("Dewiswch label colofn.");
    } else {
        alert("Please select a column label.");
    }
    return;
   }
   const selectedLabel = columnLabel.innerText;
   const formData = new FormData(document.getElementById('wordCloudForm'));
    fetch("/regenerate_wordcloud", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            words: selectedWords,
            label: selectedLabel,
            cloud_type: formData.get('cloud_type'),
            cloud_shape: formData.get('cloud_shape'),
            cloud_outline_color: formData.get('cloud_outline_color'),
            cloud_measure : formData.get('cloud_measure')
        })
    })
    .then(response => response.json())
    .then(data => {
        const wordCloudImageElement = document.getElementById('wordCloudImage');
            wordCloudImageElement.src = "";
            wordCloudImageElement.style.display = 'none';

            setTimeout(() => {
                // Set the new wordcloud image and checkboxes after the delay
                wordCloudImageElement.src = data.wordcloud_image_path;
                wordCloudImageElement.style.display = 'block';
                
                loadingElement.style.display = 'none';
            }, 5000)
            renderWordCheckboxes(data.word_list);
        // Re-enable the checkboxes after the word cloud has been regenerated
        wordCheckboxes.forEach(checkbox => {
            checkbox.disabled = false;
        });
    })
    .catch(error => {
        console.error("Error regenerating word cloud:", error);
        // Re-enable the checkboxes if an error occurs
        wordCheckboxes.forEach(checkbox => {
            checkbox.disabled = false;
        });
    });
}




$(document).ready(function() {

    // Range summarization script
    //$('#chosen_ratio').on('input change', function() {
      //  $('#ratio-value').text($(this).val() + "%");

        //var textInput = $('#text-to-analyze').val();
        
       // $.ajax({
         //   type: 'POST',
           // url: '/summarise',
           // contentType: 'application/json;charset=UTF-8',
           // data: JSON.stringify({ 
             //   'chosen_ratio': $(this).val(),
               // 'sentences': textInput
            //}),
            //success: function(data) {
              //  $('#summary').html(data.summary);
            //},
           
            //error: function(jqXHR, textStatus, errorThrown) {
                // Handle the error
              //  console.error("Request failed: ", textStatus);
            //}
        //});
    //});

    // Tabs control script
    $(".tab-btn").click(function(){
        var index = $(".tab-btn").index(this);
        $(".tab-btn").removeClass('active');
        $(this).addClass('active');
        $(".tab-content").hide();
        $("#tab" + index).show();
    });
  
    $(".tab-btn").first().trigger('click');

    // Dark mode script
    if (localStorage.getItem('dark-mode') === 'enabled') {
        $('#darkModeToggle').prop('checked', true);
        $('body').addClass('dark-mode').removeClass('light-mode');
    }

    $('#darkModeToggle').on('change', function() {
        if ($(this).is(':checked')) {
            localStorage.setItem('dark-mode', 'enabled');
            $('body').addClass('dark-mode').removeClass('light-mode');
        } else {
            localStorage.setItem('dark-mode', 'disabled');
            $('body').removeClass('dark-mode').addClass('light-mode');
        }
    });
});


function populateDropdown(wordFrequencies) {
    const dropdown = document.getElementById("subCategoryDropdown");
    const subCategoryDropdown = document.getElementById('subCategoryDropdown');
    
    // Clear the current options
    while (subCategoryDropdown.firstChild) {
        subCategoryDropdown.removeChild(subCategoryDropdown.firstChild);
    }

    const wordFrequencyPairs = Object.entries(wordFrequencies);
    wordFrequencyPairs.sort((a, b) => b[1] - a[1]);

    for (let [word, frequency] of wordFrequencyPairs) {
        const option = document.createElement("option");
        option.value = word;
        option.text = `${word} (${frequency})`;
        option.setAttribute('data-type', 'word');
        dropdown.add(option);
    }
}

function displayResults(data) {
    const loadingElement = document.getElementById('loading');
    loadingElement.style.display = 'none';

    // Clear previous error messages
    $("#errorContainer").empty();

    // Check for an error message in the response data
    if (data.error) {
        // Display the error message
        $("#errorContainer").text(data.error); // Assuming you have a container to display errors
        $("#errorContainer").removeClass("hidden"); // Show the error container
        alert('No instances found. Please choose another category as the data does not have this category.');
    } else {
        // Hide the error container when there is no error
        $("#errorContainer").addClass("hidden");

        if (data.kwic_results) {
            $("#kwicTable").removeClass("hidden");
            displayKWICResults(data.kwic_results);
        } else {
            $("#kwicTable").addClass("hidden");
        }

        if (data.collocs) {
            $("#collocsTable").removeClass("hidden");
            displayCollocs(data.collocs);
        } else {
            $("#collocsTable").addClass("hidden");
        }

        if (data.graph_path) {
            $("#graphContainer").html(`<iframe src="${data.graph_path}" width="100%" height="750px"></iframe>`);
        }
        
        // Show elements only when there's no error
        $('#kwicTable').removeClass('hidden');
        $('#collocsTable').removeClass('hidden');
        $('#graphType').removeClass('hidden');
        $('#generateGraph').removeClass('hidden');
        $('button.analyze-btn').removeClass('hidden');
        $('label[for="graphType"]').removeClass('hidden');
    }
}

function isWord(value) {
    let option = document.querySelector(`#subCategoryDropdown option[value='${value}']`);
    return option && option.getAttribute('data-type') === 'word';
}

function isTag(value) {
    let option = document.querySelector(`#subCategoryDropdown option[value='${value}']`);
    return option && option.getAttribute('data-type') === 'tag';
}

function isSemTag(value) {
    let option = document.querySelector(`#subCategoryDropdown option[value='${value}']`);
    return option && option.getAttribute('data-type') === 'semtag';
}
function fetchResults() {
    let dropdownValue = $("#subCategoryDropdown").val();
    let windowSize = $("#windowSizeRange").val();
    const loadingElement = document.getElementById('loading');
    loadingElement.style.display = 'flex';
    // Decide the type of request based on the value of the dropdown
    let postData = {};
    if (isWord(dropdownValue)) {
        postData.word_selection = dropdownValue;
        postData.kwic_option = 'word'; 
    } else if (isTag(dropdownValue)) {
        postData.tag_selection = dropdownValue;
        postData.kwic_option = 'tag'; 
    } else if (isSemTag(dropdownValue)) {
        postData.sem_selection = dropdownValue;
        postData.kwic_option = 'sem'; 
    } else {
        return; // If it doesn't match any criteria, exit the function
    }

    postData.window_size = windowSize;
    $.post('/Keyword_collocation', postData, displayResults);
}



// Attach the event handler for dropdown change
$(document).on('change', '#subCategoryDropdown', fetchResults);

// Handle changes in window size range input
$(document).on('input', '#windowSizeRange', function() {
    $("#windowSizeValue").text(this.value);
    fetchResults();
});


function displayKWICResults(kwicResults) {

    const kwicTable = $("#kwicTable").DataTable({
        destroy: true,
        columns: [
            {
                className: "left-context",
                render: function(data, type) {
                    if (type === 'display') {
                        return '<div class="text-right">' + data + '</div>';
                    } else if (type === 'sort') {
                        // return the last word for sorting
                        return data.trim().split(" ").pop();
                    }
                    return data;
                }
            },
            {
                className: "keyword",
                render: function(data) {
                    return '<div class="text-center bg-primary text-white rounded p-1">' + data + '</div>';
                }
            },
            {
                className: "right-context",
                render: function(data) {
                    return '<div class="text-left">' + data + '</div>';
                }
            }
        ],
        language: getCurrentLanguage() === 'cy' ? welshLanguageSettings : {}
    });
    
    kwicTable.clear();
    
    kwicResults.forEach(item => {
        kwicTable.row.add([item[0], item[1], item[2]]);
    });
    
    kwicTable.draw();
}








function displayCollocs(collocs) {
    // Define language settings for Welsh
 

    const collocsTable = $("#collocsTable").DataTable({
        destroy: true,
        order: [[1, "desc"]],  // Order by second column (frequency), descending
        language: getCurrentLanguage() === 'cy' ? welshLanguageSettings : {} // Apply Welsh language settings if 'cy' is selected
    });

    collocsTable.clear(); // Clear previous data
    collocs.sort((a, b) => b[1] - a[1]);
    collocs.forEach(item => {
        collocsTable.row.add([item[0], item[1], item[2], item[3]]);
    });
    collocsTable.draw();
}




document.addEventListener("DOMContentLoaded", function() {
    // Fetch file list from backend
    fetch('/get_file_list')
        .then(response => response.json())
        .then(files => {
            const dropdown = document.getElementById('example-data');

            // Populate dropdown
            files.forEach(file => {
                let option = document.createElement('option');
                option.value = file;
                option.text = file;
                dropdown.appendChild(option);
            });
        })
        .catch(error => console.error('Error fetching file list:', error));
});

function selectExampleData() {
    const selectedFile = document.getElementById('example-data').value;
    if (selectedFile !== "Select example data file(s)") {
        // Handle the selected file, perhaps send it to 'fileanalysis_uploaded'
        startAnalysisfile_uploaded(selectedFile);
    }
}

function startAnalysisexample_uploaded(event) {
    event.preventDefault(); // To prevent the form from submitting in the traditional way
    validateForm(event, 'example');
    const formDataexample = new FormData(document.getElementById("text-analysis-form"));
    
    fetch("/fileanalysis", {
        method: 'POST',
        body: formDataexample
    })
    .then(response => response.json())
    .then(data => {
        if (data.columns) {
            populateColumns(data.columns);
        }
    })
    .catch(error => console.error('Error:', error));
  }






  $(document).ready(function() {
    $('#generatePdfBtn').click(function(event) {
        event.preventDefault();

        const sentimentContent = document.getElementById('SentimentView').innerHTML;
        document.getElementById('sentimentField').value = sentimentContent;
    

        const wordtree = document.getElementById('wordtree_basic').innerHTML;
        document.getElementById('wordtree').value = wordtree;

        const wordCloudImageSrc = document.getElementById('wordCloudImage').src;
        document.getElementById('wordCloudImageSrcField').value = wordCloudImageSrc;

        const summary = document.getElementById('summary').innerHTML;
        document.getElementById('summaryField').value = summary;
        document.getElementById('Cloud_type').value = selectedCloudType;
        document.getElementById('Cloud_measure').value = selectedcloudmeasure;
       
         
            $('#pdfForm').submit();
        
        
        
        
    });
});


function onSliderChange() {
    let ratio = document.getElementById('chosen_ratio').value;
    document.getElementById('ratio-value').textContent = ratio + '%';
    generateSummary();  // Call the summarizer function whenever the ratio changes
}

function generateSummary() {
    
    const chosen_ratio = document.getElementById('chosen_ratio').value / 100.0;

    fetch('/summarise', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
           
            chosen_ratio: chosen_ratio,
        }),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('summary').innerText = data.summary;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function handleSentimentOptionChange() {
   
          
    // Fetch the selected sentiment option
    let radios = document.getElementsByName('sentimentOption');
    let selectedOption = Array.from(radios).find(r => r.checked).value;
    
    // Call backend to update the sentiment analysis
    updateSentimentAnalysis(selectedOption);
}

function updateSentimentAnalysis(sentimentClasses) {
      // Show loading element
    const loadingElement = document.getElementById('loading');
    loadingElement.style.display = 'flex';
    const currentLang = getCurrentLanguage();
    fetch('/update_sentiment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            sentiment_classes: sentimentClasses, language: currentLang ,
        }),
    })
    
    .then(response => response.json())
    
    .then(data => {
        loadingElement.style.display = 'none';
        displayOverallSentiment(data.sentimentCounts);
        displaySentimentTable(data.sentimentData);
        displayPlot(data.sentimentPlotPie, 'SentimentPlotViewPie');
        displayPlot(data.sentimentPlotBar, 'SentimentPlotViewBar');
        
    })
    
    .catch(error => {
        console.error('Error:', error);
    });
}


function handleFileChange() {
    
    document.getElementById('columns-dropdown').innerHTML = '';
    document.getElementById('column-selection').classList.add('hidden');
    document.getElementById('dateSlider').classList.add('hidden');
    const fileName = $('#file').val().split('\\').pop();
    $('.file-name').text(fileName || ($('.file-name').attr('data-lang-en')));  // default to English if no file is selected

    resetToDefault()
}

let selectedColumn = null;

document.addEventListener("DOMContentLoaded", function() {
    
    const btn = document.getElementById("submit-rows-btn");
    
    // Add the animation classes to start the animation
    btn.classList.add("animate__animated", "animate__heartBeat", "animate__infinite");
    
    btn.addEventListener("click", function() {
        // Remove the infinite animation class to stop the continuous animation
        this.classList.remove("animate__infinite");
    });
});



function checkLanguage(event) {
    event.preventDefault();
    
    const loadingElement = document.getElementById('loading');
    loadingElement.style.display = 'flex';
    
    const selectedColumns = getSelectedColumns(); // Get the selected columns
   
    
    // Get the current language
    const currentLang = getCurrentLanguage();

    fetch('/check_language', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ columns: selectedColumns, language: currentLang }) // Send the selected columns and language as part of the request body
    })
    .then(response => response.json())
    .then(data => {
        loadingElement.style.display = 'none';
        alert(data.message);
        if(data.has_both) {
            // Show the download buttons if data contains both languages
            document.getElementById('download-buttons').classList.remove('hidden');
        } else {
            // Hide the download buttons if not needed
            document.getElementById('download-buttons').classList.add('hidden');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

let welshTranslations = {
    // Add all other translations here
    page: 'Tudalen',
    to: 'i',
    of: 'o',
contains: 'yn cynnwys',
    notContains: 'Ddim yn cynnwys',
    equals: 'yn hafal i',
    notEqual: 'Ddim yn hafal i',
    startsWith: 'Yn dechrau â',
    endsWith: 'Yn gorffen â',
    blank: 'gwag',
    notBlank: 'ddim yn wag',
    inRange: 'mewn ystod',
    greaterThan: 'yn fwy na',
    lessThan: 'yn llai na',
    or: 'neu',
    and: 'A',
    
};

//Global variable declarations
let gridApi;
let gridColumnApi;

let gridOptions = {
    localeText: ({}),
    domLayout: 'autoHeight',
    pagination: true,
    paginationPageSize: 15,
    rowSelection: 'multiple',
    rowDragManaged: true,
    animateRows: true,
    onFilterChanged: function(params) {
        params.api.deselectAll();
        selectDisplayedRows();
    },onFirstDataRendered: function() {
        // Call your function here
        setTimeout(() => {
            getSelectedColumns();
        }, 2000);
    },
    onFirstDataRendered: onFirstDataRendered,
    defaultColDef: {
        width: 100,
        editable: true,
        filter: 'agTextColumnFilter',
        floatingFilter: true,
        resizable: true
    },
    columnTypes: {
        numberColumn: {
            width: 50,
            filter: 'agNumberColumnFilter'
        },
        dateColumn: {
            filter: 'agDateColumnFilter',
            filterParams: {
                // Use the inRange comparator
                comparator: (filterLocalDateAtMidnight, cellValue, rowNode, filterModel) => {
                    const dateParts = cellValue.split('/');
                    const day = Number(dateParts[0]);
                    const month = Number(dateParts[1]) - 1;
                    const year = Number(dateParts[2]);
                    const cellDate = new Date(year, month, day);
        
                    // If from and to dates are both present, use them
                    if (filterModel) {
                        if (filterModel.from && filterModel.to) {
                            if (cellDate >= new Date(filterModel.from) && cellDate <= new Date(filterModel.to)) {
                                return 0;
                            } else if (cellDate < new Date(filterModel.from)) {
                                return -1;
                            } else {
                                return 1;
                            }
                        }
                    }
                    
                    if (cellDate < filterLocalDateAtMidnight) {
                        return -1;
                    } else if (cellDate > filterLocalDateAtMidnight) {
                        return 1;
                    } else {
                        return 0;
                    }
                },
                inRangeInclusive: true,
                browserDatePicker: true,  // If you want to use the browser's date picker
                clearButton: true         // For resetting the filter
            }
        }
        
        
    }
};

// Date Filter Params
var dateFilterParams = {
    comparator: (filterLocalDateAtMidnight, cellValue) => {
      var dateAsString = cellValue;
      if (dateAsString == null) return -1;
      var dateParts = dateAsString.split('/');
      var cellDate = new Date(
        Number(dateParts[2]),
        Number(dateParts[1]) - 1,
        Number(dateParts[0])
      );
  
      if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
        return 0;
      }
  
      if (cellDate < filterLocalDateAtMidnight) {
        return -1;
      }
  
      if (cellDate > filterLocalDateAtMidnight) {
        return 1;
      }
      return 0;
    },
  };
  function onFirstDataRendered(params) {
    params.api.selectAll();
    
}

function selectDisplayedRows() {
    gridApi.forEachNodeAfterFilter((node) => {
        node.setSelected(true);
    });
}

function initializeGrid() {
    $("#myGrid").empty();

    const gridDiv = document.querySelector('#myGrid');
    new agGrid.Grid(gridDiv, gridOptions);
   
    gridApi = gridOptions.api;
    gridColumnApi = gridOptions.columnApi;
}

document.addEventListener("DOMContentLoaded", function() {
    initializeGrid();
});



function onDataFetchedBasedOnSelectedColumn(data) {
    
    document.getElementById('myGrid').classList.remove('hidden');
    const currentLanguage = getCurrentLanguage();
    setLanguage(currentLanguage);
    const selectedRowIds = gridApi.getSelectedRows().map(row => row.Id);
    const columnDefs = [
        {
            headerCheckboxSelection: true,
            checkboxSelection: true,
            width: 50,
            pinned: 'left',
            field: 'Id',
            suppressFilter: true,
            suppressMenu: true,
            filter: false,
            floatingFilter: false,
        },
        

            
        
       
        ...Object.keys(data[0]).map(key => {
            let filterType = 'agTextColumnFilter';
            let type = [];
            let filterParams = {};

            if (typeof data[0][key] === 'number') {
                filterType = 'agNumberColumnFilter';
            } else if (typeof data[0][key] === 'string' && /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/.test(data[0][key])) {
                filterType = 'agDateColumnFilter';
                type.push('dateColumn');
                filterParams = dateFilterParams; // Here we apply the custom date comparator
            }

            return {
                headerName: key,
                field: key,
                sortable: true,
                width: 400,
                filter: filterType,
                type: type.length > 0 ? type : undefined,
                filterParams: filterParams
            };
        })
    ];

    gridApi.setColumnDefs(columnDefs);
    gridApi.setRowData(data);
    gridApi.forEachNode((node) => {
        if (selectedRowIds.includes(node.data.Id)) { 
            node.setSelected(true);
        }
    });


    gridApi.forEachNode((node) => {
        if (selectedRowIds.includes(node.data.Id)) { 
            node.setSelected(true);
        }
    });
    const columnLabelsContainer = document.getElementById('columnLabelsContainer');
    columnLabelsContainer.innerHTML = ''; // Clear any previous labels

    Object.keys(data[0]).forEach(key => {
        const labelDiv = document.createElement('div');
        labelDiv.classList.add('column-label');

        const labelText = document.createElement('span');
        labelText.textContent = key;
        labelDiv.appendChild(labelText);

        const closeButton = document.createElement('button');
        closeButton.textContent = 'x';
        closeButton.addEventListener('click', function() {
            columnLabelsContainer.removeChild(labelDiv);
            
            // updateDataBasedOnLabels();
        });
        labelDiv.appendChild(closeButton);

        columnLabelsContainer.appendChild(labelDiv);
    });

    
}







function validateForm(event, type) {
    var isValid = true;
    if (type === 'text') {
        const textAreaValue = document.getElementById('text-to-analyze').value;
        if (textAreaValue.trim() === '') {
         
            if (getCurrentLanguage() === 'cy') {
                alert("Gludo'r testun i'w ddadansoddi ");
            } else {
                alert('Please enter text to analyse.');
            }
           
            isValid = false;
        }
    } else if (type === 'example') {
        const exampleValue = document.getElementById('example-data').value;
        if (exampleValue === '') {
            
            if (getCurrentLanguage() === 'cy') {
                alert("Dewiswch dewis ffeil ddata (ffeiliau data) enghreifftiol");
            } else {
                alert('Please select example data.');
            }
            isValid = false;
        }
    } else if (type === 'upload') {
        const fileValue = document.getElementById('file').value;
        if (fileValue === '') {
            
            if (getCurrentLanguage() === 'cy') {
                alert("Dewiswch llwytho ffeil ddata i fyny");
            } else {
                alert('Please upload a file.');
            }
            isValid = false;
        }
    }

    if (!isValid) {
        event.preventDefault();
    }
}


$(document).ready(function() {
    
    function switchLanguage(language) {
        $('[data-lang-en], [data-lang-cy]').each(function() {
            if (language === 'en') {
                $(this).text($(this).attr('data-lang-en'));
            } else if (language === 'cy') {
                $(this).text($(this).attr('data-lang-cy'));
            }
        });

        // Update the placeholder for the textarea
        var placeholderText = (language === 'en') ? 'Paste the text to analyse here' : "Gludo'r testun i'w ddadansoddi yma";
        $('#text-to-analyze').attr('placeholder', placeholderText);

        $('.lang-flag').attr('data-active', 'false'); // reset all flags
        $(`.lang-flag[data-lang=${language}]`).attr('data-active', 'true'); // set the selected flag as active

        // save the chosen language to localStorage
        localStorage.setItem('chosenLanguage', language);
    }

    const savedLanguage = localStorage.getItem('chosenLanguage') || 'en';

    if (savedLanguage === 'cy') {
        $('.slider').css('left', '-80px');
        $('#enLabel').show();
        $('#cyLabel').hide();
    } else {
        $('#enLabel').hide();
        $('#cyLabel').show();
    }

    // Apply the language (translations)
    switchLanguage(savedLanguage);
    
    // Toggle switch functionality
    $('.language-switcher').on('click', function() {
        const slider = $(this).find('.slider');
        const isEnglishActive = $('.lang-flag[data-lang="en"]').attr('data-active') === 'true';

        if (isEnglishActive) {
            slider.css('left', '-80px');
            $('#enLabel').show();
            $('#cyLabel').hide();
            switchLanguage('cy');
        } else {
            slider.css('left', '0px');
            $('#enLabel').hide();
            $('#cyLabel').show();
            switchLanguage('en');
        }
    });
   
});




function isDateLikeColumn(columnValues) {
    const datePatterns = [
        /^\d{1,2}\/\d{1,2}\/\d{4}$/,            // DD/MM/YYYY
        /^\d{4}-\d{1,2}-\d{1,2}$/,             // YYYY-MM-DD
        /^\d{1,2}-\d{1,2}-\d{4}$/,             // DD-MM-YYYY
        /^\w{3}, \d{1,2} \w{3} \d{4} \d{1,2}:\d{1,2}:\d{1,2} \w{3}$/   // Tue, 11 Aug 2009 00:00:00 GMT
        // ... add more patterns as necessary
    ];

    return columnValues.some(value => datePatterns.some(pattern => pattern.test(value)));
}


function convertColumnToDateFormat(columnValues) {
    return columnValues.map(value => {
        // Check if value is a valid date and then format it
        if(moment(value).isValid()) {
            return moment(value).format('DD/MM/YYYY');
        }
        return value;
    });
}




function getColumnValues(colId) {
    let values = [];
    gridOptions.api.forEachLeafNode(function(node) {
        if (node.data && node.data[colId] !== undefined) { 
            values.push(node.data[colId]);
            
        } else {
            console.log(`No data found for column ${colId} in node:`, node);
        }
    });
    return values;
}





function getSelectedColumns() {
    const dropdown = document.getElementById('columns-dropdown');
    const selectedOptions = Array.from(dropdown.selectedOptions);
  

    return selectedOptions.map(option => {
        return {
            name: option.value,
            values: getColumnValues(option.value)
        };
    });
}


function getMinMaxDatesFromGrid(columnName) {
    // Assuming gridOptions is your grid configuration
    const allDates = gridOptions.api.getColumnValues(columnName);
    const validDates = allDates.filter(date => moment(date, 'DD/MM/YYYY').isValid());
    return {
        minDate: moment.min(validDates.map(date => moment(date, 'DD/MM/YYYY'))),
        maxDate: moment.max(validDates.map(date => moment(date, 'DD/MM/YYYY')))
    };
}




document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.getElementById('columns-dropdown');
    const dateSlider = document.getElementById('dateSlider');
    const dateRangeSpan = document.getElementById('dateRange');

    dropdown.addEventListener('change', function () {
        
        // Check if the date column is selected
        const isDateColumnSelected = Array.from(dropdown.selectedOptions).some(option => option.value === 'Date');
        
        // Show/hide the dateSlider and dateRangeSpan based on the presence of the date column
        if (isDateColumnSelected) {
            dateSlider.style.display = 'block';
            dateRangeSpan.style.display = 'block';
        } else {
            dateSlider.style.display = 'none';
            dateRangeSpan.style.display = 'none';
            dateRangeSpan.textContent = 'Selected Range: '; // Reset text content
        }

        setTimeout(() => {
            const selectedColumns = getSelectedColumns();
            console.log(selectedColumns);
            
            // Loop over selected columns
            selectedColumns.forEach(column => {
                // Check if the column contains date values
                console.log(column);
                if (isDateLikeColumn(column.values)) {
                    // Get valid dates
                    const validDates = column.values.filter(date => moment(date, 'DD/MM/YYYY').isValid());

                    // If the column contains valid dates, initialize/update the slider
                    if (validDates.length) {
                        console.log(column.name); 
                        initializeAndUpdateSlider(validDates, column.name);
                    }
                }
            });

        }, 2000); 
    });
});







function filterGridByDateRange(column, start, end) {
    const filterInstance = gridOptions.api.getFilterInstance(column);
    if(!filterInstance) {
        console.error(`Filter instance for column ${column} not found.`);
        return;
    }
  
    // Set the filter model for the column
  
    filterInstance.setModel({
        type: 'inRange',
        dateFrom: start.format('YYYY-MM-DD'),  
        dateTo: end.format('YYYY-MM-DD')       
    });
   
  
    // Inform the grid that a filter has been changed
    gridOptions.api.onFilterChanged();
    
    // Refresh the grid cells
    gridOptions.api.refreshCells();
}

function getDateRange(dates) {
    if (!dates || dates.length === 0) return null;

    // Convert strings to Date objects
    let parsedDates = dates.map(dateStr => {
        let parts = dateStr.split("/");
        return new Date(parts[2], parts[1] - 1, parts[0]);
    });

    // Find min and max dates
    let minDate = new Date(Math.min.apply(null, parsedDates));
    let maxDate = new Date(Math.max.apply(null, parsedDates));

    return { start: minDate, end: maxDate };
}

function initializeAndUpdateSlider(dateColumnData, columnName) {
    // Convert the date strings to Date objects, sort them, and then convert back to strings
    dateColumnData = dateColumnData.map(dateStr => moment(dateStr, 'DD/MM/YYYY').toDate())
                                   .sort((a, b) => a - b)
                                   .map(date => moment(date).format('DD/MM/YYYY'));
    
    const dateRange = getDateRange(dateColumnData);
    const startIndex = dateColumnData.indexOf(moment(dateRange.start).format('DD/MM/YYYY'));
    const endIndex = dateColumnData.indexOf(moment(dateRange.end).format('DD/MM/YYYY'));
    const currentLang = getCurrentLanguage();
    const slider = document.getElementById("dateSlider");
    
    // Check if slider is already initialized
    if (!slider.noUiSlider) {
        noUiSlider.create(slider, {
            start: [startIndex, endIndex], // Use the determined start and end indices
            connect: true,
            range: {
                'min': 0,
                'max': dateColumnData.length - 1
            }
        });

        slider.noUiSlider.on('update', function (values, handle) {
            const startDate = dateColumnData[Math.round(values[0])];
            const endDate = dateColumnData[Math.round(values[1])];
            if (currentLang === "en") {
            document.getElementById("dateRange").textContent = "Selected Range: " + startDate + " to " + endDate;
            } else if (currentLang === "cy") {
            document.getElementById("dateRange").textContent = "Ystod a Ddewiswyd: " + startDate + " o " + endDate;
        }

            // Update the grid based on selected range
            filterGridByDateRange(columnName, moment(startDate, 'DD/MM/YYYY'), moment(endDate, 'DD/MM/YYYY'));
        });
    } else {
        // Update slider range if it's already initialized
        slider.noUiSlider.updateOptions({
            range: {
                'min': 0,
                'max': dateColumnData.length - 1
            }
        });
    }
}

function downloadWordTree() {
    const iframe = document.getElementById('hiddenIframe');
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    var searchWord = document.getElementById('search_word').value;
    const scripts = `
        <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
        <script type="text/javascript">
            google.charts.load('current', {packages:['wordtree']});
            google.charts.setOnLoadCallback(drawChart);

            function drawChart() {
                var data = google.visualization.arrayToDataTable(${JSON.stringify(currentWordTreeData)});
                var options = {
                    wordtree: {
                        format: 'implicit',
                        type: 'double',
                        word: "${searchWord}",
                        colors: ['red', 'black', 'green']
                    }
                };
                var chart = new google.visualization.WordTree(document.getElementById('wordtree_basic'));
                chart.draw(data, options);
            }
        </script>
    `;

    const visualizationByDiv = `
        <div style="text-align:center; margin-top:30px;">
            Visualisation by <img src="https://ucrel-freetxt-2.lancs.ac.uk/static/images/logo.png" alt="Logo" style="height:40px;">
        </div>
    `;

    const htmlContent = `
        <html>
        <head>
            ${scripts}
        </head>
        <body>
            <div id="wordtree_basic"></div>
            ${visualizationByDiv}
        </body>
        </html>`;

    iframeDoc.open();
    iframeDoc.write(htmlContent);
    iframeDoc.close();

    setTimeout(() => {
        const blob = new Blob([iframeDoc.documentElement.outerHTML], { type: 'text/html' });
        const url = window.URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = 'wordtree.html';

        document.body.appendChild(a);
        a.click();

        window.URL.revokeObjectURL(url);
    }, 5000); // 5 seconds delay to give the chart enough time to render
}




async function handleCategoryChange() {
    const subCategoryDropdown = document.getElementById('subCategoryDropdown');

    // Clear the current options
    while (subCategoryDropdown.firstChild) {
        subCategoryDropdown.removeChild(subCategoryDropdown.firstChild);
    }

    if (document.getElementById('wordRadio').checked) {
        
        populateDropdown(wordFrequencies);
       
    } else if (document.getElementById('posTagRadio').checked) {
        
        const posTags = [
            {value: 'NOUN', en: 'Nouns', cy: 'Enwau'},
            {value: 'PROPN', en: 'Proper nouns', cy: 'Enwau priod'},
            {value: 'VERB', en: 'Verbs', cy: 'Berfau'},
            {value: 'ADJ', en: 'Adjectives', cy: 'Ansoddeiriau'},
            {value: 'ADV', en: 'Adverbs', cy: 'Adferfau'},
            {value: 'NUM', en: 'Numbers', cy: 'Rhifau'}
        ];

        posTags.forEach(tag => {
            const option = document.createElement('option');
            option.value = tag.value;
            option.setAttribute('data-lang-en', tag.en);
            option.setAttribute('data-lang-cy', tag.cy);
            option.text = tag.en;  
            option.setAttribute('data-type', 'tag');
            subCategoryDropdown.add(option);
            updateOptionsLanguage();
        });
    }

    else if (document.getElementById('semanticTagRadio').checked) {
        const semanticTags = semantictags;
        semanticTags.forEach(tag => {
            const option = document.createElement('option');
            option.value = tag;
            option.text = tag;
            option.setAttribute('data-lang-en', tag);
            option.setAttribute('data-lang-cy', tag); // Assuming you have the same value for both languages, adjust if needed
            option.setAttribute('data-type', 'semtag');
            subCategoryDropdown.appendChild(option);
        });
        updateOptionsLanguage();
    }
    
}

function updateOptionsLanguage() {
    const dropdown = document.getElementById("subCategoryDropdown");
    const options = dropdown.options;
    const currentLang = getCurrentLanguage();
    console.log('Number of options:', options.length);  // Debugging step

    for (let i = 0; i < options.length; i++) {
        const option = options[i];
        if (currentLang === "en") {
            option.textContent = option.getAttribute("data-lang-en");
        } else if (currentLang === "cy") {
            option.textContent = option.getAttribute("data-lang-cy");
        }
    }
}
function fetchAndParseCSV() {
    
    return fetch("http://ucrel-freetxt-2.lancs.ac.uk/static/keness/Cy_tags.csv")
        .then(response => response.text())
        .then(csv => {
            const results = Papa.parse(csv, { header: true });
            return results.data;
        });
}
$(document).ready(function() {
    $("#generateGraph").click(function(event) {
        event.preventDefault(); // This line prevents the form from submitting
        var graphType = $("#graphType").val();
        updateGraph(graphType);
    });
});
function updateGraph(graphType) {
    // 1. Fetch the Data from Collocs Table
    const collocsData = $('#collocsTable').DataTable().rows().data().toArray();
    const loadingElement = document.getElementById('loading');
    loadingElement.style.display = 'flex';
    const collocs = collocsData.map(row => {
        return {
            word: row[0], // Assuming first column is 'Word'
            frequency: row[1], // Assuming second column is 'Frequency'
            MI: row[2], // Assuming third column is 'MI'
            LL: row[3], // Assuming fourth column is 'LL',
        };
    });

    // Fetch the keyword from the dropdown
    const keyword = $('#subCategoryDropdown').val();

    // 2. Structure the Data
    const data = {
        keyword: keyword,
        collocs: collocs,
        graphType: graphType
    };

    // 3. Send the Data to the Server
    $.ajax({
        url: '/update_graph',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(data),
        success: function(response) {
            
            if (response.status === 'success') {
                // Update the 'graphContainer' with the new graph
                $('#graphContainer').html(`<iframe src="${response.graphPath}" width="100%" height="750px"></iframe>`);
                loadingElement.style.display = 'none';
            } else {
                console.error('Failed to update graph', response);
            }
        },
       
    });
}

function setLanguage(language) {
    // Step 1: Save state
    // Save selected rows
    const selectedNodes = gridApi.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data);

    // Save filters
    const filterModel = gridApi.getFilterModel();

    

    // Save other necessary state as per your application's requirements

    // Step 2: Update localeText based on the language
    gridOptions.localeText = language === 'cy' ? welshTranslations : {};

    // Step 3: Reinitialize the grid
    initializeGrid();


}


function downloadSummary() {
    
    const summaryText = document.getElementById('summary').innerText;
    const blob = new Blob([summaryText], { type: 'text/plain' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'summary.txt';
    a.click();
}
document.addEventListener('DOMContentLoaded', function() {
    const feedbackTab = document.getElementById('feedback-tab');
    const feedbackButton = document.getElementById('feedback-button');
    const feedbackForm = document.getElementById('feedback-form');

    feedbackButton.addEventListener('click', function(event) {
        console.log('Button clicked!');
        const isTabOpen = feedbackTab.style.right === '0px';
        console.log('Is Tab Open:', isTabOpen);

        if (isTabOpen) {
            feedbackTab.style.right = '-800px'; 
            console.log('Closing Tab');
        } else {
            feedbackTab.style.right = '0px';
            feedbackForm.style.display = 'block';
            console.log('Opening Tab');
        }
        event.stopPropagation();
    });
});

function downloadImage() {
    const iframe = document.getElementById('scattertextIframe');
    const iframeContent = iframe.contentWindow || iframe.contentDocument;
  
    // Ensure the content is completely loaded
    iframe.onload = function () {
      // Access the content of the iframe
      const element = iframeContent.document.body;
      
      // Use html2canvas to take a screenshot of the iframe's content
      html2canvas(element).then(function (canvas) {
        // Create an image and set its source to the canvas data URL
        const image = new Image();
        image.src = canvas.toDataURL('image/png');
        
        // Create a link to download the image
        const link = document.createElement('a');
        link.href = image.src;
        link.download = 'scatter_plot.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
    };
  }
  
  function downloadWordTreeAsImage() {
    const iframe = document.getElementById('hiddenIframe');
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    const wordTreeElement = iframeDoc.getElementById('wordtree_basic');

    html2canvas(wordTreeElement).then(canvas => {
        // Create an image from the canvas
        const imgData = canvas.toDataURL('image/png');
        
        // Create a link element for downloading the image
        const a = document.createElement('a');
        a.href = imgData;
        a.download = 'wordtree.png';
        a.click();
    });
}








window.onload = function() {
    document.getElementById("feedback-form").addEventListener("submit", function(e) {
        e.preventDefault();  // Prevent default form submission

        var formData = new FormData(this);
        

        // Log each form field to the console
        for (var pair of formData.entries()) {
            console.log(pair[0]+ ': ' + pair[1]);
        }
        fetch('/submit-feedback', {
            method: 'POST',
            body: formData,  credentials: 'include',  // if your setup requires credentials
            headers: {
                'Accept': 'application/json',}
        })
        .then(response => {
            if (response.headers.get("Content-Type").includes("application/json")) {
                return response.json();
            } else {
                throw new Error('Non-JSON response from server');
            }
        })
        .then(data => {
            console.log(data); // Handle the JSON response here
            alert(data.message);  // Displaying an alert with the response message
            document.getElementById("feedback-form").reset();
            document.getElementById("feedback-form").style.display = 'none';
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        });
    });
};



document.addEventListener("DOMContentLoaded", function() {
    var menu = document.querySelector('.primary-menu');
    var toggle = document.querySelector('.menu-toggle');

    toggle.addEventListener('click', function() {
        if (menu.style.display === 'block') {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'block';
        }
    });
});



function updateOptionValues() {
    var baseUrl = window.location.hostname;
    var selectElement = document.querySelector('select[name="cloud_shape"]');

    selectElement.querySelectorAll('option').forEach(function(option) {
        if (baseUrl === 'ucrel-freetxt-2.lancs.ac.uk') {
            option.value = 'https://ucrel-freetxt-2.lancs.ac.uk/' + option.value;
        } else if (baseUrl === 'www.freetxt.app') {
            option.value = 'https://www.freetxt.app/' + option.value;
        }
          });
}

window.onload = updateOptionValues;
