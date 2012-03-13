function addToNerd(nerd,key,value,id) {
    
    $.ajax({
        url         : '/add-to-nerd',            // this string is the flag and string search name for your db service in fileserver.js //
        contentType : 'text/json',
        dataType    : 'json',
        data        : nerd+'&'+key+'&'+value+'&'+id,
        success     : function() {
            
            $.mobile.hidePageLoadingMsg();
            $('#nerd-refresh').trigger('tap'); 
            $('#add-nerd-meta-back').trigger('click'); 
            
        }
    }); 
    
}