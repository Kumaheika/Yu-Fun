$(function (){
	$('#gallery').each(function (){
		var $con = $(this);
		$con.masonry({
			columnWidth: 230,
			gutter: 10,
			iteamSelector: '.gallery-item'
		});

		$.getJSON('./data/content.json', function (data){
			var ele =[];
			$.each(data, function (i, item){
				var itemHTML =
					'<li class="gallery-item is-loading">' +
					'<a href="' + item.images.large + '">' +
					'<img src="' + item.images.thumb + '" alt="' + item.title + '">' +
					'</a>' + '</li>';
				ele.push( $(itemHTML).get(0) );
			});

			$con.append(ele);

			$con.imagesLoaded(function (){
				$(ele).removeClass('is-loading');
				$con.masonry('appended', ele);
			});
		})
	});
});