window.onload = function qlock (){
    const h = new Date();
    const m = new Date();
    
    let min = m.getMinutes()
    let hours = h.getHours()
    console.log( `${hours}:hallo${m.getMinutes()}`)
    
    const esist = document.querySelectorAll(".esist")
    const viertel = document.querySelectorAll(".viertel");
    const vor = document.querySelectorAll(".vor")
    const nach = document.querySelectorAll(".nach")
    const halb = document.querySelectorAll(".halb")
    const fuenfMin = document.querySelectorAll(".fuenf-min")
    const zehnMin = document.querySelectorAll(".zehn-min")
    const zwanzigMin = document.querySelectorAll(".zwanzig-min")
    const einUhr = document.querySelectorAll(".einuhr")
    const zweiUhr = document.querySelectorAll(".zweiuhr")
    const dreiUhr = document.querySelectorAll(".dreiuhr")
    const vierUhr = document.querySelectorAll(".vieruhr")
    const fenfUhr = document.querySelectorAll(".fuenfuhr")
    const sechsUhr = document.querySelectorAll(".sechsuhr")
    const siebenUhr = document.querySelectorAll(".siebenuhr")
    const achtUhr = document.querySelectorAll(".achtuhr")
    const neunUhr = document.querySelectorAll(".neunuhr")
    const zehnUhr = document.querySelectorAll(".zehnuhr")
    const elfUhr = document.querySelectorAll(".elfuhr")
    const zwoelfUhr = document.querySelectorAll(".zwoelfuhr")
    const Uhr = document.querySelectorAll(".Uhr")
    if (min >=35 && min < 60){
        hours++
    } 
    
    if (hours === 1 || hours === 13 ){
    
        for (let i=0; i<einUhr.length ; i++){
    
            einUhr[i].style.color ="red"}
            for (let k=0; k<zwoelfUhr.length ; k++){
                zwoelfUhr[k].style.color ="black"}
    
    
    } else if (hours === 2 || hours === 14 ) {
            for (let i=0; i<zweiUhr.length ; i++){
                zweiUhr[i].style.color ="red"
            }
    
    
            for (let k=0; k<einUhr.length ; k++){
    
                einUhr[k].style.color ="black"}
    } else if (hours === 3 || hours === 15 ) {
    
        for (let i=0; i<dreiUhr.length ; i++){
    
            dreiUhr[i].style.color ="red"
            }
            for (let k=0; k<zweiUhr.length ; k++){
    
                zweiUhr[k].style.color ="black"}
    } else if (hours === 4 || hours === 16 ) {
    
        for (let i=0; i<vierUhr.length ; i++){
    
            vierUhr[i].style.color ="red"
            }
            for (let k=0; k<dreiUhr.length ; k++){
    
                dreiUhr[k].style.color ="black"}
    }else if (hours === 5 || hours === 17  ) {
    
        for (let i=0; i<fuenfUhr.length ; i++){
    
            fuenfUhr[i].style.color ="red"
            }
            for (let k=0; k<vierUhr.length ; k++){
    
                vierUhr[k].style.color ="black"}
    }else if (hours === 6 || hours === 18 ) {
    
        for (let i=0; i< sechsUhr.length ; i++){
    
            sechsUhr[i].style.color ="red"
            }
            for (let k=0; k<fuenfUhr.length ; k++){
    
                fuenfUhr[k].style.color ="black"}
    }else if (hours === 7 || hours === 19 ) {
    
        for (let i=0; i<siebenUhr.length ; i++){
    
            siebenUhr[i].style.color ="red"
            }
            for (let k=0; k<sechsUhr.length ; k++){
    
                sechsUhr[k].style.color ="black"}
    } else if (hours === 8 || hours === 20 ) {
    
        for (let i=0; i<achtUhr.length ; i++){
    
            achtUhr[i].style.color ="red"
            }
            for (let k=0; k<siebenUhr.length ; k++){
    
                siebenUhr[k].style.color ="black"}
    }
    else if (hours === 9 || hours === 21 ) {
    
        for (let i=0; i<neunUhr.length ; i++){
    
            neunUhr[i].style.color ="red"
            }
            for (let k=0; k<achtUhr.length ; k++){
    
                achtUhr[k].style.color ="black"}
    }
    else if (hours === 10 || hours === 22 ) {
    
        for (let i=0; i<zehnUhr.length ; i++){
    
            zehnUhr[i].style.color ="red"
            }
            for (let k=0; k<neunUhr.length ; k++){
    
                neunUhr[k].style.color ="black"}
    }
    else if (hours === 11 || hours === 23 ) {
    
        for (let i=0; i<elfUhr.length ; i++){
    
            elfUhr[i].style.color ="red"
            }
            for (let k=0; k<zehnUhr.length ; k++){
    
                zehnUhr[k].style.color ="black"}
    }
    else if (hours === 12 || hours === 0 ) {
    
        for (let i=0; i<zwoelfUhr.length ; i++){
    
            zwoelfUhr[i].style.color ="red"
            }
            for (let k=0; k<elfUhr.length ; k++){
    
                elfUhr[k].style.color ="black"}
    } 
    if ( min < 05) {
        
        
        for (let k=0; k<fuenfMin.length ; k++){
                
            fuenfMin[k].style.color ="black"}
        for (let j =0; j<vor.length;j++){
        vor[j].style.color ="black"}
    }
     else if (min >= 5 && min < 10) {
        for (let i=0; i<fuenfMin.length ; i++){
    
            fuenfMin[i].style.color ="red"}
            for (let j =0; j<nach.length;j++){
                nach[j].style.color ="red"
            }
            for (let k=0; k<Uhr.length ; k++){
    
                Uhr[k].style.color ="black"
            }
        
} else if (min >= 10 && min < 15) {
        for (let i=0; i<zehnMin.length ; i++){
    
            zehnMin[i].style.color ="red"}
        for (let j =0; j<nach.length;j++){
            nach[j].style.color ="red"}
            for (let k=0; k<fuenfMin.length ; k++){
    
                fuenfMin[k].style.color ="black"}
        }
    
            
     else if (min >= 15 && min < 20) {
        for (let i=0; i<viertel.length ; i++){
    
            viertel[i].style.color ="red"}
        for (let j =0; j<nach.length;j++){
            nach[j].style.color ="red"
        }
        for (let k=0; k<zehnMin.length ; k++){
    
            zehnMin[k].style.color ="black"}
            
    } else if (min >= 20 && min < 25) {
        for (let i=0; i<zwanzigMin.length ; i++){
    
            zwanzigMin[i].style.color ="red"}
        for (let j =0; j<nach.length;j++){
            nach[j].style.color ="red"
        }
        for (let l=0; l<viertel.length ; l++){
    
            viertel[l].style.color ="black"}
            }
     else if (min >= 25 && min < 30) {
        for (let i=0; i<fuenfMin.length ; i++){
    
            fuenfMin[i].style.color ="red"}
        for (let f=0; f<zwanzigMin.length ; f++){
    
            zwanzigMin[f].style.color ="red"}
        for (let j =0; j<nach.length;j++){
            nach[j].style.color ="red"}
            
        
       
            }
            else if (min >= 30 && min < 35) {
                for (let i=0; i<halb.length ; i++){
            
                    halb[i].style.color ="red"
                }
                for (let j=0; j<nach.length;j++){
                    nach[j].style.color ="red"}
                for (let k=0; k<fuenfMin.length ; k++){
    
                    fuenfMin[k].style.color ="black"}
                
            }
                else if (min >= 35 && min < 40) {
                    for (let i=0; i<fuenfMin.length ; i++){
                
                        fuenfMin[i].style.color ="red"}
                    for (let f=0; f<zwanzigMin.length ; f++){
                
                        zwanzigMin[f].style.color ="red"}
                    
                    for (let j =0; j<vor.length;j++){
                        vor[j].style.color ="red"}
                        
                    for (let n=0; n<halb.length ; n++){
            
                        halb[n].style.color ="black"
                    }
                }
                        
     else if (min >= 40 && min < 45) {
        for (let i=0; i<zwanzigMin.length ; i++){
    
            zwanzigMin[i].style.color ="red"}
        for (let j =0; j<vor.length;j++){
        vor[j].style.color ="red"}
        
        for (let k=0; k<fuenfMin.length ; k++){
                
            fuenfMin[k].style.color ="black"}
        
        for (let l =0; l<nach.length;l++){
            nach[l].style.color ="black"}
            for (let q =0; q<halb.length;q++){
                halb[q].style.color ="black"
        }
       
    }
        else if (min >= 45 && min < 50) {
            for (let i=0; i<viertel.length ; i++){
        
                viertel[i].style.color ="red"}
            for (let j =0; j<vor.length;j++){
            vor[j].style.color ="red"}
            for (let k=0; k<zwanzigMin.length ; k++){
    
                zwanzigMin[k].style.color ="black"}
            }
            else if (min >= 50 && min < 55) {
                for (let i=0; i<zehnMin.length ; i++){
            
                    zehnMin[i].style.color ="red"}
                for (let j =0; j<vor.length;j++){
                vor[j].style.color ="red"}
                for (let k=0; k<viertel.length ; k++){
        
                    viertel[k].style.color ="black"}
                
                }
                
                else if (min >= 55 && min < 60) {
                    for (let i=0; i<fuenfMin.length ; i++){
                
                        fuenfMin[i].style.color ="red"}
                    for (let j =0; j<vor.length;j++){
                    vor[j].style.color ="red"}
                    for (let k=0; k<zehnMin.length ; k++){
            
                        zehnMin[k].style.color ="black"}
                    }
                    setTimeout(qlock, 100)
    }