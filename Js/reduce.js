const names =[
    'Anis',
    'Abu',
    'Khair',
    'Kamrul',
    'Lipi',
    'Laila',
    'Romisa',
    'Rabby',
    'Rubayat',
    'Samima',
    'Shamoly',
    'Arafat',
    'Farzana',
    'Faiza',
    'Jannat',
    'Junayed'
]


const namesGroups = names.reduce((acc,cur)=>{
    const firstLetter = cur[0].toUpperCase();
    if (firstLetter in acc) {
        acc[firstLetter].push(cur)
    }
    else{
        acc[firstLetter] = [cur]
        
    }
    return acc

},{})

Object.keys(namesGroups).forEach(groupKey=>{
    console.log('-------------', groupKey ,'-------------')
    namesGroups[groupKey].forEach(name=>{
        console.log(name +', ')
    })
    console.log('\n')
})
