class WordTreeGenerator:
    def __init__(self, reviews):
        self.reviews = reviews

    def generate_html(self, search_word, sentences):
        
        sentences = [[s] for s in self.reviews]
        sentences = ''.join(str(sentences))
        html_content = f"""
        <html>
          <head>
            <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
            <script type="text/javascript">
              google.charts.load('current', {{packages:['wordtree']}});
              google.charts.setOnLoadCallback(drawChart);

              function drawChart() {{
                var data = google.visualization.arrayToDataTable(
                  
                   {sentences}
                  
                      
                      
                );

                var options = {{
                  wordtree: {{
                    format: 'implicit',
                    type: 'double',
                    word: "{search_word}",
                    colors: ['red', 'black', 'green']
                  }}
                }};

                var chart = new google.visualization.WordTree(document.getElementById('wordtree_basic'));
                chart.draw(data, options);
              }}
            </script>
          </head>
          <body>
            <div id="wordtree_basic" style="width: 900px; height: 500px;"></div>
          </body>
        </html>
        """
        
        return html_content
