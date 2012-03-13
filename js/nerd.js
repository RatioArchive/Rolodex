function nerd(name) {
    
    $.ajax({
        url         : '/name',            // this string is the flag and string search name for your db service in fileserver.js //
        contentType : 'text/json',
        dataType    : 'json',
        data        : name,
        success     : function(data) {
            var nerd = data[0];
            var nerdInfo = '';
            
            $('#nerd').attr({'data-id':nerd._id,'name':nerd.name}).find('h1').text(nerd.name).prepend('<span class="icon-font pad-right">U</span>');
            $('#nerd-pic').html('<img src="http://placehold.it/250x250&text='+nerd.name+'">');
            
            // nerd data list items //
            $.each(nerd, function(key, value) {
                
                if(value != nerd._id && value != nerd.name) {
                
                    // assemble li element
                    var li = '<li><a href="';
                    
                    if (value == nerd.email) li += 'mailto:'+value+'"><span class="icon-font pad-right">@</span>';
                    else li += '#">';
                    
                    // inject custom icon
                    if (value == nerd.role) li += '<span class="icon-font pad-right">Q</span>';
                    if (value == nerd.im) li += '<span class="icon-font pad-right">d</span>';
                    if (value == nerd.hours) li += '<span class="icon-font pad-right">P</span>';
                    
                    // finish
                    li += value+'</a></li>';
                    
                    nerdInfo += li;
                
                }
            });
            
            $('#nerd-info').html(nerdInfo).listview('refresh');       // refresh the list skin and search component
            
        }
    }); 
    
}