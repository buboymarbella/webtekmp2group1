$('form.ajax').on('submit',function(){
	 var that = $(this),
	  url = that.attr('action'),
	  type = that.attr('method'),
	  data ={};
	  
	  that.find('[name]').each(function(index,value){
		  var that = $(this),
		  name = that.attr('fname'),
		   value = that.val();
		   data[name] = value;
	  });
	 $.ajax({
		url: url,
		type:type	
	
		success:function(response){
			console.log(response);
		});
		 
	 });
	return false;
});