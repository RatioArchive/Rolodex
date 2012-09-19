function swatchIt() {
        $( '#nerd-list' ).swatchbook( {
            speed       : 500,
            easing      : 'ease-out',
            // index of initial centered item
            center      : 7,
            // number of degrees that is between each item
            angleInc    : 14,
            // amount in degrees for the opened item's next sibling
            proximity   : 40,
            // amount in degrees between the opened item's next siblings
            neighbor    : 2
        } );
    }

// Document Ready Stuffs //
$(document).ready(function() {

    nerdList();

    $('#add-nerd-btn').on('tap', function() {
        $.mobile.showPageLoadingMsg();
        newNerd($('#new-nerd-name').val());
    });
    
    $('#new-nerd-meta-btn').on('tap', function(e) {
        $('#nerd-meta-value').val(''); 
    });
    
    $('#add-to-nerd-btn').on('tap', function() {
        $.mobile.showPageLoadingMsg();
        addToNerd(
            $('#nerd').attr('name'),
            $('#nerd-meta-key').val(), 
            $('#nerd-meta-value').val(),
            $('#nerd').attr('data-id')
        );
    });
    
    $('#remove-from-nerd-btn').on('tap', function() {
        $.mobile.showPageLoadingMsg();
        
        var metaToRemove = '';
        $.each( $('#meta-to-remove-checklist').find('input[type="checkbox"]:checked'), function() {
            metaToRemove += $(this).attr('id') + '&';
        });
        
        metaToRemove = metaToRemove.substring(0,metaToRemove.length-1); // remove hanging & character
        removeFromNerd($('#nerd').attr('data-id'), metaToRemove);
    });
    
    $('#nerd-list').on('click','a', function() {
        nerd($(this).attr('nerd'));
        $('#nerd').find('h1').html('Loading');
        $('#nerd-info').empty();
        $('#nerd-pic').css('background-image','url("http://placehold.it/250x250&text=Loading...")');
    });
    
    $('#nerd-refresh').on('tap', function() {
        nerd($('#nerd').attr('name')); 
    });
    
    $('#remove-meta-btn').on('tap', function() {
        var metahtml = '';
        $.each( $('#nerd-info li'), function() {
            var meta = $(this).attr('nerd-meta');
            metahtml += '<input type="checkbox" name="'+meta+'" id="'+meta+'" /><label for="'+meta+'">'+meta+'</label>';
        });
        $('#meta-to-remove-checklist').html(metahtml).trigger('create');
        $('#meta-to-remove-checklist').controlgroup();
    });
    
    /* $('#nerd-list-refresh').on('tap', function() {
       nerdList(); 
    }); */
    
});