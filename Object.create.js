if(typeof Object.defineProperty !=='function'){
 Object.defineProperty=function(a,b,c){
	var o=a,p=b,d=c,g=d.get,s=d.set;
	if(g||s){
	 if(g){o.__defineGetter__(p,g);};
	 if(s){o.__defineSetter__(p,s);};
	}else{
	 o[p]=d.value;
	};
	return o;
 };
};
//
if(typeof Object.create!=='function'){
 Object.create=function(a,b){
	var f=Function(), o=f.prototype=(a!==undefined?a:{}), p=b;
	if(p){Object.defineProperties(o,p);};
	f=new f;
	p=null;
	if(o===p){f.__proto__=p;};
	return f;
 };
};
