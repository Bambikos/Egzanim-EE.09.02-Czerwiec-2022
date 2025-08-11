const button_kolor = document.getElementById('button_kolor').addEventListener("click", kolor)

function kolor(){
    const hValue = document.getElementById('barwy').value;  // Zmieniono id na 'barwy'

if(hValue > 360 || hValue < 0){
    alert("Podano nie prawidłową wartość");
}else{
    
        const tableRows = document.querySelectorAll('table tr');

        // Pierwszy wiersz - ustaw S na 100% dla każdej komórki
        const firstRowCells = tableRows[0].querySelectorAll('td');
        firstRowCells.forEach(cell => {
            cell.style.backgroundColor = `hsl(${hValue}, 100%, 50%)`;
        });

        // Drugi wiersz - różne wartości S (od 80% do 20%)
        const secondRowCells = tableRows[1].querySelectorAll('td');
        const sValues = [80, 60, 40, 20];
        secondRowCells.forEach((cell, index) => {
            const s = sValues[index];
            cell.style.backgroundColor = `hsl(${hValue}, ${s}%, 50%)`;
        });
    }
}
