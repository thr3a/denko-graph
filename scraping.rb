require 'mechanize'
require 'json'
result = []
top_url = 'http://ekimemo.wiki.fc2.com/'
wiki = Mechanize.new.get(top_url)
wiki.search('ul.treemenu_ul')[0].css('li a').each do|denko|
	# でんこ個別ページ取得
	page = Mechanize.new.get(top_url + denko[:href])
	# でんこの名前取得
	name = page.search('.page_title h1').text
	array = []
	page.search("table").each do |table|
		# ステータス表を検索
		next if table.css("th").text != "LvExpAPHP"
		table.css("tr:gt(1)").each do |row| # 最初の<tr>は列名なのでスルー
			array << row.css('td').map{ |n| n.text.to_i } #ex ["1", "0", "50", "72"]
		end
	end
	# 行と列を入れ替える
	lv, ex, ap, hp = array.transpose
	result << {name: name, AP: ap, HP: hp}
end
puts JSON.pretty_generate(result);
