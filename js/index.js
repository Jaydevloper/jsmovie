const elForm = document.getElementById('filter-form');
const elSelect = document.getElementById('gender-filter');
const elBtn = document.querySelector('.filter-form__btn');
        

for (i =0; i <= genres.length -1; i++){
    const elOption = create('option','',genres[i].name)
    elOption.value = genres[i].name
    elForm.append(elSelect,elBtn);
    elSelect.append(elOption);
}    

function btn (e){
    e.preventDefault();
    elList.innerHTML ='';
    if (elSelect.value){
        render();
    }
}

elForm.addEventListener('submit', btn);


const elList = document.getElementById('movies-list')
function create (tagname ,clasName ='', content = ' '){
    const newElement = document.createElement(tagname);
    if (clasName){
        newElement.className = (clasName);
    } if (content && typeof  content === 'string' ){
        newElement.textContent = content;
        return newElement;
    }else if (content) {
        newElement.append(content);
        return newElement;
    }
    return newElement;
}

function $rendeer (){
    for (let i = 0; i <= films.length -1; i++){
        const elItem = create('li','movies__item movie-card', );
        const elimg = create('img','movie-card__poster', );
        elimg.src = films[i].poster;
        const elCard = create('div','movie-card__content',);
        const elHead = create('h3','movie-card__title',);
        const elAnker = create('a','movie-card__link',films[i].title);
        elAnker.href = '#';
        const elOver = create('p','movie-card__overview',films[i].overview);
        const elCardlist = create('ul','movie-card__genres','');
        for (let  j=0; j <= films[i].genres.length - 1; j++){
            const elCarditem = create('li','movie-card__genre badge ',films[i].genres[j]);
             elCardlist.append(elCarditem)
        }
        const elTime = create('time','movie-card__release-date',films[i].release_date);
        elList.append(elItem);
        elItem.append(elimg,elCard);
        elCard.append(elHead,elAnker,elOver,elCardlist,elTime);

        elItem.addEventListener('click', () =>{
            elList.classList.add('filim-style__wrap')
            elList.classList.add('container')
            document.body.innerHTML = '';
            if (true){
                const elItem = create('li','movies__item movie-card filim-style__item', );
                const elimg = create('img','movie-card__poster', );
                elimg.src = films[i].poster;
                const elCard = create('div','movie-card__content  ',);
                const elHead = create('h3','movie-card__title',);
                const elAnker = create('a','movie-card__link',films[i].title);
                const elOver = create('p','movie-card__overview',films[i].overview);
                const elCardlist = create('ul','movie-card__genres','');
                for (let  j=0; j <= films[i].genres.length - 1; j++){
                    const elCarditem = create('li','movie-card__genre badge ',films[i].genres[j]);
                     elCardlist.append(elCarditem)
                }
                const elTime = create('time','movie-card__release-date',films[i].release_date);
                const elIfrname = create('iframe','filim-style','');
                    elIfrname.src =  films[i].src;
                    elIfrname.width =  "700";
                    elIfrname.height =  "500";
                    elIfrname.setAttribute('allowFullScreen','')
                    document.body.append(elItem,elIfrname);
                    elItem.append(elimg,elCard);
                    elCard.append(elHead,elAnker,elOver,elCardlist,elTime)
            } if (true){
                const elItem = create('li','movies__item movie-card filim-style__item', );
                const elimg = create('img','movie-card__poster', );
                elimg.src = films[i].poster;
                const elCard = create('div','movie-card__content',);
                const elHead = create('h3','movie-card__title',);
                const elAnker = create('a','movie-card__link',films[i+1].title);
                const elOver = create('p','movie-card__overview',films[i+1].overview);
                const elCardlist = create('ul','movie-card__genres','');
                for (let  j=0; j <= films[i].genres.length - 1; j++){
                    const elCarditem = create('li','movie-card__genre badge ',films[i].genres[j]);
                     elCardlist.append(elCarditem)
                }
                const elTime = create('time','movie-card__release-date',films[i].release_date);
                document.body.append(elList);
                elList.append(elItem)
                elItem.append(elimg,elCard);
                elCard.append(elHead,elAnker,elOver,elCardlist,elTime);
              
            }
         
       
      })   
    }
        
}

