    /*START HANDLE DEEP LINKING*/
  $.fn.stars = function() {
    return $(this).each(function() {
        // Get the value
        var val = parseFloat($(this).html());
        // Make sure that the value is in 0 - 5 range, multiply to get width
        var size = Math.max(0, (Math.min(5, val))) * 16;
        // Create stars holder
        var $span = $('<span />').width(size);
        // Replace the numerical value with stars
        $(this).html($span);
    });
}    
    
    function handleOpenURL(url) {
        
          var strValue = url;
      strValue = strValue.replace('bookworm://','');
       $.mobile.navigate('#'+strValue, { transition: 'slidedown' });
        	
  }
        
         /*END HANDLE DEEP LINKING*/



document.addEventListener("deviceready",onDeviceReady,false);
	  document.addEventListener("pause", onPause, false);
    document.addEventListener("resume", onResume, false);

function onDeviceReady() {
    
    StatusBar.backgroundColorByHexString("#008080");
    window.Segment.startWithConfiguration("dzaIQFW0fydxAaEgbiL1EXXQW4RTK7dG", {
    trackApplicationLifecycleEvents: true,
    trackAttributionInformation: true,
	flushInterval: 60,
    trackInAppPurchases: true
});
		
window.Segment.track({
    event: 'Application Started',
    properties: {
        'path': 'home'
    }
});
    
    
    var configMapObject = {};
configMapObject[KochavaTracker.PARAM_ANDROID_APP_GUID_STRING_KEY] = "kovalidator-android-alh6sx";
KochavaTracker.configure(configMapObject);
    
 facebookConnectPlugin.logEvent('Show Screen', {'name': 'Start Screen'}, parseFloat(1.00), function (data) {}, function (error) {});
        
          /*START CHECK FOR NEW MESSAGES FUNCTION */
    var deviceuuid = localStorage.getItem('deviceuuid');
	if (deviceuuid) {
		
	var dataString="deviceuuid="+deviceuuid;

    $.ajax({
        type: "POST",crossDomain: true, cache: false,
        url: 'https://reedfrog.com/api/app/bookworm/checkalerts.php',
		data: dataString,
		dataType:'JSON',		
        success: function(data){			
			     if(data.count > 0)				
            { 
                var messageCount = data.count;
               cordova.plugins.notification.badge.set(messageCount);  
	            $('.notifications').show();
               $('.notifications').text(messageCount); 
                $('.gotonotifications').attr('href', '#messageitems')		             
            } else {
                
                 var messageCount = "0";
               cordova.plugins.notification.badge.set(messageCount);    
	            $('.notifications').show();
               $('.notifications').text(messageCount); 
                 $('.gotonotifications').attr('href', '#')
            }

		
                  }
    });


		
	}    
    /*END CHECK FOR NEW MESSAGES FUNCTION */ 
document.addEventListener("backbutton", onBackKeyDown, false);


    /*START OBTAIN DEVICE DETAILS AND STORE IN LOCALSTORAGE*/
    var devicemodel = device.model;
    localStorage.setItem('model', devicemodel);		
    var devicecordova = device.cordova;
    var deviceplatform = device.platform;
    localStorage.setItem('platform', deviceplatform);		
    var deviceuuid = device.uuid;
    localStorage.setItem('deviceuuid', deviceuuid);		
    var devicevirtual = device.isVirtual;
    var deviceserial = device.serial;
    localStorage.setItem('deviceserial', deviceserial);		
    var deviceversion = device.version;
    localStorage.setItem('deviceversion',deviceversion);
    
    		cordova.getAppVersion(function (version) {
			   localStorage.setItem('appversion', version);				
			});
    /*END OBTAIN DEVICE DETAILS AND STORE IN LOCALSTORAGE*/
    
    /*START PUSH SERVICES FOR FIREBASE CLOUD MESSAGING*/
    var push = PushNotification.init({


android: {
senderID: "1002324375738",
sound: true,
vibrate: true,
alert: true
	
},
ios: {
alert: "true",
badge: "true",
sound: "true"
},
windows: {}
});


  push.on('registration', function(data) {
       var oldRegId = localStorage.getItem('registrationId');
       if (oldRegId !== data.registrationId) {
           // Save new registration ID
           localStorage.setItem('registrationId', data.registrationId);
               /*START INSERT DEVICE INFO IN THE DATABASE TABLE */
    var devicestatus = localStorage.getItem('registrationId');
if (devicestatus) {
var deviceid = localStorage.getItem('deviceserial');
var regid = localStorage.getItem('registrationId');
var devicemodel = localStorage.getItem('model');
var deviceplatform = localStorage.getItem('platform');
var deviceuuid = localStorage.getItem('deviceuuid');	
var deviceversion = localStorage.getItem('deviceversion');
var appversion = localStorage.getItem('appversion');
var dataString="deviceid="+deviceid+"&regid="+regid+"&devicemodel="+devicemodel+"&deviceplatform="+deviceplatform+"&deviceuuid="+deviceuuid+"&deviceversion="+deviceversion+"&appversion="+appversion;

    $.ajax({
        type: "POST",crossDomain: true, cache: false,
        url: 'https://reedfrog.com/api/app/bookworm/insertregid.php',
        data: dataString,
		dataType:'text',		
        success: function(data){

		
                  }
    });
	 /*END INSERT DEVICE INFO INTO THE DATABASE TABLE*/
}
       }
   });
push.on('notification', function(data) {
      /*START CHECK FOR NEW MESSAGES FUNCTION */
    var deviceuuid = localStorage.getItem('deviceuuid');
	if (deviceuuid) {
		
	var dataString="deviceuuid="+deviceuuid;

    $.ajax({
        type: "POST",crossDomain: true, cache: false,
        url: 'https://reedfrog.com/api/app/bookworm/checkalerts.php',
		data: dataString,
		dataType:'JSON',		
        success: function(data){			
			     if(data.count > 0)				
            { 
                var messageCount = data.count;
               cordova.plugins.notification.badge.set(messageCount);  
	            $('.notifications').show();
               $('.notifications').text(messageCount); 
                $('.gotonotifications').attr('href', '#messageitems')		             
            } else {
                
                 var messageCount = "0";
               cordova.plugins.notification.badge.set(messageCount);    
	            $('.notifications').show();
               $('.notifications').text(messageCount); 
                 $('.gotonotifications').attr('href', '#')
            }

		
                  }
    });


		
	}    
    /*END CHECK FOR NEW MESSAGES FUNCTION */ 
    
});
push.on('error', function(e) {
});
    
/*END PUSH SERVICES FOR FIREBASE CLOUD MESSAGING*/
    
}    

function onPause() {
    
    
            window.Segment.startWithConfiguration("dzaIQFW0fydxAaEgbiL1EXXQW4RTK7dG", {
    trackApplicationLifecycleEvents: true,
    trackAttributionInformation: true,
	flushInterval: 60,
    trackInAppPurchases: true
});
		
window.Segment.track({
    event: 'Application Backgrounded',
    properties: {
        'path': 'home'
    }
});

}

