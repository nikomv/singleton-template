class Singleton {
  PAGES = {
    Главная: 0,
    "Покупка билетов": 0,
  };

  //Ограничение возможности повторного создания экземпляра Singleton
  constructor() {
    if (typeof Singleton.instance === "object") {
      return Singleton.instance;
      console.log("Singleton already created!");
    }
    Singleton.instance = this;
    console.log("Singleton created!");
    return Singleton.instance;
  }

  getSingleton() {
    return this.PAGES;
  }

  //Фиксирование посещения опред. страницы
  incSingleton(page) {
    this.PAGES[page]++;
  }
}

export default Singleton;
