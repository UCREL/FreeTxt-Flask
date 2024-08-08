const translations = {
  en: {
    "#meaning-analysis-btn": "What can I do in 'Meaning Analysis'?",
    "#meaning-analysis-panel": `
        <p>
          Another way of thinking of <strong>Meaning Analysis</strong> is <strong>Sentiment Analysis</strong>. This allows us to 'analyse' free-text according to what it tells us about how the respondents 'feel' about whatever we have asked them to give comments on. 'Sentiment' is another way of saying 'feeling' but could include respondents' opinions or reactions too.
        </p>
        <p>
          In <strong>Meaning Analysis</strong>, you will find the tools to carry out your own <strong>sentiment analysis</strong>. It might be useful to get a broad idea of how <em>positive</em> or <em>negative</em> the feedback you have received is. Once you have selected the data you want to use and put it into the program, your first option is between <strong>3 class sentiments</strong> or <strong>5 class sentiments</strong>.
        </p>
        <h3><strong>3 class sentiments</strong></h3>
        <p>Will let you <strong>analyse</strong> your data according to what percentage of it indicates (1) positive (2) neutral (3) negative feelings (<strong>sentiment</strong>).</p>
        <h3><strong>5 class sentiments</strong></h3>
        <p>Will let you <strong>analyse</strong> your data according to what percentage of it indicates (1) very positive (2) positive (3) neutral (4) negative (5) very negative feelings (<strong>sentiment</strong>).</p>
        <p>
          This information can be presented as (i) a <em>pie chart</em> (ii) a <em>bar chart</em> and/or (iii) a <em>sentiment table</em>. You will also see an <strong>overall sentiment</strong> score giving a general indication of whether the overall sentiment of your data is negative, neutral or positive.
        </p>
       
      `,
    "#carry-out-button": "How can I carry out a 'Meaning Analysis'?",
    "#carry-out-panel": `
          <p>From the FreeTxt <strong>Home</strong> page, click on <strong>Analysis</strong>.</p>
          <ol>
              <li><strong>Paste a text</strong> [copy and paste text into the box - this is useful if your data is not a .txt, .tsv or .xlsx file e.g. data you may have in a WORD document]</li>
              <li><strong>Use example data</strong> [you will need to select from the options below - this is useful if you just want to try out this tool initially]</li>
              <li><strong>Upload data file</strong> [this allows you to upload data directly by clicking on choose file and selecting the appropriate file. This option only works for .txt, .tsv or .xlsx files - see (i) above]</li>
          </ol>
      `,
    "#meaning-start-button": "How to start?",
    "#meaning-start-panel": `
          <p>Click on <strong>View Data</strong>. Your data is displayed (if you have gone for option (i) above, you will able to select <strong>split sentences</strong> or <strong>whole text</strong> for your data display).</p>
          <p>The <strong>Start Analysis</strong> bar at the bottom of the screen will flash and clicking on it will open up seven colour-coded options. Click on the black one <strong>Meaning Analysis.</strong></p>
          <hr>
                <img  src="./static/images/img/analysis/Pic1.png" class="special-image">
          <hr>
          <p>You then have the option of categorizing the sentiments in your data as 3 class sentiments or 5 class sentiments depending on which is most relevant to the level of information you need for your analysis.</p>
          <hr>
                <img  src="./static/images/img/analysis/Pic2.png" class="special-image">
          <hr>
          <p>The analysis will then be presented as a 3 class sentiment or a 5 class sentiment (i) <strong>pie chart</strong> and (ii) <strong>bar chart</strong>. By clicking on the <strong>download interactive...</strong> tab under each one, you can save a copy of the required chart(s) as a discrete file. An example of the bar chart is shown below. On the y-axis you can see the ‘<strong>count</strong>’, which indicates the number of times sentences in the text were classified according to each type of <strong>sentiment</strong> shown on the x-axis (i.e. negative, neutral, and positive here). If you scroll over each bar in the bar chart (or piece of the pie chart), the <strong>count</strong> will also be shown.</p>
          <hr>
                <img  src="./static/images/img/analysis/Pic3.png" class="special-image">
          <hr>
          <p>At the top of the <strong>pie chart</strong> and <strong>bar chart</strong> you will see a little camera icon. By clicking this, you can take a screenshot of your chart, for future use.</p>
          <hr>
                <img  src="./static/images/img/analysis/Pic4.png" class="special-image">
             <hr>
          <p>In addition, there is a <strong>sentiment table</strong>. In the example below, an overall sentiment score is given which in the case of the data analyzed below, suggests an overall positive sentiment. The number of entries viewed can be changed from 10 to up to 100 entries at a time. The <strong>sentiment label</strong> column will list either one of the 3 class sentiments appropriate to the selected sentence in the table or one of the 5 class sentiments depending on what you chose earlier. The <strong>confidence score</strong> tells you how confident FreeTxt is with the accuracy of the score given here. A confidence score of 0.99 (out of 1) tells you that the tool is very confident that the sentiment label is correct. By clicking on <strong>sentiment label</strong> or <strong>confidence score</strong> you can order your data according to sentiment or confidence accordingly.</p>
          <hr>
              <img  src="./static/images/img/analysis/Pic5.png" class="special-image">
          <hr>
          <p>The <strong>download sentiment table</strong> allows you to keep your own discrete copy of the <strong>sentiment table</strong> for the data you are analyzing.</p>
      `,
    "#sentiment-button": "What can I do in 'Sentiment Chart'?",
    "#sentiment-panel": `
          <p>The <strong>Sentiment Chart</strong> allows you to create a <strong>scatter plot</strong> of your data. You will find an overview of what a <strong>scatter plot</strong> is and how it might be useful to you in the analysis of your data under the <strong>sentiment chart</strong> tab.</p>
          <hr>
                <img src="./static/images/img/analysis/Pic7.png" class="special-image">
                <hr>        
          <p>Below is a <strong>scatter plot</strong> based on the data in example data in FreeTxt (see 'use example data' in the 'How can I...' section). </p>
          <hr>
                <img src="./static/images/img/analysis/Pic8.png" class="special-image">
                <hr>
          <p>The top positive and top negative/neutral words are listed in columns to the right of the plot. Hovering over a word in these lists highlights where it is in the <strong>scatter plot</strong>, which is useful if you have large amounts of data to analyse. By hovering over a specific word in the <strong>scatter plot</strong>, you see information about how often it is used in the dataset, along with its’ score (ranging from -1 to 1).</p>
         
          <p>If you click on an individual word within the <strong>scatter plot</strong>, you can view examples of how it is used in sentences with either a positive and/or negative sentiment in your text. For example, clicking the word 'budget' in the sample data, you will see all of the occasions 'budget' is used in a sentence that has been analysed as being positive.</p>
          <hr>
                <img src="./static/images/img/analysis/Pic9.png" class="special-image">
                <hr> 
          `,
    "#sentiment-chart-button": "How can I create a 'Sentiment Chart'?",
    "#sentiment-chart-panel": `
          <p>From the FreeTxt <strong>Home</strong> page, click on <strong>Analysis</strong>.</p>
          <ol>
              <li><strong>Paste a text</strong> [copy and paste text into the box - this is useful if your data is not a .txt, .tsv or .xlsx file e.g. data you may have in a WORD document]</li>
              <li><strong>Use example data</strong> [you will need to select from the options below - this is useful if you just want to try out this tool initially]</li>
              <li><strong>Upload data file</strong> [this allows you to upload data directly by clicking on choose file and selecting the appropriate file. This option only works for .txt, .tsv or .xlsx files - see (i) above]</li>
          </ol>
      `,
    "#sentiment-start-button": "How to start",
    "#sentiment-start-panel": `
          <p>Click on <strong>View Data</strong>. Your data is displayed (if you have gone for option (i) above, you will able to select <strong>split sentences</strong> or <strong>whole text</strong> for your data display).</p>
          <p>The <strong>Start Analysis</strong> bar at the bottom of the screen will flash and clicking on it will open up seven colour-coded options. Click on the blue one <strong>Sentiment Chart.</strong></p>
          <hr>
                <img src="./static/images/img/analysis/Pic10.png" class="special-image">
                <hr> 
          <p>A <strong>scatter plot</strong> (similar to the one above) based on the data you have inputted will then be produced.</p>
          <p>A <strong>search the chart</strong> box allows you to look for a particular word which might be of interest to your analysis on the chart. <strong>Download interactive scatter text</strong> at the bottom of the page enables you to download a discrete copy of your own <strong>scatter plot</strong>.</p>
      `,

    "#summarisation-button": "What can I do in 'Summarisation'?",
    "#summarisation-panel": `
          <p>The <strong>summarisation</strong> tab is self-explanatory. It allows you to create a basic <strong>summary</strong> of the text you are using. It is based on the <em>ACC (Welsh Automatic Text Summarisation)</em> project and you can find more information about that in the <em>Analyse</em> section of the <strong>Welsh Digital Grid</strong> site > <a href="http://digigrid.cymru/analyse/" style="text-decoration: none; color: blue;">http://digigrid.cymru/analyse/</a>.</p>
          <p>The summariser can be useful in giving you an initial overview of your data - the main thrust of what it is telling you - and may help you to formulate the next stage of your analysis.</p>
      `,

    "#summarisation-carry-button":
      "How can I carry out a 'Summarisation' of my text/data?",
    "#summarisation-carry-panel": `
          <p>From the FreeTxt <strong>Home</strong> page, click on <strong>Analysis</strong>.</p>
          <ol>
              <li><strong>Paste a text</strong> [copy and paste text into the box - this is useful if your data is not a .txt, .tsv, or .xlsx file e.g., data you may have in a WORD document]</li>
              <li><strong>Use example data</strong> [you will need to select from the options below - this is useful if you just want to try out this tool initially]</li>
              <li><strong>Upload data file</strong> [this allows you to upload data directly by clicking on choose file and selecting the appropriate file. This option only works for .txt, .tsv, or .xlsx files - see (i) above]</li>
          </ol>
          <p>Click on <strong>View Data</strong>. Your data is displayed (if you have gone for option (i) above, you will able to select <strong>split sentences</strong> or <strong>whole text</strong> for your data display).</p>
          <p>The <strong>Start Analysis</strong> bar at the bottom of the screen will flash and clicking on it will open up seven colour-coded options. Click on the yellow one <strong>Summarisation.</strong></p>
          <hr>
                <img src="./static/images/img/analysis/Pic10.png" class="special-image">
                <hr> 
          
          <p>This will produce a summary which equates to 40% of the text which you have uploaded. This can be adjusted to suit the needs of your particular analysis by clicking along the line above the summary.</p>
          <hr>
                <img src="./static/images/img/analysis/Pic11.png" class="special-image">
                <hr> 
          <p>Clicking on <strong>Download Summary</strong> allows you to save a copy of your summary to your own device.</p>
      `,

    "#word-cloud-button": "What can I do in 'Word Cloud'?",
    "#word-cloud-panel": `
          <p>When we have a large amount of text, it can be useful sometimes to visualize everything in such a way that all the key words - that is the words which are used most often in the text - are clearly larger and more prominent than others which occur less often.</p>
          <p>A <strong>Word Cloud</strong> is one way which enables us to do this. We call it a <strong>word cloud</strong> because this information is often (but not always) shown in the shape of a cloud. Below is an example of a <strong>word cloud</strong> (not in the shape of a cloud!) created using text relating to the TV show Dr Who:</p>
          <hr>
                <img src="./static/images/img/analysis/Pic12.png" class="special-image">
                <hr> 
          
          <p>Clearly, the most commonly used word here is <em>Doctor</em> as we might expect (its larger size, compared to the other words, tells us this). Other commonly used words include: <em>BBC</em>, <em>series</em>, <em>time</em>, <em>episode/s</em>, <em>television</em>, and <em>first</em>.</p>
          <p>A <strong>word cloud</strong> is a handy tool for giving us a visual representation of what the important and stand-out words in a piece of text are. This can be useful, for example, in presenting the main emphasis within a text in a simple, visual way to an audience who might be interested in the topic. An example of this is how some news outlets' online sites (e.g., Sky News) occasionally use a <strong>word cloud</strong> to illustrate what the most frequent words in an important political speech were i.e., where the main emphasis was concentrated and what that tells us about the message being conveyed. Using a <strong>word cloud</strong> to do this may be a more effective way of illustrating this to the reader than just through a news article.</p>
      `,
    "#word-cloud-def-button":
      "Is a Word Cloud only based on how often words occur in a specific text?",
    "#word-cloud-def-panel": `
          <p>The size of the words in some <strong>word clouds</strong> is directly related to how often they occur in the text you are looking at - these are <strong>word clouds</strong> based on the <strong>frequency</strong> of words in your text. <strong>Word clouds</strong> can also tell us about the nature of the <strong>key words</strong> in them - for example, as the word <em>the</em> is the most common word in the English language, this is the word that we expect to be used most often in a text. Showing <em>the</em> in a word cloud wouldn’t be particularly interesting as it doesn’t show us anything we wouldn’t expect. <em>The</em> is not ‘key’ to a particular text, as it is common to all texts. If a word like <em>castle</em> occurs a lot of time in your text (perhaps if you are looking at reviews of a castle!), it would be defined as ‘key’ because it isn’t expected to be common in everyday language. <strong>Key words</strong> tell us what the most significant words in a given text are (by comparing their frequency to a 100 million word dataset of written and spoken language called the British National Corpus). <strong>Key words</strong> are calculated using a measure called the <strong>keyness value</strong> and we would call a <strong>word cloud</strong> which is directly related to <strong>keyness value</strong> rather than solely frequency a <strong>key word cloud</strong>. You can choose which option you would prefer for your own analysis within the <strong>word cloud</strong> tool (see below) – the <strong>key word cloud</strong> option is the default option for FreeTxt.</p>
      `,
    "#word-cloud-create-button":
      "How can I create a 'Word Cloud' from my data?",
    "#word-cloud-create-panel": `
          <p>From the FreeTxt <strong>Home</strong> page, click on <strong>Analysis</strong>. You can either:</p>
          <ol>
              <li><strong>Paste a text:</strong> [copy and paste text into the box - this is useful if your data is not a .txt, .tsv, or .xlsx file e.g., data you may have in a WORD document]</li>
              <li><strong>Use example data:</strong> [you will need to select from the options below - this is useful if you just want to try out this tool initially]</li>
              <li><strong>Upload data file:</strong> [this allows you to upload data directly by clicking on <strong>choose file</strong> and selecting the appropriate file. This option only works for .txt, .tsv, or .xlsx files - see (i) above]</li>
          </ol>
          <p>Click on <strong>View Data</strong>. Your data is displayed (if you have gone for option (i) above, you will able to select <strong>split sentences</strong> or <strong>whole text</strong> for your data display).</p>
          <p>The <strong>Start Analysis</strong> bar at the bottom of the screen will flash and clicking on it will open up seven colour-coded options. Click on the purple one <strong>Word Cloud.</strong></p>
          <hr>
                <img src="./static/images/img/analysis/Pic13.png" class="special-image">
                <hr> 
          <p>The next screenshot illustrates the options you will be offered to create your own bespoke word cloud based on the text / data you wish to analyse:</p>
          <hr>
                <img src="./static/images/img/analysis/Pic14.png" class="special-image">
                <hr> 
          <p>The four options are:</p>
          <ol>
              <li>Select cloud type: The default here is for All words. However, this can be changed to restrict the word cloud to certain parts of speech e.g., nouns, verbs. In addition, semantic tags can be selected to visualise the semantic areas. There is also the possibility to select 2 / 3 / 4 - word clusters.</li>
              <hr>
                <img src="./static/images/img/analysis/Pic15.png" class="special-image">
                <hr> 
              <li>Select cloud shape: The default option here is cloud. However, as the screenshot illustrates, the word cloud can be changed to any of the following shapes: Comment / Light bulb / Volume up / Microphone / Welsh flag / Sherlock Holmes / National Trust / Cadw / Rectangle / Circle / Cadw2</li>
              <li>Select cloud outline colour: The default is white but further options include grey, yellow, black, green, blue, or red.</li>
              <li>Select cloud measurement: This refers back to the section about keyness and frequency. The default option is keyness.</li>
          </ol>
          <hr>
                <img src="./static/images/img/analysis/Pic16.png" class="special-image">
                <hr> 
          <p>The Download Word Cloud Image tab allows you to download and save any word cloud/s you may have created based on your own data. Below this you will find Word List where you can select / deselect specific words from your word cloud.</p>
      `,
    "#relation-button": "What can I do in 'Word Use & Relationships'?",
    "#relation-panel": `
          <p>Here you are able to analyse <em>how</em> the words in your data are used (in particular in connection with each other) and <em>what</em> their relationships can tell you about the wider meaning of your text. It is useful to consider more closely how different words can have a different meaning or tell a different story when they occur together. Their relationship with each other and the coming together of two words in this way can be referred to as <strong>collocations</strong>.</p>
      `,
    "#collocation-button": "What is a 'Collocation'?",
    "#collocation-panel": `
          <p>It might be helpful to think of this term <strong>collocation</strong> as two parts - the second one <strong>location</strong> tells us where something is and the first part <strong>co­­-</strong> is often used to make us think of something together (e.g. <strong>cooperate</strong> - working together). So, <strong>collocation</strong> will tell us about words which are often <strong>located together</strong> and because they are located together, they combine to give a particular meaning.</p>
          <p>Let's look at a word like <em>pay</em> for example. On its own, it can be a verb <em>to pay someone</em> or a noun <em>I received my pay today</em>. However, it is possible to <strong>locate</strong> other words <strong>together</strong> with <em>pay</em> to create combinations with specific meanings. Some examples might be:</p>
          <ul>
              <li><em>Equal pay</em></li>
              <li><em>Pay packet</em></li>
              <li><em>Pay scale</em></li>
              <li><em>Half pay</em></li>
              <li><em>Gladly pay</em></li>
              <li><em>Pay up</em></li>
          </ul>
          <p>These combinations all add to the meaning of the verb or noun <em>pay</em> and occur naturally in language. In the first four examples, <em>pay</em> = money or earnings but the combinations we have noted with <em>equal / packet / scale / half</em> would not work with <em>money</em> as well.</p>
          <p><em>Equal money</em> is a possible <strong>collocation</strong> of <em>money</em> but <em>money packet</em>, <em>money scale</em> and <em>half money</em> are not.</p>
      `,
    "#collocation-why-button":
      "Why might I want to look for collocations / word relationships in FreeTxt?",
    "#collocation-why-panel": `
        <p>Being able to search for <strong>collocations</strong> in your text will help you get a greater understanding of meanings which only become apparent when we see two words <strong>located together</strong>. If we consider, for example, text which includes feedback on accommodation. It is probable that the word <em>room</em> will be a high frequency word, that is one which occurs very often in the text.</p>
        <p>However, in order for the accommodation owner to understand and analyse that information in more detail, being able to identify <strong>collocations</strong> with <em>room</em> would be a very useful tool:</p>
        <ul>
            <li>Which adjectives <strong>collocate</strong> with <em>room</em> and what do they tell us about it e.g. <em>warm</em> or <em>hot / cold</em>; <em>noisy</em> or <em>quiet</em>; <em>double</em> or <em>single</em>.</li>
            <li>Does the text refer to specific rooms e.g. <em>dining / bed / reception</em>?</li>
            <li>Are there any other specific <strong>collocations</strong> which help the accommodation owner understand more about what is targeted in the feedback e.g. <em>room key / room rates / adjoining room</em>?</li>
        </ul>
      `,
    "#relationship-use-button":
      "How can I investigate 'Word Use and Relationships' from my data?",
    "#relationship-use-panel": `
        <p>From the FreeTxt <strong>Home</strong> page, click on <strong>Analysis</strong>.</p>
        <p>You can either:</p>
        <ul>
            <li>(i) <strong>Paste a text</strong> [copy and paste text into the box - this is useful if your data is not a .txt, .tsv or .xlsx file e.g. data you may have in a WORD document]</li>
            <li>(ii) <strong>Use example data</strong> [you will need to select from the options below - this is useful if you just want to try out this tool initially]</li>
            <li>(iii) <strong>Upload data file</strong> [this allows you to upload data directly by clicking on <strong>choose file</strong> and selecting the appropriate file. This option only works for .txt, .tsv or .xlsx files - see (i) above]</li>
        </ul>
        <p>Click on <strong>View Data</strong>.</p>
        <p>Your data is displayed (if you have gone for option (i) above, you will able to select <strong>split sentences</strong> or <strong>whole text</strong> for your data display).</p>
        <p>The <strong>Start Analysis</strong> bar at the bottom of the screen will flash and clicking on it will open up seven colour-coded options. Click on the brown one <strong>Word Use &amp; Relationships.</strong></p>
        <hr>
                <img src="./static/images/img/analysis/Pic22.png" class="special-image">
                <hr> 
        <p>You will be asked to <strong>select a word for analysis</strong> (see screenshot below). You will need to tell FreeTxt whether you wish to use the <strong>word category</strong> (the default setting) or choose the <strong>POS tag</strong> (<em>Part Of Speech</em>) or the <strong>Semantic tag</strong>. The word for analysis in our example is <em>hotel</em> and this is based on the example data in FreeTxt. In addition, when considering the visualization of your data, you are able to adjust the window size by clicking along the line below it.</p>
        <hr>
                <img src="./static/images/img/analysis/Pic23.png" class="special-image">
                <hr> 
        <p>The <strong>select a word for analysis</strong> options you have selected will illustrate your keyword as in the next screenshot. 10 entries are shown here but this can be adjusted by clicking on the <em>Show entries</em> box. In <strong>window size</strong>, 5 is selected so the five words to the left of the <strong>keyword</strong> are shown under <strong>Left Context</strong> as are the five to the right in <strong>Right Context</strong>. Clicking on either of these headings will arrange the data in accordance with the appropriate <strong>context</strong> selected.</p>
        <hr>
                <img src="./static/images/img/analysis/Pic24.png" class="special-image">
                <hr> 
        <p>You can also search for specific words that are used in the right and left context of your search term (this visualization is called a <strong>concordance</strong> output). To do this, simply type your word into the search box seen at the top right of the image above.</p>
       
        <p><strong>Download keyword results</strong> allows you to save the results from your analysis away from the FreeTxt site.</p>
        <p>Referring to the discussions on <strong>collocations</strong> (above), a list of <strong>collocations</strong> for <em>hotel</em> in the data is presented below the <strong>concordance</strong> output. Again, this can be downloaded as a discrete file by clicking on <strong>Download Collocation Results</strong>. The example used here has limited data and so the <strong>frequency</strong> is not so great (i.e. the amount of times each word in your text occurs) - however, the greater the amount of data used, the higher the frequency number will be. The other columns relate to <strong>MI - Mutual Information</strong> and <strong>LL - Log Likelihood</strong> (the <strong>MI</strong> score is a statistical measure that shows the strength of association between words; <strong>LL</strong> is a probability statistic that compares the frequency of co-occurrence of two words). Clicking on any of the column headings will arrange the data in order of the specific column selected. Once again, this analysis can be downloaded for use outside of FreeTxt. If you selected a particular <strong>POS Tag</strong> or <strong>Semantic Tag</strong> at the start of your analysis, the words shown in this table are those which most frequently occur within that given category.</p>
        <hr>
                <img src="./static/images/img/analysis/Pic25.png" class="special-image">
                <hr> 
        <p>Finally, you are also able to visualise this data as an <strong>interactive network graph</strong> (see below). Not only does this allow you to see the connections - the relationships - between the word you have chosen, but it also allows you to move the click on items and move them around, to make them easier to see and/or to allow you to present the words in whatever way you prefer. The graph can be downloaded by clicking on the <strong>download interactive network graph</strong> tab underneath.</p>
      
        <hr>
                <img src="./static/images/img/analysis/Pic26.png" class="special-image">
                <hr> 
        `,
    "#word-tree-buttton": "What can I do in 'Word Tree'?",
    "#word-tree-panel": `
        <p>It is useful to read the user guide for <strong>Word Use and Relationships</strong> in combination with this guide as it gives information on combinations of words often referred to as <strong>collocations</strong>.</p>
        <p>The <strong>Word Tree</strong> tab will require you to input a <strong>search word</strong>. In the case below, <em>hotel</em> (based on the FreeTxt example data) is the <strong>search word</strong>. You will be presented with information which explains what a <strong>word tree</strong> is and how to interpret the information contained within it.</p>
        <hr>
                <img src="./static/images/img/analysis/Pic17.png" class="special-image">
                <hr> 
        `,
    "#word-tree-investigate-buttton":
      "How can I investigate 'Word Tree' information from my data?",
    "#word-tree-investigate-panel": `
        <p>From the FreeTxt <strong>Home</strong> page, click on <strong>Analysis</strong>. You can either:</p>
        <ol>
            <li><strong>Paste a text</strong> [copy and paste text into the box - this is useful if your data is not a .txt, .tsv or .xlsx file e.g., data you may have in a WORD document]</li>
            <li><strong>Use example data</strong> [you will need to select from the options below - this is useful if you just want to try out this tool initially]</li>
            <li><strong>Upload data file</strong> [this allows you to upload data directly by clicking on <strong>choose file</strong> and selecting the appropriate file. This option only works for .txt, .tsv or .xlsx files - see (i) above]</li>
        </ol>
  
        <p>
            <span data-contrast="auto">Click on </span><b><span data-contrast="auto">View Data</span></b><span data-contrast="auto">.</span>
        </p>
  
        <p>
            <span data-contrast="auto">Your data is displayed (if you have gone for option (i) above, you will able to select </span><b><span data-contrast="auto">split sentences</span></b><span data-contrast="auto"> or </span><b><span data-contrast="auto">whole text</span></b><span data-contrast="auto"> for your data display).</span>
        </p>
  
        <p>
            <span data-contrast="auto">The </span><b><span data-contrast="auto">Start Analysis</span></b><span data-contrast="auto"> bar at the bottom of the screen will flash and clicking on it will open up seven colour-coded options. Click on the green one </span><b><span data-contrast="auto">Word Tree.</span></b>
        </p>
        <hr>
            <img src="./static/images/img/analysis/Pic18.png" class="special-image">
            <hr>
        <p>
            <span data-contrast="auto">As mentioned above, you will be asked to </span><b><span data-contrast="auto">select a word for analysis</span></b><span data-contrast="auto"> and </span><b><span data-contrast="auto">Word Tree </span></b><span data-contrast="auto">will create a visualisation (= the </span><b><span data-contrast="auto">word tree</span></b><span data-contrast="auto">) based on your selection. The screenshot below shows the </span><b><span data-contrast="auto">word tree</span></b><span data-contrast="auto"> based on the </span><b><span data-contrast="auto">search word</span></b> <em><span data-contrast="auto">hotel</span></em><span data-contrast="auto"> in the FreeTxt example data. (See above for guidance on how to interpret the </span><b><span data-contrast="auto">word tree</span></b><span data-contrast="auto">).</span>
        </p>
        <hr>
        <img src="./static/images/img/analysis/Pic19.png" class="special-image">
        <hr>
        <p>
            <span data-contrast="auto">The </span><b><span data-contrast="auto">word tree</span></b><span data-contrast="auto"> is fully interactive, so you are able to click any word in the tree to see what words commonly occur before and after it. If you click on the word </span><em><span data-contrast="auto">Great</span></em><span data-contrast="auto"> in the above image, you will see the new </span><b><span data-contrast="auto">word tree </span></b><span data-contrast="auto">below. This interactive functionality means you can really delve deep into your data to see what patterns exist.</span>
        </p>
        <hr>
        <img src="./static/images/img/analysis/Pic20.png" class="special-image">
        <hr>
        <p>
            <span data-contrast="auto">If you scroll over any word in the </span><b><span data-contrast="auto">word tree</span></b><span data-contrast="auto"> you will see information about the </span><b><span data-contrast="auto">weight</span></b><span data-contrast="auto"> of the word. This is the frequency of the word. The </span><b><span data-contrast="auto">word tree</span></b><span data-contrast="auto"> below shows that the word </span><em><span data-contrast="auto">price</span></em><span data-contrast="auto"> is used once in the example text.</span>
        </p>
        <hr>
            <img src="./static/images/img/analysis/Pic21.png" class="special-image">
            <hr>
        <p>
            <span data-contrast="auto">Clicking on </span><b><span data-contrast="auto">Download Interactive Word Tree</span></b><span data-contrast="auto"> allows you to save a copy of the </span><b><span data-contrast="auto">word tree</span></b><span data-contrast="auto"> you have created for further use in your own analysis.</span>
        </p>
      `,
  },
  cy: {
    "#meaning-analysis-btn": "Beth alla i wneud yn 'Dadansoddi Ystyr'?",
    "#meaning-analysis-panel": `
        <p>
          Ffordd arall o feddwl am <strong>Ddadansoddi Ystyr</strong> yw <strong>Dadansoddi Sentiment</strong>. Mae hyn yn caniatáu i ni 'ddadansoddi' testun rhydd yn ôl yr hyn mae'n ei ddweud wrthym am sut mae'r ymatebwyr yn 'teimlo' am beth bynnag rydym wedi gofyn iddynt roi sylwadau arno. Mae 'Sentiment' yn ffordd arall o ddweud 'teimlad' ond gallai gynnwys barn neu adweithiau'r ymatebwyr hefyd.
        </p>
        <p>
          Yn <strong>Ddadansoddi Ystyr</strong>, fe welwch yr offer i gynnal eich <strong>dadansoddiad sentiment</strong> eich hun. Gallai fod yn ddefnyddiol i gael syniad bras o ba mor <em>positif</em> neu <em>negatif</em> yw'r adborth rydych chi wedi'i dderbyn. Ar ôl i chi ddewis y data rydych chi eisiau ei ddefnyddio a'i roi yn y rhaglen, eich dewis cyntaf yw rhwng <strong>sentimentau dosbarth 3</strong> neu <strong>sentimentau dosbarth 5</strong>.
        </p>
        <h3><strong>Sentimentau dosbarth 3</strong></h3>
        <p>Bydd yn caniatáu i chi <strong>ddadansoddi</strong> eich data yn ôl pa ganran ohono sy'n dangos (1) teimladau positif (2) niwtral (3) negatif (<strong>sentiment</strong>).</p>
      
        <h3><strong>Sentimentau dosbarth 5</strong></h3>
        <p>Bydd yn caniatáu i chi <strong>ddadansoddi</strong> eich data yn ôl pa ganran ohono sy'n dangos (1) teimladau positif iawn (2) positif (3) niwtral (4) negatif (5) negatif iawn (<strong>sentiment</strong>).</p>
        <p>
          Gellir cyflwyno'r wybodaeth hon fel (i) <em>siart cylch</em> (ii) <em>siart bar</em> ac/neu (iii) <em>tabl sentiment</em>. Byddwch hefyd yn gweld <strong>sgôr sentiment cyffredinol</strong> sy'n rhoi arwydd cyffredinol a yw'r cyfanswm sentiment o'ch data yn negatif, niwtral neu positif.
        </p>
       
      `,
    "#carry-out-button": "Sut galla i gynnal 'Dadansoddiad Ystyr'?",
    "#carry-out-panel": `
          <p>O dudalen Hafan FreeTxt, cliciwch ar <strong>Dadansoddi</strong>.</p>
          <ol>
              <li><strong>Gludo testun</strong> [copïo a gludo testun i'r blwch - mae hyn yn ddefnyddiol os nad yw eich data yn ffeil .txt, .tsv neu .xlsx e.e. data sydd gennych mewn dogfen WORD]</li>
              <li><strong>Defnyddio data enghreifftiol</strong> [bydd angen i chi ddewis o'r opsiynau sy'n cael eu cynnig - mae hyn yn ddefnyddiol os ydych chi ond eisiau arbrofi gyda'r offeryn yma yn y lle cyntaf]</li>
              <li><strong>Llwytho ffeil ddata i fyny</strong> [mae hyn yn gadael i chi lwytho data i fyny'n uniongyrchol trwy glicio ar dewiswch ffeil a dewis y ffeil briodol. Mae'r opsiwn yma'n gweithio ar gyfer ffeiliau .txt, .tsv neu .xlsx yn unig - gweler (i) uchod]</li>
          </ol>
      `,
    "#meaning-start-button": "Sut i ddechrau?",
    "#meaning-start-panel": `
          <p>Cliciwch ar <strong>Gweld Data</strong>. Caiff eich data ei arddangos (os ydych wedi mynd am opsiwn (i) uchod, byddwch yn gallu dewis rhannu brawddegau neu destun cyfan i arddangos eich data).</p>
          <p>Bydd y bar <strong>Dechrau Dadansoddi</strong> ar waelod y sgrin yn dechrau fflachio ac o glicio arno, bydd saith opsiwn lliwiau gwahanol ar gael i chi. Cliciwch ar yr un du <strong>Dadansoddi Ystyr</strong>.</p>
          <hr>
                <img src="./static/images/img/analysis/Picture1.png" class="special-image">
                <hr> 
          <p>Wedyn bydd gennych yr opsiwn o gategoreiddio'r sentimentau yn eich data yn sentimentau 3 dosbarth neu sentimentau 5 dosbarth gan ddibynnu ar ba un sydd fwyaf perthnasol i'r lefel o wybodaeth sydd ei hangen arnoch ar gyfer eich dadansoddiad.</p>
          <hr>
                <img src="./static/images/img/analysis/Picture2.png" class="special-image">
                <hr> 
          <p>Yna caiff y dadansoddiad ei gyflwyno fel (i) <strong>siart cylch</strong> a (ii) <strong>siart bar</strong> sentimentau 3 dosbarth neu 5 dosbarth. Trwy glicio ar y tab <strong>lawrlwytho rhyngweithiol</strong> o dan bob un, gallwch gadw copi o'r siart(iau) angenrheidiol fel ffeil arwahanol. Dangosir enghraifft o'r siart bar isod. Ar echelin Y, gallwch weld y ‘<strong>cyfrif</strong>’, sy'n dangos faint o weithiau cafodd brawddegau yn y testun eu dosbarthu yn ôl pob math o <strong>sentiment</strong> a ddangosir ar echelin X (h.y. negyddol, niwtral, a chadarnhaol yma). Os ydych yn sgrolio dros bob bar yn y siart bar (neu ddarn o'r siart cylch), dangosir y <strong>cyfrif</strong> hefyd.</p>
          <hr>
                <img src="./static/images/img/analysis/Picture3.png" class="special-image">
                <hr> 
          <p>Ar ben y <strong>siart cylch</strong> a'r <strong>siart bar</strong> fe welwch eicon camera bach. Trwy glicio arno, gallwch dynnu sgrinlun o'ch siart i'w ddefnyddio yn y dyfodol.</p>
          <hr>
                <img src="./static/images/img/analysis/Picture4.png" class="special-image">
                <hr> 
          <p>Yn ogystal, mae <strong>tabl sentiment</strong>. Yn yr enghraifft isod, rhoddir sgôr sentiment cyffredinol sydd yn awgrymu, yn achos y data a ddadansoddwyd isod, bod cyffredinoldeb y sentiment yn gadarnhaol. Gellir newid nifer y cofnodion a welir o 10 i fyny i 100 o gofnodion ar y tro. Bydd y golofn <strong>label sentiment</strong> yn rhestru naill ai un o'r sentimentau 3 dosbarth sy'n addas ar gyfer y frawddeg a ddewiswyd yn y tabl neu un o'r sentimentau 5 dosbarth yn dibynnu ar yr hyn a ddewisoch chi'n gynt. Mae'r <strong>sgôr hyder</strong> yn rhoi gwybod i chi pa mor hyderus yw FreeTxt ynghylch cywirdeb y sgôr a roddir yma. Mae sgôr hyder o 0.99 (allan o 1) yn dangos bod yr offeryn yn hyderus iawn bod y label sentiment yn gywir. Trwy glicio ar <strong>label sentiment</strong> neu <strong>sgôr hyder</strong> gallwch drefnu eich data yn ôl sentiment neu hyder yn unol â hynny.</p>
          <hr>
                <img src="./static/images/img/analysis/Picture5.png" class="special-image">
                <hr> 
          <p>Mae'r botwm <strong>lawrlwytho tabl sentiment</strong> yn caniatáu i chi gadw copi arwahanol eich hun o'r <strong>tabl sentiment</strong> ar gyfer y data rydych yn ei ddadansoddi.</p>
      `,
    "#sentiment-button": "Beth alla i wneud yn 'Siart Sentiment'?",
    "#sentiment-panel": `
          <p>Mae'r Siart Sentiment yn gadael i chi greu plot gwasgariad o'ch data. Fe gewch drosolwg o beth yw plot gwasgariad a sut y gallai fod o ddefnydd i chi wrth ddadansoddi eich data o dan y tab siart sentiment.</p>
          <hr>
                <img src="./static/images/img/analysis/Picture6.png" class="special-image">
                <hr> 
          <p>Isod mae plot gwasgariad wedi'i seilio ar ddata a gasglwyd o fwletinau newyddion. Mae'r geiriau cadarnhaol uchaf a'r geiriau negyddol/niwtral uchaf yn cael eu rhestru mewn colofnau i'r dde. Mae hofran uwchben gair yn y rhestri hyn yn amlygu ble y mae yn y plot gwasgariad sy'n ddefnyddiol os oes gennych lawer iawn o ddata i'w ddadansoddi. Trwy hofran dros air penodol yn y plot gwasgariad, fe welwch wybodaeth am ba mor aml mae'n cael ei ddefnyddio yn y set ddata, ynghyd â'i sgôr.</p>
          <hr>
                <img src="./static/images/img/analysis/Picture7.png" class="special-image">
                <hr> 
          
          <p>Os cliciwch chi ar air unigol o fewn y plot gwasgariad gallwch weld enghreifftiau o sut mae'n cael ei ddefnyddio mewn brawddegau gyda sentiment cadarnhaol a/neu negyddol yn eich testun. Er enghraifft, o glicio ar y gair 'galw' yn nata'r newyddion, fe welwch bob tro mae'r gair 'galw' yn cael ei ddefnyddio mewn brawddeg a ddadansoddwyd yn un gadarnhaol.</p>
          <hr>
                <img src="./static/images/img/analysis/Picture8.png" class="special-image">
                <hr>     
          `,
    "#sentiment-chart-button": "Sut galla i greu 'Siart Sentiment'?",
    "#sentiment-chart-panel": `
          <p>O dudalen Hafan TestunRhydd, cliciwch ar <strong>Dadansoddi</strong>.</p>
          <ol>
              <li><strong>Gludo testun</strong> [copïo a gludo testun i'r blwch - mae hyn yn ddefnyddiol os nad yw eich data yn ffeil .txt, .tsv neu .xlsx e.e. data sydd gennych mewn dogfen WORD]</li>
              <li><strong>Defnyddio data enghreifftiol</strong> [bydd angen i chi ddewis o'r opsiynau sy'n cael eu cynnig - mae hyn yn ddefnyddiol os ydych chi ond eisiau arbrofi gyda'r offeryn yma yn y lle cyntaf]</li>
              <li><strong>Llwytho ffeil ddata i fyny</strong> [mae hyn yn gadael i chi lwytho data i fyny'n uniongyrchol trwy glicio ar dewiswch ffeil a dewis y ffeil briodol. Mae'r opsiwn yma'n gweithio ar gyfer ffeiliau .txt, .tsv neu .xlsx yn unig - gweler (i) uchod]</li>
          </ol>
      `,
    "#sentiment-start-button": "Sut i ddechrau",
    "#sentiment-start-panel": `
          <p>Cliciwch ar <strong>Gweld Data</strong>. Caiff eich data ei arddangos (os ydych wedi mynd am opsiwn (i) uchod, byddwch yn gallu dewis rhannu brawddegau neu destun cyfan i arddangos eich data).</p>
          <p>Bydd y bar <strong>Dechrau Dadansoddi</strong> ar waelod y sgrin yn dechrau fflachio ac o glicio arno, bydd saith opsiwn lliwiau gwahanol ar gael i chi. Cliciwch ar yr un glas <strong>Siart Sentiment</strong>.</p>
          <hr>
                <img src="./static/images/img/analysis/Picture9.png" class="special-image">
                <hr> 
          <p>Wedyn, cynhyrchir <strong>plot gwasgariad</strong> (tebyg i'r un uchod) wedi'i seilio ar y data rydych chi wedi'i fewnbynnu.</p>
          <p>Mae blwch <strong>chwilio'r siart</strong> yn gadael i chi chwilio am air penodol ar y siart a allai fod o ddiddordeb yn eich dadansoddiad. Mae <strong>Lawrlwytho testun gwasgariad rhyngweithiol</strong> ar waelod y dudalen yn fodd i chi lawrlwytho copi arwahanol o'ch <strong>plot gwasgariad</strong> eich hunan.</p>
      `,
    "#summarisation-button": "Beth alla i wneud yn 'Crynodebu'?",
    "#summarisation-panel": `
          <p>Mae'r tab <strong>crynodebu</strong> yn hunan-esboniadol. Mae'n gadael i chi greu <strong>crynodeb</strong> sylfaenol o'r testun rydych chi'n ei ddefnyddio. Mae wedi'i seilio ar brosiect <em>ACC (Adnodd Creu Crynodebau)</em> a gallwch ddod o hyd i fwy o wybodaeth amdano yn adran <em>Nodi a Dadansoddi</em> safle <strong>Grid Digidol Cymru</strong> > <a href="https://digigrid.cymru/cy/analyse/" style="text-decoration: none; color: blue;">https://digigrid.cymru/cy/analyse/</a>.</p>
          <p>Gall <strong>crynodebu</strong> fod yn ddefnyddiol wrth roi trosolwg gychwynnol o'ch data i chi - prif fyrdwn yr hyn mae'n ei ddweud wrthoch chi - ac fe all eich helpu i lunio cam nesaf eich dadansoddiad.</p>
      `,
    "#summarisation-carry-button": "Sut galla i 'Grynodebu' fy nhestun/data?",
    "#summarisation-carry-panel": `
          <p>O dudalen Hafan TestunRhydd, cliciwch ar <strong>Dadansoddi</strong>.</p>
          <ol>
              <li><strong>Gludo testun</strong> [copïo a gludo testun i'r blwch - mae hyn yn ddefnyddiol os nad yw eich data yn ffeil .txt, .tsv neu .xlsx e.e., data sydd gennych mewn dogfen WORD]</li>
              <li><strong>Defnyddio data enghreifftiol</strong> [bydd angen i chi ddewis o'r opsiynau sy'n cael eu cynnig - mae hyn yn ddefnyddiol os ydych chi ond eisiau arbrofi gyda'r offeryn yma yn y lle cyntaf]</li>
              <li><strong>Llwytho ffeil ddata i fyny</strong> [mae hyn yn gadael i chi lwytho data i fyny'n uniongyrchol trwy glicio ar dewiswch ffeil a dewis y ffeil briodol. Mae'r opsiwn yma'n gweithio ar gyfer ffeiliau .txt, .tsv neu .xlsx yn unig - gweler (i) uchod]</li>
          </ol>
          <p>Cliciwch ar <strong>Gweld Data</strong>. Caiff eich data ei arddangos (os ydych wedi mynd am opsiwn (i) uchod, byddwch yn gallu dewis rhannu brawddegau neu testun cyfan i arddangos eich data).</p>
          <p>Bydd y bar <strong>Dechrau Dadansoddi</strong> ar waelod y sgrin yn dechrau fflachio ac o glicio arno, bydd saith opsiwn lliwiau gwahanol ar gael i chi. Cliciwch ar yr un melyn <strong>Crynodebu</strong>.</p>
          <p>Bydd hyn yn cynhyrchu crynodeb sy'n gyfwerth â 40% o'r testun rydych chi wedi'i lwytho i fyny. Gellir newid hyn i gydweddu ag anghenion eich dadansoddiad penodol trwy glicio ar hyd y llinell uwchben y crynodeb.</p>
          <p>Mae clicio ar <strong>Lawrlwytho Crynodeb</strong> yn gadael i chi gadw copi o'ch crynodeb i'ch dyfais eich hunan.</p>
      `,
    "#summarisation-carry-button": "Sut galla i 'Grynodebu' fy nhestun/data?",
    "#summarisation-carry-panel": `
          <p>O dudalen Hafan TestunRhydd, cliciwch ar <strong>Dadansoddi</strong>.</p>
          <ol>
              <li><strong>Gludo testun</strong> [copïo a gludo testun i'r blwch - mae hyn yn ddefnyddiol os nad yw eich data yn ffeil .txt, .tsv neu .xlsx e.e., data sydd gennych mewn dogfen WORD]</li>
              <li><strong>Defnyddio data enghreifftiol</strong> [bydd angen i chi ddewis o'r opsiynau sy'n cael eu cynnig - mae hyn yn ddefnyddiol os ydych chi ond eisiau arbrofi gyda'r offeryn yma yn y lle cyntaf]</li>
              <li><strong>Llwytho ffeil ddata i fyny</strong> [mae hyn yn gadael i chi lwytho data i fyny'n uniongyrchol trwy glicio ar dewiswch ffeil a dewis y ffeil briodol. Mae'r opsiwn yma'n gweithio ar gyfer ffeiliau .txt, .tsv neu .xlsx yn unig - gweler (i) uchod]</li>
          </ol>
          <p>Cliciwch ar <strong>Gweld Data</strong>. Caiff eich data ei arddangos (os ydych wedi mynd am opsiwn (i) uchod, byddwch yn gallu dewis rhannu brawddegau neu testun cyfan i arddangos eich data).</p>
          <p>Bydd y bar <strong>Dechrau Dadansoddi</strong> ar waelod y sgrin yn dechrau fflachio ac o glicio arno, bydd saith opsiwn lliwiau gwahanol ar gael i chi. Cliciwch ar yr un melyn <strong>Crynodebu</strong>.</p>
          <hr>
                <img src="./static/images/img/analysis/Picture10.png" class="special-image">
                <hr> 
          <p>Bydd hyn yn cynhyrchu crynodeb sy'n gyfwerth â 40% o'r testun rydych chi wedi'i lwytho i fyny. Gellir newid hyn i gydweddu ag anghenion eich dadansoddiad penodol trwy glicio ar hyd y llinell uwchben y crynodeb.</p>
          
          <hr>
                <img src="./static/images/img/analysis/Picture11.png" class="special-image">
                <hr> 
          <p>Mae clicio ar <strong>Lawrlwytho Crynodeb</strong> yn gadael i chi gadw copi o'ch crynodeb i'ch dyfais eich hunan.</p>
      `,
    "#word-cloud-button": "Beth alla i wneud yn 'Cwmwl Geiriau'?",
    "#word-cloud-panel": `
          <p>Pan fydd llawer iawn o destun gennym, gall fod yn ddefnyddiol weithiau i ddelweddu popeth yn y fath fodd fel bod y geiriau allweddol - hynny yw y geiriau sy'n cael eu defnyddio fwyaf aml yn y testun - yn fwy ac yn fwy amlwg nag eraill sy'n digwydd yn llai aml.</p>
          <p>Un ffordd sy'n ein galluogi ni i wneud hynny yw Cwmwl Geiriau. Rydym yn galw cwmwl geiriau arno achos bod yr wybodaeth yn cael ei dangos yn aml (ond nid bob amser) ar siâp cwmwl. Isod mae enghraifft o gwmwl geiriau (nid ar siâp cwmwl!) a gafodd ei greu gan ddefnyddio testun Saesneg yn ymwneud â'r sioe deledu Dr Who:</p>
          <hr>
                <img src="./static/images/img/analysis/Picture12.png" class="special-image">
                <hr>
          <p>Yn amlwg, y gair mwyaf cyffredin ei ddefnydd yma yw Doctor fel y gallem ddisgwyl (mae ei faint mwy o'i gymharu â geiriau eraill yn dweud hyn wrthon ni). Mae geiriau eraill sy'n cael eu defnyddio yn gyffredin yn cynnwys: BBC, series, time, episode/s, television a first.</p>
          <p>Mae cwmwl geiriau yn offeryn defnyddiol i roi cynrychioliad gweledol o'r geiriau pwysig sy'n sefyll allan mewn darn o destun. Gall hyn fod yn ddefnyddiol, er enghraifft, i gyflwyno'r prif bwyslais mewn testun mewn ffordd seml, weledol i gynulleidfa a all fod â diddordeb yn y pwnc. Enghraifft o hyn yw sut mae safleoedd ar-lein rhai gwasanaethau newyddion (e.e. Sky News) yn defnyddio cwmwl geiriau weithiau i ddangos y geiriau mwyaf aml eu defnydd mewn araith wleidyddol bwysig h.y. ble roedd y prif bwyslais a'r hyn mae hynny'n ei ddweud wrthon ni am y neges sy'n cael ei rhoi. Gall defnyddio cwmwl geiriau i wneud hyn fod yn ffordd fwy effeithiol o'i ddangos i'r darllenydd na thrwy erthygl newyddion yn unig.</p>
      `,
    "#word-cloud-def-button":
      "Ydy Cwmwl Geiriau dim ond wedi'i seilio ar ba mor aml mae geiriau yn digwydd mewn testun penodol?",
    "#word-cloud-def-panel": `
          <p>Mae maint y geiriau mewn rhai cymylau geiriau yn ymwneud yn uniongyrchol â pha mor aml maen nhw'n digwydd yn y testun rydych chi'n edrych arno - cymylau geiriau wedi'u seilio ar amlder geiriau yn eich testun yw'r rhain. Gall cymylau geiriau ddweud rhywbeth wrthon ni hefyd am natur yr allweddeiriau ynddynt - er enghraifft gan mai'r fannod y yw un o'r geiriau mwyaf cyffredin yn y Gymraeg, dyma'r gair rydym yn disgwyl iddo gael ei ddefnyddio fwyaf aml mewn testun. Fyddai dangos y mewn cwmwl geiriau ddim yn arbennig o ddiddorol gan nad yw'n dangos unrhyw beth i ni na fyddem yn ei ddisgwyl. Nid yw'r fannod y yn 'allweddol' i destun penodol gan ei bod yn gyffredin i bob testun. Pe bai gair fel castell yn digwydd lawer o weithiau yn eich testun (efallai os byddwch yn edrych ar adolygiadau o gastell!), câi ei ddiffinio yn 'allweddol' achos nid oes disgwyl iddo fod yn gyffredin mewn iaith pob dydd. Mae allweddeiriau yn dweud wrthon ni pa rai yw'r geiriau mwyaf arwyddocaol mewn testun penodol (trwy gymharu eu hamlder â set ddata 11 miliwn o eiriau o iaith ysgrifenedig, electronig a llafar yn CorCenCC). Cyfrifir allweddeiriau gan ddefnyddio mesur o'r enw gwerth allweddeirwydd a byddem yn galw cwmwl geiriau sy'n ymwneud yn uniongyrchol â gwerth allweddeirwydd yn hytrach nag amlder yn unig yn gwmwl allweddeiriau. Gallwch ddewis pa opsiwn sydd orau gennych ar gyfer eich dadansoddiad eich hunan o fewn yr offeryn cwmwl geiriau (gweler isod) – yr opsiwn cwmwl allweddeiriau yw'r un rhagosodedig yn TestunRhydd.</p>
      `,
    "#word-cloud-create-button": "Sut galla i greu 'Cwmwl Geiriau' o'm data?",
    "#word-cloud-create-panel": `
          <p>O dudalen Hafan TestunRhydd, cliciwch ar Dadansoddi.</p>
          <ol>
              <li><strong>Gludo testun:</strong> [copïo a gludo testun i'r blwch - mae hyn yn ddefnyddiol os nad yw eich data yn ffeil .txt, .tsv neu .xlsx e.e. data sydd gennych mewn dogfen WORD]</li>
              <li><strong>Defnyddio data enghreifftiol:</strong> [bydd angen i chi ddewis o'r opsiynau sy'n cael eu cynnig - mae hyn yn ddefnyddiol os ydych chi ond eisiau arbrofi gyda'r offeryn yma yn y lle cyntaf]</li>
              <li><strong>Llwytho ffeil ddata i fyny:</strong> [mae hyn yn gadael i chi lwytho data i fyny'n uniongyrchol trwy glicio ar <strong>dewiswch ffeil</strong> a dewis y ffeil briodol. Mae'r opsiwn yma'n gweithio ar gyfer ffeiliau .txt, .tsv neu .xlsx yn unig - gweler (i) uchod]</li>
          </ol>
          <p>Cliciwch ar <strong>Gweld Data</strong>. Caiff eich data ei arddangos (os ydych wedi mynd am opsiwn (i) uchod, byddwch yn gallu dewis <strong>rhannu brawddegau</strong> neu <strong>testun cyfan</strong> i arddangos eich data).</p>
          <p>Bydd y bar <strong>Dechrau Dadansoddi</strong> ar waelod y sgrin yn dechrau fflachio ac o glicio arno, bydd saith opsiwn lliwiau gwahanol ar gael i chi. Cliciwch ar yr un porffor <strong>Cwmwl Geiriau.</strong></p>
          <hr>
                <img src="./static/images/img/analysis/Picture13.png" class="special-image">
                <hr>
          <p>Mae'r sgrinlun nesaf yn dangos yr opsiynau sy'n cael eu cynnig i chi greu eich cwmwl geiriau penodol eich hunan wedi'i seilio ar y testun / data rydych chi eisiau ei ddadansoddi:</p>
          <hr>
                <img src="./static/images/img/analysis/Picture14.png" class="special-image">
                <hr>
          <p>Dyma'r pedwar dewis:</p>
          <ol>
              <li>Dewiswch y math o gwmwl: Y dewis rhagosodedig yma yw Pob gair. Fodd bynnag, gellir newid hyn i gyfyngu'r cwmwl geiriau i rai rhannau ymadrodd yn unig e.e. enwau, berfau. Hefyd mae modd dewis clystyrau 2 / 3 / 4 gair.</li>
              <hr>
                <img src="./static/images/img/analysis/Picture15.png" class="special-image">
                <hr>
              <li>Dewiswch siâp y cwmwl: Yr opsiwn rhagosodedig yma yw cwmwl. Fodd bynnag, fel mae'r sgrinlun yn ei ddangos, gellir newid y cwmwl geiriau i unrhyw un o'r siapiau canlynol: Sylw / Bwlb golau / Lefel sain i fyny / Meicroffôn / Baner Cymru / Sherlock Holmes / Yr Ymddiriedolaeth Genedlaethol / Cadw / Petryal / Cylch / Cadw2</li>
              <li>Dewiswch liw amlinell y cwmwl: Yr opsiwn rhagosodedig yw gwyn ond mae opsiynau eraill yn cynnwys llwyd, melyn, du, gwyrdd, glas, neu coch.</li>
              <li>Dewiswch fesuriad y cwmwl: Mae hyn yn cyfeirio yn ôl i'r adran uchod am allweddeirwydd ac amlder. Yr opsiwn rhagosodedig yw allweddeirwydd.</li>
          </ol>
          <p>Unwaith eto, mae'r sgrinlun isod wedi'i seilio ar ddata'r bwletinau newyddion gan ddefnyddio (1) Pob gair (2) Sherlock Holmes (3) Glas a (4) Amlder:</p>
          <hr>
                <img src="./static/images/img/analysis/Picture16.png" class="special-image">
                <hr>
          <p>Mae'r tab Lawrlwytho Delwedd Cwmwl Geiriau yn gadael i chi lawrlwytho a chadw unrhyw gymylau geiriau rydych wedi'u creu. O dan hwn fe ddewch o hyd i Rhestr Geiriau lle gallwch ddewis / dad-ddewis geiriau penodol o'ch cwmwl geiriau.</p>
      `,
    "#relation-button":
      "Beth alla i wneud yn 'Defnydd a Pherthnasoedd Geiriau'?",
    "#relation-panel": `
          <p>Yma, gallwch chi ddadansoddi sut mae'r geiriau yn eich data yn cael eu defnyddio (yn enwedig mewn perthynas â'i gilydd) a beth all eu perthnasoedd ei ddweud wrthoch am ystyr ehangach eich testun. Mae'n ddefnyddiol ystyried yn fwy agos sut gall geiriau gwahanol fod ag ystyr wahanol neu ddweud stori wahanol pan fyddant yn digwydd gyda'i gilydd. Gellir cyfeirio at eu perthynas â'i gilydd a dau air yn dod at ei gilydd yn y ffordd yma fel cydleoliadau.</p>
      `,
    "#collocation-button": "Beth yw 'Cydleoliad'?",
    "#collocation-panel": `
          <p>Gall fod o gymorth meddwl am y term hwn cydleoliad fel dwy ran - mae'r ail ran lleoliad yn dweud ble mae rhywbeth a'r rhan gyntaf cyd- yn cael ei defnyddio'n aml i wneud i ni feddwl am rywbeth gyda'i gilydd (e.e. cydweithio - gweithio gyda'n gilydd).  Felly, bydd cydleoliad yn nodi geiriau sydd yn aml yn cael eu lleoli gyda'i gilydd ac achos eu bod nhw wedi'u lleoli gyda'i gilydd, maen nhw'n cyfuno i roi ystyr benodol. </p>
          <p>Edrychwn ar air fel tynnu er enghraifft.  Ar ei ben ei hun, mae'n ferfenw sy'n golygu llusgo rhywbeth neu rywun, y gwrthwyneb i gwthio. Fodd bynnag, mae modd lleoli geiriau eraill gyda'i gilydd i greu cyfuniadau gydag ystyron penodol. Dyma ambell enghraifft:</p>
          <ul>
              <li>Tynnu llun</li>
              <li>Tynnu raffl</li>
              <li>Tynnu coes</li>
              <li>Deg tynnu saith yw tri</li>
              <li>Tynnu sylw</li>
              <li>Tynnu i mewn</li>
          </ul>
          <p>Mae'r cyfuniadau hyn i gyd yn ychwanegu at ystyr y berfenw tynnu ac maen nhw'n digwydd yn naturiol yn yr iaith. Yn yr enghraifft tynnu coes, mae'r cyfuniad yn magu'r ystyr o gellwair, cael hwyl am ben rhywun. Eto i gyd, nid yw'n gwneud synnwyr cyfuno tynnu â rhannau eraill o'r corff e.e. tynnu troed, tynnu clust (er bod tynnu wyneb a tynnu gwallt yn bosibl ond gydag ystyron gwahanol iawn).</p>
      `,
    "#collocation-why-button":
      "Pam fyddwn i eisiau edrych am gydleoliadau / perthnasoedd geiriau yn TestunRhydd?",
    "#collocation-why-panel": `
        <p>Bydd gallu chwilio am gydleoliadau yn eich testun yn eich helpu i gael gwell dealltwriaeth o ystyron sydd ond yn dod yn amlwg pan fyddwn ni'n gweld dau air wedi'u lleoli gyda'i gilydd. Os ystyriwn, er enghraifft, destun sy'n cynnwys adborth ar lety. Mae'n debygol y bydd y gair stafell yn air amlder uchel, hynny yw un sy'n digwydd yn aml iawn yn y testun.</p>
        <p>Fodd bynnag, er mwyn i berchennog y llety ddeall a dadansoddi'r wybodaeth yna yn fwy manwl, byddai gallu nodi cydleoliadau gyda stafell yn offeryn defnyddiol dros ben:</p>
        <ul>
            <li>Pa ansoddeiriau sy'n cydleoli â stafell a beth maen nhw'n ei ddweud amdani e.e. cynnes neu twym / oer; swnllyd neu tawel; dwbl neu sengl.</li>
            <li>Ydy'r testun yn cyfeirio at stafelloedd penodol e.e. bwyta / gwely / derbynfa?</li>
            <li>Oes yna unrhyw gydleoliadau penodol eraill sy'n helpu perchennog y llety i ddeall mwy am beth sy'n cael ei dargedu yn yr adborth e.e. allwedd stafell / pris stafell / stafell drws nesa?</li>
        </ul>
      `,
    "#relationship-use-button":
      "Sut galla i archwilio 'Defnydd a Pherthnasoedd Geiriau' o'm data?",
    "#relationship-use-panel": `
        <p>O dudalen Hafan TestunRhydd, cliciwch ar Dadansoddi.</p>
        <p>Gallwch ddewis:</p>
        <ul>
            <li>(i) Gludo testun [copïo a gludo testun i'r blwch - mae hyn yn ddefnyddiol os nad yw eich data yn ffeil .txt, .tsv neu .xlsx e.e. data sydd gennych mewn dogfen WORD]</li>
            <li>(ii) Defnyddio data enghreifftiol [bydd angen i chi ddewis o'r opsiynau sy'n cael eu cynnig - mae hyn yn ddefnyddiol os ydych chi ond eisiau arbrofi gyda'r offeryn yma yn y lle cyntaf]</li>
            <li>(iii) Llwytho ffeil ddata i fyny [mae hyn yn gadael i chi lwytho data i fyny'n uniongyrchol trwy glicio ar dewiswch ffeil a dewis y ffeil briodol. Mae'r opsiwn yma'n gweithio ar gyfer ffeiliau .txt, .tsv neu .xlsx yn unig - gweler (i) uchod]</li>
        </ul>
        <p>Cliciwch ar Gweld Data.</p>
        <p>Caiff eich data ei arddangos (os ydych wedi mynd am opsiwn (i) uchod, byddwch yn gallu dewis rhannu brawddegau neu testun cyfan i arddangos eich data).</p>
        <p>Bydd y bar Dechrau Dadansoddi ar waelod y sgrin yn dechrau fflachio ac o glicio arno, bydd saith opsiwn lliwiau gwahanol ar gael i chi. Cliciwch ar yr un brown Defnydd a Pherthnasoedd Geiriau.</p>
        <hr>
                <img src="./static/images/img/analysis/Picture17.png" class="special-image">
                <hr>
        
        <p>Gofynnir i chi ddewis gair i'w ddadansoddi (gw. y sgrinlun isod).  Bydd angen i chi ddweud wrth TestunRhydd a ydych chi eisiau defnyddio'r categori gair (y dewis rhagosodedig) neu ddewis y tag POS (Rhannau Ymadrodd) neu'r tag semantig.  Y gair i'w ddadansoddi yn ein henghraifft ni yw Cymru ac mae hyn wedi'i seilio ar y data o'r bwletinau newyddion.  Ar ben hynny, wrth ystyried delweddu eich data, gallwch newid maint y ffenestr trwy glicio ar hyd y llinell sydd o dani.</p>
        <hr>
                <img src="./static/images/img/analysis/Picture18.png" class="special-image">
                <hr>
        
        <p>Bydd yr opsiynau dewiswch air i'w ddadansoddi rydych chi wedi'u dewis yn dangos eich allweddair fel yn y sgrinlun nesaf. Dangosir 10 cofnod yma ond mae modd newid hynny trwy glicio ar y blwch Dangos cofnod.  Ym maint y ffenestr, dewiswyd 5 fel bod y pum gair i'r chwith o'r allweddair yn cael eu dangos o dan Cyd-destun Chwith ynghyd â phump i'r dde yn Cyd-destun De. Bydd clicio ar un o'r ddau bennawd yn trefnu'r data yn unol â'r cyd-destun priodol a ddewiswyd.</p>
        <hr>
                <img src="./static/images/img/analysis/Picture19.png" class="special-image">
                <hr>
        
        <p>Hefyd gallwch chwilio am eiriau penodol sy'n cael eu defnyddio yng nghyd-destun chwith a de eich chwilair (yr enw am ddelweddu o'r fath yw allbwn concordans). I wneud hyn, teipiwch eich gair i'r blwch chwilio a welir ar ochr dde uchaf y llun uchod. </p>
        <p>Mae Lawrlwytho canlyniadau allweddair yn gadael i chi gadw canlyniadau eich dadansoddiad i ffwrdd o safle TestunRhydd.</p>
        <p>Gan gyfeirio at y trafodaethau ar gydleoliadau (uchod), cyflwynir rhestr o gydleoliadau ar gyfer Cymru o dan yr allbwn concordans. Unwaith eto, mae modd lawrlwytho hon fel ffeil arwahanol trwy glicio ar Lawrlwytho Tabl Cydleoliadau. Mae gan yr enghraifft a ddefnyddir yma ddata cyfyngedig ac felly nid yw'r amlder mor fawr (h.y. faint o weithiau mae pob gair yn eich testun yn digwydd) - fodd bynnag, mwyaf maint y data a ddefnyddir, uchaf fydd rhif yr amlder. Mae'r colofnau eraill yn ymwneud â MI - Gwybodaeth Gyffredin a LL - Tebygolrwydd Log. Unwaith eto, mae modd lawrlwytho'r dadansoddiad hwn i'w ddefnyddio y tu allan i TestunRhydd. Os ydych wedi dewis Tag POS neu Tag Semantig penodol ar ddechrau eich dadansoddiad, y geiriau sy'n cael eu dangos yn y tabl hwn yw'r rhai hynny sy'n digwydd fwyaf aml o fewn y categori penodol hwnnw.</p>
        <hr>
                <img src="./static/images/img/analysis/Picture20.png" class="special-image">
                <hr>
        <p>Yn olaf, mae modd i chi ddelweddu'r data yma fel graff rhwydwaith rhyngweithiol hefyd (gweler isod). Mae hyn yn gadael i chi weld y cysylltiadau - y perthnasoedd - rhwng y gair rydych chi wedi'i ddewis yn ogystal â gadael i chi symud y clic ar eitemau a'u symud o gwmpas, sy'n eu gwneud yn haws eu gweld a/neu yn gadael i chi gyflwyno ym mha ffordd bynnag sy orau gennych. Gellir lawrlwytho'r graff trwy glicio ar y tab lawrlwytho graff rhwydwaith rhyngweithiol oddi tanodd.</p>
        <hr>
                <img src="./static/images/img/analysis/Picture21.png" class="special-image">
                <hr>
        `,
    "#word-tree-buttton": "Beth alla i wneud yn 'Coeden Eiriau'?",
    "#word-tree-panel": `
        <p>Mae'n ddefnyddiol darllen y ganllaw i ddefnyddwyr ar gyfer Defnydd a Pherthnasoedd Geiriau ochr yn ochr â'r ganllaw hon gan ei bod yn rhoi gwybodaeth ar gyfuniadau o eiriau y cyfeirir atyn nhw'n aml fel cydleoliadau.</p>
        <p>Bydd y tab Coeden Eiriau yn gofyn i chi roi gair chwilio i mewn. Yn yr achos isod, y gair chwilio yw Cymru (wedi'i seilio ar ddata'r bwletinau newyddion). Fe gewch chi wybodaeth sy'n esbonio beth yw coeden eiriau a sut i ddehongli'r wybodaeth a gynhwysir ynddi.</p>
        <hr>
                <img src="./static/images/img/analysis/Picture22.png" class="special-image">
                <hr>
        `,
    "#word-tree-investigate-buttton":
      "Sut galla i archwilio gwybodaeth 'Coeden Eiriau' o'm data?",
    "#word-tree-investigate-panel": `
      
        <p>O dudalen Hafan TestunRhydd, cliciwch ar Dadansoddi.</p>
  
        <p>Gallwch ddewis:</p>
        <ol>
            <li>Gludo testun [copïo a gludo testun i'r blwch - mae hyn yn ddefnyddiol os nad yw eich data yn ffeil .txt, .tsv neu .xlsx e.e. data sydd gennych mewn dogfen WORD]</li>
            <li>Defnyddio data enghreifftiol [bydd angen i chi ddewis o'r opsiynau sy'n cael eu cynnig - mae hyn yn ddefnyddiol os ydych chi ond eisiau arbrofi gyda'r offeryn yma yn y lle cyntaf]</li>
            <li>Llwytho ffeil ddata i fyny [mae hyn yn gadael i chi lwytho data i fyny'n uniongyrchol trwy glicio ar dewiswch ffeil a dewis y ffeil briodol. Mae'r opsiwn yma'n gweithio ar gyfer ffeiliau .txt, .tsv neu .xlsx yn unig - gweler (i) uchod]</li>
        </ol>
  
        <p>
            <span data-contrast="auto">Cliciwch ar </span><b><span data-contrast="auto">Gweld Data</span></b><span data-contrast="auto">.</span>
        </p>
  
        <p>
            <span data-contrast="auto">Bydd eich data ei arddangos (os ydych wedi mynd am opsiwn (i) uchod, byddwch yn gallu dewis rhannu brawddegau neu testun cyfan i arddangos eich data).</span>
        </p>
  
        <p>
            <span data-contrast="auto">Bydd y bar Dechrau Dadansoddi ar waelod y sgrin yn dechrau fflachio ac o glicio arno, bydd saith opsiwn lliwiau gwahanol ar gael i chi. Cliciwch ar yr un gwyrdd Coeden Eiriau.</span>
        </p>
        <hr>
            <img src="./static/images/img/analysis/Picture22.png" class="special-image">
            <hr>
        <p>
            <span data-contrast="auto">Fel soniwyd uchod, gofynnir i chi ddewis gair i'w ddadansoddi a bydd coeden eiriau yn creu delwedd (= y goeden eiriau) wedi'i seilio ar eich dewis. Mae'r sgrinlun isod yn dangos y goeden eiriau wedi'i seilio ar y gair chwilio Cymru yn y data bwletinau newyddion. (Gweler uchod am arweiniad ar sut i ddehongli'r goeden eiriau).</span>
        </p>
        <hr>
        <img src="./static/images/img/analysis/Picture23.png" class="special-image">
        <hr>
        <p>
            <span data-contrast="auto">Mae'r goeden eiriau yn gwbl ryngweithiol fel mae modd i chi glicio unrhyw air yn y goeden i weld pa eiriau sy'n digwydd yn aml o'i flaen ac ar ei ôl. Os cliciwch ar y gair </span><em><span data-contrast="auto">Llywodraeth</span></em><span data-contrast="auto"> yn y ddelwedd uchod, fe welwch y goeden eiriau isod. Mae'r swyddogaethedd rhyngweithiol hwn yn golygu bod modd i chi dwrio'n ddwfn yn eich data i weld pa batrymau sy'n bodoli.</span>
        </p>
        <hr>
        <img src="./static/images/img/analysis/Picture24.png" class="special-image">
        <hr>
        <p>
            <span data-contrast="auto">Os byddwch yn sgrolio dros unrhyw air yn y </span><b><span data-contrast="auto">goeden eiriau</span></b><span data-contrast="auto"> fe welwch wybodaeth am bwysau'r gair (‘weight’). Amlder y gair yw hwn. Mae'r goeden eiriau isod yn dangos bod y gair </span><em><span data-contrast="auto">ariannu</span></em><span data-contrast="auto"> yn cael ei ddefnyddio unwaith yn y testun enghreifftiol.</span>
        </p>
        <hr>
            <img src="./static/images/img/analysis/Picture25.png" class="special-image">
            <hr>
        <p>
            <span data-contrast="auto">Clicio ar </span><b><span data-contrast="auto">Lawrlwytho Coeden Eiriau Ryngweithiol</span></b><span data-contrast="auto"> yn gadael i chi gadw copi o'r </span><b><span data-contrast="auto">goeden eiriau</span></b><span data-contrast="auto"> rydych chi wedi'i chreu i'w ddefnyddio maes o law yn eich dadansoddiad eich hun.</span>
        </p>
      `,
  },
};

