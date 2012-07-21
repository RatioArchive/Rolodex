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
            
            for (var i = 0; i < nerds.length; i++) { // style="left:-'+$(window).width()+'px;"
                  var nerd = nerds[i];
                  
                  dataChunk += '<li data-icon="false">' + // style="left:-'+$(window).width()+'px; opacity:0;" 
                                    '<a nerd="'+nerd.name+'" href="#nerd">';
                  if(nerd.image) dataChunk += '<img src="'+nerd.image+'" class="ui-li-icon" />';
                  else dataChunk +=           '<span class="icon-font user-li-placeholder left">U</span>';
                  dataChunk +=                '<h3>' +nerd.name+'</h3>';
                  if(nerd.role) dataChunk +=  '<p>' +nerd.role+'</p>';
                  dataChunk +=      '</a>';
                  dataChunk += '</li>';
            }
            
            $('#nerd-list').html(dataChunk).listview('refresh');
            // .find('li').each(function() {
            //       $(this).transition({ delay: offset, left: '0px', opacity: '1' }, 500, 'snap');
            //       offset += 100;
            // });
            
        }
    }); 
    
}