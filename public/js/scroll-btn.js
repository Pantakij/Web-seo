$(document).ready(function(){
	window.onscroll = function() {
		scrollFunction()
	}

	function scrollFunction() {

	     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
	        document.getElementById("fixpos-btn-line-at").style.display = "block"
	    } else {
	        document.getElementById("fixpos-btn-line-at").style.display = "none"
	    }

	     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
	        document.getElementById("fixpos-btn-call-us").style.display = "block"
	    } else {
	        document.getElementById("fixpos-btn-call-us").style.display = "none"
	    }
	}

	$('[name="scrooll-btn-top"]').click(function() {
	    document.body.scrollTop = 0 // For Chrome, Safari and Opera 
	    document.documentElement.scrollTop = 0 // For IE and Firefox

	    /*document.getElementById("here").scrollIntoView();*/
	})

})