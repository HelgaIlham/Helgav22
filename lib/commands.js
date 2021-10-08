
const fs = require("fs");




const addCommands = (soal, jawaban, sender, _dir) => {
     let owh = { commands: soal, jawaban: jawaban, created: sender }
      _dir.push(owh)
     fs.writeFileSync('./database/commands.json', JSON.stringify(_dir, null, 2))
}

const getJawabanCmd = (soal, _db) => {
    let found = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].commands === soal) {
            found = i
        }
    })
    if (found !== false) {
        return _db[found].jawaban
    }
}

const getSoalCmd = (soal, _db) => {
    let found = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].commands === soal) {
            found = i
        }
    })
    if (found !== false) {
        return _db[found].soal
    }
}

const getCommandsPosi = (soal, _db) => {
    let position = null
    Object.keys(_db).forEach((i) => {
        if (_db[i].commands === soal) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const checkCommands = (soal, _db) => {
    let status = false
    Object.keys(_db).forEach((i) => {
            if (_db[i].commands === soal) {
            status = true
        }
    })
    return status
}

const isCreated = (soal, sender, _db) => {
    let status = true
    Object.keys(_db).forEach((i) => {
            if (_db[i].commands === soal) {
            if (_db[i].created === sender)
            status = false
        }
    })
    return status
}

const deleteCommands = (soal, _db) => {
      _db.splice(getCommandsPosi(soal, _db), 1)
      fs.writeFileSync('./database/commands.json', JSON.stringify(_db, null, 2))
      
}

module.exports = {
      addCommands,
      getJawabanCmd,
      getSoalCmd,
      getCommandsPosi,
      checkCommands,
      isCreated,
      deleteCommands
}