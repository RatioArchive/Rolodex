function newNerd(name) {
    
    $.ajax({
        url         : '/new-nerd',            // this string is the flag and string search name for your db service in fileserver.js //
        contentType : 'text/json',
        dataType    : 'json',
        data        : name,
        success     : function() {
            
            $.mobile.hidePageLoadingMsg();
            $('#add-nerd-back').trigger('click'); 
            
        }
    }); 
    
}