var dropZones = document.querySelectorAll('.dropZone');
dropZones.forEach((dropZone) => {
    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        console.log("Mouse Entro")
        dropZone.style.backgroundColor = 'blue'
    });
    
    dropZone.addEventListener('dragleave', () => {
        console.log("Mouse Salio")
        dropZone.style.backgroundColor = 'grey'
    });  

    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();

        var draggedElementId = e.dataTransfer.getData('text/plain');
        var draggedElement = document.getElementById(draggedElementId);
        console.log('El elemento arrastrado es:', draggedElement);
        draggedElement.remove()

        
        var files = e.dataTransfer.files;
        if (files.length > 0) {
            console.log(files.length + " Archivos cargados")
            console.log(files)
            var file = files[0];
            var reader = new FileReader();

            reader.onload = (e) => {
                dropZone.style.backgroundImage = 'url(' + e.target.result + ')'
                dropZone.style.backgroundSize = 'cover'
                dropZone.style.backgroundPosition = 'center'
            };
            
            reader.readAsDataURL(file)
        }
    })
})

var images = document.querySelectorAll('img[draggable="true"]');
images.forEach((img) => {
    img.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', e.target.id);
        console.log(e.target.id)
    });
});


function reiniciar(){
    window.location.reload()
}