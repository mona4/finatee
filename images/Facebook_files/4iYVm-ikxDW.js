if (self.CavalryLogger) { CavalryLogger.start_js(["d6Uwn"]); }

__d('CenteredContainer.react',['cx','React','joinClasses'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=c('React').PropTypes,j=c('React').createClass({displayName:'CenteredContainer',propTypes:{fullHeight:i.bool,vertical:i.bool,horizontal:i.bool},getDefaultProps:function(){return {fullHeight:false,vertical:false,horizontal:true};},render:function(){var k=(this.props.vertical?"_3bwv":'')+(this.props.horizontal?' '+"_3bww":''),l=c('React').Children.map(this.props.children,function(n){return (c('React').createElement('div',{className:"_3bwx"},n));}),m=c('joinClasses')(this.props.className,this.props.fullHeight?"_5bpf":'');return (c('React').createElement('div',babelHelpers['extends']({},this.props,{className:m}),c('React').createElement('div',{className:k},c('React').createElement('div',{className:"_3bwy"},l))));}});f.exports=j;},null);
__d('PopoverMenuContextMinWidth',['cx','CSS','Style','shield'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();function i(j){'use strict';this._popoverMenu=j;this._popover=j.getPopover();}i.prototype.enable=function(){'use strict';this._setMenuSubscription=this._popoverMenu.subscribe('setMenu',c('shield')(this._onSetMenu,this));};i.prototype.disable=function(){'use strict';this._setMenuSubscription.unsubscribe();this._setMenuSubscription=null;if(this._showSubscription){this._showSubscription.unsubscribe();this._showSubscription=null;}if(this._menuSubscription){this._menuSubscription.unsubscribe();this._menuSubscription=null;}};i.prototype._onSetMenu=function(){'use strict';this._menu=this._popoverMenu.getMenu();this._showSubscription=this._popover.subscribe('show',c('shield')(this._updateWidth,this));var j=this._updateWidth.bind(this);this._menuSubscription=this._menu.subscribe(['change','resize'],function(){setTimeout(j,0);});this._updateWidth();};i.prototype._updateWidth=function(){'use strict';var j=this._menu.getRoot(),k=this._popoverMenu.getTriggerElem(),l=k.offsetWidth;c('Style').set(j,'min-width',l+'px');c('CSS').conditionClass(j,"_575s",l>=j.offsetWidth);};Object.assign(i.prototype,{_setMenuSubscription:null,_showSubscription:null,_menuSubscription:null});f.exports=i;},null);
__d('PopoverMenuOverlappingBorder',['cx','CSS','DOM','Style','shield'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();function i(j){'use strict';this._popoverMenu=j;this._popover=j.getPopover();this._triggerElem=j.getTriggerElem();}i.prototype.enable=function(){'use strict';this._setMenuSubscription=this._popoverMenu.subscribe('setMenu',c('shield')(this._onSetMenu,this));};i.prototype.disable=function(){'use strict';this._popoverMenu.unsubscribe(this._setMenuSubscription);this._setMenuSubscription=null;this._removeBorderSubscriptions();this._removeShortBorder();};i.prototype._onSetMenu=function(){'use strict';this._removeBorderSubscriptions();this._menu=this._popoverMenu.getMenu();this._renderShortBorder(this._menu.getRoot());this._showSubscription=this._popover.subscribe('show',c('shield')(this._updateBorder,this));var j=this._updateBorder.bind(this);this._menuSubscription=this._menu.subscribe(['change','resize'],function(){setTimeout(j,0);});this._updateBorder();};i.prototype._updateBorder=function(){'use strict';var j=this._menu.getRoot(),k=this._triggerElem.offsetWidth,l=Math.max(j.offsetWidth-k,0);c('Style').set(this._shortBorder,'width',l+'px');};i.prototype._renderShortBorder=function(j){'use strict';this._shortBorder=c('DOM').create('div',{className:"_54hx"});c('DOM').appendContent(j,this._shortBorder);c('CSS').addClass(j,"_54hy");};i.prototype._removeShortBorder=function(){'use strict';if(this._shortBorder){c('DOM').remove(this._shortBorder);this._shortBorder=null;c('CSS').removeClass(this._popoverMenu.getMenu().getRoot(),"_54hy");}};i.prototype._removeBorderSubscriptions=function(){'use strict';if(this._showSubscription){this._popover.unsubscribe(this._showSubscription);this._showSubscription=null;}if(this._menuSubscription){this._menu.unsubscribe(this._menuSubscription);this._menuSubscription=null;}};Object.assign(i.prototype,{_shortBorder:null,_setMenuSubscription:null,_showSubscription:null,_menuSubscription:null});f.exports=i;},null);
__d('ReactSelectorUtils',['React'],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h={processMenuItems:function(i,j){var k=void 0,l=c('React').Children.map(i,function(m){if(m){var n=m.props.value===j;m=c('React').cloneElement(m,{selected:n});if(n)k=m;return m;}});return {items:l,selectedItem:k};},processMultiMenuItems:function(i,j){var k=[],l=i;if(j)l=c('React').Children.map(i,function(m){if(m){var n=j.some(function(o){return o===m.props.value;});m=c('React').cloneElement(m,{selected:n});if(n)k.push(m);return m;}});return {items:l,selectedItems:k};}};f.exports=h;},null);
__d('AbstractSelector.react',['cx','invariant','ContextualLayerAutoFlip','InlineBlock.react','PopoverMenu.react','PopoverMenuContextMinWidth','PopoverMenuOverlappingBorder','React','ReactSelectorUtils','intlList','joinClasses'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=c('React').PropTypes;function k(m,n,o){if(m[n]==null)return;var p=Array.isArray(m[n]);if(m.multiple){if(!p)return new Error('You are trying to set a single value for `'+n+'` '+'but the menu has `multiple` set to true, so it should be an '+'array of values.');}else if(p)return new Error('You are trying to set an array of values for `'+n+'` '+'but the menu has `multiple` set to false, so it should be a '+'single value.');}var l=c('React').createClass({displayName:'AbstractSelector',propTypes:{config:j.object.isRequired,alignh:j.oneOf(['left','center','right']),name:j.string,overlappingborder:j.bool,onChange:j.func,disabled:j.bool,maxheight:j.number,multiple:j.bool,defaultLabel:j.string,defaultValue:k,value:k,initialValue:k},getInitialState:function(){return {value:this.props.value!=null?this.props.value:this.props.defaultValue!=null?this.props.defaultValue:this.props.initialValue};},setMenuValue:function(m){!(this.refs&&this.refs.popover)?i(0):void 0;this._internalChange=true;this.refs.popover.getMenu().setValue(m);this._internalChange=false;},onChange:function(m,n){if(this._internalChange)return;if(this.props.value==null){var o=null;if(this.props.multiple){o=n.map(function(p){return p.value;});}else o=n.value;this.setState({value:o});}else this.setMenuValue(this.props.value);if(this.props.onChange)this.props.onChange(n);},componentWillReceiveProps:function(m){if(m.value!=null){this.setState({value:m.value});}else if(this.props.multiple!==m.multiple)this.setState({value:m.multiple?[this.state.value]:this.state.value[0]});},render:function(){var m=this.props.config,n=!this.props.multiple?c('ReactSelectorUtils').processMenuItems(this.props.children,this.state.value):c('ReactSelectorUtils').processMultiMenuItems(this.props.children,this.state.value),o=c('React').cloneElement(m.menu,{children:n.items,className:c('joinClasses')("_575t",m.menu.props.className),maxheight:this.props.maxheight,onChange:this.onChange}),p='',q=null;if(!this.props.multiple){var r=n.selectedItem;p=r.props.label||r.props.children;if(r.props.icon)q=c('React').cloneElement(r.props.icon,{});}else{var s=n.selectedItems;if(!s.length){p=this.props.defaultLabel;}else p=c('intlList')(s.map(function(aa){return aa.props.children;}),c('intlList').CONJUNCTIONS.NONE);}var t={label:p,disabled:this.props.disabled};if(q)t.image=q;var u=c('React').cloneElement(m.button,t),v=[c('ContextualLayerAutoFlip')];if(m.layerBehaviors)v=v.concat(m.layerBehaviors);var w=[c('PopoverMenuContextMinWidth')];if(this.props.overlappingborder)w.push(c('PopoverMenuOverlappingBorder'));var x=null;if(this.props.multiple){var y=this.props.name+'[]',z;if(this.state.value)z=this.state.value.map(function(aa){return (c('React').createElement('input',{key:aa,type:'hidden',name:y,value:aa}));});x=c('React').createElement('div',null,z);}else x=c('React').createElement('input',{type:'hidden',name:this.props.name,value:this.state.value});return (c('React').createElement(c('InlineBlock.react'),babelHelpers['extends']({},this.props,{alignv:'middle',name:null}),c('React').createElement(c('PopoverMenu.react'),{ref:'popover',menu:o,alignh:this.props.alignh,layerBehaviors:v,behaviors:w,disabled:this.props.disabled},u),x));},showMenu:function(){!this.isMounted()?i(0):void 0;this.refs.popover.showPopover();},hideMenu:function(){!this.isMounted()?i(0):void 0;this.refs.popover.hidePopover();}});f.exports=l;},null);
__d('LayerAutoFocusReact',['focusWithinLayer'],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();function h(i){this._layer=i;this._subscription=null;}h.prototype.enable=function(){if(this._layer.containsReactComponent)this._subscription=this._layer.subscribe('reactshow',this._focus.bind(this));};h.prototype.disable=function(){if(this._subscription){this._subscription.unsubscribe();this._subscription=null;}};h.prototype._focus=function(){var i=this._layer.getRoot();i&&c('focusWithinLayer')(i);};f.exports=h;},null);
__d('SimpleXUIDialog',['cx','DialogX','LayerAutoFocusReact','LayerDestroyOnHide','LayerFadeOnHide','LayerFadeOnShow','LayerHideOnBlur','LayerHideOnEscape','React','XUIDialogCancelButton.react','XUIDialogBody.react','XUIDialogFooter.react','XUIDialogOkayButton.react','XUIDialogTitle.react'],function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();var i=445,j={show:function(k,l,m,n){var o=c('React').createElement(c('XUIDialogOkayButton.react'),{action:'cancel',use:'confirm'});return this.showEx(k,l,o,m,n);},showConfirm:function(k,l,m,n){var o=false,p=c('React').createElement('div',null,c('React').createElement(c('XUIDialogCancelButton.react'),{onClick:function(){o=false;}}),c('React').createElement(c('XUIDialogOkayButton.react'),{action:'cancel',className:n&&n.autofocusConfirm?"autofocus":'',use:'confirm',onClick:function(){o=true;}}));function q(){m(o);}return this.showEx(k,l,p,q,n);},showEx:function(k,l,m,n,o){o=o||{};var p=[c('LayerDestroyOnHide'),c('LayerFadeOnShow'),c('LayerFadeOnHide'),c('LayerHideOnEscape')];if(o.hideOnBlur!==false)p.push(c('LayerHideOnBlur'));if(o.useReactFocusBehavior)p.push(c('LayerAutoFocusReact'));var q={width:o.width||i,xui:true,addedBehaviors:p};if(l)l=c('React').createElement(c('XUIDialogTitle.react'),{showCloseButton:o.showCloseButton!==false},l);if(m)m=c('React').createElement(c('XUIDialogFooter.react'),{'data-testid':'simple_xui_dialog_footer'},m);var r=c('React').createElement('div',null,l,c('React').createElement(c('XUIDialogBody.react'),null,k),m),s=new (c('DialogX'))(q,r);if(n)s.subscribe('hide',n);s.show();return s;}};f.exports=j;},null);
__d('XUINotice.react',['cx','fbt','ix','Image.react','React','XUICloseButton.react','joinClasses'],function a(b,c,d,e,f,g,h,i,j){'use strict';if(c.__markCompiled)c.__markCompiled();var k=c('React').PropTypes,l={notify:{altText:i._("Notice"),className:null,iconSrc:j('/images/deprecated/glyphs/flat/info-flat_m.png')},success:{altText:i._("Success"),className:"_3qh4",iconSrc:j('/images/deprecated/glyphs/flat/checkmark_white_m.png')},warn:{altText:i._("Warning"),className:"_585o",iconSrc:j('/images/deprecated/glyphs/flat/error-flat_m.png')},recommend:{altText:i._("Recommend"),className:"_1wpa",iconSrc:j('/images/deprecated/glyphs/flat/error-flat_m.png')},quiet:{altText:i._("Quiet"),className:"_5d83",iconSrc:j('/images/deprecated/glyphs/flat/info-flat_m.png')}},m=c('React').createClass({displayName:'XUINotice',propTypes:{onDismiss:k.func,use:k.oneOf(Object.keys(l)).isRequired,size:k.oneOf(['medium','small']).isRequired},getDefaultProps:function(){return {use:'notify',size:'medium'};},render:function(){var n=this.props,o=n.children,p=n.className,q=n.onDismiss,r=n.use,s=babelHelpers.objectWithoutProperties(n,['children','className','onDismiss','use']),t=l[r];p=c('joinClasses')("_585n",t.className,p);var u=null;if(q)u=c('React').createElement(c('XUICloseButton.react'),{className:"_585q",href:'#',onClick:q});var v="_585r"+(q?' '+"_2i-a":'')+(this.props.size==='medium'?' '+"_50f4":'')+(this.props.size==='small'?' '+"_50f3":'');return (c('React').createElement('div',babelHelpers['extends']({},s,{className:p}),c('React').createElement(c('Image.react'),{alt:t.altText,className:"_585p",src:t.iconSrc}),u,c('React').createElement('div',{className:v},o)));}});f.exports=m;},null);
__d('XUISelectorButton.react',['invariant','React','XUIPopoverButton.react'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=c('React').createClass({displayName:'XUISelectorButton',render:function(){!!this.props.theme?h(0):void 0;return (c('React').createElement(c('XUIPopoverButton.react'),babelHelpers['extends']({},this.props,{theme:'dark'})));}});f.exports=i;},null);
__d('XUISelector.react',['invariant','AbstractSelector.react','ContextualLayerPositionClassOnContext','React','ReactXUIMenu','XUISelectorButton.react'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=c('ReactXUIMenu').SelectableMenu,j=c('ReactXUIMenu').SelectableItem,k=c('React').PropTypes,l=c('React').createClass({displayName:'ReactXUISelector',propTypes:{layerBehaviors:k.array,maxheight:k.number,multiple:k.bool,disabled:k.bool,haschevron:k.bool,maxwidth:k.number,size:k.oneOf(['small','medium','large','xlarge','xxlarge']),suppressed:k.bool,use:k.oneOf(['default','special','confirm'])},statics:{getButtonSize:function(m){return m.size||'medium';}},getDefaultProps:function(){return {haschevron:true,layerBehaviors:[],multiple:false};},render:function(){var m,n=[];c('React').Children.forEach(this.props.children,function(p){if(p)n.push(p);});if(n[0]&&n[0].type===c('XUISelectorButton.react')){m=n[0];n=n.slice(1);}else m=c('React').createElement(c('XUISelectorButton.react'),{haschevron:this.props.haschevron,disabled:this.props.disabled,use:this.props.use,size:this.props.size,suppressed:this.props.suppressed,maxwidth:this.props.maxwidth});var o={button:m,menu:c('React').createElement(i,{maxheight:this.props.maxheight,multiple:this.props.multiple}),layerBehaviors:this.props.layerBehaviors.concat([c('ContextualLayerPositionClassOnContext')])};return (c('React').createElement(c('AbstractSelector.react'),babelHelpers['extends']({},this.props,{ref:'abstractSelector',config:o}),n));},showMenu:function(){!this.isMounted()?h(0):void 0;this.refs.abstractSelector.showMenu();},hideMenu:function(){!this.isMounted()?h(0):void 0;this.refs.abstractSelector.hideMenu();}});l.Option=j;f.exports=l;},null);
__d('DraftEntityInstance',['immutable'],function a(b,c,d,e,f,g){'use strict';var h,i;if(c.__markCompiled)c.__markCompiled();var j=c('immutable').Record,k=j({type:'TOKEN',mutability:'IMMUTABLE',data:Object});h=babelHelpers.inherits(l,k);i=h&&h.prototype;l.prototype.getType=function(){return this.get('type');};l.prototype.getMutability=function(){return this.get('mutability');};l.prototype.getData=function(){return this.get('data');};function l(){h.apply(this,arguments);}f.exports=l;},null);
__d('DraftEntity',['invariant','DraftEntityInstance','immutable'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=c('immutable').Map,j=i(),k=0,l={create:function(m,n,o){return l.add(new (c('DraftEntityInstance'))({type:m,mutability:n,data:o||{}}));},add:function(m){var n=''+ ++k;j=j.set(n,m);return n;},get:function(m){var n=j.get(m);!!!n?h(0):void 0;return n;},mergeData:function(m,n){var o=l.get(m),p=babelHelpers['extends']({},o.getData(),n),q=o.set('data',p);j=j.set(m,q);return q;},replaceData:function(m,n){var o=l.get(m),p=o.set('data',n);j=j.set(m,p);return p;}};f.exports=l;},null);
__d('getMentionsTextForContentState',['DraftEntity','emptyFunction'],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h=c('emptyFunction').thatReturnsTrue,i=/[\\\]:]/g;function j(l){var m=l.getBlockMap().map(function(n){var o=n.getText(),p=[];n.findEntityRanges(h,function(q,r){p.push(k(o.slice(q,r),n.getEntityAt(q)));});return p.join('');});return m.join('\n');}function k(l,m){if(m){var n=c('DraftEntity').get(m);if(n.getType()==='MENTION'){l=l.replace(i,function(o){return '\\'+o;});return '@['+n.getData().id+':'+l+']';}else if(n.getType()==='EMOTICON')return n.getData().originalEmoticon;}return l.replace('@[','@ [');}f.exports=j;},null);
__d('getSafeBodyFromHTML',['UserAgent'],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h=c('UserAgent').isBrowser('IE <= 9');function i(j){var k,l=null;if(!h&&document.implementation&&document.implementation.createHTMLDocument){k=document.implementation.createHTMLDocument('foo');k.documentElement.innerHTML=j;l=k.getElementsByTagName('body')[0];}return l;}f.exports=i;},null);
__d('ReactComponentRenderer',['React','ReactDOM','warning'],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();function h(i,j){this.klass=i;this.container=j;this.props={};this.component=null;}h.prototype.replaceProps=function(i,j){this.props={};this.setProps(i,j);};h.prototype.setProps=function(i,j){if(this.klass==null)return;Object.assign(this.props,i);var k=c('React').createElement(this.klass,this.props);this.component=c('ReactDOM').render(k,this.container,j);};h.prototype.unmount=function(){c('ReactDOM').unmountComponentAtNode(this.container);this.klass=null;};f.exports=h;},null);
__d('getInlineBoundingRect',['Rect'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j){var k=i.getClientRects();if(!j||k.length===0)return c('Rect').getElementBounds(i);var l,m=false;for(var n=0;n<k.length;n++){var o=new (c('Rect'))(Math.round(k[n].top),Math.round(k[n].right),Math.round(k[n].bottom),Math.round(k[n].left),'viewport').convertTo('document'),p=o.getPositionVector(),q=p.add(o.getDimensionVector());if(!l||p.x<=l.l&&p.y>l.t){if(m)break;l=new (c('Rect'))(p.y,q.x,q.y,p.x,'document');}else{l.t=Math.min(l.t,p.y);l.b=Math.max(l.b,q.y);l.r=q.x;}if(o.contains(j))m=true;}if(!l)l=c('Rect').getElementBounds(i);return l;}f.exports=h;},null);
__d('Tooltip',['fbt','AsyncRequest','ContextualLayer','ContextualLayerAutoFlip','CSS','DOM','Event','Style','TooltipData','Vector','emptyFunction','getElementText','getInlineBoundingRect','getOrCreateDOMID','nl2br','setImmediate'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=null,j=null,k=null,l=null,m=null,n=null,o=[],p=[];function q(){if(!l){m=c('DOM').create('div',{className:'tooltipContent','data-testid':'tooltip_testid'});n=c('getOrCreateDOMID')(m);var u=c('DOM').create('i',{className:'arrow'}),v=c('DOM').create('div',{className:'uiTooltipX'},[m,u]);l=new (c('ContextualLayer'))({},v);l.shouldSetARIAProperties(false);l.enableBehavior(c('ContextualLayerAutoFlip'));}}function r(u,v){t._show(u,h._("Loading..."));new (c('AsyncRequest'))(v).setHandler(function(w){t._show(u,w.getPayload());}).setErrorHandler(c('emptyFunction')).send();}var s;c('Event').listen(document.documentElement,'mouseover',function(event){s=event;c('setImmediate')(function(){s=null;});});var t=babelHelpers['extends']({},c('TooltipData'),{isActive:function(u){return u===i;},process:function(u,v){if(!c('DOM').contains(u,v))return;if(u!==i){t.fetchIfNecessary(u);var w=t._get(u);if(w.suppress)return;if(w.delay){t._showWithDelay(u,w.delay);}else t.show(u);}},fetchIfNecessary:function(u){var v=u.getAttribute('data-tooltip-uri');if(v){u.removeAttribute('data-tooltip-uri');r(u,v);}},hide:function(){if(i){l.hide();i=null;while(o.length)o.pop().remove();}},_show:function(u,v){t._store({context:u,content:v});t.isActive(u)&&t.show(u);},show:function(u){var v=function(){u.setAttribute('aria-describedby',n);l.show();},w=function(){u.removeAttribute('aria-describedby');t.hide();},x=function(ga){if(!c('DOM').contains(i,ga.getTarget()))w();};q();w();var y=t._get(u);if(y.suppress)return;var z=y.content;if(y.overflowDisplay){if(u.offsetWidth>=u.scrollWidth)return;if(!z)z=c('getElementText')(u);}if(!z)return;var aa=0,ba=0;if(y.position==='left'||y.position==='right'){ba=(u.offsetHeight-28)/2;}else if(y.alignH!=='center'){var ca=u.offsetWidth;if(ca<32)aa=(ca-32)/2*(y.alignH==='right'?-1:1);}l.setContextWithBounds(u,c('getInlineBoundingRect')(u,s&&c('Vector').getEventPosition(s))).setOffsetX(aa).setOffsetY(ba).setPosition(y.position).setAlignment(y.alignH);if(typeof z==='string'){c('CSS').addClass(l.getRoot(),'invisible_elem');var da=c('DOM').create('span',{},c('nl2br')(z));if(y.textDirection)da=c('DOM').create('bdo',{dir:y.textDirection},da);var ea=c('DOM').create('div',{className:'tooltipText'},da);c('DOM').setContent(m,ea);v();c('CSS').removeClass(l.getRoot(),'invisible_elem');}else{c('DOM').setContent(m,z);v();}o.push(c('Event').listen(document.documentElement,'mouseover',x),c('Event').listen(document.documentElement,'focusin',x));var fa=c('Style').getScrollParent(u);if(fa!==window)o.push(c('Event').listen(fa,'scroll',w));if(!y.persistOnClick)o.push(c('Event').listen(u,'click',w));i=u;},_showWithDelay:function(u,v){if(u!==j)t._clearDelay();if(!k){var w=function(x){if(!c('DOM').contains(j,x.getTarget()))t._clearDelay();};p.push(c('Event').listen(document.documentElement,'mouseover',w),c('Event').listen(document.documentElement,'focusin',w));j=u;k=setTimeout(function(){t._clearDelay();t.show(u);},v);}},_clearDelay:function(){clearTimeout(k);j=null;k=null;while(p.length)p.pop().remove();}});c('Event').listen(window,'scroll',t.hide);f.exports=t;},null);