function onResume() {
    
                window.Segment.startWithConfiguration("dzaIQFW0fydxAaEgbiL1EXXQW4RTK7dG", {
    trackApplicationLifecycleEvents: true,
    trackAttributionInformation: true,
	flushInterval: 60,
    trackInAppPurchases: true
});
		
window.Segment.track({
    event: 'Application Brought Forward',
    properties: {
        'path': 'home'
    }
});
    
      /*START CHECK FOR NEW MESSAGES FUNCTION */
    var deviceuuid = localStorage.getItem('deviceuuid');
	if (deviceuuid) {
		
	var dataString="deviceuuid="+deviceuuid;

    $.ajax({
        type: "POST",crossDomain: true, cache: false,
        url: 'https://reedfrog.com/api/app/bookworm/checkalerts.php',
		data: dataString,
		dataType:'JSON',		
        success: function(data){			
			     if(data.count > 0)				
            { 
                var messageCount = data.count;
               cordova.plugins.notification.badge.set(messageCount);  
	            $('.notifications').show();
               $('.notifications').text(messageCount); 
                $('.gotonotifications').attr('href', '#messageitems')		             
            } else {
                
                 var messageCount = "0";
               cordova.plugins.notification.badge.set(messageCount);    
	            $('.notifications').show();
               $('.notifications').text(messageCount); 
                 $('.gotonotifications').attr('href', '#')
            }

		
                  }
    });


		
	}    
    /*END CHECK FOR NEW MESSAGES FUNCTION */ 
    
/*START FIRST RUN EVENT IF THE DEVICE HAS RUN FOR THE FIRST TIME*/
if(window.localStorage.getItem("firstRun") != 1) {
 
window.localStorage.setItem("firstRun", 1);	
}
/*END FIRST RUN EVENT IF THE DEVICE HAS RUN FOR THE FIRST TIME*/
}
                  function onBackKeyDown(e) {
                      e.preventDefault();
                       window.localStorage.removeItem('queryString');
        window.localStorage.removeItem('dataValue');
          var currentPage = window.sessionStorage.getItem('currentPage');
          
          $.mobile.navigate(currentPage, { transition: 'pop' });
          window.sessionStorage.removeItem('currentPage');
                                  $.mobile.loading( "show", {
  text: "Freeing up space",
  textVisible: true,
  theme: "a"
  
});
          location.reload(true);
}  

