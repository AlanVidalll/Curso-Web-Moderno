class Avo {
    constructor(sobreNOme) {
        this.sobreNOme = sobreNOme
    }
}


class Pai extends Avo {
    constructor(sobreNOme, profissao = 'Professor') {
        super(sobreNOme)
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)