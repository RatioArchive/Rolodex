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
            
            if(nerd.image)  $('#nerd-pic').css('background-image','url('+nerd.image+')');
            else            $('#nerd-pic').css('background-image','url("http://placehold.it/250x250&text=THIS+IS+WHERE+YOUR+FACE+WILL+BE")');
            
            // nerd data list items //
            $.each(nerd, function(key, value) {
                
                if(value != "" && value != nerd._id && value != nerd.name && value != nerd.image) {
                    
                    // assemble li element
                    var li = '';
                    
                    // put in url
                    if      (value == nerd.email) li += '<li data-icon="false" item-role="link" nerd-meta="'+key+'"><a href="mailto:'+value+'">';
                    else if (value == nerd.phone) li += '<li data-icon="false" item-role="link" nerd-meta="'+key+'"><a href="tel:'+value+'">';
                    else if (value == nerd.linkedin || 
                             value == nerd.twitter || 
                             value == nerd.website || 
                             value == nerd.google || 
                             value == nerd.facebook
                    )       li += '<li data-icon="false" item-role="link" nerd-meta="'+key+'"><a href="'+value+'">';
                    else    li += '<li data-icon="false" nerd-meta="'+key+'"><a href="#">';
                    
                    // inject custom icon (needs better css and js so this isnt no clunky)
                    if (value == nerd.nickname) li += '<span class="icon-font pad-right">T</span>';
                    if (value == nerd.role)     li += '<span class="icon-font pad-right">R</span>';
                    if (value == nerd.email)    li += '<span class="icon-font pad-right">@</span>';
                    if (value == nerd.hours)    li += '<span class="icon-font pad-right">P</span>';
                    if (value == nerd.linkedin) li += '<span class="icon-font pad-right">l</span>View Profile</a></li>';
                    if (value == nerd.skype)    li += '<span class="icon-font pad-right">s</span>';
                    if (value == nerd.twitter)  li += '<span class="icon-font pad-right">t</span>View Feed</a></li>';
                    if (value == nerd.website)  li += '<span class="icon-font pad-right">K</span>Go to site</a></li>';
                    if (value == nerd.skills)   li += '<span class="icon-font pad-right">_</span>';
                    if (value == nerd.phone)    li += '<span class="icon-font pad-right">u</span>';
                    if (value == nerd.city)     li += '<span class="icon-font pad-right">?</span>';
                    if (value == nerd.school)   li += '<span class="icon-font pad-right">Z</span>';
                    if (value == nerd.degree)   li += '<span class="icon-font pad-right">z</span>';
                    if (value == nerd.likes)    li += '<span class="icon-font pad-right">N</span>';
                    if (value == nerd.movie)    li += '<span class="icon-font pad-right">M</span>';
                    if (value == nerd.google)   li += '<span class="icon-font pad-right">g</span>View Profile</a></li>';
                    if (value == nerd.facebook) li += '<span class="icon-font pad-right">f</span>View Profile</a></li>';
                    
                    if( value == nerd.skills ) {
                        var skillList = value.split(',');
                        
                        for (var skill in skillList) {
                            li += '<i>'+skillList[skill]+'</i>';   
                        }
                    }
                    
                    // finish
                    if( value != nerd.website && 
                        value != nerd.linkedin && 
                        value != nerd.twitter &&
                        value != nerd.google &&
                        value != nerd.facebook &&
                        value != nerd.skills
                    ) li += value+'</a></li>';
                    
                    
                    nerdInfo += li;
                
                }
            });
            
            $('#nerd-info').html(nerdInfo).listview('refresh');       // refresh the list skin and search component
            $('#nerd').find('.ui-scrollview-view').css('-webkit-transform','matrix(1,0,0,1,0,0)'); // scroll it to top
        }
    }); 
    
}