$(document).ready(function(){  
    
    /*START INSERT DEVICE INFO IN THE DATABASE TABLE */
    var devicestatus = localStorage.getItem('registrationId');
if (devicestatus) {
var deviceid = localStorage.getItem('deviceserial');
var regid = localStorage.getItem('registrationId');
var devicemodel = localStorage.getItem('model');
var deviceplatform = localStorage.getItem('platform');
var deviceuuid = localStorage.getItem('deviceuuid');	
var deviceversion = localStorage.getItem('deviceversion');
var appversion = localStorage.getItem('appversion');
var dataString="deviceid="+deviceid+"&regid="+regid+"&devicemodel="+devicemodel+"&deviceplatform="+deviceplatform+"&deviceuuid="+deviceuuid+"&deviceversion="+deviceversion+"&appversion="+appversion;

    $.ajax({
        type: "POST",crossDomain: true, cache: false,
        url: 'https://reedfrog.com/api/app/bookworm/insertregid.php',
        data: dataString,
		dataType:'text',		
        success: function(data){

		
                  }
    });
	
}
    
    /*END INSERT DEVICE INFO INTO THE DATABASE TABLE*/
    
    
         
    
/*START LIST ITEM CLICK FUNCTION*/
   $(".catselector li").on('click', function(){
       $(this).addClass("ui-btn-active ui-state-persist");
       var value = $(this).data("id");       
       var dataValue = $(this).data("title");
       var currentpos = $(this).data('href');
        window.sessionStorage.setItem('currentPage', currentpos);
       window.localStorage.setItem('queryString', value);
       window.localStorage.setItem('dataValue', dataValue);
                        $.mobile.loading( "show", {
  text: "Fetching " +dataValue,
  textVisible: true,
  theme: "a"
  
});

    var queryString = window.localStorage.getItem('queryString');
     var dataTitle = window.localStorage.getItem('dataValue');
    var itemString ="queryString="+queryString;   
       
    $.ajax({
        type: "POST",crossDomain: true, cache: false,
        url: 'https://reedfrog.com/api/app/bookworm/book-selector.php',
        data: itemString,
		dataType:'JSON',  
         beforeSend: function(){ 
             
         },
		success: function(data){
            $(location).attr('href', '#bookitems');   
				   if(data.results.length > 1) {                    
                    $(".heading").text(dataTitle);
                    $(".mainheading").text(dataTitle);
				    for (var i = 0; i < data.results.length; i++) {	                        
                        
                      var itemName = data.results[i].product_name;
                        var originalprice = parseFloat(data.results[i].original_price).toFixed(2);
                        var itemPrice = parseFloat(data.results[i].current_price).toFixed(2);
                        
                        if(itemPrice<originalprice) {
                            var pricediv = "<p style='color: orangered; text-decoration: line-through; font-size: 14px;'>"+originalprice+"</p>";
                        } else {
                            pricediv = "<p style='display: none; text-decoration: line-through; font-size: 14px;'>"+originalprice+"</p>";
                        }
                        var imageUrl = data.results[i].image_url;
                        var productUrl = data.results[i].product_url;
                      $( "#listviewers" ).append("<li><a href=" + productUrl + " target='_blank'><img src=" +imageUrl+ "><h2>"+itemName+"</h2>"+pricediv+"<p style='color: black; font-size: 14px; font-weight: 500;'>"+itemPrice+"</p></a></li>"); 
                        
                       
                      
                                  
                        
                    }
                       
                                 if(data.navigation.totalItems > 59) {
                    
                     var nextlink = data.navigation.nextPageUri;
                     var prevlink = data.navigation.prevPageUri; 
                    window.sessionStorage.setItem('nextpageUri', nextlink);
                    window.sessionStorage.setItem('prevpageUri', prevlink);
                          $( "#booksbackbutton" ).append('<a id="prevbooksBtn" class="ui-disabled" href="#" data-role="button"  data-icon="arrow-l" data-iconpos="left">Back</a>'); 
                          $( "#booksnextbutton" ).append('<a id="nextbooksBtn"  href="#" data-role="button" data-icon="arrow-r" data-iconpos="right">Next</a>'); 
                                         
       
                      }
            
            if(data.navigation.totalItems) {
                
                       var firstItem = data.navigation.firstItem;
                        var lastItem = data.navigation.lastItem;
                          var totalItems = data.navigation.totalItems;
                       
                   $( "#booksnavbar" ).append("Showing " + firstItem + " to " + lastItem + " of " + totalItems + " " + dataTitle); 
                    
       
                      }
				 
            }
            
             if(!data.results)
            {
				
			  alert('no results returned');
			
               
            }
        }
		
    });
      	

        });
    /*END BOOKS LIST ITEM CLICK FUNCTION*/
    
    //START BOOKS BACK NAVIGATION FROM HERE ONWARDS FUNCTION FOR EASY VISIBILITY
            $('#booksbackbutton').on('click', '#prevbooksBtn', function(event){
                    $.mobile.loading( "show", {
  text: "Loading previous set",
  textVisible: true,
  theme: "a"
  
});    

                       event.preventDefault();
                if ( sessionStorage.reloadAfterBooksNextClick ) {
                sessionStorage.removeItem('reloadAfterBooksNextClick');
                }
        sessionStorage.reloadAfterBooksBackClick = true;
        window.location.reload();
    });
    $( function () {
        if ( sessionStorage.reloadAfterBooksBackClick ) {         
          var value =  window.localStorage.getItem('dataValue');             
        var queryString = window.localStorage.getItem('queryString'); 
        var prevlink = (window.sessionStorage.getItem('prevpageUri')-1);
            $('.banner').addClass('searchbanner');
            $(".heading").text(value);
            $(".mainheading").text(value);
        
     var searchString ="queryString="+queryString+"&page="+prevlink;    
       
    $.ajax({
        type: "POST",crossDomain: true, cache: false,
        url: 'https://reedfrog.com/api/app/bookworm/book-selector.php',
       data: searchString,
		dataType:'JSON',  
      success: function(data){           
             $('#searchlistview').empty();
            $('#navcontrols').empty();
             if(data.results.length > 1) {             
                  for (var i = 0; i < data.results.length; i++) {
                                                
                      var itemName = data.results[i].product_name;
                        var originalprice = parseFloat(data.results[i].original_price).toFixed(2);
                        var itemPrice = parseFloat(data.results[i].current_price).toFixed(2);
                        
                        if(originalprice<itemPrice) {
                            var pricediv = "<p style='color: orangered; text-decoration: line-through; font-size: 14px;'>"+originalprice+"</p>";
                        } else {
                            pricediv = "<p style='display: none; text-decoration: line-through; font-size: 14px;'>"+originalprice+"</p>";
                        }
                        var imageUrl = data.results[i].image_url;
                        var productUrl = data.results[i].product_url;
                                               
                      $( "#listviewers" ).append("<li><a href=" + productUrl + " target='_blank'><img src=" +imageUrl+ "><h2>"+itemName+"</h2>"+pricediv+"<p style='color: black; font-size: 14px; font-weight: 500;'>"+itemPrice+"</p></a></li>"); 
                        $('#listviewers').listview('refresh').trigger('create');           
                    }			 
            }
            
                if(data.navigation.nextPageUri) {
                    
                    
                   var nextlink = data.navigation.nextPageUri;
                     var prevlink = data.navigation.prevPageUri; 
                    var currentPage = data.navigation.catPage;
                   
                    window.sessionStorage.setItem('nextpageUri', nextlink);
                    window.sessionStorage.setItem('prevpageUri', prevlink); 
                    
        $( "#booksbackbutton" ).append('<a id="prevbooksBtn" href="#"  data-role="button" data-icon="arrow-l" data-iconpos="left">Back</a>'); 
        $( "#booksnextbutton" ).append('<a id="nextbooksBtn" href="#" data-role="button" data-icon="arrow-r" data-iconpos="right">Next</a>');                 
        $('#booksbackbutton').trigger('create');
        $('#booksnextbutton').trigger('create');
        if (currentPage === 0) { $('#prevbooksBtn').prop('disabled', true);$('#prevbooksBtn').addClass("ui-disabled");}                    
                      }            
            
              if(data.navigation.totalItems) {                
                       var firstItem = data.navigation.firstItem;
                        var lastItem = data.navigation.lastItem;
                          var totalItems = data.navigation.totalItems;
                       
                   $( "#booksnavbar" ).append("Showing " + firstItem + " to " + lastItem + " of " + totalItems + " " + value); 
                    
       
                      }
            
                       
             if(!data.results)
            {
				
			  alert('no results returned');
			
               
            }
        }
		
    });
     sessionStorage.reloadAfterBooksBackClick = false;
      }
    } 
);
  
     
                     //END BOOKS BACK NAVIGATION 
    
       //START BOOKS LIST NEXT NAVIGATION FROM HERE ONWARDS  FUNCTION FOR EASY VISIBILITY
          $('#booksnextbutton').on('click', '#nextbooksBtn', function(event){ 
                  $.mobile.loading( "show", {
                  text: "Loading next set",
                  textVisible: true,
                  theme: "a"
                  }); 
                       event.preventDefault();
                if ( sessionStorage.reloadAfterBooksBackClick ) {
                sessionStorage.removeItem('reloadAfterBooksBackClick');
                    
                }
                sessionStorage.reloadAfterBooksNextClick = true;
                window.location.reload();
            
    } 
);
    $( function () {
        if ( sessionStorage.reloadAfterBooksNextClick ) {            
        var value =  window.localStorage.getItem('dataValue');             
        var queryString = window.localStorage.getItem('queryString');                        
        var nextlink = window.sessionStorage.getItem('nextpageUri');        
                    $('.banner').addClass('searchbanner');
                    $(".heading").text(value);
                    $(".mainheading").text(value);
       var searchString ="queryString="+queryString+"&page="+nextlink;       
    $.ajax({        
        type: "POST",crossDomain: true, cache: false,
                 beforeSend: function(){
    $('.ajax-loader').css("visibility", "visible");
  },
        url: 'https://reedfrog.com/api/app/bookworm/book-selector.php',
        data: searchString,
		dataType:'JSON',  
     		success: function(data){           
             $('#searchlistview').empty();
            $('#navcontrols').empty();
             if(data.results.length > 1) {                          
				    for (var i = 0; i < data.results.length; i++) {                                   
                      var itemName = data.results[i].product_name;
                        var originalprice = parseFloat(data.results[i].original_price).toFixed(2);
                        var itemPrice = parseFloat(data.results[i].current_price).toFixed(2);
                        
                        if(originalprice<itemPrice) {
                            var pricediv = "<p style='color: orangered; text-decoration: line-through; font-size: 14px;'>"+originalprice+"</p>";
                        } else {
                            pricediv = "<p style='display: none; text-decoration: line-through; font-size: 14px;'>"+originalprice+"</p>";
                        }
                        var imageUrl = data.results[i].image_url;
                        var productUrl = data.results[i].product_url;
                                               
                      $( "#listviewers" ).append("<li><a href=" + productUrl + " target='_blank'><img src=" +imageUrl+ "><h2>"+itemName+"</h2>"+pricediv+"<p style='color: black; font-size: 14px; font-weight: 500;'>"+itemPrice+"</p></a></li>"); 
                        $('#listviewers').listview('refresh').trigger('create');                             
                        
                    }
				 
            }
            
                if(data.navigation.nextPageUri) {
                    
                   var nextlink = data.navigation.nextPageUri;
                     var prevlink = data.navigation.prevPageUri; 
                    var currentPage = data.navigation.catPage;
                    var totalPages = data.navigation.totalPages;
                    window.sessionStorage.setItem('nextpageUri', nextlink);
                    window.sessionStorage.setItem('prevpageUri', prevlink);    
                  $( "#booksbackbutton" ).append('<a id="prevbooksBtn" href="#"  data-role="button" data-icon="arrow-l" data-iconpos="left">Back</a>'); 
                  $( "#booksnextbutton" ).append('<a id="nextbooksBtn" href="#" data-role="button" data-icon="arrow-r" data-iconpos="right">Next</a>');                 
                    $('#booksbackbutton').trigger('create');
                    $('#booksnextbutton').trigger('create');
       if (currentPage === totalPages){$('#nextbooksBtn').prop('disabled', true);$('#nextbooksBtn').addClass("ui-disabled");}
                      }
            
              if(data.navigation.totalItems) {
                
                       var firstItem = data.navigation.firstItem;
                        var lastItem = data.navigation.lastItem;
                          var totalItems = data.navigation.totalItems;
                       
                   $( "#booksnavbar" ).append("Showing " + firstItem + " to " + lastItem + " of " + totalItems + " " + value); 
                    
       
                      }
            
                       
             if(!data.results)
            {
				
			  alert('no results returned');
			
               
            }
        }
		
    });
     sessionStorage.reloadAfterBooksNextClick = false;
      }
    } 
);
  
     
                     //END BOOKS NEXT NAVIGATION FUNCTION
    
    
    
    
    /*START MESSAGES LIST ITEM CLICK FUNCTION*/
    $('#messagelistviewer').on('click', 'li', function(){
       $(this).addClass("ui-btn-active ui-state-persist");
         var value = $(this).data("id");       
        var currentpos = $(this).data('href');
      window.sessionStorage.setItem('currentPage', currentpos);
      $.mobile.loading( "show", {
  text: "Fetching Message",
  textVisible: true,
  theme: "a"
  
});
    var messageString ="messageid="+value;   
       
    $.ajax({
        type: "POST",crossDomain: true, cache: false,
        url: 'https://reedfrog.com/api/app/bookworm/getmessage.php',
        data: messageString,
		dataType:'JSON',  
         beforeSend: function(){ 
             
         },
		success: function(data){
            $(location).attr('href', '#messagereader');   
				   if(data.results.length > 0) {                    
                  for (var i = 0; i < data.results.length; i++) {	                        
                        
                      var messageTitle = data.results[i].title;
                        var messageSubject = data.results[i].message;
                        var messageBody = data.results[i].inappmessage;
                       
                      $( "#messagetitle" ).text(messageTitle); 
                      $( "#messagesubtitle" ).text(messageSubject);   
                      $( "#messagebody" ).html(messageBody);                     
                    }
				 
            }
            
             if(!data.results)
            {
				
			  			
               
            }
        }
		
    });
      	

        });
    /*END MESSAAGES LIST ITEM CLICK FUNCTION*/
    
    
    
    //START SEARCH BUTTON CLICK EVENT
      $("#searchbtn").on('click', function(event){
          event.preventDefault();
          
       $(this).addClass("ui-btn-active ui-state-persist");
          var onlyDiscounts = "";
          if ($('#showdiscounts').is(":checked"))
{
    
onlyDiscounts = $('#showdiscounts').val();
sessionStorage.setItem('showdiscounts', onlyDiscounts);
}
          
          


       var value = $('#searchitems').val();   
                 if ($('#searchitems').val() == '') {
              $('.seatchbooksbytitle').empty();
              $('.seatchbooksbytitle').append('Provide a search string');
              $('.seatchbooksbytitle').addClass('searchvalidate');              
              return false;
    }
          var currentpos = $(this).data('href');
        window.sessionStorage.setItem('currentPage', currentpos);
       window.sessionStorage.setItem('searchString', value);
          

          $('.form-controls').hide();
                        $.mobile.loading( "show", {
  text: "Finding " +value,
  textVisible: true,
  theme: "a"
  
});

      var searchString ="searchString="+value+"&discounts="+onlyDiscounts;   
       
    $.ajax({
        type: "GET",crossDomain: true, cache: false,
        url: 'https://reedfrog.com/api/app/bookworm/search-function.php',
        data: searchString,
		dataType:'JSON',  
         beforeSend: function(){ 
             
         },
		success: function(data){
            var newvalue = sessionStorage.getItem('searchString');
             $(location).attr('href', '#searchlistitems');
            $('.banner').addClass('searchbanner');
             $(".heading").text(newvalue);
            $(".mainheading").text(newvalue);
              if(data.results.length > 0) {                    
                   
                      for (var i = 0; i < data.results.length; i++) {	                        
                        
                      var itemName = data.results[i].product_name;
                        var originalprice = parseFloat(data.results[i].original_price).toFixed(2);
                        var itemPrice = parseFloat(data.results[i].current_price).toFixed(2);
                        
                        if(itemPrice<originalprice) {
                            var pricediv = "<p style='color: orangered; text-decoration: line-through; font-size: 14px;'>"+originalprice+"</p>";
                        } else {
                            pricediv = "<p style='display: none; text-decoration: line-through; font-size: 14px;'>"+originalprice+"</p>";
                        }
                        var imageUrl = data.results[i].image_url;
                        var productUrl = data.results[i].product_url;
                                               
                      $( "#searchlistview" ).append("<li><a href=" + productUrl + " target='_blank'><img src=" +imageUrl+ "><h2>"+itemName+"</h2>"+pricediv+"<p style='color: black; font-size: 14px; font-weight: 500;'>"+itemPrice+"</p></a></li>");
                        
                          
                    
                                                        
                        
                    }
                  
                  if(data.navigation.totalItems > 59) {
                    
                     var nextlink = data.navigation.nextPageUri;
                     var prevlink = data.navigation.prevPageUri; 
                    window.sessionStorage.setItem('nextpageUri', nextlink);
                    window.sessionStorage.setItem('prevpageUri', prevlink);
                          $( "#backbutton" ).append('<a id="prevBtn" href="#" class="ui-disabled" data-role="button"  data-icon="arrow-l" data-iconpos="left">Back</a>'); 
                          $( "#nextbutton" ).append('<a id="nextBtn" href="#" data-role="button" data-icon="arrow-r" data-iconpos="right">Next</a>'); 
                          $('#prevBtn').prop('disabled', true);                 
       
                      }
            
            if(data.navigation.totalItems) {
                
                       var firstItem = data.navigation.firstItem;
                        var lastItem = data.navigation.lastItem;
                          var totalItems = data.navigation.totalItems;
                       
                   $( "#navibar" ).append("Showing " + firstItem + " to " + lastItem + " of " + totalItems + " for " + newvalue); 
                    
       
                      }
   
				 
            }   
            
             if(data.results == 0)
            {
            var value = $('#searchitems').val(); 
                $(".heading").text(value);
                    $(".mainheading").text(value);
             $( "#searchlistview" ).append('<li id="no-results" style="margin:auto; text-align: center;">[No results found for '+value+']</li>');
                                
               
            }
            
                
            
                }
		
    });
      	
 
        });
    
   //END SEARCH BUTTON CLICK EVENT
    
     //START NEXT NAVIGATION FROM HERE ONWARDS  FUNCTION FOR EASY VISIBILITY
          $('#nextbutton').on('click', '#nextBtn', function(event){ 
                  $.mobile.loading( "show", {
                  text: "Loading next set",
                  textVisible: true,
                  theme: "a"
                  }); 
                       event.preventDefault();
                if ( sessionStorage.reloadAfterBackClick ) {
                sessionStorage.removeItem('reloadAfterBackClick');
                    
                }
                sessionStorage.reloadAfterNextClick = true;
                window.location.reload();
            
    } 
);
    $( function () {
        if ( sessionStorage.reloadAfterNextClick ) {            
        var value =  window.sessionStorage.getItem('searchString'); 
                      var onlyDiscounts = "";
          if (sessionStorage.getItem('showdiscounts'))
{
    
onlyDiscounts = sessionStorage.getItem('showdiscounts');

}
        var nextlink = window.sessionStorage.getItem('nextpageUri');        
                    $('.banner').addClass('searchbanner');
                    $(".heading").text(value);
                    $(".mainheading").text(value);
       var searchString ="searchString="+value+"&page="+nextlink+"&discounts="+onlyDiscounts;       
    $.ajax({        
        type: "GET",crossDomain: true, cache: false,
                 beforeSend: function(){
    $('.ajax-loader').css("visibility", "visible");
  },
        url: 'https://reedfrog.com/api/app/bookworm/search-function.php',
        data: searchString,
		dataType:'JSON',  
     		success: function(data){
           
             $('#searchlistview').empty();
            $('#navcontrols').empty();
             if(data.results.length > 1) {                          
				    for (var i = 0; i < data.results.length; i++) {                                   
                      var itemName = data.results[i].product_name;
                        var originalprice = parseFloat(data.results[i].original_price).toFixed(2);
                        var itemPrice = parseFloat(data.results[i].current_price).toFixed(2);
                        
                        if(originalprice<itemPrice) {
                            var pricediv = "<p style='color: orangered; text-decoration: line-through; font-size: 14px;'>"+originalprice+"</p>";
                        } else {
                            pricediv = "<p style='display: none; text-decoration: line-through; font-size: 14px;'>"+originalprice+"</p>";
                        }
                        var imageUrl = data.results[i].image_url;
                        var productUrl = data.results[i].product_url;
                                               
                      $( "#searchlistview" ).append("<li><a href=" + productUrl + " target='_blank'><img src=" +imageUrl+ "><h2>"+itemName+"</h2>"+pricediv+"<p style='color: black; font-size: 14px; font-weight: 500;'>"+itemPrice+"</p></a></li>"); 
                        $('#searchlistview').listview('refresh').trigger('create');
                  
                    
                                  
                        
                    }
				 
            }
            
                if(data.navigation.nextPageUri) {
                    
                   var nextlink = data.navigation.nextPageUri;
                     var prevlink = data.navigation.prevPageUri; 
                    var currentPage = data.navigation.catPage;
                    var totalPages = data.navigation.totalPages;
                    window.sessionStorage.setItem('nextpageUri', nextlink);
                    window.sessionStorage.setItem('prevpageUri', prevlink);    
                          $( "#backbutton" ).append('<a id="prevBtn" href="#" data-role="button" data-icon="arrow-l" data-iconpos="left">Back</a>'); 
                          $( "#nextbutton" ).append('<a id="nextBtn" href="#" data-role="button" data-icon="arrow-r" data-iconpos="right">Next</a>'); 
                    $('#backbutton').trigger('create');
                    $('#nextbutton').trigger('create');
       if (currentPage === totalPages){$('#nextBtn').prop('disabled', true);$('#nextBtn').addClass("ui-disabled");}
                      }
            
              if(data.navigation.totalItems) {
                
                       var firstItem = data.navigation.firstItem;
                        var lastItem = data.navigation.lastItem;
                          var totalItems = data.navigation.totalItems;
                       
                   $( "#navibar" ).append("Showing " + firstItem + " to " + lastItem + " of " + totalItems + " for " + value); 
                    
       
                      }
            
                       
             if(!data.results)
            {
				
			  alert('no results returned');
			
               
            }
        }
		
    });
     sessionStorage.reloadAfterNextClick = false;
      }
    } 
);
  
     
                     //END NEXT NAVIGATION 
    
    //START BACK NAVIGATION FROM HERE ONWARDS  FUNCTION FOR EASY VISIBILITY
            $('#backbutton').on('click', '#prevBtn', function(event){
                    $.mobile.loading( "show", {
  text: "Loading previous set",
  textVisible: true,
  theme: "a"
  
});    

                       event.preventDefault();
                if ( sessionStorage.reloadAfterNextClick ) {
                sessionStorage.removeItem('reloadAfterNextClick');
                }
                        sessionStorage.reloadAfterBackClick = true;
        window.location.reload();
    });
    $( function () {
        if ( sessionStorage.reloadAfterBackClick ) {         
        var value =  window.sessionStorage.getItem('searchString'); 
                                  var onlyDiscounts = "";
          if (sessionStorage.getItem('showdiscounts'))
{
    
onlyDiscounts = sessionStorage.getItem('showdiscounts');

}
        var prevlink = (window.sessionStorage.getItem('prevpageUri')-1);
            $('.banner').addClass('searchbanner');
             $(".heading").text(value);
        $(".mainheading").text(value);
        
var searchString ="searchString="+value+"&page="+prevlink+"&discounts="+onlyDiscounts;   
       
    $.ajax({
        type: "GET",crossDomain: true, cache: false,
        url: 'https://reedfrog.com/api/app/bookworm/search-function.php',
        data: searchString,
		dataType:'JSON',  
      success: function(data){           
             $('#searchlistview').empty();
            $('#navcontrols').empty();
             if(data.results.length > 1) {             
                  for (var i = 0; i < data.results.length; i++) {
                                                
                      var itemName = data.results[i].product_name;
                        var originalprice = parseFloat(data.results[i].original_price).toFixed(2);
                        var itemPrice = parseFloat(data.results[i].current_price).toFixed(2);
                        
                        if(originalprice<itemPrice) {
                            var pricediv = "<p style='color: orangered; text-decoration: line-through; font-size: 14px;'>"+originalprice+"</p>";
                        } else {
                            pricediv = "<p style='display: none; text-decoration: line-through; font-size: 14px;'>"+originalprice+"</p>";
                        }
                        var imageUrl = data.results[i].image_url;
                        var productUrl = data.results[i].product_url;
                                               
                      $( "#searchlistview" ).append("<li><a href=" + productUrl + " target='_blank'><img src=" +imageUrl+ "><h2>"+itemName+"</h2>"+pricediv+"<p style='color: black; font-size: 14px; font-weight: 500;'>"+itemPrice+"</p></a></li>"); 
                        $('#searchlistview').listview('refresh').trigger('create');         
                    }			 
            }
            
                if(data.navigation.nextPageUri) {
                    
                    
                   var nextlink = data.navigation.nextPageUri;
                     var prevlink = data.navigation.prevPageUri; 
                    var currentPage = data.navigation.catPage;
                   
                    window.sessionStorage.setItem('nextpageUri', nextlink);
                    window.sessionStorage.setItem('prevpageUri', prevlink); 
                    
                                 $( "#backbutton" ).append('<a id="prevBtn" href="#" data-role="button" data-icon="arrow-l" data-iconpos="left">Back</a>'); 
                          $( "#nextbutton" ).append('<a id="nextBtn" href="#" data-role="button" data-icon="arrow-r" data-iconpos="right">Next</a>'); 
                    $('#backbutton').trigger('create');
                    $('#nextbutton').trigger('create');
        if (currentPage === 0) { $('#prevBtn').prop('disabled', true);$('#prevBtn').addClass("ui-disabled");}
                    
                      }
            
            
              if(data.navigation.totalItems) {
                
                       var firstItem = data.navigation.firstItem;
                        var lastItem = data.navigation.lastItem;
                          var totalItems = data.navigation.totalItems;
                       
                   $( "#navibar" ).append("Showing " + firstItem + " to " + lastItem + " of " + totalItems + " for " + value); 
                    
       
                      }
            
                       
             if(!data.results)
            {
				
			  alert('no results returned');
			
               
            }
        }
		
    });
     sessionStorage.reloadAfterBackClick = false;
      }
    } 
);
  
     
                     //END NAVIGATION 
    
     
    
    
    
     //START SEARCH BOOK TITLE BUTTON CLICK EVENT
      $(".searchBookTitles").on('click', function(event){
          event.preventDefault();
          
       $(this).addClass("ui-btn-active ui-state-persist");
   var value = $('#searchbooktitle').val();  
          if ($('#searchbooktitle').val() == '') {
              $('.searchbooktitle').empty();
              $('.searchbooktitle').append('Type a title');
              $('.secrimearchbooktitle').addClass('searchvalidate');              
              return false;
    }
          var currentpos = $(this).data('href');
        window.sessionStorage.setItem('currentPage', currentpos);
       window.sessionStorage.setItem('searchString', value);
          
          $('.form-controls').hide();
                        $.mobile.loading( "show", {
  text: "Finding " +value,
  textVisible: true,
  theme: "a"
  
});

             
    $.ajax({
        type: "GET",crossDomain: true, cache: false,
        url: 'https://www.googleapis.com/books/v1/volumes?q=intitle:'+value+'&maxResults=40&key=AIzaSyAMFZg-K5UDcU5IFrn1KTLQl2g7QRFl5UQ',
        dataType:'JSON',  
         beforeSend: function(){ 
             
         },
		success: function(data){
            var newvalue = sessionStorage.getItem('searchString');
             $(location).attr('href', '#booklistitems');
            $('.banner').addClass('searchbanner');
             $(".heading").text(newvalue);
            $(".mainheading").text(newvalue);
              if(data.totalItems > 1) {                    
                   
                      for (var i = 0; i < data.items.length; i++) {	                        
                        
                var itemName = data.items[i].volumeInfo.title;
                          
                          var imageUrl = "img/no-image.png";
                          if (data.items[i].volumeInfo.imageLinks !== undefined) {
                var imageUrl = data.items[i].volumeInfo.imageLinks.thumbnail;
                          }
                  var productUrl = data.items[i].volumeInfo.infoLink;
                          var averageRating = data.items[i].volumeInfo.averageRating;
                          var publishedDate = data.items[i].volumeInfo.publishedDate;
                          var auThor = "Unknown Ahthor";
                          if (data.items[i].volumeInfo.authors !== undefined) {
                          var auThor = data.items[i].volumeInfo.authors[0];     
                          }
                        var itemPrice = "NOT FOR SALE";
                          var currencyCode = " ";
                          if (data.items[i].saleInfo.listPrice !== undefined) {
                   var itemPrice = parseFloat(data.items[i].saleInfo.listPrice.amount).toFixed(2);
                              var currencyCode = data.items[i].saleInfo.listPrice.currencyCode;
                          }
                          
                      $( "#booklistview" ).append("<li><a href=" + productUrl + " target='_blank'><img src=" +imageUrl+ "><h2>"+itemName+"</h2><p style='color: black; font-size: 14px; font-weight: 500;'>"+currencyCode + ""+ " " + "" + itemPrice + "</p><p>Publishded: "+publishedDate+" </p><p>Author: "+auThor+" </p><p><span class='stars'>"+averageRating+"</span></p></a></li>");
                        
                          

                        
                    }
                  
            
            
          
				 
            }   
            
             if(data.totalItems == 0)
            {
            var value = $('#searchbooktitle').val(); 
                $(".heading").text(value);
                    $(".mainheading").text(value);
             $( "#booklistview" ).append('<li id="no-results" style="margin:auto; text-align: center;">[No results found for '+value+']</li>');
                                
               
            }
            
                
            
                }
		
    });
      	
 
        });
    
   //END BOOK TITLE SEARCH BUTTON CLICK EVENT
    
     //START SEARCH BOOK AUTHOR BUTTON CLICK EVENT
      $(".searchBookAuthors").on('click', function(event){
          event.preventDefault();
          
       $(this).addClass("ui-btn-active ui-state-persist");
   var value = $('#searchbookAuthor').val();  
        if ($('#searchbookAuthor').val() == '') {
              $('.searchbookAuthor').empty();
              $('.searchbookAuthor').append('Type an Author name');
              $('.searchbookAuthor').addClass('searchvalidate');              
              return false;
    }
          var currentpos = $(this).data('href');
        window.sessionStorage.setItem('currentPage', currentpos);
       window.sessionStorage.setItem('searchString', value);
          
          $('.form-controls').hide();
                        $.mobile.loading( "show", {
  text: "Finding " +value,
  textVisible: true,
  theme: "a"
  
});

             
    $.ajax({
        type: "GET",crossDomain: true, cache: false,
        url: 'https://www.googleapis.com/books/v1/volumes?q=inauthor:'+value+'&maxResults=40& key=AIzaSyAMFZg-K5UDcU5IFrn1KTLQl2g7QRFl5UQ',
        dataType:'JSON',  
         beforeSend: function(){ 
             
         },
		success: function(data){
            var newvalue = sessionStorage.getItem('searchString');
             $(location).attr('href', '#booklistitems');
            $('.banner').addClass('searchbanner');
             $(".heading").text(newvalue);
            $(".mainheading").text(newvalue);
              if(data.totalItems > 1) {                    
                   
                      for (var i = 0; i < data.items.length; i++) {	                        
                        
                var itemName = data.items[i].volumeInfo.title;
                      var imageUrl = "img/no-image.png";
                          if (data.items[i].volumeInfo.imageLinks !== undefined) {
                var imageUrl = data.items[i].volumeInfo.imageLinks.thumbnail;
                          }
                  var productUrl = data.items[i].volumeInfo.infoLink;
                          var averageRating = data.items[i].volumeInfo.averageRating;
                          var publishedDate = data.items[i].volumeInfo.publishedDate;
                           var auThor = "Unknown Ahthor";
                          if (data.items[i].volumeInfo.authors !== undefined) {
                          var auThor = data.items[i].volumeInfo.authors[0];     
                          }                   
                        var itemPrice = "NOT FOR SALE";
                           var currencyCode = " ";
                          if (data.items[i].saleInfo.listPrice !== undefined) {
                   var itemPrice = parseFloat(data.items[i].saleInfo.listPrice.amount).toFixed(2);
                var currencyCode = data.items[i].saleInfo.listPrice.currencyCode;
                          }
                          
                      $( "#booklistview" ).append("<li><a href=" + productUrl + " target='_blank'><img src=" +imageUrl+ "><h2>"+itemName+"</h2><p style='color: black; font-size: 14px; font-weight: 500;'>"+currencyCode + ""+ " " + "" + itemPrice + "</p><p>Publishded: "+publishedDate+" </p><p>Author: "+auThor+" </p><p><span class='stars'>"+averageRating+"</span></p></a></li>");
                        
                          

                        
                    }
                  
            
            
          
				 
            }   
            
             if(data.totalItems == 0)
            {
            var value = $('#searchbookAuthor').val(); 
                $(".heading").text(value);
                    $(".mainheading").text(value);
             $( "#booklistview" ).append('<li id="no-results" style="margin:auto; text-align: center;">[No results found for '+value+']</li>');
                                
               
            }
            
                
            
                }
		
    });
      	
 
        });
    
   //END BOOK AUTHOR SEARCH BUTTON CLICK EVENT
    
    
                       
     
    
    $("#scrollup").on('click', function() { 
                  
   $('html, body').stop().animate({ scrollTop : 0 }, 400);
     });
        $("#scrolldown").on('click', function() { 
                  
     $('html, body').animate({scrollTop: '+=360px'}, 800);
        $(this).removeClass('ui-btn-active');
     });
    
      $("#booksup").on('click', function() { 
                  
   $('html, body').stop().animate({ scrollTop : 0 }, 400);
     });
        $("#booksdown").on('click', function() { 
                  
     $('html, body').animate({scrollTop: '+=360px'}, 800);
        $(this).removeClass('ui-btn-active');
     });
    
    
    
    
        $("#upscroll").on('click', function() { 
                  
   $('html, body').stop().animate({ scrollTop : 0 }, 400);
     });
        $("#downscroll").on('click', function() { 
                  
     $('html, body').animate({scrollTop: '+=360px'}, 800);
        $(this).removeClass('ui-btn-active');
     });
    

    
 
    
$("#bookscollapse").bind("expand", function () {
    var listHeight = $('#bookscollapse li').length;
    var scrollHeight = (listHeight * 80);
        $('html, body').animate({scrollTop: '+='+scrollHeight+'px'}, 800);
       });   
       
    
    
    $("#youngadultcollection").bind("expand", function () {
    var listHeight = $('#youngadultcollection li').length;
    var scrollHeight = (listHeight * 80);
        $('html, body').animate({scrollTop: '+='+scrollHeight+'px'}, 800);
       });  
    
    $(".advsearch").bind("click", function () {
 var currentPage = $(this).data('href');
        sessionStorage.setItem('currentPage', currentPage);
       });  
 
 });
       

