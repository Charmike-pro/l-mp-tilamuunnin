function laske(){

    let luku1 = document.getElementById('luku1').value * 1;
    let toiminto = document.getElementById('toiminto').value;
    let tulos = '';
    

    if (toiminto == 'valitse'){
        tulos ='<font color=red><b>Et valinnut toimintoa!</b></font>'
        
    } else if (toiminto == 'fc'){
        tulos = fc(luku1);
    }
    else if (toiminto == 'cf'){
        tulos = cf(luku1);
    }

    else if (toiminto == 'fk'){
        tulos = fk(luku1);
    }

    else if (toiminto == 'kc'){
        tulos = kc(luku1);
    }

    else if (toiminto == 'kf'){
        tulos = kf(luku1);
    }

    else if (toiminto == 'ck'){
        tulos = ck(luku1);
    }


    tulostaVastaus(tulos);

}

function fc(x){
    return (x - 32) / 1.8;
}

function cf(x){
    return x * 1.8 + 32;
}

function fk(x){
    return (x + 459.67) / 1.8;
}

function kf(x){
    return x * 1.8 - 459.67;
}

function kc(x){
    return x - 273.15;
}

function ck(x){
    return x + 273.15;
}

function tulostaVastaus(vastaus){
    document.getElementById('vastaus').innerHTML = vastaus
}