function resetToDefault() {
  // Hide all dynamic divs
  $(
    " #download-buttons, #Dataview, .tab-buttons, #tabs, #loading, #submit-sentences-btn, #submit-rows-btn"
  ).addClass("hidden");
  // Clear the file input

  // Clear any flash messages (assuming they are present in a list and need to be removed)
  $(".flashes").empty();

  // Reset Sentiment Analysis and Scatter Plot divs
  $(
    "#SentimentPlotViewPie, #SentimentPlotViewBar, #SentimentView, #SentimentTable, #scattertextIframe"
  ).empty();
  // Hide additional buttons and elements
  $("#submit-rows-btn, #loading, #tab-buttons, #tabs, #dateSlider").addClass(
    "hidden"
  );
  // Reset Summary Tool
  $("#chosen_ratio").val(40);
  $("#ratio-value").text("40%");
  $("#summary").empty();

  // Reset Word List and Analysis
  $("#wordDropdown").val($("#wordDropdown option:first").val());

  // Reset the graph container
  $("#graphContainer").empty();

  // Reset Search Word in the Word Tree Tab
  $("#search_word").val("");

  // Reset the Word Tree visualization container
  $("#wordtree_basic").empty();
  document.getElementById("myGrid").classList.add("hidden");
  document.getElementById("dateSlider").classList.add("hidden");

  // Reset checkboxes for PDF generation
  $(".hidden-checkbox").prop("checked", false);

  // Reset hidden input fields in the PDF form
  $("#sentimentField, #wordtree, #wordCloudImageSrcField, #summaryField").val(
    ""
  );
  //Reset display of various input options to their default state
  // Reset the dropdown contents
  $("#wordDropdown").empty();
  $("#columnLabelsContainer").empty();
  const dateSlider = document.getElementById("dateSlider");
  const dateRangeSpan = document.getElementById("dateRange");
  dateSlider.style.display = "none";
  dateRangeSpan.style.display = "none";

  dateRangeSpan.textContent = "Selected Range: ";
  // Clear the grid contents
  fetchedData = null;
}