$(document).delegate('#bookitems', 'pageshow', function (){
    $('.banner').addClass('searchbanner');
        var typingTimer;                //timer identifier
var doneTypingInterval = 1000;  //time in ms, 5 second for example
var $input = $(this).find('input[data-type="search"]');

//on keyup, start the countdown
$input.on('keyup', function () {
  clearTimeout(typingTimer);
  typingTimer = setTimeout(doneTyping, doneTypingInterval);
});

//on keydown, clear the countdown 
$input.on('keydown', function () {
  clearTimeout(typingTimer);
});

//user is "finished typing," do something
function doneTyping () {
 document.activeElement.blur();
 }
        var $listview = $(this).find('[data-role="listview"]');
$listview.append('<li id="no-results" style="display:none; margin:auto; text-align: center;">[No results found]</li>');
$listview.listview('refresh');
$(this).delegate('input[data-type="search"]', 'keyup', function() {
    if ($listview.children(':visible').not('#no-results').length === 0) {
        $('#no-results').fadeIn(500);
        
    } else {
        
        $('#no-results').fadeOut(250);
         
        
    }
});
      $(document).on('click', '.backbtn', function(){ 
                window.localStorage.removeItem('queryString');
        window.localStorage.removeItem('dataValue');
          var currentPage = window.sessionStorage.getItem('currentPage');
          
          $.mobile.navigate(currentPage, { transition: 'pop' });
          window.localStorage.clear();
          window.sessionStorage.clear();
       $.mobile.loading( "show", {
  text: "Freeing up space",
  textVisible: true,
  theme: "a"
  
});
          location.reload(true);
          
          
});  
}); 





