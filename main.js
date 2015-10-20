$(function() {
	// でんこステータスデータを取得
	$.getJSON("denko.json",function(json){
		// APのグラフ設定
		$('#ap_graph').highcharts({
			title : {text: "AP比較表"},
			xAxis : {
				title: {text: "レベル"},
				min:1,
				max:80,
				plotLines: [{
					value: 50,
					color: 'red',
					width: 2,
				}]
			},
			yAxis : {
				title: {text: "数値"},
				min:0,
				max:400
			}
		});
		var ap_chart = $('#ap_graph').highcharts();
		$.each(json, function(i, val){
			ap_chart.addSeries({name: val.name, data: val.AP, visible:false,pointStart: 1});
		});
		// HPのグラフ設定
		$('#hp_graph').highcharts({
			title : {text: "HP比較表"},
			xAxis : {
				title: {text: "レベル"},
				min:1,
				max:80,
				plotLines: [{
					value: 50,
					color: 'red',
					width: 2,
				}]
			},
			yAxis : {
				title: {text: "数値"},
				min:0,
				max:500
			}
		});
		var hp_chart = $('#hp_graph').highcharts();
		$.each(json, function(i, val){
			hp_chart.addSeries({name: val.name, data: val.HP, visible:false,pointStart: 1});
		});
	});
});
