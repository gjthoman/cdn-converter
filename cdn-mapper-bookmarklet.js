function include(filename, onload) {
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.src = filename;
    script.type = 'text/javascript';
    script.onload = script.onreadystatechange = function() {
        if (script.readyState) {
            if (script.readyState === 'complete' || script.readyState === 'loaded') {
                script.onreadystatechange = null;                                                  
                onload();
            }
        } 
        else {
            onload();          
        }
    };
    head.appendChild(script);
}

include('https://code.jquery.com/jquery-2.2.1.min.js', function() {
    $(document).ready(function() {
        console.log('running');
        var urlMatcher = /((http[s]?|ftp)?:?(\/\/)?(a248.e.akamai.net))\/\w\/\d{4}\/\d{5}\/\d\w\/(dramsey.download.akamai.com)\/\d{5}(\/daveramsey.com)?/gm;
        var newCDN = "https://cdn.ramseysolutions.net";
        var numberChanged = 0;

        $.each($('input, textarea'), function(){
          var origContent = $(this).val();
          var newContent = origContent.replace(urlMatcher, newCDN);
          
          $(this).val(newContent);

          if (origContent != newContent) {
            numberChanged ++;
          }
        });
        
        alert(numberChanged + " input(s) altered");
    });
});