$(document).delegate('#search', 'pageshow', function (){
    
    var typingTimer;                //timer identifier
var doneTypingInterval = 1000;  //time in ms, 5 second for example
var $input = $('#searchitems');

//on keyup, start the countdown
$input.on('keyup', function () {
  clearTimeout(typingTimer);
  typingTimer = setTimeout(doneTyping, doneTypingInterval);
});

//on keydown, clear the countdown 
$input.on('keydown', function () {
  clearTimeout(typingTimer);
});

//user is "finished typing," do something
function doneTyping () {
 document.activeElement.blur();
 }
    
    }); 


$(document).delegate('#advsearch', 'pageshow', function (){
    
    var typingTimer;                //timer identifier
var doneTypingInterval = 1000;  //time in ms, 5 second for example
var $input = $('#searchbooktitle');
var $secondinput = $('#searchbookAuthor');

//on keyup, start the countdown
$input.on('keyup', function () {
  clearTimeout(typingTimer);
  typingTimer = setTimeout(doneTyping, doneTypingInterval);
});
    $secondinput.on('keyup', function () {
  clearTimeout(typingTimer);
  typingTimer = setTimeout(doneTyping, doneTypingInterval);
});

//on keydown, clear the countdown 
$input.on('keydown', function () {
  clearTimeout(typingTimer);
});
    $secondinput.on('keydown', function () {
  clearTimeout(typingTimer);
});

//user is "finished typing," do something
function doneTyping () {
 document.activeElement.blur();
 }
    
          $(document).on('click', '.backbtn', function(){
          
                    window.sessionStorage.removeItem('searchString');
                       var currentPage = window.sessionStorage.getItem('currentPage');          
          $.mobile.navigate(currentPage, { transition: 'slidedown' });
          window.sessionStorage.removeItem('currentPage');
                                  $.mobile.loading( "show", {
  text: "Freeing up space",
  textVisible: true,
  theme: "a"
  
});
          location.reload(true);
          
          
});  
    
    }); 
