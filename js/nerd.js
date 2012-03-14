function nerd(name) {
    
    $.ajax({
        url         : '/name',            // this string is the flag and string search name for your db service in fileserver.js //
        contentType : 'text/json',
        dataType    : 'json',
        data        : name,
        success     : function(data) {
            var nerd = data[0];
            var nerdInfo = '';
            
            $('#nerd').attr({'data-id':nerd._id,'name':nerd.name}).find('h1').text(nerd.name);
            
            if(nerd.image)  $('#nerd-pic').html('<img src="'+nerd.image+'">');
            else            $('#nerd-pic').html('');
            
            // nerd data list items //
            $.each(nerd, function(key, value) {
                
                if(value != "" && value != nerd._id && value != nerd.name && value != nerd.image) {
                    
                    // assemble li element
                    var li = '<li nerd-meta="'+key+'"><a href="';
                    
                    // put in url
                    if      (value == nerd.email) li += 'mailto:'+value+'">';
                    else if (value == nerd.phone) li += 'tel:'+value+'">';
                    else if (value == nerd.linkedin || 
                             value == nerd.twitter || 
                             value == nerd.website || 
                             value == nerd.google || 
                             value == nerd.facebook
                    )       li += ''+value+'">';
                    else    li += '#">';
                    
                    // inject custom icon
                    if (value == nerd.role) li += '<span class="icon-font pad-right">R</span>';
                    if (value == nerd.im) li += '<span class="icon-font pad-right">c</span>';
                    if (value == nerd.email) li += '<span class="icon-font pad-right">@</span>';
                    if (value == nerd.hours) li += '<span class="icon-font pad-right">P</span>';
                    if (value == nerd.linkedin) li += '<span class="icon-font pad-right">l</span>View Profile</a></li>';
                    if (value == nerd.skype) li += '<span class="icon-font pad-right">s</span>';
                    if (value == nerd.twitter) li += '<span class="icon-font pad-right">t</span>View Feed</a></li>';
                    if (value == nerd.website) li += '<span class="icon-font pad-right">K</span>Go to site</a></li>';
                    if (value == nerd.skills) li += '<span class="icon-font pad-right">_</span>';
                    if (value == nerd.phone) li += '<span class="icon-font pad-right">u</span>';
                    if (value == nerd.city) li += '<span class="icon-font pad-right">?</span>';
                    if (value == nerd.school) li += '<span class="icon-font pad-right">Z</span>';
                    if (value == nerd.degree) li += '<span class="icon-font pad-right">z</span>';
                    if (value == nerd.likes) li += '<span class="icon-font pad-right">N</span>';
                    if (value == nerd.movie) li += '<span class="icon-font pad-right">M</span>';
                    if (value == nerd.google) li += '<span class="icon-font pad-right">g</span>View Profile</a></li>';
                    if (value == nerd.facebook) li += '<span class="icon-font pad-right">f</span>View Profile</a></li>';
                    
                    // finish
                    if( value != nerd.website && 
                        value != nerd.linkedin && 
                        value != nerd.twitter &&
                        value != nerd.google &&
                        value != nerd.facebook
                    ) li += value+'</a></li>';
                    
                    nerdInfo += li;
                
                }
            });
            
            $('#nerd-info').html(nerdInfo).listview('refresh');       // refresh the list skin and search component
            $('#nerd').find('.ui-scrollview-view').css('-webkit-transform','matrix(1,0,0,1,0,0)'); // scroll it to top
        }
    }); 
    
}