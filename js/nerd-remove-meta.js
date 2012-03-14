function removeFromNerd(id, meta) {
    
    $.ajax({
        url         : '/remove-from-nerd',            // this string is the flag and string search name for your db service in fileserver.js //
        contentType : 'text/json',
        dataType    : 'json',
        data        : id+'&'+meta,
        success     : function() {
            
            $.mobile.hidePageLoadingMsg();
            $('#nerd-refresh').trigger('tap'); 
            $('#add-nerd-meta-back').trigger('click'); 
            
        }
    }); 
    
}