$(document).delegate('#searchlistitems', 'pageshow', function (){
    
    
    var typingTimer;                //timer identifier
var doneTypingInterval = 1000;  //time in ms, 5 second for example
var $input = $(this).find('input[data-type="search"]');

//on keyup, start the countdown
$input.on('keyup', function () {
  clearTimeout(typingTimer);
  typingTimer = setTimeout(doneTyping, doneTypingInterval);
});

//on keydown, clear the countdown 
$input.on('keydown', function () {
  clearTimeout(typingTimer);
});

//user is "finished typing," do something
function doneTyping () {
 document.activeElement.blur();
 }
    var $listview = $(this).find('[data-role="listview"]');
$listview.append('<li id="no-results" style="display:none; margin:auto; text-align: center;">[No results found]</li>');
$listview.listview('refresh');
$(this).delegate('input[data-type="search"]', 'keyup', function() {
   
    
    if ($listview.children(':visible').not('#no-results').length === 0) {
        $('#no-results').fadeIn(500);
          $('#navibar').hide(250);
         $('#navibuttons').hide(250);
       
    } else {
        $('#no-results').fadeOut(250);
        $('#navibar').show(250);
         $('#navibuttons').show(250);
        
    }
});

      $(document).on('click', '.backbtn', function(){
          
                    window.sessionStorage.removeItem('searchString');
               window.sessionStorage.removeItem('prevpageUri');
               window.sessionStorage.removeItem('nextpageUri'); 
          window.sessionStorage.removeItem('showdiscounts');
                  if ( sessionStorage.reloadAfterNextClick ) {
                sessionStorage.removeItem('reloadAfterNextClick');
                }
                  if ( sessionStorage.reloadAfterBackClick ) {
                sessionStorage.removeItem('reloadAfterBackClick');
                }
              var currentPage = window.sessionStorage.getItem('currentPage');          
          $.mobile.navigate(currentPage, { transition: 'slidedown' });
          window.sessionStorage.removeItem('currentPage');
                                  $.mobile.loading( "show", {
  text: "Freeing up space",
  textVisible: true,
  theme: "a"
  
});
          location.reload(true);
          
          
});  
          $(document).on('click', '.searchbtn', function(){ 
                window.sessionStorage.removeItem('searchString');
               window.sessionStorage.removeItem('prevpageUri');
               window.sessionStorage.removeItem('nextpageUri'); 
                  if ( sessionStorage.reloadAfterNextClick ) {
                sessionStorage.removeItem('reloadAfterNextClick');
                }
                  if ( sessionStorage.reloadAfterBackClick ) {
                sessionStorage.removeItem('reloadAfterBackClick');
                }
                 var currentPage = window.sessionStorage.getItem('currentPage');       
          $.mobile.navigate(currentPage, { transition: 'slidedown' });
          window.sessionStorage.removeItem('currentPage');
                                  $.mobile.loading( "show", {
  text: "Freeing up space",
  textVisible: true,
  theme: "a"
  
});
          location.reload(true);
          
          
});  
}); 



