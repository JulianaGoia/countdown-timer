export default class Countdown {
  constructor(futureDate) {
    this.futureDate = futureDate;
  }

  //   retorna data atual
  get _actualDate() {
    return new Date();
  }

  get _futureDate() {
    return new Date(this.futureDate);
  }

  //   difrença entre data atual e a data futura - retorna em milisegundos
  get _timeStampDiff() {
    return this._futureDate.getTime() - this._actualDate.getTime();
  }

  //   retornar os milisegundos em dias
  // 24horas * 60min em uma hora *60segs em 1 minuto * 1000milisegundos em 1 segundo
  get days() {
    return Math.floor(this._timeStampDiff / (24 * 60 * 60 * 1000));
  }
  get hours() {
    return Math.floor(this._timeStampDiff / (60 * 60 * 1000));
  }
  get minutes() {
    return Math.floor(this._timeStampDiff / (60 * 1000));
  }
  get seconds() {
    return Math.floor(this._timeStampDiff / 1000);
  }

  get total() {
    const days = this.days;
    //divide o total de horas por 24 e mostra somente o resto
    const hours = this.hours % 24;
    const minutes = this.minutes % 60;
    const seconds = this.seconds % 60;
    return {
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }
}
