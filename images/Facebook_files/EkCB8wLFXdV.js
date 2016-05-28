if (self.CavalryLogger) { CavalryLogger.start_js(["nqCvM"]); }

__d('CarouselDynamicSlideshowController',['Arbiter'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i){'use strict';this.$CarouselDynamicSlideshowController1=i.slideshow_ids;this.$CarouselDynamicSlideshowController2=i.carousel;}h.prototype.slide=function(){'use strict';var i=this.$CarouselDynamicSlideshowController2.getVisibleIndex();this.$CarouselDynamicSlideshowController1.forEach(function(j,k){if(!j)return;if(k===i){c('Arbiter').inform('fbPhotosSlideshow/forceEnable',{parentID:j});}else c('Arbiter').inform('fbPhotosSlideshow/forceDisable',{parentID:j});});};f.exports=h;},null);
__d('CarouselVideoPlayerController',['VideoAutoplayControllerX','VideoAutoplayPlayerBase','VideoPlayerLoggerEvent','VideoPlayerReason','getElementPosition','getViewportDimensions','tidyEvent'],function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();h=babelHelpers.inherits(j,c('VideoAutoplayPlayerBase'));i=h&&h.prototype;function j(k){'use strict';i.constructor.call(this);this.$CarouselVideoPlayerController1=k.video_units;this.$CarouselVideoPlayerController2=k.carousel;this.$CarouselVideoPlayerController3=k.should_autoplay;this.$CarouselVideoPlayerController5=k.root;this.$CarouselVideoPlayerController4=this.$CarouselVideoPlayerController2.getVisibleIndex();this.$CarouselVideoPlayerController1.forEach(function(l,m){if(l)c('tidyEvent')(l.addListener('turnOffAutoplay',function(){return this.emit('turnOffAutoplay');}.bind(this)));}.bind(this),this);}j.registerCarousel=function(k){'use strict';var l=new j(k);c('VideoAutoplayControllerX').registerVideoUnit(l);return l;};j.prototype.isVisible=function(){'use strict';var k=c('getViewportDimensions')().height,l=c('getElementPosition')(this.$CarouselVideoPlayerController5);if(l.height===0)return false;var m=l.y,n=l.y+l.height;return m>=0&&n<k;};j.prototype.getDistanceToViewport=function(){'use strict';var k=c('getViewportDimensions')().height,l=c('getElementPosition')(this.$CarouselVideoPlayerController5);if(l.height===0)return -Infinity;return l.y-k/2;};j.prototype.logDisplayed=function(){'use strict';if(this.$CarouselVideoPlayerController1[this.$CarouselVideoPlayerController4])this.$CarouselVideoPlayerController1[this.$CarouselVideoPlayerController4].logEvent(c('VideoPlayerLoggerEvent').DISPLAYED);};j.prototype.playWithoutUnmute=function(k){'use strict';if(this.$CarouselVideoPlayerController1[this.$CarouselVideoPlayerController4])this.$CarouselVideoPlayerController1[this.$CarouselVideoPlayerController4].play(k);};j.prototype.pause=function(k){'use strict';if(this.$CarouselVideoPlayerController1[this.$CarouselVideoPlayerController4])this.$CarouselVideoPlayerController1[this.$CarouselVideoPlayerController4].pause(k);};j.prototype.isAutoplayable=function(){'use strict';return this.$CarouselVideoPlayerController3;};j.prototype.getDOMPosition=function(){'use strict';return c('getElementPosition')(this.$CarouselVideoPlayerController5);};j.prototype.isLooping=function(){'use strict';return !!this.$CarouselVideoPlayerController1[this.$CarouselVideoPlayerController4].getOption('Looping','isLooping');};j.prototype.preload=function(){'use strict';if(this.$CarouselVideoPlayerController1[this.$CarouselVideoPlayerController4])this.$CarouselVideoPlayerController1[this.$CarouselVideoPlayerController4].preload();};j.prototype.getIsInChannel=function(){'use strict';return false;};j.prototype.abortLoading=function(){'use strict';return;};j.prototype.slide=function(){'use strict';this.$CarouselVideoPlayerController4=this.$CarouselVideoPlayerController2.getVisibleIndex();this.$CarouselVideoPlayerController1.forEach(function(k,l){if(k)if(l===this.$CarouselVideoPlayerController4){if(this.$CarouselVideoPlayerController3)k.play(c('VideoPlayerReason').AUTOPLAY);}else k.pause(c('VideoPlayerReason').PAGE_VISIBILITY);}.bind(this));};f.exports=j;},null);
__d('ExtendedMultiShareCarouselPagerArrowsVisible',['cx','csx','Animation','Arbiter','CSS','DOMQuery','Ease','Event','Locale','Run','TidyArbiterMixin','TrackingNodes','TrackingNodeTypes','CarouselVideoPlayerController','CarouselDynamicSlideshowController','mixin','tidyEvent'],function a(b,c,d,e,f,g,h,i){var j,k;if(c.__markCompiled)c.__markCompiled();var l=312,m=176,n=6,o=1,p=350;j=babelHelpers.inherits(q,c('mixin')(c('TidyArbiterMixin')));k=j&&j.prototype;function q(r){'use strict';k.constructor.call(this);this.$ExtendedMultiShareCarouselPagerArrowsVisible1=r.node;this.$ExtendedMultiShareCarouselPagerArrowsVisible2=r.grid;this.$ExtendedMultiShareCarouselPagerArrowsVisible3=r.prev_pager;this.$ExtendedMultiShareCarouselPagerArrowsVisible4=r.next_pager;this.$ExtendedMultiShareCarouselPagerArrowsVisible5=r.disable_pager_arrow_timeout;this.$ExtendedMultiShareCarouselPagerArrowsVisible6=r.item_width||l;this.$ExtendedMultiShareCarouselPagerArrowsVisible7=r.link_width||m;this.$ExtendedMultiShareCarouselPagerArrowsVisible8=r.num_visible_items||o;this.$ExtendedMultiShareCarouselPagerArrowsVisible9=r.edit_mode;this.$ExtendedMultiShareCarouselPagerArrowsVisible10=r.video_units;this.$ExtendedMultiShareCarouselPagerArrowsVisible11=r.should_autoplay;this.$ExtendedMultiShareCarouselPagerArrowsVisible12=r.slideshow_ids;this.$ExtendedMultiShareCarouselPagerArrowsVisible13=null;this.$ExtendedMultiShareCarouselPagerArrowsVisible14=0;this.$ExtendedMultiShareCarouselPagerArrowsVisible15=12;this.$ExtendedMultiShareCarouselPagerArrowsVisible16=c('Locale').isRTL()?'right':'left';this.$ExtendedMultiShareCarouselPagerArrowsVisible2.style[this.$ExtendedMultiShareCarouselPagerArrowsVisible16]=this.$ExtendedMultiShareCarouselPagerArrowsVisible15+'px';this.$ExtendedMultiShareCarouselPagerArrowsVisible17();var s={video_units:this.$ExtendedMultiShareCarouselPagerArrowsVisible10,carousel:this,should_autoplay:this.$ExtendedMultiShareCarouselPagerArrowsVisible11,root:this.$ExtendedMultiShareCarouselPagerArrowsVisible1};this.$ExtendedMultiShareCarouselPagerArrowsVisible18=c('CarouselVideoPlayerController').registerCarousel(s);var t={slideshow_ids:r.slideshow_ids,carousel:this};this.$ExtendedMultiShareCarouselPagerArrowsVisible19=new (c('CarouselDynamicSlideshowController'))(t);r.extensions.forEach(function(u){u.init(this);},this);this.subscribe('autoscroll',this.$ExtendedMultiShareCarouselPagerArrowsVisible20.bind(this));c('tidyEvent')([c('Event').listen(this.$ExtendedMultiShareCarouselPagerArrowsVisible3,'click',this.$ExtendedMultiShareCarouselPagerArrowsVisible21.bind(this)),c('Event').listen(this.$ExtendedMultiShareCarouselPagerArrowsVisible4,'click',this.$ExtendedMultiShareCarouselPagerArrowsVisible20.bind(this))]);this.init_pagers();if(this.$ExtendedMultiShareCarouselPagerArrowsVisible9)this.$ExtendedMultiShareCarouselPagerArrowsVisible13=c('Arbiter').subscribe(['carousel-composer/carousel_card_change'],this.$ExtendedMultiShareCarouselPagerArrowsVisible22.bind(this));c('Run').onLeave(function(){this.$ExtendedMultiShareCarouselPagerArrowsVisible13&&this.$ExtendedMultiShareCarouselPagerArrowsVisible13.remove();}.bind(this));}q.prototype.getVisibleIndex=function(){'use strict';return this.$ExtendedMultiShareCarouselPagerArrowsVisible14;};q.prototype.$ExtendedMultiShareCarouselPagerArrowsVisible22=function(){'use strict';this.$ExtendedMultiShareCarouselPagerArrowsVisible14=0;this.$ExtendedMultiShareCarouselPagerArrowsVisible15=12;this.$ExtendedMultiShareCarouselPagerArrowsVisible2.style[this.$ExtendedMultiShareCarouselPagerArrowsVisible16]=this.$ExtendedMultiShareCarouselPagerArrowsVisible15+'px';this.refresh();};q.prototype.$ExtendedMultiShareCarouselPagerArrowsVisible23=function(){'use strict';if(this.$ExtendedMultiShareCarouselPagerArrowsVisible9){return this.$ExtendedMultiShareCarouselPagerArrowsVisible24()-this.getLastVisibleIndex();}else return this.$ExtendedMultiShareCarouselPagerArrowsVisible2.childNodes.length-this.getLastVisibleIndex();};q.prototype.$ExtendedMultiShareCarouselPagerArrowsVisible25=function(){'use strict';return this.$ExtendedMultiShareCarouselPagerArrowsVisible14;};q.prototype.$ExtendedMultiShareCarouselPagerArrowsVisible26=function(){'use strict';return this.$ExtendedMultiShareCarouselPagerArrowsVisible25()>0;};q.prototype.$ExtendedMultiShareCarouselPagerArrowsVisible27=function(){'use strict';return this.$ExtendedMultiShareCarouselPagerArrowsVisible23()>0;};q.prototype.$ExtendedMultiShareCarouselPagerArrowsVisible20=function(){'use strict';if(!this.$ExtendedMultiShareCarouselPagerArrowsVisible27())return;this.$ExtendedMultiShareCarouselPagerArrowsVisible28(1,this.$ExtendedMultiShareCarouselPagerArrowsVisible26());this.$ExtendedMultiShareCarouselPagerArrowsVisible17();};q.prototype.$ExtendedMultiShareCarouselPagerArrowsVisible21=function(){'use strict';if(!this.$ExtendedMultiShareCarouselPagerArrowsVisible26())return;this.$ExtendedMultiShareCarouselPagerArrowsVisible28(-1,this.$ExtendedMultiShareCarouselPagerArrowsVisible27());this.$ExtendedMultiShareCarouselPagerArrowsVisible17();};q.prototype.$ExtendedMultiShareCarouselPagerArrowsVisible29=function(){'use strict';return this.$ExtendedMultiShareCarouselPagerArrowsVisible27()&&this.$ExtendedMultiShareCarouselPagerArrowsVisible26();};q.prototype.$ExtendedMultiShareCarouselPagerArrowsVisible17=function(){'use strict';if(this.$ExtendedMultiShareCarouselPagerArrowsVisible27())c('TrackingNodes').addDataAttribute(this.$ExtendedMultiShareCarouselPagerArrowsVisible4,c('TrackingNodeTypes').MULTI_ATTACHMENT_PAGER_NEXT,this.getLastVisibleIndex()+1);};q.prototype.$ExtendedMultiShareCarouselPagerArrowsVisible30=function(r){'use strict';var s=r?"_3dm4":"_3dm5",t=r?"_3rvy":"_3rv-",u=r?this.$ExtendedMultiShareCarouselPagerArrowsVisible26():this.$ExtendedMultiShareCarouselPagerArrowsVisible27(),v=!this.$ExtendedMultiShareCarouselPagerArrowsVisible29()&&!u;if(v){c('CSS').addClass(this.$ExtendedMultiShareCarouselPagerArrowsVisible1,t);setTimeout(function(){c('CSS').addClass(this.$ExtendedMultiShareCarouselPagerArrowsVisible1,s);}.bind(this),this.$ExtendedMultiShareCarouselPagerArrowsVisible5);}else{c('CSS').removeClass(this.$ExtendedMultiShareCarouselPagerArrowsVisible1,t);c('CSS').removeClass(this.$ExtendedMultiShareCarouselPagerArrowsVisible1,s);}};q.prototype.getLastVisibleIndex=function(){'use strict';return this.$ExtendedMultiShareCarouselPagerArrowsVisible14+this.$ExtendedMultiShareCarouselPagerArrowsVisible8;};q.prototype.init_pagers=function(){'use strict';c('CSS').conditionClass(this.$ExtendedMultiShareCarouselPagerArrowsVisible1,"_3dm4",!this.$ExtendedMultiShareCarouselPagerArrowsVisible26());};q.prototype.refresh=function(){'use strict';this.$ExtendedMultiShareCarouselPagerArrowsVisible30(true);this.$ExtendedMultiShareCarouselPagerArrowsVisible30(false);c('CSS').conditionClass(this.$ExtendedMultiShareCarouselPagerArrowsVisible1,"_3o-b",this.$ExtendedMultiShareCarouselPagerArrowsVisible29());};q.prototype.getID=function(){'use strict';var r=c('DOMQuery').find(this.$ExtendedMultiShareCarouselPagerArrowsVisible1,"^._5pat");return r.id;};q.prototype.$ExtendedMultiShareCarouselPagerArrowsVisible24=function(){'use strict';var r=0,s=0;for(;s<this.$ExtendedMultiShareCarouselPagerArrowsVisible2.childNodes.length;s++)if(!c('CSS').hasClass(this.$ExtendedMultiShareCarouselPagerArrowsVisible2.childNodes[s],'hidden_elem'))r++;return r;};q.prototype.$ExtendedMultiShareCarouselPagerArrowsVisible28=function(r,s){'use strict';this.$ExtendedMultiShareCarouselPagerArrowsVisible14+=r;var t=(this.$ExtendedMultiShareCarouselPagerArrowsVisible7+n)/2;if(s&&this.$ExtendedMultiShareCarouselPagerArrowsVisible29())t=n;if(!s&&!this.$ExtendedMultiShareCarouselPagerArrowsVisible29())t=this.$ExtendedMultiShareCarouselPagerArrowsVisible7;t*=-r;var u=r*this.$ExtendedMultiShareCarouselPagerArrowsVisible6;this.$ExtendedMultiShareCarouselPagerArrowsVisible15-=u+t;var v=this.$ExtendedMultiShareCarouselPagerArrowsVisible1;c('CSS').addClass(v,"_3dm6");new (c('Animation'))(this.$ExtendedMultiShareCarouselPagerArrowsVisible2).to(this.$ExtendedMultiShareCarouselPagerArrowsVisible16,this.$ExtendedMultiShareCarouselPagerArrowsVisible15).duration(p).ease(c('Ease').sineOut).ondone(function(){c('CSS').removeClass(v,"_3dm6");this.refresh();}.bind(this)).go();this.$ExtendedMultiShareCarouselPagerArrowsVisible18.slide();this.$ExtendedMultiShareCarouselPagerArrowsVisible19.slide();};f.exports=q;},null);