function render(){
    for (let i = 0; i <= films.length -1; i++){
        if (films[i].genres.includes(elSelect.value)){
            const elItem = create('li','movies__item movie-card', );
            const elimg = create('img','movie-card__poster', );
            elimg.src = films[i].poster;
            const elCard = create('div','movie-card__content',);
            const elHead = create('h3','movie-card__title',);
            const elAnker = create('a','movie-card__link',films[i].title);
            const elOver = create('p','movie-card__overview',films[i].overview);
            const elCardlist = create('ul','movie-card__genres','');
            for (let  j=0; j <= films[i].genres.length - 1; j++){
                const elCarditem = create('li','movie-card__genre badge ',films[i].genres[j]);
                 elCardlist.append(elCarditem)
            }
            const elTime = create('time','movie-card__release-date',films[i].release_date)
            elList.append(elItem);
            elItem.append(elimg,elCard);
            elCard.append(elHead,elAnker,elOver,elCardlist,elTime,);
            elItem.addEventListener('click', () =>{
                elList.classList.toggle('filim-style__wrap')
                elList.classList.toggle('container')
                document.body.innerHTML = '';
                if (true){
                    const elItem = create('li','movies__item movie-card filim-style__item', );
                    const elimg = create('img','movie-card__poster', );
                    elimg.src = films[i].poster;
                    const elCard = create('div','movie-card__content  ',);
                    const elHead = create('h3','movie-card__title',);
                    const elAnker = create('a','movie-card__link',films[i].title);
                    const elOver = create('p','movie-card__overview',films[i].overview);
                    const elCardlist = create('ul','movie-card__genres','');
                    for (let  j=0; j <= films[i].genres.length - 1; j++){
                        const elCarditem = create('li','movie-card__genre badge ',films[i].genres[j]);
                         elCardlist.append(elCarditem)
                    }
                    const elTime = create('time','movie-card__release-date',films[i].release_date);
                    const elIfrname = create('iframe','filim-style','');
                    elIfrname.src =  films[i].src;
                    elIfrname.width =  "700";
                    elIfrname.height =  "500";
                    elIfrname.setAttribute('allowFullScreen','')
                    document.body.append(elItem,elIfrname);
                    elItem.append(elimg,elCard);
                    elCard.append(elHead,elAnker,elOver,elCardlist,elTime);
                } if (elList){
                    const elItem = create('li','movies__item movie-card filim-style__item', );
                    const elimg = create('img','movie-card__poster', );
                    elimg.src = films[i].poster;
                    const elCard = create('div','movie-card__content',);
                    const elHead = create('h3','movie-card__title',);
                    const elAnker = create('a','movie-card__link',films[i+1].title);
                    const elOver = create('p','movie-card__overview',films[i+1].overview);
                    const elCardlist = create('ul','movie-card__genres','');
                    for (let  j=0; j <= films[i].genres.length - 1; j++){
                        const elCarditem = create('li','movie-card__genre badge ',films[i].genres[j]);
                         elCardlist.append(elCarditem)
                    }
                    const elTime = create('time','movie-card__release-date',films[i].release_date);
                    document.body.append(elList);
                    elList.append(elItem)
                    elItem.append(elimg,elCard);
                    elCard.append(elHead,elAnker,elOver,elCardlist,elTime);
                }
           
          })  
        }else if (elSelect.value == "All"){
                    const elItem = create('li','movies__item movie-card', );
                    const elimg = create('img','movie-card__poster', );
                    elimg.src = films[i].poster;
                    const elCard = create('div','movie-card__content',);
                    const elHead = create('h3','movie-card__title',);
                    const elAnker = create('a','movie-card__link',films[i].title);
                    const elOver = create('p','movie-card__overview',films[i].overview);
                    const elCardlist = create('ul','movie-card__genres','');
                    for (let  j=0; j <= films[i].genres.length - 1; j++){
                        const elCarditem = create('li','movie-card__genre badge ',films[i].genres[j]);
                         elCardlist.append(elCarditem)
                    }
                    const elTime = create('time','movie-card__release-date',films[i].release_date);

                    elList.append(elItem);
                    elItem.append(elimg,elCard);
                    elCard.append(elHead,elAnker,elOver,elCardlist,elTime);
                    elItem.addEventListener('click', () =>{
                        elList.classList.toggle('filim-style__wrap')
                        elList.classList.toggle('container')
                        document.body.innerHTML = '';
                        if (true){
                            const elItem = create('li','movies__item movie-card filim-style__item', );
                            const elimg = create('img','movie-card__poster', );
                            elimg.src = films[i].poster;
                            const elCard = create('div','movie-card__content  ',);
                            const elHead = create('h3','movie-card__title',);
                            const elAnker = create('a','movie-card__link',films[i].title);
                            const elOver = create('p','movie-card__overview',films[i].overview);
                            const elCardlist = create('ul','movie-card__genres','');
                            for (let  j=0; j <= films[i].genres.length - 1; j++){
                                const elCarditem = create('li','movie-card__genre badge ',films[i].genres[j]);
                                 elCardlist.append(elCarditem)
                            }
                            const elTime = create('time','movie-card__release-date',films[i].release_date);
                            const elIfrname = create('iframe','filim-style','');
                            elIfrname.src =  films[i].src;
                            elIfrname.width =  "700";
                            elIfrname.height =  "500";
                            elIfrname.setAttribute('allowFullScreen','')
                            document.body.append(elItem,elIfrname);
                            elItem.append(elimg,elCard);
                            elCard.append(elHead,elAnker,elOver,elCardlist,elTime);
                        } if (elList){
                            const elItem = create('li','movies__item movie-card filim-style__item', );
                            const elimg = create('img','movie-card__poster', );
                            elimg.src = films[i].poster;
                            const elCard = create('div','movie-card__content',);
                            const elHead = create('h3','movie-card__title',);
                            const elAnker = create('a','movie-card__link',films[i+1].title);
                            const elOver = create('p','movie-card__overview',films[i+1].overview);
                            const elCardlist = create('ul','movie-card__genres','');
                            for (let  j=0; j <= films[i].genres.length - 1; j++){
                                const elCarditem = create('li','movie-card__genre badge ',films[i].genres[j]);
                                 elCardlist.append(elCarditem)
                            }
                            const elTime = create('time','movie-card__release-date',films[i].release_date);
                            document.body.append(elList);
                            elList.append(elItem)
                            elItem.append(elimg,elCard);
                            elCard.append(elHead,elAnker,elOver,elCardlist,elTime);
                        }
                   
                  }) 
                }
        }
        } 

$rendeer();
    
    
            