function nerd(name) {
    
    $.ajax({
        url         : '/name',            // this string is the flag and string search name for your db service in fileserver.js //
        contentType : 'text/json',
        dataType    : 'json',
        data        : name,
        success     : function(data) {
            var nerd = data[0];
            var nerdInfo = '';
            
            $('#nerd').attr('name',nerd.name).find('h1').text(nerd.name).prepend('<span class="icon-font pad-right">U</span>');
            $('#nerd-pic').html('<img src="http://placehold.it/250x250&text='+nerd.name+'">');
            
            // nerd data list items //
            if (nerd.role) {
                nerdInfo +=
                    '<li>' +
                        '<a href="#"><span class="icon-font pad-right">Q</span>'+nerd.role+'</a>' +
                    '</li>'   
                ;
            }
            
            if (nerd.email) {
                 nerdInfo +=
                    '<li>' +
                        '<a href="mailto:'+nerd.email+'"><span class="icon-font pad-right">@</span>'+nerd.email+'</a>' +
                    '</li>'    
                ;  
            }
            
            $('#nerd-info').html(nerdInfo).listview('refresh');       // refresh the list skin and search component
            
        }
    }); 
    
}