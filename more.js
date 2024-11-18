function toggleMenu() {
   var menu = document.getElementById("menu");
   menu.classList.toggle("show");
   let a = document.getElementById("spantitle");
   
   if(menu.classList.contains("show")){
      a.innerHTML="Less";
   }else{
      a.innerHTML="More";
   }


   let b = document.getElementById("svgchevron");
   if(menu.classList.contains("show")){
      b.innerHTML=`<svg width="19px" style="padding:10px;" fill="#000000" id="svgchevron" class="category-item-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>`;
   }else{
      b.innerHTML=`<svg id="svgchevron" class="category-item-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></svg>`;
   }
    
}

