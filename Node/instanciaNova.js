// Uma factory retorna um novo objeto e não faz cash...
module.exports = () => {
    return {
        valor: 1,
        inc() {
            this.valor++
        }
    }
}