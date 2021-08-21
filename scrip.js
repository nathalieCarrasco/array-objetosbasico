
//Variables y sus respectivos array de objetos

const radiologia = [
    {HORA: '11:00', ESPECIALISTA: 'IGNACIO SCHULZ', PACIENTE: 'FRANCISCA ROJAS', RUT: '9878782-1', PREVISION: 'FONASA'},
    {HORA: '11:30', ESPECIALISTA: 'FEDERICO SUBERCASEAUX', PACIENTE: 'PAMELA ESTRADA', RUT: '15345241-3', PREVISION: 'ISAPRE'},
    {HORA: '15:00', ESPECIALISTA: 'FERNANDO WURTHZ', PACIENTE: 'ARMANDO LUNA', RUT: '16445345-9', PREVISION: 'ISAPRE'},
    {HORA: '15:30', ESPECIALISTA: 'ANA MARIA GODOY', PACIENTE: 'MANUEL GODOY', RUT: '17666419-0', PREVISION: 'FONASA'},
    {HORA: '16:00', ESPECIALISTA: 'PATRICIA SUAZO', PACIENTE: 'RAMON ULLOA', RUT: '14989389-K', PREVISION: 'FONASA'}
];

const traumatologia = [
    {HORA: '8:00', ESPECIALISTA: 'MARIA PAZ ALTUZARRA', PACIENTE: 'PAULA SANCHEZ', RUT: '15554774-5', PREVISION: 'FONASA'},
    {HORA: '10:00', ESPECIALISTA: 'RAUL ARAYA', PACIENTE: 'ANGÉLICA NAVAS', RUT: '15444147-9', PREVISION: 'ISAPRE'},
    {HORA: '10:30', ESPECIALISTA: 'MARIA ARRIAGADA', PACIENTE: 'ANA KLAPP', RUT: '17879423-9', PREVISION: 'ISAPRE'},
    {HORA: '11:00', ESPECIALISTA: 'ALEJANDRO BADILLA', PACIENTE: 'FELIPE MARDONES', RUT: '1547423-6', PREVISION: 'ISAPRE'},
    {HORA: '11:30', ESPECIALISTA: 'CECILIA BUDNIK', PACIENTE: 'DIEGO MARRE', RUT: '16554741-K', PREVISION: 'FONASA'},
    {HORA: '12:00', ESPECIALISTA: 'ARTURO CAVAGNARO', PACIENTE: 'CECILIA MENDEZ', RUT: '9747535-8', PREVISION: 'ISAPRE'},
    {HORA: '12:30', ESPECIALISTA: 'ANDRES KANACRI', PACIENTE: 'MARCIAL SUAZO', RUT: '11254785-5', PREVISION: 'ISAPRE'}
];

const dental = [
    {HORA: '8:30', ESPECIALISTA: 'ANDREA ZUÑIGA', PACIENTE: 'MARCELA RETAMAL', RUT: '11123425-6', PREVISION: 'ISAPRE'},
    {HORA: '11:00', ESPECIALISTA: 'MARIA PIA ZAÑARTU', PACIENTE: 'ANGEL MUÑOZ', RUT: '9878789-2', PREVISION: 'ISAPRE'},
    {HORA: '11:30', ESPECIALISTA: 'SCARLETT WITTING', PACIENTE: 'MARIO KAST', RUT: '7998789-5', PREVISION: 'FONASA'},
    {HORA: '13:00', ESPECIALISTA: 'FRANCISCO VON TEUBER', PACIENTE: 'KARIN FERNANDEZ', RUT: '18887662-K', PREVISION: 'FONASA'},
    {HORA: '13:30', ESPECIALISTA: 'EDUARDO VÑUELA', PACIENTE: 'HUGO SANCHEZ', RUT: '17665461-4', PREVISION: 'FONASA'},
    {HORA: '14:00', ESPECIALISTA: 'RAQUEL VILLASECA', PACIENTE: 'ANA SEPULVEDA', RUT: '14441281-0', PREVISION: 'ISAPRE'}
];

document.write("<h1><b>Estadisticas CentroMedico Ñuñoa</b></h1><br><br>");


//radiologia
    document.write("<h5><b>Atenciones área Radiología</b></h5>", "<br>");
/*primer y ultimo paciente a mostrar por area de salud */
//primer paciente radiología
    document.write( `PRIMERA ATENCION : ${radiologia[0].PACIENTE} <br> RUT : ${radiologia[0].RUT} <br> PREVISION : ${radiologia[0].PREVISION} <br><br>`);
//ultimo paciente radiología
    document.write(`ULTIMA ATENCION : ${radiologia[radiologia.length - 1].PACIENTE} <br> RUT : ${radiologia[radiologia.length - 1].RUT} <br> PREVISION :  ${radiologia[radiologia.length - 1].PREVISION} <br><br> `);

// ingresar datos tabla pero a traves de document
for(let i=0; i<radiologia.length;i++){
    document.write(`<br><b>Hora</b>: ${radiologia[i].HORA} <b>Especialista</b>: ${radiologia[i].ESPECIALISTA} <b>Paciente</b>: ${radiologia[i].PACIENTE} <b>Rut</b>: ${radiologia[i].RUT} <b>Prevision</b>: ${radiologia[i].PREVISION}</p>`)
};


//traumatologia
document.write("<br><br><h5><b>Atenciones área Traumatologia</b></h5>", "<br>");
//primer paciente radiología
document.write(`PRIMERA ATENCION : ${traumatologia[0].PACIENTE} <br> RUT : ${traumatologia[0].RUT} <br> PREVISION : ${traumatologia[0].PREVISION} <br><br>`);
//ultimo paciente radiología
document.write(`ULTIMA ATENCION : ${traumatologia[traumatologia.length - 1].PACIENTE} <br> RUT : ${traumatologia[traumatologia.length - 1].RUT} <br> PREVISION :  ${traumatologia[traumatologia.length - 1].PREVISION} <br><br> `);

// ingresar datos tabla pero a traves de document
for(let i=0; i<traumatologia.length;i++){
    document.write(`<br><b>Hora</b>: ${traumatologia[i].HORA} <b>Especialista</b>: ${traumatologia[i].ESPECIALISTA} <b>Paciente</b>: ${traumatologia[i].PACIENTE}<b> Rut</b>: ${traumatologia[i].RUT}<b> Prevision</b>: ${traumatologia[i].PREVISION}</p>`)
};


//dental
document.write("<br><br><h5><b>Atenciones área Dental </b></h5>", "<br>");
//primer paciente radiología
document.write(`PRIMERA ATENCION : ${dental[0].PACIENTE} <br> RUT : ${dental[0].RUT} <br> PREVISION : ${dental[0].PREVISION} <br><br>`);
//ultimo paciente radiología
document.write(`ULTIMA ATENCION : ${dental[dental.length - 1].PACIENTE} <br> RUT : ${dental[dental.length - 1].RUT} <br> PREVISION :  ${dental[dental.length - 1].PREVISION} <br><br> `);

// ingresar datos tabla pero a traves de document
for(let i=0; i<dental.length;i++){
    document.write(`<br><b>Hora</b>: ${dental[i].HORA} <b>Especialista</b>: ${dental[i].ESPECIALISTA} <b>Paciente</b>: ${dental[i].PACIENTE}<b> Rut</b>: ${dental[i].RUT}<b> Prevision</b>: ${dental[i].PREVISION}</p>`)
};



