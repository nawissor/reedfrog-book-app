var app = {
  // Application Constructor
  initialize: function() {
    this.bindEvents();
  },
 
  // Bind Event Listeners
  bindEvents: function() {
    document.addEventListener('deviceready', this.onDeviceReady, false);
  },
 
  // deviceready Event Handler
  onDeviceReady: function() {

        universalLinks.subscribe('openRomanceBooksPage', app.openRomanceBooksPageRequest);
        universalLinks.subscribe('openMensFashionPage', app.openMensFashionPageRequest);
        universalLinks.subscribe('openWeddingFashionPage', app.openWeddingFashionPageRequest);
      universalLinks.subscribe('openKidsFashionPage', app.openKidsFashionPageRequest);
        universalLinks.subscribe('openWomensBags', app.openWomensBagsReequest);
        universalLinks.subscribe('openWomensGlasses', app.openWomensGlassesRequest);
        universalLinks.subscribe('openWomensHats', app.openWomensHatsRequest);
        universalLinks.subscribe('openWomensJewelry', app.openWomensJewelryRequest);
        universalLinks.subscribe('openWomensShoes', app.openWomensShoesRequest);
        universalLinks.subscribe('openWomensHealth', app.openWomensHealthRequest);
        universalLinks.subscribe('openWomensSkinCare', app.openWomensSkinCareRequest);
        universalLinks.subscribe('openWomensHairCare', app.openWomensHairCareRequest);
        universalLinks.subscribe('openWomensActiveWear', app.openWomensActiveWearRequest);
        universalLinks.subscribe('openWomensBlouses', app.openWomensBlousesRequest);
        universalLinks.subscribe('openWomensClothing', app.openWomensClothingRequest);
        universalLinks.subscribe('opemWomensDresses', app.opemWomensDressesRequest);
        universalLinks.subscribe('opemWomensLingerie', app.opemWomensLingerieRequest);
        universalLinks.subscribe('opemWomensPlusSize', app.opemWomensPlusSizeRequest);
        universalLinks.subscribe('opemWomensSkirts', app.opemWomensSkirtsRequest);
        universalLinks.subscribe('opemWomensSwimWear', app.opemWomensSwimWearRequest);
        universalLinks.subscribe('opemWomensTops', app.opemWomensTopsRequest);
        universalLinks.subscribe('openMensBelts', app.openMensBeltsRequest);
        universalLinks.subscribe('openMensAccessories', app.openMensAccessoriesRequest);
        universalLinks.subscribe('openMensHats', app.openMensHatsRequest);
        universalLinks.subscribe('openMensShoes', app.openMensShoesRequest);
        universalLinks.subscribe('openMensTies', app.openMensTiesRequest);
        universalLinks.subscribe('openMensWatches', app.openMensWatchesRequest);
        universalLinks.subscribe('openMensActiveWear', app.openMensActiveWearRequest);
        universalLinks.subscribe('openMensCycling', app.openMensCyclingRequest);
        universalLinks.subscribe('openMensCyclingShoes', app.openMensCyclingShoesRequest);
        universalLinks.subscribe('openMensFishing', app.openMensFishingRequest);
        universalLinks.subscribe('openMensGolf', app.openMensGolfRequest);
        universalLinks.subscribe('openMensHikingJackets', app.openMensHikingJacketsRequest);
        universalLinks.subscribe('openMensHikingPants', app.openMensHikingPantsRequest);
        universalLinks.subscribe('openMensHikingShoes', app.openMensHikingShoesRequest);
        universalLinks.subscribe('openMensHikingTees', app.openMensHikingTeesRequest);
        universalLinks.subscribe('openMensHuntingGear', app.openMensHuntingGearRequest);
        universalLinks.subscribe('openMensSkiing', app.openMensSkiingRequest);
        universalLinks.subscribe('openMensWatersports', app.openMensWatersportsRequest);
        universalLinks.subscribe('openMensHoodies', app.openMensHoodiesRequest);
        universalLinks.subscribe('openMensJackets', app.openMensJacketsRequest);
        universalLinks.subscribe('openMensPants', app.openMensPantsRequest); universalLinks.subscribe('openMensParkas', app.openMensParkasRequest);
        universalLinks.subscribe('openMensPolos', app.openMensPolosRequest);
        universalLinks.subscribe('openMensRompers', app.openMensRompersRequest);
        universalLinks.subscribe('openMensRompers', app.openMensRompersRequest);
        universalLinks.subscribe('openMensShirts', app.openMensShirtsRequest);
        universalLinks.subscribe('openMensSwimwear', app.openMensSwimwearRequest);
        universalLinks.subscribe('openMensUnderwear', app.openMensUnderwearRequest);
        universalLinks.subscribe('openWeddingAccessories', app.openWeddingAccessoriesRequest);
        universalLinks.subscribe('openWeddingDresses', app.openWeddingDressesRequest);
      universalLinks.subscribe('openWeddingMother', app.openWeddingMotherRequest);
      universalLinks.subscribe('openWeddingShoes', app.openWeddingShoesRequest);
      universalLinks.subscribe('openFlowerGirls', app.openFlowerGirlsRequest);
      universalLinks.subscribe('openMenSuits', app.openMenSuitsRequest);
      universalLinks.subscribe('openMenClothing', app.openMenClothingRequest);
       universalLinks.subscribe('openMensJewelry', app.openMensJewelryRequest);
        universalLinks.subscribe('openWeddingGroom', app.openWeddingGroomRequest);
      universalLinks.subscribe('openKidsClothing', app.openKidsClothingRequest);
         universalLinks.subscribe('openKidsHoodies', app.openKidsHoodiesRequest);
        universalLinks.subscribe('openBoysPants', app.openBoysPantsRequest);
        universalLinks.subscribe('openBoysRompers', app.openBoysRompersRequest);
        universalLinks.subscribe('openBoysShoes', app.openBoysShoesRequest);
       universalLinks.subscribe('openBoysSports', app.openBoysSportsRequest);
      universalLinks.subscribe('openBoysTops', app.openBoysTopsRequest);
      universalLinks.subscribe('openGirlsClothingSets', app.openGirlsClothingSetsRequest);
      universalLinks.subscribe('openGirlsDresses', app.openGirlsDressesRequest);
      universalLinks.subscribe('openGirlsJewelry', app.openGirlsJewelryRequest);
      universalLinks.subscribe('openGirlsOnePiece', app.openGirlsOnePieceRequest);
      universalLinks.subscribe('openGirlsSwimWear', app.openGirlsSwimWearRequest);
      universalLinks.subscribe('openGirlsBags', app.openGirlsBagsRequest);
      universalLinks.subscribe('openGirlsSports', app.openGirlsSportsRequest);
      universalLinks.subscribe('openGirlsTops', app.openGirlsTopsRequest);
      universalLinks.subscribe('openGirlsWedding', app.openGirlsWeddingRequest);
       universalLinks.subscribe('openMaternityBottoms', app.openMaternityBottomsRequest);
       universalLinks.subscribe('openMaternityDresses', app.openMaternityDressesRequest);
       universalLinks.subscribe('openMaternityTops', app.openMaternityTopsRequest);
        universalLinks.subscribe('launchedAppFromLink', app.onApplicationDidLaunchFromLink);
  }, 
    openRomanceBooksPageRequest: function(eventData) {
      $(location).attr('href', '#romance');  
     $('div[class^="ui-loader"]').hide();
  },
    
    openMensFashionPageRequest: function(eventData) {
      $(location).attr('href', '#men');  
     $('div[class^="ui-loader"]').hide();
  },
    
    openWeddingFashionPageRequest: function(eventData) {
      $(location).attr('href', '#weddings');  
     $('div[class^="ui-loader"]').hide();
  },
    
    openKidsFashionPageRequest: function(eventData) {
      $(location).attr('href', '#weddings');  
     $('div[class^="ui-loader"]').hide();
  },
    
     openMaternityTopsRequest: function(eventData) { 
     var value = "rfapp_maternity_tops";       
       var dataValue = "Maternity Tops";
      var currentpos = "#kids";
        window.sessionStorage.setItem('currentPage', currentpos);
        window.localStorage.setItem('queryString', value);
       window.localStorage.setItem('dataValue', dataValue);
                        $.mobile.loading( "show", {
  text: "Fetching " +dataValue,
  textVisible: true,
  theme: "b"
  
});

    var queryString = window.localStorage.getItem('queryString');
     var dataTitle = window.localStorage.getItem('dataValue');
    var itemString ="queryString="+queryString;   
       
    $.ajax({
        type: "POST",crossDomain: true, cache: false,
        url: 'https://reedfrog.com/api/app/womens-fashion.php',
        data: itemString,
		dataType:'JSON',  
         beforeSend: function(){ 
             
         },
		success: function(data){
            $(location).attr('href', '#fashionitems');   
				   if(data.results.length > 1) {                    
                    $(".heading").text(dataTitle);
                    $(".mainheading").text(dataTitle);
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
                        
                        $('div[class^="ui-loader"]').hide();
                      
                                  
                        
                    }
				 
            }
            
             if(!data.results)
            {
				
			  alert('no results returned');
			
               
            }
        }
		
    });
      	

        
  },
    
     openMaternityDressesRequest: function(eventData) { 
     var value = "rfapp_maternity_dresses";       
       var dataValue = "Maternity Dresses";
      var currentpos = "#kids";
        window.sessionStorage.setItem('currentPage', currentpos);
        window.localStorage.setItem('queryString', value);
       window.localStorage.setItem('dataValue', dataValue);
                        $.mobile.loading( "show", {
  text: "Fetching " +dataValue,
  textVisible: true,
  theme: "b"
  
});

    var queryString = window.localStorage.getItem('queryString');
     var dataTitle = window.localStorage.getItem('dataValue');
    var itemString ="queryString="+queryString;   
       
    $.ajax({
        type: "POST",crossDomain: true, cache: false,
        url: 'https://reedfrog.com/api/app/womens-fashion.php',
        data: itemString,
		dataType:'JSON',  
         beforeSend: function(){ 
             
         },
		success: function(data){
            $(location).attr('href', '#fashionitems');   
				   if(data.results.length > 1) {                    
                    $(".heading").text(dataTitle);
                    $(".mainheading").text(dataTitle);
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
                        
                        $('div[class^="ui-loader"]').hide();
                      
                                  
                        
                    }
				 
            }
            
             if(!data.results)
            {
				
			  alert('no results returned');
			
               
            }
        }
		
    });
      	

        
  },
    
     openMaternityBottomsRequest: function(eventData) { 
     var value = "rfapp_maternity_bottoms";       
       var dataValue = "Maternity Bottoms";
      var currentpos = "#kids";
        window.sessionStorage.setItem('currentPage', currentpos);
        window.localStorage.setItem('queryString', value);
       window.localStorage.setItem('dataValue', dataValue);
                        $.mobile.loading( "show", {
  text: "Fetching " +dataValue,
  textVisible: true,
  theme: "b"
  
});

    var queryString = window.localStorage.getItem('queryString');
     var dataTitle = window.localStorage.getItem('dataValue');
    var itemString ="queryString="+queryString;   
       
    $.ajax({
        type: "POST",crossDomain: true, cache: false,
        url: 'https://reedfrog.com/api/app/womens-fashion.php',
        data: itemString,
		dataType:'JSON',  
         beforeSend: function(){ 
             
         },
		success: function(data){
            $(location).attr('href', '#fashionitems');   
				   if(data.results.length > 1) {                    
                    $(".heading").text(dataTitle);
                    $(".mainheading").text(dataTitle);
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
                        
                        $('div[class^="ui-loader"]').hide();
                      
                                  
                        
                    }
				 
            }
            
             if(!data.results)
            {
				
			  alert('no results returned');
			
               
            }
        }
		
    });
      	

        
  },
    
     openGirlsWeddingRequest: function(eventData) { 
     var value = "rfapp_girls_weddings_events";       
       var dataValue = "Girl's Wedding";
      var currentpos = "#kids";
        window.sessionStorage.setItem('currentPage', currentpos);
        window.localStorage.setItem('queryString', value);
       window.localStorage.setItem('dataValue', dataValue);
                        $.mobile.loading( "show", {
  text: "Fetching " +dataValue,
  textVisible: true,
  theme: "b"
  
});

    var queryString = window.localStorage.getItem('queryString');
     var dataTitle = window.localStorage.getItem('dataValue');
    var itemString ="queryString="+queryString;   
       
    $.ajax({
        type: "POST",crossDomain: true, cache: false,
        url: 'https://reedfrog.com/api/app/womens-fashion.php',
        data: itemString,
		dataType:'JSON',  
         beforeSend: function(){ 
             
         },
		success: function(data){
            $(location).attr('href', '#fashionitems');   
				   if(data.results.length > 1) {                    
                    $(".heading").text(dataTitle);
                    $(".mainheading").text(dataTitle);
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
                        
                        $('div[class^="ui-loader"]').hide();
                      
                                  
                        
                    }
				 
            }
            
             if(!data.results)
            {
				
			  alert('no results returned');
			
               
            }
        }
		
    });
      	

        
  },
    
     openGirlsTopsRequest: function(eventData) { 
     var value = "rfapp_girls_tops";       
       var dataValue = "Girl's Tops";
      var currentpos = "#kids";
        window.sessionStorage.setItem('currentPage', currentpos);
        window.localStorage.setItem('queryString', value);
       window.localStorage.setItem('dataValue', dataValue);
                        $.mobile.loading( "show", {
  text: "Fetching " +dataValue,
  textVisible: true,
  theme: "b"
  
});

    var queryString = window.localStorage.getItem('queryString');
     var dataTitle = window.localStorage.getItem('dataValue');
    var itemString ="queryString="+queryString;   
       
    $.ajax({
        type: "POST",crossDomain: true, cache: false,
        url: 'https://reedfrog.com/api/app/womens-fashion.php',
        data: itemString,
		dataType:'JSON',  
         beforeSend: function(){ 
             
         },
		success: function(data){
            $(location).attr('href', '#fashionitems');   
				   if(data.results.length > 1) {                    
                    $(".heading").text(dataTitle);
                    $(".mainheading").text(dataTitle);
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
                        
                        $('div[class^="ui-loader"]').hide();
                      
                                  
                        
                    }
				 
            }
            
             if(!data.results)
            {
				
			  alert('no results returned');
			
               
            }
        }
		
    });
      	

        
  },
    
     openGirlsSportsRequest: function(eventData) { 
     var value = "rfapp_girls_sports";       
       var dataValue = "Girl's Sports";
      var currentpos = "#kids";
        window.sessionStorage.setItem('currentPage', currentpos);
        window.localStorage.setItem('queryString', value);
       window.localStorage.setItem('dataValue', dataValue);
                        $.mobile.loading( "show", {
  text: "Fetching " +dataValue,
  textVisible: true,
  theme: "b"
  
});

    var queryString = window.localStorage.getItem('queryString');
     var dataTitle = window.localStorage.getItem('dataValue');
    var itemString ="queryString="+queryString;   
       
    $.ajax({
        type: "POST",crossDomain: true, cache: false,
        url: 'https://reedfrog.com/api/app/womens-fashion.php',
        data: itemString,
		dataType:'JSON',  
         beforeSend: function(){ 
             
         },
		success: function(data){
            $(location).attr('href', '#fashionitems');   
				   if(data.results.length > 1) {                    
                    $(".heading").text(dataTitle);
                    $(".mainheading").text(dataTitle);
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
                        
                        $('div[class^="ui-loader"]').hide();
                      
                                  
                        
                    }
				 
            }
            
             if(!data.results)
            {
				
			  alert('no results returned');
			
               
            }
        }
		
    });
      	

        
  },
    
     openGirlsBagsRequest: function(eventData) { 
     var value = "rfapp_girls_bags_shoes";       
       var dataValue = "Girl's Bags & Shoes";
      var currentpos = "#kids";
        window.sessionStorage.setItem('currentPage', currentpos);
        window.localStorage.setItem('queryString', value);
       window.localStorage.setItem('dataValue', dataValue);
                        $.mobile.loading( "show", {
  text: "Fetching " +dataValue,
  textVisible: true,
  theme: "b"
  
});

    var queryString = window.localStorage.getItem('queryString');
     var dataTitle = window.localStorage.getItem('dataValue');
    var itemString ="queryString="+queryString;   
       
    $.ajax({
        type: "POST",crossDomain: true, cache: false,
        url: 'https://reedfrog.com/api/app/womens-fashion.php',
        data: itemString,
		dataType:'JSON',  
         beforeSend: function(){ 
             
         },
		success: function(data){
            $(location).attr('href', '#fashionitems');   
				   if(data.results.length > 1) {                    
                    $(".heading").text(dataTitle);
                    $(".mainheading").text(dataTitle);
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
                        
                        $('div[class^="ui-loader"]').hide();
                      
                                  
                        
                    }
				 
            }
            
             if(!data.results)
            {
				
			  alert('no results returned');
			
               
            }
        }
		
    });
      	

        
  },
    
     openGirlsSwimWearRequest: function(eventData) { 
     var value = "rfapp_girls_swimwear";       
       var dataValue = "Girl's Swimwear";
      var currentpos = "#kids";
        window.sessionStorage.setItem('currentPage', currentpos);
        window.localStorage.setItem('queryString', value);
       window.localStorage.setItem('dataValue', dataValue);
                        $.mobile.loading( "show", {
  text: "Fetching " +dataValue,
  textVisible: true,
  theme: "b"
  
});

    var queryString = window.localStorage.getItem('queryString');
     var dataTitle = window.localStorage.getItem('dataValue');
    var itemString ="queryString="+queryString;   
       
    $.ajax({
        type: "POST",crossDomain: true, cache: false,
        url: 'https://reedfrog.com/api/app/womens-fashion.php',
        data: itemString,
		dataType:'JSON',  
         beforeSend: function(){ 
             
         },
		success: function(data){
            $(location).attr('href', '#fashionitems');   
				   if(data.results.length > 1) {                    
                    $(".heading").text(dataTitle);
                    $(".mainheading").text(dataTitle);
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
                        
                        $('div[class^="ui-loader"]').hide();
                      
                                  
                        
                    }
				 
            }
            
             if(!data.results)
            {
				
			  alert('no results returned');
			
               
            }
        }
		
    });
      	

        
  },
    
    openGirlsOnePieceRequest: function(eventData) { 
     var value = "rfapp_girls_once_piece";       
       var dataValue = "Girl's One Piece";
      var currentpos = "#kids";
        window.sessionStorage.setItem('currentPage', currentpos);
        window.localStorage.setItem('queryString', value);
       window.localStorage.setItem('dataValue', dataValue);
                        $.mobile.loading( "show", {
  text: "Fetching " +dataValue,
  textVisible: true,
  theme: "b"
  
});

    var queryString = window.localStorage.getItem('queryString');
     var dataTitle = window.localStorage.getItem('dataValue');
    var itemString ="queryString="+queryString;   
       
    $.ajax({
        type: "POST",crossDomain: true, cache: false,
        url: 'https://reedfrog.com/api/app/womens-fashion.php',
        data: itemString,
		dataType:'JSON',  
         beforeSend: function(){ 
             
         },
		success: function(data){
            $(location).attr('href', '#fashionitems');   
				   if(data.results.length > 1) {                    
                    $(".heading").text(dataTitle);
                    $(".mainheading").text(dataTitle);
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
                        
                        $('div[class^="ui-loader"]').hide();
                      
                                  
                        
                    }
				 
            }
            
             if(!data.results)
            {
				
			  alert('no results returned');
			
               
            }
        }
		
    });
      	

        
  },
    
    openGirlsJewelryRequest: function(eventData) { 
     var value = "rfapp_girls_jewelry";       
       var dataValue = "Girl's Jewelry";
      var currentpos = "#kids";
        window.sessionStorage.setItem('currentPage', currentpos);
        window.localStorage.setItem('queryString', value);
       window.localStorage.setItem('dataValue', dataValue);
                        $.mobile.loading( "show", {
  text: "Fetching " +dataValue,
  textVisible: true,
  theme: "b"
  
});

    var queryString = window.localStorage.getItem('queryString');
     var dataTitle = window.localStorage.getItem('dataValue');
    var itemString ="queryString="+queryString;   
       
    $.ajax({
        type: "POST",crossDomain: true, cache: false,
        url: 'https://reedfrog.com/api/app/womens-fashion.php',
        data: itemString,
		dataType:'JSON',  
         beforeSend: function(){ 
             
         },
		success: function(data){
            $(location).attr('href', '#fashionitems');   
				   if(data.results.length > 1) {                    
                    $(".heading").text(dataTitle);
                    $(".mainheading").text(dataTitle);
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
                        
                        $('div[class^="ui-loader"]').hide();
                      
                                  
                        
                    }
				 
            }
            
             if(!data.results)
            {
				
			  alert('no results returned');
			
               
            }
        }
		
    });
      	

        
  },
    
       openGirlsDressesRequest: function(eventData) { 
     var value = "rfapp_girls_dresses";       
       var dataValue = "Girl's Dresses";
      var currentpos = "#kids";
        window.sessionStorage.setItem('currentPage', currentpos);
        window.localStorage.setItem('queryString', value);
       window.localStorage.setItem('dataValue', dataValue);
                        $.mobile.loading( "show", {
  text: "Fetching " +dataValue,
  textVisible: true,
  theme: "b"
  
});

    var queryString = window.localStorage.getItem('queryString');
     var dataTitle = window.localStorage.getItem('dataValue');
    var itemString ="queryString="+queryString;   
       
    $.ajax({
        type: "POST",crossDomain: true, cache: false,
        url: 'https://reedfrog.com/api/app/womens-fashion.php',
        data: itemString,
		dataType:'JSON',  
         beforeSend: function(){ 
             
         },
		success: function(data){
            $(location).attr('href', '#fashionitems');   
				   if(data.results.length > 1) {                    
                    $(".heading").text(dataTitle);
                    $(".mainheading").text(dataTitle);
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
                        
                        $('div[class^="ui-loader"]').hide();
                      
                                  
                        
                    }
				 
            }
            
             if(!data.results)
            {
				
			  alert('no results returned');
			
               
            }
        }
		
    });
      	

        
  },
    
      openGirlsClothingSetsRequest: function(eventData) { 
     var value = "rfapp_girls_clothingsets";       
       var dataValue = "Girl's Clothing Sets";
      var currentpos = "#kids";
        window.sessionStorage.setItem('currentPage', currentpos);
        window.localStorage.setItem('queryString', value);
       window.localStorage.setItem('dataValue', dataValue);
                        $.mobile.loading( "show", {
  text: "Fetching " +dataValue,
  textVisible: true,
  theme: "b"
  
});

    var queryString = window.localStorage.getItem('queryString');
     var dataTitle = window.localStorage.getItem('dataValue');
    var itemString ="queryString="+queryString;   
       
    $.ajax({
        type: "POST",crossDomain: true, cache: false,
        url: 'https://reedfrog.com/api/app/womens-fashion.php',
        data: itemString,
		dataType:'JSON',  
         beforeSend: function(){ 
             
         },
		success: function(data){
            $(location).attr('href', '#fashionitems');   
				   if(data.results.length > 1) {                    
                    $(".heading").text(dataTitle);
                    $(".mainheading").text(dataTitle);
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
                        
                        $('div[class^="ui-loader"]').hide();
                      
                                  
                        
                    }
				 
            }
            
             if(!data.results)
            {
				
			  alert('no results returned');
			
               
            }
        }
		
    });
      	

        
  },
    
     openBoysTopsRequest: function(eventData) { 
     var value = "rfapp_boys_tops";       
       var dataValue = "Boys Tops";
      var currentpos = "#kids";
        window.sessionStorage.setItem('currentPage', currentpos);
        window.localStorage.setItem('queryString', value);
       window.localStorage.setItem('dataValue', dataValue);
                        $.mobile.loading( "show", {
  text: "Fetching " +dataValue,
  textVisible: true,
  theme: "b"
  
});

    var queryString = window.localStorage.getItem('queryString');
     var dataTitle = window.localStorage.getItem('dataValue');
    var itemString ="queryString="+queryString;   
       
    $.ajax({
        type: "POST",crossDomain: true, cache: false,
        url: 'https://reedfrog.com/api/app/womens-fashion.php',
        data: itemString,
		dataType:'JSON',  
         beforeSend: function(){ 
             
         },
		success: function(data){
            $(location).attr('href', '#fashionitems');   
				   if(data.results.length > 1) {                    
                    $(".heading").text(dataTitle);
                    $(".mainheading").text(dataTitle);
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
                        
                        $('div[class^="ui-loader"]').hide();
                      
                                  
                        
                    }
				 
            }
            
             if(!data.results)
            {
				
			  alert('no results returned');
			
               
            }
        }
		
    });
      	

        
  },
    
        openBoysSportsRequest: function(eventData) { 
     var value = "rfapp_boys_sports";       
       var dataValue = "Boys Sports";
      var currentpos = "#kids";
        window.sessionStorage.setItem('currentPage', currentpos);
        window.localStorage.setItem('queryString', value);
       window.localStorage.setItem('dataValue', dataValue);
                        $.mobile.loading( "show", {
  text: "Fetching " +dataValue,
  textVisible: true,
  theme: "b"
  
});

    var queryString = window.localStorage.getItem('queryString');
     var dataTitle = window.localStorage.getItem('dataValue');
    var itemString ="queryString="+queryString;   
       
    $.ajax({
        type: "POST",crossDomain: true, cache: false,
        url: 'https://reedfrog.com/api/app/womens-fashion.php',
        data: itemString,
		dataType:'JSON',  
         beforeSend: function(){ 
             
         },
		success: function(data){
            $(location).attr('href', '#fashionitems');   
				   if(data.results.length > 1) {                    
                    $(".heading").text(dataTitle);
                    $(".mainheading").text(dataTitle);
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
                        
                        $('div[class^="ui-loader"]').hide();
                      
                                  
                        
                    }
				 
            }
            
             if(!data.results)
            {
				
			  alert('no results returned');
			
               
            }
        }
		
    });
      	

        
  },
    
       openBoysShoesRequest: function(eventData) { 
     var value = "rfapp_boys_shoes";       
       var dataValue = "Boys Shoes";
      var currentpos = "#kids";
        window.sessionStorage.setItem('currentPage', currentpos);
        window.localStorage.setItem('queryString', value);
       window.localStorage.setItem('dataValue', dataValue);
                        $.mobile.loading( "show", {
  text: "Fetching " +dataValue,
  textVisible: true,
  theme: "b"
  
});

    var queryString = window.localStorage.getItem('queryString');
     var dataTitle = window.localStorage.getItem('dataValue');
    var itemString ="queryString="+queryString;   
       
    $.ajax({
        type: "POST",crossDomain: true, cache: false,
        url: 'https://reedfrog.com/api/app/womens-fashion.php',
        data: itemString,
		dataType:'JSON',  
         beforeSend: function(){ 
             
         },
		success: function(data){
            $(location).attr('href', '#fashionitems');   
				   if(data.results.length > 1) {                    
                    $(".heading").text(dataTitle);
                    $(".mainheading").text(dataTitle);
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
                        
                        $('div[class^="ui-loader"]').hide();
                      
                                  
                        
                    }
				 
            }
            
             if(!data.results)
            {
				
			  alert('no results returned');
			
               
            }
        }
		
    });
      	

        
  },
    
     openBoysPantsRequest: function(eventData) { 
     var value = "rfapp_boys_rompers";       
       var dataValue = "Boys Rompers";
      var currentpos = "#kids";
        window.sessionStorage.setItem('currentPage', currentpos);
        window.localStorage.setItem('queryString', value);
       window.localStorage.setItem('dataValue', dataValue);
                        $.mobile.loading( "show", {
  text: "Fetching " +dataValue,
  textVisible: true,
  theme: "b"
  
});

    var queryString = window.localStorage.getItem('queryString');
     var dataTitle = window.localStorage.getItem('dataValue');
    var itemString ="queryString="+queryString;   
       
    $.ajax({
        type: "POST",crossDomain: true, cache: false,
        url: 'https://reedfrog.com/api/app/womens-fashion.php',
        data: itemString,
		dataType:'JSON',  
         beforeSend: function(){ 
             
         },
		success: function(data){
            $(location).attr('href', '#fashionitems');   
				   if(data.results.length > 1) {                    
                    $(".heading").text(dataTitle);
                    $(".mainheading").text(dataTitle);
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
                        
                        $('div[class^="ui-loader"]').hide();
                      
                                  
                        
                    }
				 
            }
            
             if(!data.results)
            {
				
			  alert('no results returned');
			
               
            }
        }
		
    });
      	

        
  },
    
     openKidsHoodiesRequest: function(eventData) { 
     var value = "rfapp_boys_hoodies";       
       var dataValue = "Hoodies & Sweaters";
      var currentpos = "#kids";
        window.sessionStorage.setItem('currentPage', currentpos);
        window.localStorage.setItem('queryString', value);
       window.localStorage.setItem('dataValue', dataValue);
                        $.mobile.loading( "show", {
  text: "Fetching " +dataValue,
  textVisible: true,
  theme: "b"
  
});

    var queryString = window.localStorage.getItem('queryString');
     var dataTitle = window.localStorage.getItem('dataValue');
    var itemString ="queryString="+queryString;   
       
    $.ajax({
        type: "POST",crossDomain: true, cache: false,
        url: 'https://reedfrog.com/api/app/womens-fashion.php',
        data: itemString,
		dataType:'JSON',  
         beforeSend: function(){ 
             
         },
		success: function(data){
            $(location).attr('href', '#fashionitems');   
				   if(data.results.length > 1) {                    
                    $(".heading").text(dataTitle);
                    $(".mainheading").text(dataTitle);
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
                        
                        $('div[class^="ui-loader"]').hide();
                      
                                  
                        
                    }
				 
            }
            
             if(!data.results)
            {
				
			  alert('no results returned');
			
               
            }
        }
		
    });
      	

        
  },
    
     openKidsClothingRequest: function(eventData) { 
     var value = "rfapp_boys_clothing_sets";       
       var dataValue = "Clothing Sets";
      var currentpos = "#kids";
        window.sessionStorage.setItem('currentPage', currentpos);
        window.localStorage.setItem('queryString', value);
       window.localStorage.setItem('dataValue', dataValue);
                        $.mobile.loading( "show", {
  text: "Fetching " +dataValue,
  textVisible: true,
  theme: "b"
  
});

    var queryString = window.localStorage.getItem('queryString');
     var dataTitle = window.localStorage.getItem('dataValue');
    var itemString ="queryString="+queryString;   
       
    $.ajax({
        type: "POST",crossDomain: true, cache: false,
        url: 'https://reedfrog.com/api/app/womens-fashion.php',
        data: itemString,
		dataType:'JSON',  
         beforeSend: function(){ 
             
         },
		success: function(data){
            $(location).attr('href', '#fashionitems');   
				   if(data.results.length > 1) {                    
                    $(".heading").text(dataTitle);
                    $(".mainheading").text(dataTitle);
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
                        
                        $('div[class^="ui-loader"]').hide();
                      
                                  
                        
                    }
				 
            }
            
             if(!data.results)
            {
				
			  alert('no results returned');
			
               
            }
        }
		
    });
      	

        
  },        
    
    openWeddingGroomRequest: function(eventData) { 
     var value = "rfapp_mens_wedding";       
       var dataValue = "Weddding Groom";
      var currentpos = "#weddings";
        window.sessionStorage.setItem('currentPage', currentpos);
        window.localStorage.setItem('queryString', value);
       window.localStorage.setItem('dataValue', dataValue);
                        $.mobile.loading( "show", {
  text: "Fetching " +dataValue,
  textVisible: true,
  theme: "b"
  
});

    var queryString = window.localStorage.getItem('queryString');
     var dataTitle = window.localStorage.getItem('dataValue');
    var itemString ="queryString="+queryString;   
       
    $.ajax({
        type: "POST",crossDomain: true, cache: false,
        url: 'https://reedfrog.com/api/app/womens-fashion.php',
        data: itemString,
		dataType:'JSON',  
         beforeSend: function(){ 
             
         },
		success: function(data){
            $(location).attr('href', '#fashionitems');   
				   if(data.results.length > 1) {                    
                    $(".heading").text(dataTitle);
                    $(".mainheading").text(dataTitle);
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
                        
                        $('div[class^="ui-loader"]').hide();
                      
                                  
                        
                    }
				 
            }
            
             if(!data.results)
            {
				
			  alert('no results returned');
			
               
            }
        }
		
    });
      	

        
  },
    
     openMensJewelryRequest: function(eventData) { 
     var value = "rfapp_mens_wedding_jewelry";       
       var dataValue = "Men's Weddding Jewelry";
      var currentpos = "#weddings";
        window.sessionStorage.setItem('currentPage', currentpos);
        window.localStorage.setItem('queryString', value);
       window.localStorage.setItem('dataValue', dataValue);
                        $.mobile.loading( "show", {
  text: "Fetching " +dataValue,
  textVisible: true,
  theme: "b"
  
});

    var queryString = window.localStorage.getItem('queryString');
     var dataTitle = window.localStorage.getItem('dataValue');
    var itemString ="queryString="+queryString;   
       
    $.ajax({
        type: "POST",crossDomain: true, cache: false,
        url: 'https://reedfrog.com/api/app/womens-fashion.php',
        data: itemString,
		dataType:'JSON',  
         beforeSend: function(){ 
             
         },
		success: function(data){
            $(location).attr('href', '#fashionitems');   
				   if(data.results.length > 1) {                    
                    $(".heading").text(dataTitle);
                    $(".mainheading").text(dataTitle);
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
                        
                        $('div[class^="ui-loader"]').hide();
                      
                                  
                        
                    }
				 
            }
            
             if(!data.results)
            {
				
			  alert('no results returned');
			
               
            }
        }
		
    });
      	

        
  },
    
    openMenClothingRequest: function(eventData) { 
     var value = "rfapp_mens_wedding_clothing";       
       var dataValue = "Men's Clothing";
      var currentpos = "#weddings";
        window.sessionStorage.setItem('currentPage', currentpos);
        window.localStorage.setItem('queryString', value);
       window.localStorage.setItem('dataValue', dataValue);
                        $.mobile.loading( "show", {
  text: "Fetching " +dataValue,
  textVisible: true,
  theme: "b"
  
});

    var queryString = window.localStorage.getItem('queryString');
     var dataTitle = window.localStorage.getItem('dataValue');
    var itemString ="queryString="+queryString;   
       
    $.ajax({
        type: "POST",crossDomain: true, cache: false,
        url: 'https://reedfrog.com/api/app/womens-fashion.php',
        data: itemString,
		dataType:'JSON',  
         beforeSend: function(){ 
             
         },
		success: function(data){
            $(location).attr('href', '#fashionitems');   
				   if(data.results.length > 1) {                    
                    $(".heading").text(dataTitle);
                    $(".mainheading").text(dataTitle);
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
                        
                        $('div[class^="ui-loader"]').hide();
                      
                                  
                        
                    }
				 
            }
            
             if(!data.results)
            {
				
			  alert('no results returned');
			
               
            }
        }
		
    });
      	

        
  },
    
      openFlowerGirlsRequest: function(eventData) { 
     var value = "rfapp_flower_girls";       
       var dataValue = "Flower Girls";
      var currentpos = "#weddings";
        window.sessionStorage.setItem('currentPage', currentpos);
        window.localStorage.setItem('queryString', value);
       window.localStorage.setItem('dataValue', dataValue);
                        $.mobile.loading( "show", {
  text: "Fetching " +dataValue,
  textVisible: true,
  theme: "b"
  
});

    var queryString = window.localStorage.getItem('queryString');
     var dataTitle = window.localStorage.getItem('dataValue');
    var itemString ="queryString="+queryString;   
       
    $.ajax({
        type: "POST",crossDomain: true, cache: false,
        url: 'https://reedfrog.com/api/app/womens-fashion.php',
        data: itemString,
		dataType:'JSON',  
         beforeSend: function(){ 
             
         },
		success: function(data){
            $(location).attr('href', '#fashionitems');   
				   if(data.results.length > 1) {                    
                    $(".heading").text(dataTitle);
                    $(".mainheading").text(dataTitle);
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
                        
                        $('div[class^="ui-loader"]').hide();
                      
                                  
                        
                    }
				 
            }
            
             if(!data.results)
            {
				
			  alert('no results returned');
			
               
            }
        }
		
    });
      	

        
  },
    
       openWeddingShoesRequest: function(eventData) { 
     var value = "rfapp_wedding_shoes";       
       var dataValue = "Wedding Shoes";
      var currentpos = "#weddings";
        window.sessionStorage.setItem('currentPage', currentpos);
        window.localStorage.setItem('queryString', value);
       window.localStorage.setItem('dataValue', dataValue);
                        $.mobile.loading( "show", {
  text: "Fetching " +dataValue,
  textVisible: true,
  theme: "b"
  
});

    var queryString = window.localStorage.getItem('queryString');
     var dataTitle = window.localStorage.getItem('dataValue');
    var itemString ="queryString="+queryString;   
       
    $.ajax({
        type: "POST",crossDomain: true, cache: false,
        url: 'https://reedfrog.com/api/app/womens-fashion.php',
        data: itemString,
		dataType:'JSON',  
         beforeSend: function(){ 
             
         },
		success: function(data){
            $(location).attr('href', '#fashionitems');   
				   if(data.results.length > 1) {                    
                    $(".heading").text(dataTitle);
                    $(".mainheading").text(dataTitle);
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
                        
                        $('div[class^="ui-loader"]').hide();
                      
                                  
                        
                    }
				 
            }
            
             if(!data.results)
            {
				
			  alert('no results returned');
			
               
            }
        }
		
    });
      	

        
  },
    
     openWeddingMotherRequest: function(eventData) { 
     var value = "rfapp_mother_ot_bride";       
       var dataValue = "Mother of the Bride";
      var currentpos = "#weddings";
        window.sessionStorage.setItem('currentPage', currentpos);
        window.localStorage.setItem('queryString', value);
       window.localStorage.setItem('dataValue', dataValue);
                        $.mobile.loading( "show", {
  text: "Fetching " +dataValue,
  textVisible: true,
  theme: "b"
  
});

    var queryString = window.localStorage.getItem('queryString');
     var dataTitle = window.localStorage.getItem('dataValue');
    var itemString ="queryString="+queryString;   
       
    $.ajax({
        type: "POST",crossDomain: true, cache: false,
        url: 'https://reedfrog.com/api/app/womens-fashion.php',
        data: itemString,
		dataType:'JSON',  
         beforeSend: function(){ 
             
         },
		success: function(data){
            $(location).attr('href', '#fashionitems');   
				   if(data.results.length > 1) {                    
                    $(".heading").text(dataTitle);
                    $(".mainheading").text(dataTitle);
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
                        
                        $('div[class^="ui-loader"]').hide();
                      
                                  
                        
                    }
				 
            }
            
             if(!data.results)
            {
				
			  alert('no results returned');
			
               
            }
        }
		
    });
      	

        
  },
    
      openWeddingDressesRequest: function(eventData) { 
     var value = "rfapp_wedding_dresses";       
       var dataValue = "Wedding Dresses";
      var currentpos = "#weddings";
        window.sessionStorage.setItem('currentPage', currentpos);
        window.localStorage.setItem('queryString', value);
       window.localStorage.setItem('dataValue', dataValue);
                        $.mobile.loading( "show", {
  text: "Fetching " +dataValue,
  textVisible: true,
  theme: "b"
  
});

    var queryString = window.localStorage.getItem('queryString');
     var dataTitle = window.localStorage.getItem('dataValue');
    var itemString ="queryString="+queryString;   
       
    $.ajax({
        type: "POST",crossDomain: true, cache: false,
        url: 'https://reedfrog.com/api/app/womens-fashion.php',
        data: itemString,
		dataType:'JSON',  
         beforeSend: function(){ 
             
         },
		success: function(data){
            $(location).attr('href', '#fashionitems');   
				   if(data.results.length > 1) {                    
                    $(".heading").text(dataTitle);
                    $(".mainheading").text(dataTitle);
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
                        
                        $('div[class^="ui-loader"]').hide();
                      
                                  
                        
                    }
				 
            }
            
             if(!data.results)
            {
				
			  alert('no results returned');
			
               
            }
        }
		
    });
      	

        
  },
    
     openWeddingAccessoriesRequest: function(eventData) { 
     var value = "rfapp_wedding_accessories";       
       var dataValue = "Wedding Accessories";
      var currentpos = "#weddings";
        window.sessionStorage.setItem('currentPage', currentpos);
        window.localStorage.setItem('queryString', value);
       window.localStorage.setItem('dataValue', dataValue);
                        $.mobile.loading( "show", {
  text: "Fetching " +dataValue,
  textVisible: true,
  theme: "b"
  
});

    var queryString = window.localStorage.getItem('queryString');
     var dataTitle = window.localStorage.getItem('dataValue');
    var itemString ="queryString="+queryString;   
       
    $.ajax({
        type: "POST",crossDomain: true, cache: false,
        url: 'https://reedfrog.com/api/app/womens-fashion.php',
        data: itemString,
		dataType:'JSON',  
         beforeSend: function(){ 
             
         },
		success: function(data){
            $(location).attr('href', '#fashionitems');   
				   if(data.results.length > 1) {                    
                    $(".heading").text(dataTitle);
                    $(".mainheading").text(dataTitle);
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
                        
                        $('div[class^="ui-loader"]').hide();
                      
                                  
                        
                    }
				 
            }
            
             if(!data.results)
            {
				
			  alert('no results returned');
			
               
            }
        }
		
    });
      	

        
  },
    
     openMensUnderwearRequest: function(eventData) { 
     var value = "rfapp_mens_underwear";       
       var dataValue = "Men's Underwear";
      var currentpos = "#men";
        window.sessionStorage.setItem('currentPage', currentpos);
        window.localStorage.setItem('queryString', value);
       window.localStorage.setItem('dataValue', dataValue);
                        $.mobile.loading( "show", {
  text: "Fetching " +dataValue,
  textVisible: true,
  theme: "b"
  
});

    var queryString = window.localStorage.getItem('queryString');
     var dataTitle = window.localStorage.getItem('dataValue');
    var itemString ="queryString="+queryString;   
       
    $.ajax({
        type: "POST",crossDomain: true, cache: false,
        url: 'https://reedfrog.com/api/app/womens-fashion.php',
        data: itemString,
		dataType:'JSON',  
         beforeSend: function(){ 
             
         },
		success: function(data){
            $(location).attr('href', '#fashionitems');   
				   if(data.results.length > 1) {                    
                    $(".heading").text(dataTitle);
                    $(".mainheading").text(dataTitle);
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
                        
                        $('div[class^="ui-loader"]').hide();
                      
                                  
                        
                    }
				 
            }
            
             if(!data.results)
            {
				
			  alert('no results returned');
			
               
            }
        }
		
    });
      	

        
  },
    
     openMensSwimwearRequest: function(eventData) { 
     var value = "rfapp_mens_swimwear";       
       var dataValue = "Men's Swimwear";
      var currentpos = "#men";
        window.sessionStorage.setItem('currentPage', currentpos);
        window.localStorage.setItem('queryString', value);
       window.localStorage.setItem('dataValue', dataValue);
                        $.mobile.loading( "show", {
  text: "Fetching " +dataValue,
  textVisible: true,
  theme: "b"
  
});

    var queryString = window.localStorage.getItem('queryString');
     var dataTitle = window.localStorage.getItem('dataValue');
    var itemString ="queryString="+queryString;   
       
    $.ajax({
        type: "POST",crossDomain: true, cache: false,
        url: 'https://reedfrog.com/api/app/womens-fashion.php',
        data: itemString,
		dataType:'JSON',  
         beforeSend: function(){ 
             
         },
		success: function(data){
            $(location).attr('href', '#fashionitems');   
				   if(data.results.length > 1) {                    
                    $(".heading").text(dataTitle);
                    $(".mainheading").text(dataTitle);
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
                        
                        $('div[class^="ui-loader"]').hide();
                      
                                  
                        
                    }
				 
            }
            
             if(!data.results)
            {
				
			  alert('no results returned');
			
               
            }
        }
		
    });
      	

        
  },
    
      openMensShirtsRequest: function(eventData) { 
     var value = "rfapp_mens_shirts";       
       var dataValue = "Men's Shirts";
      var currentpos = "#men";
        window.sessionStorage.setItem('currentPage', currentpos);
        window.localStorage.setItem('queryString', value);
       window.localStorage.setItem('dataValue', dataValue);
                        $.mobile.loading( "show", {
  text: "Fetching " +dataValue,
  textVisible: true,
  theme: "b"
  
});

    var queryString = window.localStorage.getItem('queryString');
     var dataTitle = window.localStorage.getItem('dataValue');
    var itemString ="queryString="+queryString;   
       
    $.ajax({
        type: "POST",crossDomain: true, cache: false,
        url: 'https://reedfrog.com/api/app/womens-fashion.php',
        data: itemString,
		dataType:'JSON',  
         beforeSend: function(){ 
             
         },
		success: function(data){
            $(location).attr('href', '#fashionitems');   
				   if(data.results.length > 1) {                    
                    $(".heading").text(dataTitle);
                    $(".mainheading").text(dataTitle);
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
                        
                        $('div[class^="ui-loader"]').hide();
                      
                                  
                        
                    }
				 
            }
            
             if(!data.results)
            {
				
			  alert('no results returned');
			
               
            }
        }
		
    });
      	

        
  },
    
        openMensRompersRequest: function(eventData) { 
     var value = "rfapp_mens_rompers";       
       var dataValue = "Men's Rompers";
      var currentpos = "#men";
        window.sessionStorage.setItem('currentPage', currentpos);
        window.localStorage.setItem('queryString', value);
       window.localStorage.setItem('dataValue', dataValue);
                        $.mobile.loading( "show", {
  text: "Fetching " +dataValue,
  textVisible: true,
  theme: "b"
  
});

    var queryString = window.localStorage.getItem('queryString');
     var dataTitle = window.localStorage.getItem('dataValue');
    var itemString ="queryString="+queryString;   
       
    $.ajax({
        type: "POST",crossDomain: true, cache: false,
        url: 'https://reedfrog.com/api/app/womens-fashion.php',
        data: itemString,
		dataType:'JSON',  
         beforeSend: function(){ 
             
         },
		success: function(data){
            $(location).attr('href', '#fashionitems');   
				   if(data.results.length > 1) {                    
                    $(".heading").text(dataTitle);
                    $(".mainheading").text(dataTitle);
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
                        
                        $('div[class^="ui-loader"]').hide();
                      
                                  
                        
                    }
				 
            }
            
             if(!data.results)
            {
				
			  alert('no results returned');
			
               
            }
        }
		
    });
      	

        
  },
    
       openMensPolosRequest: function(eventData) { 
     var value = "rfapp_mens_polos";       
       var dataValue = "Polos & Tees";
      var currentpos = "#men";
        window.sessionStorage.setItem('currentPage', currentpos);
        window.localStorage.setItem('queryString', value);
       window.localStorage.setItem('dataValue', dataValue);
                        $.mobile.loading( "show", {
  text: "Fetching " +dataValue,
  textVisible: true,
  theme: "b"
  
});

    var queryString = window.localStorage.getItem('queryString');
     var dataTitle = window.localStorage.getItem('dataValue');
    var itemString ="queryString="+queryString;   
       
    $.ajax({
        type: "POST",crossDomain: true, cache: false,
        url: 'https://reedfrog.com/api/app/womens-fashion.php',
        data: itemString,
		dataType:'JSON',  
         beforeSend: function(){ 
             
         },
		success: function(data){
            $(location).attr('href', '#fashionitems');   
				   if(data.results.length > 1) {                    
                    $(".heading").text(dataTitle);
                    $(".mainheading").text(dataTitle);
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
                        
                        $('div[class^="ui-loader"]').hide();
                      
                                  
                        
                    }
				 
            }
            
             if(!data.results)
            {
				
			  alert('no results returned');
			
               
            }
        }
		
    });
      	

        
  },
    
       openMensParkasRequest: function(eventData) { 
     var value = "rfapp_mens_parkas";       
       var dataValue = "Men's Parkas";
      var currentpos = "#men";
        window.sessionStorage.setItem('currentPage', currentpos);
        window.localStorage.setItem('queryString', value);
       window.localStorage.setItem('dataValue', dataValue);
                        $.mobile.loading( "show", {
  text: "Fetching " +dataValue,
  textVisible: true,
  theme: "b"
  
});

    var queryString = window.localStorage.getItem('queryString');
     var dataTitle = window.localStorage.getItem('dataValue');
    var itemString ="queryString="+queryString;   
       
    $.ajax({
        type: "POST",crossDomain: true, cache: false,
        url: 'https://reedfrog.com/api/app/womens-fashion.php',
        data: itemString,
		dataType:'JSON',  
         beforeSend: function(){ 
             
         },
		success: function(data){
            $(location).attr('href', '#fashionitems');   
				   if(data.results.length > 1) {                    
                    $(".heading").text(dataTitle);
                    $(".mainheading").text(dataTitle);
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
                        
                        $('div[class^="ui-loader"]').hide();
                      
                                  
                        
                    }
				 
            }
            
             if(!data.results)
            {
				
			  alert('no results returned');
			
               
            }
        }
		
    });
      	

        
  },
    
      openMensPantsRequest: function(eventData) { 
     var value = "rfapp_mens_pants";       
       var dataValue = "Pants & Shorts";
      var currentpos = "#men";
        window.sessionStorage.setItem('currentPage', currentpos);
        window.localStorage.setItem('queryString', value);
       window.localStorage.setItem('dataValue', dataValue);
                        $.mobile.loading( "show", {
  text: "Fetching " +dataValue,
  textVisible: true,
  theme: "b"
  
});

    var queryString = window.localStorage.getItem('queryString');
     var dataTitle = window.localStorage.getItem('dataValue');
    var itemString ="queryString="+queryString;   
       
    $.ajax({
        type: "POST",crossDomain: true, cache: false,
        url: 'https://reedfrog.com/api/app/womens-fashion.php',
        data: itemString,
		dataType:'JSON',  
         beforeSend: function(){ 
             
         },
		success: function(data){
            $(location).attr('href', '#fashionitems');   
				   if(data.results.length > 1) {                    
                    $(".heading").text(dataTitle);
                    $(".mainheading").text(dataTitle);
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
                        
                        $('div[class^="ui-loader"]').hide();
                      
                                  
                        
                    }
				 
            }
            
             if(!data.results)
            {
				
			  alert('no results returned');
			
               
            }
        }
		
    });
      	

        
  },
    
    openMensJacketsRequest: function(eventData) { 
     var value = "rfapp_mens_jackets";       
       var dataValue = "jackets & Coats";
      var currentpos = "#men";
        window.sessionStorage.setItem('currentPage', currentpos);
        window.localStorage.setItem('queryString', value);
       window.localStorage.setItem('dataValue', dataValue);
                        $.mobile.loading( "show", {
  text: "Fetching " +dataValue,
  textVisible: true,
  theme: "b"
  
});

    var queryString = window.localStorage.getItem('queryString');
     var dataTitle = window.localStorage.getItem('dataValue');
    var itemString ="queryString="+queryString;   
       
    $.ajax({
        type: "POST",crossDomain: true, cache: false,
        url: 'https://reedfrog.com/api/app/womens-fashion.php',
        data: itemString,
		dataType:'JSON',  
         beforeSend: function(){ 
             
         },
		success: function(data){
            $(location).attr('href', '#fashionitems');   
				   if(data.results.length > 1) {                    
                    $(".heading").text(dataTitle);
                    $(".mainheading").text(dataTitle);
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
                        
                        $('div[class^="ui-loader"]').hide();
                      
                                  
                        
                    }
				 
            }
            
             if(!data.results)
            {
				
			  alert('no results returned');
			
               
            }
        }
		
    });
      	

        
  },
    
     openMensHoodiesRequest: function(eventData) { 
     var value = "rfapp_mens_hoodies";       
       var dataValue = "Hoodies & Sweatshirts";
      var currentpos = "#men";
        window.sessionStorage.setItem('currentPage', currentpos);
        window.localStorage.setItem('queryString', value);
       window.localStorage.setItem('dataValue', dataValue);
                        $.mobile.loading( "show", {
  text: "Fetching " +dataValue,
  textVisible: true,
  theme: "b"
  
});

    var queryString = window.localStorage.getItem('queryString');
     var dataTitle = window.localStorage.getItem('dataValue');
    var itemString ="queryString="+queryString;   
       
    $.ajax({
        type: "POST",crossDomain: true, cache: false,
        url: 'https://reedfrog.com/api/app/womens-fashion.php',
        data: itemString,
		dataType:'JSON',  
         beforeSend: function(){ 
             
         },
		success: function(data){
            $(location).attr('href', '#fashionitems');   
				   if(data.results.length > 1) {                    
                    $(".heading").text(dataTitle);
                    $(".mainheading").text(dataTitle);
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
                        
                        $('div[class^="ui-loader"]').hide();
                      
                                  
                        
                    }
				 
            }
            
             if(!data.results)
            {
				
			  alert('no results returned');
			
               
            }
        }
		
    });
      	

        
  },
    
     openMensWatersportsRequest: function(eventData) { 
     var value = "rfapp_mens_waterspors";       
       var dataValue = "Watersports";
      var currentpos = "#men";
        window.sessionStorage.setItem('currentPage', currentpos);
        window.localStorage.setItem('queryString', value);
       window.localStorage.setItem('dataValue', dataValue);
                        $.mobile.loading( "show", {
  text: "Fetching " +dataValue,
  textVisible: true,
  theme: "b"
  
});

    var queryString = window.localStorage.getItem('queryString');
     var dataTitle = window.localStorage.getItem('dataValue');
    var itemString ="queryString="+queryString;   
       
    $.ajax({
        type: "POST",crossDomain: true, cache: false,
        url: 'https://reedfrog.com/api/app/womens-fashion.php',
        data: itemString,
		dataType:'JSON',  
         beforeSend: function(){ 
             
         },
		success: function(data){
            $(location).attr('href', '#fashionitems');   
				   if(data.results.length > 1) {                    
                    $(".heading").text(dataTitle);
                    $(".mainheading").text(dataTitle);
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
                        
                        $('div[class^="ui-loader"]').hide();
                      
                                  
                        
                    }
				 
            }
            
             if(!data.results)
            {
				
			  alert('no results returned');
			
               
            }
        }
		
    });
      	

        
  },
    
    openMensSkiingRequest: function(eventData) { 
     var value = "rfapp_mens_skiing_skating";       
       var dataValue = "Skiing & Skating";
      var currentpos = "#men";
        window.sessionStorage.setItem('currentPage', currentpos);
        window.localStorage.setItem('queryString', value);
       window.localStorage.setItem('dataValue', dataValue);
                        $.mobile.loading( "show", {
  text: "Fetching " +dataValue,
  textVisible: true,
  theme: "b"
  
});

    var queryString = window.localStorage.getItem('queryString');
     var dataTitle = window.localStorage.getItem('dataValue');
    var itemString ="queryString="+queryString;   
       
    $.ajax({
        type: "POST",crossDomain: true, cache: false,
        url: 'https://reedfrog.com/api/app/womens-fashion.php',
        data: itemString,
		dataType:'JSON',  
         beforeSend: function(){ 
             
         },
		success: function(data){
            $(location).attr('href', '#fashionitems');   
				   if(data.results.length > 1) {                    
                    $(".heading").text(dataTitle);
                    $(".mainheading").text(dataTitle);
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
                        
                        $('div[class^="ui-loader"]').hide();
                      
                                  
                        
                    }
				 
            }
            
             if(!data.results)
            {
				
			  alert('no results returned');
			
               
            }
        }
		
    });
      	

        
  },
    
       openMensHuntingGearRequest: function(eventData) { 
     var value = "rfapp_mens_hunting";       
       var dataValue = "Hunting Gear";
      var currentpos = "#men";
        window.sessionStorage.setItem('currentPage', currentpos);
        window.localStorage.setItem('queryString', value);
       window.localStorage.setItem('dataValue', dataValue);
                        $.mobile.loading( "show", {
  text: "Fetching " +dataValue,
  textVisible: true,
  theme: "b"
  
});

    var queryString = window.localStorage.getItem('queryString');
     var dataTitle = window.localStorage.getItem('dataValue');
    var itemString ="queryString="+queryString;   
       
    $.ajax({
        type: "POST",crossDomain: true, cache: false,
        url: 'https://reedfrog.com/api/app/womens-fashion.php',
        data: itemString,
		dataType:'JSON',  
         beforeSend: function(){ 
             
         },
		success: function(data){
            $(location).attr('href', '#fashionitems');   
				   if(data.results.length > 1) {                    
                    $(".heading").text(dataTitle);
                    $(".mainheading").text(dataTitle);
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
                        
                        $('div[class^="ui-loader"]').hide();
                      
                                  
                        
                    }
				 
            }
            
             if(!data.results)
            {
				
			  alert('no results returned');
			
               
            }
        }
		
    });
      	

        
  },
    
      openMensHikingTeesRequest: function(eventData) { 
     var value = "rfapp_hiking_tees";       
       var dataValue = "Hiking Tees";
      var currentpos = "#men";
        window.sessionStorage.setItem('currentPage', currentpos);
        window.localStorage.setItem('queryString', value);
       window.localStorage.setItem('dataValue', dataValue);
                        $.mobile.loading( "show", {
  text: "Fetching " +dataValue,
  textVisible: true,
  theme: "b"
  
});

    var queryString = window.localStorage.getItem('queryString');
     var dataTitle = window.localStorage.getItem('dataValue');
    var itemString ="queryString="+queryString;   
       
    $.ajax({
        type: "POST",crossDomain: true, cache: false,
        url: 'https://reedfrog.com/api/app/womens-fashion.php',
        data: itemString,
		dataType:'JSON',  
         beforeSend: function(){ 
             
         },
		success: function(data){
            $(location).attr('href', '#fashionitems');   
				   if(data.results.length > 1) {                    
                    $(".heading").text(dataTitle);
                    $(".mainheading").text(dataTitle);
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
                        
                        $('div[class^="ui-loader"]').hide();
                      
                                  
                        
                    }
				 
            }
            
             if(!data.results)
            {
				
			  alert('no results returned');
			
               
            }
        }
		
    });
      	

        
  },
    
      openMensHikingShoesRequest: function(eventData) { 
     var value = "rfapp_hiking_shoes";       
       var dataValue = "Hiking Shoes";
      var currentpos = "#men";
        window.sessionStorage.setItem('currentPage', currentpos);
        window.localStorage.setItem('queryString', value);
       window.localStorage.setItem('dataValue', dataValue);
                        $.mobile.loading( "show", {
  text: "Fetching " +dataValue,
  textVisible: true,
  theme: "b"
  
});

    var queryString = window.localStorage.getItem('queryString');
     var dataTitle = window.localStorage.getItem('dataValue');
    var itemString ="queryString="+queryString;   
       
    $.ajax({
        type: "POST",crossDomain: true, cache: false,
        url: 'https://reedfrog.com/api/app/womens-fashion.php',
        data: itemString,
		dataType:'JSON',  
         beforeSend: function(){ 
             
         },
		success: function(data){
            $(location).attr('href', '#fashionitems');   
				   if(data.results.length > 1) {                    
                    $(".heading").text(dataTitle);
                    $(".mainheading").text(dataTitle);
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
                        
                        $('div[class^="ui-loader"]').hide();
                      
                                  
                        
                    }
				 
            }
            
             if(!data.results)
            {
				
			  alert('no results returned');
			
               
            }
        }
		
    });
      	

        
  },
    
     openMensHikingPantsRequest: function(eventData) { 
     var value = "rfapp_hiking_pants";       
       var dataValue = "Hiking Pants";
      var currentpos = "#men";
        window.sessionStorage.setItem('currentPage', currentpos);
        window.localStorage.setItem('queryString', value);
       window.localStorage.setItem('dataValue', dataValue);
                        $.mobile.loading( "show", {
  text: "Fetching " +dataValue,
  textVisible: true,
  theme: "b"
  
});

    var queryString = window.localStorage.getItem('queryString');
     var dataTitle = window.localStorage.getItem('dataValue');
    var itemString ="queryString="+queryString;   
       
    $.ajax({
        type: "POST",crossDomain: true, cache: false,
        url: 'https://reedfrog.com/api/app/womens-fashion.php',
        data: itemString,
		dataType:'JSON',  
         beforeSend: function(){ 
             
         },
		success: function(data){
            $(location).attr('href', '#fashionitems');   
				   if(data.results.length > 1) {                    
                    $(".heading").text(dataTitle);
                    $(".mainheading").text(dataTitle);
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
                        
                        $('div[class^="ui-loader"]').hide();
                      
                                  
                        
                    }
				 
            }
            
             if(!data.results)
            {
				
			  alert('no results returned');
			
               
            }
        }
		
    });
      	

        
  },
    
    openMensHikingJacketsRequest: function(eventData) { 
     var value = "rfapp_hiking_jackets";       
       var dataValue = "Hiking Jackets";
      var currentpos = "#men";
        window.sessionStorage.setItem('currentPage', currentpos);
        window.localStorage.setItem('queryString', value);
       window.localStorage.setItem('dataValue', dataValue);
                        $.mobile.loading( "show", {
  text: "Fetching " +dataValue,
  textVisible: true,
  theme: "b"
  
});

    var queryString = window.localStorage.getItem('queryString');
     var dataTitle = window.localStorage.getItem('dataValue');
    var itemString ="queryString="+queryString;   
       
    $.ajax({
        type: "POST",crossDomain: true, cache: false,
        url: 'https://reedfrog.com/api/app/womens-fashion.php',
        data: itemString,
		dataType:'JSON',  
         beforeSend: function(){ 
             
         },
		success: function(data){
            $(location).attr('href', '#fashionitems');   
				   if(data.results.length > 1) {                    
                    $(".heading").text(dataTitle);
                    $(".mainheading").text(dataTitle);
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
                        
                        $('div[class^="ui-loader"]').hide();
                      
                                  
                        
                    }
				 
            }
            
             if(!data.results)
            {
				
			  alert('no results returned');
			
               
            }
        }
		
    });
      	

        
  },
    
      openMensGolfRequest: function(eventData) { 
     var value = "rfapp_mens_golf";       
       var dataValue = "Golf Gear";
      var currentpos = "#men";
        window.sessionStorage.setItem('currentPage', currentpos);
        window.localStorage.setItem('queryString', value);
       window.localStorage.setItem('dataValue', dataValue);
                        $.mobile.loading( "show", {
  text: "Fetching " +dataValue,
  textVisible: true,
  theme: "b"
  
});

    var queryString = window.localStorage.getItem('queryString');
     var dataTitle = window.localStorage.getItem('dataValue');
    var itemString ="queryString="+queryString;   
       
    $.ajax({
        type: "POST",crossDomain: true, cache: false,
        url: 'https://reedfrog.com/api/app/womens-fashion.php',
        data: itemString,
		dataType:'JSON',  
         beforeSend: function(){ 
             
         },
		success: function(data){
            $(location).attr('href', '#fashionitems');   
				   if(data.results.length > 1) {                    
                    $(".heading").text(dataTitle);
                    $(".mainheading").text(dataTitle);
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
                        
                        $('div[class^="ui-loader"]').hide();
                      
                                  
                        
                    }
				 
            }
            
             if(!data.results)
            {
				
			  alert('no results returned');
			
               
            }
        }
		
    });
      	

        
  },
    
     openMensFishingRequest: function(eventData) { 
     var value = "rfapp_mens_fishing";       
       var dataValue = "Fishing Gear";
      var currentpos = "#men";
        window.sessionStorage.setItem('currentPage', currentpos);
        window.localStorage.setItem('queryString', value);
       window.localStorage.setItem('dataValue', dataValue);
                        $.mobile.loading( "show", {
  text: "Fetching " +dataValue,
  textVisible: true,
  theme: "b"
  
});

    var queryString = window.localStorage.getItem('queryString');
     var dataTitle = window.localStorage.getItem('dataValue');
    var itemString ="queryString="+queryString;   
       
    $.ajax({
        type: "POST",crossDomain: true, cache: false,
        url: 'https://reedfrog.com/api/app/womens-fashion.php',
        data: itemString,
		dataType:'JSON',  
         beforeSend: function(){ 
             
         },
		success: function(data){
            $(location).attr('href', '#fashionitems');   
				   if(data.results.length > 1) {                    
                    $(".heading").text(dataTitle);
                    $(".mainheading").text(dataTitle);
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
                        
                        $('div[class^="ui-loader"]').hide();
                      
                                  
                        
                    }
				 
            }
            
             if(!data.results)
            {
				
			  alert('no results returned');
			
               
            }
        }
		
    });
      	

        
  },
    
    openMensCyclingShoesRequest: function(eventData) { 
     var value = "rfapp_mens_cycling_shoes";       
       var dataValue = "Cycling Shoes";
      var currentpos = "#men";
        window.sessionStorage.setItem('currentPage', currentpos);
        window.localStorage.setItem('queryString', value);
       window.localStorage.setItem('dataValue', dataValue);
                        $.mobile.loading( "show", {
  text: "Fetching " +dataValue,
  textVisible: true,
  theme: "b"
  
});

    var queryString = window.localStorage.getItem('queryString');
     var dataTitle = window.localStorage.getItem('dataValue');
    var itemString ="queryString="+queryString;   
       
    $.ajax({
        type: "POST",crossDomain: true, cache: false,
        url: 'https://reedfrog.com/api/app/womens-fashion.php',
        data: itemString,
		dataType:'JSON',  
         beforeSend: function(){ 
             
         },
		success: function(data){
            $(location).attr('href', '#fashionitems');   
				   if(data.results.length > 1) {                    
                    $(".heading").text(dataTitle);
                    $(".mainheading").text(dataTitle);
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
                        
                        $('div[class^="ui-loader"]').hide();
                      
                                  
                        
                    }
				 
            }
            
             if(!data.results)
            {
				
			  alert('no results returned');
			
               
            }
        }
		
    });
      	

        
  },
    
    openMensCyclingRequest: function(eventData) { 
     var value = "rfapp_mens_cycling";       
       var dataValue = "Cycling Clothing";
      var currentpos = "#men";
        window.sessionStorage.setItem('currentPage', currentpos);
        window.localStorage.setItem('queryString', value);
       window.localStorage.setItem('dataValue', dataValue);
                        $.mobile.loading( "show", {
  text: "Fetching " +dataValue,
  textVisible: true,
  theme: "b"
  
});

    var queryString = window.localStorage.getItem('queryString');
     var dataTitle = window.localStorage.getItem('dataValue');
    var itemString ="queryString="+queryString;   
       
    $.ajax({
        type: "POST",crossDomain: true, cache: false,
        url: 'https://reedfrog.com/api/app/womens-fashion.php',
        data: itemString,
		dataType:'JSON',  
         beforeSend: function(){ 
             
         },
		success: function(data){
            $(location).attr('href', '#fashionitems');   
				   if(data.results.length > 1) {                    
                    $(".heading").text(dataTitle);
                    $(".mainheading").text(dataTitle);
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
                        
                        $('div[class^="ui-loader"]').hide();
                      
                                  
                        
                    }
				 
            }
            
             if(!data.results)
            {
				
			  alert('no results returned');
			
               
            }
        }
		
    });
      	

        
  },
    
     openMensActiveWearRequest: function(eventData) { 
     var value = "rfapp_mens_activewear";       
       var dataValue = "Men's Activewear";
      var currentpos = "#men";
        window.sessionStorage.setItem('currentPage', currentpos);
        window.localStorage.setItem('queryString', value);
       window.localStorage.setItem('dataValue', dataValue);
                        $.mobile.loading( "show", {
  text: "Fetching " +dataValue,
  textVisible: true,
  theme: "b"
  
});

    var queryString = window.localStorage.getItem('queryString');
     var dataTitle = window.localStorage.getItem('dataValue');
    var itemString ="queryString="+queryString;   
       
    $.ajax({
        type: "POST",crossDomain: true, cache: false,
        url: 'https://reedfrog.com/api/app/womens-fashion.php',
        data: itemString,
		dataType:'JSON',  
         beforeSend: function(){ 
             
         },
		success: function(data){
            $(location).attr('href', '#fashionitems');   
				   if(data.results.length > 1) {                    
                    $(".heading").text(dataTitle);
                    $(".mainheading").text(dataTitle);
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
                        
                        $('div[class^="ui-loader"]').hide();
                      
                                  
                        
                    }
				 
            }
            
             if(!data.results)
            {
				
			  alert('no results returned');
			
               
            }
        }
		
    });
      	

        
  },
    
     openMensWatchesRequest: function(eventData) { 
     var value = "rfapp_mens_jewelry";       
       var dataValue = "Men's Watches";
      var currentpos = "#men";
        window.sessionStorage.setItem('currentPage', currentpos);
        window.localStorage.setItem('queryString', value);
       window.localStorage.setItem('dataValue', dataValue);
                        $.mobile.loading( "show", {
  text: "Fetching " +dataValue,
  textVisible: true,
  theme: "b"
  
});

    var queryString = window.localStorage.getItem('queryString');
     var dataTitle = window.localStorage.getItem('dataValue');
    var itemString ="queryString="+queryString;   
       
    $.ajax({
        type: "POST",crossDomain: true, cache: false,
        url: 'https://reedfrog.com/api/app/womens-fashion.php',
        data: itemString,
		dataType:'JSON',  
         beforeSend: function(){ 
             
         },
		success: function(data){
            $(location).attr('href', '#fashionitems');   
				   if(data.results.length > 1) {                    
                    $(".heading").text(dataTitle);
                    $(".mainheading").text(dataTitle);
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
                        
                        $('div[class^="ui-loader"]').hide();
                      
                                  
                        
                    }
				 
            }
            
             if(!data.results)
            {
				
			  alert('no results returned');
			
               
            }
        }
		
    });
      	

        
  },
    
     openMensTiesRequest: function(eventData) { 
     var value = "rfapp_mens_ties";       
       var dataValue = "Ties & Bowties";
      var currentpos = "#men";
        window.sessionStorage.setItem('currentPage', currentpos);
        window.localStorage.setItem('queryString', value);
       window.localStorage.setItem('dataValue', dataValue);
                        $.mobile.loading( "show", {
  text: "Fetching " +dataValue,
  textVisible: true,
  theme: "b"
  
});

    var queryString = window.localStorage.getItem('queryString');
     var dataTitle = window.localStorage.getItem('dataValue');
    var itemString ="queryString="+queryString;   
       
    $.ajax({
        type: "POST",crossDomain: true, cache: false,
        url: 'https://reedfrog.com/api/app/womens-fashion.php',
        data: itemString,
		dataType:'JSON',  
         beforeSend: function(){ 
             
         },
		success: function(data){
            $(location).attr('href', '#fashionitems');   
				   if(data.results.length > 1) {                    
                    $(".heading").text(dataTitle);
                    $(".mainheading").text(dataTitle);
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
                        
                        $('div[class^="ui-loader"]').hide();
                      
                                  
                        
                    }
				 
            }
            
             if(!data.results)
            {
				
			  alert('no results returned');
			
               
            }
        }
		
    });
      	

        
  },
    
    openMensShoesRequest: function(eventData) { 
     var value = "rfapp_mens_shoes";       
       var dataValue = "Bags & Shoes";
      var currentpos = "#men";
        window.sessionStorage.setItem('currentPage', currentpos);
        window.localStorage.setItem('queryString', value);
       window.localStorage.setItem('dataValue', dataValue);
                        $.mobile.loading( "show", {
  text: "Fetching " +dataValue,
  textVisible: true,
  theme: "b"
  
});

    var queryString = window.localStorage.getItem('queryString');
     var dataTitle = window.localStorage.getItem('dataValue');
    var itemString ="queryString="+queryString;   
       
    $.ajax({
        type: "POST",crossDomain: true, cache: false,
        url: 'https://reedfrog.com/api/app/womens-fashion.php',
        data: itemString,
		dataType:'JSON',  
         beforeSend: function(){ 
             
         },
		success: function(data){
            $(location).attr('href', '#fashionitems');   
				   if(data.results.length > 1) {                    
                    $(".heading").text(dataTitle);
                    $(".mainheading").text(dataTitle);
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
                        
                        $('div[class^="ui-loader"]').hide();
                      
                                  
                        
                    }
				 
            }
            
             if(!data.results)
            {
				
			  alert('no results returned');
			
               
            }
        }
		
    });
      	

        
  },
    
     openMensHatsRequest: function(eventData) { 
     var value = "rfapp_mens_hats";       
       var dataValue = "Me's Hats";
      var currentpos = "#men";
        window.sessionStorage.setItem('currentPage', currentpos);
        window.localStorage.setItem('queryString', value);
       window.localStorage.setItem('dataValue', dataValue);
                        $.mobile.loading( "show", {
  text: "Fetching " +dataValue,
  textVisible: true,
  theme: "b"
  
});

    var queryString = window.localStorage.getItem('queryString');
     var dataTitle = window.localStorage.getItem('dataValue');
    var itemString ="queryString="+queryString;   
       
    $.ajax({
        type: "POST",crossDomain: true, cache: false,
        url: 'https://reedfrog.com/api/app/womens-fashion.php',
        data: itemString,
		dataType:'JSON',  
         beforeSend: function(){ 
             
         },
		success: function(data){
            $(location).attr('href', '#fashionitems');   
				   if(data.results.length > 1) {                    
                    $(".heading").text(dataTitle);
                    $(".mainheading").text(dataTitle);
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
                        
                        $('div[class^="ui-loader"]').hide();
                      
                                  
                        
                    }
				 
            }
            
             if(!data.results)
            {
				
			  alert('no results returned');
			
               
            }
        }
		
    });
      	

        
  },
    
    openMensAccessoriesRequest: function(eventData) { 
     var value = "rfapp_mens_accessories";       
       var dataValue = "Accessories";
      var currentpos = "#men";
        window.sessionStorage.setItem('currentPage', currentpos);
        window.localStorage.setItem('queryString', value);
       window.localStorage.setItem('dataValue', dataValue);
                        $.mobile.loading( "show", {
  text: "Fetching " +dataValue,
  textVisible: true,
  theme: "b"
  
});

    var queryString = window.localStorage.getItem('queryString');
     var dataTitle = window.localStorage.getItem('dataValue');
    var itemString ="queryString="+queryString;   
       
    $.ajax({
        type: "POST",crossDomain: true, cache: false,
        url: 'https://reedfrog.com/api/app/womens-fashion.php',
        data: itemString,
		dataType:'JSON',  
         beforeSend: function(){ 
             
         },
		success: function(data){
            $(location).attr('href', '#fashionitems');   
				   if(data.results.length > 1) {                    
                    $(".heading").text(dataTitle);
                    $(".mainheading").text(dataTitle);
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
                        
                        $('div[class^="ui-loader"]').hide();
                      
                                  
                        
                    }
				 
            }
            
             if(!data.results)
            {
				
			  alert('no results returned');
			
               
            }
        }
		
    });
      	

        
  },
    
    openMensBeltsRequest: function(eventData) { 
     var value = "rfapp_mens_belts";       
       var dataValue = "Belts & Gloves";
      var currentpos = "#men";
        window.sessionStorage.setItem('currentPage', currentpos);
        window.localStorage.setItem('queryString', value);
       window.localStorage.setItem('dataValue', dataValue);
                        $.mobile.loading( "show", {
  text: "Fetching " +dataValue,
  textVisible: true,
  theme: "b"
  
});

    var queryString = window.localStorage.getItem('queryString');
     var dataTitle = window.localStorage.getItem('dataValue');
    var itemString ="queryString="+queryString;   
       
    $.ajax({
        type: "POST",crossDomain: true, cache: false,
        url: 'https://reedfrog.com/api/app/womens-fashion.php',
        data: itemString,
		dataType:'JSON',  
         beforeSend: function(){ 
             
         },
		success: function(data){
            $(location).attr('href', '#fashionitems');   
				   if(data.results.length > 1) {                    
                    $(".heading").text(dataTitle);
                    $(".mainheading").text(dataTitle);
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
                        
                        $('div[class^="ui-loader"]').hide();
                      
                                  
                        
                    }
				 
            }
            
             if(!data.results)
            {
				
			  alert('no results returned');
			
               
            }
        }
		
    });
      	

        
  },
    
     opemWomensTopsRequest: function(eventData) { 
     var value = "rfapp_womens_tops";       
       var dataValue = "Women's Tops";
      var currentpos = "#women";
        window.sessionStorage.setItem('currentPage', currentpos);
        window.localStorage.setItem('queryString', value);
       window.localStorage.setItem('dataValue', dataValue);
                        $.mobile.loading( "show", {
  text: "Fetching " +dataValue,
  textVisible: true,
  theme: "b"
  
});

    var queryString = window.localStorage.getItem('queryString');
     var dataTitle = window.localStorage.getItem('dataValue');
    var itemString ="queryString="+queryString;   
       
    $.ajax({
        type: "POST",crossDomain: true, cache: false,
        url: 'https://reedfrog.com/api/app/womens-fashion.php',
        data: itemString,
		dataType:'JSON',  
         beforeSend: function(){ 
             
         },
		success: function(data){
            $(location).attr('href', '#fashionitems');   
				   if(data.results.length > 1) {                    
                    $(".heading").text(dataTitle);
                    $(".mainheading").text(dataTitle);
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
                        
                        $('div[class^="ui-loader"]').hide();
                      
                                  
                        
                    }
				 
            }
            
             if(!data.results)
            {
				
			  alert('no results returned');
			
               
            }
        }
		
    });
      	

        
  },
    
    opemWomensSwimWearRequest: function(eventData) { 
     var value = "rfapp_womens_swim";       
       var dataValue = "Swimwear";
      var currentpos = "#women";
        window.sessionStorage.setItem('currentPage', currentpos);
        window.localStorage.setItem('queryString', value);
       window.localStorage.setItem('dataValue', dataValue);
                        $.mobile.loading( "show", {
  text: "Fetching " +dataValue,
  textVisible: true,
  theme: "b"
  
});

    var queryString = window.localStorage.getItem('queryString');
     var dataTitle = window.localStorage.getItem('dataValue');
    var itemString ="queryString="+queryString;   
       
    $.ajax({
        type: "POST",crossDomain: true, cache: false,
        url: 'https://reedfrog.com/api/app/womens-fashion.php',
        data: itemString,
		dataType:'JSON',  
         beforeSend: function(){ 
             
         },
		success: function(data){
            $(location).attr('href', '#fashionitems');   
				   if(data.results.length > 1) {                    
                    $(".heading").text(dataTitle);
                    $(".mainheading").text(dataTitle);
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
                        
                        $('div[class^="ui-loader"]').hide();
                      
                                  
                        
                    }
				 
            }
            
             if(!data.results)
            {
				
			  alert('no results returned');
			
               
            }
        }
		
    });
      	

        
  },
    
     opemWomensSkirtsRequest: function(eventData) { 
     var value = "rfapp_womens_skirts";       
       var dataValue = "Skirts";
      var currentpos = "#women";
        window.sessionStorage.setItem('currentPage', currentpos);
        window.localStorage.setItem('queryString', value);
       window.localStorage.setItem('dataValue', dataValue);
                        $.mobile.loading( "show", {
  text: "Fetching " +dataValue,
  textVisible: true,
  theme: "b"
  
});

    var queryString = window.localStorage.getItem('queryString');
     var dataTitle = window.localStorage.getItem('dataValue');
    var itemString ="queryString="+queryString;   
       
    $.ajax({
        type: "POST",crossDomain: true, cache: false,
        url: 'https://reedfrog.com/api/app/womens-fashion.php',
        data: itemString,
		dataType:'JSON',  
         beforeSend: function(){ 
             
         },
		success: function(data){
            $(location).attr('href', '#fashionitems');   
				   if(data.results.length > 1) {                    
                    $(".heading").text(dataTitle);
                    $(".mainheading").text(dataTitle);
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
                        
                        $('div[class^="ui-loader"]').hide();
                      
                                  
                        
                    }
				 
            }
            
             if(!data.results)
            {
				
			  alert('no results returned');
			
               
            }
        }
		
    });
      	

        
  },
    
     opemWomensPlusSizeRequest: function(eventData) { 
     var value = "rfapp_womens_plus";       
       var dataValue = "Plus Size";
      var currentpos = "#women";
        window.sessionStorage.setItem('currentPage', currentpos);
        window.localStorage.setItem('queryString', value);
       window.localStorage.setItem('dataValue', dataValue);
                        $.mobile.loading( "show", {
  text: "Fetching " +dataValue,
  textVisible: true,
  theme: "b"
  
});

    var queryString = window.localStorage.getItem('queryString');
     var dataTitle = window.localStorage.getItem('dataValue');
    var itemString ="queryString="+queryString;   
       
    $.ajax({
        type: "POST",crossDomain: true, cache: false,
        url: 'https://reedfrog.com/api/app/womens-fashion.php',
        data: itemString,
		dataType:'JSON',  
         beforeSend: function(){ 
             
         },
		success: function(data){
            $(location).attr('href', '#fashionitems');   
				   if(data.results.length > 1) {                    
                    $(".heading").text(dataTitle);
                    $(".mainheading").text(dataTitle);
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
                        
                        $('div[class^="ui-loader"]').hide();
                      
                                  
                        
                    }
				 
            }
            
             if(!data.results)
            {
				
			  alert('no results returned');
			
               
            }
        }
		
    });
      	

        
  },
    
     opemWomensLingerieRequest: function(eventData) { 
     var value = "rfapp_womens_intimates";       
       var dataValue = "Lingerie";
      var currentpos = "#women";
        window.sessionStorage.setItem('currentPage', currentpos);
        window.localStorage.setItem('queryString', value);
       window.localStorage.setItem('dataValue', dataValue);
                        $.mobile.loading( "show", {
  text: "Fetching " +dataValue,
  textVisible: true,
  theme: "b"
  
});

    var queryString = window.localStorage.getItem('queryString');
     var dataTitle = window.localStorage.getItem('dataValue');
    var itemString ="queryString="+queryString;   
       
    $.ajax({
        type: "POST",crossDomain: true, cache: false,
        url: 'https://reedfrog.com/api/app/womens-fashion.php',
        data: itemString,
		dataType:'JSON',  
         beforeSend: function(){ 
             
         },
		success: function(data){
            $(location).attr('href', '#fashionitems');   
				   if(data.results.length > 1) {                    
                    $(".heading").text(dataTitle);
                    $(".mainheading").text(dataTitle);
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
                        
                        $('div[class^="ui-loader"]').hide();
                      
                                  
                        
                    }
				 
            }
            
             if(!data.results)
            {
				
			  alert('no results returned');
			
               
            }
        }
		
    });
      	

        
  },
    
     opemWomensDressesRequest: function(eventData) { 
     var value = "rfapp_womens_dresses";       
       var dataValue = "Dresses";
      var currentpos = "#women";
        window.sessionStorage.setItem('currentPage', currentpos);
        window.localStorage.setItem('queryString', value);
       window.localStorage.setItem('dataValue', dataValue);
                        $.mobile.loading( "show", {
  text: "Fetching " +dataValue,
  textVisible: true,
  theme: "b"
  
});

    var queryString = window.localStorage.getItem('queryString');
     var dataTitle = window.localStorage.getItem('dataValue');
    var itemString ="queryString="+queryString;   
       
    $.ajax({
        type: "POST",crossDomain: true, cache: false,
        url: 'https://reedfrog.com/api/app/womens-fashion.php',
        data: itemString,
		dataType:'JSON',  
         beforeSend: function(){ 
             
         },
		success: function(data){
            $(location).attr('href', '#fashionitems');   
				   if(data.results.length > 1) {                    
                    $(".heading").text(dataTitle);
                    $(".mainheading").text(dataTitle);
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
                        
                        $('div[class^="ui-loader"]').hide();
                      
                                  
                        
                    }
				 
            }
            
             if(!data.results)
            {
				
			  alert('no results returned');
			
               
            }
        }
		
    });
      	

        
  },
    
    openWomensClothingRequest: function(eventData) { 
     var value = "rfapp_womens_clothing";       
       var dataValue = "Clothing";
      var currentpos = "#women";
        window.sessionStorage.setItem('currentPage', currentpos);
        window.localStorage.setItem('queryString', value);
       window.localStorage.setItem('dataValue', dataValue);
                        $.mobile.loading( "show", {
  text: "Fetching " +dataValue,
  textVisible: true,
  theme: "b"
  
});

    var queryString = window.localStorage.getItem('queryString');
     var dataTitle = window.localStorage.getItem('dataValue');
    var itemString ="queryString="+queryString;   
       
    $.ajax({
        type: "POST",crossDomain: true, cache: false,
        url: 'https://reedfrog.com/api/app/womens-fashion.php',
        data: itemString,
		dataType:'JSON',  
         beforeSend: function(){ 
             
         },
		success: function(data){
            $(location).attr('href', '#fashionitems');   
				   if(data.results.length > 1) {                    
                    $(".heading").text(dataTitle);
                    $(".mainheading").text(dataTitle);
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
                        
                        $('div[class^="ui-loader"]').hide();
                      
                                  
                        
                    }
				 
            }
            
             if(!data.results)
            {
				
			  alert('no results returned');
			
               
            }
        }
		
    });
      	

        
  },
    
    openWomensBlousesRequest: function(eventData) {
     var value = "rfapp_womens_blouses";       
       var dataValue = "Blouses";
      var currentpos = "#women";
        window.sessionStorage.setItem('currentPage', currentpos);
        window.localStorage.setItem('queryString', value);
       window.localStorage.setItem('dataValue', dataValue);
                        $.mobile.loading( "show", {
  text: "Fetching " +dataValue,
  textVisible: true,
  theme: "b"
  
});

    var queryString = window.localStorage.getItem('queryString');
     var dataTitle = window.localStorage.getItem('dataValue');
    var itemString ="queryString="+queryString;   
       
    $.ajax({
        type: "POST",crossDomain: true, cache: false,
        url: 'https://reedfrog.com/api/app/womens-fashion.php',
        data: itemString,
		dataType:'JSON',  
         beforeSend: function(){ 
             
         },
		success: function(data){
            $(location).attr('href', '#fashionitems');   
				   if(data.results.length > 1) {                    
                    $(".heading").text(dataTitle);
                    $(".mainheading").text(dataTitle);
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
                        
                        $('div[class^="ui-loader"]').hide();
                      
                                  
                        
                    }
				 
            }
            
             if(!data.results)
            {
				
			  alert('no results returned');
			
               
            }
        }
		
    });
      	

        
  },
    
     openWomensActiveWear: function(eventData) {
     var value = "rfapp_womens_activewear";       
       var dataValue = "Activewear";
      var currentpos = "#women";
        window.sessionStorage.setItem('currentPage', currentpos);
        window.localStorage.setItem('queryString', value);
       window.localStorage.setItem('dataValue', dataValue);
                        $.mobile.loading( "show", {
  text: "Fetching " +dataValue,
  textVisible: true,
  theme: "b"
  
});

    var queryString = window.localStorage.getItem('queryString');
     var dataTitle = window.localStorage.getItem('dataValue');
    var itemString ="queryString="+queryString;   
       
    $.ajax({
        type: "POST",crossDomain: true, cache: false,
        url: 'https://reedfrog.com/api/app/womens-fashion.php',
        data: itemString,
		dataType:'JSON',  
         beforeSend: function(){ 
             
         },
		success: function(data){
            $(location).attr('href', '#fashionitems');   
				   if(data.results.length > 1) {                    
                    $(".heading").text(dataTitle);
                    $(".mainheading").text(dataTitle);
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
                        
                        $('div[class^="ui-loader"]').hide();
                      
                                  
                        
                    }
				 
            }
            
             if(!data.results)
            {
				
			  alert('no results returned');
			
               
            }
        }
		
    });
      	

        
  },
    
    openWomensHairCareRequest: function(eventData) {
     var value = "rfapp_womens_hair";       
       var dataValue = "Hair care";
      var currentpos = "#women";
        window.sessionStorage.setItem('currentPage', currentpos);
        window.localStorage.setItem('queryString', value);
       window.localStorage.setItem('dataValue', dataValue);
                        $.mobile.loading( "show", {
  text: "Fetching " +dataValue,
  textVisible: true,
  theme: "b"
  
});

    var queryString = window.localStorage.getItem('queryString');
     var dataTitle = window.localStorage.getItem('dataValue');
    var itemString ="queryString="+queryString;   
       
    $.ajax({
        type: "POST",crossDomain: true, cache: false,
        url: 'https://reedfrog.com/api/app/womens-fashion.php',
        data: itemString,
		dataType:'JSON',  
         beforeSend: function(){ 
             
         },
		success: function(data){
            $(location).attr('href', '#fashionitems');   
				   if(data.results.length > 1) {                    
                    $(".heading").text(dataTitle);
                    $(".mainheading").text(dataTitle);
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
                        
                        $('div[class^="ui-loader"]').hide();
                      
                                  
                        
                    }
				 
            }
            
             if(!data.results)
            {
				
			  alert('no results returned');
			
               
            }
        }
		
    });
      	

        
  },
    
    openWomensSkinCareRequest: function(eventData) {
     var value = "rfapp_womens_makeup";       
       var dataValue = "Skincare";
      var currentpos = "#women";
        window.sessionStorage.setItem('currentPage', currentpos);
        window.localStorage.setItem('queryString', value);
       window.localStorage.setItem('dataValue', dataValue);
                        $.mobile.loading( "show", {
  text: "Fetching " +dataValue,
  textVisible: true,
  theme: "b"
  
});

    var queryString = window.localStorage.getItem('queryString');
     var dataTitle = window.localStorage.getItem('dataValue');
    var itemString ="queryString="+queryString;   
       
    $.ajax({
        type: "POST",crossDomain: true, cache: false,
        url: 'https://reedfrog.com/api/app/womens-fashion.php',
        data: itemString,
		dataType:'JSON',  
         beforeSend: function(){ 
             
         },
		success: function(data){
            $(location).attr('href', '#fashionitems');   
				   if(data.results.length > 1) {                    
                    $(".heading").text(dataTitle);
                    $(".mainheading").text(dataTitle);
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
                        
                        $('div[class^="ui-loader"]').hide();
                      
                                  
                        
                    }
				 
            }
            
             if(!data.results)
            {
				
			  alert('no results returned');
			
               
            }
        }
		
    });
      	

        
  }, 
    
     openWomensHealthRequest: function(eventData) {
     var value = "rfapp_womens_health";       
       var dataValue = "Health";
      var currentpos = "#women";
        window.sessionStorage.setItem('currentPage', currentpos);
        window.localStorage.setItem('queryString', value);
       window.localStorage.setItem('dataValue', dataValue);
                        $.mobile.loading( "show", {
  text: "Fetching " +dataValue,
  textVisible: true,
  theme: "b"
  
});

    var queryString = window.localStorage.getItem('queryString');
     var dataTitle = window.localStorage.getItem('dataValue');
    var itemString ="queryString="+queryString;   
       
    $.ajax({
        type: "POST",crossDomain: true, cache: false,
        url: 'https://reedfrog.com/api/app/womens-fashion.php',
        data: itemString,
		dataType:'JSON',  
         beforeSend: function(){ 
             
         },
		success: function(data){
            $(location).attr('href', '#fashionitems');   
				   if(data.results.length > 1) {                    
                    $(".heading").text(dataTitle);
                    $(".mainheading").text(dataTitle);
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
                        
                        $('div[class^="ui-loader"]').hide();
                      
                                  
                        
                    }
				 
            }
            
             if(!data.results)
            {
				
			  alert('no results returned');
			
               
            }
        }
		
    });
      	

        
  }, 
   
    openWomensShoesRequest: function(eventData) {
     var value = "rfapp_womens_shoes";       
       var dataValue = "Shoes";
      var currentpos = "#women";
        window.sessionStorage.setItem('currentPage', currentpos);
        window.localStorage.setItem('queryString', value);
       window.localStorage.setItem('dataValue', dataValue);
                        $.mobile.loading( "show", {
  text: "Fetching " +dataValue,
  textVisible: true,
  theme: "b"
  
});

    var queryString = window.localStorage.getItem('queryString');
     var dataTitle = window.localStorage.getItem('dataValue');
    var itemString ="queryString="+queryString;   
       
    $.ajax({
        type: "POST",crossDomain: true, cache: false,
        url: 'https://reedfrog.com/api/app/womens-fashion.php',
        data: itemString,
		dataType:'JSON',  
         beforeSend: function(){ 
             
         },
		success: function(data){
            $(location).attr('href', '#fashionitems');   
				   if(data.results.length > 1) {                    
                    $(".heading").text(dataTitle);
                    $(".mainheading").text(dataTitle);
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
                        
                        $('div[class^="ui-loader"]').hide();
                      
                                  
                        
                    }
				 
            }
            
             if(!data.results)
            {
				
			  alert('no results returned');
			
               
            }
        }
		
    });
      	

        
  }, 
          // openNewsDetailedPage Event Handler
  openWomensJewelryRequest: function(eventData) {
     var value = "rfapp_womens_jewelry";       
       var dataValue = "Jewelry";
      var currentpos = "#women";
        window.sessionStorage.setItem('currentPage', currentpos);
        window.localStorage.setItem('queryString', value);
       window.localStorage.setItem('dataValue', dataValue);
                        $.mobile.loading( "show", {
  text: "Fetching " +dataValue,
  textVisible: true,
  theme: "b"
  
});

    var queryString = window.localStorage.getItem('queryString');
     var dataTitle = window.localStorage.getItem('dataValue');
    var itemString ="queryString="+queryString;   
       
    $.ajax({
        type: "POST",crossDomain: true, cache: false,
        url: 'https://reedfrog.com/api/app/womens-fashion.php',
        data: itemString,
		dataType:'JSON',  
         beforeSend: function(){ 
             
         },
		success: function(data){
            $(location).attr('href', '#fashionitems');   
				   if(data.results.length > 1) {                    
                    $(".heading").text(dataTitle);
                    $(".mainheading").text(dataTitle);
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
                        
                        $('div[class^="ui-loader"]').hide();
                      
                                  
                        
                    }
				 
            }
            
             if(!data.results)
            {
				
			  alert('no results returned');
			
               
            }
        }
		
    });
      	

        
  }, 
    
      // openNewsDetailedPage Event Handler
  openWomensHatsRequest: function(eventData) {
     var value = "rfapp_womens_hats";       
       var dataValue = "Hats";
      var currentpos = "#women";
        window.sessionStorage.setItem('currentPage', currentpos);
        window.localStorage.setItem('queryString', value);
       window.localStorage.setItem('dataValue', dataValue);
                        $.mobile.loading( "show", {
  text: "Fetching " +dataValue,
  textVisible: true,
  theme: "b"
  
});

    var queryString = window.localStorage.getItem('queryString');
     var dataTitle = window.localStorage.getItem('dataValue');
    var itemString ="queryString="+queryString;   
       
    $.ajax({
        type: "POST",crossDomain: true, cache: false,
        url: 'https://reedfrog.com/api/app/womens-fashion.php',
        data: itemString,
		dataType:'JSON',  
         beforeSend: function(){ 
             
         },
		success: function(data){
            $(location).attr('href', '#fashionitems');   
				   if(data.results.length > 1) {                    
                    $(".heading").text(dataTitle);
                    $(".mainheading").text(dataTitle);
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
                        
                        $('div[class^="ui-loader"]').hide();
                      
                                  
                        
                    }
				 
            }
            
             if(!data.results)
            {
				
			  alert('no results returned');
			
               
            }
        }
		
    });
      	

        
  }, 
 
  // openNewsDetailedPage Event Handler
  openWomensBagsReequest: function(eventData) {
     var value = "rfapp_womens_bags";       
       var dataValue = "Bags";
      var currentpos = "#women";
        window.sessionStorage.setItem('currentPage', currentpos);
        window.localStorage.setItem('queryString', value);
       window.localStorage.setItem('dataValue', dataValue);
                        $.mobile.loading( "show", {
  text: "Fetching " +dataValue,
  textVisible: true,
  theme: "b"
  
});

    var queryString = window.localStorage.getItem('queryString');
     var dataTitle = window.localStorage.getItem('dataValue');
    var itemString ="queryString="+queryString;   
       
    $.ajax({
        type: "POST",crossDomain: true, cache: false,
        url: 'https://reedfrog.com/api/app/womens-fashion.php',
        data: itemString,
		dataType:'JSON',  
         beforeSend: function(){ 
             
         },
		success: function(data){
            $(location).attr('href', '#fashionitems');   
				   if(data.results.length > 1) {                    
                    $(".heading").text(dataTitle);
                    $(".mainheading").text(dataTitle);
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
                        
                        $('div[class^="ui-loader"]').hide();
                      
                                  
                        
                    }
				 
            }
            
             if(!data.results)
            {
				
			  alert('no results returned');
			
               
            }
        }
		
    });
      	

        
  }, 
    
    openWomensGlassesRequest: function(eventData) {
     var value = "rfapp_womens_glasses";       
       var dataValue = "Glasses";
         var dataValue = "Bags";
      var currentpos = "#women";
        window.localStorage.setItem('queryString', value);
       window.localStorage.setItem('dataValue', dataValue);
    $.mobile.loading( "show", {
  text: "Fetching " +dataValue,
  textVisible: true,
  theme: "b"
  
});

    var queryString = window.localStorage.getItem('queryString');
     var dataTitle = window.localStorage.getItem('dataValue');
    var itemString ="queryString="+queryString;   
       
    $.ajax({
        type: "POST",crossDomain: true, cache: false,
        url: 'https://reedfrog.com/api/app/womens-fashion.php',
        data: itemString,
		dataType:'JSON',  
         beforeSend: function(){ 
             
         },
		success: function(data){
            $(location).attr('href', '#fashionitems');   
				   if(data.results.length > 1) {                    
                    $(".heading").text(dataTitle);
                    $(".mainheading").text(dataTitle);
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
                        
                        $('div[class^="ui-loader"]').hide();
                      
                                  
                        
                    }
				 
            }
            
             if(!data.results)
            {
				
			  alert('no results returned');
			
               
            }
        }
		
    });
      	

        
  },
    
      // launchedAppFromLink Event Handler
  onApplicationDidLaunchFromLink: function(eventData) {
         
  }

};
 
app.initialize();