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



//> Object.defineProperties
