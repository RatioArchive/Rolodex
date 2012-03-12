function addToNerd(nerd,key,value) {
    
    $.ajax({
        url         : '/add-to-nerd',            // this string is the flag and string search name for your db service in fileserver.js //
        contentType : 'text/json',
        dataType    : 'json',
        data        : nerd+'&'+key+'&'+value,
        success     : function() {
            
            $.mobile.hidePageLoadingMsg();
            $('#add-nerd-meta-back').trigger('click'); 
            
        }
    }); 
    
}