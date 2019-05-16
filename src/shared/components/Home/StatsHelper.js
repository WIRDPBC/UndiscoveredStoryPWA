/**
 * Created By Nikita Mittal
 * 16th May 2019
 */

export const getStatsData = (list, month) => {
    let statsList = []
    let dateObj = {}
    let resultDateObj = {}
    let earnedTokens = 0
    console.log("Stats Helper list", list)
    list.forEach((listItem, index) => {
        let dayFromDate = listItem.date.replace(/-.+/g,"")
        dayFromDate = parseInt(dayFromDate)
        dateObj[dayFromDate] = dateObj[dayFromDate] ? dateObj[dayFromDate] + listItem.earned : listItem.earned
        resultDateObj[dayFromDate] = [dayFromDate, dateObj[dayFromDate]]
    })
    let days = getDays(month)
    for(let i=1;i<=days;i++){
        resultDateObj[i] = resultDateObj[i] && resultDateObj[i].length ? resultDateObj[i] : [i,0]
    }

    statsList = Object.values(resultDateObj)
    console.log(statsList)
    return statsList

}

const calculateLeapYearDays = (year) => {
    if(year%4 === 0){
        if(year%100 === 0){
            if(year%400 === 0){
                return 29
            } else{
                return 28
            }
        } else{
            return 29
        }
    } else{
        return 28
    }
}


const getDays = (month) => {
    let days = 0
    switch(month){
        case 0:{
            days = 31
            break;
        }    
        case 1:{
            days = calculateLeapYearDays(2019)
            break;
        }
        case 2:{
            days = 31
            break;
        }
        case 3:{
            days = 30
            break;
        }
        case 4:{
            days = 31
            break
        }
        case 5:{
            days = 30
            break;
        }
        case 6:{
            days = 31
            break;
        }
        case 7:{
            days = 31
            break
        }
        case 8:{
            days = 30
            break;
        }
        case 9:{
            days = 31
            break;
        }
        case 10:{
            days = 30
            break;
        }
        case 11:{
            days = 31
            break;
        }

    }
    return days
}