$(document).delegate('#messageitems', 'pageshow', function (){
var typingTimer;                //timer identifier
var doneTypingInterval = 1000;  //time in ms, 5 second for example
var $input = $(this).find('input[data-type="search"]');

//on keyup, start the countdown
$input.on('keyup', function () {
  clearTimeout(typingTimer);
  typingTimer = setTimeout(doneTyping, doneTypingInterval);
});

//on keydown, clear the countdown 
$input.on('keydown', function () {
  clearTimeout(typingTimer);
});

//user is "finished typing," do something
function doneTyping () {
 document.activeElement.blur();
 }
    window.sessionStorage.setItem('currentPage', 'index.html');
$.mobile.loading( "show", {
  text: "Loading messag list",
  textVisible: true,
  theme: "a"
  
});
    
       var deviceuuid = localStorage.getItem('deviceuuid');
	if (deviceuuid) {
		
	var dataString="deviceuuid="+deviceuuid;

    $.ajax({
        type: "POST",crossDomain: true, cache: false,
        url: 'https://reedfrog.com/api/app/bookworm/getmessages.php',
		data: dataString,
		dataType:'JSON',		
        success: function(data){
            $.mobile.loading( "hide");
			     if(data.newmessages == 'yes')				
            { 
                for (var i = 0; i < data.results.length; i++) { 
                                                
                      var messageTitle = data.results[i].title;
                        var messageSubject = data.results[i].message;
                    var messageId = data.results[i].id;
                                                                                             
                      $( "#messagelistviewer" ).append('<li data-href="#messageitems" data-id="'+messageId+'"><a href="#"><img src="img/messages-icon.png"><h2>'+messageTitle+'</h2><p>'+messageSubject+'</p></a></li>'); 
                                                                  
                        $('#messagelistviewer').listview('refresh').trigger('create');
                    }
                 
                
            } if(data.newmessages == 'no') {
                
                  $( "#messagelistviewer" ).append('<li data-href="#" data-icon="false"><a href="#"><img src="img/messages-icon.png"><h2>No Messages</h2><p>You have no notifications at this time.</p></a></li>'); 
                $('#messagelistviewer').listview('refresh').trigger('create');
            }
            
            }
    });


		
	}
    
                $("#messagehome").on('click', function(e) {
                      e.preventDefault();
                       window.localStorage.removeItem('queryString');
        window.localStorage.removeItem('dataValue');
          var currentPage = window.sessionStorage.getItem('currentPage');
          
          $.mobile.navigate(currentPage, { transition: 'pop' });
          window.sessionStorage.removeItem('currentPage');
                                  $.mobile.loading( "show", {
  text: "Freeing up space",
  textVisible: true,
  theme: "a"
  
});
          location.reload(true);
});
    
          $("#messageup").on('click', function() { 
                  
   $('html, body').stop().animate({ scrollTop : 0 }, 400);
     });
        $("#messagedown").on('click', function() { 
                  
     $('html, body').animate({scrollTop: '+=360px'}, 800);
        $(this).removeClass('ui-btn-active');
     });

}); 
$(document).delegate('#messagereader', 'pageshow', function (){
var typingTimer;                //timer identifier
var doneTypingInterval = 1000;  //time in ms, 5 second for example
var $input = $(this).find('input[data-type="search"]');

//on keyup, start the countdown
$input.on('keyup', function () {
  clearTimeout(typingTimer);
  typingTimer = setTimeout(doneTyping, doneTypingInterval);
});

//on keydown, clear the countdown 
$input.on('keydown', function () {
  clearTimeout(typingTimer);
});

//user is "finished typing," do something
function doneTyping () {
 document.activeElement.blur();
 }
    $("#messageread").on('click', function(e) {
                      e.preventDefault();
                       window.localStorage.removeItem('queryString');
        window.localStorage.removeItem('dataValue');
          var currentPage = sessionStorage.getItem('currentPage');      
          $.mobile.navigate(currentPage, { transition: 'pop' });
          window.sessionStorage.removeItem('currentPage');
$.mobile.loading( "show", {
  text: "Freeing up space",
  textVisible: true,
  theme: "a"
  
});
          location.reload(true);
});
    
              $("#messagesup").on('click', function() { 
                  
   $('html, body').stop().animate({ scrollTop : 0 }, 400);
     });
        $("#messagesdown").on('click', function() { 
                  
     $('html, body').animate({scrollTop: '+=360px'}, 800);
        $(this).removeClass('ui-btn-active');
     });

}); 

  $(document).delegate('#booklistitems', 'pageshow', function (){
        $(function() {
    $('span.stars').stars();
});
  $('#booklistview').listview('refresh').trigger('create'); 
            $(document).on('click', '.backbutton', function(){ 
                window.localStorage.clear();
                  var currentPage = $(this).data('href');          
          $(location).attr('href', currentPage);
         $.mobile.loading( "show", {
  text: "Freeing up space",
  textVisible: true,
  theme: "a"
  
});
          location.reload(true);
          
          
}); 
      
});

