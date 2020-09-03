var TcHmi;!function(t){let e;!function(e){let o;!function(e){class o extends t.Controls.System.TcHmiControl{constructor(e,o,i){super(e,o,i),this.__textNode=null,this.__onPressedEventDestroyEvent=null,this.__onResizedEventDestroyEvent=null,this.__onRadioGroupToggledEventDestroyEvent=null,this.__destroyStateSymbolWatch=null,this.__state=!1,this.__onPressed=()=>{!0===t.Access.checkAccess(this,"operate")&&this.getIsEnabled()&&(this.__state||this.__processState(!0,!0,"userInteraction"))},this.__onResized=()=>{let t=this.getRenderedWidth();if(!t)return;let e=this.getRenderedHeight();e&&(this.__borderWidth&&this.__borderStyle&&("None"!==this.__borderStyle.left&&(t-=this.__borderWidth.left),"None"!==this.__borderStyle.right&&(t-=this.__borderWidth.right)),this.__borderWidth&&this.__borderStyle&&("None"!==this.__borderStyle.top&&(e-=this.__borderWidth.top),"None"!==this.__borderStyle.bottom&&(e-=this.__borderWidth.bottom)),this.__element[0].style.setProperty("--square-size",Math.min(t,e)+"px"))},this.__onRadioGroupToggled=(t,e)=>{e&&e.activeElementId&&e.activeElementId!==this.__id&&(this.__stateSymbol&&this.__stateSymbol.getExpression().toString()===e.source||this.__processState(!1,!0,"radioGroup"))},this.__onStateSymbolWatch=e=>{e.error===t.Errors.NONE?!1!==e.value&&!0!==e.value||this.__processState(e.value,!1,this.__stateSymbol.getExpression().toString()):e.details&&TCHMI_CONSOLE_LOG_LEVEL>=1&&t.Log.error("[Source=Control, Module=TcHmi.Controls.Beckhoff.TcHmiRadioButton, Id="+this.getId()+", Property=StateSymbol, "+(this.__stateSymbol?"Symbol = "+this.__stateSymbol.getExpression().toString():"")+"] "+t.Log.buildMessage(e.details))},this.__onResolverForRadioStateIconColorWatchCallback=e=>{!this.__isAttached&&e.destroy&&e.destroy(),e.error===t.Errors.NONE?tchmi_equal(e.value,this.__radioStateIconColor)||(this.__radioStateIconColor=e.value,t.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"RadioStateIconColor"}),this.__processRadioStateIconColor()):TCHMI_CONSOLE_LOG_LEVEL>=1&&t.Log.error("[Source=Control, Module=TcHmi.Controls.Beckhoff.TcHmiRadioButton, Id="+this.getId()+", Attribute=RadioStateIconColor] Resolving symbols from object failed with error: "+t.Log.buildMessage(e.details))},this.__onResolverForTextColorWatchCallback=e=>{!this.__isAttached&&e.destroy&&e.destroy(),e.error===t.Errors.NONE?tchmi_equal(e.value,this.__textColor)||(this.__textColor=e.value,t.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"TextColor"}),this.__processTextColor()):TCHMI_CONSOLE_LOG_LEVEL>=1&&t.Log.error("[Source=Control, Module=TcHmi.Controls.Beckhoff.TcHmiRadioButton, Id="+this.getId()+", Attribute=TextColor] Resolving symbols from object failed with error: "+t.Log.buildMessage(e.details))}}__previnit(){super.__previnit(),this.__elementTemplateRoot=this.__element.find(".TcHmi_Controls_Beckhoff_TcHmiRadioButton-template")}__init(){super.__init()}__attach(){super.__attach(),this.__onPressedEventDestroyEvent=t.EventProvider.register(this.__id+".onPressed",this.__onPressed),this.__onResizedEventDestroyEvent=t.EventProvider.register(this.__id+".onResized",this.__onResized),this.__stateSymbol&&!this.__destroyStateSymbolWatch&&(this.__destroyStateSymbolWatch=this.__stateSymbol.watch(this.__onStateSymbolWatch))}__detach(){super.__detach(),null!==this.__onPressedEventDestroyEvent&&(this.__onPressedEventDestroyEvent(),this.__onPressedEventDestroyEvent=null),null!==this.__onResizedEventDestroyEvent&&(this.__onResizedEventDestroyEvent(),this.__onResizedEventDestroyEvent=null),this.__destroyStateSymbolWatch&&(this.__destroyStateSymbolWatch(),this.__destroyStateSymbolWatch=null)}destroy(){this.__keepAlive||(null!==this.__onRadioGroupToggledEventDestroyEvent&&(this.__onRadioGroupToggledEventDestroyEvent(),this.__onRadioGroupToggledEventDestroyEvent=null),super.destroy())}setRadioGroup(valueNew){let e=t.ValueConverter.toString(valueNew);null===e&&(e=this.getAttributeDefaultValueInternal("RadioGroup")),e!==this.__radioGroup&&(this.__radioGroup=e,t.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"RadioGroup"}),this.__processRadioGroup())}getRadioGroup(){return this.__radioGroup}__processRadioGroup(){null!==this.__onRadioGroupToggledEventDestroyEvent&&(this.__onRadioGroupToggledEventDestroyEvent(),this.__onRadioGroupToggledEventDestroyEvent=null),null!==this.__radioGroup&&(this.__onRadioGroupToggledEventDestroyEvent=t.EventProvider.register(this.__radioGroup+".onRadioToggled",this.__onRadioGroupToggled))}__setRadioState(valueNew,e,o){let i=t.ValueConverter.toToggleState(valueNew);null===i&&(i=this.getAttributeDefaultValueInternal("RadioState")),i!==this.__radioState&&(this.__radioState=i,t.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"RadioState"}),t.EventProvider.raise(this.__id+".onRadioStateChanged"),o&&this.__processRadioState(e))}setRadioState(valueNew){this.__setRadioState(valueNew,!0,!0)}getRadioState(){return this.__radioState}__processRadioState(t=!0){this.__processState("Active"===this.__radioState,t,"attribute")}setStateSymbol(valueNew){let e=valueNew;if(null===e){let o=this.getAttributeDefaultValueInternal("StateSymbol");o&&(e=new t.Symbol(o))}this.__stateSymbol!==e&&(this.__destroyStateSymbolWatch&&(this.__destroyStateSymbolWatch(),this.__destroyStateSymbolWatch=null),e instanceof t.Symbol?(this.__stateSymbol=e,this.__destroyStateSymbolWatch=this.__stateSymbol.watch(this.__onStateSymbolWatch)):void 0===this.__stateSymbol?this.__stateSymbol=null:(this.__stateSymbol=null,this.__processState(!1,!1,"attribute")),t.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"StateSymbol"}))}getStateSymbol(){return this.__stateSymbol}__processState(e,o,i){this.__state!==e&&(this.__state=e,this.__element[0].classList.toggle("TcHmi_Controls_Beckhoff_TcHmiRadioButton-active",this.__state),t.EventProvider.raise(this.getId()+".onStateChanged",{control:this,state:this.__state,stateOld:!this.__state}),this.__setRadioState(this.__state?"Active":"Normal",o,!1),this.__state&&null!==this.__radioGroup&&t.EventProvider.raise(this.__radioGroup+".onRadioToggled",{activeElementId:this.__id,source:i}),this.__stateSymbol&&o&&this.__stateSymbol.write(this.__state,e=>{e.error!==t.Errors.NONE&&e.details&&TCHMI_CONSOLE_LOG_LEVEL>=1&&t.Log.error("[Source=Control, Module=TcHmi.Controls.Beckhoff.TcHmiRadioButton, Id="+this.getId()+", Property=StateSymbol, "+(this.__stateSymbol?"Symbol = "+this.__stateSymbol.getExpression().toString():"")+"] "+t.Log.buildMessage(e.details))}))}setRadioStateIconColor(valueNew){let e=t.ValueConverter.toObject(valueNew);null===e&&(e=this.getAttributeDefaultValueInternal("RadioStateIconColor"));let o=this.__objectResolvers.get("radioStateIconColor");o&&(o.watchDestroyer&&o.watchDestroyer(),o.resolver.destroy());let i=new t.Symbol.ObjectResolver(e);this.__objectResolvers.set("radioStateIconColor",{resolver:i,watchCallback:this.__onResolverForRadioStateIconColorWatchCallback,watchDestroyer:i.watch(this.__onResolverForRadioStateIconColorWatchCallback)})}getRadioStateIconColor(){return this.__radioStateIconColor}__processRadioStateIconColor(){this.__element[0].style.setProperty("--radio-state-icon-color",this.__radioStateIconColor?this.__radioStateIconColor.color:"")}setText(valueNew){let e=t.ValueConverter.toString(valueNew);null===e&&(e=this.getAttributeDefaultValueInternal("Text")),e!==this.__text&&(this.__text=e,t.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"Text"}),this.__processText())}getText(){return this.__text}__processText(){let text=tchmi_decode_control_characters(this.__text);this.__textNode?this.__textNode.data=text:(this.__textNode=document.createTextNode(text),this.__element[0].appendChild(this.__textNode))}setTextPosition(valueNew){let e=t.ValueConverter.toEnum(valueNew,{Left:"Left",Right:"Right"},null);null===e&&(e=this.getAttributeDefaultValueInternal("TextPosition")),e!==this.__textPosition&&(this.__textPosition=e,t.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"TextPosition"}),this.__processTextPosition())}getTextPosition(){return this.__textPosition}__processTextPosition(){switch(this.__textPosition){case"Left":this.__element[0].classList.add("text-left");break;case"Right":default:this.__element[0].classList.remove("text-left")}}setTextHorizontalAlignment(valueNew){let e=t.ValueConverter.toHorizontalAlignment(valueNew);null===e&&(e=this.getAttributeDefaultValueInternal("TextHorizontalAlignment")),e!==this.__textHorizontalAlignment&&(this.__textHorizontalAlignment=e,t.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"TextHorizontalAlignment"}),this.__processTextHorizontalAlignment())}getTextHorizontalAlignment(){return this.__textHorizontalAlignment}__processTextHorizontalAlignment(){switch(this.__textHorizontalAlignment){case"Left":default:this.__element[0].style.justifyItems="start",this.__element[0].style.textAlign="start";break;case"Center":this.__element[0].style.justifyItems="center",this.__element[0].style.textAlign="center";break;case"Right":this.__element[0].style.justifyItems="end",this.__element[0].style.textAlign="end"}}setTextVerticalAlignment(valueNew){let e=t.ValueConverter.toVerticalAlignment(valueNew);null===e&&(e=this.getAttributeDefaultValueInternal("TextVerticalAlignment")),e!==this.__textVerticalAlignment&&(this.__textVerticalAlignment=e,t.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"TextVerticalAlignment"}),this.__processTextVerticalAlignment())}getTextVerticalAlignment(){return this.__textVerticalAlignment}__processTextVerticalAlignment(){switch(this.__textVerticalAlignment){case"Top":this.__element[0].style.alignItems="start",this.__element[0].style.alignContent="start";break;case"Center":default:this.__element[0].style.alignItems="center",this.__element[0].style.alignContent="center";break;case"Bottom":this.__element[0].style.alignItems="end",this.__element[0].style.alignContent="end"}}setTextFontFamily(valueNew){let e=t.ValueConverter.toFontFamily(valueNew);null===e&&(e=this.getAttributeDefaultValueInternal("TextFontFamily")),e!==this.__textFontFamily&&(this.__textFontFamily=e,t.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"TextFontFamily"}),this.__processTextFontFamily())}getTextFontFamily(){return this.__textFontFamily}__processTextFontFamily(){t.StyleProvider.processFontFamily(this.__element,this.__textFontFamily)}setTextFontSize(valueNew){let e=t.ValueConverter.toNumber(valueNew);null===e&&(e=this.getAttributeDefaultValueInternal("TextFontSize")),e!==this.__textFontSize&&(this.__textFontSize=e,t.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"TextFontSize"}),this.__processTextFontSize())}getTextFontSize(){return this.__textFontSize}__processTextFontSize(){t.StyleProvider.processFontSize(this.__element,this.__textFontSize,this.__textFontSizeUnit)}setTextFontSizeUnit(valueNew){let e=t.ValueConverter.toFontSizeUnit(valueNew);null===e&&(e=this.getAttributeDefaultValueInternal("TextFontSizeUnit")),e!==this.__textFontSizeUnit&&(this.__textFontSizeUnit=e,t.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"TextFontSizeUnit"}),this.__processTextFontSizeUnit())}getTextFontSizeUnit(){return this.__textFontSizeUnit}__processTextFontSizeUnit(){this.__processTextFontSize()}setTextFontStyle(valueNew){let e=t.ValueConverter.toFontStyle(valueNew);null===e&&(e=this.getAttributeDefaultValueInternal("TextFontStyle")),e!==this.__textFontStyle&&(this.__textFontStyle=e,t.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"TextFontStyle"}),this.__processTextFontStyle())}getTextFontStyle(){return this.__textFontStyle}__processTextFontStyle(){t.StyleProvider.processFontStyle(this.__element,this.__textFontStyle)}setTextFontWeight(valueNew){let e=t.ValueConverter.toFontWeight(valueNew);null===e&&(e=this.getAttributeDefaultValueInternal("TextFontWeight")),e!==this.__textFontWeight&&(this.__textFontWeight=e,t.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"TextFontWeight"}),this.__processTextFontWeight())}getTextFontWeight(){return this.__textFontWeight}__processTextFontWeight(){t.StyleProvider.processFontWeight(this.__element,this.__textFontWeight)}setTextColor(valueNew){let e=t.ValueConverter.toObject(valueNew);null===e&&(e=this.getAttributeDefaultValueInternal("TextColor"));let o=this.__objectResolvers.get("textColor");o&&(o.watchDestroyer&&o.watchDestroyer(),o.resolver.destroy());let i=new t.Symbol.ObjectResolver(e);this.__objectResolvers.set("textColor",{resolver:i,watchCallback:this.__onResolverForTextColorWatchCallback,watchDestroyer:i.watch(this.__onResolverForTextColorWatchCallback)})}getTextColor(){return this.__textColor}__processTextColor(){t.StyleProvider.processTextColor(this.__element,this.__textColor)}}e.TcHmiRadioButton=o}(o=e.Beckhoff||(e.Beckhoff={})),e.registerEx("TcHmiRadioButton","TcHmi.Controls.Beckhoff",t.Controls.Beckhoff.TcHmiRadioButton)}(e=t.Controls||(t.Controls={}))}(TcHmi||(TcHmi={}));