function getCurrentLanguage() {
  return localStorage.getItem("chosenLanguage") || "en";
}
function readUploadedFile(fileInput, callback) {
  var file = fileInput.files[0];
  var reader = new FileReader();
  reader.onload = function (e) {
    callback(e.target.result);
  };
  reader.onerror = function (e) {
    if (getCurrentLanguage() === "cy") {
      alert("Gwall wrth ddarllen ffeil");
    } else {
      alert("Error reading file");
    }
  };
  reader.readAsText(file);
}

function showTab(tabIndex) {
  var i;
  var tabs = document.getElementsByClassName("tab-content");
  var buttons = document.getElementsByClassName("tab-btn");
  for (i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none";
    buttons[i].classList.remove("tab-btn-selected");
  }
  document.getElementById("tab" + tabIndex).style.display = "block";
  buttons[tabIndex].classList.add("tab-btn-selected");

  // Check if the fifth tab is being shown and then handle WordTree data
  if ("tab" + tabIndex === "tab5" && !isWordTreeClicked) {
    // This code only executes the first time the tab is clicked
    // Resets if new data is uploaded and sendSelectedRows executes
    isWordTreeClicked = true;
    handleWordTreeData(
      currentWordTreeData, // Global variables
      currentSearchWord
    );
  }
}

