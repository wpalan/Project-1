const imagen=document.querySelectorAll('.caja');

imagen.addEventListener('dragstart', dragStart);

function dragStart() {
    e.dataTransfer.setData('Text', e.target.id);
    e.target.classList.add('hide');
};

const cajas = document.querySelectorAll('.cajagris');

cajas.forEach(caja =>{
    caja.addEventListener('dragenter', dragEnter);
    caja.addEventListener('dragover', dragOver);
    caja.addEventListener('dragleave', dragLeave);
    caja.addEventListener('drop', drop);
});

function dragEnter(e) {
    e.preventDefault();
    e.tartget.classList.add('drag-over');
    
};

function dragOver(e){
    e.preventDefault();
    e.target.classList.add('drag-over');
};

function dragLeave(e) {
    e.target.classList.remove('drag-over');
};

function drop(e) {
    e.target.classList.remove('drag-over');


    const id = e.dataTransfer.getData('Text');
    
    const draggable = document.querySelectorAll('.caja');

    e.target.appendChild(draggable);

};

dragEnter()
dragOver()
dragLeave()
drop()