$(document).delegate('#startscreen', 'pageshow', function (){
         /*START CHECK FOR NEW MESSAGES FUNCTION */
    var deviceuuid = localStorage.getItem('deviceuuid');
	if (deviceuuid) {
		
	var dataString="deviceuuid="+deviceuuid;

    $.ajax({
        type: "POST",crossDomain: true, cache: false,
        url: 'https://reedfrog.com/api/app/bookworm/checkalerts.php',
		data: dataString,
		dataType:'JSON',		
        success: function(data){			
			     if(data.count > 0)				
            { 
                var messageCount = data.count;
               cordova.plugins.notification.badge.set(messageCount);  
	            $('.notifications').show();
               $('.notifications').text(messageCount); 
                $('.gotonotifications').attr('href', '#messageitems')		             
            } else {
                
                 var messageCount = "0";
               cordova.plugins.notification.badge.set(messageCount);    
	            $('.notifications').show();
               $('.notifications').text(messageCount); 
                 $('.gotonotifications').attr('href', '#')
            }

		
                  }
    });


		
	}    
    /*END CHECK FOR NEW MESSAGES FUNCTION */ 
    
    
    });

/*START DYNAMICALLY LOAD COUNT BUBBLES */

$(document).delegate('#inspiration', 'pageshow', function (){
       
   var dataSource = $("ul").find('[data-source]');
  
   
    dataSource.each(function(idx, li) {
    var qs = $(li).data('source');
   	var dataString="dataSource="+qs;

    $.ajax({
        type: "POST",crossDomain: true, cache: false,
        url: 'https://reedfrog.com/api/app/bookworm/countbubbles.php',
		data: dataString,
		dataType:'JSON',		
        success: function(data){			
			     if(data.count > 0)				
            { 
                var messageCount = data.count;
                $(li).text(messageCount);
           		             
            } else {
                
                 var messageCount = "0";
                $(li).text(messageCount);
            
            }

		
                  }
    });
        
});
                


    
    }); 

$(document).delegate('#fiction', 'pageshow', function (){
       
   var dataSource = $("ul").find('[data-source]');
  
   
    dataSource.each(function(idx, li) {
    var qs = $(li).data('source');
    var dataString="dataSource="+qs;

    $.ajax({
        type: "POST",crossDomain: true, cache: false,
        url: 'https://reedfrog.com/api/app/bookworm/countbubbles.php',
		data: dataString,
		dataType:'JSON',		
        success: function(data){			
			     if(data.count > 0)				
            { 
                var messageCount = data.count;
                $(li).text(messageCount);
           		             
            } else {
                
                 var messageCount = "0";
                $(li).text(messageCount);
            
            }

		
                  }
    });
        
});
                


    
    }); 

$(document).delegate('#children', 'pageshow', function (){
       
   var dataSource = $("ul").find('[data-source]');
  
   
    dataSource.each(function(idx, li) {
    var qs = $(li).data('source');
   	var dataString="dataSource="+qs;

    $.ajax({
        type: "POST",crossDomain: true, cache: false,
        url: 'https://reedfrog.com/api/app/bookworm/countbubbles.php',
		data: dataString,
		dataType:'JSON',		
        success: function(data){			
			     if(data.count > 0)				
            { 
                var messageCount = data.count;
                $(li).text(messageCount);
           		             
            } else {
                
                 var messageCount = "0";
                $(li).text(messageCount);
            
            }

		
                  }
    });
        
});
                


    
    }); 

$(document).delegate('#romance', 'pageshow', function (){
       
   var dataSource = $("ul").find('[data-source]');
  
   
    dataSource.each(function(idx, li) {
    var qs = $(li).data('source');
   	var dataString="dataSource="+qs;

    $.ajax({
        type: "POST",crossDomain: true, cache: false,
        url: 'https://reedfrog.com/api/app/bookworm/countbubbles.php',
		data: dataString,
		dataType:'JSON',		
        success: function(data){			
			     if(data.count > 0)				
            { 
                var messageCount = data.count;
                $(li).text(messageCount);
           		             
            } else {
                
                 var messageCount = "0";
                $(li).text(messageCount);
            
            }

		
                  }
    });
        
});
                


    
    }); 

$(document).delegate('#mystery', 'pageshow', function (){
       
   var dataSource = $("ul").find('[data-source]');
  
   
    dataSource.each(function(idx, li) {
    var qs = $(li).data('source');
   	var dataString="dataSource="+qs;

    $.ajax({
        type: "POST",crossDomain: true, cache: false,
        url: 'https://reedfrog.com/api/app/bookworm/countbubbles.php',
		data: dataString,
		dataType:'JSON',		
        success: function(data){			
			     if(data.count > 0)				
            { 
                var messageCount = data.count;
                $(li).text(messageCount);
           		             
            } else {
                
                 var messageCount = "0";
                $(li).text(messageCount);
            
            }

		
                  }
    });
        
});
                


    
    }); 

$(document).delegate('#horror', 'pageshow', function (){
       
   var dataSource = $("ul").find('[data-source]');
  
   
    dataSource.each(function(idx, li) {
    var qs = $(li).data('source');
   	var dataString="dataSource="+qs;

    $.ajax({
        type: "POST",crossDomain: true, cache: false,
        url: 'https://reedfrog.com/api/app/bookworm/countbubbles.php',
		data: dataString,
		dataType:'JSON',		
        success: function(data){			
			     if(data.count > 0)				
            { 
                var messageCount = data.count;
                $(li).text(messageCount);
           		             
            } else {
                
                 var messageCount = "0";
                $(li).text(messageCount);
            
            }

		
                  }
    });
        
});
                


    
    }); 

$(document).delegate('#cookbooks', 'pageshow', function (){
       
   var dataSource = $("ul").find('[data-source]');
  
   
    dataSource.each(function(idx, li) {
    var qs = $(li).data('source');
   	var dataString="dataSource="+qs;

    $.ajax({
        type: "POST",crossDomain: true, cache: false,
        url: 'https://reedfrog.com/api/app/bookworm/countbubbles.php',
		data: dataString,
		dataType:'JSON',		
        success: function(data){			
			     if(data.count > 0)				
            { 
                var messageCount = data.count;
                $(li).text(messageCount);
           		             
            } else {
                
                 var messageCount = "0";
                $(li).text(messageCount);
            
            }

		
                  }
    });
        
});
                


    
    }); 





/*END DYNAMICALLY LOAD COUNT BUBBLES */


