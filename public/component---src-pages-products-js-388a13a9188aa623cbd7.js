(window.webpackJsonp=window.webpackJsonp||[]).push([[4,1],{190:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return l}),a.d(t,"pageQuery",function(){return o});var n=a(0),r=a.n(n);var l=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,this.props.data.contentstackProductList.title),r.a.createElement("img",{src:this.props.data.contentstackProductList.image.url,height:"30%",width:"40%"}),r.a.createElement("h2",null,this.props.data.contentstackProductList.subline),r.a.createElement("p",null,this.props.data.contentstackProductList.description))},n}(r.a.Component),o="758896572"},193:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=(a(190),a(195)),o=a(199),i=a(194),c=function(){return r.a.createElement(i.a,{query:"1226081106",render:function(e){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h3",null,e.contentstackFooter.multi_line)))},data:o})},s=a(200),p=function(){return r.a.createElement(i.a,{query:"1441013988",render:function(e){return r.a.createElement("div",null,r.a.createElement(l.a,null),e.allContentstackProductList.edges.map(function(e,t){return r.a.createElement("div",null,r.a.createElement("a",{href:e.node.url},r.a.createElement("h3",null,e.node.title)),r.a.createElement("img",{src:null!==e.node.image?e.node.image.url:"",height:"30%",width:"40%"}),r.a.createElement("p",null,e.node.subline),r.a.createElement("p",null,e.node.price))}),r.a.createElement(c,null))},data:s})},u=a(201),d=function(){return r.a.createElement(i.a,{query:"2292193669",render:function(e){return r.a.createElement("div",null,r.a.createElement(l.a,null),e.allContentstackProductList.edges.map(function(e,t){return r.a.createElement("div",null,r.a.createElement("a",{href:e.node.url},r.a.createElement("h3",null,e.node.title)),r.a.createElement("img",{src:null!==e.node.image?e.node.image.url:"",height:"30%",width:"40%"}),r.a.createElement("p",null,e.node.subline),r.a.createElement("p",null,e.node.price))}),r.a.createElement(c,null))},data:u})};var h="",m=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).abc=function(e){e.target,h=e.target.value,a.setState({order:h})},a.state={order:"asc"},a}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("select",{onChange:this.abc},r.a.createElement("option",{name:"asce",value:"asc"},"Ascending Order"),r.a.createElement("option",{name:"desc",value:"desc"},"Descending Order"))),"asc"==this.state.order?r.a.createElement(p,null):r.a.createElement(d,null))},n}(r.a.Component);a.d(t,"default",function(){return D}),a.d(t,"pageQuery",function(){return f});var D=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){this.props.data.allContentstackProductList.edges;return r.a.createElement("div",null,r.a.createElement(m,null))},n}(r.a.Component),f="2458755551"},194:function(e,t,a){"use strict";a.d(t,"a",function(){return i});var n=a(0),r=a.n(n),l=(a(66),a(196),a(9).default.enqueue,r.a.createContext({}));function o(e){var t=e.staticQueryData,a=e.data,n=e.query,l=e.render,o=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,o&&l(o),!o&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var i=function(e){var t=e.data,a=e.query,n=e.render,i=e.children;return r.a.createElement(l.Consumer,null,function(e){return r.a.createElement(o,{data:t,query:a,render:n||i,staticQueryData:e})})}},195:function(e,t,a){"use strict";var n=a(197),r=a(0),l=a.n(r),o=a(194);t.a=function(){return l.a.createElement(o.a,{query:"1517287764",render:function(e){return l.a.createElement("div",{className:"main-wrapper"},e.contentstackHeader.menu.map(function(e,t){return l.a.createElement("div",null,l.a.createElement("h3",null,e))}))},data:n})}},196:function(e,t,a){var n;e.exports=(n=a(198))&&n.default||n},197:function(e){e.exports={data:{contentstackHeader:{id:"0f2f22d6-5a71-571f-bb0d-a2106fec6421",menu:["Home","AboutUs","Gallery","Contact"],title:"Menu",uid:"blt09653329b0f6526a"}}}},198:function(e,t,a){"use strict";a.r(t);a(23);var n=a(0),r=a.n(n),l=a(91);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null}},199:function(e){e.exports={data:{contentstackFooter:{title:"footer",multi_line:"Copyright contenstack"}}}},200:function(e){e.exports={data:{allContentstackProductList:{edges:[{node:{title:"Dell Laptop",uid:"blt2094dd3d0aa5a484",url:"/dell-laptop",description:"Dell Inspiron N5010 Reviews, Dell Inspiron 14 3000 (3467) Reviews, Dell Inspiron N5050 Reviews, Dell Inspiron 15 5000 Series Core I3 8th Gen 5570 Laptop Reviews, Dell Inspiron 5370 13.3-Inch Fhd Laptop Reviews, Dell Latitude E6410 Reviews, Dell Latitude E5400 Reviews, Dell Vostro 15 3000 Core I5 8th Gen 3578 Laptop Reviews, Dell Inspiron 15 3000 Series Core I3 7th Gen 3567 Laptop Reviews, Dell Inspiron 15 3567 Reviews",header_title:"dell Laptop",image:{url:"https://images.contentstack.io/v3/assets/bltd928a7a4ba69e525/blta7536fa14036d262/5d4c037c210aaa6bcb3d87f6/dell_laptop.jpg",title:"dell_laptop.jpg"},price:"26000",subline:"Dell Laptop"}},{node:{title:"Acer Laptop",uid:"blta70c70392fa03f89",url:"/acer-laptop",description:"The Acer Aspire E1-571G Core i5 laptop is powered by Intel Core i5 (3rd generation) 2.6 GHz With Turbo Boost up to 3.2 GHz dual core processor and run on Linux OS. It has NVIDIA GeForce GT 710M graphics processor with 2GB DDR3 dedicated graphics memory.\n\nAcer  Aspire E1-571G Core i5 has 4 GB DDR3 RAM, 500 GB HDD and an integrated DVD Drive. It has a 15.6 inch HD TFT LCD Display with LED Backlit with 1366 x 768 pixels resolution.",header_title:"Acer Laptop",image:{url:"https://images.contentstack.io/v3/assets/bltd928a7a4ba69e525/blt22c73ab55f9eb00a/5d4c0422eeefbd6c4e1ab52f/acer_laptop.jpg",title:"acer_laptop.jpg"},price:"36000",subline:"ACER ASPIRE E1-571G CORE I5 BRIEF DESCRIPTION"}},{node:{title:"Hp Laptop",uid:"blt4320cac80540224e",url:"/hp-laptop",description:"HP Pavilion 15-n013TX laptop runs on Windows 8 (64 bit) OS and has Intel Core i5 (4th generation) 1.6 GHz with Intel Turbo boost up to 2.6Ghz processor. The laptop has Nvidia GeForce GT 740M 2GB DDR3 graphics processor. \n \nThe HP Pavilion 15-n013TX notebook has a massive 1 TB HDD, an 8x SuperMulti DVD RW Drive with Dual Layer Support and 4 GB RAM for faster processing. It has a 15.6 inch HD BrightView LED-backlit Display with 1366 x 768 pixels resolution.",header_title:"HP Laptop",image:{url:"https://images.contentstack.io/v3/assets/bltd928a7a4ba69e525/blt195554857cc1e2e7/5d4c043fa82b446c533f252e/hp_laptop.jpg",title:"hp_laptop.jpg"},price:"46000",subline:"HP PAVILION 15-N013TX BRIEF DESCRIPTION"}}]}}}},201:function(e){e.exports={data:{allContentstackProductList:{edges:[{node:{title:"Hp Laptop",uid:"blt4320cac80540224e",url:"/hp-laptop",description:"HP Pavilion 15-n013TX laptop runs on Windows 8 (64 bit) OS and has Intel Core i5 (4th generation) 1.6 GHz with Intel Turbo boost up to 2.6Ghz processor. The laptop has Nvidia GeForce GT 740M 2GB DDR3 graphics processor. \n \nThe HP Pavilion 15-n013TX notebook has a massive 1 TB HDD, an 8x SuperMulti DVD RW Drive with Dual Layer Support and 4 GB RAM for faster processing. It has a 15.6 inch HD BrightView LED-backlit Display with 1366 x 768 pixels resolution.",header_title:"HP Laptop",image:{url:"https://images.contentstack.io/v3/assets/bltd928a7a4ba69e525/blt195554857cc1e2e7/5d4c043fa82b446c533f252e/hp_laptop.jpg",title:"hp_laptop.jpg"},price:"46000",subline:"HP PAVILION 15-N013TX BRIEF DESCRIPTION"}},{node:{title:"Acer Laptop",uid:"blta70c70392fa03f89",url:"/acer-laptop",description:"The Acer Aspire E1-571G Core i5 laptop is powered by Intel Core i5 (3rd generation) 2.6 GHz With Turbo Boost up to 3.2 GHz dual core processor and run on Linux OS. It has NVIDIA GeForce GT 710M graphics processor with 2GB DDR3 dedicated graphics memory.\n\nAcer  Aspire E1-571G Core i5 has 4 GB DDR3 RAM, 500 GB HDD and an integrated DVD Drive. It has a 15.6 inch HD TFT LCD Display with LED Backlit with 1366 x 768 pixels resolution.",header_title:"Acer Laptop",image:{url:"https://images.contentstack.io/v3/assets/bltd928a7a4ba69e525/blt22c73ab55f9eb00a/5d4c0422eeefbd6c4e1ab52f/acer_laptop.jpg",title:"acer_laptop.jpg"},price:"36000",subline:"ACER ASPIRE E1-571G CORE I5 BRIEF DESCRIPTION"}},{node:{title:"Dell Laptop",uid:"blt2094dd3d0aa5a484",url:"/dell-laptop",description:"Dell Inspiron N5010 Reviews, Dell Inspiron 14 3000 (3467) Reviews, Dell Inspiron N5050 Reviews, Dell Inspiron 15 5000 Series Core I3 8th Gen 5570 Laptop Reviews, Dell Inspiron 5370 13.3-Inch Fhd Laptop Reviews, Dell Latitude E6410 Reviews, Dell Latitude E5400 Reviews, Dell Vostro 15 3000 Core I5 8th Gen 3578 Laptop Reviews, Dell Inspiron 15 3000 Series Core I3 7th Gen 3567 Laptop Reviews, Dell Inspiron 15 3567 Reviews",header_title:"dell Laptop",image:{url:"https://images.contentstack.io/v3/assets/bltd928a7a4ba69e525/blta7536fa14036d262/5d4c037c210aaa6bcb3d87f6/dell_laptop.jpg",title:"dell_laptop.jpg"},price:"26000",subline:"Dell Laptop"}}]}}}}}]);
//# sourceMappingURL=component---src-pages-products-js-388a13a9188aa623cbd7.js.map