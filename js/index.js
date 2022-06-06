const elForm = document.getElementById('filter-form');
const elSelect = document.getElementById('gender-filter');
const elForms = document.getElementById('forms')
const elSearch = document.getElementById('search')
const elBtn = document.querySelector('.filter-form__btn');
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

const arrayGener  =  genres
arrayGener.forEach((e) => {
    const elOption =create('option','', e.name)
    elOption.value =e.name
    elForm.append(elSelect,elBtn);
    elSelect.append(elOption);
});

function btn (e){
    e.preventDefault();
    elList.innerHTML ='';
    if (elSelect.value){
        renderBtn();
    }
}

elForm.addEventListener('submit', btn);

function render (i){
    const elItem = create('li','movies__item movie-card', );
        const elimg = create('img','movie-card__poster', );
        elimg.src = i.poster;
        const elCard = create('div','movie-card__content',);
        const elHead = create('h3','movie-card__title',);
        const elAnker = create('a','movie-card__link',i.title);
        elAnker.href = '#';
        const elOver = create('p','movie-card__overview',i.overview);
        const elCardlist = create('ul','movie-card__genres','');
        for (let  j=0; j <= i.genres.length - 1; j++){
            const elCarditem = create('li','movie-card__genre badge ',i.genres[j]);
             elCardlist.append(elCarditem)
        }
        const elTime = create('time','movie-card__release-date',i.release_date);
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
                elimg.src = i.poster;
                const elCard = create('div','movie-card__content  ',);
                const elHead = create('h3','movie-card__title',);
                const elAnker = create('a','movie-card__link',i.title);
                const elOver = create('p','movie-card__overview',i.overview);
                const elCardlist = create('ul','movie-card__genres','');
                for (let  j=0; j <= i.genres.length - 1; j++){
                    const elCarditem = create('li','movie-card__genre badge ',i.genres[j]);
                     elCardlist.append(elCarditem)
                }
                const elTime = create('time','movie-card__release-date',i.release_date);
                const elIfrname = create('iframe','filim-style','');
                    elIfrname.src =  i.src;
                    elIfrname.width =  "700";
                    elIfrname.height =  "500";
                    elIfrname.setAttribute('allowFullScreen','')
                const elBten = create('a','filim-style__link','Back');
                    elBten.href = 'javascript:timedRefresh(1000)'
                    document.body.append(elItem,elIfrname,elBten);
                    elItem.append(elimg,elCard);
                    elCard.append(elHead,elAnker,elOver,elCardlist,elTime)
            } if (true){
                const elItem = create('li','movies__item movie-card filim-style__item', );
                const elimg = create('img','movie-card__poster', );
                elimg.src = i.poster;
                const elCard = create('div','movie-card__content',);
                const elHead = create('h3','movie-card__title',);
                const elAnker = create('a','movie-card__link',i.title);
                const elOver = create('p','movie-card__overview',i.overview);
                const elCardlist = create('ul','movie-card__genres','');
                for (let  j=0; j <= i.genres.length - 1; j++){
                    const elCarditem = create('li','movie-card__genre badge ',i.genres[j]);
                     elCardlist.append(elCarditem)
                }
                const elTime = create('time','movie-card__release-date',i.release_date);
                document.body.append(elList);
                elList.append(elItem)
                elItem.append(elimg,elCard);
                elCard.append(elHead,elAnker,elOver,elCardlist,elTime);
            }
      })   
}

function $rendeer (){
    const arrayElement = films
    arrayElement.forEach(element =>{
        render(element)
    })
}


function renderBtn(){
        
    const arrayIf = films;
     arrayIf.filter(elementIf => {
         if (elSelect.value == 'All'){
              render(elementIf);
             }
        return elementIf.genres.includes(elSelect.value)  && render(elementIf);
    })
        
        
}
        // elForms qidiruv kodi
        elForms.addEventListener('submit', (e) =>{
            e.preventDefault();
            elList.innerHTML = ''
            const arrayEvent = films
            arrayEvent.filter(elementEvent => {
               
                if (elementEvent.overview.includes(elSearch.value)){
                    render(elementEvent)
                }
                if (!elementEvent.overview.includes(elSearch.value) ||!elementEvent.title.includes(elSearch.value) ){
                    elForms.classList.toggle('site-header__form--failid')
                }
            
             if (elementEvent.title){
                return  elementEvent.title.includes(elSearch.value) && render(elementEvent);
            }
               
                
            })

            })

        function timedRefresh(timeoutPeriod) {
            setTimeout("location.reload(true);",timeoutPeriod);
        }

$rendeer();
    
    
                