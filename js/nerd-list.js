function nerdList() {
    
    $.ajax({
        url         : '/nerd-list',            // this string is the flag for your db service in fileserver.js //
        contentType : 'text/json',
        dataType    : 'json',
        success     : function(nerds) {
            
            // !Animate & inject db results //
            var offset = 0;
            var dataChunk = '';         // better performance to manipulate the dom with 1 call //
                                        // than appending each item at a time //

            console.log(nerds);
            
            for (var i = 0; i < nerds.length; i++) { // style="left:-'+$(window).width()+'px;"
                  var nerd = nerds[i];
                  
                  dataChunk += '<div>' + // style="left:-'+$(window).width()+'px; opacity:0;" 
                                    '<span nerd="'+nerd.name+'" href="#nerd">';
                  if(nerd.image) dataChunk += '<span class="image"><img src="'+nerd.image+'" class="ui-li-icon" /></span>';
                  else dataChunk +=           '<span class="icon-font user-li-placeholder left">U</span>';
                  dataChunk +=                '<h4><span>' +nerd.name+'</span></h4>';
                  if(nerd.role) dataChunk +=  '<h3><span>' +nerd.role+'</span></h3>';
                  dataChunk +=      '</span>';
                  dataChunk += '</div>';
            }
            
            $('#nerd-list').prepend(dataChunk);
            swatchIt();
            
        }
    }); 
    
}