function toggleInputOption(option) {
  resetToDefault();
  document.getElementById("example-options").style.display =
    option === "example" ? "block" : "none";
  var element = document.getElementById("file-to-analyze");

  if (option === "upload") {
    element.style.display = "flex";
    element.style.alignItems = "center";
  } else {
    element.style.display = "none";
  }
  document.getElementById("text-input").style.display =
    option === "text" ? "block" : "none";
  document.getElementById("tab-buttons").classList.add("hidden");
  document.getElementById("tabs").classList.add("hidden");
  document.getElementById("column-selection").classList.add("hidden");
  //document.getElementById('tabs').classList.add('hidden');
}

//!
// function startAnalysisfile(event) {
//   event.preventDefault();
//   validateForm(event, "text");
//   const inputMethod = document.querySelector(
//     'input[name="input-method"]:checked'
//   ).value;
//   let data = new FormData();
//   if (inputMethod === "example") {
//     $("column-selection").addClass("hidden");
//   } else if (inputMethod === "upload") {
//     const fileInput = document.querySelector('input[type="file"]');
//     const data = new FormData();
//     data.append("file", fileInput.files[0]);
//     data.append("input-method", "upload");

//     //! ... rest of the code for upload
//   } else if (inputMethod === "text") {
//     $("column-selection").addClass("hidden");
//     const text = document.getElementById("text-to-analyze").value;

//     let dataForGrid;
//     if (
//       document.querySelector('input[name="text-input-method"]:checked')
//         .value === "Split sentences"
//     ) {
//       const sentences = splitIntoSentences(text);
//       dataForGrid = sentences.map((sentence) => ({ Review: sentence }));
//     } else {
//       // For 'Whole Text' option
//       dataForGrid = [{ Review: text }];
//     }

//     onDataFetchedBasedOnSelectedColumn(dataForGrid);
//     document.getElementById("submit-rows-btn").classList.remove("hidden");
//   }
// }

function startAnalysisfile(event) {
  event.preventDefault();
  validateForm(event, "text");
  const inputMethod = document.querySelector(
    'input[name="input-method"]:checked'
  ).value;
  let data = new FormData();
  if (inputMethod === "example") {
    $("column-selection").addClass("hidden");
  } else if (inputMethod === "upload") {
    const fileInput = document.querySelector('input[type="file"]');
    const data = new FormData();
    data.append("file", fileInput.files[0]);
    data.append("input-method", "upload");
  } else if (inputMethod === "text") {
    $("column-selection").addClass("hidden");
    const text = document.getElementById("text-to-analyze").value;

    let dataForGrid;
    if (
      document.querySelector('input[name="text-input-method"]:checked')
        .value === "Split sentences"
    ) {
      const sentences = splitIntoSentences(text);
      dataForGrid = sentences.map((sentence) => ({ Review: sentence }));
    } else {
      // For 'Whole Text' option
      dataForGrid = [{ Review: text }];
    }

    onDataFetchedBasedOnSelectedColumn(dataForGrid);
    document.getElementById("submit-rows-btn").classList.remove("hidden");
  }
}

function splitIntoSentences(text) {
  return text.match(/[^\.!\?]+[\.!\?]+/g) || [];
}

function processAnalysis(text) {
  // ... analysis code ...

  sendTextToServer(text);
  document.getElementById("Dataview").classList.remove("hidden"); // Show the DataView div
  document.getElementById("submit-sentences-btn").classList.remove("hidden"); // Show the submit button
}
document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;
  const toggleCheckbox = document.getElementById("darkModeToggleCheckbox");

  toggleCheckbox.addEventListener("change", function () {
    if (toggleCheckbox.checked) {
      body.classList.remove("light-mode");
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
      body.classList.add("light-mode");
    }
  });
});

function selectExampleData() {
  // Implement this function to handle example data selection
}

function resetUI() {
  // Hide tab buttons and tabs
  document.getElementById("tab-buttons").classList.add("hidden");
  document.getElementById("tabs").classList.add("hidden");
  document.getElementById("second-input-container").classList.add("hidden");

  // Optionally reset other elements like the file input or text area:
  document.querySelector('input[type="file"]').value = ""; // Clear file input
  document.getElementById("text-to-analyze").value = ""; // Clear text area
}

///capture the text
function sendTextToServer(text) {
  fetch("/fileanalysis", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "text=" + encodeURIComponent(text),
  })
    .then((response) => response.json())
    .then((data) => {
      displaySentences(data.sentences);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function displaySentences(sentences) {
  const outputDiv = document.getElementById("Dataview");
  outputDiv.innerHTML = ""; // Clear previous content
  // Create a table and its parts
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");

  // Create table header for checkboxes and master checkbox
  const thCheckBox = document.createElement("th"); // <-- This was the missing line
  const masterCheckbox = document.createElement("input");
  masterCheckbox.type = "checkbox";
  masterCheckbox.id = "master-check";
  masterCheckbox.checked = true;

  // Add the event listener right after creating the checkbox
  masterCheckbox.addEventListener("change", function () {
    const isChecked = this.checked;
    const checkboxes = document.querySelectorAll(".sentence-check");
    checkboxes.forEach((cb) => {
      cb.checked = isChecked;
    });
  });

  thCheckBox.appendChild(masterCheckbox);
  thead.appendChild(thCheckBox);

  const thNumber = document.createElement("th");
  thNumber.innerText = "#";
  thead.appendChild(thNumber);

  const thSentence = document.createElement("th");
  thSentence.innerText = "Sentences";
  thead.appendChild(thSentence);

  table.appendChild(thead);

  sentences.forEach((sentence, index) => {
    const tr = document.createElement("tr");

    const tdCheckBox = document.createElement("td");
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.classList.add("sentence-check");
    checkBox.value = sentence;
    checkBox.checked = true;
    tdCheckBox.appendChild(checkBox);
    tr.appendChild(tdCheckBox);

    const tdNumber = document.createElement("td");
    tdNumber.innerText = index + 1;
    tr.appendChild(tdNumber);

    const tdSentence = document.createElement("td");
    tdSentence.innerText = sentence;
    tr.appendChild(tdSentence);

    tbody.appendChild(tr);
  });

  table.appendChild(tbody);
  outputDiv.appendChild(table);
}

// Retired function, replaced with sendSelectedRows
function sendSelectedSentences() {
  console.log("sendSelectedSentences called");
  const checkedBoxes = document.querySelectorAll(".sentence-check:checked");
  const selectedSentences = Array.from(checkedBoxes).map((cb) => cb.value);
  const summaryElement = document.getElementById("summary");

  fetch("/process_sentences", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      language: getCurrentLanguage(),
    },
    body: JSON.stringify({ sentences: selectedSentences }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.status === "success") {
        //displayWordFrequencies(data);
        displayOverallSentiment(data.sentimentCounts);
        displaySentimentTable(data.sentimentData);
        //displaySentimentAnalysis(data.sentimentData, data.sentimentCounts);
        displayPlot(data.sentimentPlotPie, "SentimentPlotViewPie");
        displayPlot(data.sentimentPlotBar, "SentimentPlotViewBar");
        handleWordTreeData(data.wordTreeData, data.search_word);
        populateDropdown(data.wordFrequencies);
        document.getElementById("tab-buttons").classList.remove("hidden"); // Show the tab buttons
        document.getElementById("tabs").classList.remove("hidden"); // Show the tabs content
        showTab(0); // Automatically switch to the analysis tab
        // Display the summary in the appropriate location

        summaryElement.textContent = data.summary;
        document.getElementById("scattertextIframe").src = data.scatterTextHtml;
      } else {
        console.error("Error processing sentences:", data);
      }
    })
    .catch((error) => {
      console.error("Error sending selected sentences:", error);
    });
}

let currentPagesent = 1;
let itemsPerPagesent = 10; // or whatever number
let totalPagessent = 1; // This will be calculated based on data length

// Function to display the overall sentiment score and its explanation
function displayOverallSentiment(sentimentCounts) {
  const outputDiv = document.getElementById("SentimentView");
  outputDiv.innerHTML = ""; // Clear previous content
  let overallSentiment;
  let explanation = "";
  // Calculate overall sentiment
  if (getCurrentLanguage() === "cy") {
    overallSentiment =
      (sentimentCounts["Cadarnhaol"] || 0) - (sentimentCounts["Negyddol"] || 0);
  } else {
    overallSentiment =
      (sentimentCounts["Positive"] || 0) - (sentimentCounts["Negative"] || 0);
  }
  const overallSentimentContainer = document.createElement("div");
  overallSentimentContainer.className = "overall-sentiment-container"; // for styling purposes

  const sentimentScoreHeader = document.createElement("h3");
  if (getCurrentLanguage() === "cy") {
    sentimentScoreHeader.innerText = `Sentiment cyffredinol: ${overallSentiment}`;
  } else {
    sentimentScoreHeader.innerText = `Overall sentiment: ${overallSentiment}`;
  }

  overallSentimentContainer.appendChild(sentimentScoreHeader);

  const sentimentExplanation = document.createElement("p");
  if (overallSentiment > 0) {
    if (getCurrentLanguage() === "cy") {
      sentimentExplanation.innerText = `Mae'r sgôr sentiment ar gyfartaledd o ${overallSentiment} yn dangos fod  ${overallSentiment} 1 yn fwy o sentimentau cadarnhaol na rhai negyddol yn y testun penodol.  Mae hyn yn awgrymu fod sentiment y testun ar gyfartaledd yn cadarnhaol. `;
    } else {
      sentimentExplanation.innerText = `The overall sentiment score of ${overallSentiment} indicates that there are ${overallSentiment} more positive than negative sentiments in the given text. This suggests that the overall sentiment of the text is positive.`;
    }
  } else if (overallSentiment < 0) {
    if (getCurrentLanguage() === "cy") {
      sentimentExplanation.innerText = `Mae'r sgôr sentiment ar gyfartaledd o ${overallSentiment} yn dangos fod  ${overallSentiment} 1 yn fwy o sentimentau negyddol na rhai cadarnhaol yn y testun penodol.  Mae hyn yn awgrymu fod sentiment y testun ar gyfartaledd yn negyddol. `;
    } else {
      sentimentExplanation.innerText = `The overall sentiment score of ${overallSentiment} indicates that there are ${-overallSentiment} more negative than positive sentiments in the given text. This suggests that the overall sentiment of the text is negative.`;
    }
  } else {
    if (getCurrentLanguage() === "cy") {
      sentimentExplanation.innerText = `Mae'r sgôr sentiment y testun ar gyfartaledd yn niwtral. `;
    } else {
      sentimentExplanation.innerText =
        "The overall sentiment of the text is neutral.";
    }
  }
  overallSentimentContainer.appendChild(sentimentExplanation);

  outputDiv.appendChild(overallSentimentContainer);
  explanation = sentimentExplanation.innerText;
  document.getElementById("sentiment_explanation").value = explanation;
}

