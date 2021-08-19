// funcion que imprime la taBLA
function printTable(id,arrEsp){
    let containerTable = document.getElementById(id)
    //crear la tabla
    let table = createTable("table",'table-striped')
    //let header = createHeader(['#',"Hora",'Especialista','Paciente','Rut','Previcion'])
    let header = createHeader(getKeysArrayObject(arrEsp))
    let body = createBody(arrEsp)
    table.appendChild(header)
    table.appendChild(body)
    containerTable.appendChild(table)

} 
// funcion para crear la tabla 
function createTable(classTable,class2){
    let table = document.createElement('table')
    table.classList.add(classTable)
    table.classList.add(class2)
    return table
}
// funcion que crea componente header table
function createHeader(list){
    let tHead = document.createElement('thead')
    let tr = document.createElement('tr')

    for(element of list){
        let header = document.createElement('th')
        header.setAttribute('scope','col')
        header.textContent= element
        tr.appendChild(header)
    }

    tHead.appendChild(tr)

    return tHead

}
// crear el cuerpo de la tabla
function createBody(Especialidades){
    let tBody = document.createElement('tbody')

    Especialidades.forEach((especialidad,index)=>{
        let tr = document.createElement('tr');
        let th = document.createElement('th');
        th.setAttribute('scope','row')
        th.textContent = index +1
        tr.appendChild(th)

        for(llave in especialidad){
            let td = document.createElement('td')
            td.textContent = especialidad[llave]
            tr.appendChild(td)
        }

        tBody.appendChild(tr)

    })

    return tBody
}

function getKeysArrayObject(arrObject){
    let arrayKeys = []
    arrayKeys.push("")
    for(my_object of arrObject){
        for(key in my_object){
            // console.log(key)
            arrayKeys.push(key)
        }
        break;
    }

    return arrayKeys
};

printTable('containerTable2', radiologia);
printTable('containerTable3', dental);
printTable('containerTable1', traumatologia);

/* profe tambien lo hize desplegando tabla pero no pude acomodar bien en su pocision por esta vez 
adopte la otra manera pero quize dejarlo igual para despues seguir desarrollandolo */