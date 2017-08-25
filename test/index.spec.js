describe("点赞加1",function(){
	it("点赞是加1吗",function(){
		let thumb = new Thumb(); 
		expect(thumb.praiseClick()).toBe(true);
	});
});