// Define language settings for Welsh
const welshLanguageSettings = {
  lengthMenu: "Dangos _MENU_ cofnod",
  zeroRecords: "Dim cofnodion wedi'u darganfod",
  info: "Yn dangos _START_ i _END_ o _TOTAL_ cofnod",
  infoEmpty: "Dim cofnodion ar gael",
  infoFiltered: "(hidlwyd o _MAX_ cyfanswm cofnodion)",
  loadingRecords: "Llwytho...",
  processing: "Prosesu...",
  search: "Chwilio:",
  paginate: {
    first: "Cyntaf",
    last: "Olaf",
    next: "Nesaf",
    previous: "Blaenorol",
  },
};
let currentData = []; // Global variable to hold the current subset of data

//!
function displaySentimentTable(sentimentData) {
  // If item has 4 entries, is ABSA
  const isABSA = Object.keys(sentimentData[0]).length === 4 ? true : false;

  const tableContainer = isABSA ? "AspectSentimentTable" : "SentimentTable";

  // Resets table
  const outputDiv = document.getElementById(tableContainer);
  outputDiv.innerHTML = "";

  if (!sentimentData || sentimentData.length === 0) {
    outputDiv.innerText = "No sentiment analysis results to display.";
    return;
  }

  const tableData = document.createElement("table");
  const theadData = document.createElement("thead");
  const tbodyData = document.createElement("tbody");
  tableData.id = "data-table";
  tableData.className = "w3-table w3-bordered w3-striped w3-hoverable w3-small";

  // Define headers
  const headers = isABSA
    ? getCurrentLanguage() === "cy"
      ? ["Adolygiad", "Agwedd", "Labelu Sentiment", "Sgôr Hyder"]
      : ["Review", "Aspect", "Sentiment Label", "Confidence Score"]
    : getCurrentLanguage() === "cy"
    ? ["Adolygiad", "Labelu Sentiment", "Sgôr Hyder"]
    : ["Review", "Sentiment Label", "Confidence Score"];

  // Create headers
  const tr = document.createElement("tr");
  headers.forEach((header) => {
    const th = document.createElement("th");
    th.innerText = header;
    tr.appendChild(th);
  });
  theadData.appendChild(tr);

  // Add data to table body
  sentimentData
    .sort((a, b) => b["Confidence Score"] - a["Confidence Score"])
    .forEach((row) => {
      const tr = document.createElement("tr");
      tr.innerHTML = isABSA
        ? `
            <td>${row.Review}</td>
            <td>${row["Aspect"]}</td>
            <td>${row["Sentiment Label"]}</td>
            <td>${row["Confidence Score"]}</td>
        `
        : `
            <td>${row.Review}</td>
            <td>${row["Sentiment Label"]}</td>
            <td>${row["Confidence Score"]}</td>
        `;
      tbodyData.appendChild(tr);
    });

  tableData.appendChild(theadData);
  tableData.appendChild(tbodyData);
  outputDiv.appendChild(tableData);

  // Initialize DataTable with language settings
  $(document).ready(function () {
    // Destroy previous data tables
    if ($.fn.DataTable.isDataTable("#data-table")) {
      $("#data-table").DataTable().clear().destroy();
    }

    $("#data-table").DataTable({
      order: [[2, "desc"]],
      language: getCurrentLanguage() === "cy" ? welshLanguageSettings : {},
    });
  });
}

function displayTableContent(data, tbodyElement) {
  tbodyElement.innerHTML = "";
  // Sort data based on the sentiment score in descending order
  data.sort((a, b) => b["Confidence Score"] - a["Confidence Score"]);
  const startIdx = (currentPagesent - 1) * itemsPerPagesent;
  const endIdx = startIdx + itemsPerPagesent;

  data.slice(startIdx, endIdx).forEach((row) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
            <td>${row.Review}</td>
            <td>${row["Sentiment Label"]}</td>
            <td>${row["Confidence Score"]}</td>
        `;
    tbodyElement.appendChild(tr);
  });
}

function createPaginationControlsent(container, data) {
  const existingPaginationControls = container.querySelector(
    ".pagination-controls"
  );
  if (existingPaginationControls) {
    existingPaginationControls.remove();
  }

  const navElement = document.createElement("div");
  navElement.className = "w3-center w3-padding-16 pagination-controls";

  const paginationDiv = document.createElement("div");
  paginationDiv.className = "w3-bar";

  // Add the previous button if the current page is not the first page
  if (currentPagesent > 1) {
    const prevButton = document.createElement("a");
    prevButton.className = "w3-button w3-hover-black";
    prevButton.innerText = "« Previous";
    prevButton.addEventListener("click", function () {
      currentPagesent--;
      displayTableContent(data, container.querySelector("tbody"));
    });
    paginationDiv.appendChild(prevButton);
  }

  // Display current page info
  totalPagessent = Math.ceil(data.length / itemsPerPagesent);
  const pageInfo = document.createElement("span");
  pageInfo.className = "w3-bar-item w3-border w3-padding";
  pageInfo.innerText = `Page ${currentPagesent} of ${totalPagessent}`;
  paginationDiv.appendChild(pageInfo);

  // Add the next button if the current page is not the last page
  if (currentPagesent < totalPagessent) {
    const nextButton = document.createElement("a");
    nextButton.className = "w3-button w3-hover-black";
    nextButton.innerText = "Next »";
    nextButton.addEventListener("click", function () {
      currentPagesent++;
      displayTableContent(data, container.querySelector("tbody"));
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
    Array.from(plotContainer.getElementsByTagName("script")).forEach(
      (oldScript) => {
        const newScript = document.createElement("script");
        Array.from(oldScript.attributes).forEach((attr) =>
          newScript.setAttribute(attr.name, attr.value)
        );
        newScript.appendChild(document.createTextNode(oldScript.innerHTML));
        oldScript.parentNode.replaceChild(newScript, oldScript);
      }
    );
  } else {
    console.error("Cannot find the", elementId, "element");
  }
}

//! ABSA
function displayABSAPlots(htmlPlotArray) {
  parentContainer = document.getElementById("ABSAContainer");
  const pieChartsContainer = document.getElementById("AspectPieCharts");
  // Resets container
  pieChartsContainer.innerHTML = "";

  const lang = getCurrentLanguage();
  const ord = {
    0: "",
    1: lang === "en" ? "second " : "ail ",
    2: lang === "en" ? "third " : "drydedd ",
  };

  if (pieChartsContainer) {
    Array.from(htmlPlotArray).forEach((htmlPlot, i) => {
      const container = document.createElement("div");
      container.classList.add("container", "p-0");

      const plotContainer = document.createElement("div");
      plotContainer.classList.add("container");

      const descContainer = document.createElement("h4");
      descContainer.classList.add("container");

      const descText =
        i < 3
          ? lang === "en"
            ? `The figure displays the sentiment analysis of the ${ord[i]}most occuring aspect.`
            : `Mae'r ffigur yn dangos dadansoddiad sentiment yr ${ord[i]}agwedd sy'n digwydd amlaf.`
          : "";

      descContainer.innerText = descText;

      const range = document.createRange();
      const docFrag = range.createContextualFragment(htmlPlot);

      plotContainer.appendChild(docFrag);
      container.appendChild(plotContainer);
      container.appendChild(descContainer);

      pieChartsContainer.appendChild(container);
    });
    parentContainer.style.display = "block";
  } else {
    console.error("Cannot find container");
  }
}

function setupSelectionListener(elementId) {
  const parentDiv = document.getElementById(elementId);
  const plotDiv = parentDiv.firstElementChild; // Targeting the first child div

  if (!plotDiv) {
    console.error("Couldn't find the Plotly chart div inside:", elementId);
    return;
  }

  plotDiv.on("plotly_selected", function (eventData) {
    if (eventData) {
      const selectedData = [];
      eventData.points.forEach((point) => {
        // Ensure these mappings match  data structure
        if (point.y === "negative") {
          const datum = {
            Review: point.x, // Assuming point.x corresponds to 'Review'
            "Sentiment Label": point.y, // point.y corresponds to 'Sentiment Label'
            "Sentiment Score": point.z, // Assuming point.z corresponds to 'Sentiment Score'
          };
          selectedData.push(datum);
        }
      });

      // Now call  displaySentimentTable function with the selected data
      displaySentimentTable(selectedData);
    }
  });
}

function displayWordTree(wordTreeHtml) {
  const wordTreeContainer = document.getElementById("wordTreeContainer");
  wordTreeContainer.innerHTML = wordTreeHtml;
  document.getElementById("search_word").value = search_word;
  // For dynamic script execution:
  Array.from(wordTreeContainer.getElementsByTagName("script")).forEach(
    (oldScript) => {
      const newScript = document.createElement("script");
      Array.from(oldScript.attributes).forEach((attr) =>
        newScript.setAttribute(attr.name, attr.value)
      );
      newScript.appendChild(document.createTextNode(oldScript.innerHTML));
      oldScript.parentNode.replaceChild(newScript, oldScript);
    }
  );
}

let currentWordTreeData; // Global variables
let currentSearchWord;

//  get the WordTree data from Flask
function handleWordTreeData(wordTreeData, search_word) {
  currentWordTreeData = wordTreeData;
  currentSearchWord = search_word;

  document.getElementById("search_word").value = currentSearchWord;
  google.charts.load("current", { packages: ["wordtree"] });
  google.charts.setOnLoadCallback(function () {
    // Force a redraw after a slight delay
    setTimeout(() => {
      drawWordTree(currentWordTreeData, currentSearchWord);
    }, 200); //adjust this delay if needed
  });
}

function drawWordTree(wordTreeData, search_word) {
  const container = document.getElementById("wordtree_basic");

  const data = google.visualization.arrayToDataTable(wordTreeData);
  const options = {
    wordtree: {
      format: "implicit",
      type: "double",
      word: search_word,
      colors: ["red", "black", "green"],
    },
  };

  setTimeout(() => {
    const chart = new google.visualization.WordTree(container);
    chart.draw(data, options);
  }, 300); // Add a slight delay

  container.offsetHeight;
}

const renderPunctuationMenu = () => {
  const puncSwitch = document.getElementById("puncSwitchDiv");
  puncSwitch.style.display = "block";

  const allPuncListInnerContainer = document.getElementById(
    "allPuncListInnerContainer"
  );

  // Object of punctuation: id
  const puncIds = {
    PuncDQ: '"',
    PuncSQ: "'",
    PuncOpenParen: "(",
    PuncCloseParen: ")",
    PuncSquareL: "[",
    PuncSquareR: "]",
    PuncCOpen: "{",
    PuncCClose: "}",
    PuncPlus: "+",
    PuncHyphen: "-",
    PuncAst: "*",
    PuncFS: "/",
    PuncEQ: "=",
    PuncLT: "<",
    PuncGT: ">",
    PuncDollar: "$",
    PuncPound: "£",
    PuncEuro: "€",
    PuncPercent: "%",
    PuncExclam: "!",
    PuncHash: "#",
    PuncAmp: "&",
    PuncComma: ",",
    PuncFullStop: ".",
    PuncColon: ":",
    PuncSemi: ";",
    PuncQM: "?",
    PuncAt: "@",
    PuncBackslash: "\\",
    PuncCaret: "^",
    PuncUnderscore: "_",
    PuncBacktick: "`",
    PuncPipe: "|",
    PuncTilde: "~",
  };

  // Create a row
  const rowContainer = document.createElement("div");
  // Classes for smaller screens added
  rowContainer.classList.add(
    "row",
    "row-cols-2",
    "row-cols-md-4",
    "row-cols-lg-6"
  );
  allPuncListInnerContainer.appendChild(rowContainer);

  Object.entries(puncIds).forEach(([key, val], i) => {
    const colContainer = document.createElement("div");
    colContainer.classList.add("col", "form-check");

    const input = document.createElement("input");
    input.type = "checkbox";
    input.classList.add("form-check-input");
    input.id = key;
    input.value = val;

    const label = document.createElement("label");
    label.classList.add("form-check-label");
    label.htmlFor = key;
    label.textContent = val;

    colContainer.appendChild(input);
    colContainer.appendChild(label);

    rowContainer.appendChild(colContainer);
  });
};

document.addEventListener("DOMContentLoaded", function () {
  // Renders the punctuation menu
  renderPunctuationMenu();

  const searchWordInput = document.getElementById("search_word");
  const puncSwitch = document.getElementById("puncSwitch");

  // Check if the element exists
  if (!searchWordInput) {
    console.error("Element with id 'search_word' not found.");
    return; // Exit if the element doesn't exist
  }

  // Initial drawing of the word tree after the DOM is loaded
  if (currentSearchWord && currentSearchWord.trim() !== "") {
    drawWordTree(currentWordTreeData, currentSearchWord);
  }

  const selectAllCheckbox = document.getElementById("PSSelectAll");
  const allPuncList = document.getElementById("allPuncListInnerContainer");
  const childElements = allPuncList.querySelectorAll("input[type=checkbox]");
  const allPuncCheckboxes = Array.from(childElements).filter(
    (checkbox) => checkbox.id !== "PSSelectAll"
  );

  // Updates displayed word tree, called after user input
  function updateDisplayedWordTree(newSearchWord) {
    // Helper function to escape special regex characters
    function escapeRegExpChar(char) {
      return /[.*+?^${}()|[\]\\]/.test(char) ? `\\${char}` : char;
    }

    // Get punctuation to exclude
    let regExpString = "";

    // Excludes All selector | Checkbox checked => included | Checkbox unchecked => excluded
    childElements.forEach((child) => {
      if (child.id !== "PSSelectAll" && !child.checked) {
        regExpString += escapeRegExpChar(child.value);
      }
    });

    try {
      const regex = new RegExp(`[${regExpString.replace(/-/g, "\\-")}]`, "g");

      if (newSearchWord.trim() !== "") {
        // If all punctuation is included
        if (selectAllCheckbox.checked) {
          drawWordTree(currentWordTreeData, newSearchWord);
        } else {
          // Creates copy of array without reference
          const copy = JSON.parse(JSON.stringify(currentWordTreeData));
          // Removes any punctuation, collapses multiple whitespace to single whitespace, and trims bordering whitespace
          copy.map((arr) => {
            arr[0] = arr[0]
              .replace(regex, "")
              .replace(/\s{2,}/g, " ")
              .trim();
          });
          drawWordTree(copy, newSearchWord);
        }
      }
    } catch (error) {
      console.log("Error with regex:", error);
    }
  }

  // Redraw upon search changes
  searchWordInput.addEventListener("input", function () {
    let newSearchWord = searchWordInput.value;
    updateDisplayedWordTree(newSearchWord);
  });

  // Redraw upon checkbox change
  puncSwitch.addEventListener("click", function () {
    const puncMenu = document.getElementById("allPuncList");
    const puncKey = document.getElementById("puncKey");
    puncMenu.style.display = puncSwitch.checked === true ? "block" : "none";
    puncKey.style.display = puncSwitch.checked === true ? "block" : "none";
  });

  // Handles punctuation menu visibility
  selectAllCheckbox.addEventListener("click", function () {
    selectAllCheckbox.checked
      ? childElements.forEach((child) => (child.checked = true))
      : childElements.forEach((child) => (child.checked = false));
  });

  $("#puncKey").on("click", false);

  // Default all punctuation to checked
  childElements.forEach((child) => {
    child.checked = true;
    child.addEventListener("click", function () {
      let isAllChecked = true;
      allPuncCheckboxes.forEach((checkbox) => {
        if (!checkbox.checked) {
          isAllChecked = false;
        }
      });
      selectAllCheckbox.checked = isAllChecked;
      let newSearchWord = searchWordInput.value;
      updateDisplayedWordTree(newSearchWord);
    });
  });
});

function startAnalysisfile_uploaded(event) {
  console.log("file uploaded");
  event.preventDefault(); // To prevent the form from submitting in the traditional way
  validateForm(event, "upload");
  const formData = new FormData(document.getElementById("text-analysis-form"));

  fetch("/fileanalysis", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.status === "error") {
        alert(data.message);
        return;
      }

      if (data.columns) {
        populateColumns(data.columns);
      }
    })
    .catch((error) => console.error("Error:", error));
}

let fetchedData = null;

function viewSelectedColumns(event) {
  document.getElementById("submit-rows-btn").classList.remove("hidden");
  if (event) event.preventDefault();

  const dropdown = document.getElementById("columns-dropdown");
  const selectedColumns = [...dropdown.options]
    .filter((option) => option.selected)
    .map((option) => option.value);

  if (selectedColumns.length === 0) {
    if (getCurrentLanguage() === "cy") {
      alert("Ni ddewiswyd colofnau!");
    } else {
      alert("No columns selected!");
    }
  }

  fetch("/fileanalysis", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      input_method: "columns",
      selectedColumns: selectedColumns,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.message && data.message === "Data extracted") {
        initializeAllRowsAsSelected(data.data);
        //displayDatatable(data.data);

        fetchedData = data.data;

        onDataFetchedBasedOnSelectedColumn(fetchedData);
      } else {
        console.error("Error fetching data:", data);
      }
    })
    .catch((error) => {
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
  allSelectedRows = data.map((row) => JSON.stringify(row));
}

function displayDatatable(data) {
  allData = data; // Store the entire data for later operations

  // Create the basic structure for DataTable
  const tableContainer = document.getElementById("data-table-container");
  tableContainer.innerHTML = `
    <table id='data-table' class='w3-table w3-bordered w3-striped'>
        <thead></thead>
        <tbody></tbody>
        <tfoot></tfoot>
    </table>`;
  // Add tfoot structure
  const tfoot = document.getElementById("data-table").querySelector("tfoot");
  const footerRow = document.createElement("tr");
  Object.keys(data[0]).forEach((key) => {
    const th = document.createElement("th");
    footerRow.appendChild(th);
  });
  tfoot.appendChild(footerRow);

  // Adding header row with checkboxes and column names
  const thead = document.getElementById("data-table").querySelector("thead");
  const headerRow = document.createElement("tr");

  // Checkbox header
  const thCheckBox = document.createElement("th");
  const masterCheckbox = document.createElement("input");
  masterCheckbox.type = "checkbox";
  masterCheckbox.id = "master-check";
  masterCheckbox.checked = true;
  masterCheckbox.addEventListener("change", function () {
    const isChecked = this.checked;
    const checkboxes = document.querySelectorAll(".data-row-check");
    checkboxes.forEach((cb) => {
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
  Object.keys(data[0]).forEach((key) => {
    const th = document.createElement("th");
    th.textContent = key;
    headerRow.appendChild(th);
  });

  thead.appendChild(headerRow);

  // Initialize DataTables
  const dataTable = $("#data-table").DataTable({
    data: allData,
    columns: [
      {
        data: null,
        render: function (data, type, full) {
          const rowString = JSON.stringify(full);
          const isChecked = allSelectedRows.includes(rowString);
          return `<input type="checkbox" class="data-row-check" value="${rowString}" ${
            isChecked ? "checked" : ""
          }>`;
        },
        orderable: false,
      },
      ...Object.keys(allData[0]).map((key) => ({ data: key })),
    ],
    initComplete: function () {
      // Add filtering capabilities to each column
      this.api()
        .columns()
        .every(function () {
          const columnIndex = this.index();
          if (columnIndex === 0) return; // Skip the checkbox column
          const column = this;
          const select = $('<select><option value=""></option></select>')
            .appendTo($(column.footer()).empty())
            .on("change", function () {
              const val = $.fn.dataTable.util.escapeRegex($(this).val());
              column.search(val ? "^" + val + "$" : "", true, false).draw();
            });

          column
            .data()
            .unique()
            .sort()
            .each(function (d, j) {
              select.append('<option value="' + d + '">' + d + "</option>");
            });
        });

      // Attach datepicker to any existing date input fields in footer
      $("input.date-filter").datepicker({
        changeMonth: true,
        changeYear: true,
        onSelect: function () {
          dataTable.draw();
        },
      });
    },

    drawCallback: function () {
      // Update master checkbox status based on current page
      const checkboxes = document.querySelectorAll(".data-row-check");
      const allChecked = Array.from(checkboxes).every((cb) => cb.checked);
      masterCheckbox.checked = allChecked;
    },
  });

  // Handle the checkbox state after draw
  $("#data-table").on("change", ".data-row-check", function () {
    const rowString = this.value;
    if (this.checked && !allSelectedRows.includes(rowString)) {
      allSelectedRows.push(rowString);
    } else {
      const index = allSelectedRows.indexOf(rowString);
      if (index !== -1) {
        allSelectedRows.splice(index, 1);
      }
    }
    const checkboxes = document.querySelectorAll(".data-row-check");
    const allChecked = Array.from(checkboxes).every((cb) => cb.checked);
    masterCheckbox.checked = allChecked;
  });
}

function createPaginationControls(container, data) {
  const navElement = document.createElement("nav");
  navElement.setAttribute("aria-label", "Page navigation");

  const paginationDiv = document.createElement("div");
  paginationDiv.className = "pagination-controls";

  if (currentPage > 1) {
    const prevButton = document.createElement("button");
    prevButton.innerText = "Previous";
    prevButton.addEventListener("click", function () {
      currentPage--;
      displayDatatable(data);
    });
    paginationDiv.appendChild(prevButton);
  }

  const pageInfo = document.createElement("span");
  pageInfo.innerText = `Page ${currentPage} of ${totalPages}`;
  paginationDiv.appendChild(pageInfo);

  if (currentPage < totalPages) {
    const nextButton = document.createElement("button");
    nextButton.innerText = "Next";
    nextButton.addEventListener("click", function () {
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
  document.getElementById("column-selection").classList.remove("hidden");
  const dropdownElement = document.getElementById("columns-dropdown");

  // If there's an existing Choices instance, destroy it
  if (choicesInstance) {
    choicesInstance.destroy();
    choicesInstance = null;
  }

  // Reset dropdown
  dropdownElement.innerHTML = "";

  // Populate options
  columns.forEach((column) => {
    const option = document.createElement("option");
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
  document.getElementById("column-selection").style.display = "none";

  // Clear the dropdown
  document.getElementById("columns-dropdown").innerHTML = "";

  // Clear the data table container
  document.getElementById("data-table-container").innerHTML = "";

  // Reset visibility of other inner elements
  document.getElementById("columns-container").classList.add("hidden");
}

// Global variables
let wordFrequencies = {};
let unfilteredWordFrequencies = {};
let semantictags = {};
let isWordTreeClicked;

function sendSelectedRows() {
  console.log("sendSelectedRows called");

  // Fetch the container holding the column labels
  const container = document.getElementById("columnLabelsContainer");

  // Get all the spans inside the container
  const labels = container.querySelectorAll(".column-label span");

  // Check if only one column label is left
  if (labels.length !== 1) {
    if (getCurrentLanguage() === "cy") {
      alert(
        "Dylid sicrhau mai un golofn yn unig a ddewisir er mwyn symud ymlaen."
      );
    } else {
      alert("Please ensure only one column is selected to proceed.");
    }
    return;
  }
  let allNumeric = true; // Assume all are numeric initially
  let someText = false; // To check if there's any text content

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
  const columnLabels = Array.from(
    document.querySelectorAll("#columnLabelsContainer .column-label span")
  ).map((label) => label.textContent);

  // Retrieve the selected rows after any filtration in the ag-Grid
  const selectedNodes = gridOptions.api.getSelectedNodes();

  // Process the selected rows
  const selectedData = selectedNodes.map((node) => {
    const data = {};
    columnLabels.forEach((column) => {
      data[column] = node.data[column];
    });
    return data;
  });
  // Check if at least two rows are selected
  if (selectedNodes.length < 2) {
    if (getCurrentLanguage() === "cy") {
      alert("Dewiswch o leiaf ddwy res i ddechrau dadansoddi.");
    } else {
      alert("Please select at least two rows to start the analysis.");
    }
    return;
  }
  const mergedData = selectedData.map((row) => {
    return columnLabels.map((column) => row[column]).join(" "); // Merge the selected columns into one string
  });

  const selectedColumn = labels[0].textContent || labels[0].innerText;

  // Check for rows with only text (alphabets)
  const allNumericRows = selectedData.every((row) => {
    const cellValue = row[selectedColumn];
    return typeof cellValue === "string" && !cellValue.match(/[a-zA-Z]+/);
  });

  const allTextRows = selectedData.every((row) => {
    const cellValue = row[selectedColumn];
    return typeof cellValue === "string" && cellValue.match(/[a-zA-Z]+/);
  });

  if (allNumericRows) {
    if (getCurrentLanguage() === "cy") {
      alert(
        "Mae o leiaf un rhes yn y golofn a ddewiswyd yn cynnwys rhifau neu symbolau yn unig."
      );
    } else {
      alert(
        "At least one row in the selected column contains only numbers or symbols."
      );
    }
    return;
  }

  const loadingElement = document.getElementById("loading");
  loadingElement.style.display = "flex";
  const currentLang = getCurrentLanguage();

  // Reset word tree tab
  isWordTreeClicked = false;

  // Send the mergedData to the server for processing
  fetch("/process_rows", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({ mergedData: mergedData, language: currentLang }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.status === "success") {
        loadingElement.style.display = "none";
        document.getElementById("SentimentAnalysisContainer").style.display =
          "block";

        displayOverallSentiment(data.sentimentCounts);
        displaySentimentTable(data.sentimentData);
        displayPlot(data.sentimentPlotPie, "SentimentPlotViewPie");
        displayPlot(data.sentimentPlotBar, "SentimentPlotViewBar");
        //setupSelectionListener('SentimentPlotViewPie')

        handleWordTreeData(data.wordTreeData, data.search_word);
        document.getElementById("search_word").value = data.search_word;
        populateDropdown(data.wordFrequencies);

        // Stores word frequency data
        wordFrequencies = data.wordFrequencies;
        unfilteredWordFrequencies = data.unfilteredWordFrequencies;

        semantictags = data.sortedUniqueTags;
        document.getElementById("tab-buttons").classList.remove("hidden"); // Show the tab buttons
        document.getElementById("tabs").classList.remove("hidden"); // Show the tabs content
        showTab(0); // Automatically switch to the analysis tab

        const summaryElement = document.getElementById("summary");
        summaryElement.textContent = data.summary
          ? data.summary
          : "Could not generate summary.";

        const iframeElem = document.getElementById("scattertextIframe");
        sendWordCloudRequest();
        iframeElem.style.opacity = 0.99;
        requestAnimationFrame(() => {
          iframeElem.src = data.scatterTextHtml + "?t=" + new Date().getTime();
        });
        document.getElementById("scattertextIframe").style.display = "none";
        setTimeout(() => {
          document.getElementById("scattertextIframe").style.display = "block";
        }, 50);
        iframeElem.contentWindow.location.reload(true);
      } else {
        loadingElement.style.display = "none";
        console.error("Error processing rows:", data);
      }
    })
    .catch((error) => {
      loadingElement.style.display = "none";
      console.error("Error sending selected rows:", error);
    });
}

$(document).ready(function () {
  var table = $("#example").DataTable();

  // Dynamically add a search input or select box to each column footer
  table.columns().every(function () {
    var column = this;
    if (
      this.data()
        .eq(0)
        .filter((value) => !isNaN(new Date(value).getDate())).length > 0
    ) {
      // Date column detection
      // This is probably a date column, so we won't add a select dropdown for it
      $(column.footer()).html("");
    } else {
      var select = $('<select><option value=""></option></select>')
        .appendTo($(column.footer()).empty())
        .on("change", function () {
          var val = $.fn.dataTable.util.escapeRegex($(this).val());
          column.search(val ? "^" + val + "$" : "", true, false).draw();
        });

      column
        .data()
        .unique()
        .sort()
        .each(function (d, j) {
          select.append('<option value="' + d + '">' + d + "</option>");
        });
    }
  });

  // Date range filtering logic
  $.fn.dataTable.ext.search.push(function (settings, data, dataIndex) {
    var min = $("#date_start").datepicker("getDate");
    var max = $("#date_end").datepicker("getDate");

    for (var i = 0; i < data.length; i++) {
      var dateData = new Date(data[i]);
      if (!isNaN(dateData.getDate())) {
        // Date column detection
        var dateValue = dateData;
        if (
          (isNaN(min) && isNaN(max)) ||
          (isNaN(min) && dateValue <= max) ||
          (min <= dateValue && isNaN(max)) ||
          (min <= dateValue && dateValue <= max)
        ) {
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
    onSelect: function () {
      table.draw();
    },
  });
});

function reloadIframe() {
  const iframe = document.getElementById("scattertextIframe");
  //iframe.src = iframe.src;
  iframe.contentWindow.location.reload(true);
}

let selectedCloudType = "";
let selectedcloudmeasure = "";
let selectedCloudtext = "";
let cloudmeasuretxt = "";

function sendWordCloudRequest() {
  // Removes previous word clouds
  const wordCloudImageElement = document.getElementById("wordCloudImage");
  wordCloudImageElement.src = "";
  wordCloudImageElement.style.display = "none";
  const secWordCloudImg = document.getElementById("secWordCloudImage");
  if (secWordCloudImg) {
    secWordCloudImg.remove();
  }

  // Hides list
  const wordTagAssociationsContainer = document.getElementById(
    "tag-words-associations-container"
  );
  wordTagAssociationsContainer.style.display = "none";

  // Reset list
  const listContainer = document.getElementById("tag-words-associations-list");
  listContainer.innerHTML = "";

  const downloadWordCloudBtn = document.getElementById("word-cloud-download-1");
  const downloadSecWordCloudBtn = document.getElementById(
    "word-cloud-download-2"
  );
  downloadWordCloudBtn.style.display = "none";
  downloadSecWordCloudBtn.style.display = "none";

  const cloudTypeDropdown = document.querySelector('select[name="cloud_type"]');
  selectedCloudType = cloudTypeDropdown.value;
  selectedCloudtext =
    cloudTypeDropdown.options[cloudTypeDropdown.selectedIndex].text;

  const cloudshapeDropdown = document.querySelector(
    'select[name="cloud_shape"]'
  );
  const selectedCloudshape = cloudshapeDropdown.value;
  const cloudcolorDropdown = document.querySelector(
    'select[name="cloud_outline_color"]'
  );
  const selectedCloudcolor = cloudcolorDropdown.value;
  const cloud_measureDropdown = document.querySelector(
    'select[name="cloud_measure"]'
  );
  selectedcloudmeasure = cloud_measureDropdown.value;
  cloudmeasuretxt =
    cloud_measureDropdown.options[cloud_measureDropdown.selectedIndex].text;
  const wordListOuterContainer = document.getElementById(
    "wordListOuterContainer"
  );
  wordListOuterContainer.style.display = "none";

  const cloudLoadingElement = document.getElementById("cloudLoading");
  cloudLoadingElement.style.display = "block";

  fetch("/generate_wordcloud", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      cloud_type: selectedCloudType,
      cloud_shape: selectedCloudshape,
      cloud_outline_color: selectedCloudcolor,
      cloud_measure: selectedcloudmeasure,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      wordCloudImageElement.src = data.wordcloud_image_path[0];
      wordCloudImageElement.style.display = "block"; // Display the image
      wordListOuterContainer.style.display = "flex"; // Display the word list

      if (selectedCloudType === "semantic_tags") {
        const wordCloudImgContainer = document.getElementById(
          "wordCloudImageContainer"
        );

        // For the words with semantic tags cloud
        const secWordCloudImg = document.createElement("img");
        secWordCloudImg.id = "secWordCloudImage";
        secWordCloudImg.classList.add("w-100");
        secWordCloudImg.src = data.wordcloud_image_path[1];
        secWordCloudImg.alt = "Second Word Cloud Image";
        secWordCloudImg.style.display = "none";
        wordCloudImgContainer.appendChild(secWordCloudImg);

        renderTagWordsAssociatons(data.tag_words_associations);

        // Make second word cloud download button visible
        downloadSecWordCloudBtn.style.display = "block";
        // Make word list visible
        wordTagAssociationsContainer.style.display = "";
      }

      renderWordCheckboxes(data.word_list[0]);
      // Checks all checkboxes
      toggleCheckboxes(true);
      downloadWordCloudBtn.style.display = "block";
      cloudLoadingElement.style.display = "none";
    })
    .catch((error) => {
      console.error("Error generating word cloud:", error);
    });
}

function toggleCheckboxes(isChecked) {
  document.querySelectorAll(".word-checkbox").forEach((checkbox) => {
    checkbox.checked = isChecked;
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const cloudTypeDropdown = document.querySelector('[name="cloud_type"]');
  const cloudShapeDropdown = document.querySelector('[name="cloud_shape"]');
  const cloudOutlineColorDropdown = document.querySelector(
    '[name="cloud_outline_color"]'
  );
  const cloud_measureDropdown = document.querySelector(
    'select[name="cloud_measure"]'
  );
  cloud_measureDropdown.addEventListener("change", regenerateWordCloud);
  cloudTypeDropdown.addEventListener("change", generateWordClouds);
  cloudShapeDropdown.addEventListener("change", regenerateWordCloud);
  cloudOutlineColorDropdown.addEventListener("change", regenerateWordCloud);
});

function generateWordClouds() {
  const loadingElement = document.getElementById("loading");
  const wordListOuterContainer = document.getElementById(
    "wordListOuterContainer"
  );
  const wordTagAssociationsContainer = document.getElementById(
    "tag-words-associations-container"
  );

  loadingElement.style.display = "flex";
  wordListOuterContainer.style.setProperty("display", "none", "important");
  wordTagAssociationsContainer.style.display = "none";

  const downloadWordCloudBtn = document.getElementById("word-cloud-download-1");
  const downloadSecWordCloudBtn = document.getElementById(
    "word-cloud-download-2"
  );
  downloadWordCloudBtn.style.display = "none";
  downloadSecWordCloudBtn.style.display = "none";

  const formData = new FormData(document.getElementById("wordCloudForm"));
  const cloud_data = {
    cloud_type: formData.get("cloud_type"),
    cloud_shape: formData.get("cloud_shape"),
    cloud_outline_color: formData.get("cloud_outline_color"),
    cloud_measure: formData.get("cloud_measure"),
  };

  fetch("/generate_wordcloud", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cloud_data),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.status !== "success") throw new Error("Error fetching data");

      const wordCloudImgContainer = document.getElementById(
        "wordCloudImageContainer"
      );

      // Removes previous word clouds
      const wordCloudImageElement = document.getElementById("wordCloudImage");
      wordCloudImageElement.src = "";
      wordCloudImageElement.style.display = "none";
      const secWordCloudImg = document.getElementById("secWordCloudImage");
      if (secWordCloudImg) {
        secWordCloudImg.remove();
      }

      setTimeout(() => {
        // Set the new wordcloud image and checkboxes after the delay
        wordCloudImageElement.src = data.wordcloud_image_path[0];
        wordCloudImageElement.style.display = "block";
        wordListOuterContainer.style.display = "flex";

        if (cloud_data.cloud_type === "semantic_tags") {
          // For the words with semantic tags cloud
          const secWordCloudImg = document.createElement("img");
          secWordCloudImg.id = "secWordCloudImage";
          secWordCloudImg.classList.add("w-100");
          secWordCloudImg.src = data.wordcloud_image_path[1];
          secWordCloudImg.alt = "Second Word Cloud Image";
          secWordCloudImg.style.display = "none";
          wordCloudImgContainer.appendChild(secWordCloudImg);

          // Adds event listener to radio elements
          const semTagsRadio = document.getElementById("show-semantic-tags");
          const wordsRadio = document.getElementById("show-words");

          semTagsRadio.addEventListener("change", () => {
            const wordCloudImg = document.getElementById("wordCloudImage");
            const secWordCloudImg =
              document.getElementById("secWordCloudImage");
            wordCloudImg.style.display = "block";
            secWordCloudImg.style.display = "none";
          });

          wordsRadio.addEventListener("change", () => {
            const wordCloudImg = document.getElementById("wordCloudImage");
            const secWordCloudImg =
              document.getElementById("secWordCloudImage");
            secWordCloudImg.style.display = "block";
            wordCloudImg.style.display = "none";
          });

          renderTagWordsAssociatons(data.tag_words_associations);

          // Make second word cloud download button visible
          downloadSecWordCloudBtn.style.display = "block";
          // Make word list visible
          wordTagAssociationsContainer.style.display = "";
        }

        renderWordCheckboxes(data.word_list[0]);
        // Checks all checkboxes
        toggleCheckboxes(true);
        downloadWordCloudBtn.style.display = "block";

        // Handles the display of semantic tag radio selectors
        const tagsOrWordsRadio = document.getElementById(
          "sem-tags-radio-selection"
        );
        tagsOrWordsRadio.style.display =
          cloud_data.cloud_type === "semantic_tags" ? "flex" : "none";

        loadingElement.style.display = "none";
      }, 5000);
    })
    .catch((error) => {
      console.error("Error generating word cloud:", error);
    });
}

function renderWordCheckboxes(wordList) {
  const wordListContainer = document.getElementById("wordListContainer");
  wordListContainer.innerHTML = ""; // Clear previous word checkboxes

  // Create 'Select/Deselect All' checkbox
  const selectAllContainer = document.createElement("div");
  const selectAllLabel = document.createElement("label");
  const selectAllCheckbox = document.createElement("input");
  selectAllCheckbox.type = "checkbox";
  selectAllCheckbox.onclick = function () {
    toggleCheckboxes(this.checked);
  };
  selectAllContainer.classList.add("mb-1");
  selectAllLabel.appendChild(selectAllCheckbox);
  selectAllLabel.appendChild(document.createTextNode(" All"));
  selectAllLabel.classList.add("px-1", "text-break");
  selectAllCheckbox.classList.add("word-checkbox-all", "my-1");
  selectAllContainer.appendChild(selectAllLabel);
  wordListContainer.appendChild(selectAllContainer);

  // Generate checkboxes for words
  wordList.sort().forEach((word) => {
    const wordContainer = document.createElement("div");
    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    wordContainer.classList.add("my-1");
    checkbox.type = "checkbox";
    checkbox.value = word;
    checkbox.classList.add("word-checkbox", "my-1"); // For the select/deselect function
    label.classList.add("d-flex", "align-items-start", "px-1", "text-break");
    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(` ${word}`));
    wordContainer.appendChild(label);
    wordListContainer.appendChild(wordContainer);
  });
}

function renderTagWordsAssociatons(tagWordsArray) {
  const listContainer = document.getElementById("tag-words-associations-list");
  // Reset list
  listContainer.innerHTML = "";

  for (let [tag, wordArray] of Object.entries(tagWordsArray)) {
    tagWordsContainer = document.createElement("div");
    tagWordsContainer.classList.add(
      "container-fluid",
      "d-flex",
      "flex-column",
      "mb-4"
    );

    const tagContainer = document.createElement("h1");
    tagContainer.id = `tag-${tag}`;
    tagContainer.classList.add(
      "d-flex",
      "justify-content-center",
      "align-items-center",
      "text-break",
      "mt-0"
    );
    tagContainer.style.fontWeight = "bold";
    tagContainer.appendChild(document.createTextNode(tag));

    const wordListContainer = document.createElement("div");
    wordListContainer.classList.add(
      "container-fluid",
      "m-0",
      "row",
      "row-cols-1",
      "row-cols-sm-2"
    );

    wordArray.forEach((word) => {
      const col = document.createElement("div");
      col.classList.add(
        "col",
        "d-flex",
        "justify-content-center",
        "align-items-center",
        "text-break"
      );
      col.appendChild(document.createTextNode(word));
      wordListContainer.appendChild(col);
    });

    tagWordsContainer.appendChild(tagContainer);
    tagWordsContainer.appendChild(wordListContainer);
    listContainer.appendChild(tagWordsContainer);
  }
}

function handleWordTagListVis(event) {
  const listContainer = document.getElementById("tag-words-associations-list");
  const iconContainer = document.getElementById("word-tag-list-icon");

  if (event.target.checked) {
    listContainer.style.display = "none";
    iconContainer.classList.replace("fa-eye-slash", "fa-eye");
  } else {
    listContainer.style.display = "flex";
    iconContainer.classList.replace("fa-eye", "fa-eye-slash");
  }
}

function regenerateWordCloud() {
  const selectedWords = [];
  const allWords = [];
  document.querySelectorAll(".word-checkbox").forEach((checkbox) => {
    if (checkbox.checked) {
      selectedWords.push(checkbox.value);
    }
    allWords.push(checkbox.value);
  });
  const loadingElement = document.getElementById("loading");
  loadingElement.style.display = "flex";

  // Extract the column label name
  const columnLabels = document.querySelectorAll(
    "#columnLabelsContainer .column-label"
  );

  // If no labels are selected or more than one, show a message and exit the function
  if (columnLabels.length !== 1) {
    if (getCurrentLanguage() === "cy") {
      alert("Dewiswch un golofn yn unig.");
    } else {
      alert("Please select exactly one column.");
    }
    return;
  }
  // Extract the column label name
  const columnLabel = document.querySelector(
    "#columnLabelsContainer .column-label span"
  );
  if (!columnLabel) {
    if (getCurrentLanguage() === "cy") {
      alert("Dewiswch label colofn.");
    } else {
      alert("Please select a column label.");
    }
    return;
  }
  const selectedLabel = columnLabel.innerText;
  const formData = new FormData(document.getElementById("wordCloudForm"));
  fetch("/regenerate_wordcloud", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      words: selectedWords,
      label: selectedLabel,
      cloud_type: formData.get("cloud_type"),
      cloud_shape: formData.get("cloud_shape"),
      cloud_outline_color: formData.get("cloud_outline_color"),
      cloud_measure: formData.get("cloud_measure"),
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      const wordCloudImageElement = document.getElementById("wordCloudImage");
      wordCloudImageElement.src = "";
      wordCloudImageElement.style.display = "none";

      const secWordCloudImg = document.getElementById("secWordCloudImage");
      if (secWordCloudImg) {
        secWordCloudImg.remove();
      }

      const wordCloudImgContainer = document.getElementById(
        "wordCloudImageContainer"
      );

      // Set the new wordcloud image and checkboxes after the delay
      wordCloudImageElement.src = data.wordcloud_image_path[0];
      wordCloudImageElement.style.display = "block";

      setTimeout(() => {
        if (formData.get("cloud_type") === "semantic_tags") {
          // Check which radio is selected, to display selected cloud
          const semTagsRadio = document.getElementById("show-semantic-tags");
          const wordsRadio = document.getElementById("show-words");

          // Set the new wordcloud image and checkboxes after the delay
          wordCloudImageElement.src = data.wordcloud_image_path[0];
          wordCloudImageElement.style.display = semTagsRadio.checked
            ? "block"
            : "none";

          // For the words with semantic tags cloud
          const secWordCloudImg = document.createElement("img");
          secWordCloudImg.id = "secWordCloudImage";
          secWordCloudImg.classList.add("w-100");
          secWordCloudImg.src = data.wordcloud_image_path[1];
          secWordCloudImg.alt = "Second Word Cloud Image";
          secWordCloudImg.style.display = wordsRadio.checked ? "block" : "none";
          wordCloudImgContainer.appendChild(secWordCloudImg);

          renderTagWordsAssociatons(data.tag_words_associations);
        }

        loadingElement.style.display = "none";
      }, 5000);
    })
    .catch((error) => {
      console.error("Error regenerating word cloud:", error);
      // Re-enable the checkboxes if an error occurs
      document.querySelectorAll(".word-checkbox").forEach((checkbox) => {
        checkbox.checked = true;
      });

      loadingElement.style.display = "none";

      alert(
        `Error generating word cloud. Please try again with different values.\n${error}`
      );
    });
}

function handleWordCloudSearchChange(event) {
  const searchBox = event.target;
  const query = searchBox.value.toLowerCase();

  const wordListElements = document.querySelectorAll(".word-checkbox");

  wordListElements.forEach((element) => {
    const word = element.value.toLowerCase();
    const parentDiv = element.closest("div");

    if (word.startsWith(query)) {
      parentDiv.style.order = 0;
      parentDiv.style.display = "block";
    } else if (word.includes(query)) {
      parentDiv.style.order = 1;
      parentDiv.style.display = "block";
    } else {
      parentDiv.style.order = 2;
      parentDiv.style.display = "none";
    }
  });
}

const handleWordCloudPosChange = (event) => {
  const wordCloudContainer = document.getElementById("wordListOuterContainer");
  const firstChild = document.getElementById("responsive-flex-first");
  const secondChild = document.getElementById("wordCloudImageContainer");
  const wordListContainer = document.getElementById("wordListContainer");
  const semTagsRadioContainer = document.getElementById(
    "sem-tags-radio-selection"
  );

  const wordCloudControlIcon = document.getElementById(
    "word-cloud-control-icon"
  );

  if (event.target.checked) {
    wordCloudContainer.classList.remove("responsive-flex");
    wordCloudContainer.classList.add("d-flex", "flex-column");
    wordCloudContainer.insertBefore(secondChild, firstChild);

    // Replaces expand icon with minimise
    wordCloudControlIcon.classList.remove("fa-solid", "fa-expand");
    wordCloudControlIcon.classList.add("fa-solid", "fa-minimize");

    // Allows list to expand to full width
    firstChild.classList.remove("search-container");

    // Changes word list layout from single column to grid
    wordListContainer.classList.remove("d-flex", "flex-column");
    wordListContainer.classList.add(
      "row",
      "row-cols-1",
      "row-cols-sm-2",
      "row-cols-md-4",
      "row-cols-xl-5"
    );

    // Changes position of radio selectors
    semTagsRadioContainer.classList.add("justify-content-center");
  } else {
    wordCloudContainer.classList.add("responsive-flex");
    wordCloudContainer.classList.remove("d-flex", "flex-column");
    wordCloudContainer.insertBefore(firstChild, secondChild);

    wordCloudControlIcon.classList.remove("fa-solid", "fa-minimize");
    wordCloudControlIcon.classList.add("fa-solid", "fa-expand");

    // Allows list to expand to 25% of parent max
    firstChild.classList.add("search-container");

    // Changes word list layout from grid back to single column
    wordListContainer.classList.remove(
      "row",
      "row-cols-1",
      "row-cols-sm-2",
      "row-cols-md-4",
      "row-cols-xl-5"
    );
    wordListContainer.classList.add("d-flex", "flex-column");

    // Changes position of radio selectors
    semTagsRadioContainer.classList.remove("justify-content-center");
  }
};

$(document).ready(function () {
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
  $(".tab-btn").click(function () {
    var index = $(".tab-btn").index(this);
    $(".tab-btn").removeClass("active");
    $(this).addClass("active");
    $(".tab-content").hide();
    $("#tab" + index).show();
  });

  $(".tab-btn").first().trigger("click");

  // Dark mode script
  if (localStorage.getItem("dark-mode") === "enabled") {
    $("#darkModeToggleCheckbox").prop("checked", true);
    $("body").addClass("dark-mode").removeClass("light-mode");
  }

  $("#darkModeToggleCheckbox").on("change", function () {
    if ($(this).is(":checked")) {
      localStorage.setItem("dark-mode", "enabled");
      $("body").addClass("dark-mode").removeClass("light-mode");
    } else {
      localStorage.setItem("dark-mode", "disabled");
      $("body").removeClass("dark-mode").addClass("light-mode");
    }
  });
});

function handleWordFreqSearchChange(event) {
  const searchBox = event.target;
  const query = searchBox.value.toLowerCase();

  const subCategoryDropdown = document.getElementById("subCategoryDropdown");
  const wordList = subCategoryDropdown.querySelectorAll("div");

  wordList.forEach((div) => {
    const label_text = div.querySelector("label").textContent.toLowerCase();

    if (label_text.startsWith(query)) {
      div.style.order = 0;
      div.style.display = "flex";
    } else if (label_text.includes(query)) {
      div.style.order = 1;
      div.style.display = "flex";
    } else {
      div.style.order = 2;
      div.style.display = "none";
    }
  });
}

function populateDropdown(wordFrequencies) {
  const subCategoryDropdown = document.getElementById("subCategoryDropdown");

  // Clear the current options
  while (subCategoryDropdown.firstChild) {
    subCategoryDropdown.removeChild(subCategoryDropdown.firstChild);
  }

  const wordFrequencyPairs = Object.entries(wordFrequencies);
  wordFrequencyPairs.sort((a, b) => b[1] - a[1]);
  wordFrequencyPairs.forEach(([word, frequency], i) => {
    // Creates option container
    const option = document.createElement("div");

    // Creates input element
    const input = document.createElement("input");
    input.id = `word-freq-${i}`;
    input.name = "word-freq-radio";
    input.value = word;
    input.dataset.frequency = frequency;
    input.setAttribute("data-type", "word");
    input.type = "radio";
    input.classList.add("hidden");

    // Creates label
    const label = document.createElement("label");
    label.htmlFor = `word-freq-${i}`;
    label.classList.add("form-check-label", "dropdown-item", "w-100");
    label.style.fontWeight = "bold";
    label.textContent = `${word} (${frequency})`;

    option.appendChild(input);
    option.appendChild(label);
    subCategoryDropdown.appendChild(option);
  });
}

function displayResults(data) {
  const loadingElement = document.getElementById("loading");
  loadingElement.style.display = "none";

  // Window range make visible
  $("#window-size-range-container").css("display", "block");

  // Clear previous error messages
  $("#errorContainer").empty();

  // Check for an error message in the response data
  if (data.error) {
    // Display the error message
    $("#errorContainer").text(data.error);
    $("#errorContainer").removeClass("hidden"); // Show the error container
    alert(
      "No instances found. Please choose another category as the data does not have this category."
    );
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
      $("#graphContainer").html(
        `<iframe src="${data.graph_path}" width="100%" height="750px"></iframe>`
      );
    }

    // Show elements only when there's no error
    $("#kwicTable").removeClass("hidden");
    $("#collocsTable").removeClass("hidden");
    $("#graphType").removeClass("hidden");
    $("#generateGraph").removeClass("hidden");
    $("button.analyze-btn").removeClass("hidden");
    $('label[for="graphType"]').removeClass("hidden");
  }
}

function isWord(value) {
  let option = document.querySelector(
    `#subCategoryDropdown input[value='${value}']`
  );
  return option && option.getAttribute("data-type") === "word";
}

function isTag(value) {
  let option = document.querySelector(
    `#subCategoryDropdown input[value='${value}']`
  );
  return option && option.getAttribute("data-type") === "tag";
}

function isSemTag(value) {
  let option = document.querySelector(
    `#subCategoryDropdown input[value='${value}']`
  );
  return option && option.getAttribute("data-type") === "semtag";
}

function fetchResults() {
  const subCategoryDropdown = document.getElementById("subCategoryDropdown");

  if (subCategoryDropdown === null) return;

  const selectedElement =
    subCategoryDropdown.querySelector('input[type="radio"]:checked') || null;

  const dropdownValue = selectedElement.value;
  let windowSize = $("#windowSizeRange").val();
  const loadingElement = document.getElementById("loading");
  loadingElement.style.display = "flex";

  // Decide the type of request based on the value of the dropdown
  let postData = {};
  if (isWord(dropdownValue)) {
    postData.word_selection = dropdownValue;
    postData.kwic_option = "word";
  } else if (isTag(dropdownValue)) {
    postData.tag_selection = dropdownValue;
    postData.kwic_option = "tag";
  } else if (isSemTag(dropdownValue)) {
    postData.sem_selection = dropdownValue;
    postData.kwic_option = "sem";
  } else {
    return; // If it doesn't match any criteria, exit the function
  }

  postData.window_size = windowSize;

  $.post("/Keyword_collocation", postData)
    .done((data) => {
      displayResults(data);
    })
    .fail((jqXHR, textStatus, errorThrown) => {
      console.error("Request failed: " + textStatus + ", " + errorThrown);
      loadingElement.style.display = "none";
    });
}

// Function for use unfiltered data checkbox
function handleWordFreqDatasetChange(event) {
  event.target.checked
    ? populateDropdown(unfilteredWordFrequencies)
    : populateDropdown(wordFrequencies);
}

// Attach the event handler for dropdown change
$(document).on("change", "#subCategoryDropdown", () => {
  // Remove default attribute, prevents language switching from altering dropdown text
  if ($("#select-option-btn").attr("data-default") !== undefined)
    $("#select-option-btn").removeAttr("data-default");

  // Sets button text to selected value
  const lang = getCurrentLanguage();
  const selectedInput = $("#subCategoryDropdown").find(
    'input[type="radio"]:checked'
  );

  const label = selectedInput.siblings("label");

  // For semantic and pos tags, sets button text to data-lang attribute, else sets to input value
  label.attr("data-lang-en") || label.attr("data-lang-cy")
    ? lang === "en"
      ? $("#select-option-btn").text(label.attr("data-lang-en"))
      : $("#select-option-btn").text(label.attr("data-lang-cy"))
    : $("#select-option-btn").text(selectedInput.val());

  fetchResults();
});

// Updates displayed value
$(document).on("input", "#windowSizeRange", function () {
  $("#windowSizeValue").text(this.value);
});

// Calls function when user selects and deselects
$(document).on("change", "#windowSizeRange", function () {
  fetchResults();
});

function displayKWICResults(kwicResults) {
  const kwicTable = $("#kwicTable").DataTable({
    destroy: true,
    columns: [
      {
        className: "left-context",
        render: function (data, type) {
          if (type === "display") {
            return '<div class="text-right">' + data + "</div>";
          } else if (type === "sort") {
            // return the last word for sorting
            return data.trim().split(" ").pop();
          }
          return data;
        },
      },
      {
        className: "keyword",
        render: function (data) {
          return (
            '<div class="text-center bg-primary text-white rounded p-1">' +
            data +
            "</div>"
          );
        },
      },
      {
        className: "right-context",
        render: function (data) {
          return '<div class="text-left">' + data + "</div>";
        },
      },
    ],
    language: getCurrentLanguage() === "cy" ? welshLanguageSettings : {},
  });

  kwicTable.clear();

  kwicResults.forEach((item) => {
    kwicTable.row.add([item[0], item[1], item[2]]);
  });

  kwicTable.draw();
}

function displayCollocs(collocs) {
  // Define language settings for Welsh

  const collocsTable = $("#collocsTable").DataTable({
    destroy: true,
    order: [[1, "desc"]], // Order by second column (frequency), descending
    language: getCurrentLanguage() === "cy" ? welshLanguageSettings : {}, // Apply Welsh language settings if 'cy' is selected
  });

  collocsTable.clear(); // Clear previous data
  collocs.sort((a, b) => b[1] - a[1]);
  collocs.forEach((item) => {
    collocsTable.row.add([item[0], item[1], item[2], item[3]]);
  });
  collocsTable.draw();
}

document.addEventListener("DOMContentLoaded", function () {
  // Fetch file list from backend
  fetch("/get_file_list")
    .then((response) => response.json())
    .then((files) => {
      const dropdown = document.getElementById("example-data");

      // Populate dropdown
      files.forEach((file) => {
        let option = document.createElement("option");
        option.value = file;
        option.text = file;
        dropdown.appendChild(option);
      });
    })
    .catch((error) => console.error("Error fetching file list:", error));
});

function selectExampleData() {
  const selectedFile = document.getElementById("example-data").value;
  if (selectedFile !== "Select example data file(s)") {
    // Handle the selected file, perhaps send it to 'fileanalysis_uploaded'
    startAnalysisfile_uploaded(selectedFile);
  }
}

function startAnalysisexample_uploaded(event) {
  event.preventDefault(); // To prevent the form from submitting in the traditional way
  validateForm(event, "example");
  const formDataexample = new FormData(
    document.getElementById("text-analysis-form")
  );

  fetch("/fileanalysis", {
    method: "POST",
    body: formDataexample,
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.columns) {
        populateColumns(data.columns);
      }
    })
    .catch((error) => console.error("Error:", error));
}

$(document).ready(function () {
  $("#generatePdfBtn").click(function (event) {
    event.preventDefault();

    const sentimentContent = document.getElementById("SentimentView").innerHTML;
    document.getElementById("sentimentField").value = sentimentContent;

    const wordtree = document.getElementById("wordtree_basic").innerHTML;
    document.getElementById("wordtree").value = wordtree;

    const wordCloudImageSrc = document.getElementById("wordCloudImage").src;
    document.getElementById("wordCloudImageSrcField").value = wordCloudImageSrc;

    const summary = document.getElementById("summary").innerHTML;
    document.getElementById("summaryField").value = summary;
    document.getElementById("Cloud_type").value = selectedCloudtext;
    document.getElementById("Cloud_measure").value = cloudmeasuretxt;

    $("#pdfForm").submit();
  });
});

function onSliderChange() {
  let ratio = document.getElementById("chosen_ratio").value;
  document.getElementById("ratio-value").textContent = ratio + "%";
  generateSummary(); // Call the summarizer function whenever the ratio changes
}

function generateSummary() {
  const chosen_ratio = document.getElementById("chosen_ratio").value / 100.0;

  fetch("/summarise", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chosen_ratio: chosen_ratio,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("summary").innerText = data.summary;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function handleSentimentOptionChange() {
  // Fetch the selected sentiment option
  let radios = document.getElementsByName("sentimentOption");
  let selectedOption = Array.from(radios).find((r) => r.checked).value;

  // Call backend to update the sentiment analysis
  updateSentimentAnalysis(selectedOption);

  // Display results container if it is hidden, and hide ABSA container
  document.getElementById("SentimentAnalysisContainer").style.display = "block";
  document.getElementById("ABSAContainer").style.display = "none";
}

function updateSentimentAnalysis(sentimentClasses) {
  // Show loading element
  const loadingElement = document.getElementById("loading");
  loadingElement.style.display = "flex";
  const currentLang = getCurrentLanguage();
  fetch("/update_sentiment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      sentiment_classes: sentimentClasses,
      language: currentLang,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      loadingElement.style.display = "none";
      displayOverallSentiment(data.sentimentCounts);
      displaySentimentTable(data.sentimentData);
      displayPlot(data.sentimentPlotPie, "SentimentPlotViewPie");
      displayPlot(data.sentimentPlotBar, "SentimentPlotViewBar");
    })

    .catch((error) => {
      console.error("Error:", error);
    });
}

//! Make more readable for future devs
function startABSA() {
  // Show loading element
  const loadingElement = document.getElementById("loading");
  loadingElement.style.display = "flex";

  // Get data from text fields
  const text = document.getElementById("text-to-analyze").value;
  const aspects_text = document.getElementById("absa-aspects-to-analyze").value;

  if (
    document.querySelector('input[name="text-input-method"]:checked').value ===
    "Split sentences"
  ) {
    const sentences = splitIntoSentences(text);
    const aspects = aspects_text.split(",").map((aspect) => aspect.trim());

    if (aspects.length === 0) {
      alert("Please enter aspects to analyse.");
      return;
    }

    fetch("/perform-absa", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        language: getCurrentLanguage(),
        rows: sentences,
        aspects: aspects,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        displayABSAPlots(data.plots);
        displaySentimentTable(data.sentimentData);

        document.getElementById("SentimentAnalysisContainer").style.display =
          "none";

        // Hide loading element
        loadingElement.style.display = "none";
      });
  }
}

function handleFileChange() {
  document.getElementById("columns-dropdown").innerHTML = "";
  document.getElementById("column-selection").classList.add("hidden");
  document.getElementById("dateSlider").classList.add("hidden");
  const fileName = $("#file").val().split("\\").pop();
  $(".file-name").text(fileName || $(".file-name").attr("data-lang-en")); // default to English if no file is selected

  resetToDefault();
}

let selectedColumn = null;

document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("submit-rows-btn");

  // Add the animation classes to start the animation
  btn.classList.add(
    "animate__animated",
    "animate__heartBeat",
    "animate__infinite"
  );

  btn.addEventListener("click", function () {
    // Remove the infinite animation class to stop the continuous animation
    this.classList.remove("animate__infinite");
  });
});

function checkLanguage(event) {
  event.preventDefault();

  const loadingElement = document.getElementById("loading");
  loadingElement.style.display = "flex";

  const selectedColumns = getSelectedColumns(); // Get the selected columns

  // Get the current language
  const currentLang = getCurrentLanguage();

  fetch("/check_language", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ columns: selectedColumns, language: currentLang }), // Send the selected columns and language as part of the request body
  })
    .then((response) => response.json())
    .then((data) => {
      loadingElement.style.display = "none";
      alert(data.message);
      if (data.has_both) {
        // Show the download buttons if data contains both languages
        document.getElementById("download-buttons").classList.remove("hidden");
      } else {
        // Hide the download buttons if not needed
        document.getElementById("download-buttons").classList.add("hidden");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

let welshTranslations = {
  // Add all other translations here
  page: "Tudalen",
  to: "i",
  of: "o",
  contains: "yn cynnwys",
  notContains: "Ddim yn cynnwys",
  equals: "yn hafal i",
  notEqual: "Ddim yn hafal i",
  startsWith: "Yn dechrau â",
  endsWith: "Yn gorffen â",
  blank: "gwag",
  notBlank: "ddim yn wag",
  inRange: "mewn ystod",
  greaterThan: "yn fwy na",
  lessThan: "yn llai na",
  or: "neu",
  and: "A",
};

//Global variable declarations
let gridApi;
let gridColumnApi;

let gridOptions = {
  localeText: {},
  domLayout: "autoHeight",
  pagination: true,
  paginationPageSize: 15,
  rowSelection: "multiple",
  rowDragManaged: true,
  animateRows: true,
  onFilterChanged: function (params) {
    params.api.deselectAll();
    selectDisplayedRows();
  },
  onFirstDataRendered: function () {
    setTimeout(() => {
      getSelectedColumns();
    }, 2000);
  },
  onFirstDataRendered: onFirstDataRendered,
  defaultColDef: {
    width: 100,
    editable: true,
    filter: "agTextColumnFilter",
    floatingFilter: true,
    resizable: true,
  },
  columnTypes: {
    numberColumn: {
      width: 50,
      filter: "agNumberColumnFilter",
    },
    dateColumn: {
      filter: "agDateColumnFilter",
      filterParams: {
        // Use the inRange comparator
        comparator: (
          filterLocalDateAtMidnight,
          cellValue,
          rowNode,
          filterModel
        ) => {
          const dateParts = cellValue.split("/");
          const day = Number(dateParts[0]);
          const month = Number(dateParts[1]) - 1;
          const year = Number(dateParts[2]);
          const cellDate = new Date(year, month, day);

          // If from and to dates are both present, use them
          if (filterModel) {
            if (filterModel.from && filterModel.to) {
              if (
                cellDate >= new Date(filterModel.from) &&
                cellDate <= new Date(filterModel.to)
              ) {
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
        browserDatePicker: true,
        clearButton: true, // For resetting the filter
      },
    },
  },
};

// Date Filter Params
var dateFilterParams = {
  comparator: (filterLocalDateAtMidnight, cellValue) => {
    var dateAsString = cellValue;
    if (dateAsString == null) return -1;
    var dateParts = dateAsString.split("/");
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

  const gridDiv = document.querySelector("#myGrid");
  new agGrid.Grid(gridDiv, gridOptions);

  gridApi = gridOptions.api;
  gridColumnApi = gridOptions.columnApi;
}

document.addEventListener("DOMContentLoaded", function () {
  initializeGrid();
});

function onDataFetchedBasedOnSelectedColumn(data) {
  document.getElementById("myGrid").classList.remove("hidden");
  const currentLanguage = getCurrentLanguage();
  setLanguage(currentLanguage);
  const selectedRowIds = gridApi.getSelectedRows().map((row) => row.Id);
  const columnDefs = [
    {
      headerCheckboxSelection: true,
      checkboxSelection: true,
      width: 50,
      pinned: "left",
      field: "Id",
      suppressFilter: true,
      suppressMenu: true,
      filter: false,
      floatingFilter: false,
    },

    ...Object.keys(data[0]).map((key) => {
      let filterType = "agTextColumnFilter";
      let type = [];
      let filterParams = {};

      if (typeof data[0][key] === "number") {
        filterType = "agNumberColumnFilter";
      } else if (
        typeof data[0][key] === "string" &&
        /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/.test(data[0][key])
      ) {
        filterType = "agDateColumnFilter";
        type.push("dateColumn");
        filterParams = dateFilterParams; // Here we apply the custom date comparator
      }

      return {
        headerName: key,
        field: key,
        sortable: true,
        width: 400,
        filter: filterType,
        type: type.length > 0 ? type : undefined,
        filterParams: filterParams,
      };
    }),
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
  const columnLabelsContainer = document.getElementById(
    "columnLabelsContainer"
  );
  columnLabelsContainer.innerHTML = ""; // Clear any previous labels

  Object.keys(data[0]).forEach((key) => {
    const labelDiv = document.createElement("div");
    labelDiv.classList.add("column-label");

    const labelText = document.createElement("span");
    labelText.textContent = key;
    labelDiv.appendChild(labelText);

    const closeButton = document.createElement("button");
    closeButton.textContent = "x";
    closeButton.addEventListener("click", function () {
      columnLabelsContainer.removeChild(labelDiv);

      // updateDataBasedOnLabels();
    });
    labelDiv.appendChild(closeButton);

    columnLabelsContainer.appendChild(labelDiv);
  });
}

function validateForm(event, type) {
  var isValid = true;
  if (type === "text") {
    const textAreaValue = document.getElementById("text-to-analyze").value;
    if (textAreaValue.trim() === "") {
      if (getCurrentLanguage() === "cy") {
        alert("Gludo'r testun i'w ddadansoddi ");
      } else {
        alert("Please enter text to analyse.");
      }

      isValid = false;
    }
  } else if (type === "example") {
    const exampleValue = document.getElementById("example-data").value;
    if (exampleValue === "") {
      if (getCurrentLanguage() === "cy") {
        alert("Dewiswch dewis ffeil ddata (ffeiliau data) enghreifftiol");
      } else {
        alert("Please select example data.");
      }
      isValid = false;
    }
  } else if (type === "upload") {
    const fileValue = document.getElementById("file").value;
    if (fileValue === "") {
      if (getCurrentLanguage() === "cy") {
        alert("Dewiswch llwytho ffeil ddata i fyny");
      } else {
        alert("Please upload a file.");
      }
      isValid = false;
    }
  }

  if (!isValid) {
    event.preventDefault();
  }
}

$(document).ready(function () {
  function switchLanguage(language) {
    $("[data-lang-en], [data-lang-cy]").each(function () {
      if (language === "en") {
        $(this).text($(this).attr("data-lang-en"));
      } else if (language === "cy") {
        $(this).text($(this).attr("data-lang-cy"));
      }
    });
    $("img[data-img-en], img[data-img-cy]").each(function () {
      var imgSrc =
        language === "en"
          ? $(this).attr("data-img-en")
          : $(this).attr("data-img-cy");
      $(this).attr("src", imgSrc);
    });
    for (const id in translations[language]) {
      $(id).html(translations[language][id]);
    }
    // Update the placeholder for the textarea
    var placeholderText =
      language === "en"
        ? "Paste the text to analyse here"
        : "Gludo'r testun i'w ddadansoddi yma";
    $("#text-to-analyze").attr("placeholder", placeholderText);

    // Update the placeholder for the cloud search bar
    const searchPlaceholderText =
      language === "en" ? "Search in cloud..." : "Chwilio yn y cwmwl...";
    $("#cloud-search").attr("placeholder", searchPlaceholderText);

    // Update value for cloud submit button
    const cloudSubmitBtnText =
      language === "en" ? "Submit selection" : "Cyflwyno dewis";
    $("#word-changes-submit").attr("value", cloudSubmitBtnText);

    $(".lang-flag").attr("data-active", "false"); // reset all flags
    $(`.lang-flag[data-lang=${language}]`).attr("data-active", "true"); // set the selected flag as active

    // Update placeholder text for search bar dropdown in word use and relationships
    const wordUseDropdownText =
      language === "en"
        ? "Search in dropdown list..."
        : "Chwilio yn y rhestr ddewis...";
    $("#word-use-dd-search").attr("placeholder", wordUseDropdownText);

    // Update dropdown default option for welsh
    const selectOptBtn = $("#select-option-btn");
    if (selectOptBtn.attr("data-default") !== undefined) {
      language === "en"
        ? selectOptBtn.text("-- Select --")
        : selectOptBtn.text("-- Dewis --");
    }

    localStorage.setItem("chosenLanguage", language);
  }

  const savedLanguage = localStorage.getItem("chosenLanguage") || "en";

  if (savedLanguage === "cy") {
    $(".slider").css("left", "-80px");
    $("#enLabel").show();
    $("#cyLabel").hide();
  } else {
    $("#enLabel").hide();
    $("#cyLabel").show();
  }

  // Apply the language (translations)
  switchLanguage(savedLanguage);

  // Toggle switch functionality
  $(".language-switcher").on("click", function () {
    const slider = $(this).find(".slider");
    const isEnglishActive =
      $('.lang-flag[data-lang="en"]').attr("data-active") === "true";

    if (isEnglishActive) {
      slider.css("left", "-80px");
      $("#enLabel").show();
      $("#cyLabel").hide();
      switchLanguage("cy");
    } else {
      slider.css("left", "0px");
      $("#enLabel").hide();
      $("#cyLabel").show();
      switchLanguage("en");
    }
  });
});

function isDateLikeColumn(columnValues) {
  const datePatterns = [
    /^\d{1,2}\/\d{1,2}\/\d{4}$/, // DD/MM/YYYY
    /^\d{4}-\d{1,2}-\d{1,2}$/, // YYYY-MM-DD
    /^\d{1,2}-\d{1,2}-\d{4}$/, // DD-MM-YYYY
    /^\w{3}, \d{1,2} \w{3} \d{4} \d{1,2}:\d{1,2}:\d{1,2} \w{3}$/, // Tue, 11 Aug 2009 00:00:00 GMT
    // ... add more patterns as necessary
  ];

  return columnValues.some((value) =>
    datePatterns.some((pattern) => pattern.test(value))
  );
}

function convertColumnToDateFormat(columnValues) {
  return columnValues.map((value) => {
    // Check if value is a valid date and then format it
    if (moment(value).isValid()) {
      return moment(value).format("DD/MM/YYYY");
    }
    return value;
  });
}

function getColumnValues(colId) {
  let values = [];
  gridOptions.api.forEachLeafNode(function (node) {
    if (node.data && node.data[colId] !== undefined) {
      values.push(node.data[colId]);
    } else {
      console.log(`No data found for column ${colId} in node:`, node);
    }
  });
  return values;
}

function getSelectedColumns() {
  const dropdown = document.getElementById("columns-dropdown");
  const selectedOptions = Array.from(dropdown.selectedOptions);

  return selectedOptions.map((option) => {
    return {
      name: option.value,
      values: getColumnValues(option.value),
    };
  });
}

function getMinMaxDatesFromGrid(columnName) {
  const allDates = gridOptions.api.getColumnValues(columnName);
  const validDates = allDates.filter((date) =>
    moment(date, "DD/MM/YYYY").isValid()
  );
  return {
    minDate: moment.min(validDates.map((date) => moment(date, "DD/MM/YYYY"))),
    maxDate: moment.max(validDates.map((date) => moment(date, "DD/MM/YYYY"))),
  };
}

document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.getElementById("columns-dropdown");
  const dateSlider = document.getElementById("dateSlider");
  const dateRangeSpan = document.getElementById("dateRange");

  dropdown.addEventListener("change", function () {
    // Check if the date column is selected
    const isDateColumnSelected = Array.from(dropdown.selectedOptions).some(
      (option) => option.value === "Date"
    );

    // Show/hide the dateSlider and dateRangeSpan based on the presence of the date column
    if (isDateColumnSelected) {
      dateSlider.style.display = "block";
      dateRangeSpan.style.display = "block";
    } else {
      dateSlider.style.display = "none";
      dateRangeSpan.style.display = "none";
      dateRangeSpan.textContent = "Selected Range: "; // Reset text content
    }

    setTimeout(() => {
      const selectedColumns = getSelectedColumns();
      console.log(selectedColumns);

      // Loop over selected columns
      selectedColumns.forEach((column) => {
        // Check if the column contains date values
        console.log(column);
        if (isDateLikeColumn(column.values)) {
          // Get valid dates
          const validDates = column.values.filter((date) =>
            moment(date, "DD/MM/YYYY").isValid()
          );

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
  if (!filterInstance) {
    console.error(`Filter instance for column ${column} not found.`);
    return;
  }

  // Set the filter model for the column

  filterInstance.setModel({
    type: "inRange",
    dateFrom: start.format("YYYY-MM-DD"),
    dateTo: end.format("YYYY-MM-DD"),
  });

  // Inform the grid that a filter has been changed
  gridOptions.api.onFilterChanged();

  // Refresh the grid cells
  gridOptions.api.refreshCells();
}

function getDateRange(dates) {
  if (!dates || dates.length === 0) return null;

  // Convert strings to Date objects
  let parsedDates = dates.map((dateStr) => {
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
  dateColumnData = dateColumnData
    .map((dateStr) => moment(dateStr, "DD/MM/YYYY").toDate())
    .sort((a, b) => a - b)
    .map((date) => moment(date).format("DD/MM/YYYY"));

  const dateRange = getDateRange(dateColumnData);
  const startIndex = dateColumnData.indexOf(
    moment(dateRange.start).format("DD/MM/YYYY")
  );
  const endIndex = dateColumnData.indexOf(
    moment(dateRange.end).format("DD/MM/YYYY")
  );
  const currentLang = getCurrentLanguage();
  const slider = document.getElementById("dateSlider");

  // Check if slider is already initialized
  if (!slider.noUiSlider) {
    noUiSlider.create(slider, {
      start: [startIndex, endIndex], // Use the determined start and end indices
      connect: true,
      range: {
        min: 0,
        max: dateColumnData.length - 1,
      },
    });

    slider.noUiSlider.on("update", function (values, handle) {
      const startDate = dateColumnData[Math.round(values[0])];
      const endDate = dateColumnData[Math.round(values[1])];
      if (currentLang === "en") {
        document.getElementById("dateRange").textContent =
          "Selected Range: " + startDate + " to " + endDate;
      } else if (currentLang === "cy") {
        document.getElementById("dateRange").textContent =
          "Ystod a Ddewiswyd: " + startDate + " o " + endDate;
      }

      // Update the grid based on selected range
      filterGridByDateRange(
        columnName,
        moment(startDate, "DD/MM/YYYY"),
        moment(endDate, "DD/MM/YYYY")
      );
    });
  } else {
    // Update slider range if it's already initialized
    slider.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: dateColumnData.length - 1,
      },
    });
  }
}

function downloadWordTree() {
  const iframe = document.getElementById("hiddenIframe");
  const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
  var searchWord = document.getElementById("search_word").value;
  const scripts = `
        <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
        <script type="text/javascript">
            google.charts.load('current', {packages:['wordtree']});
            google.charts.setOnLoadCallback(drawChart);

            function drawChart() {
                var data = google.visualization.arrayToDataTable(${JSON.stringify(
                  currentWordTreeData
                )});
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
    const blob = new Blob([iframeDoc.documentElement.outerHTML], {
      type: "text/html",
    });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.style.display = "none";
    a.href = url;
    a.download = "wordtree.html";

    document.body.appendChild(a);
    a.click();

    window.URL.revokeObjectURL(url);
  }, 5000); // 5 seconds delay to give the chart enough time to render
}

async function handleCategoryChange() {
  const subCategoryDropdown = document.getElementById("subCategoryDropdown");

  // Clear the current options
  while (subCategoryDropdown.firstChild) {
    subCategoryDropdown.removeChild(subCategoryDropdown.firstChild);
  }

  if (document.getElementById("wordRadio").checked) {
    $("#word-freq-include-all-check").is(":checked")
      ? populateDropdown(unfilteredWordFrequencies)
      : populateDropdown(wordFrequencies);
  } else if (document.getElementById("posTagRadio").checked) {
    const posTags = [
      { value: "NOUN", en: "Nouns", cy: "Enwau" },
      { value: "PROPN", en: "Proper nouns", cy: "Enwau priod" },
      { value: "VERB", en: "Verbs", cy: "Berfau" },
      { value: "ADJ", en: "Adjectives", cy: "Ansoddeiriau" },
      { value: "ADV", en: "Adverbs", cy: "Adferfau" },
      { value: "NUM", en: "Numbers", cy: "Rhifau" },
    ];

    posTags.forEach((tag, i) => {
      // Creates option container
      const option = document.createElement("div");

      // Creates input element
      const input = document.createElement("input");
      input.id = `pos-tags-${i}`;
      input.name = "pos-tags-radio";
      input.value = tag.value;
      input.setAttribute("data-type", "tag");
      input.type = "radio";
      input.classList.add("hidden");

      // Creates label
      const label = document.createElement("label");
      label.htmlFor = `pos-tags-${i}`;
      label.setAttribute("data-lang-en", tag.en);
      label.setAttribute("data-lang-cy", tag.cy);
      label.classList.add("form-check-label", "dropdown-item", "w-100");
      label.style.fontWeight = "bold";
      label.textContent = tag.en;

      option.appendChild(input);
      option.appendChild(label);
      subCategoryDropdown.appendChild(option);

      updateOptionsLanguage();
    });
  } else if (document.getElementById("semanticTagRadio").checked) {
    const semanticTags = semantictags;

    semanticTags.forEach((tag, i) => {
      // Creates option container
      const option = document.createElement("div");

      // Creates input element
      const input = document.createElement("input");
      input.id = `semtags-${i}`;
      input.name = "sem-tags-radio";
      input.value = tag;
      input.setAttribute("data-type", "semtag");
      input.type = "radio";
      input.classList.add("hidden");

      // Creates label
      const label = document.createElement("label");
      label.htmlFor = `semtags-${i}`;
      label.setAttribute("data-lang-en", tag);
      label.setAttribute("data-lang-cy", tag);
      label.classList.add("form-check-label", "dropdown-item", "w-100");
      label.style.fontWeight = "bold";
      label.textContent = tag;

      option.appendChild(input);
      option.appendChild(label);
      subCategoryDropdown.appendChild(option);
    });
    updateOptionsLanguage();
  }
}

//!
function updateOptionsLanguage() {
  const dropdown = document.getElementById("subCategoryDropdown");
  const options = dropdown.childNodes;
  const currentLang = getCurrentLanguage();
  // console.log("Number of options:", options.length); // Debugging step

  for (let option of options) {
    label = option.querySelector("label");
    label.textContent =
      currentLang === "en"
        ? label.getAttribute("data-lang-en")
        : label.getAttribute("data-lang-cy");
  }
}

function fetchAndParseCSV() {
  return fetch("http://ucrel-freetxt-2.lancs.ac.uk/static/keness/Cy_tags.csv")
    .then((response) => response.text())
    .then((csv) => {
      const results = Papa.parse(csv, { header: true });
      return results.data;
    });
}

$(document).ready(function () {
  $("#generateGraph").click(function (event) {
    event.preventDefault(); // This line prevents the form from submitting
    var graphType = $("#graphType").val();
    updateGraph(graphType);
  });
});

function updateGraph(graphType) {
  // 1. Fetch the Data from Collocs Table
  const collocsData = $("#collocsTable").DataTable().rows().data().toArray();
  const loadingElement = document.getElementById("loading");
  loadingElement.style.display = "flex";
  const collocs = collocsData.map((row) => {
    return {
      word: row[0], // Assuming first column is 'Word'
      frequency: row[1], // Assuming second column is 'Frequency'
      MI: row[2], // Assuming third column is 'MI'
      LL: row[3], // Assuming fourth column is 'LL',
    };
  });

  // Fetch the keyword from the dropdown
  const keyword = $("#subCategoryDropdown").val();

  // 2. Structure the Data
  const data = {
    keyword: keyword,
    collocs: collocs,
    graphType: graphType,
  };

  // 3. Send the Data to the Server
  $.ajax({
    url: "/update_graph",
    method: "POST",
    contentType: "application/json",
    data: JSON.stringify(data),
    success: function (response) {
      if (response.status === "success") {
        // Update the 'graphContainer' with the new graph
        $("#graphContainer").html(
          `<iframe src="${response.graphPath}" width="100%" height="750px"></iframe>`
        );
        loadingElement.style.display = "none";
      } else {
        console.error("Failed to update graph", response);
      }
    },
  });
}

function setLanguage(language) {
  // Step 1: Save state
  // Save selected rows
  const selectedNodes = gridApi.getSelectedNodes();
  const selectedData = selectedNodes.map((node) => node.data);

  // Save filters
  const filterModel = gridApi.getFilterModel();

  // Step 2: Update localeText based on the language
  gridOptions.localeText = language === "cy" ? welshTranslations : {};

  // Step 3: Reinitialize the grid
  initializeGrid();
}

function downloadSummary() {
  const summaryText = document.getElementById("summary").innerText;
  const blob = new Blob([summaryText], { type: "text/plain" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "summary.txt";
  a.click();
}

document.addEventListener("DOMContentLoaded", function () {
  const feedbackTab = document.getElementById("feedback-tab");
  const feedbackButton = document.getElementById("feedback-button");
  const feedbackForm = document.getElementById("feedback-form");

  feedbackButton.addEventListener("click", function (event) {
    console.log("Button clicked!");
    const isTabOpen = feedbackTab.style.right === "0px";
    console.log("Is Tab Open:", isTabOpen);

    if (isTabOpen) {
      feedbackTab.style.right = "-800px";
      console.log("Closing Tab");
    } else {
      feedbackTab.style.right = "0px";
      feedbackForm.style.display = "block";
      console.log("Opening Tab");
    }
    event.stopPropagation();
  });

  // Add event listener for form submission
  feedbackForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(this); // Collect form data
    console.log("Submitting Feedback");

    // Log each form field to the console
    for (let pair of formData.entries()) {
      console.log(pair[0] + ": " + pair[1]);
    }

    // Use fetch API to send the data to the server
    fetch("/submitfeedback", {
      method: "POST",
      body: formData,
      credentials: "include",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.headers.get("Content-Type").includes("application/json")) {
          return response.json();
        } else {
          throw new Error("Non-JSON response from server");
        }
      })
      .then((data) => {
        console.log("Success:", data);
        // Optionally, provide feedback to the user or close the feedback tab
        feedbackTab.style.right = "-800px"; // Close the tab
        // Reset the form or show a success message
        feedbackForm.reset();
        document.getElementById("feedback-form").style.display = "none";
        alert(data.message); // Displaying an alert with the response message
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred. Please try again.");
      });
  });
});

function downloadImage() {
  const iframe = document.getElementById("scattertextIframe");
  const iframeContent = iframe.contentWindow || iframe.contentDocument;

  // Ensure the content is completely loaded
  iframe.onload = function () {
    // Access the content of the iframe
    const element = iframeContent.document.body;

    // Use html2canvas to take a screenshot of the iframe's content
    html2canvas(element).then(function (canvas) {
      // Create an image and set its source to the canvas data URL
      const image = new Image();
      image.src = canvas.toDataURL("image/png");

      // Create a link to download the image
      const link = document.createElement("a");
      link.href = image.src;
      link.download = "scatter_plot.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };
}

function downloadWordTreeAsImage() {
  const iframe = document.getElementById("hiddenIframe");
  const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
  const wordTreeElement = iframeDoc.getElementById("wordtree_basic");

  html2canvas(wordTreeElement).then((canvas) => {
    // Create an image from the canvas
    const imgData = canvas.toDataURL("image/png");

    // Create a link element for downloading the image
    const a = document.createElement("a");
    a.href = imgData;
    a.download = "wordtree.png";
    a.click();
  });
}

// Handles the visibility of hamburger menu
document.addEventListener("DOMContentLoaded", function () {
  var menu = document.querySelector(".primary-menu");
  var toggle = document.querySelector(".menu-toggle");

  toggle.addEventListener("click", function () {
    if (menu.style.display === "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }
  });

  // Handles navbar visibility if screen size changes
  const mql = window.matchMedia("screen and (max-width: 600px)");
  mql.addEventListener("change", (mq) => {
    menu.style.display = mq.matches ? "none" : "flex";
  });
});

function updateOptionValues() {
  var baseUrl = window.location.hostname;
  var selectElement = document.querySelector('select[name="cloud_shape"]');

  selectElement.querySelectorAll("option").forEach(function (option) {
    if (baseUrl === "ucrel-freetxt-2.lancs.ac.uk") {
      option.value = "https://ucrel-freetxt-2.lancs.ac.uk/" + option.value;
    } else if (baseUrl === "www.freetxt.app") {
      option.value = "https://www.freetxt.app/" + option.value;
    }
  });
}

window.onload = updateOptionValues;
